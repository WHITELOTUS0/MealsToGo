import React, {useEffect, useRef} from "react";
import { Animated } from "react-native";

export const FadeInView=({duration=1500, ...props})=>{
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:duration,
            useNativeDriver:true,
        }).start();
    }, [fadeAnim, duration])
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