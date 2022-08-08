# Contacts Web App

[Live Preview](https://contacts-assignment-app.herokuapp.com/).

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
    A simlple contacts app that let's you send OTP to your contacts
    <br />
    <a href="https://contacts-assignment-app.herokuapp.com/">View Demo</a>
  </p>
</div>



<!-- ABOUT THE PROJECT -->

## Steps to replicate

#### Backend

- Node has to be installed onto your system
-
- add a `.env` file into the parent directory with the following contents:

```
//a connection url for the mongoDB
DATABASE = mongodb+srv://<username>:<password>@<cluster_name>/
ContactApp?retryWrites=true&w=majority
PORT = 8080

//twilio SID
TWILIO_SID = XXXXXXXXXXXXXXXXXXXXXXXX
//twilio auth token
TWILIO_AUTH_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXX
```

- Installing the dependencies

```
npm install
```

- Running the server

```
npm run server
```

#### Frontend

- Go into the front-end directory

```
cd front-end
```

- Install the dependencies

```
npm install
```

- Running the front-end

```
npm start
```

After successfully following the listed steps
Backend server is running at `http://localhost:8080`
Frontend is running at `http://localhost:3000`

<img width="640" src="/screenshots/landing.png" />

The contact list can be updated by updating the `contacts.json` file in `front-end/src/Contacts.json`

```
[
    {
        "image": "https://randomuser.me/api/portraits/men/52.jpg",
        "firstname": "Testing",
        "lastname": "Contact",
        "mobile": 9810153260,
        "countryCode": 91,
        "profession": "Architect",
        "address": "New Delhi,Delhi,110002",
        "email": "shaleelahmed3@gmail.com"
    },
    {
        "image": "https://randomuser.me/api/portraits/men/57.jpg",
        "firstname": "Shaleel",
        "lastname": "Ahmed",
        "mobile": 8860962227,
        "countryCode": 91,
        "profession": "Architect",
        "address": "New Delhi,Delhi,110002",
        "email": "shaleelahmed3@gmail.com"
    }
]
```

adding another object with same keys fill create a new contact

### Built With

The backend of this app is made with <strong>NodeJS</strong> with the following libraries being used :

- <a href="https://www.npmjs.com/package/express"><img width="50px" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" /></a>
  <a href="https://www.npmjs.com/package/express">ExpressJS</a> (for making the web server)
- <a href="https://www.npmjs.com/package/mongoose"><img width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" /></a>
  <a href="https://www.npmjs.com/package/mongoose">Mongoose</a> (it is an ODM that let our app connect to the mongoDB databse)
- [HTTP-Errors](https://www.npmjs.com/package/http-errors) (it let us throw meaningful errors to the client)
- <a href="https://www.npmjs.com/package/twilio"><img width="50px" src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNTBiYTlhMTRmMzA4YzJhOGY2NDgyZGViODJjMWFjNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.MrC2_caUewTde-BlYo3qZugiQ7hIhjph-Ns0U0rDXos" /></a>
  <a href="https://www.npmjs.com/package/twilio">Twilio</a> (https://www.npmjs.com/package/twilio) (it let us access our twilio account for sendind text messages) -[Dotenv](https://www.npmjs.com/package/dotenv) (it let us load environment variables into our code)

Our backend app follows <strong>MVC</strong> design pattern with the following folder structure

```
back-end
    |
    └───models
    |
    └───controllers
    |
    └───routes
```

The front-end of this app is being made with <strong>ReactJS</strong> with the following third party libraries being used :

- <a href="https://www.npmjs.com/package/styled-components"><img width="50px" src="https://cdn.sanity.io/images/djtlwm1o/production/cd48e3fba521deb47078ea36b7073e2f0e511af7-257x286.png" /></a><a href="https://www.npmjs.com/package/styled-components"> styled-components</a>(this library let us write CSS in JS, also this provides various features like passing props to a styled-component which reduces the complexity for creating complex user interfaces)

- <a href="https://www.npmjs.com/package/cogo-toast"><img width="50px" src="https://cogoport.github.io/cogo-toast/meta/android-chrome-96x96.png" /></a><a href="https://www.npmjs.com/package/cogo-toast"> cogo-toast</a>(this library let us show beautiful toast messages in our app)

<!-- CONTACT -->

## Contact

Shaleel Ahmed - [Linkedin](https://www.linkedin.com/in/shaleel-ahmed-2a34761a9/) - shaleelahmed3@gmail.com

Project Link: [https://github.com/Shaleel/contacts-app](https://github.com/Shaleel/contacts-app)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I would like to give credit to the following resources that have helped me in creating this project successfully!

- [Loading.io](https://loading.io/)
- [Mongoose Docs](https://mongoosejs.com/)
