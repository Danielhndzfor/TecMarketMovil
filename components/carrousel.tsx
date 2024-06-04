import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollViewRef.current) {
                const newIndex = (currentIndex + 1) % images.length;
                scrollViewRef.current.scrollTo({
                    animated: true,
                    x: width * newIndex,
                    y: 0,
                });
                setCurrentIndex(newIndex);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
                onScroll={(event) => {
                    const offsetX = event.nativeEvent.contentOffset.x;
                    const newIndex = Math.round(offsetX / width);
                    setCurrentIndex(newIndex);
                }}
            >
                {images.map((imageUrl, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 170,
        marginTop: 20,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    imageContainer: {
        width,
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
});

export default Carousel;

