## Instale Tailwind CSS y otras dependencias

### Ingrese este comando para instalar las dependencias tailwindcss, postcss y autoprefixer

`$ yarn add -D tailwindcss postcss autoprefixer`

Este comando instalará lo siguiente:

1. El marco Tailwind CSS

2. Post CSS, que proporciona complementos para realizar diferentes funcionalidades como prefijos en Vanilla CSS

3. Autoprefixer, que es un complemento de PostCSS para analizar CSS y agregar prefijos de proveedores a las reglas de CSS.

### Generar los archivos de configuración

Este comando generará el archivo de configuración tailwindcss

`$ npx tailwindcss init -p`

### Configure las rutas de origen

Agregue las rutas a todos sus archivos de plantilla en su tailwind.config.cjsarchivo. Los archivos de plantilla incluyen plantillas HTML, componentes de JavaScript y otros archivos de origen que contienen nombres de clases de Tailwind. Esto es para asegurarse de que se genere Vanilla CSS para los elementos correspondientes.

Tu `tailwind.config.js` debe tener la siguiente configuracion:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

El archivo de configuración actual denominado tailwind.config.cjs contiene el objeto module.export para personalizar Tailwind con propiedades como contenido, tema y complementos.

### Agregar directivas Tailwind a su CSS

Las directivas de Tailwind son declaraciones personalizadas específicas de Tailwind que indican a CSS cómo comportarse. Deberá agregar directivas para tres de las capas de Tailwind.

@tailwind baseinyecta los estilos base de Tailwind y los estilos base registrados por complementos, @tailwind componentsinyecta las clases de componentes de Tailwind y las clases de componentes registradas por complementos, mientras que @tailwind utilitiesinyecta las clases de utilidad de Tailwind y las clases de utilidad registradas por complementos.

Agregue las siguientes declaraciones a su archivo `./src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
