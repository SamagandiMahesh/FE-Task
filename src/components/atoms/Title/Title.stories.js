import React from 'react';
import Title from './Title'

export default {
  title: 'atoms/Title/H1',
  component: Title,
  argTypes: { title: { control: 'text' }, color: {control : 'text'}}
};

const TitleTemplate = (args) => <Title {...args} />;

export const Default = TitleTemplate.bind({});
Default.args = { title: 'Header h1'};