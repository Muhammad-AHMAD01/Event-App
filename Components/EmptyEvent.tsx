import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CalenderIcon from "../svg/calendar.svg";
import Container from "../Abstracts/Constainer";
import { Colors, FontSize } from "../Theme";


type EmptyEventProps = {
  title: string;
  description: string;
  Icon:React.FC<{width:number; height:number;}>;
  showBackground?: boolean;
  BackgroundColor?: string;
};

const EmptyEvent = ({ title, description ,Icon, showBackground= true , BackgroundColor='#E0E0E0'}: EmptyEventProps) => {
  return (
    <Container style={{ flex: 1,flexDirection:'column',justifyContent:'center',}}>
      <View style={[styles.image, {backgroundColor: showBackground ? BackgroundColor : 'transparent'}]}>
        <View style={{ alignSelf:'center', position:'absolute', top:'22%', left:'10%'}}>
          <Icon width={190} height={170} />
        </View>
      </View>
      <View style={{ alignItems: 'center', padding:20}}>
        <Text style={{padding:30,fontSize:FontSize.H1 }}>{title}</Text>
        <Text style={{fontSize:FontSize.H2, textAlign:'center'}}>{description}</Text>
      </View>
      
    </Container>
  );
};

export default EmptyEvent;

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
    justifyContent: 'center',
    borderRadius: 120,
    alignSelf: 'center',
    overflow: 'hidden',
    
  }
});
