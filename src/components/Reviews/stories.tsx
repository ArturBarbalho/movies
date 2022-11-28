import { Story, Meta } from '@storybook/react/types-6-0'
import Reviews from '.'
import { MockReviews } from '../../mocks/reviews';

export default {
  title: 'Reviews',
  component: Reviews
} as Meta

export const Default: Story = () => <Reviews reviews={MockReviews} />