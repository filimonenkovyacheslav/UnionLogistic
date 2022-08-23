import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './TasksStyles'
import images from '../../utils/image.utils'


class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <View style={styles.container}>
          <Text style={styles.textTitle}>Tasks</Text>
      </View>
    )
  }
}

export default Tasks
