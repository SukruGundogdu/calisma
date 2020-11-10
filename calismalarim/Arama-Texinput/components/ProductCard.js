import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";


const ProductCard = ({product}) => {
    return(
        <View style={styles.container} >
            <Image
                source={{uri: product.imgURL}}
                style={[styles.image,{opacity: product.inStock ? null : 0.5}]}
            />

            <View style={{flex:1, justifyContent:"center"}} >
                <Text>{product.title}</Text>

                <View style={{flexDirection:"row"}} >
                    <Text style={{fontWeight:"bold"}} >{product.price}</Text>
                    {product.inStock ? null : <Text style={styles.stok} >Aktif Degil</Text>}
                </View>

            </View>


        </View>
    )
}


export {ProductCard}

const styles = StyleSheet.create({
   image: {
    height: Dimensions.get("window").height / 4,
    resizeMode: "contain",
   },
   container: {
       flex:1,
       margin:10,
       padding:10,
       borderRadius:5,
       borderWidth: 1,
       borderColor: "#e0e0e0"
   },
   stok: {
       color: "red",
       fontWeight:"bold"
   },
})