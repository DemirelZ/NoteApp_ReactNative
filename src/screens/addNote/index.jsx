import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import { Alert } from 'react-native';

const AddNote = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}></View>
      <Button title={'Save Changes'} onPress={()=>Alert.alert('Merheba')} />
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
