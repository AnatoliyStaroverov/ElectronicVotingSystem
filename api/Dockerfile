#  Dockerfile for Node Express Backend

FROM node:10.16-alpine

# Create App Directory
WORKDIR /api

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . ./

# Exports
EXPOSE 8080

CMD ["node","server.js"]