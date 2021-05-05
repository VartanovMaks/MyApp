import React from "react"
import { Button } from "react-native"
import {View,StyleSheet,Text,Image} from 'react-native'

export const Product =(props)=>{
    // console.log(store.product.item.image)
    const{nav} = props; 
    return (
        <View>
            <Text style={styles.text}> Product name {props.product.item.title}</Text>
            <Text>price $ {props.product.item.price}</Text>
            <Image style={styles.tinyLogo} source={{
                    uri:props.product.item.image,
                  }}/>
            <Button title={'Product details'} onPress={()=>{
                nav.navigate('Product details', {data:props.product})
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