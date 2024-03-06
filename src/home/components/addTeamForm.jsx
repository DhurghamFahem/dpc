import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Pressable,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";

const AddTeamForm = ({ visible, onAddPressed, onClosePressed }) => {
  const validationSchema = Yup.object().shape({
    teamName: Yup.string().required("Team Name is required"),
  });

  const initialValues = {
    teamName: "",
  };

  const handleSubmit = (values) => {
    onAddPressed(values.teamName);
  };

  return (
    <Modal transparent={true} visible={visible}>
      <Pressable
        onPress={onClosePressed}
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <TextInput
                  placeholderTextColor={"#0C1821"}
                  placeholder="Team name .."
                  style={styles.input}
                  onChangeText={handleChange("teamName")}
                  onBlur={handleBlur("teamName")}
                  value={values.teamName}
                />
                {touched.teamName && errors.teamName && (
                  <Text style={styles.errorText}>{errors.teamName}</Text>
                )}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#CCC9DC",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#0C1821",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    alignSelf: "center",
  },
  input: {
    color: "#0C1821",
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#324A5F",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "#CCC9DC",
    fontWeight: "800",
  },
});

export default AddTeamForm;
