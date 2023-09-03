import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const handleAddGoal = (text: string) => {
    setGoals((prev) => [...prev, { text, id: Math.random().toString() }]);
    handleCloseInput();
  };

  const handleCloseInput = () => {
    setShowModal(false);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ width: "60%" }}>
        <Button
          title="Add Goal"
          onPress={() => setShowModal(true)}
          color={"#6250b8"}
        />
      </View>
      <GoalInput
        onAddGoal={handleAddGoal}
        show={showModal}
        onClose={handleCloseInput}
      />
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 16,
  },
});
