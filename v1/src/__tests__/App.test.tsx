import { describe, it, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('demo', () => {
  expect(true).toBe(true);
});

describe('render', () => {
  it('renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();

    expect(screen.getByText('Routed TS React App')).toBeDefined();

    // screen.debug();
  });
});
