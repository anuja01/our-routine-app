import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import RoutineCard from '../components/RoutineCard';

//TODO - sample data
const routines = [
  {id: 1, name: 'Good morning', description: "Let's get ready to goto school"},
  {id: 2, name: 'Good night', description: "It's bed time"},
  {id: 3, name: 'Meal time', description: "Let's go and eat"},
];

const Routines: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>My Routines</Text>
      {routines.map(routine => (
       <RoutineCard {...routine}/>
      ))}
    </SafeAreaView>
  );
};

export default Routines;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});
