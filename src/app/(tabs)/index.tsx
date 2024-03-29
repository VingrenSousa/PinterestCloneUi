import { Filter } from "@/components/filter";
import Filters from "@/components/filters";
import Posts from "@/components/posts";
import Themas from "@/style";
import { FILTERS } from "@/ultils/filters";
import { useState } from "react";
import { POSTES } from "@/ultils/posts";
import { StyleSheet, View,Text } from "react-native";

export default function Home(){
    const[filer,setFilter]=useState(FILTERS[0])
    return(
        <View style={style.content}>
           <Filters filters={FILTERS} filter={filer} onChange={setFilter}/>
           <Posts posts={POSTES}/>
        </View>
    )
}

const style = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:Themas.color.black,
        paddingTop:'12%'
    },
    text:{
        fontSize:22,
        color:Themas.color.white,
        fontFamily:Themas.fonteFamily.bold
    }
})