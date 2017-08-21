FROM ubuntu:15.04
RUN apt-get update -qq && apt-get install -y --force-yes build-essential \
curl git apt-transport-https wget

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg |  apt-key add - && \
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update -qq && apt-get install yarn

RUN wget https://nodejs.org/dist/v6.9.4/node-v6.9.4-linux-x64.tar.xz
RUN tar -xxf node-v6.9.4-linux-x64.tar.xz
RUN cp -r node-v6.9.4-linux-x64/** /usr/local
RUN rm -rf node-v6.9.4-linux-x64
RUN chmod 755 /usr/local/bin/node /usr/local/bin/npm

RUN mkdir /manhwastore-front-end


COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock
RUN cd /tmp && npm install && yarn install
RUN cp -a /tmp/node_modules /manhwastore-front-end/

WORKDIR /manhwastore-front-end
ADD . /manhwastore-front-end

CMD ["node", "server"]
