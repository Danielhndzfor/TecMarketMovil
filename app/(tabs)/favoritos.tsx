import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const favoriteLists = [
  { id: '1', name: 'Electrónica', count: 12 },
  { id: '2', name: 'Ropa', count: 8 },
  { id: '3', name: 'Hogar', count: 5 },
  { id: '4', name: 'Juguetes', count: 3 },
];

const suggestedProducts = [
  { id: '1', name: 'Producto 1' },
  { id: '2', name: 'Producto 2' },
  { id: '3', name: 'Producto 3' },
];

const FavoritosScreen = () => {
  const renderFavoriteItem = ({ item }: { item: { id: string, name: string, count: number } }) => (
    <View style={styles.favoriteItem}>
      <FontAwesomeIcon icon={faHeart} style={styles.icon} />
      <Text style={styles.listName}>{item.name}</Text>
      <Text style={styles.listCount}>{item.count} productos</Text>
    </View>
  );

  const renderSuggestedItem = ({ item }: { item: { id: string, name: string } }) => (
    <View style={styles.suggestedItem}>
      <FontAwesomeIcon icon={faStar} style={styles.icon} />
      <Text style={styles.suggestedProductName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listas de Favoritos</Text>
      <FlatList
        data={favoriteLists}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.subtitle}>Productos Sugeridos</Text>
      <FlatList
        data={suggestedProducts}
        renderItem={renderSuggestedItem}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.suggestedListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#315E51',
  },
  listContainer: {
    paddingBottom: 16,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  icon: {
    color: '#315E51',
    marginRight: 10,
  },
  listName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#315E51',
    flex: 1,
  },
  listCount: {
    fontSize: 16,
    color: '#888',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 8,
    textAlign: 'center',
    color: '#315E51',
  },
  suggestedListContainer: {
    paddingBottom: 80,
  },
  suggestedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 60,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  suggestedProductName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#315E51',
    marginLeft: 10,
  },
});

export default FavoritosScreen;
