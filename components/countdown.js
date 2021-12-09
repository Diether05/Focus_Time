import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { spacing, fontSizes, colors } from './utils/properties';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 2, isPaused, onProgress }) => {
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        //do stuff here

        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft/minutesToMillis(minutes));
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      if(interval.current) clearInterval(interval.current);
      console.log(millis)
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.Text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  Text: {
    flex: 1,
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(43,255,0,0.3)',
  },
});
