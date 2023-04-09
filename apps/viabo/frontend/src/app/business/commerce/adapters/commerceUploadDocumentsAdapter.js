export const CommerceUploadDocumentsAdapter = (documents, commerceId) => {
  const formUpload = new FormData()
  for (const [key, value] of Object.entries(documents)) {
    if (value !== null) {
      formUpload.append(key, value)
    }
  }
  formUpload.append('commerceId', commerceId)
  return formUpload
}
