import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './components/Header'

const App = () => {

  return (

    <View style={styles.container}>
      <Text>HWAT?</Text>
        <Header
          title='Its me Margaret'
          />
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/5.jpg'}}
            style={styles.image}

            />


    </View>


  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 60
  },
  image: {
    width: 100,
    height: 100
  }

});


export default App
