import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity };
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
              size={30}
              color='firebrick'
            />

          </Text>

        </TouchableOpacity>


      </View>

  )
}

consts styles = StyleSheet.create({
  input: {

  },
  btn: {

  },
  btnText: {

  }

});

export default AddItem;
