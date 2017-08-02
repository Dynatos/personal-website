FROM node:latest

RUN apt-get update && apt-get upgrade -y

RUN mkdir /src
COPY . /src
WORKDIR /src
RUN rm -rf node_modules
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm","run","build"]
