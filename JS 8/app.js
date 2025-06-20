
let tasks = [];

  function renderTasks(filter = '') {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks
      .filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
      .forEach((task, index) => {
        const li = document.createElement('li');

        if (task.isEditing) {
          const input = document.createElement('input');
          input.type = 'text';
          input.value = task.text;
          input.onblur = () => saveTask(index, input.value);
          input.onkeydown = (e) => {
            if (e.key === 'Enter') saveTask(index, input.value);
          };
          li.appendChild(input);
        } else {
          li.textContent = task.text;
        }

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️';
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.onclick = () => deleteTask(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(actions);

        list.appendChild(li);
      });
  }

  function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text !== '') {
      tasks.push({ text, isEditing: false });
      input.value = '';
      renderTasks();
    }
  }

  function editTask(index) {
    tasks[index].isEditing = true;
    renderTasks(document.getElementById('search').value);
  }

  function saveTask(index, newText) {
    tasks[index].text = newText;
    tasks[index].isEditing = false;
    renderTasks(document.getElementById('search').value);
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(document.getElementById('search').value);
  }

  document.getElementById('search').addEventListener('input', function () {
    renderTasks(this.value);
  });

  
  renderTasks();
