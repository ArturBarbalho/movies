import { Story, Meta } from '@storybook/react/types-6-0'
import TopRated from '.'
import { MockResults } from '../../mocks/results';

export default {
  title: 'TopRated',
  component: TopRated
} as Meta

export const Default: Story = () => <TopRated data={MockResults} />