import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232f3e",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    AmazonLogoImg: {
        marginTop: -32,
        marginLeft: 40,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff",
    },
    movieThumbnails: {
        width: "100%",
        alignItems: "center"
    },
    contentList: {
        paddingLeft: 20,
        paddingRight: 30,
    },
    movieText: {
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
        color: "#fff",
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor:"#41546bff",
        marginTop: 10
    },
    button: {
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        color: "#fff",
        fontSize: 12,
        marginTop: 3,

    },
});