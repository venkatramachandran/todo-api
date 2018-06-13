FROM node:8

WORKDIR /src/app
COPY . /src/app

RUN ["npm", "install"]

EXPOSE 8080

CMD ["npm", "start"]