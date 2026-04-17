import { useMemo, useState } from 'react';

function TodoList({ todos, filter }: { todos: string[], filter: string }) {
  const [newTodo, setNewTodo] = useState('');
  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter); //if this is slow, useMemo will cache the result unless todos or filter change
  }, [todos, filter]);
  // *** rest 
}