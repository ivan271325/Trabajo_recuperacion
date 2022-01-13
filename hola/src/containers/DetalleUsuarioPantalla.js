import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import users from "./data";
import styles from '../styles/styles';

function DetalleUsuarioPantalla({ route }) {

  const {instrumento} = route.params;
  
  function imagenGenero(item){
    if('Femenino'===item.género) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/mujer.png')}/>
    else if ('Masculino'===item.género) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/hombre.png')}/>
  }
  
  function renderItem(instrumento, item) {
  
    if (instrumento === item.instrumento)
      return (
        <View>
          <Text style={styles.nombrecabecera}> {item.nombre} </Text>
          <View style={styles.usuarios}>
            {imagenGenero(item)}
            <Text style={styles.columntext}>
              <Text>
                <Text style={styles.name}>Edad: </Text> 
                <Text style={styles.informacion}> {item.edad}</Text>
              </Text>
              <Text>                                               </Text>
              <Text>
                <Text style={styles.name}> Ciudad: </Text>
                <Text style={styles.informacion}> {item.ciudad}</Text>
              </Text>
              <Text>                                               </Text>
              <Text style={styles.instrumento}> {item.instrumento} </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.linea}>_________________________________________________________</Text>
          </View>
        </View>
      );
  }
  
  return (
    <View style={styles.view}>
      <FlatList
        data={users}
        renderItem={({ item }) => (<View>{renderItem(instrumento, item)}</View>)}
      />
    </View>
  );
}

export default DetalleUsuarioPantalla;