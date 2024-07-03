# rn-assignment6-11072929
This basic shopping cart app is designed with React Native to offer a smooth and intuitive user experience. It incorporates a modern UI and leverages state management for dynamic interactions.

# Data Storage Implementation
The app uses AsyncStorage for data persistence, ensuring that cart items remain saved even when the app is closed or restarted.

*Implementation Details*
Fetching Cart Items: On component mount, the app retrieves cart data from AsyncStorage and updates the local state to reflect the stored items.

Removing Items from Cart: When an item is removed, the app updates both the local state and AsyncStorage to ensure the removal is persistent across sessions.

This approach guarantees that users' cart data is reliably stored and managed within the app.


Some screenshots of the App:


<img width="265" alt="image" src="https://github.com/AnuonyamAmpofo/rn-assignment6-11072929/assets/134226786/62643cd1-41cf-4499-86ff-e8f42e6dd3cf">
<img width="256" alt="image" src="https://github.com/AnuonyamAmpofo/rn-assignment6-11072929/assets/134226786/90c95a6f-e75b-44d9-ada6-3a49742ee00e">
<img width="293" alt="image" src="https://github.com/AnuonyamAmpofo/rn-assignment6-11072929/assets/134226786/85bc939b-994d-4262-826d-57c28266ba95">

