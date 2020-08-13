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

export const GET_REPOSITORIES_WITH_SORT = gql`
query getRepositoriesWithSort(
  $orderDirection: OrderDirection!,
   $orderBy: AllRepositoriesOrderBy!,
   $searchKeyword: String
   ) {
  repositories (
    orderDirection: $orderDirection, 
    orderBy: $orderBy, 
    searchKeyword: $searchKeyword) {
    edges {
      node {  
        id,
        name,
        fullName,
        ratingAverage,
        reviewCount,
        forksCount,
        ownerAvatarUrl,
        description,
        stargazersCount,
        language,
        ownerName
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

export const GET_SINGLE_REPOSITORY = gql`
query findRepositoryById($id: ID!, $first: Int!, $after: String) {
  repository(id: $id) {
    id,
    name,
    fullName,
    ratingAverage,
    reviewCount,
    forksCount,
    ownerAvatarUrl,
    description,
    stargazersCount,
    language
    url,
    ownerName,
    reviews (first: $first, after: $after) {
      edges  {       
        node {
          id
          rating,
           createdAt,
          text,
          user {
            username
          }
        }
        cursor
      }
      pageInfo {
      endCursor
      startCursor
      totalCount
      hasNextPage
    	}
    }
  }
}
`;