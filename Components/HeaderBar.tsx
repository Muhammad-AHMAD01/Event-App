import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, FontSize } from '../Theme';

type HeaderProps = {
  title: string;
  onBack?: () => void;
  onMenu?: () => void;
};

const HeaderBar = ({ title, onBack, onMenu }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity onPress={onBack} style={styles.iconButton}>
        <MaterialIcons name="arrow-back" size={24} color={Colors.black} />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {title}
      </Text>

      {/* Three dots menu */}
      <TouchableOpacity onPress={onMenu} style={styles.iconButton}>
        <MaterialIcons name="more-vert" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,          // standard header height
    paddingHorizontal: 12,
  },

  iconButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    fontSize: FontSize.H2,
    // fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },
});
