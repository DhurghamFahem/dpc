import React from "react";
import TouchableOpacitySVG from "../../shared/components/touchableOpacitySVG";
const EditSVG = ({ onPress }) => {
  return (
    <TouchableOpacitySVG
      onPress={onPress}
      width={"50px"}
      height={"50px"}
      color={"#1B2A41"}
      path={
        "M46.6,3.4c-1,-1 -2.2,-1.4 -3.4,-1.4c-1.2,0 -2.5,0.5 -3.4,1.4c0,0 -0.1,0.1 -0.2,0.2v0l-35.3,35.2c-0.1,0.1 -0.2,0.3 -0.3,0.4l-2,7.5c-0.1,0.3 0,0.7 0.3,1c0.2,0.2 0.4,0.3 0.7,0.3c0.1,0 0.2,0 0.3,0l7.5,-2c0.2,0 0.3,-0.1 0.4,-0.3l35.2,-35.2v0c0.1,-0.1 0.2,-0.2 0.2,-0.2c1.9,-1.9 1.9,-5 0,-6.9zM45.2,4.8c1.1,1.1 1.1,2.9 0,4.1c-0.3,0.3 -0.6,0.6 -0.9,0.9l-4.1,-4.1c0.5,-0.5 0.9,-0.9 0.9,-0.9c0.5,-0.5 1.3,-0.8 2,-0.8c0.8,0 1.5,0.3 2.1,0.8zM5.6,41.2l3.2,3.2l-4.4,1.2z"
      }
    />
  );
};
export default EditSVG;
