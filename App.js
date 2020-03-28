
import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = ({item}) => {

  const [items, setItems] = useState([
    {id: '1', text: 'Milk'},
    {id: '2', text: 'Eggs'},
    {id: '3', text: 'Pain'},
    {id: '4', text: 'Yak Leg'},
    {id: '5', text: 'Cheese'}

  ])

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id)
  })
}


  return (

    <View style={styles.container}>

        <Header
          title='Its me Shopping'
          />
        <FlatList
          data={items}
          renderItem={ ({item}) => <ListItem item = {item} deleteItem= {deleteItem}/>}
          />


    </View>


  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 60

  },
  image: {
    width: 100,
    height: 100
  }

});


export default App
