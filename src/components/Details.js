import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

function Details({transaction}) {
  
  const Displayinfo = transaction.map((transactions) => 
    <Detail key={transactions.id} detail={transactions} />
  );
  return <div>{Displayinfo}</div>;
}

export default Details;
