import { Image, ImageProps } from "react-native";
import { styles } from "./style";
import { avatarProps } from "./avatar";

export default function Avatar({selected,...rest}:avatarProps & ImageProps){
    return(
        <Image
        {...rest}
         style={[styles.image,selected&&styles.selected]}/>
    )
}