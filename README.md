A very helpful video

https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2997s

When first creating a node app:
```bash
npm init
```

Install a module
```bash
npm install <module>
```
From node repository.

Install the dependencies (of an existing node app)
```bash
npm install
```
This looks at the `package.json` file and installs everything under dependencies, either dev or non dev.

Install a dev dependency
```bash
# both are equivalent
npm install --save-dev <module>
npm install -D <module>
```

Install all non dev packages
```bash
npm install --production
```

Run the app
```bash
node index.js   # or just `node index`
```
