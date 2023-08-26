FROM node:alpine as base

WORKDIR /app

COPY package.json ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

EXPOSE 4242


CMD ["node", "./app.js"]