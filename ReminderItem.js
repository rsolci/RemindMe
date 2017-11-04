import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Switch, ToastAndroid } from 'react-native';

export default class ReminderItem extends React.Component {
  _onValueChange = (newValue) => {
    this.props.onToggle(this.props.id, newValue)
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Text>{this.props.text}</Text>
        <Switch onValueChange={this._onValueChange} value={this.props.selected} />
      </View>
    );
  }
}

ReminderItem.propTypes = {
  onToggle: PropTypes.func,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool
}

ReminderItem.defaultProps = {
  onToggle: () => {},
  selected: false
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
});
