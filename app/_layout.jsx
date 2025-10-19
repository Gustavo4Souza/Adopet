import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, View } from "react-native";

function Header() {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Image
          source={require("../assets/ImagensAdopet/Header.png")}
          style={styles.HeaderImage}
        />
        <Pressable style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={24} color="white" />
        </Pressable>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/ImagensAdopet/Imagem Dunga.png")}
            style={styles.profileImage}
          />
        </View>
      </View>
    </View>
  );
}

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    ></Drawer>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    height: 70,
  },
  Header: {},
  HeaderImage: {
    position: "absolute",
    width: "100%",
  },
  menuButton: {
    position: "absolute",
    top: 70,
    left: 20,
  },

  profileContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#36D6AD",
  },
});
