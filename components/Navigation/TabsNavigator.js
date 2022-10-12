import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import SaveAdsFile from '../SaveAds/SaveAdsFile';

function WalletScreen({ navigation }) {

  const handleAdminPage = () => {
    navigation.navigate('Admin');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>wallet!</Text>
      <Button onPress={handleAdminPage} title="Go to admin" />
    </View>
  );
}




function AdsScreen({ navigation }) {

  const handleAdminPage = () => {
    navigation.navigate('Admin');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ads!</Text>
      <Button onPress={handleAdminPage} title="Go to admin" />
    </View>
  );
}

function SavedScreen({ navigation }) {

  // const handleAdminPage = () => {
  //   navigation.navigate('Admin');
  // }

  return (
    <View>

      <SaveAdsFile />
      {/* <Text>Saved!</Text> */}
      {/* <Button onPress={handleAdminPage} title="Go to admin" /> */}

      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /> */}
    </View>
  );
}

function MessageScreen({ navigation }) {

  const handleAdminPage = () => {
    navigation.navigate('Admin');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>message!</Text>
      <Button onPress={handleAdminPage} title="Go to admin" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: 'green',
        inactiveBackgroundColor: 'green',
        labelStyle: {
          fontSize: 11,
          marginBottom: 3,
          padding: 0,
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? require('../assets/Vectorhome2.png') : require('../assets/Vectorhome.png')
          } else if (route.name === 'saved') {
            iconName = focused ? require('../assets/VectorSaved2.png') : require('../assets/VectorSaved.png')
          }
          else if (route.name === 'message') {
            iconName = focused ? require('../assets/VectorMessage2.png') : require('../assets/VectorMessage.png')
          }
          else if (route.name === 'myAdvert') {
            iconName = focused ? require('../assets/VectorMyAds2.png') : require('../assets/VectorMyAds.png')
          }
          else if (route.name === 'wallet') {
            iconName = focused ? require('../assets/VectorWallet2.png') : require('../assets/VectorWallet.png')
          }

          return <Image style={{width:24, height:24}} source={iconName} />
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
       
      })}
        
    >
      <Tab.Screen
        name="home"
        component={Home}
         />

      <Tab.Screen 
      name="saved" 
      component={SavedScreen}
     />


      <Tab.Screen 
      name="message" 
      component={MessageScreen}
      />


      <Tab.Screen 
      name="myAdvert" 
      component={AdsScreen}
     />


      <Tab.Screen 
      name="wallet" 
      component={WalletScreen}
    />
      
     
    </Tab.Navigator>
  );
}



export default MyTabs;