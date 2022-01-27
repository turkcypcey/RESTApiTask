FROM node:alpine

RUN apk add --no-cache \
    curl

WORKDIR /app/

RUN curl https://unpkg.com/vue@next -L -o vue.js

COPY package.json ./
RUN npm install

COPY . .

ENTRYPOINT ["node", "server.js"]
