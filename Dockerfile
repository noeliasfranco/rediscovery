FROM node

RUN echo '{ "allow_root": true }' > /root/.bowerrc

RUN npm install -g rimraf babel-cli webpack pm2

# Create app directory
WORKDIR /home/node/app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm -q install


ENV BABEL_ENV=production
ENV NODE_ENV=production

RUN npm run build

CMD [ "pm2-docker","dist/api/server.js" ]