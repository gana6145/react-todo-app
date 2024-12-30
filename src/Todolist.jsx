import React from 'react';

const Todolist = ({ todo, handledelete }) => {
  return (
    
  
        <div className="flex justify-center mt-10">
          <div className="w-full sm:w-[60%] gap-y-4">
            {todo.map((items, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center justify-between"
              >
                {/* Item Text */}
                <div className="flex items-center text-left max-w-[40%] overflow-hidden">
                  <span className="truncate">{items.item}</span>
                </div>
    
                {/* Item Date */}
                <div className="flex items-center text-center max-w-[30%] overflow-hidden">
                  <span className="truncate">{items.date}</span>
                </div>
    
                {/* Delete Button */}
                <div className="flex items-center text-right">
                  <button
                    onClick={() => handledelete(items.item)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    aria-label={`Delete ${items.item}`} // Adding an aria-label for better accessibility
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

export default Todolist;
