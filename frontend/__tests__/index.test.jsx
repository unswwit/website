import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a loading screen', () => {
    render(<Home />)

    const loadingScreen = screen.getByRole('img', {
      name: /Walking Willow the wombat/i,
    })

    expect(loadingScreen).toBeInTheDocument()
  })
})