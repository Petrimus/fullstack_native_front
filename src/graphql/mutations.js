import { gql } from 'apollo-boost';

export const GET_AUTHORIZATION_TOKEN = gql`
mutation authorizeToken($username: String!, $password: String!) {
  authorize(credentials: { username: $username, password: $password }) {
    accessToken    
  }
}
`;

export const CREATE_NEW_REVIEW = gql`
mutation createNewReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
  createReview(review: {
    repositoryName: $repositoryName,
    ownerName: $ownerName,
    rating: $rating,
    text: $text
  }) {
    createdAt
  }
}
`;


export const CREATE_NEW_USER = gql`
mutation createNewUser($username: String!, $password: String!) {
  createUser(user: { username: $username, password: $password }) {
   username
 }
}
`;