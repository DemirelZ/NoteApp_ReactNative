import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/addNote';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/HeaderRight';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MYNOTES}>
      <Stack.Screen
        name={MYNOTES}
        component={MyNotes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
      <Stack.Screen
        name={ADDNOTE}
        component={AddNote}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: AppColors.BLACK,
          headerRight: ()=> <HeaderRight/>
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
