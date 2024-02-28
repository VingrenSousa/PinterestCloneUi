import { Slot, Tabs } from "expo-router";
import React,{useRef} from "react";
import BottomSheet from "@gorhom/bottom-sheet"
import { Foundation,Ionicons,FontAwesome5} from '@expo/vector-icons';
import Themas from "@/style";
import Avatar from "@/components/avatar";
import {Meno} from "@/components/menu";
import { View } from "react-native";


export default function layout(){
 const bottomsheetRef=useRef<BottomSheet>(null)

 const handleBottomSheetOpem=()=>bottomsheetRef.current?.expand()
 const handleBottomSheetClose=()=>bottomsheetRef.current?.snapToIndex(0)
    return(
        <View style={{flex:1}}>
            <Tabs screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarActiveTintColor:Themas.color.white,
                tabBarInactiveTintColor:Themas.color.grey[600],
                tabBarStyle:{
                   
                    backgroundColor:Themas.color.black,
                    borderTopColor:Themas.color.black,
                },
                }}>
                <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon:({size,color})=><Foundation name="home" size={size} color={color}/>
                }}
                />
                <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon:({size,color})=><Ionicons name="search" size={size} color={color}/>
                }}/>
                  <Tabs.Screen
                name="menu"
                options={{
                    tabBarIcon:({size,color})=><FontAwesome5 name="plus" size={size} color={color}/>
                }}
                listeners={()=>({
                    tabPress:(event)=>{
                        event.preventDefault()
                        handleBottomSheetOpem()
                    }
                })}
                />
                <Tabs.Screen
                name="messagen"
                options={{
                    tabBarIcon:({size,color})=><Ionicons name="chatbubble-ellipses" size={size} color={color}/>
                }}/>
                <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon:({size,color})=><Avatar
                    selected={color===Themas.color.white}
                    source={{uri:"http://github.com/VingrenSousa.png"}} />
                }}/>
            </Tabs>



            <Meno onClose={handleBottomSheetClose}   ref={bottomsheetRef}/>
        </View>
    )
}
