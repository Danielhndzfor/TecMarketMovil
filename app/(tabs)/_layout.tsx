import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

library.add(fas);

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <FontAwesomeIcon icon="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.mapSection}>
        <FontAwesomeIcon icon="map" style={styles.mapIcon} />
        <Text style={styles.mapText}>Mapa</Text>
      </View>
    </View>
  );
};

export default function TabLayout() {
  const sizeAdd = 45;

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#315E51',
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon="home" size={size} color={color} />
            ),
            tabBarActiveTintColor: '#5E9E6B', // Color para la pestaña activa
            tabBarInactiveTintColor: '#CCCCCC', // Color para las pestañas inactivas
            
          }}
        />
        <Tabs.Screen
          name="favoritos"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon="heart" size={size} color={color} />
            ),
            tabBarActiveTintColor: '#5E9E6B', // Color para la pestaña activa
            tabBarInactiveTintColor: '#CCCCCC', // Color para las pestañas inactivas
          }}
        />
        <Tabs.Screen
          name="publish"
          options={{
            title: '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon="square-plus" size={sizeAdd} color={color} />
            ),
            tabBarActiveTintColor: '#5E9E6B', // Color para la pestaña activa
            tabBarInactiveTintColor: '#CCCCCC', // Color para las pestañas inactivas
          }}
        />
        <Tabs.Screen
          name="notificacion"
          options={{
            title: 'Notificación',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon="bell" size={size} color={color} />
            ),
            tabBarActiveTintColor: '#5E9E6B', // Color para la pestaña activa
            tabBarInactiveTintColor: '#CCCCCC', // Color para las pestañas inactivas
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon="user" size={size} color={color} />
            ),
            tabBarActiveTintColor: '#5E9E6B', // Color para la pestaña activa
            tabBarInactiveTintColor: '#CCCCCC', // Color para las pestañas inactivas
          }}
        />
      </Tabs>


    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#315E51',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '70%',
    paddingLeft: 10,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
    color: '#315E51',
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    flex: 1,
  },
  mapSection: {
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
  },
  mapIcon: {
    color: '#fff',
    marginBottom: 2,
  },
  mapText: {
    color: '#fff',
    fontSize: 12,
  },
});





