import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface PerfilScreenProps {
    navigation: any;
}

const PerfilScreen: React.FC<PerfilScreenProps> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                {/* Foto y nombre de la persona */}
                <View style={styles.profileInfo}>
                    <Image
                        source={{ uri: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Nombre de la Persona</Text>
                </View>

                {/* Opciones */}
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={styles.optionItem}
                        onPress={() => navigation.navigate('MiCuenta')}
                    >
                        <Text style={styles.optionText}>Mi Cuenta</Text>
                    </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('MisGanancias')}
                        >
                            <Text style={styles.optionText}>Mis Ganancias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Privacidad')}
                        >
                            <Text style={styles.optionText}>Privacidad</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Seguridad')}
                        >
                            <Text style={styles.optionText}>Seguridad</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Cartera')}
                        >
                            <Text style={styles.optionText}>Cartera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Ventas')}
                        >
                            <Text style={styles.optionText}>Ventas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Ayuda')}
                        >
                            <Text style={styles.optionText}>Ayuda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Información')}
                        >
                            <Text style={styles.optionText}>Información</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => navigation.navigate('Planes')}
                        >
                            <Text style={styles.optionText}>Planes</Text>
                        </TouchableOpacity>
                </View>

                {/* Botón de Cerrar Sesión */}
                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        padding: 20,
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    optionsContainer: {
        marginBottom: 20,
    },
    optionItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
    },
    logoutButton: {
        padding: 15,
        backgroundColor: '#ff5a5f',
        alignItems: 'center',
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PerfilScreen;