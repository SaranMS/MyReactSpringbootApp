package com.example.restfulwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.restfulwebservices.model.Todo;

@Service
public class TodoService {

	private static List<Todo> list = new ArrayList<Todo>();
	private static long idCounter = 0;
	static {
		list.add(new Todo(++idCounter, "test", "Learn React", new Date(),false));
		list.add(new Todo(++idCounter, "test", "Learn Springboot", new Date(),false));
		list.add(new Todo(++idCounter, "test", "Learn AWS", new Date(),false));
	}
	
	public List<Todo> findAll(String username){
		return list;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo!=null) {
		list.remove(todo);
		return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : list) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			list.add(todo);
		}
		else {
			deleteById(todo.getId());
			list.add(todo);
		}
		return todo;
	}
}