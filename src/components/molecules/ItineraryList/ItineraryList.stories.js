import React from 'react';
import ItineraryList from './ItineraryList';

export default {
  title: 'molecules/ItineraryList',
  component: ItineraryList,
  argTypes: { label: { control: 'text' }}
};

const ItineraryListTemplate = (args) => <ItineraryList {...args} />;

export const Default = ItineraryListTemplate.bind({});
Default.args = { label: 'Footer',
filteredList: [
    {
        "arrivalDate": {
            "year": 2023,
            "month": 0,
            "dayOfMonth": 10,
            "hourOfDay": 17,
            "minute": 21,
            "second": 40
            },
            "departureDate": {
            "year": 2023,
            "month": 0,
            "dayOfMonth": 9,
            "hourOfDay": 17,
            "minute": 21,
            "second": 40
            },
            "arrivalLocation": "Roma",
            "departureLocation": "Toronto",
            "carrier": "Spanair",
            "price": 17.49
    }
]};