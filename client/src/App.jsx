import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from './components/Header';
import AddClientModal from './components/AddClientModal';
import Clients from './components/Clients';
import Projects from './components/Projects';

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
        <AddClientModal />
        <Projects />
        <Clients />
      </ApolloProvider>
    </>
  );
}

export default App;
