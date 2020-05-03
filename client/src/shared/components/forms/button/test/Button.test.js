import React from 'react';
import { fireEvent, render  } from '@testing-library/react';
import Button from '../index';

describe('Test - Button', () => {
  it('Button render correctly', () => {
    let buttonValue = 1;
    const onClick = () => {
      buttonValue = 2;
    };
    const { container } = render(<Button id="btntestbutton" value="hi" onClick={onClick} />);
    const button = container.firstChild;
    expect(button.textContent).toBe('hi');
    fireEvent.click(button)
    expect(buttonValue).toBe(2);
  });
});
