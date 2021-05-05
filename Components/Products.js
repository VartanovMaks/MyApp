import React, { useEffect, useState } from "react";
import {View,FlatList, StyleSheet} from 'react-native';
import {getProducts} from '../Api/Api';
import {Product} from './Product';

export const Products = (props)=>{
    const {navigation} = props;
    const [products, setProducts] = useState([]);

    console.log(props)

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
                    return <Product nav= {navigation} product={{item}}/>
                }} 
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
        width:100,
        height:100
    }
    
});