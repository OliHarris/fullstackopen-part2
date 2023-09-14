# fullstackopen-part2

Combined notes and exercises for https://fullstackopen.com/en/part2

## Available Scripts

In the root directory you can run:

### `npm install`

Will perform a usual installation of any dependencies.

### `npm run dev`

Will perform a usual launch of the dev environment.

### `npm run server`

Will run json-server package for certain projects listed below.

## Notes 1

Basically has four projects:

- App-notes
- App-courses (uses json-server; change db-notes.json to db.json)
- App-phonebook (uses json-server; change db-phonebook.json to db.json)
- App-countries <--default

This can be switched in the main.jsx file.

## Notes 2

In the 'rest-api' folder, you will need to provide your own API string from https://openweathermap.org - in a root .env file.

Format 'VITE_SOME_KEY='
