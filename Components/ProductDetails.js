import { Button } from "react-native"
import {View,StyleSheet,Text,Image} from 'react-native'
import React, {useEffect} from "react";

export const ProductDetails =(props)=>{
    let {route:{params}} = props;
    console.log(props)
    console.log(params.data)
    let {item} = params.data
    // export const ProductDetails =({route})=>{
    // let {params} = route;
    // console.log(params.data)
    //console.log(props.route.params.data)
    // деструктуризация {route:{params}:data}}}

    const {navigation} = props;
    useEffect( ()=> {
        navigation.setOptions({title:item.title})
    },[])
    return (
        <View>
            <Text style={styles.text}> Product name {item.title}</Text>
            <Text>price $ {item.price}</Text>
            <Text style={styles.text}> Product name {item.description}</Text>
            <Image style={styles.tinyLogo} source={{
                    uri:item.image
                  }}/>
            <Button title={'Back to list'} onPress={()=>{
                navigation.navigate('Products list')
            }}  >

            </Button>
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