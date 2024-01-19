# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
```
docker compose up -d
```

2. Remplazar el .env.template a .env
3. Reemplazar las variables de entorno

4. Conectar prisma con next
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

5.  Ejecutar el Seed para [crear la base de datos local](http://localhost:3000/api/seed)

