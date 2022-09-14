import React from "react";

const Todo = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
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
                <span className="text-xl">To-do comps and prototype</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://i1.sndcdn.com/artworks-000562525653-v1wh6h-t500x500.jpg"
                  alt=""
                  className="h-8 w-8 flex-none rounded-full"
                />
                <div className="ml-4 flex-auto">
                  <div className="font-medium">Emily Selman</div>
                  <div className="pt-0 text-slate-500">
                    Created Sept 10, 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* <p class="text-gray-500">Qty 1</p> */}

          {/* <div class="flex">
            <button
              type="button"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Todo;
