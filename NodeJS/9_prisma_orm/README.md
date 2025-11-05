# Steps

1. Run to create the folder structure:
``` bash
npm init -y
npm install prisma --save-dev
npx prisma
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

2. Create postgresql database

3. Set db connection at .env (postgresql://localhost:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA)



