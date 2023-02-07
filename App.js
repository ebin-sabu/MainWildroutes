import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  Image,
  Alert,
  TouchableOpacity, 
} from 'react-native';
/*App Intro page*/
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.Title}>WildRoutes</Text>
      <Image style={styles.Logo} source={
        require('./assets/MainIcon.png')}/>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Coming Soon!', 'This App is Currently in Development')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>Copyright -- Group10 -- 2023</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3dcc5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 300,
    height: 300,
  },
  Title: {
    color: '#013220',
    fontFamily:'Papyrus',
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#004300',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textStyle: {
    fontSize: 8,
    paddingVertical : 12,
    paddingTop: 50,
  }
});
