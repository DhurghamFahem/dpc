import React from "react";
import TouchableOpacitySVG from "../../shared/components/touchableOpacitySVG";

const DetailsSvg = () => {
  return (
    <TouchableOpacitySVG
      width={50}
      height={50}
      path={
        "M25,2c-12.703,0 -23,10.297 -23,23c0,12.703 10.297,23 23,23c12.703,0 23,-10.297 23,-23c0,-12.703 -10.297,-23 -23,-23zM25,11c1.657,0 3,1.343 3,3c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3zM29,38h-2h-4h-2v-2h2v-13h-2v-2h2h4v2v13h2z"
      }
    />
  );
};
export default DetailsSvg;
