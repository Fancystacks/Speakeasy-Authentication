# Speakeasy-Authentication

## Download:

- NPM install dependencies
  - uuid
  - speakeasy
  - express
  - node-json-db

Use `nodemon index.js` to start

The library json DB will auto-generate an empty folder once imported

<img src="https://user-images.githubusercontent.com/38336934/104986589-930b6800-59d0-11eb-8143-b94f0b342cf8.png" width="500" height="370">

## Usage:

### Use Postman POST route to `/api/register` to register a user

- id and secret will be generated as an object

- object will automatically appearin myDataBase.json folder

### Download Chrome Authenticator extension to get a token

- select manual entry

- enter desired name and the secret generated from the POST route

- token will have a time countdown before token expires

<img src="https://user-images.githubusercontent.com/38336934/104986591-94d52b80-59d0-11eb-9a74-a9e3263db057.png"  width="270" height="350">

## Validation:

### Create a POST route to `/api/token`

- incude an object with the user ID and the token in the body

<img src="https://user-images.githubusercontent.com/38336934/104986585-9141a480-59d0-11eb-92e3-705103ce13ed.png"  width="470" height="350">

Verification will appear as true or false
