import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import RecordCard from "./components/recordCard";
import RecordsFooter from "./components/recordsFooter";
import RecordsHeader from "./components/recordsHeader";
import storage from "../../data/storage";
import EditRecordForm from "./components/editRecordForm";

const RecordsScreen = ({ route, navigation }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedRecord, setSelectedRecord] = useState({});
  const [isEditScoreFormVisible, setIsEditScoreFormVisible] = useState(false);
  const handleRefresh = useCallback(() => {
    setRefreshKey((prevKey) => prevKey + 1);
  }, []);

  useEffect(() => {
    setSelectedRecord(route.params.team.records[0]);
  }, []);

  const clear = () => {
    const index = route.params.teams
      .map((c) => c.id)
      .indexOf(route.params.team.id);
    route.params.team.score = 0;
    route.params.team.records = [];
    route.params.teams[index] = route.params.team;
    storage.save({
      key: "teams",
      data: route.params.teams,
    });
    navigation.goBack();
  };

  const deleteRecord = (item) => {
    const index = route.params.teams
      .map((c) => c.id)
      .indexOf(route.params.team.id);
    route.params.team.score -= item.score;
    route.params.team.records = route.params.team.records.filter(
      (record) => record.id != item.id
    );
    route.params.teams[index] = route.params.team;
    storage.save({
      key: "teams",
      data: route.params.teams,
    });
    handleRefresh();
  };

  const selectRecord = (record) => {
    setSelectedRecord(record);
    setIsEditScoreFormVisible(true);
  };

  const editRecord = (record) => {
    setIsEditScoreFormVisible(false);
    const index = route.params.teams
      .map((c) => c.id)
      .indexOf(route.params.team.id);

    const scoreIndex = route.params.team.records
      .map((c) => c.id)
      .indexOf(record.id);

    route.params.team.score -= selectedRecord.score;
    route.params.team.score += record.score;
    route.params.team.records[scoreIndex] = record;

    route.params.teams[index] = route.params.team;

    storage.save({
      key: "teams",
      data: route.params.teams,
    });

    handleRefresh();
  };

  const closeEditScoreForm = () => {
    setIsEditScoreFormVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <RecordsHeader teamName={route.params.team.name} />
      <FlatList
        data={route.params.team.records}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => (
          <RecordCard
            record={item}
            deletePressed={() => deleteRecord(item)}
            editPressed={() => selectRecord(item)}
          />
        )}
      />
      <RecordsFooter clearPressed={clear} />
      {selectedRecord && (
        <EditRecordForm
          selectedRecord={selectedRecord}
          visible={isEditScoreFormVisible}
          onEditPressed={(record) => editRecord(record)}
          onClosePressed={closeEditScoreForm}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2A41",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default RecordsScreen;
