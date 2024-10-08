import React from "react"
import { StyleSheet, View, Image } from 'react-native';

export default function BerealLayout({front, back, width, height}: {front: number|string, back: number|string, width: number, height: number}) {
    return (
        <View style={{
            width: width,
            justifyContent: 'center',
            position: 'relative', // Allows absolute positioning of child elements
          }}>
            {typeof front === 'string' ? (
              <Image source={{uri: back.toString()}} style={{
                borderRadius: 20,
                width: width,
                height: height,
              }} />
            ) : <Image source={Number(back)} style={{
              borderRadius: 20,
              width: width,
              height: height,
            }} />}
          
            <View style={{
              position: 'absolute',
              top: 0, 
              left: 0, 
            }}>
              <View>{
                typeof back === 'string' ? (
                  <Image source={{uri: front.toString()}} style={styles.alternate_view}/>
                ) : <Image source={Number(front)} style={styles.alternate_view}/>
                }</View>
            </View>
          
            <View style={{
              position: 'absolute',
              bottom: 20, 
              right: 20, 
            }}>
            </View>

            <View style={{
              position: 'absolute',
              bottom: 20, 
              left: 20, 
            }}>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    alternate_view: {
        width: 100, 
        height: 150, 
        backgroundColor: 'black', 
        borderWidth: 2, 
        borderColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center', // Center content inside container
      borderRadius: 20, // Rounded corners
      width: 375,
      height: 500,
      overflow: 'hidden', // Ensures camera respects rounded corners
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
      width: '100%',
    },
    buttonContainer: {
        width: 60, 
        height: 60, 
        borderRadius: 50, 
        borderWidth: 4, 
        borderColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'transparent', 
        padding: 16,
        color:"white",
        marginTop: 16
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    preview: {
      width: 300,
      height: 400,
      resizeMode: 'contain',
    },
  });