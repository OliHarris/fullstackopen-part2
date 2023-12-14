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

## Note 1:

Basically has four projects:

- App-countries <--default
- App-courses
- App-notes (uses json-server; change root 'db-notes.json' to 'db.json')
- App-phonebook (uses json-server; change root 'db-phonebook.json' to 'db.json')

This can be switched in the main.jsx file.

## Note 2:

In the root directory, you will need to provide your own API string from https://openweathermap.org - in a root '.env' file.

Format 'VITE_SOME_KEY='

## NOTE 3:

As this is a Vite app, I hosted it on GitHub pages using this guide:

https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3
