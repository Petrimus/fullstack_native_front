import { gql } from 'apollo-boost';

export const GET_AUTHORIZATION_TOKEN = gql`
mutation authorizeToken($username: String!, $password: String!) {
  authorize(credentials: { username: $username, password: $password }) {
    accessToken    
  }
}
`

/*
mutation authorizeToken($username: String!, $password: String!) {
   authorize(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
*/