import React from 'react';
import Label from './Label';

export default {
  title: 'atoms/Label',
  component: Label,
  argTypes: { label: { control: 'text' }}
};

const LabelTemplate = (args) => <Label {...args} />;

export const Default = LabelTemplate.bind({});
Default.args = { label: 'Label' };