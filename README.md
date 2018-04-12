# storage-frontend

This is the frontend app for managing a user's remoteStorage
authorizations.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone git@github.com:5apps/storage-frontend.git` this repository
* `cd storage-frontend`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Deploying

* `ember deploy <deploy target>`

The deploy target can be either `development`, `staging` or
`production`, with `production` being the default.

#### Deploying to the Vagrant development box

To be able to deploy to development, you'll need to create a Deploy app
on 5apps.dev under the "5apps" user, called "storage-frontend" with the
domain "storage-frontend.5apps.dev".

After creating the app, you'll have to push a first commit to the app's
deploy repo with just a basic index.html file, because `ember-cli-deploy` will
try to fetch the repo first and fail if it's empty.

