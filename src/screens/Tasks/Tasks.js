import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './TasksStyles'
import images from '../../utils/image.utils'


class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: props.route.params.userName,
        token: props.route.params.token,
        userRole: props.route.params.userRole,
        tracking: props.route.params.tracking
    };
  }

  render () {

    return (
      <View style={styles.container}>
          <Text style={styles.textTitle}>Tasks</Text>
          <Text style={styles.textTitle}>{this.state.userName} {this.state.tracking}</Text>
      </View>
    )
  }
}

export default Tasks
