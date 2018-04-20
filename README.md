# requirements


# Setup a MondoDB with brew

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


# Getting Started

Rebuild dependencies 

```
npm install
```

Start Mongodb

```
mongod
```

start express with nodemon to automate restarting on change.

```
DEBUG=requirements:* npm run devstart
```

Visit http://localhost:3000/

# Project Creation History

Setup based on 
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website

```
npm install express-generator -g
express requirements --view=pug
```
