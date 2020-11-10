import React, {useState} from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView, FlatList } from 'react-native';

import {main} from "./styles"
import {TodoCard, TodoInput} from "./component"


const Main = () => {
    const [list, setList] = useState([])

    function addTodo(girilendeger) {
        const element = {
            id: list.length,
            todo: girilendeger,
            isDone: false
        
        }

        const newArray = [element, ...list]
        // newArray.push(element)

        setList(newArray)
    }

    function doneTodo(todoId) {
        const newArray = [...list]
        const todoIndex = newArray.findIndex(k => k.id == todoId)

        newArray[todoIndex].isDone = !newArray[todoIndex].isDone

        setList(newArray)
    }

    function removeTodo(todoId){
        const newArray = [...list]
        const todoIndex = newArray.findIndex(k => k.id === todoId)

        newArray.splice(todoIndex, 1);
        setList(newArray)
        
    }

    const renderData = ({item}) => {
        return (
            <TodoCard 
                data1={item} 
                onDone={() => doneTodo(item.id)}
                onRemove={() => removeTodo(item.id)}
            /> 
        )
    }

    return(
        <SafeAreaView style={main.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'android' ? null : 'padding'}>
           
                <View style={main.banner} >
                    <Text style={main.todoText} >TODO</Text>
                    <Text style={main.todoCount} >{list.filter(value => value.isDone === false).length}</Text>
                </View>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={list}
                    renderItem={renderData}
                    ListEmptyComponent={() => <Text style={main.emptyComponent} >Nothing to do...</Text>}
                />


            <TodoInput
                onTodoEnter={deger => addTodo(deger)}
            />

            
            </KeyboardAvoidingView>
        </SafeAreaView>
        
    )
}


export default Main;