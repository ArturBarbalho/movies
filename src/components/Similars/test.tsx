import { render, screen } from '@testing-library/react'

import Similars from '.'

describe('<Similars />', () => {
  it('should render the heading', () => {
    const { container } = render(<Similars />)

    expect(screen.getByRole('heading', { name: /Similars/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})