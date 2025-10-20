import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, View } from "react-native";

function Header({navigation}) {
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
        <Pressable style={styles.profileContainer} 
            onPress={() => router.push('/(tabs)/index')}>
          <Image
            source={require("../assets/ImagensAdopet/Imagem Dunga.png")}
            style={styles.profileImage}
          />
        </Pressable>
      </View>
    </View>
  ); 
}

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
        drawerActiveTintColor: '#36D6AD',
        drawerInactiveTintColor: '#666',
        drawerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    >
      <Drawer.Screen 
        name="(tabs)" 
        options={{ 
          title: "Página Principal",
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
    </Drawer>
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
