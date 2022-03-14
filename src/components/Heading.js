import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Heading = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        <NavLink to="/">
          <h5 className="text-gray-100 font-bold text-2xl px-4 py-2 m-2">Task App</h5>
        </NavLink>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <NavLink to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-flex items-center">
              <FaPlus />
              Add Task
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Heading