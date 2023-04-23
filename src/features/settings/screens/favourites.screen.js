import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea=styled(SafeArea)`
align-items:center;
justify-content:center;
`

export const FavouritesScreen=()=>{
    const {favourites} = useContext(FavouritesContext);
    const {restaurants} = useContext(RestaurantsContext);
    return favourites.length?
    (
        <SafeArea>
               <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })} >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.name}
      />
        </SafeArea>
    ):
    (
        <NoFavouritesArea >
        <Text center>No favourites yet</Text>
        </NoFavouritesArea>
    );
};