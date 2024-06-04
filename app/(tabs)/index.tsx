import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput, RefreshControl } from 'react-native';
import { getProducts } from '@/api/productService'; // Importa la función de la API
import { useFocusEffect } from '@react-navigation/native';
import Carousel from '@/components/carrousel';

const images = [
  'https://www.hogarmania.com/archivos/202207/postres-frios-xl-1280x720x80xX.jpg',
  'https://topcleanbaleares.com/wp-content/uploads/2019/10/electronica.jpg',
  'https://cdn2.chicmagazine.com.mx/uploads/media/2022/09/26/accesorios-moda-haran-reina-otono.jpg',
];

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      console.log('Response data:', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProducts().then(() => setRefreshing(false));
  }, []);

  const renderProductItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styles.productItem}>
        <Image
          source={{ uri: item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/200' }}
          style={styles.productImage}
          onError={(error) => {
            console.log(`Error al cargar la imagen: ${item.images[0]}`, error);
          }}
        />

        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>Precio: ${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Carousel images={images} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item._id ? item._id.toString() : Math.random().toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          numColumns={2} // Agregado para mostrar dos columnas
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  flatListContent: {
    justifyContent: 'space-between', // Añadido para distribuir el espacio entre los elementos
  },
  productItem: {
    backgroundColor: '#fff',
    margin: 10, // Ajustado para mejorar el espaciado
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    flexBasis: '45%', // Ajustado para mejor distribución
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
