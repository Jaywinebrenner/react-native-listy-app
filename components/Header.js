
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




const Header = (props) => {

  return (

    <View style={styles.header}>

        <Text style={styles.textOne}>Are you There GodD?</Text>
        <Text style={styles.textTwo}> {props.title}</Text>


    </View>
  )
}


const styles = StyleSheet.create({

  header: {
    height: 80,
    alignSelf: 'stretch',
    padding: 15,
    backgroundColor: '#084177'
  },
  textOne: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  },
  textTwo: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  }

});


export default Header
