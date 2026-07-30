import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Bold Lead Concepts brand and contact information', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /empowering grassroots entrepreneurs/i })).toBeInTheDocument();
  expect(screen.getByText(/09013960304/i)).toBeInTheDocument();
  expect(screen.getByText(/boldleadconcepts@gmail.com/i)).toBeInTheDocument();
});
