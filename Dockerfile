FROM node:10.16.0

ARG PORT=3039
ENV PORT=${PORT}

ARG CONFIG_NET=production
ENV CONFIG_NET=${CONFIG_NET}

WORKDIR /home/eosweb
RUN mkdir server

RUN npm install -g pm2@3.5.1

COPY package.json ./
RUN npm install

COPY server/package.json ./server/
RUN cd ./server && npm install && cd ..

COPY . .
RUN node patch

RUN npm run build -- --configuration="${CONFIG_NET}"

VOLUME [ "/home/eosweb/config" ]

CMD ["pm2-runtime", "./config/ecosystem.config.js", "--web", "9615"]

EXPOSE ${PORT}
EXPOSE 9615
