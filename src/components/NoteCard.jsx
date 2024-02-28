import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../utils/constants';
import {Trash, Component} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';
import NoteCardStyles from '../styles/NoteCardStyles';

const NoteCard = ({item}) => {
  return (
    <View style={NoteCardStyles.container}>
      <TouchableOpacity style={NoteCardStyles.done}>
        <Component size="18" color={AppColors.BLACK} variant="Bulk" />
      </TouchableOpacity>
      <View style={NoteCardStyles.texts}>
        <Text style={NoteCardStyles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}</Text>
      </View>
      <TouchableOpacity style={NoteCardStyles.trash}>
        <Trash size="26" color={AppColors.BLACK} variant="Bulk" />
      </TouchableOpacity>
    </View>
  );
};

export default NoteCard;
