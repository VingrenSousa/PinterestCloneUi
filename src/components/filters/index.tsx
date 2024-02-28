
import { FlatList, PressableProps } from "react-native";
import { Filter } from "../filter";

import { styles } from "./style";

export default function Filters({filters,filter,onChange}:filtersProps){
 return<FlatList
    contentContainerStyle={styles.content}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={filters}
    keyExtractor={item=>item}
    style={styles.list}
    renderItem={({item})=><Filter filter={item} selected={item===filter} onPress={()=>onChange(item)} />}
 />
}