import React, {useState} from "react";
import {SafeAreaView, View, Text, Button, TextInput} from "react-native";


const number = 55

const First = (props) => {

    const [userName, setUserName] = useState("");

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:40}} >First Hello</Text>
                <Text style={{fontSize:40}} >{number}</Text>

                <Text style={{fontWeight:"bold", margin:5}} >Girilen Değer: {userName} </Text>
                <View style={{backgroundColor:"#e0e0e0", margin:10, borderRadius:5}} >
                    <TextInput
                        data={userName}
                        onChangeText={text => setUserName(text)}
                    />
                </View>

                <Button
                    title="Go!"
                    onPress={() => props.navigation.navigate("SecondPage", {
                        myNumber : number,
                        selectValue: userName
                      })}
                />
            </View>
        </SafeAreaView>
    )
}


export default First;