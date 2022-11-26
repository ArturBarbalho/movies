import { render, screen } from '@testing-library/react'

import Lasted from '.'

describe('<Lasted />', () => {
  it('should render the heading', () => {
    const { container } = render(<Lasted />)

    expect(screen.getByRole('heading', { name: /Lasted/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})