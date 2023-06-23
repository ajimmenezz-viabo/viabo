function isHTML(str) {
  const doc = new DOMParser().parseFromString(str, 'text/html')
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1)
}

const copyToClipboard = text => {
  const input = document.createElement('textarea')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

export { isHTML, copyToClipboard }
