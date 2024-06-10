import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    Index: undefined;
    Splash: undefined;
  };
  
  type NavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
  
  interface SplashScreenProps {
    navigation: NavigationProp;
  }

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Index');
    }, 2000); // Change this timing according to your needs
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./foto/ssss.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;
