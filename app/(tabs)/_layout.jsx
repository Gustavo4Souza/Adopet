import { Tabs } from "expo-router";
import { IconChat, IconPet } from "../../components/icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: "#36D6AD",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "#F6F6F6",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // Esconde da tab bar mas permite navegação
        }}
      />
      <Tabs.Screen
        name="pets"
        options={{
          title: "Pets para Adoção",
          tabBarIcon: () => (
            <IconPet/>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Mensagens",
          tabBarIcon: () => (
            <IconChat/>
          ),
        }}
      />
    </Tabs>
  );
}
