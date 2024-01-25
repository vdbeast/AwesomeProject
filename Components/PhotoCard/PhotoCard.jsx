import { Text, View } from "react-native";

const PhotoCard = ({ title, location }) => {
    return (
        <View>
            <Text>Title: {title}</Text>
            <Text>Location: {location}</Text>
        </View>
    )
}

export default PhotoCard;