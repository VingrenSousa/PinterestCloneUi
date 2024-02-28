import Themas from "@/style";

import { StyleSheet, View,Text } from "react-native";

export default function Profile(){
    return(
        <View style={style.content}>
            <Text style={style.text}>Profile</Text>
        </View>
    )
}const style = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Themas.color.black
    },
    text:{
        fontSize:22,
        color:Themas.color.white,
        fontFamily:Themas.fonteFamily.bold
    }
})