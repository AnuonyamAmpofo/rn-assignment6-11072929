import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Home from './Home.js';
import Cart from './Cart.js';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack= createStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.safeArea}>
    // {/* <ScrollView contentContainerStyle={styles.ScrollView}> */}
    
    // <View style={styles.container}>
      <NavigationContainer style={styles.container}>
        <StatusBar style= 'auto'/>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
          <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      

      

    // </View>
    // {/* </ScrollView> */}
    // </SafeAreaView>
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
    // paddingBottom: 10,
    
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
