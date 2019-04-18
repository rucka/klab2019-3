fetch('http://localhost:3333/')
  .then(res => res.text())
  .then(txt => {
    const element = document.querySelector('.page__title')
    if (element !== null) {
      element.innerHTML = txt
    }
  })
