---
title: Overview of React
path: /react/overview
date: 2021-01-15
category: react
---

Efficient
Declarative
Flexible

open source js framework

### Virtual DOM

DOM manipulation is integral to any web application, previously, the entire DOM might need to be updated when information was updated, a virtual dom faster than traditional rendering, each time new data, new virtual dom created
React keeps a prev state and current state, and by keeping running a diff of the two it can know exactly which elements of the dom need to be update and which not

### Utilizes JSX

Javascript XML, which allows for HTML inside of js and append it to the dom without constantly writing appendChild() or createElement()

### Reusable Components

increase the pace of development

### Styling React Components

- Inline Styling
- JS Object
- CSS Stylesheet
- CSS Modules

### Optimizing React

- useMemo(), which can cache expensive CPU functions
- React.PureComponent, reduces uncessary re-renders by checking state and props
- maintaining state colocation
- lazy loading

### List Rendering

The `React Way` to create lists, because it uses a concept of a unique key to make sure they are ordered correctly. Keys need only be unique among siblings, but don't have to be globally unique.

- use `Array.map`, and not `for loop` or `forEach`, just won't work
- each item needs a unique key, if nested lists, use interpolation of multiple vars to create a unique val, not the array index

### Data Callbacks

Often, it is desirable to have a parent control a unified state and pass the props down to smaller child components. But what if you want to have a dynamic component like a button that can pass back an update. Passing in a callback through props to the child component allows for that component to trigger the call back on an emitted event, such as `onClick`.

First, we create the callback in the parent component, usually with a more semantic or meaningful name, and then it is passed as it's own props value in the component. (Remember, props are passed by declaring values in the instance of the component, and read within the internal code as props.myvalue)

Parent side:

```js
function ParentComponent(props) {
  let [counter, setCounter] = useState(0)

  let callback = valueFromChild => setCounter(valueFromChild)

  return (
    <div>
      <p>Value of counter: {counter}</p>
      <ChildComponent callbackFunc={callback} counterValue={counter} />
    </div>
  )
}
```

Child component:

```js
function ChildComponent(props) {
  let childCounterValue = props.counterValue

  return (
    <div>
      <button onClick={() => props.callbackFunc(++childCounterValue)}>
        Increment Counter
      </button>
    </div>
  )
}
```

### Higher Order Components

A function that takes in a component and returns a new component with additional functionality. This is a type of inheritance pattern in larger applications where abstraction is needed to create very similar components with only minute differences.

NEED GOOD EXAMPLE

### Using Context instead of Props

Sometimes data from a higher component needs to be passed down along the chain to various nested children components. But this data is then available in each component it is passed down through. As an alternative, React `Context API` solves this by creating an application level state object which can be called upon.

### Using Strict Mode

Added in 16.3, `strict mode` allows for additonal checking to highlight problems in the application. To use it, simply wrap the application tag with strict mode tags.

It will:

- identify components with unsafe lifecycle methods
- warn about legacy string API usage, better to use `callback ref` and not the legacy `string ref`
- warns about using `findDOMNode`

### React Error Boundaries

Starting with React 16, there are two methods available to class components in order to help catch errors in the `render` method.

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // here we trigger a setState call when error occurs
  // opportunity to set state as needed, such as `hasError`
  // which conditionally renders an error message in the UI
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  // lifecycle method when error caught, passes to logging
  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong</h4>
    }
    // the important part of a wraparound component
    // make sure to pass the props through
    return this.props.children
  }
}
```

And this is how it looks when imported and used to wrap a component:

```js
<ErrorBoundary>
  <CounterComponent />
</ErrorBoundary>
```

### Class Lifecycle Methods

- Mounting: `init -> ComponentWillMount -> render -> componentDidMount`
- Updating: `componentWillReceiveProps -> componentShouldUpdate -> -componentWillMount -> render -> componentDidMount`
- Unmount: `componentWillUnmount`

### Class Components vs Functional Components

##### Declaration

Functional components can be declared with the `function` keyword or with an `arrow`

```js
// function style
function card(props) {
  return (
    <div className="main-container">
      <h2>Title of the card</h2>
    </div>
  )
}

