import React, { useState, useEffect, useCallback } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import TeamCard from "./components/teamCard";
import AddTeamCard from "./components/addTeamCard";
import storage from "../../data/storage";
import AddTeamForm from "./components/addTeamForm";
import HomeFooter from "./components/homeFooter";
import uuid from "react-native-uuid";
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [isAddTeamFormVisible, setIsAddTeamFormVisible] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleRefresh = useCallback(() => {
    storage
      .load({
        key: "teams",
        autoSync: true,
        syncInBackground: true,
      })
      .then((ret) => {
        setLoading(false);
        setTeams(ret);
      })
      .catch((err) => {
        console.warn(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isFocused) {
      handleRefresh();
    }
  }, [isFocused, handleRefresh]);
  const toggleAddTeamModal = () => {
    setIsAddTeamFormVisible((prevIsAddTeamFormVisible) => {
      !prevIsAddTeamFormVisible;
    });
  };

  const addTeam = (teamName) => {
    setIsAddTeamFormVisible(false);

    let obj = { id: uuid.v4(), name: teamName, score: 0, records: [] };
    let data = [obj, ...teams];
    storage.save({
      key: "teams",
      data: data,
    });

    setTeams(data);
  };

  const clear = () => {
    setIsAddTeamFormVisible(false);
    storage.save({
      key: "teams",
      data: [],
    });
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
              <TeamCard
                key={index}
                team={team}
                teams={teams}
                navigation={navigation}
              />
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
