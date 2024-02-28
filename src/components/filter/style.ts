import Themas from '@/style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pressable: {},
  text:{
    color:Themas.color.white,
    fontSize:16,
    fontFamily:Themas.fonteFamily.medium

  },
  pressableSelected:{
    borderBottomWidth:4,
    borderBottomColor:Themas.color.white
  }
});