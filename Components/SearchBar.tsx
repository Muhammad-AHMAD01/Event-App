import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, FontSize } from '../Theme';
import Input from '../Abstracts/TextInputs';
import Button from '../Abstracts/Button';

type MenuBarProps = {
  onpress?: () => void;
};

const MenuBar = ({}: MenuBarProps) => {
  const SearchIcon = () => {
    return <MaterialIcons name="search" size={28} color={Colors.black} />;
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <SearchIcon />
      <Text style={{color: Colors.black,
    marginHorizontal: 6,
    fontSize: FontSize.H3,}}>|</Text>
      <Input
        placeholder="Search...."
        width={'100%'}
        height={50}
        // backgroundColor={Colors.primaryblue}
        borderWidth={0}
        fontSize={FontSize.H3}
        color={Colors.black}
      />
    </View>
  );
};

export default MenuBar;
