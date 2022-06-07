FROM node:16-alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm i

RUN npm install -g expo-cli@5.4.4

CMD ["npm", "start"]