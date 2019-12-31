FROM node:dubnium

WORKDIR /var/www/app

COPY package* ./
COPY .npmrc ./

RUN rm -rf node_modules

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","run","start"]
