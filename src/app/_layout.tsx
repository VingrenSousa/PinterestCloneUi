import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from "@expo-google-fonts/roboto";
import * as Splash from 'expo-splash-screen';


Splash.preventAutoHideAsync()
 
export default function layout(){
    const [fosntsLoaded]=useFonts({
        Roboto_400Regular,Roboto_500Medium,Roboto_700Bold
    })
    if(fosntsLoaded){
        Splash.hideAsync()
    }
    return(
        <GestureHandlerRootView style={{flex:1}}>
            <StatusBar
            style="dark"/>
            {fosntsLoaded&&<Slot/>}
        </GestureHandlerRootView>
    )
}