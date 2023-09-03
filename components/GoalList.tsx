import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";

const GoalList: React.FC<{
  goals: { text: string; id: string }[];
  onDeleteGoal: (id: string) => void;
}> = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.goalList}>
      <FlatList
        keyExtractor={(item, indx) => `${item}_${indx}`}
        data={goals}
        renderItem={(item) => (
          <View style={styles.goalItem}>
            <Pressable
              style={{
                flex: 1,
              }}
              onPress={() => onDeleteGoal(item.item.id)}
              android_ripple={{ color: "#bda0ce" }}
            >
              <Text style={styles.goalText}>{item.item.text}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalList: {
    flex: 4,
    width: "100%",
  },
  goalItem: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#a840b8",
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
    overflow: "hidden",
  },
  goalText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    padding: 8,
  },
});

export default GoalList;
