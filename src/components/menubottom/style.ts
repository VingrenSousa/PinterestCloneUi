import Themas from '@/style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { alignItems:"center"},
  text:{
    color:Themas.color.white,
    fontFamily:Themas.fonteFamily.medium,
    fontSize:14,
    marginTop:10
  },
  icon:{
    padding:24,
    backgroundColor:Themas.color.grey[700],
    borderRadius:22,
  }
});
