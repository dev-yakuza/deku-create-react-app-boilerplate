import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { errorMessageState } from 'data/ErrorMessage'
import { RecoilRoot, useSetRecoilState } from 'recoil'

import { ErrorMessage } from '.'

export default {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

interface TestComponentProps {
  readonly errorMessage: string
}
const TestComponent = ({ errorMessage }: TestComponentProps) => {
  const setErrorMessage = useSetRecoilState(errorMessageState)

  return (
    <>
      <ErrorMessage />
      <button onClick={() => setErrorMessage(errorMessage)}>Show</button>
    </>
  )
}

const Template: ComponentStory<typeof TestComponent> = (args) => (
  <RecoilRoot>
    <TestComponent {...args} />
  </RecoilRoot>
)

export const Default = Template.bind({})
Default.args = {
  errorMessage: 'This is a sample error message',
}
