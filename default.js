document.getElementById('find').addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      result = document.getElementById('complete');
      result.textContent = xhr.responseText;
    }
  }
  var input = document.getElementById('input').value;
  console.log(input);
  xhr.open('POST', 'http://127.0.0.1:3000/query', true);
  xhr.send(input);
}, false)