import { StyleSheet, View,FlatList,Button } from "react-native";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [modalIsVisible, setModalIsVisible] =useState(false);
    const [courseGoals, setCourseGoals]=useState([])

  //fetch the data from the input text
  
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function addGoalHandler(entredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      entredGoalText,
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(entredGoalText) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal !== entredGoalText); // removing the goal from the array  // it will return a new array  // it won't mutate the original array  // filter() returns a new array containing all elements that pass the test implemented by the provided function
    });
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#120438"}
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onEndGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalText}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item} onDelete={deleteGoalHandler} />
              );
            }}
          />

          {/* Display the goals here */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1,
  padding:50,

 },
 
 textInput:{
  borderWidth:1,
  borderColor: '#cccccccc',
  width:'70%',
  marginRight:15,
  padding:10,
 },
 goalText:{
   flex:4,
 }

 

});
