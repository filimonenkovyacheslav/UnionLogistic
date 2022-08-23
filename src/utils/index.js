export const navTo = (screen, props) => {
  const { navigation } = props
  navigation.navigate(screen)
  if (navigation && navigation.closeDrawer) {
    navigation.closeDrawer()
  }
}

export const navToWithParams = (screen, props) => {
  const { navigation } = props
  navigation.navigate('Home page', {
   screen: screen,
   params: {
     userName: props.userName,
     token: props.token,
     userRole: props.userRole
   }
  })
  if (navigation && navigation.closeDrawer) {
    navigation.closeDrawer()
  }
}
