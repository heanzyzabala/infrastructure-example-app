FROM node:12.21.0-alpine

WORKDIR /usr/app

USER node

COPY --chown=node:node ./index.js ./

CMD ["node", "index.js"]