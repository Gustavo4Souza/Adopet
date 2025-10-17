import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <View style={styles.Wrapper}>
          <Image
            source={require("../assets/ImagensAdopet/Imagem - Zelda.png")}
          />
          <Text style={styles.Name}>Zelda</Text>
          <Text style={styles.Text}>
            2 anos {"\n"}
            Macho {"\n"}
            Porte pequeno {"\n"}
            Calmo e educado {"\n"}
            Se dá bem com outros cachorros {"\n"}
            Gosta de brincar e passear {"\n"}
            Gosta de crianças mais velhas mas se assusta com bebês
          </Text>
          <Text style={styles.Text}>Rio de Janeiro (RJ)</Text>
          <Text style={styles.Text}>
            Falar com o responsável
            <Text> Compartilhar</Text>
          </Text>
          <Text style={styles.Text}>
            Dunga é encantador, conquista a todos com sua serenidade. Tem pelo
            macio e olhos expressivos que revelam a doçura de sua personalidade.
            Adora passar o tempo relaxando ao lado de seus humanos ou em um
            cantinho ensolarado. Este companheiro leal e afetuoso vai trazer uma
            atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como
            parte da família!
          </Text>
          <Image source={require("../assets/ImagensAdopet/Imagem Dunga.png")} />
          <Image source={require("../assets/ImagensAdopet/Imagenm Lua.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    alignItems: "center",
  },
  Wrapper: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    gap: 20,
    alignItems: "center",
    width: "80%",
  },
  Name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3772FF",
  },
  Text: {
    fontSize: 14,
    color: "#737380",
  },
});
