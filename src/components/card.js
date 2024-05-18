import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({ card_text, card_image, card_color }) {

    const styles = StyleSheet.create({
        image: {
            width: '100%',
            height: 100,
            borderRadius: 10
        },
        card: {
            backgroundColor: card_color, // Usar el color pasado como prop
            height: 150,
            width: 110,
            borderRadius: 10,
            padding: 5,
            alignItems: 'center',
            marginBottom: 5
        },
        cardText: {
            color: '#292929',
            fontWeight: '500'
        },
        cardTextContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: card_image }}></Image>

            <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{card_text}</Text>
            </View>
        </View>
    );
}
