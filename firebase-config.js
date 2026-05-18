/**
 * FocusRead — Firebase Configuration
 *
 * Pasos para activar Google Sign-In (gratis):
 * ─────────────────────────────────────────────
 * 1. Ve a https://console.firebase.google.com
 * 2. "Agregar proyecto" → nombre: FocusRead → continuar
 * 3. En el proyecto: "Agregar app" → ícono </> (Web)
 * 4. Registra la app, copia el objeto firebaseConfig y pégalo abajo
 * 5. Ve a Authentication → "Comenzar" → pestaña Sign-in method
 * 6. Activa "Google" → guarda
 * 7. En Authentication → Settings → Authorized domains:
 *    agrega tu dominio de GitHub Pages (tuusuario.github.io)
 * 8. Listo — los usuarios ya pueden iniciar sesión con Google
 */
window.FOCUSREAD_FIREBASE = {
  apiKey:            'REPLACE_WITH_apiKey',
  authDomain:        'REPLACE_WITH_authDomain',
  projectId:         'REPLACE_WITH_projectId',
  storageBucket:     'REPLACE_WITH_storageBucket',
  messagingSenderId: 'REPLACE_WITH_messagingSenderId',
  appId:             'REPLACE_WITH_appId',
};
