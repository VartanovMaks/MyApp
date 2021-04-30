import React, { useEffect, useState } from "react"
import {View,FlatList, StyleSheet,Text} from 'react-native'
import {getProducts} from '../Api/Api'

export const Products = ()=>{
    const [products, setProducts] = useState([]);

    async function loadProducts(){
        setProducts(await getProducts());
    }

    useEffect ( ()=>{
        loadProducts();
    },[])
    
    return (
        <View>
            <FlatList data={products} 
            renderItem={({item})=>{
                return (
                        <View>
                        <Text style={styles.text}> Product name {item.title}</Text>
                        <Text>price $ {item.price}</Text>
                        </View>
                        
                )}} 
            keyExtractor={item => item.description}/>
        </View>
        
    )
}

let styles = StyleSheet.create({
    
    text : {
        height: 70,
        width: '80%',
        fontSize: 16,
        marginBottom: 20,
        backgroundColor: 'lightblue'
    },
    tinyLogo: {
        width:50,
        height:50
    }
    
});