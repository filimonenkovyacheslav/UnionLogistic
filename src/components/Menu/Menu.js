import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView, withNavigation } from 'react-navigation'
import styles from './MenuStyles'
import images from '../../utils/image.utils'
import { navTo } from '../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';


let userName = ''
let getValue = async () => {
    try {
      let value = await AsyncStorage.getItem('userName')
      if (value) {
        userName = value
      }
    } catch(e) {
    }
}

const Menu = props => {
  getValue()
  return (
    <SafeAreaView style={styles.menuContainer}>

      <View style={[styles.logoWrap, styles.buttonWithBorder]}>
        <View style={styles.logoImageWrap}>
          <Image source={images.avatar} style={{ width: 45, height: 45 }} />
        </View>
        <Text style={styles.logoText}>{userName}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.menuButton}
          /*onPress={() => { navTo('Tasks', props) }}*/
        >
          <View style={styles.imageWrap}>
          </View>
          <Text style={styles.menuText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          /*onPress={() => { navTo('NewPackingList', props) }}*/
        >
          <View style={styles.imageWrap}>
          </View>
          <Text style={styles.menuText}>New packing list</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => { navTo('WelcomeScreen', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.logout} />
          </View>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
        <Image source={images.logo_blink} style={styles.logo} />
      </View>
    </SafeAreaView>
  )

}

export default withNavigation(Menu)
