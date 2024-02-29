import { View,Pressable,Text} from "react-native";
import { styles } from "./style";
import{FontAwesome}from "@expo/vector-icons"
import Themas from "@/style";
import { MenuButtonProps } from "./menuBotton";
export default function MenuButton({title,icon}:MenuButtonProps){
    return(
        <Pressable style={styles.container}>
            <View  style={styles.icon}>
                <FontAwesome name={icon?icon:"home"} size={32} color={Themas.color.white} />
            </View>
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}