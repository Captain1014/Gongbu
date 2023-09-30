import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { firebase } from "../config"; // Import your Firebase configuration
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const Quiz = ({ route }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const { category } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    setSelectedOption(null);
    setShowResults(false);
    const db = firebase.firestore();
    const questionsRef = db.collection("questions");
    try {
      const snapshot = await questionsRef
        .where("category", "==", category)
        .get();
      if (snapshot.empty) {
        console.log("No matching documents");
        return;
      }
      const allQuestions = snapshot.docs.map((doc) => doc.data());
      const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
      setQuestions(shuffleQuestions.slice(0, 10));
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleOptionSelect = (option) => {
    // If the selected option is the same as the currently selected option,
    // toggle it off by setting selectedOption to null.
    // Otherwise, set it to the newly selected option.
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption === option ? null : option
    );
  };

  const handlePrep = () => {
    // Navigate to the 'preview' page and pass the selected level as a parameter
    navigation.navigate("Preview", { category });
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct and update the score
    if (selectedOption === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }

    // Move to the next question or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }

    // Reset the selected option to null
    setSelectedOption(null);
  };

  return (
    <View style={styles.container}>
      {showResults ? (
        // Display quiz results
        <View>
          {/* Display correct and incorrect answers here */}
          <Text style={{ fontSize: 18 }}>Your Score: {score}</Text>
          {/* Study wrong answers button here */}

        </View>
      ) : questions.length > 0 ? ( // Check if there are questions available
        // Display the current question

        <View style={styles.questionContainer}>
          {/* Prep button */}
          <TouchableOpacity style={styles.prepButton} onPress={handlePrep}>
            <Text style={{ fontSize: 20 }}>😬Want to prep first?😰</Text>
          </TouchableOpacity>
          <Text style={styles.question}>
            <Text style={{ fontSize: 18 }}>
              Question {currentQuestionIndex + 1}/{questions.length}
            </Text>
            {"\n"}
            {"\n"}
            {questions[currentQuestionIndex].question}
            {"\n"}
            {questions[currentQuestionIndex].trans}
          </Text>
          {[1, 2, 3, 4].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{questions[currentQuestionIndex]["option" + option]}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
            disabled={selectedOption === null}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Display a loading indicator or message while loading questions
        <Text>Loading questions...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    alignItems: "center",
  },
  question: {
    fontSize: 24, // Update the font size to your desired value
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    fontSize: 18, // Update the font size to your desired value
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },

  selectedOption: {
    backgroundColor: "lightgrey",
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "skyblue",
    borderRadius: 5,
  },
  prepButton: {
    marginBottom: 40,
    padding: 10,
    width: 240,
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16, // Update the font size to your desired value
  },
});

export default Quiz;
