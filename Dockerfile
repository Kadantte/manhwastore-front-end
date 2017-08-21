FROM ubuntu:15.04
RUN apt-get update -qq && apt-get install -y --force-yes build-essential \
curl git

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg |  apt-key add - 
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

RUN wget https://nodejs.org/dist/v6.9.4/node-v6.9.4-linux-x64.tar.xz
RUN tar -xxf node-v6.9.4-linux-x64.tar.xz
RUN cp -r node-v6.9.4-linux-x64/** /usr/local
RUN rm -rf node-v6.9.4-linux-x64
RUN chmod 755 /usr/local/bin/node /usr/local/bin/npm

RUN mkdir /manhwastore-front-end


WORKDIR /tmp
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install -g

WORKDIR /manhwastore-front-end
ADD . /
RUN cd /manhwastore-front-end

CMD ["node", "server"]
