# storage-frontend

A dashboard for managing one's remoteStorage authorizations.

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

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Deploying

* `npm run deploy:staging` or `npm run deploy:production`

## FIXME Re-add Sentry support

To create new Sentry releases and upload sourcemaps during deploy,
you'll need to copy the `.env.example` file as `.env` and add your token
to it. The token can be created at https://sentry.io/api/ with the scope
"project:releases".
