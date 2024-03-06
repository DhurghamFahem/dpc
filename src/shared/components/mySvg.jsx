import { View } from "react-native";
import React from "react";
import { Svg, G, Path } from "react-native-svg";

const MySvg = ({ width, height, path }) => {
  return (
    <View style={{ width: { width }, height: { height } }}>
      <Svg width={width} height={height}>
        <G>
          <Path d={path} />
        </G>
      </Svg>
    </View>
  );
};

export default MySvg;
