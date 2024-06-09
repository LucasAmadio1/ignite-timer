import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(prevState: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...prevState,
      //   cycles: [...prevState.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }

      return produce(prevState, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...prevState,
        cycles: prevState.cycles.map((cycle) => {
          if (cycle.id === prevState.activeCycleId) {
            return { ...prevState, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...prevState,
        cycles: prevState.cycles.map((cycle) => {
          if (cycle.id === prevState.activeCycleId) {
            return { ...prevState, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    default:
      return prevState
  }
}
