import { Image, TouchableOpacity } from "react-native"
import { styles } from "./style"

export const MoviesCard = (props) => {
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL}></Image>
        </TouchableOpacity>
    )
}