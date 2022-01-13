import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicosPantalla from '../containers/MusicosPantalla';
import DetalleUsuarioPantalla from '../containers/DetalleUsuarioPantalla';

const HomeStack = createNativeStackNavigator();

function MusicosStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Musicos" component={MusicosPantalla}
          options={{
            title: 'Listado de usuarios',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center'
          }} />
        <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla}
          options={{
            title: 'Listado de usuarios',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center'
          }} />
      </HomeStack.Navigator>
    );
}

export default MusicosStackScreen;