import './style.css'
import { initializeDom } from './dom'

fetch('http://localhost:3333/')
  .then(res => res.text())
  .then(txt => {
    const element = document.querySelector('.title')
    if (element !== null) {
      element.innerHTML = txt
    }
  })

initializeDom()
