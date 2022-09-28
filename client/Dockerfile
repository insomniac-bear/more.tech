FROM node:18-alpine
EXPOSE 3000
RUN mkdir -p /client/public /client/src
WORKDIR /client

COPY tsconfig.json /client/tsconfig.json

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json

RUN npm install

CMD ["npm", "run", "start"]