This repository is based on the contents of [this very helpful video](https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2997s).

The tutorial was done linearly and wasn't intended to act as a final product or project.
To see how it all played out, it may be helpful to look at the commit history.

### Initialize a node application

When first creating a node app:
```bash
npm init
```

Install modules with
```bash
npm install <module>	# locally
npm install -g <module>	# globally, generally not recommended
```

Install modules as a dev dependency (meaning modules used only during development and not production)
```bash
# both are equivalent
npm install --save-dev <module>
npm install -D <module>
```

When modules are installed, the `package.json` and `package-lock.json` files will be updated.
The former includes those installed with `npm install <module>` and the latter includes the dependencies of those installed modules (so committing `package-lock.json` is not necessary).
Think of `package.json` as the `requirements.txt` file in a Python virtual environment.

### Install app dependencies

Locally install the dependencies (of an existing node app)
```bash
npm install
```
This looks at the `package.json` file and installs everything under dependencies, either dev or non dev.

Install modules as in a production setting (omits the dev dependencies)
```bash
npm install --production
```

### Running the app

Run the app
```bash
node index.js   # or just `node index`
```

To use `nodemon`:
```bash
npm run dev
```
Notice the `scripts` in `package.json`. `nodemon` let's us keep editing `index.js` without having to restart the server on each change.
