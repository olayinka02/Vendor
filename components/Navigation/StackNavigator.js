import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './TabsNavigator';

function AdminScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Admin Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={MyTabs}
                options={{
                    headerLeft: () => (
                        <Image style={{ width: 25, height: 20, marginRight: 10 }} source={require('../assets/Hamburger.png')} />
                    ),

                    headerRight: () => (
                        <View style={styles.rightIcon}>
                            <View style={{marginRight:4,}}>
                                <Image resizeMode={'cover'} style={{width:35, height:35,}} source={require('../assets/search.png')} />
                            </View>
                            <View style={{marginRight:4,}}>
                                <Image resizeMode={'cover'} style={{width:35, height:35,}} source={require('../assets/notification.png')} />
                            </View>
                            <View>
                                <Image resizeMode={'cover'} style={{width:35, height:35,}} source={require('../assets/avater.png')} />
                            </View>

                        </View>
                    ),

                    headerStyle: {
                        backgroundColor: 'green',
                    },

                    headerTitleStyle: {
                        color: 'green'
                    }

                }}
            />
            <Stack.Screen name="Admin" component={AdminScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    rightMenu: {
        height: 35,
        flexDirection: "row",
        alignItems: 'center',

    },
    rightIcon: {
        width: '45%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    icons: {
        marginRight: 10,
        width: 30,
        height: 30
    }
})

export default MyStack;