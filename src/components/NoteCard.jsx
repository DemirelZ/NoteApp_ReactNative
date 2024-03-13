import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../utils/constants';
import {Trash, Component, Edit} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';
import NoteCardStyles from '../styles/NoteCardStyles';
import {ADDNOTE, NOTEDETAIL} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';

const NoteCard = ({item, deleteNote, updateNote}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={NoteCardStyles.container}
      onPress={() => navigation.navigate(NOTEDETAIL, {note:{item}})}>
      <TouchableOpacity style={NoteCardStyles.done}>
        <Component size="18" color={AppColors.BLACK} variant="Bulk" />
      </TouchableOpacity>
      <View style={NoteCardStyles.texts}>
        <Text style={NoteCardStyles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}</Text>
      </View>
      <TouchableOpacity
        style={NoteCardStyles.trash}
        onPress={() => deleteNote(item.id)}>
        <Trash size="26" color={AppColors.BLACK} variant="Bulk" />
      </TouchableOpacity>
      <TouchableOpacity
        style={NoteCardStyles.trash}
        onPress={() => navigation.navigate(ADDNOTE, {note:item, type:'update'})}>
        <Edit size="26" color={AppColors.BLACK} variant="Bulk" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
