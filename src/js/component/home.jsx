import React, { useState } from "react";
import { ToDoInput } from "./toDoInput";

const Home = () => {
	const [toDoList, setToDoList] = useState([])
	function deleteToDo(indexToBeDeleted) {
		setToDoList((currentToDoList) => {
			const newToDoList = currentToDoList.filter((_, index) => index != indexToBeDeleted)
			return newToDoList
		})
	}
	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<h1 className="alert text-secondary">To Do's</h1>
			<ToDoInput toDoList={toDoList} setToDoList={setToDoList} />
			{toDoList.map((value, index) => <div className="alert alert-dark col-6 d-flex justify-content-between">
				<p>	{value} </p>
				<span onClick={() => deleteToDo(index)} className="deleteButton btn btn-secondary"> X </span>
			</div>)}
		</div>
	);
};

export default Home;
