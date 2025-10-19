import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconChat, IconShare } from "../components/icons";

export default function Index() {
  const petInfo = [
    "• 2 anos",
    "• Macho",
    "• Porte pequeno",
    "• Calmo e educado",
    "• Se dá bem com outros cachorros",
    "• Gosta de brincar e passear",
    "• Gosta de crianças mais velhas mas se assusta com bebês",
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.Wrapper}>
          <View style={styles.Imagens}>
            <Image
              source={require("../assets/ImagensAdopet/Imagem Dunga.png")}
            />
          </View>
          <View style={styles.PetInfo}>
            <Text style={styles.Name}>Zelda</Text>
            <View style={styles.listContainer}>
              {petInfo.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  {" "}
                  {item}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.Localizacao}>
            <Text style={styles.Text}>Rio de Janeiro (RJ)</Text>
            <View style={styles.Contatos}>
              <Pressable style={styles.ButtonContatos}>
                <IconChat />
                <Text style={styles.Text}>Falar com o responsável</Text>
              </Pressable>
              <Pressable style={styles.ButtonContatos}>
                <IconShare />
                <Text style={styles.Text}>Compartilhar</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.Text}>
            Dunga é encantador, conquista a todos com sua serenidade. Tem pelo
            macio e olhos expressivos que revelam a doçura de sua personalidade.
            Adora passar o tempo relaxando ao lado de seus humanos ou em um
            cantinho ensolarado. Este companheiro leal e afetuoso vai trazer uma
            atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como
            parte da família!
          </Text>
          <View style={styles.Imagens}>
            <Image
              style={styles.Imagens}
              source={require("../assets/ImagensAdopet/Dunga1.png")}
            />
            <Image
              style={styles.Imagens}
              source={require("../assets/ImagensAdopet/Dunga2.png")}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
  },
  Wrapper: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    gap: 40,
    alignItems: "left",
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  PetInfo: {
    gap: 5,
  },
  Name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3772FF",
    alignItems: "left",
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    fontSize: 16,
    marginVertical: 2,
    color: "#666",
  },
  Localizacao: {
    gap: 5,
  },
  Contatos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ButtonContatos: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 14,
    color: "#737380",
  },
  Imagens: {
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
});
