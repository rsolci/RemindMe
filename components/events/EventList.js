import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView
} from 'react-native';
import EventItem from './EventItem.js';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      eventData: [
        {
          id: 1,
          name:'test1',
          checked: false
        },
        {
          id: 2,
          name:'test2',
          checked:true
        }
      ],
      dataSource: ds
    };
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  componentDidMount() {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(this.state.eventData)});
  }

  toggleCheck(originalEvent, newState) {
    let newData = [...this.state.eventData];
    newData.forEach((event, index) => {
      if (event.id === originalEvent.id) {
        newData[index] = Object.assign({}, event, newState);;
      }
    });
    this.setState({
      eventData: newData,
      dataSource: this.state.dataSource.cloneWithRows(newData)
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <EventItem event={rowData} onToggleCheck={this.toggleCheck}/>}
      />
    );
  }
}