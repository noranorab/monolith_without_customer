FROM node:14.21.3-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 8000

CMD ["node", "src/index.js"]