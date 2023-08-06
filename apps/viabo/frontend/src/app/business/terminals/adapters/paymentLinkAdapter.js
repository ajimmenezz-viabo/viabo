export const PaymentLinkAdapter = data => ({
  amount: data?.amount,
  fullName: data?.name,
  email: data?.email,
  phone: data?.phone,
  message: data?.concept
})
