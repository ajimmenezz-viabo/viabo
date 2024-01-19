export const NewCauseAdapter = cause => ({
  cause: cause?.cause,
  description: cause?.description,
  requesterId: cause?.requesterProfile?.value || '',
  receptorId: cause?.receptorProfile?.value || '',
  color: cause?.color
})
