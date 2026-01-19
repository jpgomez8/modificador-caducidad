# MongoDB – Operadores y Aggregation Pipeline (Backend Reference)

## 1. Operadores de Consulta (Query Operators)

### Comparación
$eq     Igual  
$ne     Distinto  
$gt     Mayor que  
$gte    Mayor o igual  
$lt     Menor que  
$lte    Menor o igual  
$in     Dentro de un arreglo  
$nin    NO dentro de un arreglo  

Ejemplo:
{ edad: { $gte: 18 } }

---

### Existencia y tipo
$exists  Verifica si el campo existe  
$type    Verifica tipo de dato  

Ejemplo:
{ fechaCaducidadPassword: { $exists: false } }

---

### Texto
$regex   Búsqueda por patrón  
$options Opciones de regex  

Ejemplo:
{ email: { $regex: "@gmail.com$", $options: "i" } }

---

## 2. Operadores Lógicos

$and  Todas las condiciones  
$or   Alguna condición  
$not  Negación  
$nor  Ninguna condición  

Ejemplo:
{
  $or: [
    { rol: "admin" },
    { rol: "supervisor" }
  ]
}

---

## 3. Operadores de Actualización

$set        Crear o modificar campo  
$unset      Eliminar campo  
$inc        Incrementar / decrementar  
$push       Agregar a array  
$pull       Eliminar de array  
$addToSet   Agregar sin duplicar  

Ejemplo:
{ $set: { activo: true } }

---

## 4. Operadores de Fecha

$$NOW            Fecha actual del servidor  
$dateAdd         Sumar tiempo  
$dateSubtract    Restar tiempo  
$year            Año  
$month           Mes  
$dayOfMonth      Día  

Ejemplo:
{
  $dateAdd: {
    startDate: "$$NOW",
    unit: "day",
    amount: 90
  }
}

---

## 5. Aggregation Pipeline (Etapas)

$match      Filtrar documentos  
$project    Seleccionar campos  
$set        Crear / modificar campos  
$addFields  Crear campos nuevos  
$group      Agrupar  
$sort       Ordenar  
$limit      Limitar  
$lookup     Join  
$unwind     Expandir arrays  

---

## 6. Operadores de Agrupación

$sum    Sumar  
$avg    Promedio  
$min    Mínimo  
$max    Máximo  
$count  Contar  

Ejemplo:
{
  $group: {
    _id: "$rol",
    total: { $count: {} }
  }
}

---

## 7. Operadores Especiales

$expr    Comparar campos  
$cond    Condicional  
$ifNull  Valor por defecto  

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