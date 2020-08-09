FROM node:12.18.3-alpine3.10
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /home/node/app
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "start"]
