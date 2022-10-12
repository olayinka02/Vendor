import React from 'react';
import { View, StyleSheet, Image,  } from 'react-native';



const Header = () => {
    return (
        
            <View style={styles.childContainer}>
                <Image source={require('./assets/Hamburger.png')} />
                <View style={styles.rightIcon}>
                    <Image source={require('./assets/search.png')} />
                    <Image source={require('./assets/notification.png')} />
                    <Image source={require('./assets/avater.png')} />
                </View>
            </View>

            
    )
}

const styles = StyleSheet.create({
  
    childContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#399A19',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-start'
    },
    rightIcon: {
        width: '38%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

})

export default Header;