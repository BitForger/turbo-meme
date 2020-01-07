ARG DUMB_INIT_VERSION=1.2.2
FROM node:dubnium-alpine as build
ARG S3_ACCESS_KEY_ID_ARG
ARG S3_SECRET_ACCESS_KEY_ARG
ARG DUMB_INIT_VERSION

ENV S3_ACCESS_KEY_ID=${S3_ACCESS_KEY_ID_ARG}
ENV S3_SECRET_ACCESS_KEY=${S3_SECRET_ACCESS_KEY_ARG}

WORKDIR /home/node

RUN apk add --no-cache build-base python2 yarn && \
    wget -O dumb-init -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
    chmod +x dumb-init

ADD . /home/node

RUN yarn install --update-checksums && yarn build && yarn cache clean

#Runtime
FROM node:dubnium-alpine
WORKDIR /home/node

COPY --from=build /home/node /home/node
EXPOSE 3000
CMD ["./dumb-init","yarn","start"]
