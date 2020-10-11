This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Project Folder Structure

    .
    ├──src
    │   ├──
    │   ├── components              # Folder to store components
    │   │   ├── App                 # Project routing is setup here
    │   │   ├── Controls            # Reuseable input/form control components
    │   │   ├── SideDrawer          # Side Drawer component
    │   │   ├── Table               # User table is split to separate components
    │   ├── containers              # Place to keep all page containers
    │   ├── helpers                 # Helper functions to make database connections, sorting and state update easier
    │   ├── store                   # Keep redux logic here
    │   │   ├── actions             # Reuseable input/form control components
    │   │   └── reducers            # Side Drawer component
    │   └── ...
    └── ...   
      
### How the project works

On app start the default loading page is the Users List. The App component manages the routing of the SPA and depending on the route calls the needed page. In the Users List there is a Material UI(MUI) table component which I have split to 3 parts to keep the code structured, logic separate and readable. On hovering of a table row user actions are shown and the buttons can be clicked. I have used a Dialog component from MUI to handle the confirmation message on user deletion. This page and the other pages are passed as a prop to the drawer component so that the page content is positioned in the drawer's content part.

The user edit and user creation page are actually using the same container because they do not have anything different actually. Just the action dispatched on submitting the form is different and it is passed as a prop to the UserEdit container. I have separated my Form logic in a reusable form component.

I have used only functionall components(es6) so the project is done only with React Hooks everywhere.
    
### React Store and IndexedDB communication

I have user the following library - [Dexie.js](https://dexie.org/) to handle the communication with the storage. After every dispatched action to the store the data is updated in the IndexedDB as well.
The initial data comes from the data.json file in the helpers folder. In the store/users/reducer.js file I set the initial state data with the json data. In the app itself I have a react hooks which handles the displayed data in the table. For the filtering I do not modify the Store data, I only filter the hooks value. On create, update, delete and hover of rows I modify the Store Data.
    
### Screenshots
![Alt text](/public/screenshots/userslist.png?raw=true "Users List")
![Alt text](/public/screenshots/drawer.png?raw=true "Drawer")
![Alt text](/public/screenshots/deletedialog.png?raw=true "Delete Dialog")
![Alt text](/public/screenshots/createform.png?raw=true "Create Form")
![Alt text](/public/screenshots/editform.png?raw=true "Edit Form")

