# ✅ Lista de Tareas con React

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server" />
  <img src="https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React" />
</p>

Una aplicación de gestión de tareas desarrollada con **React** y **Vite** como proyecto de aprendizaje para poner en práctica los fundamentos de React y el consumo de una API simulada mediante **JSON Server**.

## 📖 Descripción

Este proyecto tiene como objetivo reforzar conceptos esenciales del desarrollo con React mediante la creación de una aplicación CRUD (Create, Read, Update y Delete) completamente funcional.

La aplicación permite administrar una lista de tareas, incluyendo la creación, edición, eliminación y cambio de estado de cada tarea. Los datos se almacenan utilizando **JSON Server**, simulando el comportamiento de una API REST.

## ✨ Funcionalidades

* ➕ Crear nuevas tareas.
* ✏️ Editar tareas existentes.
* 🗑️ Eliminar tareas.
* ✅ Marcar tareas como completadas o pendientes.
* 🔄 Persistencia de datos mediante una API local con JSON Server.

## 🛠️ Tecnologías utilizadas

* React
* Vite
* JSON Server
* CSS Modules
* Lucide React

## 📚 Conceptos de React practicados

Durante el desarrollo de este proyecto se trabajó con conceptos como:

* Componentes reutilizables.
* Manejo de estado con `useState`.
* Efectos secundarios con `useEffect`.
* Comunicación entre componentes mediante **props**.
* Renderizado condicional.
* Manejo de eventos.
* Consumo de una API REST.
* Organización de la aplicación en componentes.

## 📦 Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* Node.js 18 o superior
* npm (o cualquier gestor de paquetes compatible)

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd LISTA_DE_TAREAS
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Iniciar la API local

```bash
npx json-server --watch db.json --port 3000
```

### 4. Ejecutar la aplicación

En otra terminal:

```bash
npm run dev
```

### 5. Abrir la aplicación

Accede a la URL mostrada en la terminal (normalmente `http://localhost:5173`).

## 📂 Estructura del proyecto

```text
src/
├── components/     # Componentes reutilizables
├── App.jsx         # Componente principal
└── main.jsx        # Punto de entrada

db.json             # Base de datos simulada
```

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como parte de mi proceso de aprendizaje en **React**, con el propósito de comprender el flujo de una aplicación basada en componentes, el manejo del estado y la interacción con una API REST simulada.

## 🚀 Posibles mejoras

Algunas funcionalidades que podrían incorporarse en futuras versiones:

* 🔍 Filtrado de tareas.
* 📂 Categorías o etiquetas.
* 📅 Fechas de vencimiento.
* 🔎 Buscador de tareas.
* 🌙 Modo oscuro.
* 👤 Autenticación de usuarios.
* ☁️ Integración con una base de datos real (Firebase, Supabase o una API propia).

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de práctica personal.
