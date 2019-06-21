1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    new object
    split
    spread
    Object.assign
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions make a call to reducers.
    reducers then send state to store
    store then stores the values in state;
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Your application state is global, and your component state is local.
    when you need to share a value between multiple components you use app state
1.  What is middleware?
    In Redux, a middleware is used to intercept dispatched actions before they make it to the reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux Thunk middleware allows you to write action creators that return a function instead of an action.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()
