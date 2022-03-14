import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { tasks, addTask, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask(taskFound);
    } else {
      setTask({
        title: '',
        description: '',
      });
    }
  }, [params, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate('/');
  };

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <div className='flex justify-center items-center h-3/4'>
      <form className='bg-gray-900 p-10 w-6/12' onSubmit={handleSubmit}>
        <h2 className='mb-7 text-3xl text-center'>
          {task.id ? 'Edit Task' : 'Add Task'}
        </h2>
        <div className='mb-5'>
          <input
            type='text'
            name='title'
            placeholder='Write a title'
            className='bg-gray-700 px-4 py-2 w-full focus:outline-none focus:text-gray-100'
            onChange={handleChange}
            value={task.title}
            required
          />
        </div>
        <div className='mb-5'>
          <textarea
            name='description'
            rows='2'
            placeholder='Write a description'
            className='bg-gray-700 px-4 py-2 w-full focus:outline-none focus:text-gray-100'
            onChange={handleChange}
            value={task.description}
            required
          ></textarea>
        </div>
        <button className='bg-green-600 w-full hover:bg-green-500 px-4 py-2 rounded'>
          {task.id ? 'Save Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
