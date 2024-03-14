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
  const {notes} = useContext(MyContext);



  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              
             
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
