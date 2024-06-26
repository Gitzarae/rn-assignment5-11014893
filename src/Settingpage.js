import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>Language</Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>My Profile</Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>Contact Us</Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>Change Password</Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>Privacy Policy</Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <View style={styles.themeContainer}>
          <Text style={styles.themeText}>Theme</Text>
          <Switch value={false} />
        </View>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginTop: 50,
    alignItems: "center",
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#000",
    marginBottom: 30,
  },
  settingsContainer: {
    marginVertical: 16,
  },
  settingsItem: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  settingsText: {
    fontSize: 16,
    color: "#000",
  },
  themeContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  themeText: {
    fontSize: 16,
    color: "#000",
  },
});

export default SettingsScreen;
