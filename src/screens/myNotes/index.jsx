import {Text, SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';

import {screenStyles} from '../../styles/screenStyles';
import Header from '../../components/Header';
import FloatActionButton from '../../components/floatActionButton';
import { mockData } from '../../utils/mockData';
import NoteCard from '../../components/NoteCard';
import { ADDNOTE } from '../../utils/routes';

const MyNotes = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Header />
        <FlatList
        data={mockData}
        renderItem={({item}) => <NoteCard item={item}/>}
        keyExtractor={item => item.id}
      />
        <FloatActionButton onPress={()=> navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
