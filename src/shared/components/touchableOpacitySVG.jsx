import { Text, TouchableOpacity } from "react-native";
import React from "react";
import Svg from "./mySvg";

const TouchableOpacitySVG = ({ width, height, path, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={width} height={height} path={path} />
    </TouchableOpacity>
  );
};

export default TouchableOpacitySVG;
