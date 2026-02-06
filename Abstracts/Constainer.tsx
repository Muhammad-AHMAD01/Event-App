import React, { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Scale from "../Function/Scale";

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
  paddingHorizontal?: number;
  paddingVertical?: number;
  children: ReactNode;
  useSafeArea?: boolean; // NEW
}

const Container: React.FC<ContainerProps> & {
  Paddingsize?: { WIDTH: number; HEIGHT: number };
} = ({ style, paddingHorizontal, paddingVertical,children, useSafeArea = true }) => {

  const Paddingsize = Scale(375, 20, 20);
  Container.Paddingsize = Paddingsize;

  const styles = StyleSheet.create({
    container: {
      
      paddingHorizontal: paddingHorizontal ?? 10,
      paddingVertical: paddingVertical ?? 0,
      alignItems: 'center',
    },
  });

  const Wrapper = useSafeArea ? SafeAreaView : View;

  return <Wrapper style={[styles.container, style]}>{children}</Wrapper>;
};

export default Container;
