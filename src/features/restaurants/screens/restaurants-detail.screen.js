import React, {useState} from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantsDetailScreen=({route})=>{
    const [breakfastExpanded, setBreakFastExpanded]=useState(false);
    const [lunchExpanded, setLunchExpanded]=useState(false);
    const [dinnerfastExpanded, setDinnerExpanded]=useState(false);
    const [drinkdfastExpanded, setDrinksExpanded]=useState(false);
    const {restaurant}= route.params;

    return(
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
            <List.Accordion
            title="breakfast"
            left={(props)=><List.Icon{...props} icon="bread-slice"/>}
            expanded={breakfastExpanded}
            onPress={()=>setBreakFastExpanded(!breakfastExpanded)}
            ></List.Accordion>
        </SafeArea>
    );
};