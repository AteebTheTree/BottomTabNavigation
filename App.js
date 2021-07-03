import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';  

function facebookScreen()
{
  return(
    
    <View>
      
      <Header
        backgroundColor={'#ffb6c1'}
        centerComponent={{
          text: 'Buzzapp!',
          style: { color: '#fff', fontSize: 20 },
        }}
      />
      
      <View style = {styles.container}>
        <Text>Facebook!</Text>
      </View>

    </View>
  )
}

function instagramScreen()
{
  return(
    <View>

      <Header
        backgroundColor={"#ffb6c1"}
        centerComponent={{
          text: 'Buzzapp!',
          style: { color: '#fff', fontSize: 20 },
        }}
      />

      <View style = {styles.container}>
        <Text>Instagram!</Text>
      </View>
      
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name = "Facebook"
          component = {facebookScreen}
        />
        
        <Tab.Screen
          name = "Instagram"
          component = {instagramScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
