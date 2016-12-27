FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install
RUN cd ./client && npm install
RUN cd ./server && npm install
RUN cd ./client && npm run build

RUN chmod -R 777 /usr/src/app/bin

EXPOSE 3000
