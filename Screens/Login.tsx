import React from "react";
import Container from "../Abstracts/Constainer";
import {View, Text, StyleSheet} from "react-native";
import ValidText from "../Abstracts/ValidText";
import Input from "../Abstracts/TextInputs";
import Button from "../Abstracts/Button";
import EventCard from "../Components/EventCard";
import ReviewCard from "../Components/ReviewCard";
import BottomBar from "../Components/BottomBar";
import EmptyEvent from "../Components/EmptyEvent";
import ClaendarIcon from "../svg/calendar.svg";
import NotificationIcon from "../svg/Notification.svg";
import { Colors, FontSize } from "../Theme";
import MenuBar from "../Components/SearchBar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SearchBar from "../Components/SearchBar";



function Login() {
    const loginIcon = ()=>{
        return <MaterialIcons name="login" size={24} color="black" />
    }
return(
    <Container style={{ justifyContent:'center', backgroundColor:Colors.black,}}>
        
        {/* <EmptyEvent
        Icon={ClaendarIcon}
        title="No Events Yet"
        description="You have not created or joined any events yet."
        /> */}

        {/* <EmptyEvent
        Icon={NotificationIcon}
        showBackground={false}
        title="No Events Yet"
        description="You have not created or joined any events yet."
        /> */}

        {/* <MenuBar
        image={require("../assets/img.png")}
        name="Welcome Back!"
        onPress={() => {}}
        /> */}

        {/* <View style={{marginTop: 20, alignItems: 'flex-start',width: '50%', backgroundColor: Colors.gold, }}>
            <View style={{alignSelf: 'flex-start'}}>
                <Button
                text="Login"
                Leading_icon={loginIcon}
                color={Colors.black}
                width={'auto'}
                elevation={0}
                />
            </View>
        </View> */}
        {/* <SearchBar  />
         */}
       <View style={{ flex: 1, height:"100%" }}>
  <BottomBar
    Headtext="Welcome Back!"
    discription="Login to your account to continue"
  />
</View>

         
    </Container>
    
)
}
export default Login;

//  <ValidText text="Sign In" />
//         <Input 
//         placeholder="Email" />
//         {/* <ValidText text="Passwrod"/> */}
//         <Input placeholder="Password" secureTextEntry={true} />
//         <Button text="Sign In" />
//         <ValidText text="Login with Google"/>
//         <ValidText text="Login with Facebook"/>
//         <ValidText text="Don't have an account? Sign up"/>
//         <EventCard
//         image={require("../assets/img.png")}
//         title="Event Title"
//         location="Event Location"
//         />
//         <ReviewCard
//         image={require("../assets/img.png")}
//         name="John Doe"
//         discription="HEwy how are you"
//         />