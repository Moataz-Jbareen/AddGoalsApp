import{StyleSheet, View , Text,Pressable} from 'react-native';

function GoalItem(props){
  return (
    
      <View style={styles.goalItem}>
        <Pressable android_ripple={{color:'#ddddddd'}} onPress={props.onDelete.bind(this,props.text)} 
        style={({pressed})=> pressed && styles.pressedItem}>
        <Text style={styles.goalText1}>{props.text}</Text>
        </Pressable>
      </View>

  );
}

export default GoalItem;


const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  },
  pressedItem:{
    backgroundColor: "#444444",
    borderColor: "#444444",
    borderWidth: 1,

  }
});