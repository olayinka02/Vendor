import React from 'react';
import { View, StyleSheet, Image,  
    ImageBackground, TouchableOpacity, Text } from 'react-native';





const Banner = () => {
    return (
     
           
                <View style={styles.componentBarner}>
                    <ImageBackground source={require('./assets/bannerbg.png')} resizeMode="cover" >
                        <View style={styles.componentBarnerx}>
                            <Image resizeMode={'cover'} style={{width:150,height:150,}} source={require('./assets/bannerimage.png')} />

                            <View style={styles.componentBarnerLeft} >
                                {/* <Image source={require('./assets/olijetitle.png')} /> */}
                                <TouchableOpacity style={styles.componentSellButton}>
                                    <Text style={{color:'white',}}>
                                        SELL
                                    </Text>
                                </TouchableOpacity> 
                            </View>

                        </View>
                    </ImageBackground>
                </View>

                
          
       
    )
}

const styles = StyleSheet.create({
   
  
    componentBarner: {
        width: '100%',
        height: 'auto',
        marginTop: 5,
        justifyContent: 'space-between',
        borderRadius: 90,
        paddingLeft:3,
        paddingRight:3.
    },
    componentBarnerx: {
        justifyContent: 'space-between',
        flexDirection:'row',
    },
    componentBarnerLeft: {
         flexDirection:'column',
         justifyContent:'center',
         paddingRight:12,
         marginTop:14.
    },
    componentSellButton:{
        width:100,
        alignItems:'center',
        marginTop:8,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#FFA010',
        borderRadius:5,
    }
})

export default Banner;