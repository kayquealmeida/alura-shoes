import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";

export default function Item({ item: { nome, imagem } }) {
  return <View style={styles.itemContent}>
    <View style={styles.item}>
      <Image source={imagem} style={styles.imagem}/>
      <Texto style={styles.nome} key={nome}>{nome}</Texto>
    </View>
  </View>
}

const styles = StyleSheet.create({
  itemContent: {
    paddingHorizontal: 16
  },  
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  imagem: {
    width: 62,
    height:62
  },
  nome: {
    color: "#000000",
    letterSpacing: 1,
    marginLeft: 20,
    fontSize: 20,
    alignSelf: "center"
  }
})