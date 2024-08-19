# Component-Online-Shop
Component Online shop with both server and client included.

## Description
An fullstack e-commerce application with a robust frontend and backend architecture built using React, Redux, and React Router for the frontend and ASP.NET Core, Entity Framework and SQL Server for the backend. The application has both customer-facing and admin-facing components, with features such as product listings, authentication, and order management.
The application is designed to manage state in a centralized manner, and using the React Router the application has multiple routes and navigation.

### Some additional information about the project:
* The project is configured to use Entity Framework for database operations
* Identity framework is set up for user authentication and authorization
* JWT Bearer authentication is implemented for secure access
* Swagger is added for API documentation
* AutoMapper is used for object-object mapping
* The backend has three layers: Controllers, Services and Repositories connected using Dependency Injection
* Models and DTO Models with data validation for both frontend and backend
* The application uses RESTful API
* Client side validation
* Frontend client uses a wide range of both functional and class based components with React
* Redux is used for state management
* Bootstrap is used for managing the look of the page

## Executing program

### Prerequisites
* Have SQL server installed
* Have Visual Studio 2022 installed
* Have Visual Studio Code

### How to run the program
* Download the program from the github repository
* Run the ComponentOnlineShop.sln using VisualStudio
* Before running the program open NugetPackageManager console and add-migration[migration_name], then update-database[migration_name]
* Run the Application
* After the Browser is opened and Swagger is fully loaded you can continue to the next step
* Open the folder component-shop inside ComponentOnlineShopClient using Visual Studio Code
* Open the terminal and type cd component-online-shop and then after that npm run dev
* Copy the local link to your browser

## Additional Information
As a non logged in user you represent a customer and you can add and remove items from the shop cart and checkout where you type in your credentials and other information in order to order the items. The order is stored on the server.
As a logged in user you represent an administrator of the online shop. To register you click a button inside the header and you are taken to the register/login page (you can switch between them). After registering and logging in, your username is shown on the layout you are granted a token and you can view,edit,delete and create Orders, products and categories freely.
The layout changes if you are logged in as admin allowing you to go to the admin URL-s Orders,Categories or Products. To go back to the homepage you simply click the Component online shop brand name title in the top left.

## Version History
* 1.0.0
  Initial Release
