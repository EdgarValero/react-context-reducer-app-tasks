import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { NavLink } from 'react-router-dom';
const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);

  return (
    <div className='flex justify-center'>
      <div className='w-8/12'>
        {tasks.map((task) => (
          <div
            className='bg-gray-900 mb-4 px-20 py-5 text-white shadow-2xl flex justify-between'
            key={task.id}
          >
            <div>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <div>
              <NavLink to={`/edit/${task.id}`}>
                <button className='bg-blue-600 hover:bg-blue-500 px-4 py-2 mr-2 rounded'>
                  Edit
                </button>
              </NavLink>
              <button
                className='bg-red-600 hover:bg-red-500 px-4 py-2 rounded'
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
