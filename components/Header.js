
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Eggs'},
    {id: Math.random(), text: 'Pain'},
    {id: Math.random(), text: 'Yak Leg'},
    {id: Math.random(), text: 'Cheese'}

  ])

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
    padding: 15,
    backgroundColor: 'darkslateblue'
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
