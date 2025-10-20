import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, View, Modal } from "react-native";
import { useState } from "react";

function Header({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

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
          onPress={() => setModalVisible(true)}>
          <Image
            source={require("../assets/ImagensAdopet/Imagem Dunga.png")}
            style={styles.profileImage}
          />
        </Pressable>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalBackground}>
            <Pressable
              style={styles.modalOverlay}
              onPress={() => setModalVisible(false)}
            />
            <View style={styles.modalContent}>
              <Image
                source={require("../assets/ImagensAdopet/Imagem Dunga.png")}
                style={styles.modalImage}
              />
              <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={28} color="#fff" />
              </Pressable>
            </View>
          </View>
        </Modal>
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

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    position: "relative",
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "#36D6AD",
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 5,
    borderRadius: 20,
  },
});
