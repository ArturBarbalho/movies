import { render, screen } from '@testing-library/react'

import Reviews from '.'

describe('<Reviews />', () => {
  it('should render the heading', () => {
    const { container } = render(<Reviews />)

    expect(screen.getByRole('heading', { name: /Reviews/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})