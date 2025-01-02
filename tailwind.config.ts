module.exports = {
  content: [
    './src/**/*.{html,ts,tsx}',  // Ajusta las rutas según tu estructura de proyecto
    './public/index.html',  // Si tienes un archivo HTML en la carpeta pública
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FF6363",
        secondary: {
          100: "#E2E205",
          200: "#888883",
        }
      }
    },
  },
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'), 
  ],
}

