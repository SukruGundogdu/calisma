import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';


const PostCard = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => props.onSelect()}
        >
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.post.img }}
                />

                <View style={styles.footerContainer}>
                    <Text style={styles.title}>{props.post.userName}</Text>
                    <Text numberOfLines={2} >{props.post.description}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PostCard; 


const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height / 3,
        margin:20,
        borderRadius:5
    },
    footerContainer: {
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    }
}) 