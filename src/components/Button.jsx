import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenWidth } from '../utils/constants'
import { AppColors } from '../theme/colors'

const Button = (props) => {

    const {title}=props

  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={{color:'white', fontSize:20, fontWeight:'bold', textAlign:'center' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        paddingVertical:16,
        margin:20,
        backgroundColor:AppColors.BLUE,
        borderRadius:18
    
    }
})