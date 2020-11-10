import React from "react";
import {SafeAreaView, Text, Button, View} from "react-native";
import { useSelector } from "react-redux";


const Component_B = () => {
    const ourCounter = useSelector(myGlobalState => myGlobalState.counter);
    const myUserName = useSelector(canim => canim.userName);

    return(
        <View  style={{flex:1, backgroundColor:"#bdbdbd"}}>
            <Text>Component_B</Text>
    <Text style={{fontSize: 40}}>Counter: {ourCounter}</Text>
    <Text style={{ fontSize: 30 }}>Name: {myUserName}</Text>
        </View>
    )
}

export default Component_B;