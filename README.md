# data-table-test

## Purpose

This demonstrates a possible bug in DataTable where the render callback isn't run in the same instance as the rest of the Vue app.

Therefore, anything that requires initialization won't work. An easy way to see this problem is to use the `vue-i18n` package but it will happen with anything.

I can see that when I examine `getCurrentInstance()` it looks different from inside the DataTable's render.

To get rid of the error, comment out the line `style: 'translate',` in HomeView.vue. That will keep the render functionality from calling back into a slot.

## Creation
This project was created with:
```
npm init vue
```
With the following options:
```
Vue.js - The Progressive JavaScript Framework

✔ Project name: … data-table-test
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes
```

Then all the unnecessary files and code were deleted.
