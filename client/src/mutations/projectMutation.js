import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $clientId: ID!
    $status: ProjectStatus
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
