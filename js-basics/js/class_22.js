// var taskName = document.getElementById('addName').value;
// var res = document.getElementById('addTask');

// res.addEventListener('click', function () {
//   console.log(taskName);
// })




// var task = document.getElementById('addTask');
// task.addEventListener('click', creatTaskList);


var task = document.getElementById('addTask');
task.addEventListener('click', function creatTaskList(event) {

  event.preventDefault();

  var newElem = document.createElement(`li`);

  var done = document.createElement('span');
  done.className = 'done';
  done.innerHTML = 'Done';
  done.addEventListener('click', function () {
    this.parentElement.classList = 'active';
  })

  var edit = document.createElement('span');
  edit.classList = 'edit';
  edit.innerHTML = 'Edit';
  edit.addEventListener('click', function () {
    document.getElementById('addName').value = (this.previousSibling.previousSibling.innerHTML);
    document.getElementById('addName').focus();
    task.classList = 'save'
    task.innerHTML = 'Save';
    task.addEventListener('click', function () {
      this.previousSibling.previousSibling.innerHTML = task.value;
    })



  })

  var dlt = document.createElement('span');
  dlt.classList = 'delete';
  dlt.innerHTML = 'Delete';
  dlt.addEventListener('click', function () {
    this.parentElement.remove()
  })

  var anc = document.createElement('a');
  anc.classList = 'val';

  newElem.appendChild(anc);
  newElem.appendChild(done);
  newElem.appendChild(edit);
  newElem.appendChild(dlt);

  document.getElementById('taskList').appendChild(newElem)
  anc.innerHTML = document.getElementById('addName').value;

});









// DELETE FU





// var res = document.getElementById('addTask');

// res.addEventListener('click', function () {
//   var newElem = document.createElement('<li>');
//   newElem.innerHTML =  document.getElementById('addName').value;
//   console.log(creatTaskList);
// })
