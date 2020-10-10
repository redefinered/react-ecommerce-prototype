# react-ecommerce-prototype

A prototype of what could be a real-world eCommerce application built with :heart: with React JS!

## Installation

### Run Backend
The backend only does one thing at the moment -- process Stripe payment

run `yarn install` then `yarn start` from the root directory. That will run the backend app on port 5000

### Run Client App

1. `$ cd client/` terminal goes to client directory
2. `$ yarn install` installs dependencies
3. `$ yarn start` starts the client app on port 3000

Make sure to register to Stripe and get your sandbox key and run `heroku config:set STRIPE_SECRET_KEY=<your-test-stripe-secret-key>` in order for Stripe sandbox mode to work.

## Tech Specs

- NodeJS
- Express JS
- Stripe Payment
- Axios
- Firebase Authentication
- Firebase Firestore
- Redux
- Sass
- React Router
- Redux Saga
- Jest
- Enzyme

**Key Libraries**

- axios
- sass
- react-router
- react-stripe-checkout
- redux
- redux-logger
- redux-persist
- redux-saga
- reduxsauce
- reselect
