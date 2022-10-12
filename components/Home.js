import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollViews from './ScrollViews';



const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollViews />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

})

export default Home;