var edit = document.getElementsByClassName("fa-edit");
var trash = document.getElementsByClassName("fa-trash");

Array.from(edit).forEach(function(element) {
  element.addEventListener('click', function(){
    const msg = this.parentNode.parentNode.childNodes[1].innerText;
    const edit = document.getElementById('itemInput').value;
    fetch('edit', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'msg': msg,
        'edit':edit
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const msg = this.parentNode.parentNode.childNodes[1].innerText;
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
