import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';



class TopSelling extends Component {
    state = {
        names: [
            {
                'id': 1,
                'image': require('./assets/imageone.png'),
                'name': 'Electronics',
                'price': '120.00',
            },
            {
                'id': 2,
                'image': require('./assets/imagetwo.png'),
                'name': 'Electronics',
                'price': '120.00',
            },
            {
                'id': 3,
                'image': require('./assets/imagethree.png'),
                'name': 'Electronics',
                'price': '120.00',

            },
            {
                'id': 4,
                'image': require('./assets/imagefour.png'),
                'name': 'Electronics',
                'price': '120.00',

            },
            {
                'id': 5,
                'image': require('./assets/imagefive.png'),
                'name': 'Electronics',
                'price': '120.00',

            },


        ]

    }
    render() {

        return (

            <View style={styles.Topsellingbg}>
                <Text style={styles.Topsellinghead} >
                    Top Selling Ads
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.TopsellingScroll}>
                    {
                        this.state.names.map((item, index) => (
                            <View key={item.id} style={styles.Topsellingbox}>
                                <Image resizeMode={'cover'} source={item.image} style={styles.imagebox} />

                                <View style={styles.imagetextbody}>
                                    <View style={styles.imagetext}>
                                        <Text style={styles.imagetextone}>{item.name}</Text>
                                        <Text style={styles.imagetexttwo}>NGN{item.price}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image resizeMode={'cover'} style={{width:30, height:30,}} source={require('./assets/savedbtn.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        ))
                    }
                </ScrollView>
            </View>
        )

    }

};

export default TopSelling;



const styles = StyleSheet.create({

    Topsellingbg: {
        backgroundColor: 'none',
        height: 'auto',
        width: '100%',
        marginTop: 25,
        borderRadius: 8,
        paddingLeft:3,
        paddingRight:3.
    },
    Topsellinghead: {
        color: '#175104',
        fontWeight: '700',
    },
    TopsellingScroll: {
        marginTop: 11,


    },
    Topsellingbox: {
        width: 140,
        height: 'auto',
        backgroundColor: '#EAEAEA',
        marginRight: 8,
        paddingBottom: 10,
    },
    imagetextbody:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        alignContent:'space-between',
        padding:4,
    },
    imagebox: {
        width: '100%',
        height:95,
    },
    
    imagetextone: {
        color: '#113A04',
        fontSize: 12,
    },
    imagetexttwo: {
        color: '#175104',
        fontSize: 12,
        fontWeight: 'bold'
    }

})