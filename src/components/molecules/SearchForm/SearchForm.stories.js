import React from 'react';
import SearchForm from './SearchForm'

export default {
  title: 'molecules/SearchForm',
  component: SearchForm,
  argTypes: { title: { control: 'text' }, color: {control : 'text'}}
};

const SearchFormTemplate = (args) => <SearchForm {...args} />;

export const Default = SearchFormTemplate.bind({});
Default.args = {
    location: [{label: "Madrid", value: "Madrid"}],
    selectedDate: new Date()
};