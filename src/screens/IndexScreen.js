import React, {useContext} from 'react'
import {TouchableOpacity, Button, View, Text, StyleSheet, FlatList} from "react-native"
import {Context} from "../context/BlogContext";
import {Entypo} from "@expo/vector-icons"

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, removeBlogPost} = useContext(Context);
    return (
        <View>
            <Button title={"Add Post"} onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                                    <Entypo style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,

    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen