import { Image, TouchableOpacity, Text, View, FlatList, ScrollView } from "react-native";
import { styles } from "./style.js";
import { MOVIESWATCHING } from "../../utils/moviesWatching.js";
import { MOVIESWATCH } from "../../utils/moviesWatch.js";
import { MOVIESCRIME } from "../../utils/moviesCrimes.js";
import { MoviesCard } from "../../components/MoviesCards/index.js";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import TheWhell from "../../assets/movies/the_wheel_of_time.png";

import Icon from "react-native-vector-icons/Ionicons";


export const Home = () => {
    return (
        <View style={styles.container}>

            {/* LOGOTIPO */}
            <View style={styles.header}>
                <Image source={PrimeVideoLogo}></Image>
                <Image source={AmazonLogo} style={styles.AmazonLogoImg}></Image>
            </View>

            {/* NAVEGAÇÂO */}
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            {/* BARRA DE ROLAGEM */}
            <ScrollView showsVerticalScrollIndicator>

                {/* THUMBNAIL */}
                <Text style={styles.movieText}>Acabaram de chegar...</Text>
                <TouchableOpacity style={styles.movieThumbnails}>
                    <Image source={TheWhell} />
                </TouchableOpacity>

                {/* CARDS - CONTINUE ASSITINDO */}
                <Text style={styles.movieText}>Continue assistindo...</Text>
                <FlatList
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    showsHorizontalScrollIndicator={false} // Desativando barra de rolagem
                    style={styles.contentList}
                />


                {/* CARDS - ASSISTIR */}
                <Text style={styles.movieText}>Assista...</Text>
                <FlatList
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    showsHorizontalScrollIndicator={false} // Desativando barra de rolagem
                    style={styles.contentList}
                />

                {/* CARDS - CRIMES*/}
                <Text style={styles.movieText}>Filmes Crimes</Text>
                <FlatList
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    showsHorizontalScrollIndicator={false} // Desativando barra de rolagem
                    style={styles.contentList}
                />
                {/* CARDS - C*/}
                <Text style={styles.movieText}>Filmes Cómedia</Text>
                <FlatList
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    showsHorizontalScrollIndicator={false} // Desativando barra de rolagem
                    style={styles.contentList}
                />

            <View>
                <Text style={{color: "#fff"}}>DEV. Mauricio Bertuci Saletti</Text>
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="home-outline" size={24} color="#fff" />
                    <Text style={styles.label}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="download-outline" size={24} color="#fff" />
                    <Text style={styles.label}>Downloads</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="settings-outline" size={24} color="#fff" />
                    <Text style={styles.label}>Configurações</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

