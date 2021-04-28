import React from "react";
import './Map.css';

function Map(props) {
  return (
    <div>
        <h2>Map of Known Space</h2>
        <h3>Scroll to zoom in/out, click and hold to move.</h3>
      <iframe
        title="map"
        src="https://travellermap.com/go/spin/1910?style=print"
      ></iframe>
    </div>
  );
}

export default Map;
