import {Text, SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';

import {screenStyles} from '../../styles/screenStyles';
import Header from '../../components/Header';
import FloatActionButton from '../../components/floatActionButton';

const MyNotes = () => {
  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Header />

        <FloatActionButton />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
