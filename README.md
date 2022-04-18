# Project Overview

## Front End:

### Page Navigation

The `MyRouter.js` file contains all of the valid page routes for our website.

![image](https://user-images.githubusercontent.com/54819720/163741039-aa6ff083-676d-443a-bf00-7121c70820ce.png)

The `Navbar.js` and `AdminNavbar.js` files contain functions which are used to transfer the user between pages.

For example: 

![image](https://user-images.githubusercontent.com/54819720/163740462-cc4b0662-de83-4896-878f-f0f65b360445.png)

In the above image, we use the `history` parameter to move the user to the cart page (which is `Cart.js`).
We then use the `userPageState` variable to keep track of which page the user has been pushed to since the navbars
operate independent of the page we are on.

Using your browser's search bar, it is possible for users of the IMS to navigate between pages.
This, however is not an ideal use case. Using the search bar, users could originally navigate to pages which they
were not intened to see and can confuse the site's internal logic. We were able to resolve this issue by implementing 
a global state to track the credentials of users across the site.

### Global State

We keep track of two things in `state\globalState.js`: the user's state (admin or generic), and the state of a generic user's cart.

![image](https://user-images.githubusercontent.com/54819720/163741293-96d16bee-3624-4831-9cc2-6f9e8fc60bfa.png)

In order to use this global state on a page, we must import the global state then read some value which
is stored at some index in the state object (in this case, index 0 of our global state corresponds to the user's classification):

![image](https://user-images.githubusercontent.com/54819720/163741708-66d386d8-d75e-4d55-99ba-341f48b8d817.png)

Then, when drawing the page (in this case, the `Home.js` page) we must check whatever variable we stored the
global state value in (in this case, it's `isAdmin`).

![image](https://user-images.githubusercontent.com/54819720/163742136-097fd4b1-3cc0-4daf-8720-657be5912770.png)

We can use this same principle to make sure that generic users cannot access the admin-only orders page, even if they do use
the search bar to access the page.

We simply draw the orders page without loading any important information if the user's state is false:

![image](https://user-images.githubusercontent.com/54819720/163742578-9e3d7ba9-d69d-4a93-abeb-f73ace4fc529.png)
(`OrdersPage.js`)

The result:
![image](https://user-images.githubusercontent.com/54819720/163742772-cc6d5ac0-faf1-4b4f-880f-b8796f6cb258.png)

### Logging in as an admin

In order to log in as an admin, the password which is used to verify the user's permissions must be set.
The password to log in as an admin will be stored in a file called `AdminLoginPrd.js` in the path `src\components\AdminLoginPrd.js`.

(If you cannot find the `AdminLoginPrd.js` file along the above path then you must make it in order for the site to function properly)

The `AdminLoginPrd.js` file should only be 1 line and have this format:

![image](https://user-images.githubusercontent.com/54819720/163743431-800233e5-600e-4987-92d8-216545dd2fa4.png)

If the need to change this behavior should arise, you will need to make alterations to the `LoginModal.js` file here:

![image](https://user-images.githubusercontent.com/54819720/163743795-65f238c6-3d46-4d09-947f-68cdb3a41991.png)

and here:

![image](https://user-images.githubusercontent.com/54819720/163744070-98998eb3-5bec-4332-b0bb-6942b11e85dc.png)

(The `LoginModal.js` file can be found along the path `src\modals\LoginModal.js`)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
