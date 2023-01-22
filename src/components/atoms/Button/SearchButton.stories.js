import React from 'react';
import SearchButton from './SearchButton';

export default {
  title: 'atoms/SearchButton',
  component: SearchButton,
  argTypes: { label: { control: 'text' }}
};

const SearchButtonTemplate = (args) => <SearchButton {...args} />;

export const Default = SearchButtonTemplate.bind({});
Default.args = { label: 'Search Button' };