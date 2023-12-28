FROM node:20.5.1

WORKDIR /app

COPY package.json ./
RUN npm i ts-node -g
RUN npm i typescript -g 
RUN npm install

COPY . .




EXPOSE 6000

