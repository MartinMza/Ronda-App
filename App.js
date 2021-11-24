import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container} >
      <LinearGradient 
      colors={[ "purple",'rgba(72, 154, 199, 0.59)']} 
      start={{
        x: 2,
        y: 0.5
      }}
    
      style={styles.container} >

      <Text>Hello gonoo!</Text>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
