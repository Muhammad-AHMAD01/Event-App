import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors, FontSize } from "../Theme";

type BottomBarProps = {
    Headtext: string;
    discription: string;
};

const BottomBar=({ Headtext, discription }: BottomBarProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                {/* <Text style={styles.headText}>{Headtext}</Text>
                <Text style={styles.description}>{discription}</Text> */}
            </View>
            {/* <TouchableOpacity style={styles.button}>
                <MaterialIcons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity> */}
        </View>
    );
};

export default BottomBar;   

//   const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textContainer: { 
//     alignItems: "center", 
//     marginBottom: 16, 
//     borderRadius: 30,
//     // backgroundColor: Colors.gold,
//     padding: 16,
//     position: "absolute",
//     bottom: -20,
//     width: "100%",
//     height: "35%",
//     elevation: 6,
//     shadowColor: Colors.black, // <-- Add comma here
//     shadowOffset: { width: 0, height: -3 }, // negative = top shadow
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
// },
//   headText: {
//     color: Colors.black,
//     fontSize: FontSize.Body,
//     fontWeight: "bold",
//   },
//   description: {
//     color: Colors.black,
//     fontSize: FontSize.Small,
//   },
//   button: {
//     padding: 8,
//     bottom:0
//   },
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: { 
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: "45%",
    paddingVertical: 32,
    paddingHorizontal: 20,

    alignItems: "center",

    backgroundColor: "#ffffff89",   // 👈 zaroori for shadow
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    // Android
    elevation: 30,
    opacity: 1,

  },

  headText: {
    color: Colors.black,
    fontSize: FontSize.Body,
    fontWeight: "bold",
  },

  description: {
    color: Colors.black,
    fontSize: FontSize.Small,
    marginTop: 6,
  },

  button: {
    padding: 8,
    marginTop: 16,
  },
});
