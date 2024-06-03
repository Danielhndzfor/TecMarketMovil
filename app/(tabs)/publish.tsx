import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { addProductRequest } from '@/api/productService'; // Importa la función para agregar productos
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';


const Publish = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [deliveryType, setDeliveryType] = useState('envio a domicilio');
    const [condition, setCondition] = useState('nuevo');
    const [category, setCategory] = useState(['electronica']);
    const [images, setImages] = useState<string[]>([]);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('deliveryType', deliveryType);
        formData.append('condition', condition);
        formData.append('category', category.join(','));

        try {
            const response = await addProductRequest(formData);
            if (response.status === 200 || response.status === 201) {
                Alert.alert('Success', 'Producto agregado con éxito!');
                clearForm();
            } else {
                Alert.alert('Error', 'Error al agregar el producto.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            Alert.alert('Error', 'Error al agregar el producto.');
        }
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPrice('');
        setStock('');
        setDeliveryType('envio a domicilio');
        setCondition('nuevo');
        setCategory(['electronica']);
        setImages([]);
    };

    
    const selectImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Se necesitan permisos para acceder a la galería de imágenes.');
                return;
            }

            if (images.length >= 6) {
                alert('Se ha alcanzado el límite máximo de 6 imágenes.');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
                allowsMultipleSelection: true,
            });

            if (!result.canceled && result?.assets) {
                const selectedImages = result.assets.map(asset => asset.uri);
                const remainingSlots = 6 - images.length;
                const newImages = selectedImages.slice(0, remainingSlots);
                setImages(prevImages => [...prevImages, ...newImages]);
            }
        } catch (error) {
            console.error('Error al seleccionar imágenes:', error);
        }
    };

    const removeImage = (index: number) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Publicar un Producto</Text>
            </View>

            <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder="Descripción" value={description} onChangeText={setDescription} />
            <TextInput style={styles.input} placeholder="Precio" value={price} onChangeText={setPrice} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Stock" value={stock} onChangeText={setStock} keyboardType="numeric" />

            <Text style={styles.label}>Tipo de Entrega</Text>
            <Picker
                selectedValue={deliveryType}
                style={styles.picker}
                onValueChange={(itemValue: string) => setDeliveryType(itemValue)}
            >
                <Picker.Item label="envio a domicilio" value="envio a domicilio" />
                <Picker.Item label="retiro en tienda" value="retiro en tienda" />
                <Picker.Item label="entrega personal" value="entrega personal" />
            </Picker>

            <Text style={styles.label}>Condición</Text>
            <Picker
                selectedValue={condition}
                style={styles.picker}
                onValueChange={(itemValue: string) => setCondition(itemValue)}
            >
                <Picker.Item label="nuevo" value="nuevo" />
                <Picker.Item label="usado" value="usado" />
                <Picker.Item label="seminuevo" value="seminuevo" />
            </Picker>

            <Text style={styles.label}>Categoría</Text>
            <Picker
                selectedValue={category}
                style={styles.picker}
                onValueChange={(itemValue: string) => setCategory([itemValue])}
            >
                <Picker.Item label="electronica" value="electronica" />
                <Picker.Item label="hogar" value="hogar" />
                <Picker.Item label="comida" value="comida" />
                {/* Agrega más opciones aquí si es necesario */}
            </Picker>

            <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
                <Text style={styles.imagePickerText}>
                    {images.length}/6 Imágenes Seleccionadas (Máx. 6)
                </Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image source={{ uri: image }} style={styles.image} />
                        <TouchableOpacity onPress={() => removeImage(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#f0f0f0',
    },
    header: {
        marginTop: 40,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        padding: 13,
        fontWeight: 'bold',
        marginBottom: 20,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#315E51',
    },
    picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#FFC157',
        padding: 15,
        width: '60%',
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image : {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    imageWrapper: {
        marginRight: 10,
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imagePicker: {
        backgroundColor: '#FFC157',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    imagePickerText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default Publish;