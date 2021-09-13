# Chargebee react starter app

1. `/backend` repo is a standard node/express app, based off [this repo](https://github.com/danielfsousa/express-rest-boilerplate)
    * `/v1/customers` API calls all customers from the chargebee API, returns all data and a count
2. `/frontend` repo is a standard react app, based of [this repo](https://github.com/react-boilerplate/react-boilerplate), which surfaces the customer API information.


### Installing/running

1. Clone the repo
2. Add a `.env` file to the root of the `/backend` repo, based off the example env. You'll need to generate a chargebee API key
3. `cd backend && yarn` to install. Run with `yarn dev` 
4. (in a new terminal window) `cd frontend && yarn` to install. Run with `yarn start`
5. Head to `localhost:3001` to view the frontend





### Notes/todo

- Add some additional handling for combining duplicate customer subscriptions
    - This would give a single record for a customer with multiple subscriptions inside, rather than duplicating customer name/details
    - I would put this logic into the API response, so the `/v1/customers/` call would return no duplicate customers
- Strip out additional tooling from repos (especially frontend)
- Design it properly ;)