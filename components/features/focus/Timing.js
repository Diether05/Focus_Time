import React from 'react';
import {View,StyleSheet} from 'react-native';
import { RoundedButton } from '../../RoundedButton';

export const Timing = ({ changeTime }) => {
  return (
    <>
    <View style={style.timingButton}>
      <RoundedButton size={50} title='10' onPress={() => changeTime(10)} />
    </View>
    <View style={style.timingButton}>
      <RoundedButton size={50} title='15' onPress={() => changeTime(15)} />
    </View>
    <View style={style.timingButton}>
      <RoundedButton size={50} title='20' onPress={() => changeTime(20)} />
    </View>
    </>
  )
}

const style = StyleSheet.create({
  timingButton: {
    flex:1,
    alignItems: 'center',

  }
})