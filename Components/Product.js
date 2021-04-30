import React from "react"
import {View,StyleSheet,Text} from 'react-native'

export const Product =(store)=>{
    console.log(store)
    return (
        <View>
            <Text style={styles.text}> Product name {store.product.item.title}</Text>
            <Text>price $ {store.product.item.price}</Text>
            {/* <View>
                <Image style={styles.tinyLogo} 
                source={{uri:store.product.item.image}} />
            </View> */}
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
        width:'80%'
    }
    
});