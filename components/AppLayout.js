import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
class Header extends Component {
    render() {
        let { title } = this.props;
        return (
            <View style={{
                backgroundColor: '#F8F8F8',
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                elevation: 2,
                position: 'relative'
            }}>
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
        );
    }
}

export default class AppLayout extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#eeeeff',
                flex: 1,
                marginTop: 20
            }}>
                <Header title="Header Title" />

                <View style={{
                    margin: 10,
                    backgroundColor: '#ffffff',
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    overflow:'hidden',
                    elevation: 1
                }}>
                    <Image source={{ uri: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?h=350&auto=compress&cs=tinysrgb' }}
                        style={{
                            alignSelf: 'stretch',
                            height: 200
                        }}
                    />

                    <View style={{
                        margin: 5,
                        flexDirection:'row'
                    }}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/8923/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb' }}
                            style={{
                                width: 100,
                                height: 100
                            }}
                        />
                        <View style={{
                            margin:5
                        }}>
                            <Text style={{
                                fontWeight:'bold',
                                fontSize:18
                            }}>Title</Text>
                            <Text>Description</Text>
                        </View>
                    </View>

                </View>

            </View>
        );
    }
}