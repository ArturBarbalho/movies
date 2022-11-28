import { Story, Meta } from '@storybook/react/types-6-0'
import Details from '.'
import { GenresMock } from '../../mocks/genres';
import { MockresultDetails } from '../../mocks/resultDetails';

export default {
  title: 'Details',
  component: Details
} as Meta

export const Default: Story = () => <Details data={MockresultDetails} genres={GenresMock}/>