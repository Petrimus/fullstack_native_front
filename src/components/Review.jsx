import React from 'react';
import {
  View
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
// import { useHistory } from 'react-router-native'
import useCreateReview from '../hooks/useCreateReview';

import FormikTextInput from './FormikTextInput';
import { Button } from 'react-native-paper';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(6, 'Owner must be at least 6 characters long')
    .required('Owner is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required')
    .min(4, 'Repository name must at least 6 characters')
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Minimum for rating is zero')
    .max(100, 'Maximum for rating is 100')
    .required('Rating is required'),
  text: yup
    .string()
    .max(100, 'Review length maximum is 100 characters')
});

const Review = () => {
  const [createNewReview] = useCreateReview();
  
  const handleSubmit =  (values) => {
    const {ownerName, repositoryName, rating, text} = values;
    console.log('submitted')
    createNewReview({ ownerName, repositoryName, rating, text });
  }

  return (
    <ReviewContainer onSubmit={handleSubmit} />
  )
}

const ReviewContainer = ({ onSubmit }) => (
  <Formik
    initialValues={{
      owner: '',
      repoName: '',
      rating: '',
      reviewText: ''
    }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
  </Formik>
)

const ReviewForm = ({ onSubmit }) => {

  return (
    <View >
      <FormikTextInput
        name='ownerName'
        placeholder='owner name'
        testID='ownerField'
      />
      <FormikTextInput
        name='repositoryName'
        placeholder='repository name'
        testID='repoNamerField'
      />
      <FormikTextInput
        name='rating'
        placeholder='rating value'
        testID='ratingField'
      />
      <FormikTextInput
        name='text'
        placeholder='review'
        testID='reviewField'
        multiline
      />
      <Button
        mode="contained"
        onPress={onSubmit}
      >
        Create new review
      </Button>
    </View>
  )
}
export default Review
