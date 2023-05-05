import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";

export default function Detalhes({ nomeShoes, logoShoes, subTitulo, descricao }) {
  return <>
  <View style={styles.tituloContent}>
    <Image source={logoShoes} style={styles.logo} />
    <Texto style={styles.tituloShoes}>{ nomeShoes }</Texto>
  </View>
  <Texto style={styles.subTitulo}>{ subTitulo }</Texto>
  <Texto style={styles.descricao}>{ descricao }</Texto>
  </>
}

const styles = StyleSheet.create({
  tituloContent: {
    flexDirection: "row",
    alignItems: "center"
  },  
  tituloShoes: {
    color: "#000000",
    letterSpacing: 2,
    fontSize: 24,
    marginLeft: 15
  },
  logo: {
    width: 88,
    height: 54
  },
  subTitulo: {
    color: "#606060",
    fontSize: 16,
    marginTop: 20
  },
  descricao: {
    color: "#606060",
    fontSize: 16,
    marginTop: 15
  }
})