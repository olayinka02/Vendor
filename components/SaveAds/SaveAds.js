import React, { useState } from "react";
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const Info = [
    {
        id: 1,
        image: require('../assets/imageonex.png'),
        productname: 'Laptops HP Envy 12GB Intel SSDT 1274',
        price: '490,000.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ac, nunc amet ut leo turpis. Risus, vestibulum, et sodales a interdum dolor sit amet, consectetur adipiscing elit. Euismod ac, nunc amet ut leo turpis. Risus, vestibulum, et sodales a interdum.',
        location: 'karu, Abuja',
        time: '09 June,2022',
    },

    {
        id: 2,
        image: require('../assets/imagetwox.png'),
        productname: 'Laptops HP Envy 12GB Intel SSDT 1274',
        price: '490,000.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ac, nunc amet ut leo turpis. Risus, vestibulum, et sodales a interdum dolor sit amet, consectetur adipiscing elit. Euismod ac, nunc amet ut leo turpis. Risus, vestibulum, et sodales a interdum.',
        location: 'karu, Abuja',
        time: '09 June,2022',
    },
    {
        id: 3,
        image: require('../assets/imageonex.png'),
        productname: 'Laptops HP Envy 12GB Intel SSDT 1274',
        price: '490,000.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ac, nunc amet ut leo turpis. Risus, vestibulum, et sodales a interdum dolor sit amet, consectetur adipiscing elit. Euismod ac, nunc amet ut leo turpis. Risus, vestibulum, et sodales a interdum.',
        location: 'karu, Abuja',
        time: '09 June,2022',
    },



];


export default function SaveAds() {
    const [data, setData] = useState(Info)




    return (
        <FlatList style={{ marginTop: 9, }} data={data} numColumns={1} keyExtractor={(item) => item.name} renderItem={({ item }) => {
            return (



                <View style={styles.inner} >
                    <Image resizeMode={'cover'}
                        style={{ width: '100%', height: 240 }} source={item.image} />
                    <Text style={styles.productname}>{item.productname}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <View style={styles.pricesection}>
                        <Text style={styles.price}>NGN{item.price}</Text>
                        <TouchableOpacity style={styles.brand}>
                            <Text style={{ color: '#175104' }}>New</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.iconsection}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'row', marginRight: 4, }}>
                                <Image resizeMode={'cover'}
                                    style={{ width: 18, height: 23, }}
                                    source={require('../assets/geolocation.png')} />
                                <Text>{item.location}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Image resizeMode={'cover'}
                                    style={{ width: 23, height: 23, }}
                                    source={require('../assets/clock.png')} />
                                <Text>{item.time}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Image resizeMode={'cover'}
                                style={{ width: 36, height: 36, }}
                                source={require('../assets/call.png')} />

                            <Image resizeMode={'cover'}
                                style={{ width: 36, height: 36, }}
                                source={require('../assets/ping.png')} />
                        </View>

                    </View>





                </View>


            )
        }}>
        </FlatList>
    );
}






const styles = StyleSheet.create({

    inner: {
        flexDirection: "column",
        width: '100%',

    },
    productname: {
        color: '#113A04',
        fontSize: 18,
        fontWeight: '500',
        marginTop:10,
    },

    description: {
        color: '#656464',
        fontSize: 13,
    },
    price: {
        color: '#113A04',
        fontSize: 18,
        fontWeight: '500',
    },
    pricesection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'space-between',
        padding: 0,
        marginTop: 10,
        marginBottom: 12,
    },
    iconsection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'space-between',
        padding: 0,
        marginTop: 4,
        marginBottom: 16,
    },
    brand: {
        width: 50,
        backgroundColor: '#E7E7E7',
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },




    imagetextbody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'space-between',

    },
    imagebox: {
        flex: 1,


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