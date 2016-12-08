import { createElement } from 'react-redux-wire';
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App
