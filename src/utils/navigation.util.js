import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import Home from '../screens/Home/Home';
import Tasks from '../screens/Tasks/Tasks';
import Scan from '../screens/Scan/Scan';

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }


// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Closed = createNativeStackNavigator();
const Main = createNativeStackNavigator();

function ClosedNav() {
  return (
    <Closed.Navigator>
      <Closed.Screen name="Welcome to Union Logistics" component={WelcomeScreen} />
      <Closed.Screen name="Sign In" component={SignIn} />
    </Closed.Navigator>
  );
}

function MainNav() {
  return (
    <Main.Navigator>
      <Main.Screen name="Home" component={Home} />
      <Main.Screen name="Tasks" component={Tasks} />
      <Main.Screen name="Scan" component={Scan} />
    </Main.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    // <Drawer.Navigator
    //   useLegacyImplementation
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}
    // >

    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false
      }}
    >
      <Drawer.Screen
        name="Logout"
        component={ClosedNav}
        options={
          { headerShown: false }
        }
      />
      <Drawer.Screen
        name="Home page"
        component={MainNav}
        options={
          { headerTitle: "" }
        }
      />
    </Drawer.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}
