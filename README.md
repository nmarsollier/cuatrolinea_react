# cuatro_linea_react

UI en react para el [proyecto card game](https://github.com/nmarsollier/cuatro_linea_node)

Abrir ventana de comandos en la carpeta, ejecutar:

```bash
npm install
npm start
```

Desde un browser debemos abrir [localhost:4200](http://localhost:4200/)

## VSCode

Este proyecto utiliza eslint

```bash
sudo npm install -g eslint
```

## Docker

Podemos usar Docker para levantar este servidor, esta configuración es un build para producción, pero sirve para probarlo:

```bash
docker build --no-cache -t cuatro_linea_react https://raw.githubusercontent.com/nmarsollier/cuatro_linea_react/master/Dockerfile

# Mac || Windows
docker run -it -d --name cuatro_linea_react -p 4200:80 cuatro_linea_react

# Linux
docker run --add-host host.docker.internal:172.17.0.1 -it -d --name cuatro_linea_react -p 4200:80 cuatro_linea_react
```

[Test](http://localhost:4200/)
