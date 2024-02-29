import React from "react"
import { FontAwesome } from "@expo/vector-icons"


export type MenuButtonProps= {
    title:string,
    icon:React.ComponentProps<typeof FontAwesome>["name"]
}