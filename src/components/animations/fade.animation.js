import React, {useRef} from "react";
import { Animated } from "react-native";

export const FadeInView=({duration=1500, ...props})=>{
    return(
        <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
    )
};