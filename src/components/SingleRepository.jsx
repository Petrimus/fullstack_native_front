import React from 'react';
import {
  FlatList
} from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import Text from './Text';

const RepositoryInfo = ({ repository }) => {
  return (
    <>
      <RepositoryItem
        item={repository}
        showButton={true}
      />
    </>
  )
};

const SingleRepository = () => {
  let id = useParams().id; 
  const { repository, loading, fetchMore } = useRepository(id);

 
  if (loading) {
    return <Text>single is ...loading</Text>;
  } 

  const onEndReach = () => {
    console.log('end reached');
    fetchMore();
  };
 
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;