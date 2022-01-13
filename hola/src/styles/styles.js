import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
      letra: {
        fontSize: 20,
        color: 'black',
      },
      name: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
      },
      nombretelefono: {
        marginTop: 10,
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
      },
      descripcion: {
        marginTop: 5,
        marginHorizontal: 30,
      },
      nameHistoria: {
        marginTop: 20,
        marginHorizontal: 30,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
      },
      descripcionHistoria: {
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 30,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
      },
      informacion: {
        textAlign: 'center',
        padding: 30,
        fontSize: 20,
        color: 'black',
      },
      nombrecabecera: {
        marginTop: 30,
        marginHorizontal: 115,
        fontSize: 20,
        color: 'black'
      },
      instrumento: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
      },
      sexoLogo: {
        padding: 40,
        marginHorizontal: 10,
        width: 50, 
        height: 50,
      },
      tinyLogo: {
        padding: 40,
        marginTop: 40,
        marginHorizontal: 110,
        width: 200, 
        height: 200,
      },
      usuarios: {
        flexDirection: 'row',
        padding:10
      },
      busqueda: {
        flexDirection: 'row',
        padding:30,
      },
      columntext: {
        flex: 2,
        padding:10,
      },
      divider: {
        layout_width: 'match_parent',
        layout_height: 5,
        color: 'black',
      },
      instru: {
        flex: 2,
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: 'black',
      },
      bt: {
        marginHorizontal: 150
      },
      boton: {
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'lime',
        borderRadius: 200,
        width: 100
      },
      FList: {
        flex: 2
      },
      linea: {
        textAlign: 'center',
        color: 'blue'
      },
      input: {
        flex: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        borderWidth: 1,
      }
    }
)

export default styles;