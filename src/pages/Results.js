import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import ItineraryList from "../components/molecules/ItineraryList/ItineraryList";
import Title from "../components/atoms/Title/TitleH2";
import Loader from "../components/atoms/Loader/Loader";

const Results = (props) => {
  const { label } = props;
  const location = useLocation();
  const { toLoc, fromLoc, date } = location.state;
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    setLoading(true);
    console.log(toLoc)
    try {
      let masterData =  await (await fetch("/itineraries")).json();
      if(toLoc && fromLoc) {
        masterData =  getItinerayData(masterData);
      } 
      masterData.sort(function (a, b) {
        return b.price - a.price;
      });
      setFilteredList(masterData);
    } catch(e) {
      console.error("Failed to fetch itineraries", e);
      setFilteredList([]);
    }
   
    setLoading(false)
  };

  const getItinerayData = (data) => {
   return data.filter((ele) => {
      if (ele.departureLocation === fromLoc && ele.arrivalLocation === toLoc) {
        if(!date) {
          return ele;
        } else {
          const  availableDate = new Date(ele.departureDate.year, ele.departureDate.month, ele.departureDate.dayOfMonth).toLocaleDateString();
          const selectedDate = new Date(date).toLocaleDateString()
          if  ( selectedDate === availableDate ) {
            return ele;
          }
        }
      }
    }).sort((a,b) => b.price -  a.price);
  };

  return (
    <React.Fragment>
      {filteredList && (<><Title title={label} />
      {filteredList.length > 0 && !loading && <ItineraryList filteredList={filteredList} />}
      {filteredList.length === 0 && !loading && <Title title="No Results to display"/>}
      {loading && <Loader />}
      </> )}
    </React.Fragment>
  );
};

Results.defaultProps = {
  label: "Results",
};
Results.propTypes = {
  label: PropTypes.string,
};

export default Results;
