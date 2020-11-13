# REACT FORM APP

This focus of this app is using react to creat a form that is responsive to user inputs. Each time a new user fills each field in the form, there is an immediate rendering of the information the bottom part of the app, after completing the form and the submit button is clicked, there is a popup asking to verify the correctness of the information from the user. And if the submit button is also clicked upon verification, then the information is cleared and sent to the database, upon reload a new user can also put in his/her information.

## COMPONENTS
- The **FORMCONTAINER** component is stateful component(class component) contains the state for which every input is initialized. The *handleInputData()* function grabs the input data and each time using the *setState()* function to update the user data. *The handleSubmit()* function is called when the form is submitted and updates the **showPopUp** state to true. It is as if the base class.

- The **VIEW** component is a stateless (functional) component placed in the form component to display the results as the user updates his/her data.

- The **POPUP** component is a stateless(functional) components placed in the form component, acting as the popup display

- The **TEXTINPUT** component is a stateless(functional) component created to give room for a dynamic update of user data.

- The **TEXTAREA** component is a stateless(functional) component created dynamically.

- The **ROLE** component is a stateless component created to use the **Array map()** function taking elements from  **roleOptions** in the state object.

## Screenshot
![form screenshot](./public/formpic.png?raw=true)