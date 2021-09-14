import React, { useRef } from "react";
import { useEffect } from "react";

function Map() {
  const container = useRef(null);

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(
        37.551225776254206,
        126.97167506280219
      ),
      level: 6,
    };
    new window.kakao.maps.Map(container.current, options);
    return () => {};
  }, []);

  return (
    <div>
      <div
        className="usemap"
        ref={container}
        style={{ width: "500px", height: "400px" }}
      ></div>
      <button>위치 가져오기</button>
    </div>
  );
}

export default Map;
