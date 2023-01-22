import React from 'react';
import Details from './Details'


export default {
  title: 'molecules/Details',
  component: Details,
  argTypes: { title: { control: 'text' }, date: {control : 'text'}, loc: {control: 'text'}}
};

const DetailsTemplate = (args) => <Details {...args} />;

export const Default = DetailsTemplate.bind({});
Default.args = { title: 'Departure', date: '26 Jan 2023', loc:'Madrid' };