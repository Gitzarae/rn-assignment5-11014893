import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./src/Homepage";
import Settings from "./src/Settingpage";
import Mycards from "./src/Mycards"; // Add your MyCards component
import Statistics from "./src/Statistics"; // Add your Statistics component
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Homepage">
    <Stack.Screen
      name="Homepage"
      component={Homepage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MyCardsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyCards"
      component={Mycards}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const StatisticsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Statistics"
      component={Statistics}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            borderTopWidth: 0, 
            height: 80, 
           
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Cards"
          component={Mycards}
          options={{
            headerShown: false,
            tabBarLabel: "My Cards",
            tabBarIcon: ({ color, size }) => (
              <Icon name="card-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={StatisticsStack}
          options={{
            headerShown: false,
            tabBarLabel: "Statistics",
            tabBarIcon: ({ color, size }) => (
              <Icon name="stats-chart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            headerShown: false,
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
