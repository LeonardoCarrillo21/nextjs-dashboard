Next.js Financial Dashboard

![Texto alternativo](https://github.com/LeonardoCarrillo21/nextjs-dashboard/blob/main/public/hero-desktop.png)

Este es un panel de administración financiero completo construido con Next.js, que permite gestionar facturas, clientes e ingresos en tiempo real. El proyecto demuestra la implementación de patrones avanzados de desarrollo web moderno, optimización de rendimiento y manejo de estados del servidor.

🚀 Características Principales

Dashboard Interactivo: Visualización de métricas clave como ingresos totales, facturas pendientes y total de facturas de forma dinámica.



Gestión de Datos (CRUD): Funcionalidad completa para crear, leer, actualizar y eliminar facturas.


Optimización de Rendimiento: Implementación de Streaming y Suspense para evitar bloqueos en la interfaz de usuario durante la carga de datos.



Diseño Responsivo: Interfaz adaptativa construida con Tailwind CSS para una experiencia fluida en cualquier dispositivo.


Seguridad y Autenticación: Protección de rutas y manejo de sesiones de usuario (opcional según configuración).

🛠️ Stack Tecnológico

Framework: Next.js (App Router).


Lenguaje: TypeScript para un desarrollo con tipado fuerte y seguro.



Estilos: Tailwind CSS.


Base de Datos: Integración con bases de datos relacionales mediante SQL.



Validación: Zod para la validación de esquemas en formularios y APIs.

Iconografía: Heroicons.

📦 Instalación y Configuración
Clonar el repositorio:

Bash

git clone https://github.com/LeonardoCarrillo21/nextjs-dashboard.git
cd nextjs-dashboard
Instalar dependencias:

Bash

npm install
Configurar variables de entorno: Crea un archivo .env en la raíz del proyecto y añade tus credenciales de base de datos y autenticación.

Ejecutar el servidor de desarrollo:

Bash

npm run dev
🏗️ Conceptos Técnicos Aplicados
Este proyecto no es solo una interfaz; implementa conceptos críticos de ingeniería de software que manejo como desarrollador:


Server Actions: Manipulación de datos directamente en el servidor para mejorar la seguridad y reducir el JavaScript en el cliente.


Paginación y Búsqueda: Implementación eficiente de filtros del lado del servidor para manejar grandes volúmenes de datos.


Accesibilidad (A11y): Formularios optimizados con mensajes de error claros y soporte para lectores de pantalla.

Manejo de Errores: Rutas de error personalizadas (error.tsx) y manejo de estados "no encontrado" (not-found.tsx).
