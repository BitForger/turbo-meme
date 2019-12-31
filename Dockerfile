FROM node:dubnium

WORKDIR /var/www/app

COPY package* ./
COPY .npmrc ./

RUN npm cache-clear --force && npm rebuild

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","run","start"]
