import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch, ToastAndroid } from 'react-native';
import ReminderItem from './ReminderItem';

let data = [
  {key: 1, text: 'Teste'},
  {key: 2, text: 'Teste', selected: true},
  {key: 3, text: 'Teste'},
  {key: 4, text: 'Teste'},
  {key: 5, text: 'Teste'},
  {key: 6, text: 'Teste'},
  {key: 7, text: 'Teste'},
  {key: 8, text: 'Teste'},
  {key: 9, text: 'Teste'},
  {key: 10, text: 'Teste'},
  {key: 11, text: 'Teste'},
  {key: 12, text: 'Teste'},
  {key: 13, text: 'Teste'},
  {key: 14, text: 'Teste'},
  {key: 15, text: 'Teste'},
  {key: 16, text: 'Teste'},
  {key: 17, text: 'Teste'},
  {key: 18, text: 'Teste'},
  {key: 19, text: 'Teste'},
  {key: 20, text: 'Teste'},
  {key: 21, text: 'Teste'},
  {key: 22, text: 'Teste'},
  {key: 23, text: 'Teste'},
  {key: 24, text: 'Teste'},
  {key: 25, text: 'Teste'},
  {key: 26, text: 'Teste'},
  {key: 27, text: 'Teste'},
  {key: 28, text: 'Teste'},
  {key: 29, text: 'Teste'},
  {key: 30, text: 'Teste'},
  {key: 31, text: 'Teste'},
  {key: 32, text: 'Teste'},
  {key: 33, text: 'Teste'},
  {key: 34, text: 'Teste'},
  {key: 35, text: 'Teste'},
  {key: 36, text: 'Teste'},
  {key: 37, text: 'Teste'},
  {key: 38, text: 'Teste'},
  {key: 39, text: 'Teste'},
]

export default class App extends React.Component {
  state = {items: data}
  _renderItem = ({item}) => {
    return <ReminderItem id={item.key} text={item.text + item.key} selected={item.selected} onToggle={this._toggledItem} />
  }
  _toggledItem = (id, newValue) => {
    const toChange = this.state.items.find(item => item.key === id);
    const newObject = Object.assign({}, toChange, {selected: newValue})
    let newArray = this.state.items.slice(0);
    const index = newArray.indexOf(toChange);
    newArray[index] = newObject;
    this.setState({
      items: newArray
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list} data={this.state.items} renderItem={this._renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%'
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
});
