export const valOf = (name: string) => {
  const e = document.querySelector('.customer__' + name)
  return e === null ? '' : e.nodeValue
}
export const checked = (name: string) => {
  const e = document.querySelector('.customer__' + name)
  return e !== null && e.nodeValue === 'true'
}

export const initializeDom = () => {
  const panelClose = document.querySelector('.message-panel__close')
  if (panelClose) {
    panelClose.addEventListener('click', closeMessagePanel)
  }
  const submitButton = document.querySelector('.button__submit')
  if (submitButton === null) {
    return showException('submit button not found:(')
  }
  submitButton.addEventListener('click', onSubmitClick)
}

function showMessagePanel(text: string, type: string) {
  const messagePanel = document.querySelector('.message-panel')
  if (!messagePanel) {
    alert(text)
    return
  }
  const messagePanelText = document.querySelector('.message-panel__text')
  if (messagePanelText) {
    messagePanelText.innerHTML = text
  }
  messagePanel.classList.add('message-panel_' + type)
  messagePanel.classList.remove('section_hidden')
  const customerSection = document.querySelector('.customer')
  if (customerSection) {
    customerSection.classList.add('section_hidden')
  }
}

function closeMessagePanel() {
  const messagePanel = document.querySelector('.message-panel')
  if (!messagePanel) {
    return
  }
  messagePanel.classList.add('section_hidden')
  messagePanel.classList.remove('message-panel_error')
  messagePanel.classList.remove('message-panel_success')
  const messagePanelText = document.querySelector('.message-panel__text')
  if (messagePanelText) {
    messagePanelText.innerHTML = 'text'
  }
  const customerSection = document.querySelector('.customer')
  if (customerSection) {
    customerSection.classList.remove('section_hidden')
  }
}

function showSuccess(text: string) {
  showMessagePanel(text, 'success')
}

function showException(text: string) {
  showMessagePanel(text, 'error')
}

type SubmitResult = { success: true } | { success: false; message: string }

function onSubmitClick() {
  const form = document.querySelector('.form') as HTMLFormElement
  const params = new URLSearchParams()
  for (let e in form.elements) {
    const input = form.elements[e] as HTMLInputElement
    if (input.type === 'text' || input.type === 'checkbox') {
      params.append(input.name, input.value)
    }
  }
  fetch(form.action, {
    body: params,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
  })
    .then(response =>
      response.text().then(txt => {
        const result = JSON.parse(txt) as SubmitResult
        if (result.success) {
          showSuccess('customer saved!')
        } else {
          showException(result.message)
        }
      })
    )
    .catch(e => showException(e))
}
