import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const notifications = [
    { id: '1', image: 'https://via.placeholder.com/50', text: 'Nueva oferta en electrónica', time: 'Hace 2 horas' },
    { id: '2', image: 'https://via.placeholder.com/50', text: 'Descuento en ropa', time: 'Hace 3 horas' },
    { id: '3', image: 'https://via.placeholder.com/50', text: 'Nuevo mensaje de soporte', time: 'Hace 1 día' },
];

const NotificacionScreen = () => {
    const handleDelete = (id: string) => {
        console.log(`Eliminar notificación con id: ${id}`);
        // Lógica para eliminar la notificación
    };

    const renderRightActions = (id: string) => (
        <View style={styles.deleteButton}>
            <FontAwesomeIcon icon={faTrash} size={24} color="#fff" />
            <Text style={styles.deleteButtonText}>Eliminar</Text>
        </View>
    );

    const renderNotificationItem = ({ item }: { item: { id: string, image: string, text: string, time: string } }) => (
        <Swipeable
            renderRightActions={() => renderRightActions(item.id)}
            onSwipeableRightOpen={() => handleDelete(item.id)}
        >
            <View style={styles.notificationItem}>
                <Image source={{ uri: item.image }} style={styles.notificationImage} />
                <View style={styles.notificationTextContainer}>
                    <Text style={styles.notificationText}>{item.text}</Text>
                    <Text style={styles.notificationTime}>{item.time}</Text>
                </View>
            </View>
        </Swipeable>
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Notificaciones</Text>
                <FlatList
                    data={notifications}
                    renderItem={renderNotificationItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
        color: '#315E51',
    },
    listContainer: {
        paddingBottom: 16,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 2,
    },
    notificationImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    notificationTextContainer: {
        flex: 1,
    },
    notificationText: {
        fontSize: 16,
        color: '#315E51',
    },
    notificationTime: {
        fontSize: 12,
        color: '#888',
        textAlign: 'right',

    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        backgroundColor: 'red',
        borderRadius: 8,
        marginVertical: 8,
        marginRight: 16,
    },
    deleteButtonText: {
        color: '#fff',
        marginTop: 4,
        fontWeight: 'bold',
    },
});

export default NotificacionScreen;

