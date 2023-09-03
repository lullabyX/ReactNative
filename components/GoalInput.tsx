import { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

const GoalInput: React.FC<{ onAddGoal: (text: string) => void }> = ({
  onAddGoal,
}) => {
  const [goalInput, setGoalInput] = useState("");
  const handleGoalInput = (textInput: string) => {
    setGoalInput(textInput ?? "");
  };
  return (
    <View style={styles.goalInputContainer}>
      <TextInput
        style={styles.goalInput}
        placeholder="Enter your goal"
        onChangeText={handleGoalInput}
        value={goalInput}
      />
      <Button
        color={`#c287db`}
        title="Add Goal"
        onPress={() => {
          onAddGoal(goalInput);
          setGoalInput("");
        }}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalInputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  goalInput: {
    borderWidth: 1,
    borderColor: "#4c3861",
    width: "70%",
    padding: 12,
    color: "#ffffff",
    backgroundColor: "#846b89",
    borderRadius: 8,
  },
});
