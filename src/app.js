import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBKqA9IaPEmrd90s94HoHyqSFMd1QdYO5s',
            authDomain: 'auth-native-dewyn.firebaseapp.com',
            databaseURL: 'https://auth-native-dewyn.firebaseio.com',
            projectId: 'auth-native-dewyn',
            storageBucket: 'auth-native-dewyn.appspot.com',
            messagingSenderId: '20787054449'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection> 
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
