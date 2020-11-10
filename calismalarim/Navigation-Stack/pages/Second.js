import React from "react";
import {SafeAreaView, View, Text, Button} from "react-native";


const Second = (props) => {

    const userNamber = props.route.params.myNumber
    const userValue = props.route.params.selectValue

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:40}} >Second</Text>
                <Text style={{fontSize:40}} >{userNamber}</Text>
                <Text style={{fontSize:40}} >{userValue}</Text>
                <Button
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    )
}

export default Second;