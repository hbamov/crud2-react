This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Project Folder Structure

src
├── components              # Folder to store components
│   ├── App                 # Project routing is setup here
│   ├── Controls            # Reuseable input/form control components
│   ├── SideDrawer          # Side Drawer component
│   ├── Table               # User table is split to separate components
├── containers              # Place to keep all page containers
├── helpers                 # Helper functions to make database connections, sorting and state update easier
├── store                   # Keep redux logic here
│   ├── actions             # Reuseable input/form control components
│   └── reducers            # Side Drawer component
└── ...
