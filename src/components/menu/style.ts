import Themas from '@/style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Body:{
        backgroundColor:Themas.color.grey[800]
    },
    container: {
       
      flex:1,
      padding:24,
      alignItems:'center'
    },
    header:{
        flexDirection:'row',

    },
     text:{
        fontFamily:Themas.fonteFamily.medium,
        fontSize:18,
        color:Themas.color.white,
        flex:1,
        textAlign:'center'

  }
});

