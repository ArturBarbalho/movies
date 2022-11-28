import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'
import { MockResults } from '../../mocks/results';
import { GenresMock } from '../../mocks/genres';

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story = () => <Header data={MockResults} genres={GenresMock}/>