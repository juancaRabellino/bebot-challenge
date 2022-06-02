# bebot-challenge

### Installation

Primero debe clonarse el repositorio.
```bash
git clone https://github.com/juancaRabellino/bebot-challenge.git
```
Luego dentro de la carpeta bot-instance debe instalar las dependencias.
```bash
npm install
```
Por último debe crear el archivo .env en la raíz de la carpeta con las siguientes envs:
```bash
MONGODB=mongodb+srv://<user>:<password>@cluster0.htuzo.mongodb.net/bot-instance?retryWrites=true&w=majority
PORT=5000
```
Para correr el proyecto puede hacerlo con npm start o npm run dev (nodemon)
```bash
npm start
npm run dev
```
### Uso
Tiene 3 endpoints:

1 - Para crear un bot debe hacer post a http://localhost:5000/api/bot pasando por el body los siguientes 3 parámetros: 
```bash
{
    "name":"BeBot",
    "creatorFirstName": "Juan Carlos",
    "creatorLastName": "Rabellino"
}
```

2 - Para crear una infracción debe hacer post a http://localhost:5000/api/infraction pasando por el body los siguientes 3 parámetros: 
```bash
{
    "type":"Multa",
    "description": "Estacionado sobre senda peatonal",
    "userDNI": "123456789"
}
```

3 - Para consultar existencia de infracciones por dni de usuario debe hacer post a http://localhost:5000/api/userDNI siendo userDNI un valor alfanumérico correspondiente al dni que la persona que hace la consulta

#

# CONSIGNA
### Objetivo
Desarrollar un proyecto llamado bot-instance, que será el backend que provea los
endpoints necesarios para soportar un bot.

Características del proyecto
Debe desarrollar un backend con las siguientes características:
- Desarrollo en NodeJS
- Utilizar express como servidor
- El código fuente del servidor debe estar disponible en algún repositorio público (Github,
gitlab, etc)

Endpoints a desarrollar
/contextoInicial - POST
El endpoint debe responder con un JSON con los siguientes campos:
- Nombre del bot
- ID alfanumerico del bot
- Nombre y Apellido del creador del proyecto

/obtenerInfracciones/$userDNI - POST
El endpoint debe responder con un JSON que de cuenta si el usuario consultado (mediante
el parámetro userDNI) tiene infracciones o no.

Las respuestas pueden tener cualquier forma (cualquier esquema)