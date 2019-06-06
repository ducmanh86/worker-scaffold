FROM node:lts-alpine

ENV TZ 'Asia/Ho_Chi_Minh'
RUN rm /etc/localtime && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime

# Create working directory
WORKDIR /usr/src/app

COPY ../package.json .
COPY ../package-lock.json .

RUN npm install

EXPOSE 3000
