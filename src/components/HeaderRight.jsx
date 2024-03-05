import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AttachCircle, More, Share} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.headerIcons}>
      <AttachCircle size="20" color={AppColors.BLACK} />
      <More size="20" color={AppColors.BLACK} />
      <Share size="20" color={AppColors.BLACK} />
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
