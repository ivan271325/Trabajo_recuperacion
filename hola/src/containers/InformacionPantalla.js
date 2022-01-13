import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import styles from '../styles/styles';

function InformacionPantalla() {
    return (
      <ScrollView >
  
        <Text style={styles.informacion}> Bienvenido a la historia de los dispositivos </Text>
  
        <Image
          style={styles.tinyLogo}
          source={ require('../imagenes/motorola.png')}
        />
        <Text style={styles.nombretelefono}> Motorola Moto G </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.nameHistoria}>Fecha de lanzamiento:  </Text>
          <Text style={styles.informacion}> 2013 </Text>
        </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.descripcionHistoria}>Historia: </Text>
          <Text style={styles.informacion}> El smartphone de Motorola es considerado uno de los mejores teléfonos móviles de 
          la historia. Considerado un gama media por sus especificaciones y un gama baja por su precio, el Moto G de primera 
          generación marcó un antes y un después en el mundo de la telefonía. A partir de su lanzamiento, los grandes 
          fabricantes de smartphones comenzaron a comercializar equipos "al estilo Moto G", es decir, ofrecían equipos con 
          excelente relación calidad precio; pero ninguno pudo lograr lo que logró Motorola.
             </Text>
        </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.descripcionHistoria}>Conclusión: </Text>
          <Text style={styles.informacion}> Este dispositivo movil ya no se encuentra en el mercado, si es cierto que lo podemos 
            encontrar en tiendas de segunda mano, pero no nos será muy util ya que tanto el cargador, la bateria, etc... ya no 
            se encuentran es stock.
             </Text>
        </Text>
  
        <Image
          style={styles.tinyLogo}
          source={ require('../imagenes/nokia.png')}
        />
        <Text style={styles.nombretelefono}> Nokia 3310 </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.nameHistoria}>Fecha de lanzamiento:  </Text>
          <Text style={styles.informacion}> 2000 </Text>
        </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.descripcionHistoria}>Historia: </Text>
          <Text style={styles.informacion}>  Hubo un período a principios de la década de los noventa en el que era tan 
            omnipresente como lo es hoy el iPhone. Hasta la fecha, Nokia ha vendido más de 126 millones de ellos, lo que 
            lo convierte en uno de los teléfonos móviles más populares de todos los tiempos. El teléfono era prácticamente 
            indestructible, tenía una gran duración de batería y una calidad de llamada decente. También se envió con 
            Snake 2, que fue increíble. Pero, quizás su mayor atractivo fue que podía cambiar la cubierta del teléfono por 
            una carátula y placa posterior personalizadas. 
             </Text>
        </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.descripcionHistoria}>Conclusión: </Text>
          <Text style={styles.informacion}> El mercado de accesorios nunca ha sido el mismo desde entonces. Este dispositivo movil 
            ya no lo podemos encontrar de ninguna forma en el mercado ya que esta descatalogado, aunque todo el mundo lo sigue 
            conociendo por su gran durabilidad de bateria y por su resistencia.
             </Text>
        </Text>
  
        <Image
          style={styles.tinyLogo}
          source={ require('../imagenes/blackberry.png')}
        />
        <Text style={styles.nombretelefono}> BlackBerry 6210 </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.nameHistoria}>Fecha de lanzamiento:  </Text>
          <Text style={styles.informacion}> 2003 </Text>
        </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.descripcionHistoria}>Historia: </Text>
          <Text style={styles.informacion}>  El BlackBerry 6210 llegó en 2003, junto con el 6220, 6230 y 6280. 
            Estos también tenían un teléfono integrado pero ofrecían una pantalla monocromática mediana en lugar 
            de grande como los modelos lanzados en 2002. Sus resoluciones eran de 160 x 100. También había un 
            modelo 6510 que tenía un teléfono integrado y una radio bidireccional integrada. La navegación se 
            realizó a través de la ruedecilla lateral y estos BB eran algo común, ya que el correo electrónico 
            realmente tomó las calles. 
             </Text>
        </Text>
        <Text style={styles.descripcion}>
          <Text style={styles.descripcionHistoria}>Conclusión: </Text>
          <Text style={styles.informacion}> Aunque BlackBerry sigue existiendo como marca, la compañía en sí 
            está más centrada en software de seguridad diseñado para empresas y gobiernos; lleva desde el 2016 
            sin fabricar un móvil nuevo, pero ha licenciado la marca a otros fabricantes para que lancen modelos 
            con el nombre.
             </Text>
        </Text>
  
      </ScrollView >
    );
}

export default InformacionPantalla;