import React from "react";
import { useWindowDimensions } from "react-native";

interface ScaleResult{
    WIDTH:number;
    HEIGHT:number;
}

const useScale=(screen_width:number,width:number,height:number): ScaleResult=>{
    const SW = useWindowDimensions().width;
    const CARD_WIDTH = SW*(width / screen_width);
    const CARD_HEIGHT = (CARD_WIDTH * height) / width;
    return{
        WIDTH:CARD_WIDTH,
        HEIGHT:CARD_HEIGHT
    }
}

export default useScale;