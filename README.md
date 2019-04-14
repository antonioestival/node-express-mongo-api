# Objetivo

Projeto "starter" para APIs com NodeJS, Express, MongoDB e JWT

## Up & Runnig

Ambiente de Dev utilizando vagrant

### Pré Requisitos
[Vagrant](https://www.vagrantup.com/docs/installation/)
Virtual Box

### Vagrant
Necessário subir o vagrant com permissão de administrador devido a bug de sincronização de arquivos entre windows e vm vagrant
'''
vagrant up
vagrant ssh
cd /vagrant
'''

### Build de Produção
'''
yarn build
yarn start
'''

Acessar em:

http://localhost:8080/


## Deploy on Heroku

You can deploy your own copy of the app using the web-based flow:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/antonioestival/node-express-mongo-api)



# Projeto Base
https://github.com/GetStream/node-express-mongo-api


