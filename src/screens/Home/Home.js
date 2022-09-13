import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './HomeStyles'
import images from '../../utils/image.utils'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { navToWithScan } from '../../utils'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.route.params.userName,
      token: props.route.params.token,
      userRole: props.route.params.userRole,
      tracking: ''
    }
  }

  navToTasks = () => {
    //this.props.navigation.navigate('Tasks')
    navToWithScan('Tasks', this.props, this.state)
  }

  navToScan = () => {
    //this.props.navigation.navigate('Scan')
    navToWithScan('Scan', this.props, this.state)
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
          <Text style={styles.textLogo}>Hello, {this.state.userName}!</Text>
          <TouchableOpacity style={styles.button} onPress={this.navToTasks}>
            <Text style={styles.buttonText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.navToScan}>
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home
