FROM node

EXPOSE 8888

RUN npm install -g nodemon

CMD ["node"]