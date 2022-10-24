import { StyleSheet } from 'react-native'
import { width, height } from '../../utils/width.util'

export default StyleSheet.create({
  container: {
    width: width[100],
    height: height[100],
    backgroundColor: '#fff'
  },
  textTitle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#254680',
    alignSelf: 'center',
    borderRadius: 9,
    top: 10
  },
  buttonImage: {
    alignSelf: 'center',
    marginVertical: '25%'
  }
})
