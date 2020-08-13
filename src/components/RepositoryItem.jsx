import React from 'react'
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
// import theme from '../theme';
import Text from './Text';
import { numFormatter } from '../utils/utils';
import { Button } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';


const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  avatarContainer: {

    paddingRight: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    flexShrink: 1
  },
});

const Header = ({ name, avatar, description }) => (
  <View style={headerStyles.container}>
    <View style={headerStyles.avatarContainer}>
      <Image style={headerStyles.avatar} source={{
        uri: avatar
      }}
      />
    </View>
    <View style={headerStyles.infoContainer}>
      <Text
        fontWeight="bold"
        fontSize="subheading"
        testID='test-name'
      >
        {name}
      </Text>
      <Text
        color="textSecondary"
        testID='test-description'
      >
        {description}
      </Text>
    </View>
  </View>
);

const lanquageStyles = StyleSheet.create({
  container: {
    flex: 0,
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 20,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10
  }
});

const Language = ({ language }) => {
  return (
    <View style={lanquageStyles.container}>
      <Text
        style={{ color: 'white' }}
        testID='test-language'
      >
        {language}
      </Text>
    </View>
  )
}

const infoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
    marginVertical: 10
  },
  infoItem: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 0
  }
});

const Info = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage
}) => {
  // console.log('reviews count ', reviewCount)
  // console.log('ratings count ', ratingAverage)

  return (
    <View style={infoStyles.container} testID='rep-item'>
      <View style={infoStyles.infoItem}>
        <Text
          fontWeight="bold"
          testID='test-stars'
        >
          {numFormatter(stargazersCount)}
        </Text>
        <Text >Stars</Text>
      </View>
      <View style={infoStyles.infoItem}>
        <Text
          fontWeight="bold"
          testID='test-forks'
        >
          {numFormatter(forksCount)}
        </Text>
        <Text >Forks</Text>
      </View>
      <View style={infoStyles.infoItem}>
        <Text
          fontWeight="bold"
          testID='test-reviews'
        >
          {numFormatter(reviewCount)}
        </Text>
        <Text >Reviews</Text>
      </View>
      <View style={infoStyles.infoItem} >
        <Text
          fontWeight="bold"
          testID='test-ratings'
        >
          {ratingAverage}
        </Text>
        <Text >Rating</Text>
      </View>
    </View>
  )
}

const itemStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 10
  },
  button: {
    flex: 0
  }
});

const RepositoryItem = ({ item, showButton }) => {
  
  if (!item) {
    return <Text>Item is loading</Text>
  }

  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url
  } = item;

  

  const handleOpenWithWebBrowser = (url) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={itemStyles.container}>
      <Header
        name={fullName}
        description={description}
        avatar={ownerAvatarUrl}
      />
      <Language language={language} />
      <Info
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
      {
        showButton && (
          <View style={itemStyles.button}>
            <Button
              mode="contained" 
              onPress={() => handleOpenWithWebBrowser(url)}
            >
              Open in Github
            </Button>
          </View>
        )}
    </View>
  )
}

export default RepositoryItem