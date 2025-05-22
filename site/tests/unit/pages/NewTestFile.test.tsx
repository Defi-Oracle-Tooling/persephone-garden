import { render, screen } from '@testing-library/react';
import Component from '../../../src/pages/component';

describe('Component Page', () => {
  it('renders the component correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});