import React from 'react';
import {StyleSheet, ScrollView, TextInput } from 'react-native';
import SaveAds from './SaveAds';




const SaveAdsFile = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.saveadsbody}>
               <TextInput
           style={styles.input}
           placeholder="Search for product, brands categories and vendor"
           // onChangeText={onChangeText}
           // value={text}
           />
           <SaveAds />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    saveadsbody: {
        paddingLeft:7,
        paddingRight:7,
    },
    input: {
        height: 35,
        marginTop:6,
        marginLeft:1.5,
        marginRight:1.5,
        borderWidth: 0.98,
        borderColor: '#525252',
        padding: 10,
      },


})

export default SaveAdsFile;