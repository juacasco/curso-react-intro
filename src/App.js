import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { ThemeProvider } from './ThemeContext';
const defaultTodos = [
  { text: 'hacer la primera vaina', completed: false},
  { text: 'hacer la segunda vaina', completed: false},
  { text: 'hacer la tercera vaina', completed: false},
  { text: 'hacer la cuarta vaina', completed: false},
  { text: 'hacer la la ultima vaina', completed: false},
  { text: 'hacer la la ultima vaina', completed: false},
];
let idList = 0;

function App() {
  return (
    <ThemeProvider>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />
      
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={++idList} {...todo} />
          ))
        }
      </TodoList>

      <CreateTodoButton/>
    </ThemeProvider>
  );
}

export default App;