// fat arrow style
const card = props => {
  return (
    <div className="main-container">
      <h2>Title of the card</h2>
    </div>
  )
}
```

Whereas class components are declared ES6 style:

```js
class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-container">
        <h2>Title of the card</h2>
      </div>
    )
  }
}
```

### State in React

React Components, which are usually class based, which is the reason for the `class Whatever extends React.Component` when we write them. As such, they also have the ability to set an object `this.state` which then holds any internal values we need to keep track of. The component provides inherited methods such as `setState` which can update the internal state, even allowing for dynamic code control based on `prevState`.

Very often, the `onClick` and `onChange` event handlers will be used to call custom methods within the class that set or update state. A good example of this is keeping all of the values for an input form in local state, which allows for extra conditionals to be set to `control` the components and validate each one as it gets updated, before the final send off.

```js
class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: "BMW",
      color: "Black",
    }
  }

  changeColor() {
    this.setState(prevState => {
      return { color: "Red" }
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeColor()}>Change Color</button>
        <p>{this.state.color}</p>
      </div>
    )
  }
}
```

Note, the above example is overly simplistic and doesn't even show getting the value of an event target and passing that into state.

##### Functional Components and State

With React 16.? came `hooks` which are functions that allows us to `hook into` the state and lifecycle features previously only available to class based components. Since all we really need is set and get, this is how it ends up:

```js
function Person(props) {
  // We are declaring a state variable called name.
  // setName is a function to update/change the value of name
  let [name, setName] = useState("")
}
```

### Props

##### Handling Props

Given the following component:

```js
<StudentInfo name="Mary" rollNumber="23" />
```

A functional component will handle props like this:

```js
function StudentInfo(props) {
  return (
    <div className="main">
      <h2>{props.name}</h2>
      <h4>{props.rollNumber}</h4>
    </div>
  )
}
```

And in a class this would be the basic pattern, although it is also common to pull out individual variables (destructuring the props) at the top of the render fucntion before the return line.

```js
class StudentInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { rollNumber } = this.props
    return (
      <div className="main">
        <h2>{this.props.name}</h2>
        <h4>{rollNumber}</h4>
      </div>
    )
  }
}
```

##### Handling State

Functional components used to not be able to hold their own internal state, but now can handle their own state through `hooks`.

```js
function ClassRoom(props) {
  let [studentsCount, setStudentsCount] = useState(0)

  const addStudent = () => {
    setStudentsCount(++studentsCount)
  }
  return (
    <div>
      <p>Number of students in class room: {studentsCount}</p>
      <button onClick={addStudent}>Add Student</button>
    </div>
  )
}
```

And this is how state is handled in a class:

```js
class ClassRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { studentsCount: 0 }

    this.addStudent = this.addStudent.bind(this)
  }

  addStudent() {
    this.setState(prevState => {
      return { studentsCount: prevState.studentsCount++ }
    })
  }

  render() {
    return (
      <div>
        <p>Number of students in class room: {this.state.studentsCount}</p>
        <button onClick={this.addStudent}>Add Student</button>
      </div>
    )
  }
}
```

### Controlled vs Uncontrolled Components

When creating inputs and form controls, an easy old school way is to get all of the information on the page at the time of form `submit` and then validating that information afterwards (maybe front end but likely waiting for an error to bounce back from the server). This is super inefficient and can lead to tons of frustration for the user experience.

Nowadays, there is a concept of controlled inputs/components that do a lot more data checking before the user is allowed to hit the submit button. The `onChange` event callback can be used to perform code checks on the updated information entered by the user, and even update the UI, such as adding a red outline to a component with invalid input.

Controlled components include features such as:

- validating the information in each field individually
- conditionally disabling the submit button until all valid
- enforcing input format
- several individual input components for one piece of data

Example of an `uncontrolled component` in React where the value of the input element is handled by the DOM itself. Input elements inside uncontrolled components work just like normal HTML input form elements. The state of the input element is handled by the DOM. Whenever the value of the input element is changed,event-based callbacks are not called. Basically, react does not perform any action when there are changes made to the input element. Whenever use enters data inside the input field, the updated data is shown directly. To access the value of the input element, we can use ref.

```js
function FormValidation(props) {
  let inputValue = React.createRef()

  let handleSubmit = e => {
    alert(`Input value: ${inputValue.current.value}`)
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
```
