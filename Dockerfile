FROM node:17

COPY . /app
WORKDIR /app

RUN npm install
RUN npm run compile

CMD ["node", "build/index.js"]
