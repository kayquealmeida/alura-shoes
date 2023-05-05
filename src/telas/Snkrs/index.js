import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import Novidades from "./Components/Novidades";
import Item from "./Components/Item";
import Texto from "../../components/Texto";

export default function Sknrs({ topo, detalhes, itens }) {
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <View style={styles.detalhesContent}>
            <Detalhes {...detalhes} />
          </View>
          <View>
            <Novidades {...itens} />
          </View>
        </>
      }}
      ListFooterComponent={() => {
        return <>
          <TouchableOpacity style={styles.botao} onPress={() => { }}>
            <Texto style={styles.botaoTexto}>Comprar</Texto>
          </TouchableOpacity>
        </>
      }}
    />
  </>
}

const styles = StyleSheet.create({
  detalhesContent: {
    paddingTop: 16,
    paddingHorizontal: 18
  },
  botao: {
    width: 220,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#000000",
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 30
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 24,
    paddingVertical: 12
  }
});