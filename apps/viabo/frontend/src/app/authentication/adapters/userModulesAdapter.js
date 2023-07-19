export const UserModulesAdapter = data => {
  const userActions = data?.userActions !== '' ? data?.userActions?.split(',') : []
  const modules = data?.menu || []
  return {
    menu: modules,
    permissions: userActions
  }
}
