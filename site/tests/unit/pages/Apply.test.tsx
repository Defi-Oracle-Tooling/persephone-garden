import { render, screen } from '@testing-library/react';
import Apply from '../../../src/pages/apply';

describe('Apply Page', () => {
  it('renders the application form', () => {
    render(<Apply />);
    expect(screen.getByText('Apply for Membership')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Why do you want to join?')).toBeInTheDocument();
  });
});