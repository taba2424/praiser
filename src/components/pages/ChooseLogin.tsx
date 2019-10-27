import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import Button from '../../components/Button';
import reactImage from '../../../assets/reactIcon.jpg';
import { SIGN_IN, SIGN_UP } from '../../constants/path'

const { width } = Dimensions.get('window')

const padding = 20
const edgeNumber = 2
const ratio = 3
const imageRatio = edgeNumber/ratio
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * imageRatio,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingVertical: padding,
  },
  button: {
    marginBottom: 40,
    width: 300,
  }
})

function ChooseLogin() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={reactImage} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Button
          onPress={() => navigate(SIGN_IN)}
          style={styles.button}
          label="Sign in"
        />
        <Button
          onPress={() => navigate(SIGN_UP)}
          style={styles.button}
          label="Sign up"
        />
      </View>
    </View>
  );
}

export default ChooseLogin