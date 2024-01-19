import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import React, { useState } from "react";


const Home = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => null,
        });
    }, [navigation]);
    
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="PostsScreen" component={PostsScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

export default Home;