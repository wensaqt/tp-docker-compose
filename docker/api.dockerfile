FROM node:18

WORKDIR /api

COPY api/package.json ./
COPY api/package-lock.json ./

RUN npm install

COPY api/ ./

CMD ["npm", "run", "start"]
