fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        const list = document.getElementById('todo-list');
        todos.slice(0, 10).forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo.title;
          if (todo.completed) {
            li.classList.add('completed');
          }
          list.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Failed to fetch TODOs:', error);
      });

