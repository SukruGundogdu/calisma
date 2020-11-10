import React from "react";
import { Text, View, Image, StyleSheet, Dimensions,ScrollView} from "react-native";


const CatsCard = ({cats}) => {           // props yerine {cats}  <Text> içindeki props.cats.title yerine cats.title 
    return (
        <View style={styles.container} >
            <Image
            source={{uri: cats.imageUrl}}
            style={styles.image}
            />
            <Text style={styles.title} >{cats.title}</Text>    
            <Text style={styles.description} >{cats.description}</Text>    
        </View>
    );
}


export {CatsCard};



const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get("window").width / 2,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        margin:5,
        padding:5
    },
    title: {
        fontWeight: "bold",
        fontSize: 17
    },
    image: {
        height: Dimensions.get("window").height * 0.30,
        borderRadius:5
    }

})