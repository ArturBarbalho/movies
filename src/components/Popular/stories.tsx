import { Story, Meta } from '@storybook/react/types-6-0'
import { MockResults } from '../../mocks/results';
import Popular from './index';

export default {
  title: 'Popular',
  component: Popular
} as Meta

export const Default: Story = () => <Popular popular={MockResults} />