import { View } from "react-native";
import React from "react";
import { Svg, G, Path } from "react-native-svg";

const MySvg = ({ width, height, viewBox, transform, color, path }) => {
  return (
    <View style={{ width: { width }, height: { height } }}>
      <Svg width={width} height={height} viewBox={viewBox}>
        <G transform={transform}>
          <Path fill={color} d={path} />
        </G>
      </Svg>
    </View>
  );
};

export default MySvg;
