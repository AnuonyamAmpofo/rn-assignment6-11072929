import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Home from './Home.js';


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.ScrollView}>
    <View style={styles.container}>
      {/* <Text>Open tart working on your app!</Text> */}
      <Home/>

      <StatusBar style= 'auto'/>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // paddingHorizontal: 15,
    
  },
  safeArea:{
    flex : 1,
    // padding:16,

  },
  ScrollView:{
    flexGrow:1,
    // justifyContent: 'center',
    // paddingTop: '0',
    // paddingHorizontal: 15,
  }
});
