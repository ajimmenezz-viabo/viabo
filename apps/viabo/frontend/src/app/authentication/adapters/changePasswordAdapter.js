export const ChangePasswordAdapter = data => ({
  code: data?.authCode,
  currentPassword: data?.currentPassword,
  newPassword: data?.newPassword,
  confirmPassword: data?.verifyNewPassword
})
