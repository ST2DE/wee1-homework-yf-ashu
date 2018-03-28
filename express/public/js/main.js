window.onload = function () {
    document.body.className += 'loaded'
  }
  var toggle = document.querySelector('.toggle')
  var target = document.querySelector('.popup--menu')
  var close = document.querySelector('.toggle--close')
  toggle.addEventListener('click', toggleChange, false)
  
  function toggleChange (e) {
    toggle.style.display = 'none'
    target.style.visibility = 'visible'
    target.style.opacity = '1'
    target.style.right = '0'
    setTimeout(function () {
      close.style.display = 'block'
      close.style.visibility = 'visible'
      close.style.opacity = '1'
    }, 450)
  }
  close.addEventListener('click', closeChange, false)
  function closeChange (e) {
    toggle.style.display = 'block'
    target.style.visibility = 'hidden'
    target.style.opacity = '0'
    target.style.right = '-100%'
    close.style.display = 'none'
    close.style.visibility = 'hidden'
    close.style.opacity = '0'
  }