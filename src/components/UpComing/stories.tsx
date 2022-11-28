import { Story, Meta } from '@storybook/react/types-6-0'
import UpComing from '.'
import { MockResults } from '../../mocks/results';
import { GenresMock } from '../../mocks/genres';

export default {
  title: 'UpComing',
  component: UpComing
} as Meta

export const Default: Story = () => <UpComing  data={MockResults} genres={GenresMock} />