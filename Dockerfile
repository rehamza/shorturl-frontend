FROM node:lts-alpine

#set working dir
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

RUN yarn add react-scripts@4.0.0 -g

RUN yarn

#add app
COPY . ./

EXPOSE 3000

# start the app
CMD ["yarn", "start"]
