import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LevelSelection = ({ navigation }) => {
  const levels = [
    'Level 1', 'Level 2', 'Level 3',
    'Level 4', 'Level 5', 'Level 6',
    'Level 7', 'Level 8', 'Level 9', 'Level 10'
  ];

  const rows = [];
  const levelsPerRow = 3;

  for (let i = 0; i < levels.length; i += levelsPerRow) {
    const row = levels.slice(i, i + levelsPerRow);
    rows.push(row);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gongbu(Beta)</Text>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.levelRow}>
          {row.map((level, index) => (
            <TouchableOpacity
              key={index}
              style={styles.levelBox}
              onPress={() => navigation.navigate('Quiz', { category: level })}
            >
              <Text style={styles.levelText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  levelRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  levelBox: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  levelText: {
    color: 'skyblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default LevelSelection;
