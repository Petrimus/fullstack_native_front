import { useMutation } from '@apollo/react-hooks';
import { CREATE_NEW_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [createReview] = useMutation(CREATE_NEW_REVIEW)

  const createNewReview = async ({ ownerName, repositoryName, rating, text }) => {
    
    await createReview({ variables: { ownerName, repositoryName, rating: parseInt(rating), text } })
  };

  return [createNewReview];
}

export default useCreateReview