import React from "react";
import {View, Text, StyleSheet, Dimensions, Image} from "react-native";


const RestaurantCard = (props) => {
    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.headerText} >{props.item.name}</Text>
            </View>

            <View style={styles.type}>
                <Text style={styles.typeText} >{props.item.type}</Text>
            </View>

            <Image
                style={styles.logo}
                source={{uri: props.item.logo}}
            />

    <Text style={styles.description} >{props.item.description}</Text>

            <Text style={styles.review} >{props.item.review}.</Text>

        </View>
    )
}


export { RestaurantCard };

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
        padding:5,
        margin:5,
        borderRadius:5,
        backgroundColor: "#ffe0b2"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 25
    },
    type: {
        margin: 5,
        padding: 5
    },
    typeText:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    logo: {
        height: Dimensions.get("window").height / 4
    },
    description: {
        margin:5,
        padding:5,
        fontWeight: "bold"
    },
    review: {
        margin: 5,
        fontSize: 15,
        fontStyle: "italic"
    }
})