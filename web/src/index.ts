import './style.css'
import { initializeDom } from './dom'
import { processCustomer } from './oop'

fetch('http://localhost:3333/')
  .then(res => res.text())
  .then(txt => {
    const element = document.querySelector('.title')
    if (element !== null) {
      element.innerHTML = txt
    }
  })

initializeDom(processCustomer)
