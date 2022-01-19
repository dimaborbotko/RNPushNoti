import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export default function App() {
  PushNotification.createChannel({
    channelId: 'channel-id',
    channelName: 'My channel',
  });

  const pushData = async messaging => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      message: messaging.notification.body,
      title: messaging.notification.title,
    });
    console.log('message:', messaging);
  };

  messaging().onMessage(pushData);

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token:', token);
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
