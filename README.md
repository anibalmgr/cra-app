# Getting Started with Create React App

This app can be accessed online [here](https://heroku-ascend.herokuapp.com)
to install:

    git clone https://github.com/anibalmgr/cra-app.git
    cd cra-app
    npm i
    npm start

There is a simple API running in [heroku](https://server-d-task.herokuapp.com/) if you want to start the api locally:

    cd api
    run 'node app.js'
    
Then go to /src/utils/api.js comment the heroku url and uncomment the local url

## What has been done:
### design:
- Vectorize icons and logos
- Check and save colour and font variables
- Download product images

### setup
- Basic CI /CD (tests not implemented) with github and heroku
- Micro API to get some data

### npm libraries
- Tailwind, probably my favourite library, with configuration of colours.
- React router with basic routing
- React query for api calls, ideally I like to add hooks to handle different API calls, but becasue of the time I decided to just call useQuery in every component.
- Formik that makes it easier to manage the states in forms.

### Deliveries
- Homepage
- Login page, calls the api and receives a token it is storaged into the local storage
- Register new user
- Products dashboard that gets all the products from the API, with a search input that returns any substring matching the query.

### To be done
- Login with cookie instead of a string, could be with jwt.
- Error handling when fetching data
- Implement error boundary
- unit tests and mocking api for testing
- Plots
- And design and develop the whole app


## API Endpoints

- GET:/login
- GET:/user
- GET:/products
- GET:/images/:id


## Create React App info:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
