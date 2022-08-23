import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './HomeStyles'
import images from '../../utils/image.utils'
//import AsyncStorage from '@react-native-async-storage/async-storage';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  navToTasks = () => {
    this.props.navigation.navigate('Tasks')
  }

  // getValue = async () => {
  //   try {
  //     const userName = await AsyncStorage.getItem('userNameUL')
  //     const token = await AsyncStorage.getItem('tokenUL')
  //     const userRole = await AsyncStorage.getItem('userRoleUL')
  //     if (userName) this.setState({ userName: userName })
  //     if (token) this.setState({ token: token })
  //     if (userRole) this.setState({ userRole: userRole })
  //   } catch(e) {
  //   }
  // }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.logoWarap}>
          <Image source={images.logo} />
          <Text style={styles.textLogo}>Hello, {this.props.route.params.userName}!</Text>
          <TouchableOpacity style={styles.button} onPress={this.navToTasks}>
            <Text style={styles.buttonText}>Tasks</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home
