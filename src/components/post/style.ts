import Themas from '@/style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:5,
  },
  Image:{
    borderRadius:22
  },
  title:{
    fontSize:14,
    color:Themas.color.white,
    fontFamily:Themas.fonteFamily.bold
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:7
  }
});