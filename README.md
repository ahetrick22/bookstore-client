# Bookstore-client

This is an Ember client built to go along with [this Bookstore API](https://github.com/ahetrick22/bookstore-api).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)

You will need to also run the API locally. To do that: 
1) Clone down [the API](https://github.com/ahetrick22/bookstore-api) locally and in the project directory run `bundle install`, `rails db:migrate` and `rails db:seed`.
2) In a terminal, run `rails server --binding 0.0.0.0`.

## Installation

* `git clone <repository-url>` this repository
* `cd bookstore-client`
* `npm install`

## Running / Development

You'll want to proxy this Ember app to the locally running API with the command:
* `ember server --proxy http://localhost:3000`
* Visit the app at [http://localhost:4200](http://localhost:4200).