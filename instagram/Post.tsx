import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface PostPropsI {
    data: {
        id: number,
        name: string,
        image: any,
        likeCount: number,
        avatar: any,
        isLike: boolean
    },
    toggleLike: Function
}

const Post = (props: PostPropsI) => {

    const { data, toggleLike } = props;

    return (
        <View style={styles.postContainer}>
            <View style={styles.userWrapper}>
                <Image
                    source={data.avatar}
                    style={styles.avatar}
                    resizeMode="cover"
                />
                <Text style={styles.username}>{data.name}</Text>
            </View>
            <Image
                source={data.image}
                resizeMode="cover"
                style={styles.postImage}
            />
            <View style={styles.postActionWrapper}>
                <View style={styles.postAction}>
                    {
                        !data.isLike ? (
                            <AntDesign onPress={() => toggleLike()} style={styles.actionItem} name="hearto" size={25} color="black" />
                        ) : (
                                <AntDesign onPress={() => toggleLike()} style={styles.actionItem} name="heart" size={24} color="red" />
                            )
                    }
                    <Feather style={styles.actionItem} name="message-square" size={25} color="black" />
                    <Feather style={styles.actionItem} name="upload" size={25} color="black" />
                </View>

                <View style={styles.likeCount}>
                    <AntDesign style={styles.actionItem} name="heart" size={24} color="black" />
                    <Text>{data.likeCount} likes</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 12
    },
    userWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        paddingHorizontal: 12
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12
    },
    username: {
        fontSize: 16,
        fontWeight: "500"
    },
    postImage: {
        height: 300,
        width: "100%",
        backgroundColor: "black"
    },
    postActionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: "space-between"
    },
    postAction: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
    },
    actionItem: {
        marginRight: 10
    },
    likeCount: {
        flexDirection: "row"
    }
})

export default Post;