FROM node:20.5.1

WORKDIR /app

COPY . .
RUN npm i ts-node -g
RUN npm i typescript -g 
RUN npm install

EXPOSE 6000

