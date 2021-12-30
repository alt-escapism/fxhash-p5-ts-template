# Fxhash template with p5 and typescript

Based on https://github.com/fxhash/fxhash-webpack-boilerplate.

## Development

```
npm install
npm start
```

This will serve the project at `src/sketch/index.ts`.

To work on multiple projects, it's recommended that you copy `src/sketch` into
a new directory, e.g. `src/lines`. Then to start that project:

```
PROJECT=lines npm start
```

## Uploading to fxhash

```
npm run build
```

OR

```
PROJECT={project_name} npm run build
```

This generates a .zip file in `dist-zipped`, ready for upload to fxhash.

