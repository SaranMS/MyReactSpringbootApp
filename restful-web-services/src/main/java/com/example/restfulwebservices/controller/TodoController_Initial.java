/*
 * package com.example.restfulwebservices.controller;
 * 
 * import java.util.List;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.HttpStatus; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.web.bind.annotation.CrossOrigin; import
 * org.springframework.web.bind.annotation.DeleteMapping; import
 * org.springframework.web.bind.annotation.GetMapping; import
 * org.springframework.web.bind.annotation.PathVariable; import
 * org.springframework.web.bind.annotation.PostMapping; import
 * org.springframework.web.bind.annotation.PutMapping; import
 * org.springframework.web.bind.annotation.RequestBody; import
 * org.springframework.web.bind.annotation.RestController;
 * 
 * import com.example.restfulwebservices.model.Todo; import
 * com.example.restfulwebservices.service.TodoService;
 * 
 * @RestController
 * 
 * @CrossOrigin(origins = "http://localhost:3000") public class
 * TodoController_Initial {
 * 
 * @Autowired private TodoService todoService;
 * 
 * @GetMapping(value="/users/{username}/todos") public List<Todo>
 * findAll(@PathVariable String username){ return todoService.findAll(username);
 * 
 * }
 * 
 * @DeleteMapping(value="/users/{username}/todos/{id}") public
 * ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable
 * long id){ Todo todo = todoService.deleteById(id); if(todo!=null) { return
 * ResponseEntity.noContent().build(); } return
 * ResponseEntity.notFound().build(); }
 * 
 * @GetMapping(value="/users/{username}/todos/{id}") public Todo
 * findTodoById(@PathVariable String username, @PathVariable long id){ Todo todo
 * = todoService.findById(id); return todo; }
 * 
 * @PutMapping(value="/users/{username}/todos/{id}") public ResponseEntity<Todo>
 * updateTodoById(@PathVariable String username, @PathVariable long
 * id, @RequestBody Todo todo){ Todo updatedTodo = todoService.save(todo);
 * return new ResponseEntity<Todo>(todo,HttpStatus.OK); }
 * 
 * @PostMapping(value="/users/{username}/todos") public Todo
 * addTodo(@PathVariable String username, @RequestBody Todo todo){ Todo
 * updatedTodo = todoService.save(todo); return todo; }
 * 
 * }
 * 
 * 
 * Present TodoController uses JPA
 */