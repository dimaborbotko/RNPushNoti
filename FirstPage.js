import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import notifee, {AndroidStyle} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export default function FirstPage() {
  async function onMessageRecieve(message) {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    notifee.displayNotification({
      title: message.notification.title,
      subtitle: '&#129395;',
      body: message.notification.body,
      android: {
        channelId,
        progress: {
          max: 10,
          current: 5,
          indeterminate: true,
        },
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        },
        largeIcon: require('./assets/lamp.png'),
        color: '#4caf50',
        actions: [
          {
            title: '<b>Dance</b> &#128111;',
            pressAction: {id: 'dance'},
          },
          {
            title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
            pressAction: {id: 'cry'},
          },
        ],
      },
    });
    console.log('message:', message);
  }

  messaging().onMessage(onMessageRecieve);
  messaging().setBackgroundMessageHandler(onMessageRecieve);



return (
  <View>
    <Button
      title="Display Notification"
      onPress={() => onDisplayNotification()}
    />
  </View>
);
}
const styles = StyleSheet.create({});
