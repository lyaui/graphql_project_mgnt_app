import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from './components/Header';
import Clients from './components/Clients';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:8800/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='container'>
          <h1>Hello world</h1>
        </div>
        <Clients />
      </ApolloProvider>
    </>
  );
}

export default App;
