import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'
import { Asset } from 'expo-asset';
import { Card } from './src/components/card.js';

export default function App() {



  return (
    <View style={styles.container}>
      <>
      <Text style={styles.Title}>
      Titulo
      </Text>

      <Card card_text = {"aksdjlas"} card_image={"img_1.jpg"} />
      
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
    gap: 10
  },

  Title: {
    backgroundColor: '#7368e3',
    width: '100%',
    textAlign: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    color: 'white',
    fontWeight: '500'
  }

});
