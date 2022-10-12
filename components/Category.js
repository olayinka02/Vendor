import React,  { Component }  from 'react';
import { View, StyleSheet, Image, ScrollView, Text  } from 'react-native';



class Category extends Component {  
      state = {     
          names: [
            {
                'id': 1,
                'image': require('./assets/laptops.png'), 
                'name':'Electronics'
            },
            {
                'id': 2,
                'image': require('./assets/cars.png'), 
                'name':'Vehicles'
            },
            {
                'id': 3,
                'image': require('./assets/house.png'), 
                'name':'Property'
            },
            {
                'id': 4,
                'image': require('./assets/auto.png'), 
                'name':'Automobile'
            },
            {
                'id': 5,
                'image': require('./assets/babyproduct.png'), 
                'name':'Baby Product'
            },
            {
                'id': 6,
                'image': require('./assets/chair.png'), 
                'name':'Furniture'
            },
            {
                'id': 7,
                'image': require('./assets/wears.png'), 
                'name':'Fashion'
            },
            {
                'id': 8,
                'image': require('./assets/cars.png'), 
                'name':'Electronics'
            },
           
           ]

      }
      render(){

        return(

            <View style={styles.Categorybg}>
            <Text style={styles.Categoryhead} >
                Category
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.CategoryScroll}>
                {
                    this.state.names.map((item, index)=> (  
                    <View key = {item.id} style = {styles.Categorybox}>
                        <Image resizeMode={'cover'} style={{width:60, height:45,}} source={item.image} />
                         <Text style={{fontSize:10,color:'black',}}>{item.name}</Text>
                    </View>
                                    
                    )) 
                }
            </ScrollView>
        </View>
        )
       
      }
    
    };

export default Category;



const styles = StyleSheet.create({

   Categorybg:{
    backgroundColor:'none',
    height:'auto',
    width:'100%',
    marginTop: 25,
    borderRadius:8,
    paddingLeft:3,
    paddingRight:3.
},
Categoryhead:{
    color:'#175104',
    fontWeight:'700',
},
CategoryScroll:{
    marginTop:11,
   
   
},
Categorybox:{
    width:92,
    height:'auto',
    backgroundColor:'#C4F3B5',
    marginRight:8,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
}

})