import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const transactions = [
  {
    id: "1",
    name: "Apple Store",
    type: "Entertainment",
    amount: "- $5.99",
    icon: require("../assets/apple.png"),
  },
  {
    id: "2",
    name: "Spotify",
    type: "Music",
    amount: "- $12.99",
    icon: require("../assets/spotifyy.png"),
  },
  {
    id: "3",
    name: "Money Transfer",
    type: "Transaction",
    amount: "$300",
    icon: require("../assets/moneyt.png"),
  },
  {
    id: "4",
    name: "Grocery",
    type: "",
    amount: "- $88",
    icon: require("../assets/groceryy.png"),
  },
];

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.containerr}>
        <View style={styles.header}>
          <View style={styles.profileImagePlaceholder}>
            <Image source={require("../assets/human.png")} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Eric Atsu</Text>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <MaterialIcons name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <Image
            source={require("../assets/Card.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.profileImagePlaceholder}>
              <Image source={require("../assets/send.png")} style={{}} />
            </View>
            <Text style={styles.actionText}>Sent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.profileImagePlaceholder}>
              <Image source={require("../assets/accept.png")} />
            </View>
            <Text style={styles.actionText}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.profileImagePlaceholder}>
              <Image source={require("../assets/loann.png")} />
            </View>
            <Text style={styles.actionText}>Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.profileImagePlaceholder}>
              <Image source={require("../assets/topU.png")} />
            </View>
            <Text style={styles.actionText}>Topup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionContainer}>
          <View style={styles.transactionHeader}>
            <Text style={styles.transactionTitle}>Transaction</Text>
            <TouchableOpacity>
              <Text style={styles.sellAllText}>Sell All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                <View style={styles.initial}>
                  <View style={styles.profileImagePlaceholder}>
                    <Image source={item.icon} />
                  </View>
                  <View style={styles.transactionDetails}>
                    <Text style={styles.transactionName}>{item.name}</Text>
                    <Text style={styles.transactionType}>{item.type}</Text>
                  </View>
                  <Text
                    style={[
                      styles.transactionAmount,
                      {
                        color: item.amount.startsWith("-") ? "#000" : "#007aff",
                      },
                    ]}
                  >
                    {item.amount}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    height: "7%",
  },
  profileImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    marginRight: 170,
  },
  welcomeText: {
    marginBottom: 10,
    color: "#888",
  },
  userName: {
    fontWeight: "bold",
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    marginVertical: 16,
    backgroundColor: "blue",
    borderRadius: 45,
    height: "29%",
    marginTop: 30,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    marginTop: 4,
    fontSize: 12,
  },
  transactionContainer: {
    marginTop: 16,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  transactionTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  sellAllText: {
    color: "#007aff",
  },
  initial: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  transactionDetails: {
    paddingTop: 7,
    marginLeft: 8,
    flex: 1,
  },
  transactionName: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  transactionType: {
    color: "#888",
  },
  transactionAmount: {
    paddingTop: 20,
    fontWeight: "bold",
  },
});

export default Homepage;
