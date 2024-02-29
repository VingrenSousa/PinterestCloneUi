import { ScrollView, View } from "react-native";
import { PostsProps } from "./Posts";
import { styles } from "./style";
import Post from "../post";


export default function Posts({posts}:PostsProps){
    function Coluna (colunas:"right"|"left"){
        const rest =(colunas==="left") ?0 : 1

        return posts
        .filter((_,index)=>index % 2===rest)
        .map((post)=>( 
            <Post 
                postes={post}
            />
                    
                 
                
                    
        ))

    }
    return(
        <ScrollView 
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.colunas}>
                    {
                         Coluna("right")
                    }
                </View>
                <View style={styles.colunas}>
                    {
                         Coluna("left")
                    }
                </View>
            
            </View>
        </ScrollView>
    )
}