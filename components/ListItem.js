
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ListItem = ({ item, deleteItem }) => {

  return (

    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
        {item.text}
       </Text>
        <AntDesign
        name='closecircle'
        size={30}
        color='firebrick'
        onPress={() => deleteItem(item.id)}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  listItem: {

    padding: 15,
    backgroundColor: '#f8f8f8',
    borderColor: '#eee',
    borderBottomWidth: 1
  },

  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  listItemText: {

    fontSize: 18,

  }

});


export default ListItem
