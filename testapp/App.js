import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation,
  from,
  ApolloLink
} from '@apollo/client';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const CREATE_USERS = gql`
    mutation CreateManyUser($data: [UserInput]) {
      createManyUser(data: $data) {
        name
      }
    }
  `;

  const [createUsers] = useMutation(CREATE_USERS, {
    onCompleted: (response) => {
      console.log(response);
    }
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Button
          title='click'
          onPress={() => {
            createUsers({
              variables: {
                data: [
                  {id: 1, name: 'sandeep'},
                  {id: 12, name: 'testing'},
                ],
              },
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Main = () => {
  const loaderLink = new ApolloLink((operation, forward) => {
    console.log(operation.variables);
    operation.setContext({ start: new Date() });
    return forward(operation);
  });

  const client = new ApolloClient({
    uri: 'http://localhost:3000',
    cache: new InMemoryCache(),
    link: from([
      loaderLink
    ]),
  });


  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
