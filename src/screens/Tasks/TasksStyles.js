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
  },
  dataFormField: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 30,
    justifyContent: 'space-between'
  },
  dataFormTitle: {
    marginHorizontal: 28,
    color: '#BABABA',
    fontSize: 10
  },
  textInputStyle: {
    width: '80%',
    height: 30,
    alignSelf: 'center',
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#BABABA',
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})
