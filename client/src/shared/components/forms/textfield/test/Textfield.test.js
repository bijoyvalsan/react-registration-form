import React from 'react';
import { fireEvent, render, getByTestId  } from '@testing-library/react';
import TextField from '../index';

describe('Test - TextField', () => {
  it('TextField render correctly', () => {
    let textFieldValue = 1;
    const onBlur = () => {
      textFieldValue = 2;
    };
    const { container } = render(<TextField id="btntestbutton" value="hi" onBlur={onBlur} />);
    const textField =  getByTestId(container, "btntestbutton");

    expect(textField.value).toBe('hi');
    fireEvent.blur(textField)
    expect(textFieldValue).toBe(2);
  });
});
