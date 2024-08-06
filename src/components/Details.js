import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

function Details() {
  const url = "http://localhost:3000/details";
  const [details, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
       .then((res) => res.json())
       .then((details) => {setUsers(details)});
      console.log(details);
  }, []);
  const displayinfo = details.map((details) => (
    <Detail key={details.id} detail={details} />
  ));
  return <div>{displayinfo}</div>;
}

export default Details;
