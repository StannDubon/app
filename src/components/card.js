import React from 'react';
import {StyleSheet, Text } from 'react-native';

const Card = ({card_text, card_image}) => {

var fileurl = "./src/img/"+card_image
var image = Asset.fromModule(require(fileurl)).uri;

    return ( 
        <View style={styles.card}>

            <Image
            style={styles.image}
            source={{ uri: image }}></Image>

            <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>card_text</Text>
            </View>
        </View>
     );
}
 
export default Card;


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10
      },
      card:{
        backgroundColor: "#00ff00",
        height: 170,
        width: '31%',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
      },
      cardText: {
        color: 'white'
      },
      cardTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});