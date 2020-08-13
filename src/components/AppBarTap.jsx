import React from 'react';
import Text from './Text';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    color: 'white'
  }
})

const AppBarTap = ({ text, path }) => {
  // console.log('teksti ', text)

  return (
    <Link to={path} component={TouchableOpacity} activeOpacity={0.8} >
      <Text style={styles.container} >
        {text}
      </Text>
    </Link>
  )
}

export default AppBarTap

/*
<Link to="/about" component={TouchableOpacity} activeOpacity={0.8} />
<TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
*/
