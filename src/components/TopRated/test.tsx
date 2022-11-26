import { render, screen } from '@testing-library/react'

import TopRated from '.'

describe('<TopRated />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopRated />)

    expect(screen.getByRole('heading', { name: /TopRated/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})