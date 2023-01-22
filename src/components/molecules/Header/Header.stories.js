import React from 'react';
import Header from './Header'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'molecules/Header',
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    }
  },
  argTypes: { label: { control: 'text' }}
};

const HeaderTemplate = (args) => <Header {...args} />;

export const Default = HeaderTemplate.bind({});
Default.args = { label: 'EDreams Odigeo'};