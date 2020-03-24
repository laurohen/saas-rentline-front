FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
# MIGRATE
#RUN node ace migration:run --force
#RUN node ace seed --force

EXPOSE 80
CMD [ "npm", "start" ]
