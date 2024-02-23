# Prisma
 Learning Prisma basics

## Steps for Setup

```npm install prisma typescript ts-node @types/node --save-dev```

```npx tsc --init```
```Change `rootDit` to `src` ```
``` Change `outDir` to `dist` ```


 You have created a single schema file. You haven’t yet run the CREATE TABLE  commands. To run those and create migration files , run 
npx prisma migrate dev --name Initialize the schema

In our case --
```npx prisma migrate dev --name ```
UserAndTod
oAdded

## How to generate the client?
```npx prisma generate```
This generates a new client  for you.