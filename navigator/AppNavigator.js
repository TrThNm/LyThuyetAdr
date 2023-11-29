import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, Text } from 'react-native-paper';
import { Login, Home, Setting, AddService, ServiceDetails, Customer, Transaction } from '../screens';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name='Home' component={Home} />
//     <Stack.Screen name='AddService' component={AddService} />
//     <Stack.Screen name='ServiceDetails' component={ServiceDetails} />
//   </Stack.Navigator>
// );

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home'},
    { key: 'transaction', title: 'Transaction', focusedIcon: 'hand-coin' },
    { key: 'customer', title: 'Customer', focusedIcon: 'account-group' },
    { key: 'setting', title: 'Setting', focusedIcon: 'account-settings' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    transaction: Transaction,
    customer: Customer,
    setting: Setting,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};


const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='AddService' component={AddService} options={{headerShown:true, title:'Thêm món',headerStyle:{backgroundColor:'#e06464'},headerTintColor:'#fff'}} />
      <Stack.Screen name='EditService' component={AddService} options={{headerShown:true, title:'Sửa món',headerStyle:{backgroundColor:'#e06464'},headerTintColor:'#fff'}} />
      <Stack.Screen name='ServiceDetails' component={ServiceDetails} options={{headerShown:true, title:'Chi tiết món',headerStyle:{backgroundColor:'#e06464'},headerTintColor:'#fff'}}/>
      <Stack.Screen name='Setting' component={Setting} />
      <Stack.Screen name='Home' component={MyComponent}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
