# ANGULAR JS

### Introduction to Angular

In the last few years the Internet has exploded into a new creative array of modern tools. From hese ones, Angular is standing up as one of the first that started the 'All in JS' internet movement and the one with 'React' and 'Ember' that is leading the future of web dev.

The just recently created Angular 4 ( basded on the 2 and jumping over the 3 ) is a great, complex, flexible and robust SPA ( single page applications ) JavaScript Framework that is preparing the ground for the future web. This is the web of components that we have been talking about in the last blog posts. If the future is VR, and first will be going through AR. And those VR and AR are 'Component Based Models', we need a Component Based Model too for the creation of pages in the Internet. Angular is preparing the ground for it and stands out as a real 'Monster' ready to provide to the user an amzing SPA platform ready serve anything that the future is waiting for: Welcome to Angular.

### Angular - A Component Based Model Single Web Application

SPA are very reactive and very fast, so the websites feel like mobil apps, and all this is made with just one file, the index, which is normally who provides the javascript based changes to the DOM.

Angular 1 was the first that provided the option to use a full JS webb framework, and then came the total rewriten version of it: Angular 2

Recently with the new Angular 4 it became just 'Angular'.

### Angular CLI ( Command Line interface )

Please, because of the nature of Angular, it's complex building infraestrucutre I recommend deeply to use the CLI, which will make creating components and Angular projects a Breeze.
(link)

```
ts
> npm install -g @angular/cli
> ng new my-dream-app
> cd my-dream-app
> ng serve

```

### Typescript

It adds more features than vanilla JS introducing: 'Types'. Types help to handle better variables and help to introduce great tooling that uses the Types for autocompletion. It's an addition or superset of javascript that allows js to use concepts that give them superpowers like classes, interfaces, inheritance...etc.

### BootStrapping

Basically we have a Main entry point called the 'Main'.ts file which bootstraps the different Modules.
At the same time each Module like in app.moudle.ts bootstraps an App like the app.component.ts

And the App.component is made of the different components. This app.component file is the one that through it's selector will be started in the index.html file which at the end of the day is the only html file that exists. 

So we have a chain of events here that goes from Main to the App file:

> MAIN bootstraps > Module bootstraps > App ( the one in index.html) > boorstraps components


### Understanding Data Binding

We have 4 ways to Communicate beween the Logic of our App and the Client HTML side:

[ TYPESCRIPT LOGIC ] >>> <<< [ HTML ]

> OUTPUT DATA

1. String Interpolation: ({{ data }}) // Has to resolve in a String in the end.
2. Property Binding: [property] = "data"

> REACT TO USER EVENTS

1. Event Binding: ( (event) = "expression" )

> COMBINATION OF BOTH

1. Two-Way Binding( [(NgModel)] = "data" )

### Directives

> Directives are instructions in the DOM

1. Components are Directives + Template
2. There are also just Directives with the @Directives decorator

> Built-In Directives

1. ngIF Directive
2. ngStyles
3. ngClass
4. ngFor
( ... ) and more.


So in Resume Angular started as a Javascript web framework and it has evolved into an impressive web building Mammoooth 
built by a balanced mixture of 'Components, 'Directives' and 'Servives. Here I submit a good simplifaication that the guys of 
ION mobile softwarw have written as an introduction to Angular that I think is a good start. And after that obviously you can then
go to he main Angular.io site for more. Exciting tool, and exciting times ahead for the future web !