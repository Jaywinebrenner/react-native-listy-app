import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const AddItem = () => {

  return (
      <View>
      <TextInput
        placeholder='Add a Groce'
        style={styles.input}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            Add Groce
            <AntDesign
              name='plus'
              size={20}
              color='firebrick'
            />
            </Text>



        </TouchableOpacity>


      </View>

  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  }

});

export default AddItem;



export default ListItem



-------------


import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {

  return (

    <View style={styles.container}>

        <Text style={styles.textOne}>Are you There God?</Text>
        <Text> It's me Maragret.</Text>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/5.jpg'}}
          style={styles.imageOne}
          />

          <Icon
          name='remove'
          size={20}
          color='firebrick'
          />

    </View>


  )
}


const styles = StyleSheet.create({

  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  textOne: {
    fontSize: 30,
    color: 'darkslateblue'
  },
  imageOne: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});


export default App
