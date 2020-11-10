import React, {useState} from "react";
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, TextPropTypes, Alert, KeyboardAvoidingView} from "react-native";

import Button from "./components/Button"
import InputPanel from "./components/InputPanel";


const LIMIT = 100;

const App = () => {

    const [userName, setUserName] = useState("");

    const myNumber = 9;

    function sayHello () {
        alert("Hello there!")
    }

    return(
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS == 'android' ? null : 'padding'}>
            <View>
                <Text style={{fontSize: 20}} >Hello {LIMIT}</Text>
                <Text style={{fontSize: 20}} >{myNumber}</Text>
                <Text style={{fontSize: 20}} >Hello {userName}</Text>
            </View>


        <Button
            myOnpress={() => sayHello()}
            color="#81d4fa"
            banner="Press me!!"
            />

        <Button
            myOnpress={() => Alert.alert("Clarusway", "Fullstack 4ever")}
            banner="Press me and say hi!!"
            />

        <InputPanel
            sendText={(myValue) => {setUserName(myValue)}}
        />

</KeyboardAvoidingView>
        </SafeAreaView>
    )

}


export default App;