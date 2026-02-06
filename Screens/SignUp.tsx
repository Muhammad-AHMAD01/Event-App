import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../Abstracts/Constainer";
import ValidText from "../Abstracts/ValidText";
import Input from "../Abstracts/TextInputs";
import Button from "../Abstracts/Button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderBar from "../Components/HeaderBar";
import  {FontSize}  from "../Theme"

function SignUp() {
  const [secure, setSecure] = useState(true);
  const [confirmSecure, setConfirmSecure] = useState(true);

  // Icon components
  const PersonIcon = () => (
    <MaterialIcons name="person-outline" size={24} color="grey" />
  );

  const EmailIcon = () => (
    <MaterialIcons name="mail-outline" size={24} color="grey" />
  );

  const LockIcon = () => (
    <MaterialIcons name="lock-outline" size={24} color="grey" />
  );

  const EyeIcon = ({ isSecure }: { isSecure: boolean }) => (
    <MaterialIcons
      name={isSecure ? "visibility-off" : "visibility"}
      size={24}
      color="grey"
    />
  );

  return (
    <Container style={styles.container}>
      <HeaderBar title="" />
      <ValidText text="Sign Up" style={styles.text} />
      
      <Input
        Leading_icon={PersonIcon}
        placeholder="Full Name"
        fontSize={15}
        marginVertical={8}
      />
      
      <Input
        Leading_icon={EmailIcon}
        placeholder="Email"
        fontSize={15}
        marginVertical={8}
      />
      
      <Input
        Leading_icon={LockIcon}
        placeholder="Your Password"
        secureTextEntry={secure}
        fontSize={15}
        marginVertical={8}
        Tailing_icon={() => (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <EyeIcon isSecure={secure} />
          </TouchableOpacity>
        )}
      />
      
      <Input
        Leading_icon={LockIcon}
        placeholder="Confirm Password"
        secureTextEntry={confirmSecure}
        fontSize={15}
        marginVertical={8}
        Tailing_icon={() => (
          <TouchableOpacity onPress={() => setConfirmSecure(!confirmSecure)}>
            <EyeIcon isSecure={confirmSecure} />
          </TouchableOpacity>
        )}
      />
      
      <Button text="Sign Up" style={styles.button} />
      
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      
      <Button 
        text="Login with Google" 
        style={styles.googleButton}
        color={"black"}
        fontSize={FontSize.Button}
      />
      <Button 
        text="Login with Facebook" 
        style={styles.googleButton}
        color={"black"}
        fontSize={FontSize.Button}
      />
      
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft:'5%'
  },
  button: {
    height:"7%",
    marginVertical: 20,
    width:'70%',
    fontSize:FontSize.Button
  },
  googleButton: {
    backgroundColor: 'white',
    elevation:0,
    borderRadius:12,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical:8,
    width:'70%',
    height:50
  },
  // googleButtonText: {
  //   color: 'black',
  // },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default SignUp;