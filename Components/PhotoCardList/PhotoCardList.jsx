import { useRoute } from "@react-navigation/native";
import PhotoCard from "../PhotoCard/PhotoCard";


const PhotoCardList = () => {

    const route = useRoute();
    const { title, location } = route.params || {};

    return (
        <PhotoCard  title={title} location={location}/>
    )
}

export default PhotoCardList;