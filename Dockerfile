FROM node:slim

COPY . /app
COPY ./init-db.sql /docker-entrypoint-initdb.d/
WORKDIR /app

RUN npm install
RUN npm run compile

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN apt-get update && apt-get install gnupg wget -y && wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor >/etc/apt/trusted.gpg.d/google-archive.gpg && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && apt-get update && apt-get install google-chrome-stable -y --no-install-recommends && rm -rf /var/lib/apt/lists/*

CMD ["docker-entrypoint.sh", "postgres"]
CMD ["node", "build/index.js"]
