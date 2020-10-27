import React, {useContext} from 'react'
import {Button, View, Text, StyleSheet, FlatList} from "react-native"
import {Context} from "../context/BlogContext";

const IndexScreen = () => {
    const {state, addBlogPost, removeBlogPost} = useContext(Context);
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title={"Add Post"} onPress={addBlogPost}/>
            <Button title={"Remove Post"} onPress={removeBlogPost}/>
            <FlatList
                data = {state}
                keyExtractor = {blogPosts => blogPosts.title}
                renderItem = {({item}) => {
                    return(
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen