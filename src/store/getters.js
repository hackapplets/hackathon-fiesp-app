// Return if the user is logged
export const isLogged = ({ user }) => {
  return user.logged
}

export const userPosition = ({ user }) => {
  return user.pos
}

//
export const googleMap = ({ google }, el, options = {}) => {
  // google.mapsClient.maps(el, options)
}
