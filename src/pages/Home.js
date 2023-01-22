import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/molecules/SearchForm/SearchForm";
import Title from "../components/atoms/Title/TitleH2";
import Loader from "../components/atoms/Loader/Loader";

const Home = (props) => {
  const { label } = props;

  const [data, setData] = useState([]);
  const [location, setLocationData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    try {
      const locData = await (await fetch("/locations")).json();
      console.log(locData);
      setData(locData);
      formatLocationData(locData);
    } catch(e) {
      console.error('Failed to fetch location Data', e)
      setData([]);
      formatLocationData([]);
    }
     
  };
  
  const formatLocationData = (data) => {
    let tempArr = [];
    data.forEach((element) => {
      tempArr.push({
        label: element,
        value: element,
      });
    });
    console.log(tempArr);
    setLocationData(tempArr);
  };

  const onFlightSearch = () => {
    navigate("/results", {state:{
      fromLoc: departureLocation,
      toLoc: arrivalLocation,
      date: selectedDate,
    }});
  };
  return (
    <React.Fragment>
      <Title title={label} /> 
      <SearchForm 
        location={location} 
        selectedDate={selectedDate}
        dateChangeHandler={(date) => setSelectedDate(date)}
        flightSearch={onFlightSearch}
        arrivalLocChangeHandler={(loc) => setArrivalLocation(loc.value)}
        departureLocChangeHandler={(loc) => setDepartureLocation(loc.value)}
      />
    </React.Fragment>
  );
};

Home.defaultProps = {
  label: "Home Page",
};
Home.propTypes = {
  label: PropTypes.string,
};

export default Home;
