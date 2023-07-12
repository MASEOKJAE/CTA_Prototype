import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>CTA 관리 시스템</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'left',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
});