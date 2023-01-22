import React from 'react';
import ODDatePicker from './DatePicker';

export default {
  title: 'atoms/DatePicker',
  component: ODDatePicker,
  argTypes: { selectedDate: { control: 'date' }}
};

const ODDatePickerTemplate = (args) => <ODDatePicker {...args} />;

export const Default = ODDatePickerTemplate.bind({});
// Default.args = { selectedDate: `${new Date().toLocaleDateString()}` };
