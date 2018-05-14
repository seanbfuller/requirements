# Requirements


## Install MongoDB

### OSX instructions

If needed, address brew permission issue with High Sierra OSX
https://github.com/Homebrew/brew/issues/3228

```
sudo mkdir /usr/local/include
sudo mkdir /usr/local/Frameworks
sudo chown -R $(whoami) $(brew --prefix)/*
```

Install mongodb via brew
See https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

```
brew install mongodb
sudo mkdir -p /data/db
sudo chown $(whoami) /data/db
```

## Install NPM

### OSX instructions

```
brew install node
```

## Install gulp

```
npm install -g gulp
```

# Getting Started

Perform the following commands in multiple terminals tabs:

Rebuild dependencies 

```
npm install
```

Start Mongodb

```
mongod
```

Start express with nodemon to automate restarting on change.

```
DEBUG=requirements:* npm run devstart
```

Start the gulp process to watch for css changes and use browser-sync

```
gulp
```

Visit http://localhost:3000/


# Seed the mongo db with test data

```
node populatedbtest
```

# Project Creation History

Setup based on 
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website

```
npm install express-generator -g
express requirements --view=pug
```
