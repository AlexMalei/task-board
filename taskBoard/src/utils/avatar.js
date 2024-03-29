export const getInitials = (fullName = 'No Name') => {
  const userName = fullName || 'No Name'
  const match = userName.match(/(\w)?\w*\s*(\w)?/)
  return match ? match.slice(1).join('') : ''
}

export const getAvatarColor = fullName => {
  const localName = fullName || 'NN'

  const hexCode = localName
    .split('')
    .reduce((acc, char) => (acc * char.charCodeAt(0)) % 0xffffff, 1)
    .toString(16)

  return `#${'0'.repeat(6 - hexCode.length) + hexCode}`
}
