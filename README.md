
## manual installation 
	- node.js v.10^ https://nodejs.org/
	- npm install -g angular-cli@7.1.4
	- mongodb 4.0^ https://www.mongodb.com/

## docker-compose example
   `docker-compose.example.yml`

## config.js 
For creating `config.js` file you need to see `config.example.js` (default config)

## Development server

1. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
2. Also in another terminal window you have to start your backend part - `node server/server.js` (`http://localhost:3039/`)

## Build and start

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Starting project `node server/server.js`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
