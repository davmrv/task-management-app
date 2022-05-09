import { gql } from '@apollo/client';

export default gql`
  query GetTasks($status: Status) {
    tasks(input: {status: $status}) {
      id
      name
      status
      tags
    }
  }
`;
