import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

export default class RemindMe extends Component {
  constructor(props) {
    super(props);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  toggleCheck() {
    this.props.onToggleCheck(this.props.event, {checked: !this.props.event.checked});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.event.name}</Text>
        <Switch value={this.props.event.checked} onValueChange={this.toggleCheck}/>
      </View>
    );
  }
}

RemindMe.defaultProps = {
  onToggleCheck: () => {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCDD',
  },
});