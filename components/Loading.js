import React from "react";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/vibe-by-ad.appspot.com/o/img%2Flogo.png?alt=media&token=2f10244a-fef7-45cb-a560-cab6884ff250"
          alt=""
          style={{ marginBottom: 50 }}
        />

        <Circle size={100} />
      </div>
    </center>
  );
}

export default Loading;
