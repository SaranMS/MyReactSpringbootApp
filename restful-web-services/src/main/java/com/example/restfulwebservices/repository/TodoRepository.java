package com.example.restfulwebservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.restfulwebservices.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long>{

	List<Todo> findByUsername(String username);
}
