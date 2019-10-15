export cont isStrongPassword = password => {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/

  if (strongRegex.test(password)) {
    return 'Forte'
  } else if (mediumRegex.test(password)) {
    return 'Media'
  } else {
    return 'Fraca'
  }
}
