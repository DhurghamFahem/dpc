import {
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";

const EditRecordForm = ({
  selectedRecord,
  visible,
  onEditPressed,
  onClosePressed,
}) => {
  const validationSchema = Yup.object().shape({
    score: Yup.number()
      .required("Score is required")
      .positive("Input must be a positive number")
      .integer("Input must be an integer"),
  });

  const initialValues = {
    score:
      selectedRecord && selectedRecord.score
        ? selectedRecord.score.toString()
        : "",
  };

  const handleSubmit = (values) => {
    onEditPressed({ id: selectedRecord.id, score: parseInt(values.score) });
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
                  placeholder="Score .."
                  style={styles.input}
                  onChangeText={handleChange("score")}
                  onBlur={handleBlur("score")}
                  value={values.score}
                  keyboardType="numeric"
                />
                {touched.score && errors.score && (
                  <Text style={styles.errorText}>{errors.score}</Text>
                )}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Update</Text>
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

export default EditRecordForm;
