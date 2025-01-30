# Amigo Secreto

Este es un proyecto que simula un sorteo de "Amigo Secreto", donde los usuarios pueden agregar nombres a una lista y, al hacer clic en un botón, se selecciona aleatoriamente uno de esos nombres como el "amigo secreto". El proyecto está desarrollado con HTML, CSS y JavaScript.

## Descripción

La aplicación permite a los usuarios ingresar los nombres de sus amigos a través de un campo de texto. Los nombres se almacenan en un arreglo y se visualizan en una lista. Al hacer clic en el botón "Sortear Amigo", uno de los nombres se selecciona aleatoriamente y se muestra como el "amigo secreto". Los usuarios pueden seguir agregando nombres y realizar el sorteo tantas veces como deseen.

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden escribir un nombre en un campo de texto y agregarlo a una lista visible haciendo clic en el botón "Adicionar".
- **Validación de entradas**: Si el campo de texto está vacío, se muestra una alerta para que el usuario ingrese un nombre válido.
- **Visualización de la lista**: Los nombres ingresados se muestran en una lista debajo del campo de entrada.
- **Sorteo aleatorio**: Al hacer clic en "Sortear Amigo", se selecciona un nombre aleatorio de la lista y se muestra en la pantalla.
- **Resetear lista**: Después de realizar el sorteo, la lista de amigos se vacía.

## Tecnologías utilizadas

- **HTML**: Para estructurar el contenido de la página.
- **CSS**: Para el diseño y estilo de la página.
- **JavaScript**: Para la lógica de programación, validación de entradas, manejo de la lista de amigos y el sorteo aleatorio.

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/pip3campos/amigo-secreto.git
    ```

2. Abre el archivo `index.html` en tu navegador. No se requieren dependencias adicionales para ejecutar el proyecto.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa un nombre en el campo de texto y haz clic en "Adicionar" para agregarlo a la lista.
3. Cuando desees realizar el sorteo, haz clic en el botón "Sortear Amigo". El nombre seleccionado se mostrará como el "amigo secreto".
4. La lista se vaciará después de cada sorteo, y puedes agregar más nombres para realizar otro sorteo.

## Problemas conocidos

- Actualmente, la aplicación permite ingresar nombres repetidos en la lista. No hay validación para evitar duplicados.
