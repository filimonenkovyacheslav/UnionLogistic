import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './WelcomeScreenStyles'
import images from '../../utils/image.utils'
//import AsyncStorage from '@react-native-async-storage/async-storage';


class WelcomeScreen extends Component {

  navToSignIn = () => {
    this.props.navigation.navigate('Sign In')
  }

  // removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('userNameUL')
  //     await AsyncStorage.removeItem('tokenUL')
  //     await AsyncStorage.removeItem('userRoleUL')
  //   } catch(e) {
  //   }
  // }

  render () {
    //this.removeValue()

    return (
      <View style={styles.container}>
        <View style={styles.logoWarap}>
          <Image source={images.logo} />
          <Text style={styles.textLogo}>Union Logistics</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonWhite}
            onPress={this.navToSignIn}
          >
            <Text style={styles.buttonWhiteText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 50}}>v.0.1.2</Text>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen
