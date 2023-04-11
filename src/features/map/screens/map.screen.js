import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';

export const MapScreen = () => {
    return (
        <SafeArea>
        <View style={styles.container}>
          <MapView style={styles.map} />
        </View>
        </SafeArea>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });