# JS-portfolio
Esta aplicación proporciona un buscador de libros digitales, muestra la información relacionada de dicho libro y permite descargar dicho libro.

## React install
``npm init``

``npm install react --save``

``npm install react-dom --save``

``npm install parcel-bundler --save-dev``

### Install EsLint plugin
``npm install -g eslint``

``eslint --init``

Edit eslint file configuration:
```
{
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "linebreak-style": "off"
    }
}
```

``npm add --save-dev eslint-config-airbnb``

``npm add --save-dev eslint-plugin-import``

``npm add --save-dev eslint-plugin-hsx-a11y``

``npm add --save-dev eslint-plugin-react``

#### Visual Studio
File > Preferences > Settings (JSON)
Add this 4 lines: 
```
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## Formatos
  - .epub
  - .mobi
