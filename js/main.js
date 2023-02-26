
// code js ... 
// 01010101010100101010101010101010101010101010101010101010101010101010101010101010
// 10101010101010101010101010101010101010101010101010101010101010101010101010101010
// 01010101010100101010101010101010101010101010101010101010101010101010101010101010

// get the elements ...
let taskInput = document.getElementById('user-task');
let btnAdd = document.getElementById('btn-add');
let btnDel = document.getElementById('btn-del');
let taskContent = document.getElementById('tasks-content');



// click  event 
btnAdd.addEventListener('click', () => {

  if(taskInput.value !==  "") {

    let listTask = document.createElement('li');
    let taskSend = document.createTextNode(taskInput.value);
      listTask.appendChild(taskSend);
      taskContent.appendChild(listTask);
   
    // local storage ... 
    window.localStorage.setItem('tasks', taskContent.innerHTML);

    // empty filed ... 
    taskInput.value = "";
 



    // send Notification ... 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added successfully',
      showConfirmButton: false,
      timer: 1500
    })

    // ----------------------------
    // ----------------------------
  }else {

    // notification Error 
    Swal.fire({
      icon: 'error',
      title: 'Please Fill Input',

  
    })
    
    }


})

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// check local storage ..... 
if (localStorage.getItem('tasks')) {

  let listTask = document.createElement('li');
  let taskSend = document.createTextNode(taskInput.value);
  listTask.appendChild(taskSend);
  taskContent.appendChild(listTask);

   taskContent.innerHTML = window.localStorage.getItem('tasks');
  



}else {
  console.log('no data');
}



btnDel.addEventListener('click',function(){

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )

      taskContent.innerHTML = "";
      window.localStorage.clear();
    }
  })



})


// localStorage.clear();