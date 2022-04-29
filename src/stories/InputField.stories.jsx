import InputField from "../components/common/InputField"

export default {
  title: 'Components/Input Field',
  component: InputField
}

export const InputBlank = () => <InputField />
export const InputFullWidth = () => <InputField fullWidth />
export const InputWithPlaceholder = () => <InputField fullwidth placeholder="input here" />