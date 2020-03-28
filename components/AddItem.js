import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const AddItem = ({ addItem }) => {

  const [text, setText] = useState('')

const onChange = textValue => setText(textValue);

  return (
      <View>
      <TextInput
        placeholder='Add a Groce'
        style={styles.input}
        onChangeText={onChange}
        />
        <TouchableOpacity
        style={styles.btn}
        onPress={() => addItem(text)}
        >
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
    margin: 5,
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
  },
});

export default AddItem;
