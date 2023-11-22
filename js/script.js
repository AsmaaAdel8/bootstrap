var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.append(wrapper)
}
if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, copied text successfully!', 'success')
  })
}
var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('exampleCheck1')
myModal.addEventListener('shown.bs.Modal', function () {
  myInput.focus()
})