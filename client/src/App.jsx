import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from './components/Header';

const client = new ApolloClient({
  uri: 'https://localhost:8800/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='container'>
          <h1>Hello world</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
