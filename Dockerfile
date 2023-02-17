FROM node:16.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-cache-dir -r package.json

RUN npm i express

COPY . .

EXPOSE 8080

# CMD [ "code", .]

CMD [ "node", "server.js" ]

# abrir Docker Desktop
# abrir la terminal desde la carpeta "root"  
# ingresar desde terminal el siguiente comando
# docker build -t frontendc33t13 .
# el comando debe incluir el punto
# esperar que se ejecute, esto creará ña imagen
# la imagen aparecerá en Images dentro Docker Desktop
# ejecutar siguiente comando
# docker run frontendc33t13
