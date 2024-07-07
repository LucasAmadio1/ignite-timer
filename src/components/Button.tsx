import { ButtonContainer, ButtonVarriant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVarriant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
