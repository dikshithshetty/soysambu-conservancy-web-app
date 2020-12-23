import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { fetchSightings } from "../../redux/actions";
import styles from "./LatestSightingsList.module.scss";

const LatestSightingsList = ({ sightings, fetchSightings }) => {
  useEffect(() => {
    fetchSightings();
  }, [fetchSightings]);

  const renderLatestSightings =sightings.map((sighting, index) => {
    return (
        <div key={`$latestSighting-${index}`}>
          {console.log(sighting)}
        <p>{sighting.latitude}</p>
      </div>
    );
  });

  return <div className={styles["container"]}>{renderLatestSightings}</div>
};

const mapStateToProps = (state) => {
  return {sightings: Object
      .entries(state.sightings)
      .sort(([,a],[,b]) =>new Date(b.datetime) - new Date(a.datetime))
      .slice(0,4)
      .map(sighting => sighting[1])}
};

export default connect(mapStateToProps, { fetchSightings })(LatestSightingsList);
