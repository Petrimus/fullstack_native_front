import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {  
        id,      
        fullName,
        ratingAverage,
        reviewCount,
        forksCount,
        ownerAvatarUrl,
        description,
        stargazersCount,
        language
      }
    }
  }
}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;