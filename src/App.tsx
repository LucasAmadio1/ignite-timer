import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger"></Button>
      <Button variant="success"></Button>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
