import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TeamCard from "./components/teamCard";
import AddTeamCard from "./components/addTeamCard";
import storage from "../../data/storage";
import AddTeamForm from "./components/addTeamForm";
import HomeFooter from "./components/homeFooter";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [isAddTeamFormVisible, setIsAddTeamFormVisible] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    storage
      .getAllDataForKey("teams")
      .then((teams) => {
        setTeams(teams);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
        setLoading(false);
      });
  }, []);

  const toggleAddTeamModal = () => {
    setIsAddTeamFormVisible((prevIsAddTeamFormVisible) => {
      !prevIsAddTeamFormVisible;
    });
  };

  const addTeam = (teamName) => {
    setIsAddTeamFormVisible(false);

    let data = [{ name: teamName, score: 0 }, ...teams];
    storage.save({
      key: "teams",
      id: "1",
      data: data,
    });

    setTeams(data);
  };

  const clear = () => {
    setIsAddTeamFormVisible(false);
    storage.clearMapForKey("teams");
    setTeams([]);
  };

  const closeAddTeam = () => {
    setIsAddTeamFormVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <View style={styles.header}>
            {teams.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
            <AddTeamCard onPress={toggleAddTeamModal} />
            <AddTeamForm
              visible={isAddTeamFormVisible}
              onAddPressed={addTeam}
              onClosePressed={closeAddTeam}
            />
          </View>
          <HomeFooter clearPressed={clear} />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#1B2A41",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1B2A41",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
