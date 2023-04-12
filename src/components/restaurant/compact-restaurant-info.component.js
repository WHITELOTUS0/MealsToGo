import React from "react";
import styled from "styled-components/native";


const CompactImage=styled.Image`
border-radius:10px;
width:120px;
height:100px
`

const Item= styled.View`
padding:10px;
max-width:120px
align-items:center
`

export const CompactRestaurantInfo=()=>{
    return(
        <Item>
            <CompactImage/>
        </Item>
    )
}