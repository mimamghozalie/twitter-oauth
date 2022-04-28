# Twitter Oauth 2

## Start App

```bash
# copy env file
copy .env.example .env

# update env
nano .env

# start app
docker-compose up -d
```

## How to parse

```typescript
import * as Cryptr from 'cryptr';

const cryptr = new Cryptr(CLIENT_ID);

cryptr.decrypt(data);
```
