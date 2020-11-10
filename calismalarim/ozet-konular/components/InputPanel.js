import React, {useState} from "react";
import {TextInput, View, TouchableOpacity, Text, SafeAreaView, StyleSheet} from "react-native";




const InputPanel = (props) => {

    const [inputText, setInputText] = useState("");

    const sendValue = () => {
        setInputText("");
        props.sendText(inputText)
    }

    return(
       <View style={styles.container}>

           <View style={styles.inputContainer} >
                <TextInput
                    onChangeText={value => setInputText(value)}
                    placeholder="Arama"
                    value={inputText}
                />
           </View>

           <TouchableOpacity 
           style={styles.butonContainer}
           onPress={sendValue}
            >
               
               <Text style={{textAlign:"center"}} >Seç</Text>
           </TouchableOpacity>

       </View>
    )
}

export default InputPanel;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfd8dc",
        margin:10,
        padding:10,
        borderRadius:5
    },
    inputContainer: {
        backgroundColor: "#eceff1",
        margin: 10,
        padding:10,
        borderRadius:10
    },
    butonContainer: {
        backgroundColor: "#b2dfdb",
        margin:10,
        padding:10,
        borderRadius:10
    }
})

