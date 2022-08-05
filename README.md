### Check front-end repository at https://github.com/Vinicius-R-Cunha/front-end-desafio-wa

## API Documentation

### Route "/films/update"

Method POST on this route updates database with new films information

### Route "/films"

Method GET to get all films

Query parameters: page - integer

## How to run

### Clone this repository

```bash
$ git clone https://github.com/Vinicius-R-Cunha/back-end-desafio-wa.git
```

### Access the directory where you cloned it

```bash
$ cd back-end-desafio-wa
```

### Install back-end dependencies

```bash
npm i
```

### Create an environment variables file in the project root (.env) and configure it as shown in .env.example file:

```bash
SOURCE_URL=https://ghibliapi.herokuapp.com/films
DATABASE_URL=postgres://postgres:123456@localhost:5432/example
```

### Run prisma to create database

```bash
npx prisma migrate dev
```

### Run the back-end with

```bash
npm run dev
```
