
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , Text} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import BottomBar from './Components/BottomBar';
function App() {
 

  return (

      // <Login />
      <BottomBar
      Headtext="Welcome Back!"
      discription="Login to your account to continue"
    />
   
  );
}


export default App;
