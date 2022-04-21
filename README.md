# Project Description
The project provides an API to all consumer to resize image.

# Technologies Used

- NodeJs
- TypeScript
- JavaScript

# How to Install

To get started developing right away:

* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Packages

* express 
* Sharp
* Jasmine
* supertest
* prettier
* eslint

## Project Structure

```bash
├── README.md - This file.
├── dist/ # the build out put will be saved here.
    ├── images/ # Source folder images (Important: do not delete this folder). 
    ├── thumb/ # Resized images will be saved here (Important: do not delete this folder).
├── spec/ # Configeration for jasmine.
└── src
    ├── index.ts # Starter point for the application.
    ├── images/ # Source folder images. 
    ├── tests/ # Code for unit testing.
    ├── utitlties/ # Code for helper methods. (such as image resize functionality).
```

