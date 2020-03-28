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
