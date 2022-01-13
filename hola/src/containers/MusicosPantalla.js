import React, { useState } from 'react';
import { Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import users from "./data";
import styles from '../styles/styles';

function MusicosPantalla({ navigation }) {

  const [instrumento, setInstrumento] = useState();
  
  function imagenGenero(item){
    if('Femenino'===item.género) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/mujer.png')}/>
    else if ('Masculino'===item.género) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/hombre.png')}/>
  }
  
  function renderItem(item) {
  
    return (
      <View>
        <View style={styles.usuarios}>
          {imagenGenero(item)}
          <Text style={styles.columntext}>
            <Text style={styles.informacion}>{item.nombre} </Text>
            <Text>                                   </Text>
            <Text style={styles.instrumento}> {item.instrumento} </Text>
          </Text>
        </View>
        <View>
          <Text  style={styles.linea}>_________________________________________________________</Text>
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.FList}>
      <View style={styles.busqueda}>
        <Text style={styles.instru}> Instrumento </Text>
        <TextInput style={styles.input} onChangeText={instrumento => setInstrumento(instrumento)} />
      </View>
      <TouchableOpacity
        style={styles.bt}
        onPress={() => navigation.navigate('Detalles', { instrumento: instrumento })}
      >
        <Text style={styles.boton}>Buscar</Text>
      </TouchableOpacity>
      <FlatList 
        data={users}
        renderItem={({ item }) => (<View>{renderItem(item)}</View>)}
      />
    </View>
  );
}

export default MusicosPantalla;