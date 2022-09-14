import React, { useState } from "react";

const Form = ({ addTodo }) => {
	const [todoInput, setTodoInput] = useState('');

	return (
		<section className="mb-5">
			<label htmlFor="todoInput">Add new task</label>
			<div className="flex gap-2 mt-2">
				<input type="text" onChange={ (e) => setTodoInput(e.target.value) } className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 ring-1 ring-slate-200 shadow-sm" />
				<button type="button" onClick={ () => addTodo(todoInput) } className="hover:bg-blue-400 bg-blue-500 py-2 px-6 text-sm text-white rounded">Add</button>
			</div>
		</section>
	)
};

export default Form;
