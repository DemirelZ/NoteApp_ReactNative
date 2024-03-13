import {Text, SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {screenStyles} from '../../styles/screenStyles';
import Header from '../../components/Header';
import FloatActionButton from '../../components/floatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/NoteCard';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import MyContext from '../../context';

const MyNotes = ({navigation}) => {
  const {notes, setNotes} = useContext(MyContext);

  const addNote = () => {
    const note = {
      id: 8,
      title: 'oldu mu',
      description: 'fgdfgdfgdfgdfg',
      date: '25.89.65',
    };
    setNotes([...notes, note]);
  };

  const deleteNote = id => {
    const filteredNote = notes.filter(item => item.id !== id);
    setNotes(filteredNote);
  };

  const updateNote = id => {
    const updatedNotes = notes.map(item =>
      item.id === id ? {...item, title: 'degisti'} : item,
    );
    setNotes(updatedNotes);
  };

  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTE, {type:'add'})} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
