import { render, screen } from '@testing-library/react'

import UpComing from '.'

describe('<UpComing />', () => {
  it('should render the heading', () => {
    const { container } = render(<UpComing />)

    expect(screen.getByRole('heading', { name: /UpComing/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})