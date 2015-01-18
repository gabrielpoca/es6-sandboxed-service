FROM dockerfile/nodejs

WORKDIR /home/app

ADD . /home/app

RUN npm install

EXPOSE 9001

CMD ["node", "/home/app/lib/app.js"]
