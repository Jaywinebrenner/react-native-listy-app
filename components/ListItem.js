
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ListItem = ({ item }) => {

  return (

    <TouchableOpacity style={styles.header}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{ item.text}</Text>
        <AntDesign name='closecircle' size={30} color='firebrick'/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#d4ebd0'
  },

  listItemView: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  listItemText: {
    color: '#084177',
    fontSize: 18,
    textAlign: 'center'
  }

});


export default ListItem
