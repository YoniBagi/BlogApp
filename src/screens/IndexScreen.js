import React, {useContext} from 'react'
import {Button, View, Text, StyleSheet, FlatList} from "react-native"
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const {data, addBlogPost, removeBlogPost} = useContext(BlogContext);
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title={"Add Post"} onPress={addBlogPost}/>
            <Button title={"Remove Post"} onPress={removeBlogPost}/>
            <FlatList
                data = {data}
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