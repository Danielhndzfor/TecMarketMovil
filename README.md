# TecMarket

Este proyecto contiene la aplicación móvil de TecMarket, un espacio de compra y venta segura entre jóvenes de educación superior. Utilizamos tecnologías React Native y Expo.

## Descripción

La aplicación móvil TecMarket permite realizar la publicación de productos y poder observar los productos que son publicados. Esto permite ver los diversos productos que contiene la app.


## Instalación

Para realizar la descarga e instalación del proyecto, sigue estos pasos:

1. Clona el repositorio:
`git clone https://github.com/Danielhndzfor/TecMarketMovil.git`

2. Navega al directorio del proyecto:
`cd TecMarketMovil`

3. Instala las dependencias:
`npm install`

### Configuración del Backend

Para lograr la conexión entre la app y la base es necesario hacer unas configuraciones al proyecto.

1. Clona y configura el Backend del Proyecto siguiendo las indicaciones en el [README.md](https://github.com/Danielhndzfor/TecMarketBack.git):

* Dirección del Repositorio del Backend: [TecMarketBack](https://github.com/Danielhndzfor/TecMarketBack.git)

2. Una vez que el backend esté corriendo, actualiza la URL de la API en la aplicación móvil de este proyecto. Abre el archivo `api/productService.ts` y reemplaza `192.168.100.18` con la dirección IP de tu computadora:
`const API = 'http://<tu-ip-local>:3000/api';`

## Ejecución

Una vez que hayas configurado el backend y actualizado la URL de la API, puedes ejecutar la aplicación móvil. Sigue estos pasos:

1. Asegúrate de que el backend está corriendo en `http://localhost:3000`.

2. Inicia el servidor de desarrollo de Expo:
    ```bash
    npx expo start
    ```

Presiona la tecla `a` para abrir la aplicación en un emulador de Android. Deberías ver algo similar a esto en la terminal:

```bash
› Metro waiting on exp://<tu-ip-local>:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Usa la aplicación Expo Go en tu dispositivo móvil o el emulador de Android para escanear el código QR que aparece en la terminal o en el navegador.
```

No obstante recomiendo para una mayor interacción descargar la app `Expo Go` que se encuentra en todas las tiendas de aplicaciones tanto android como ios.

Al descargar en Android unicamente debes seleccionar `Scan QR code` y apunta tu camara al qr que arrojo en la terminal al ejecutar el comando de ejecución.

Y eso seria todo, puede pedir permisos al momento de querer subir una imagen, tu decides si das permiso limitado o abierto.

## Pantalla Principal

Al correr el emulador, podrás observar la siguiente pantalla:

![imagen de pantalla principal](/assets/images/PantallaP.jpeg)

