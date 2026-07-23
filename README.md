# Lista de Tareas con React

Este proyecto es una aplicación de lista de tareas desarrollada como parte de un curso de React. Permite crear, editar, eliminar y marcar tareas como completadas, utilizando React, Vite y JSON Server para simular una API local.

## 🚀 Características

- Agregar nuevas notas o tareas
- Editar tareas existentes
- Eliminar tareas
- Marcar tareas como completadas o pendientes
- Persistencia sencilla de datos mediante JSON Server

## 🛠️ Tecnologías utilizadas

- React
- Vite
- JSON Server
- CSS Modules
- Lucide React

## 📦 Requisitos

- Node.js 18 o superior
- npm o pnpm

## ▶️ Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd LISTA_DE_TAREAS
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de datos:
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. En una terminal nueva, inicia la aplicación:
   ```bash
   npm run dev
   ```

5. Abre la URL que aparece en la terminal para ver la app.

## 📁 Estructura del proyecto

- src/components: componentes principales de la interfaz
- src/App.jsx: componente raíz
- db.json: base de datos simulada para JSON Server

## 🎯 Objetivo del proyecto

Practicar conceptos fundamentales de React como:

- Estado y props
- Renderizado condicional
- Eventos
- Hooks como useState y useEffect
- Integración con una API local

## 📝 Nota

Este proyecto fue creado con fines educativos y puede servir como base para ampliar la aplicación con autenticación, filtrado de tareas o almacenamiento en una base de datos real.
