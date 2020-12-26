import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { fetchSightings } from "../../redux/actions";
import styles from "./LatestSightingsList.module.scss";
import dayjs from "dayjs";

const LatestSightingsList = ({ sightings, fetchSightings }) => {
  useEffect(() => {
    fetchSightings();
  }, [fetchSightings]);

  const renderLatestSightings =sightings.map((sighting, index) => {
    const datetime = new Date(sighting.datetime)
    const date = dayjs(new Date(datetime)).format("DD MMM");
    const time =  dayjs(new Date(datetime)).format("HH:mm");

    return (
        <div key={`$latestSighting-${index}`}>
          <p className={styles["date"]}>{date}</p>
          <p className={styles["time"]}>{time}</p>
          <div className={styles["sighting"]}>
            <p className={styles["count"]}>{sighting.count}</p>
            <p className={styles["organism"]}>{sighting.organism + 'S'}</p>
          </div>
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
