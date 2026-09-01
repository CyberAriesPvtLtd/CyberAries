import { render, screen } from '@testing-library/react';
import React from 'react';
import HROnboarding from './pages/HROnboarding';

// Mock window.matchMedia if needed by components
beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
});

test('renders HR Onboarding header and submit button', () => {
  render(<HROnboarding />);
  expect(screen.getByText(/Employee & Intern Onboarding/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit Information/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Code of Conduct/i).length).toBeGreaterThan(0);
});
