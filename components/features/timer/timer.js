import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, spacing, fontSizes } from '../../utils/properties';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../../countdown';
import { RoundedButton } from '../../RoundedButton';
import { Timing } from '../focus/Timing'

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(null)
  const [minutes, setMinutes] = useState(0.1)
  const onProgress = (progress) => {
    setProgress(progress)
  }
  const changeTime = (min) => {
    setMinutes(min);
  }
  return (
    <View style={style.container}>
      <View style={{ padding: spacing.sm }}>
        <View style={style.countdown}>
          <Countdown  minutes={minutes} isPaused={!isStarted} onProgress={onProgress} />
        </View>
        <Text style={style.title}> Focusing on: </Text>
        <Text style={style.task}>{focusSubject} </Text>
      </View>
      <View style={style.progressBar}>
        <ProgressBar 
        progress = {progress}
        color="#fff" 
        style={{height:20}}
        />
        <View style={style.buttonWrapper}>
          <Timing  onChangeTime={changeTime}/>       
        </View>
      </View>
      <View style={style.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.1,
    marginTop: spacing.xxl,
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.xxl,
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'Center',
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    padding: spacing.xxl,
    marginTop: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    flex: 0.3

  }

});
