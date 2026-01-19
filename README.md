# 🔐 Modificador de Caducidad de Contraseña

Sistema web desarrollado con **Angular (Standalone Components)** en el frontend y **NestJS + MongoDB** en el backend, que permite modificar la **fecha de caducidad de la contraseña** de un usuario mediante su **ID**.

La aplicación está pensada como una herramienta administrativa simple, clara y eficiente para gestión interna de usuarios.

---

## 🧱 Arquitectura
- **Frontend**: Interfaz de usuario, validaciones y experiencia visual
- **Backend**: API REST para actualización de datos
- **Base de datos**: Persistencia de usuarios y fechas de caducidad

## ✨ Funcionalidades

- Ingreso de **ID de usuario**
- Selección de **fecha de caducidad** mediante calendario
- La fecha se inicializa automáticamente en **31 de diciembre del año actual**
- Validación de campos obligatorios
- Actualización de la fecha de caducidad en la base de datos
- Limpieza automática del campo ID tras una actualización exitosa
- Alertas visuales modernas usando **SweetAlert2**
- Interfaz simple y responsiva

---


## 🖥️ Frontend

### Tecnologías
- **Angular 17+**
- **Standalone Components**
- **FormsModule (ngModel)**
- **SweetAlert2**
- **TypeScript**
- **CSS personalizado**

### Comportamiento
- El calendario se inicializa en el último día del año
- Validaciones antes de enviar
- Feedback visual claro al usuario
- Limpieza y reseteo del formulario tras éxito

---

## ⚙️ Backend

### Tecnologías
- **NestJS**
- **MongoDB**
- **Mongoose**
- **TypeScript**

### Funcionalidad principal
- Endpoint para actualizar la fecha de caducidad de contraseña
- Recepción de:
  - ID del usuario
  - Fecha de caducidad (parámetro dinámico)
- Persistencia en la colección `usuarios`

### Instalación y ejecución frontend
npm install
ng serve
http://localhost:4200

### Instalación y ejecución backend
npm install
npm run start:dev
http://localhost:3000

### 👤 Autor
Desarrollado por Jean Paul Gómez
# modificador-caducidad
Modificar la fecha de caducidad de la contraseña de un usuario, AngularJs para el frontend, NestJs para el backend.
