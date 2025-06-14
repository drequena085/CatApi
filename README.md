## [IMPORTANTE]: Compatibilidad con Java
Capacitor, junto con el ecosistema Android actual, aún no presenta una compatibilidad completa con Java 21, lo que puede generar errores al compilar el proyecto.

## Requisitos de compilación
Este proyecto fue desarrollado usando:

-> Node.js: 20.16.0
-> Ionic CLI: 7.2.1
-> Android Studio
-> JDK 17 (recomendado para compilar sin errores)

`NOTA: Al ejecutar comandos como "ionic cap build android", Capacitor genera archivos que establecen por defecto Java 21 como versión de compilación.`
`Para evitar errores de compatibilidad:`
# > Abre el proyecto en Android Studio.
# > Ve a File > Settings > Build, Execution, Deployment > Build Tools > Gradle.
# > Asegúrate de que el JDK configurado sea Java 17.
# > En caso de errores al generar el APK, reemplaza (desde android studio) en build.gradle:
-> sourceCompatibility JavaVersion.VERSION_21
# Por esto:
-> sourceCompatibility JavaVersion.VERSION_17
