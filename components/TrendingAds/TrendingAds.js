import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

const Info = [
  {
    id: 1,
    image: require('../assets/imagetwo.png'),
    name: 'Electronics',
    price: '120.00',
  },
  {
    id: 2,
    image: require('../assets/imagetwo.png'),
    name: 'Electronics',
    price: '120.00',
  },
  {
    id: 3,
    image: require('../assets/imagethree.png'),
    name: 'Electronics',
    price: '120.00',

  },
  {
    id: 4,
    image: require('../assets/imagefour.png'),
    name: 'Electronics',
    price: '120.00',

  },
  {
    id: 5,
    image: require('../assets/imagefive.png'),
    name: 'Electronics',
    price: '120.00',

  },
  {
    id: 6,
    image: require('../assets/imagefour.png'),
    name: 'Electronics',
    price: '120.00',

  },
  {
    id: 7,
    image: require('../assets/imagefive.png'),
    name: 'Electronics',
    price: '120.00',

  },
];


export default function TrendingAds() {
  const [data, setData] = useState(Info)
  return (
    <FlatList data={data} numColumns={2} keyExtractor={(item) => item.name} renderItem={({ item }) => {
      return (
        
        
       
        <View style={styles.inner} >
          <Image resizeMode={'cover'} style={styles.imagebox} source={item.image} />

          <View style={styles.imagetextbody}>
            <View style={styles.imagetext}>
              <Text style={styles.imagetextone}>{item.name}</Text>
              <Text style={styles.imagetexttwo}>NGN{item.price}</Text>
            </View>
            <TouchableOpacity>
              <Image resizeMode={'cover'} style={{width:30, height:30,}} source={require('../assets/savedbtn.png')} />
            </TouchableOpacity>
          </View>

        </View>
      
   
      )
    }}>
    </FlatList>
  );
}






const styles = StyleSheet.create({

  inner : {
    flexDirection: "column",
    marginVertical: '2%',
    marginHorizontal:'2%',
    width:'46%',
   
  },

 
  imagetextbody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'space-between',
   
  },
  imagebox: {
    width: '100%',
    height: 100,
   
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