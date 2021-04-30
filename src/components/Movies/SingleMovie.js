import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/core';


const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: '#34495e',
        marginBottom: 20,
        flex:1
    },
    image: {
        height: 400,
        width:"100%"
    },
    text: {
        width: '80%',
        padding: 20,
        color:'white'
    }
})

export default function SingleMovie() {

    const navigation = useNavigation();
    const { posterurl, storyline, validImage, title} = useRoute().params;

    useEffect(() => {
        navigation.setOptions({
            title,
            backgroundColor: '#34495e'
        })
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={
                    validImage
                        ? { uri: posterurl }
                        : require('../../assets/no_image_available.jpg')
                    }
                />

                <Text style={styles.text}>
                    {storyline}
                </Text>
            </View>
        </ScrollView>
    )
}
