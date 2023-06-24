//External Lib Import
import React from "react";
import Moment from "react-moment";

const DateFormatter = ({ date }) => {
  console.log(date);
  return (
    <>
      <Moment format="D MMM YYYY" withTitle>
        {date}
      </Moment>
      <br />
      <small>
        <Moment format="hh:mm A">{date}</Moment>
      </small>
    </>
  );
};

export const fromNow = (data) => <Moment fromNow>{data}</Moment>;

export default DateFormatter;
