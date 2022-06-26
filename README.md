# Technical test Pricing Hub

This project is a technical test made as part of Pricing Hub's interview process.

## How to install the application

- Clone the github repository
- Run `npm install` to install the dependencies of the project
- Go to `http://localhost:3000/` to see the result

## Recommanded extensions

When opening VSCode for the first time for this project, you should see a popup in the bottom left corner, recommending to install Eslint, Stylelint and Prettier extensions. You can accept it so that you can see Linter warnings/errors directly on VSCode while writing code, and so that Prettier can format your code as you write it. This project uses two linters, Stylelint for scss files and Eslint for the ts/tsx/js/jsx files.

It is also recommended to go on the settings and check the option to format the code on save.

## Data formatting

The original data provided was the `data.csv` file. The script `formatData.js` was used to format that data in a way that is easier to use. The result is in the file `src/formattedData.json`

## Future improvements

I made a list of some improvements I would have implemented in this project if I had had more time. You can see it in the [todo.md](./todo.md) file
