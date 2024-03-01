import Themas from "@/style";
import { StyleSheet, useWindowDimensions,View,Text } from "react-native";
import Animated, { SlideInDown, useAnimatedStyle, useSharedValue, withSequence, withTiming,runOnJS } from "react-native-reanimated";
import { useEffect, useState } from "react";
import React from "react";
import { Skeleton } from "moti/skeleton";
import { router } from "expo-router";

export default function Splash(){
    
    const logoZoomscale=useSharedValue(1)
    const LogoPossitionZ=useSharedValue(0)
    const dimensions= useWindowDimensions()
    const displey = useSharedValue(0)


     const skeletonColor=[
        Themas.color.grey[600],
        Themas.color.grey[700],
        Themas.color.grey[600]
     ]

    const animedeStyle=useAnimatedStyle(()=>({
        transform:
        [  
            {scale:logoZoomscale.value},
            {translateY:LogoPossitionZ.value}
        ]
    }))

    const animedStylecontent=useAnimatedStyle(()=>({
        display:displey.value===1?"flex":"none"
        
    }))

    function logoAnimemd(){
        logoZoomscale.value= withSequence(
            withTiming(0.7),
            withTiming(1.3),
            withTiming(1,undefined,(finished)=>{
                if(finished){
                    LogoPossitionZ.value=withSequence(
                        withTiming(50,undefined,()=>displey.value=1),
                        withTiming(-dimensions.height,{duration:400},()=>{runOnJS(onEndSplash)()}),
                    )
                }
            }),

        )
    }
    function boxe(colums:"right"|"left"){
        const rest = colums==="left"?0:1
        
        return Array.from({length:20}).filter((_,index)=>index%2===rest).map((_,index)=>{
            const height= index%2==(colums==="left"?0:1)?200:300
            return(
                <Animated.View key={index} style={[style.box,{height}]}>
                    <Skeleton height={height} width={"100%"} colors={skeletonColor}/>
                </Animated.View>

            )

        })


    }

    function filterBox(){
        return Array.from({length:5}).map((_,index)=>(
            <Animated.View key={index} style={[style.boxfilter]}>
                <Skeleton width={"100%"} colors={skeletonColor}/>
            </Animated.View>
           
        ))
    }
    function onEndSplash(){
        setTimeout(()=>{
            router.push("/(tabs)")
        },2000)
    }
    useEffect(()=>{logoAnimemd()},[])
    return(

    <View style={style.body}>
        <Animated.Image
            style={[style.logo,animedeStyle]}
            source={require("../assets/myIcone.png")}/>
            <Animated.View entering={ SlideInDown.duration(700)} style={[style.content,animedStylecontent]}>
                <View  style={[style.filteres]}>
                    {filterBox()}
                </View>
                <View style={[style.boxes]}>
                    <View  style={[style.colunas]}>
                          {boxe("right")}
                    </View>
                    <View  style={[style.colunas]}>
                         {boxe("left")}
                     </View>
                
                </View>
            </Animated.View>
    </View>
    )
}

const style=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:Themas.color.black,
        justifyContent:"center",
        alignItems:"center"

    },
    logo:{
        width:64,
        height:64,


    },
    box:{
        width:'100%',
        borderRadius:16,
        backgroundColor:Themas.color.grey[600],
        
    },
    boxes:{
        gap:12,
        flex:1,
        width:'100%',
        flexDirection:"row",
    },
    colunas:{
        flex:1,
        gap:12,
    },
    filteres:{
        flexDirection:"row",
        gap:10,
        justifyContent:"flex-start",
        width:"100%",
        paddingHorizontal:10
    },
    boxfilter:{
        
        width:63,
        height:50

    },
    content:{
        flex:1,
        width:'100%'
    }
})