import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer
          repositories={repositories}
        />
      )      
      expect(getAllByTestId('test-language')[0]).toHaveTextContent('TypeScript');
      expect(getAllByTestId('test-language')[1]).toHaveTextContent('JavaScript');

      expect(getAllByTestId('test-name')[0]).toHaveTextContent('jaredpalmer/formik');
      expect(getAllByTestId('test-name')[1]).toHaveTextContent('async-library/react-async');

      expect(getAllByTestId('test-description')[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(getAllByTestId('test-description')[1]).toHaveTextContent('Flexible promise-based React data loader');

      expect(getAllByTestId('test-forks')[0]).toHaveTextContent('1.6K');
      expect(getAllByTestId('test-forks')[1]).toHaveTextContent('69');

      expect(getAllByTestId('test-stars')[0]).toHaveTextContent('21.9K');
      expect(getAllByTestId('test-stars')[1]).toHaveTextContent('1.8K');

      expect(getAllByTestId('test-ratings')[0]).toHaveTextContent('88');
      expect(getAllByTestId('test-ratings')[1]).toHaveTextContent('72');

      expect(getAllByTestId('test-reviews')[0]).toHaveTextContent('3');
      expect(getAllByTestId('test-reviews')[1]).toHaveTextContent('3');

    });
  });
});
