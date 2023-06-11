FROM node

EXPOSE 8888

RUN npm install -g nodemon

WORKDIR /usr/src/app/ 
CMD ["nodemon", "app"]