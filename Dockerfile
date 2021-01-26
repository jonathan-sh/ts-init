FROM node:alpine
RUN mkdir orc
WORKDIR /orc
COPY package.json /orc
COPY ./dist /orc
RUN npm install -y --production
EXPOSE 4212
ENTRYPOINT ["node", "index"]