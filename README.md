# 1. Project Nest.js

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# 2. PRISMA

```
> npm install -D prisma
> npx prisma init
> in .env => DATABASE_URL="mysql://root:Miranda32@localhost:3306/vault"
> npx prisma migrate dev --name init
> npm install @prisma/client
> npx prisma studio
```

# 3. GITHUB

## 1. create github

```
> echo "# adam" >> README.md
> git init
> git add README.md
> git commit -m "first commit"
> git branch -M main
> git remote add origin https://github.com/solar-path/adam.git
> git push -u origin main
```

## 2. clone repository

```
  > git clone https://github.com/solar-path/adam.git
```

## 3. pull repository

```
  > git pull https://github.com/solar-path/adam.git
```

# 4 MySQL

```
  > mysql.server start
  > mysql.server stop
  > mysql.server restart
```

## Dump Database

```
> mysqldump -u root databaseName > c:\pathWhereToStoreDump
> enterPassword
```

## Terminal

1. get access

```
   > mysql -u root -p
   > enter password
```

2. list databases

```
  > show databases;
```

3. select database;

```
  > use databaseName;
```

4. show tables

```
  > show tables
```

5. drop databases;

```
  > drop database [databaseName]
```

6. create database;

```
  > create database [databaseName]
```

# 5 NEXTJS + PRISMA + VALTIO

1. PRISMA DOES NOT WORK ON CLIENT SIDE, THUS CREATE NEXTJS APIS
2. CALL API SERVICES FROM NEXTJS
3. STORE VARIABLES' VALUES IN VALTIO

<!-- https://www.youtube.com/watch?v=ZPEP7hIQ6dk -->

https://www.youtube.com/watch?v=hizCjTn2Ydg&list=PLML_YxxGl1kEZZ1fNCXHGnws9HWEZ5B6R&index=3
https://www.youtube.com/watch?v=N9cDl2bP8qc
https://www.youtube.com/watch?v=83TejqrvwJM&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=35
