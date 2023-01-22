FROM node:16.14-alpine

WORKDIR /root/app

COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 8888

CMD ["yarn", "start"]