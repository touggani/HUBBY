# **MASTER II PROJET HUBBY: COOKING APP**

# Run the project

## Launch back end :

Back end project location: https://github.com/touggani/HUBBY/tree/main/hubby_api
```
$ git clone [https://github.com/touggani/HUBBY](https://github.com/touggani/HUBBY)

$ cd HUBBY/hubby\_api/

$ python3 manage.py runserver –settings Hubby\_api.settings\_local
```

## Launch front end :

Back end project location: https://github.com/touggani/HUBBY/tree/main/hubby_app
```
$ Git clone [https://github.com/touggani/HUBBY](https://github.com/touggani/HUBBY)

$ cd HUBBY/hubby\_app/

$ npm install –global expo-cli

$ npm i

$ npm run start
```

## Project demonstration : [https://youtu.be/3v05apF39d4](https://youtu.be/3v05apF39d4)

# Preamble:

Within the Catholic University of Lille, more specifically at the Faculty of Management and Science, a 200-hour project must be carried out for the validation of semester 4 of the master 2 in computer science. This document lists all development, technical, visual and project management information about the project.

# General presentation of the project

## Assessment:

A lot of close relations, friends or even myself don&#39;t know what to eat tonight. It is often the same culinary routines and that tires us. A problem that leads us to be bothered to look for new ideas too often without an answer. From this observation, the complete idea of developing a platform referencing hundreds of recipes around the world and features that make cooking more enjoyable.

## Project idea:

Based on a mobile application (tablet), HUBBY will be an application in the &quot;Lifestyle&quot; category. It will allow you to access recipes from around the world in a few seconds and to be able to share them with your community.

The application will offer you, in relation to what you have in your fridge and your desires, a dish and its detailed recipe.

The project will be realized only by me, Youssef Touggani in order to prove to myself that I can lead a project alone and to learn to manage a project.

## Functionalities:

### User functionalities:

- Create an account
- Manage an account (modify, delete)

### Administrator functionalities:

- Create a user
- Manage a user (modify, delete)
- Add content
- Delete content

### Application main functionalities:

- Manage the products we have at hand (add, delete, modify)
- Randomly generate a menu
- Generate a menu according to criteria (product, allergy, type of food, etc.)
- List recipes by country/by feature
- Refine searches and lists (time, average, etc.)
- Step by step recipe display

# Project management:

The project is carried out alone. This will allow me to be able to manage an entire project, while deciding on developments, changes or even functionalities or technologies. The project will nevertheless be monitored to achieve and respect the deadlines.

Project management will be personalized but will be strongly inspired by the agile method. This implies that each week, a check must be carried out on the progress of the project, the deadlines, or another parameter of the project.

## Trello

A full list of features will be put together with estimated duration dates. Each week, this list can be modified if the progress takes longer or is faster. The use of Trello will make it possible to list the functionalities to be developed and to be able to have a clear follow-up. Comments can be used so that the project goes as well as possible.

Link to access to Trello:

[https://trello.com/invite/b/gycjSy2p/d0183a5e2222f8ebd0bb51bfa836fa2c/suivi-davancement](https://trello.com/invite/b/gycjSy2p/d0183a5e2222f8ebd0bb51bfa836fa2c/suivi-davancement)

# Mock-up

The models were entirely conceptualized by me using Adobe XD. The design and certain points of the latter can be modified if necessary.

The models are available in XD format in the &quot;Maquettes/HUBBY\_FOODAPP\_Maquettes.xd&quot; folder. The models are available in PNG format in the &quot;Maquettes/maquettes\_png&quot; folder if Adobe XD is not installed on the computer.

## Illustration

## Logo

The logos were made by me using GIMP. You can view them in the &quot;Illustrations/Logo&quot; folder. Here&#39;s a preview of the app&#39;s logo.

# Technical presentation

## **App built with :**

### React native
<img src="/project_managment/Illustration/md-pics/react-native.png" width="200" />

React Native is a Framework developed in 2015 by Facebook to develop mobile applications for Android and IOS and all on a single code base.

For this project, the native React will be interesting first on development. Indeed, many advantages such as the &quot;Hot reload&quot; allow a much higher development speed on other frameworks. The libraries offered by React and its community are rich and updated very regularly which allows a certain stability and security of these components (ex: Stripe offers a library on native React allowing to add an easy and secure means).

In terms of improvement and modification, React allows you to do it quickly and efficiently. For example, we can offer a web version of the application by importing the code in React, practically like React Native.

It is interesting to use React Native in my case since it is a technology on which I have some experience.

Finally, the React Native allows and adapts very well to the rest of the technologies that we want to use in the development of this application.

### Django
  <img src="/project_managment/Illustration/md-pics/django.png" width="150" /> 

Django is an open-source python framework for building front-end and backend applications. Django is a quick framework to set up on an application. This framework also offers many features allowing the creation of APIs as we will need in this project since we will be working on the creation of a mobile application.

Advantages of using Django:

- Active community: Correction of security vulnerabilities, addition of plugins, constant improvement of the framework
- ORM (object relational mapping): An ORM is a database access abstraction layer that gives the illusion of no longer working with queries but of manipulating objects. This allows us to no longer worry about the database system because we no longer use SQL queries but only query functions offered by Django. The ORM will also allow code homogeneity, a simple structure to read and maintain and work with optimized queries promoting the speed of the application.
- Plugins greatly facilitating the work and making it more secure: We can find authentication plugins such as OAuth which will make it possible to manage the entire authentication system in a safe and secure manner.
- Administrator interface: Django offers a default administrator interface that allows you to manage a lot of data such as users, actions performed on the application, etc.
- Train myself on a new technology

### MySQL

  <img src="/project_managment/Illustration/md-pics/mysql.png" width="200" />
MySQL is a relational database management system. It will store the data used on the application. We will store data such as recipes, recipe details, users etc. Django will use MySQL to access, save or delete data.

Advantages of using MySQL:

- High performance: our application will use a very large number of data which will require rigor for the storage of data and requests to have an optimized application.
- Secure database: We will store sensitive data such as user data. This must then be secure so as not to have a data leak.
- Flexible: It is a database that can be modified and improved without problem. If the application leads to data additions for its future improvements, then we will have no problem modifying our database.

## **Others tools :**

- Heroku
- Adobe XD
- GIMP
<img src="/project_managment/Illustration/md-pics/GitHub.png" width="100" />
<img src="/project_managment/Illustration/md-pics/docker.png" width="100" />
<img src="/project_managment/Illustration/md-pics/Adobe_XD.png" width="100" />
<img src="/project_managment/Illustration/md-pics/gimp.png" width="100" />
<img src="/project_managment/Illustration/md-pics/Netlify.png" width="100" />
<img src="/project_managment/Illustration/md-pics/Heroku_logo.png" width="100" />
<img src="/project_managment/Illustration/md-pics/circleci.png" width="100" />

## Database schema
<img src="/project_managment/Documents/BDD/Base_de_donnee.png" />

The data base is open for all. All the table are usable without a JWT excepted the user one.

If we can access to the user data, we need to be connected and get a JWT token.

The API is open for all because we don&#39;t have to block access to data and in the app the user can access to data without to be connected.

API link: [https://gentle-oasis-78916.herokuapp.com](https://gentle-oasis-78916.herokuapp.com/)

Other contents:
All others kinds of element like images, project description, project mockup are located in :
- https://github.com/touggani/HUBBY/tree/main/project_managment/Documents
- https://github.com/touggani/HUBBY/tree/main/project_managment/Logo
