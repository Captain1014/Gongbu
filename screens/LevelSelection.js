import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LevelSelection = ({ navigation }) => {
  const levels = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gongbu(Beta)</Text>
      {levels.map((level, index) => (
        <TouchableOpacity
          key={index}
          style={styles.levelBox}
          onPress={() => navigation.navigate('Quiz', { category: level })}
        >
          <Text style={styles.levelText}>{level}</Text>
        </TouchableOpacity>
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
  header:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,

  }
});

export default LevelSelection;
