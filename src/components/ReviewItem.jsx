import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Text from './Text';
import theme from '../theme';

const reviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  rating: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 60,
    height: 60,
    borderWidth: 4,
    borderRadius: 60 / 2,
    borderColor: theme.colors.primary,
  },
  review: {
    flexDirection: 'column',
    flex: 1
  },
  textContainer: {
    flexDirection: 'row',   
  },
  textBody: {
    flexShrink: 1
  }
});

const ReviewItem = ({ review }) => {
  const {
    rating,
    createdAt,
    text,
    user
  } = review


  return (
    <View style={reviewStyles.container}>
      <View style={reviewStyles.rating}>
        <Text
          color='primary'
          fontSize='subheading'
        >
          {rating}
        </Text>
      </View>
      <View style={reviewStyles.review}>
        <Text
          color='primary'
          fontSize='subheading'
        >
          {user.username}
        </Text>
        <Text style={reviewStyles.review}>
          {createdAt}
        </Text>
        <View style={reviewStyles.textContainer}>
          <Text style={reviewStyles.textBody}>
            {text}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem