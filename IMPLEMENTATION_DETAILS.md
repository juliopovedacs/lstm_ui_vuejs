# LSTM UI Vue.js Project Implementation Details

## About

**LSTM UI** is a **Vue.js** project. It was created using the **Vue CLI**. 

## File Structure

```
├── babel.config.js
├── dist
├── IMPLEMENTATION_DETAILS.md
├── node_modules
├── package-lock.json
├── package.json
├── public
    ├── favicon.ico                        # Default favicon
    └── index.html                         # Main HTML file
├── README.md
└── src
    ├── App.vue                            # App component
    ├── chart-data.js                      # Example results data
    ├── components
        ├── layout                         # Layout components
            └── Header.vue
        ├── RunningCase.vue
        ├── RunningCases.vue
        ├── SelectEventLogForm.vue
        └── SelectRunningCaseForm.vue
    ├── main.js                            # Entry point
    ├── router
        └── index.js                       # Defines app's routes
    └── views
        ├── About.vue
        ├── ContactUs.vue
        ├── Home.vue
        ├── Predict.vue
        └── Results.vue
```

## Vue.js projects key concepts

**Vue.js** views are built with **components**. **Components** have three main tags:

* template - HTML
* script   - JavaScript
* style    - CSS

**Components** have **Lifecycle Hooks**, like `mounted()`, that allow the developer to do specific things when a component is created, updated, deleted, etc.

**Components** can be organized hierarchically. **Child components** pass data to their **parent component** **emitting an event**, which is catched by the parent using the `v-on` **directive** (**Vue.js** has many **directives** that can be used inside HTML tags). **Parent components** send data to their **child components** using **props**.

## How does this project interact with the API?

**HTTP Requests** are made to the [API](https://github.com/japoveda10/lstm_ui_REST_API) using [Axios](https://www.npmjs.com/package/axios). **Axios** is mostly used inside various components' [lifecycle hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) like `created()` (in Home.vue) and `mounted()` (in Predict.vue and Results.vue).

