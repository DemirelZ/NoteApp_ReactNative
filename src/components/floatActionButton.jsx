import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../utils/constants'
import { Add } from 'iconsax-react-native'
import { AppColors } from '../theme/colors'
import App from '../../App'

const FloatActionButton = () => {
    
  return (
    <TouchableOpacity style={styles.container}>
      <Add size="50" color={AppColors.WHITE}/>
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:AppColors.BLUE,
        borderRadius:1000,
        position:'absolute',
        bottom:20,
        right:20,
        width:70,
        height:70
        
    }
})