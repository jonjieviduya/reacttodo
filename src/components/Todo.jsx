import React from "react";

const Todo = (props) => {
  const { todo, removeTodo } = props;
  const removeHandler = (id) => {
    removeTodo(id);
  };
  return (
    <>
      <div className="flex flex-1 flex-col mb-3">
        <div className="shadow bg-white p-3">
          <div className="flex items-center gap-7">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              className="h-7 w-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            ></input>
            <div>
              <div className="font-medium text-gray-900 p-0">
                <span className="text-xl">{todo.title}</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://i1.sndcdn.com/artworks-000562525653-v1wh6h-t500x500.jpg"
                  alt=""
                  className="h-8 w-8 flex-none rounded-full"
                />
                <div className="ml-4 flex-auto">
                  <div className="font-medium">Emily Selman</div>
                  <div className="pt-0 text-slate-500">{todo.created_at}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                removeHandler(todo.id);
              }}
              className="hover:bg-red-400 group flex items-center rounded-md bg-red-700 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
