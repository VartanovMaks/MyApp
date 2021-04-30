import React, { useEffect, useState } from "react";
import {View,FlatList} from 'react-native';;
import {getProducts} from '../Api/Api';
import {Product} from './Product';

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
                    return <Product product={{item}}/>
                }} 
                keyExtractor={item => item.description}/>
        </View>
        
    )
}

