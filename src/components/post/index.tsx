import { Image, View,Text } from "react-native";
import { myPostProps } from "./Post";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import Themas from "@/style";
import { useEffect, useState } from "react";

export default function Post({postes}:myPostProps){
    const[aspectRatio,setAspectRatio]=useState(1)
    useEffect(()=>{
        if(postes.image){
            Image.getSize(postes.image,(width,height)=>{
                setAspectRatio(width / height)
            })
        }
    })
    return(
        <View style={styles.container}>
            <Image
                
                source={{uri:postes.image}}
                style={[styles.Image,{aspectRatio}]}
                />
             <View style={styles.footer}>
                <Text   style={styles.title} >
                    {postes.title}
                </Text>
                <Feather name="more-horizontal" size={16} color={Themas.color.white}/>
             </View>
        </View>
    )
}