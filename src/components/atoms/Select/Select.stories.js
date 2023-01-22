import React from 'react';
import ODSelect from './Select'

export default {
  title: 'atoms/Select',
  component: ODSelect,
};

const SelectTemplate = (args) => <ODSelect {...args} />;

export const Default = SelectTemplate.bind({});
Default.args = { label: 'Search Button', options: [{label: "Madrid", value: "Madrid"}] };