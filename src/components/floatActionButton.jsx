import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {Add} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';



const FloatActionButton = ({onPress}) => {




  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Add size="50" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.BLUE,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
  },
});
