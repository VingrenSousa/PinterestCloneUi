import { Text, View } from "react-native"
import { styles } from "./style"
import { forwardRef } from "react"
import BottomSheet from "@gorhom/bottom-sheet"
import { menuProps } from "./meno"
import { FontAwesome } from "@expo/vector-icons"
import MenuButton from "../menubottom"

export const Meno=forwardRef<BottomSheet,menuProps>(({onClose},ref)=>{
    return(
        <BottomSheet 
        handleIndicatorStyle={{backgroundColor:'#fff'}}
         backgroundStyle={styles.Body}
         ref={ref} index={0} 
         snapPoints={[0.01,230]}>
            <View style={styles.container}>
                <View style={styles.header} >
                
                    <Text style={styles.text}>
                        Começe a criar agora
                    </Text>
                </View>
                <View style={styles.Options}>
                    <MenuButton icon={"home"} title="pin"/>
                    <MenuButton icon={"paste"} title="Colagem"/>
                    <MenuButton icon={"folder"} title="Pasta"/>
                </View>
            </View>
        </BottomSheet>
    )
})