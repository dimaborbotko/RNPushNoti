import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstPage from './FirstPage';
import NextPage from './NextPage';

export default function App() {

  // Отправляет пуши, когда аппка и открыта, и закрыта
  // messaging().onMessage(pushData);

  // Получение униклаьного токена девайса, чтобы отправлять пуши кому-то конкертному
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token:', token);
  };

  useEffect(() => {
    getToken();
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstPage}/>
        <Tab.Screen name="Second" component={NextPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
