FROM node:14

WORKDIR /api

COPY ../api/package.json ./
COPY ../api/package-lock.json ./

RUN npm install

COPY ../api ./

CMD ["npm", "start"]
