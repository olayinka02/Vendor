import React from 'react';
import { StyleSheet, ScrollView, 
   } from 'react-native';
import Category from './Category';
import Banner from './Banner';
import TopSelling from './TopSelling';

import TrendingAdsFile from './TrendingAds/TrendingAdsFile';




const ScrollViews = () => {
    return (
     
            <ScrollView showsVerticalScrollIndicator={false} style={styles.componentScrollview}>
               <Banner />
               <Category />
               <TopSelling />
               {/* <TopSelling /> */}
               <TrendingAdsFile />
            </ScrollView>
       
    )
}

const styles = StyleSheet.create({
   
    componentScrollview: {
        width: '100%',
        paddingLeft: 3,
        paddingRight: 3,

    },
   
})

export default ScrollViews;