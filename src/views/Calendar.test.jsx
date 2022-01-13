import { fireEvent, render, screen } from '@testing-library/react';
import Calendar from './Calendar.jsx';

describe('Calendar', () => {
  it('should change content based on input', () => {
    render(<Calendar />);
    const redo = screen.getByText('Redo');
    const undo = screen.getByText('Undo');
    const input = screen.getByLabelText('input');

    //select a date
    screen.getByText('Select A Date');
    //select another date
    fireEvent.change(input, { target: { value: '2022-01-01' } });
    screen.getByText('2022-01-01');
    //select another date
    fireEvent.change(input, { target: { value: '2022-02-22' } });
    screen.getByText('2022-02-22');
    //select another date
    fireEvent.change(input, { target: { value: '2022-03-14' } });
    screen.getByText('2022-03-14');
    //press undo, see the date change to the first date
    fireEvent.click(undo);
    screen.getByText('2022-02-22');
    //press undo, see the date change to the second date
    fireEvent.click(undo);
    screen.getByText('2022-01-01');
    //press redo, see the date change to the second date
    fireEvent.click(redo);
    screen.getByText('2022-02-22');
    //select another date, see date change to the new date
    fireEvent.change(input, { target: { value: '2022-04-04' } });
    screen.getByText('2022-04-04');
    //press undo, see the date change to the first date
    fireEvent.click(undo);
    screen.getByText('2022-02-22');
    //press undo, see the date change to the second date
    fireEvent.click(undo);
    screen.getByText('2022-01-01');
    //press redo, see the date change to the second date
    fireEvent.click(redo);
    screen.getByText('2022-02-22');
    //press redo, see the date change to the fourth date
    fireEvent.click(redo);
    screen.getByText('2022-04-04');
    //press redo, see the date change to the third date
    fireEvent.click(redo);
    screen.getByText('2022-03-14');
  });
});
