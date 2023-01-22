import React from 'react';
import Footer from './Footer';

export default {
  title: 'molecules/Footer',
  component: Footer,
  argTypes: { label: { control: 'text' }}
};

const FooterTemplate = (args) => <Footer {...args} />;

export const Default = FooterTemplate.bind({});
Default.args = { label: 'Footer'};