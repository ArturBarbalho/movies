import { Story, Meta } from '@storybook/react/types-6-0'
import Similars from '.'
import { MockResults } from '../../mocks/results'

export default {
  title: 'Similars',
  component: Similars
} as Meta

export const Default: Story = () => <Similars similars={MockResults} />