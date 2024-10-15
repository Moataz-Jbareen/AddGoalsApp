import { useState } from "react";
import { View, Text,TextInput, StyleSheet, Button, Modal, Image } from "react-native";



function GoalInput(props){
      const [entredGoalText, setEntredGoalText] = useState("");

      function goalInputHandler(entereText) {
        setEntredGoalText(entereText);
      }

      function addGoalHandler(){
        props.onAddGoal(entredGoalText);
        setEntredGoalText('')
      }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images.png')}/>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={entredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={"green"}
                title="Add Goal"
                onPress={addGoalHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={"red"}
                title="Cancel"
                onPress={props.onEndGoalHandler}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
}


export default GoalInput;




const styles = StyleSheet.create({
    
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:'#120438',
    width: "100%",
    padding: 10,
    borderRadius: 6,
  },
  image :{
   
    margin: 20,
    resizeMode: 'contain',
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 20,
  },

  buttonContainer:{
    flexDirection: "row",
    marginTop:12
  },
  button: {
    width :'30%',
    marginHorizontal: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    borderColor: '#4CAF50',

  }
});