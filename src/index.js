import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createElement, wire } from 'react-redux-wire'
import reducer from './reducers'
import { toggleTodo, addTodo, setVisibilityFilter } from './actions'
import App from './components/App'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Link from './components/Link'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

TodoList.mapStateToProps = state =>
  ({ todos: getVisibleTodos(state.todos, state.visibilityFilter) })

TodoList.mapDispatchToProps = dispatch =>
  ({ onTodoClick: id => dispatch(toggleTodo(id)) })

AddTodo.mapDispatchToProps = dispatch =>
  ({ addTodo: (...args) => dispatch(addTodo(...args)) })

Link.mapStateToProps = (state, ownProps) =>
  ({ active: ownProps.filter === state.visibilityFilter })

Link.mapDispatchToProps = (dispatch, ownProps) =>
  ({ onClick: () => dispatch(setVisibilityFilter(ownProps.filter)) })

wire(TodoList, AddTodo, Link)

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
