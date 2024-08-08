import React, { useEffect, useState } from "react";
import Detail from "./Detail";

function Details({ transaction }) {
  const Displayinfo = transaction.map((transactions) => (
    <Detail key={transactions.id} detail={transactions} />
  ));
  return <div className="info" >
    {Displayinfo}
    </div>;
}

export default Details;