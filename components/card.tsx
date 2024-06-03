import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

interface CardProps {
    title: string;
    price: number;
    rating: number; // Cambiado a number si representa la calificación
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, price, rating, imageUrl }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>Precio: ${price}</Text>
                <View style={styles.ratingContainer}>
                    <AntDesign name="star" size={16} color="orange" />
                    <Text style={styles.rating}>{rating}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <FontAwesome name="heart" size={20} color="red" />
                    <FontAwesome name="exclamation-triangle" size={20} color="orange" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginBottom: 5,
        elevation: 3,
        width: 150,
    },
    image: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    content: {
        padding: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    price: {
        fontSize: 12,
        marginBottom: 3,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
    },
    rating: {
        marginLeft: 3,
        fontSize: 12,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Card;
