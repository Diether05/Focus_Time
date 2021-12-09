import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import { Focus } from './components/features/focus/focus';
import { colors } from './components/utils/properties';
import { Timer } from './components/features/timer/timer';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Coding");

  return (
    <View style={styles.container}>
      {focusSubject ? ( <Timer focusSubject={focusSubject} /> ) : 
      (<Focus addSubject={setFocusSubject} />)}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.appleGreen,
     },
});
