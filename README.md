# TodoList-Website
Add your list using TodoList website

### Available Scripts
In the project directory, you can run:

### npm start
Runs the app in the development mode.
Open http://localhost:4040 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

 ## Setup Guidelines
Clone the repository -
```
git clone hhttps://github.com/aditidewangan/TodoList-Website.git
```

### Backend

1. Run `cd server` on your CLI.

2. Create a `.env` file and paste the MONGO_URL in the given format

    ```
    MONGO_URL = <your_url>
    ```

    _NOTE: To get the MONGO_URL, take a look at this article for reference [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)_

3. Install the dependencies by running
    ```
    npm install
    ```

4. Run the server
    ```
    npm run server
    node app.js
    ```

    Link for the screenshots, how to setup backend locally are kept in
    [assets->backend](assets/backend) folder.

### Frontend

1. Run `cd client` on your CLI.

2. Install the dependencies by running
    ```
    npm install
    ```

3. Run the server
    ```
    npm start
    ```
_NOTE: To run the Frontend side of the application it recommended to run the backend server too._

## Start Frontend & Backend simultaneously

 1. Navigate to the root folder i.e. TodoList-Website.git

 2. Install the dependencies by running

    ```
    npm install
    ```

 3. Start Frontend & Backend simultaneously

    ```
    npm run dev
    ```

    


