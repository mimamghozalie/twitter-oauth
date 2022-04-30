FROM alpine:3.15

WORKDIR /app

RUN wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub && \
    echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories && \
    apk add doppler

RUN apk add --update nodejs yarn

ENV NODE_ENV 'production'

COPY package.json ./

RUN yarn install --no-cache --production

COPY . .

EXPOSE 3000

CMD ["doppler", "run", "--", "node","main.js"]