import React, {useState} from "react";
import {ToDoInput} from "./toDoInput";

const Home = () => {
	const[toDoList,setToDoList]=useState([])
	return (
		<div className="text-center">
		<h1>To Do's</h1>
		<ToDoInput toDoList={toDoList} setToDoList={setToDoList}/>

		</div>
	);
};

export default Home;
