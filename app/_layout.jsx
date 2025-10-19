import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
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

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    ></Drawer>
  );
}

export function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      
      </Tabs>
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
