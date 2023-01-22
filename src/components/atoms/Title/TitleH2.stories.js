import React from 'react';
import Title from './TitleH2'


export default {
  title: 'atoms/Title/H2',
  component: Title,
  argTypes: { title: { control: 'text' }, color: {control : 'text'}}
};

const TitleTemplate = (args) => <Title {...args} />;

export const Default = TitleTemplate.bind({});
Default.args = { title: 'Header h2', color: '#000'};