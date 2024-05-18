import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import Card from "./src/components/card";

export default function App() {

  const coloresHex1 = [
    "#B0E0E6", // Azul claro
    "#87CEEB", // Azul cielo claro
    "#AFEEEE", // Azul pálido
    "#B0C4DE", // Azul acero claro
    "#B0E0E6", // Azul claro
    "#AFEEEE", // Azul pálido
    "#87CEEB"  // Azul cielo claro
  ];

  const coloresHex2 = [
    "#FFCCCB", // Rojo tomate claro
    "#FFC4B2", // Salmón claro
    "#FFDAB9", // Naranja coral claro
    "#FFE4B5", // Naranja claro
    "#FFCCCB", // Rojo tomate claro
    "#FFDAB9", // Naranja coral claro
    "#FFC4B2"  // Salmón claro
  ];

  const coloresHex3 = [
    "#98FB98", // Verde menta claro
    "#7FFFD4", // Verde acuario claro
    "#90EE90", // Verde claro
    "#98FB98", // Verde menta claro
    "#7FFFD4", // Verde acuario claro
    "#90EE90", // Verde claro
    "#98FB98"  // Verde menta claro
  ];
  

  const DATA_1 = [
    {
      text: "Hidrogeno",
      image:
        "https://static8.depositphotos.com/1257959/835/i/450/depositphotos_8351189-stock-photo-hydrogen-atom-on-white-background.jpg"
    },
    {
      text: "Helio",
      image:
        "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/Caracteristicas-del-helio-1.jpg"
    },
    {
      text: "Litio",
      image:
        "https://static.wikia.nocookie.net/quimica/images/c/c1/Litio.png/revision/latest?cb=20081127012356&path-prefix=es"
    },
    {
      text: "Berilio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSgaIrRR8k5p6_i9_jFZxCnLyndmvXXJ6dJGByYWfTg&s"
    },
    {
      text: "Boro",
      image:
        "https://static.wikia.nocookie.net/gacetamundial/images/7/7c/%C3%81tomo_de_boro.png/revision/latest/scale-to-width-down/180?cb=20100528151450&path-prefix=es"
    },
    {
      text: "Carbono",
      image:
        "https://s1.static.brasilescola.uol.com.br/img/2015/11/atomo-carbono.jpg"
    },
  ];

  const DATA_2 = [
    {
      text: "Charlie",
      image:
        "https://preview.redd.it/6hidreu3ajj81.jpg?width=1080&crop=smart&auto=webp&s=0341f3f221c10ba4b9d8180901ecd0d8b17d2ecf"
    },
    {
      text: "Alastor",
      image:
        "https://64.media.tumblr.com/db2da2ca981d1558bd888dbd64faed1c/d4a149c19e71288c-21/s640x960/c9c8aa85eca6731a9c8454fc5c13e86a8aac3e32.jpg"
    },
    {
      text: "Angel",
      image:
        "https://i.pinimg.com/736x/b9/d5/37/b9d537e25b1db19f02f09b91797af736.jpg"
    },
    {
      text: "Husk",
      image:
        "https://i.pinimg.com/736x/20/74/10/207410925ea6dc50a96c895a10fdfb31.jpg"
    },
    {
      text: "Vox",
      image:
        "https://i.pinimg.com/236x/78/9c/fb/789cfb439833c2ea8cb7c51e29ca6312.jpg"
    },
    {
      text: "Vaal",
      image:
        "https://pbs.twimg.com/media/GGgT7GbW4AAvneC.jpg"
    },
  ];

  const DATA_3 = [
    {
      text: "Kanye West",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/1200px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg"
    },
    {
      text: "Drake",
      image:
        "https://media.vogue.es/photos/5ec167fb62e90b6607c1716e/4:3/w_1331,h_998,c_limit/002-Drake-vogue-130520-credit-Getty-Images.jpg"
    },
    {
      text: "Tyler The Creator",
      image:
        "https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada"
    },
    {
      text: "Shotgun Willy",
      image:
        "https://i.scdn.co/image/ab6761610000e5ebd4638a34ab9f6af23f11e8c3"
    },
    {
      text: "Yun Head",
      image:
        "https://i1.sndcdn.com/avatars-1f8aAP1IfiwurAEt-Zjj0nQ-t1080x1080.jpg"
    },
    {
      text: "MC Virgins",
      image:
        "https://yt3.googleusercontent.com/Gz66_jjsBMmGx5zBWVE66WfoSh9wna6_FZF_ynQ74LIkj5w08h_X4xhF9WKIWKgOa-kghjSmAQ=s900-c-k-c0x00ffffff-no-rj"
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <>
        <View style={styles.section}>
          <Text style={styles.title}>Tabla periodica</Text>
          <FlatList
            style={styles.cardFlatList}
            data={DATA_1}
            numColumns={3}
            columnWrapperStyle={styles.cardColumnWrapper}
            renderItem={({ item }) => (
              <Card
                card_text={item.text}
                card_image={item.image}
                card_color={coloresHex1[Math.floor(Math.random() * coloresHex2.length)]}
                style={styles.card}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Hazbin Hotel</Text>
          <FlatList
            style={styles.cardFlatList}
            data={DATA_2}
            numColumns={3}
            columnWrapperStyle={styles.cardColumnWrapper}
            renderItem={({ item }) => (
              <Card
                card_text={item.text}
                card_image={item.image}
                card_color={coloresHex2[Math.floor(Math.random() * coloresHex2.length)]}
                style={styles.card}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Artistas</Text>
          <FlatList
            style={styles.cardFlatList}
            data={DATA_3}
            numColumns={3}
            columnWrapperStyle={styles.cardColumnWrapper}
            renderItem={({ item }) => (
              <Card
                card_text={item.text}
                card_image={item.image}
                card_color={coloresHex3[Math.floor(Math.random() * coloresHex3.length)]}
                style={styles.card}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 15,
    color: "white",
    fontWeight: "500",
    marginBottom: 10,
  },
  cardFlatList: {
    width: "100%",
  },
  cardColumnWrapper: {
    justifyContent: "space-between",
  },
});