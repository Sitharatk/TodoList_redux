import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask ,editTask} from './TodoSlice';

function Todo() {
  const [task, setTask] = useState('');
  const [isEditing,setIsEditing]=useState(false)
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleAdd = () => {
    if (task.trim()) { 
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
const handleUpdate=()=>{
  dispatch(editTask({ id: currentTaskId, text: task }));
  setTask('');
  setIsEditing(false);
  setCurrentTaskId(null);
}
  const handleEdit=(id,text)=>{
     setTask(text)
      setCurrentTaskId(id)
      setIsEditing(true);
  }
 
const handleCancel = () => {
  setTask(''); 
  setCurrentTaskId(null); 
  setIsEditing(false); 
};

  return (
    <>
      <div className="flex flex-col items-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-green-900 mt-20 mb-6">Todo List App</h1>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="border border-gray-300 p-2 rounded-md w-64 focus:outline-none focus:ring-2 "
          />
          <button
            onClick={isEditing? handleUpdate:handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isEditing?'Update':'Add'}
          </button>
          {isEditing && (
    <button
        onClick={handleCancel}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
    >
        Cancel
    </button>
)}
        </div>

        <ul className="w-64 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm"
            >
              <span>{todo.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-black text-white px-2 py-1 rounded-md hover:bg-gray-600 transition duration-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="bg-gray-900 text-white px-2 py-1 rounded-md hover:bg-gray-600 transition duration-200"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
