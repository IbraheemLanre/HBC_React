# Animal App

## Rewriting Functional class as Component class

### **App.js**

The _App.js_ file contains the functional class content and for you to see it work, you have to uncomment the lines below in the _index.js_ file. Also read the next instruction for deactivating the currently running file *AnimalType.js*

```js
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```

### **AnimalType.js**

The _AnimalType.js_ file contains the component class content which is currently active, you have to comment the lines below in the _index.js_ file to deactivate it and make the _App.js_ active. 

```js
import AnimalType from "./AnimalType";
ReactDOM.render(<AnimalType />, document.getElementById("root"));
```

### Screenshot
![Animals](./src/img/Animals.png?raw=True)