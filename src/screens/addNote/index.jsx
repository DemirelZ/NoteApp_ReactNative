import {StyleSheet, View, SafeAreaView, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import {Alert} from 'react-native';
import EditButtons from '../../components/EditButtons';
import {AppColors} from '../../theme/colors';

const AddNote = ({route}) => {
  const {note, type} = route?.params;

  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);

  const saveNote = () => {
    if (!title) {
      Alert.alert('Uyarı', 'Lütfen başlık alanını boş bırakmayınız');
      return;
    }
    if (!description) {
      Alert.alert('Uyarı', 'Lütfen açıklama alanını boş bırakmayınız');
      return;
    }

    const newNote = {
      id: new Date().getTime(),
      title: title,
      description: description,
      date: new Date().toLocaleDateString(),
    };

    setTitle('');
    setDescription('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>Title</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="write your title..."
          value={title}
          onChangeText={text => setTitle(text)}
        />
      </View>
      <Text style={styles.text}>Description</Text>
      <View style={styles.descriptionWrapper}>
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="write your description..."
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>
      <Button
        title={type === 'update' ? 'Update' : 'Save'}
        onPress={saveNote}
      />
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: AppColors.GRAY,
  },
  descriptionWrapper: {
    flex: 9,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: AppColors.GRAY,
  },
  text: {
    padding: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    fontSize: 20,
    letterSpacing: 2,
  },
});
