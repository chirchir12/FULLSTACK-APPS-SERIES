# MINI-STACKOVERFLOW USING REACT AND NODE JS

## Goals & Achievements

- create a restful application using node express
- undestand how one-to-many relationship works
- use sequelize to manage databases
- form validation and error handling
- error handling
- work with authentication at front-end and backend
- create client side application that consumes a restful api
- work with -sequelize-cli
- work with react router

## how it works

- register with the system
- login
- update profile

## screenshots

### register

![screenshot](screenshots/register.png)

### dashboard

![screenshot](screenshots/dashboard.png)

### update

![screenshot](screenshots/update.png)

## end points

##### user

- register user
  - `/api/auth/register`
- log user in
  - `/api/auth/login`

###### problem

- create problem
  - `/api/problems/create` -------> auth users only
- update problems
  - `/api/problems/update/:id` -------> auth users only
  - delete problems
  - `/api/problems/delete/:id` -------> auth users only
- get problems
  - `/api/problems/list`
- get single Problem

  - `/api/problems/list/:id`

  ##### solution

- create solution
  - `/api/solution/create` -------> auth users only'
- update solution
  - `/api/solution/update/:id` -------> auth users only
- delete solution
  - `/api/solution/delete/:id` -------> auth users only

##### language category

- create language
  - `/api/languages/create`
- update solution
  - `/api/languages/update/:id`
- fetch all languages
  - `/api/languages/all`

## Author Info

##### follow me on

- Github: [@githubhandle](https://github.com/chirchir12)
- Twitter: [@twitterhandle](https://twitter.com/shadochir)
- Linkedin: [linkedin](https://www.linkedin.com/in/emmanuel-chirchir/)
- Email: [email](chirchir7370@gmail.com)

## Technologies used

### backend

1. nodejs
2. express
3. sequelize
4. sequelize-cli
5. JWT
6. Bcrypt
7. MYSQL
8. javaScript

### frontend

1. React
2. Contect API
3. Hooks
4. HTML5
5. CSS3
6. React Router
7. localStorage
8. Redirect

## Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!
