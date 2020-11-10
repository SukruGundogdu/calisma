import React from "react";
import {SafeAreaView, Text, Button, View} from "react-native";
import { useSelector, useDispatch } from "react-redux";


const Component_A = () => {
    const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();

    return(
        <View style={{flex:1, backgroundColor:"#eceff1"}}>
            <Text>Component_A</Text>
            <Text style={{fontSize: 40}}>Counter: {myCounter}</Text>
            <Button
                title="Arttır"
                onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
            />

            <Button
                title="Azalt"
                onPress={() => dispatch({ type: "DECREASE_COUNTER"})}
            />

            <Button
                title="Kullanıcı Adı Güncelle"
                onPress={() => dispatch({
                    type: "SET_USERNAME",
                    payload: {
                        newUserName: "ezran"
                    }
                })}
            />
        </View>
    )
}

export default Component_A;