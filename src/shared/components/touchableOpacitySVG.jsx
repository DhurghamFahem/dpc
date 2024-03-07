import { TouchableOpacity } from "react-native";
import React from "react";
import Svg from "./mySvg";

const TouchableOpacitySVG = ({
  width,
  height,
  viewBox,
  transform,
  color,
  path,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        width={width}
        height={height}
        viewBox={viewBox}
        transform={transform}
        color={color}
        path={path}
      />
    </TouchableOpacity>
  );
};

export default TouchableOpacitySVG;
