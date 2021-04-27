import React from "react";
import './Map.css';

function Map(props) {
  return (
    <div>
      <iframe
        title="map"
        src="https://travellermap.com/go/spin/1910?style=print"
      ></iframe>
    </div>
  );
}

export default Map;
