import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TrendingAds from './TrendingAds';




const TrendingAdsFile = () => {
    return (
        <View style={styles.Trendingadsbody}>
            <Text style={styles.Trendingadshead} >
                    TrendingAds Ads
                </Text>
            <TrendingAds />
        </View>
    )
}

const styles = StyleSheet.create({
    Trendingadshead: {
        color: '#175104',
        fontWeight: '700',
        marginLeft:5,
    },
    Trendingadsbody:{
        marginTop: 25,
        
    }

})

export default TrendingAdsFile;