import { useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput: React.FC<{
  onAddGoal: (text: string) => void;
  show: boolean;
  onClose: () => void;
}> = ({ onAddGoal, show, onClose }) => {
  const [goalInput, setGoalInput] = useState("");
  const handleGoalInput = (textInput: string) => {
    setGoalInput(textInput ?? "");
  };
  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.goalInputContainer}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.goalInput}
          placeholder="Enter your goal"
          onChangeText={handleGoalInput}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={`#c287db`}
              title="Add Goal"
              onPress={() => {
                onAddGoal(goalInput);
                setGoalInput("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button color={`#c0225f`} title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalInputContainer: {
    flex: 1,
    gap: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#2f0755",
  },
  goalInput: {
    borderWidth: 1,
    borderColor: "#4c3861",
    width: "80%",
    padding: 12,
    color: "#ffffff",
    backgroundColor: "#846b89",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    borderRadius: 8,
    width: 100,
    justifyContent: "center",
  },
});
