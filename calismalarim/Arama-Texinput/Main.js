import React, {useEffect, useState} from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet, Alert } from "react-native";

import proudctData from "./product_data.json"
import {ProductCard} from "./components"
import { TextInput } from "react-native-gesture-handler";


// console.log(proudctData)

const App = () => {

    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([])

    const renderListItem = ({item}) => <ProductCard product={item} />
    

    useEffect(() => {
        // Alert.alert("Sukru's Shop", "Hoşgeldiniz, keyifli alışverişler..");
        setDisplayList(proudctData)
    }, [])

    useEffect(() => {
        const filteredValue = proudctData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();

            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue])

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}} >
                <Text style={styles.head} >Sukru's Shop</Text>

                <View style={styles.searchBar} >
                    <TextInput
                    placeholder="Ürün Ara"
                    onChangeText={(value)=> setSearchValue(value)}
                    />
                </View>

                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={displayList}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}


export default App;

const styles = StyleSheet.create({
    head: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 40,
        textAlign:"center"
    },
    searchBar: {
        backgroundColor: "#e0f7fa",
        margin:5,
        padding:5,
        borderRadius:5
    }
})