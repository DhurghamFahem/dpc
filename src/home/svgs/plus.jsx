import React from "react";
import TouchableOpacitySVG from "../../shared/components/touchableOpacitySVG";
// <?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"/></svg>
const PlusSVG = ({ onPress }) => {
  return (
    <TouchableOpacitySVG
      onPress={onPress}
      width={50}
      height={50}
      color={"#1B2A41"}
      path={
        "M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"
      }
    />
  );
};
export default PlusSVG;
