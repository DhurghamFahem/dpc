import React from "react";
import TouchableOpacitySVG from "../../shared/components/touchableOpacitySVG";
const DeleteSVG = ({ onPress }) => {
  return (
    <TouchableOpacitySVG
      onPress={onPress}
      width={"50px"}
      height={"50px"}
      color={"#bc544b"}
      viewBox={"0,0,256,256"}
      transform={"scale(10.66667,10.66667)"}
      path={
        "M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.70313,15h11.86328l1.70313,-15z"
      }
    />
  );
};
export default DeleteSVG;
