import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";


const Home = () => {
    
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="PostsScreen" component={PostsScreen} options={{ headerStyle: { height: 0 } }} />
            <HomeStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{ headerStyle: { height: 0 } }} />
        </HomeStack.Navigator>
    );
}

export default Home;