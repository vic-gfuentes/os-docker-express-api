# Open Space DevOps - Docker principles
### Descripcion:

Esta es un API desarrollada con ExpressJs con el objetivo de ser la base para generar un workflow completo utilizando Docker.

Los ejercicios a realizar son:
- Dockerizar el app base con una sola estapa
- Utilizar multi-stage builds para optimizar la imagen
- Crear un `docker-compose` file para agregar una base de datos
- Hacer un `github workflow` para `Continuous Deployment`
- Hacer un deploy a `AWS ECS`

### Versiones:
| Node    | Yarn     |
|:------: | :-----:  |
| 18.12.1 | 1.22.19  |

### How to:
- Build del proyecto: `yarn build` eso les genera un folder con la version final del app: `dist/app.js`
- Ejecutar la versiona final: `yarn start`
