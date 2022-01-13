import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InformacionPantalla from './src/containers/InformacionPantalla';
import MusicosStackScreen from './src/navigation/MusicosStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Musicos') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Historia') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarStyle: {
            backgroundColor: 'green'
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        })}
      >

        <Tab.Screen options={{ headerShown: false }} name="Historia" component={InformacionPantalla}
          options={{
            title: 'Historia',
            tabBarStyle: {
              backgroundColor: 'green'
            },
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center'
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Musicos" component={MusicosStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;