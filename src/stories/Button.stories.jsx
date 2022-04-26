import StyledButton from "../components/common/StyledButton"

export default {
  title: 'StyledButton',
  component: StyledButton
}

export const ButtonFormSubmit = () => <StyledButton variant="form-submit">Submit</StyledButton>
export const ButtonNegative = () => <StyledButton variant="negative">Negative</StyledButton>