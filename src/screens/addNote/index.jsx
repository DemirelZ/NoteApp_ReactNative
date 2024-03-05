import {StyleSheet, View, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {Alert} from 'react-native';
import EditButtons from '../../components/EditButtons';
import {AppColors} from '../../theme/colors';

const AddNote = () => {
  const addNote = () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <EditButtons />
      <View style={styles.inputWrapper}>
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="Lütfen notunuzu buraya yazınız.."
        />
      </View>
      <Button title={'Save Changes'} onPress={addNote} />
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,

    borderWidth: 2,
    borderColor: AppColors.GRAY,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
  },
});
