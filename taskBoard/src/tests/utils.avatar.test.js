import { getInitials, getAvatarColor } from '@/utils/avatar'

const userName = 'Test User'
const userNameOnlyName = 'TestName'
const emptyUserName = ''
const undefinedUserName = undefined
const nullUserName = null

const userInitials = 'TU'
const userNameOnlyNameInitials = 'T'

test(`initials from ${userName} equals ${userInitials}`, () => {
  expect(getInitials(userName)).toBe(userInitials)
})

test(`initials from ${userNameOnlyName} equals ${userNameOnlyNameInitials}`, () => {
  expect(getInitials(userNameOnlyName)).toBe(userNameOnlyNameInitials)
})

test(`initials from ${emptyUserName} is defined`, () => {
  expect(getInitials(emptyUserName)).toBeDefined()
})

test(`initials from ${undefinedUserName} is defined`, () => {
  expect(getInitials(undefinedUserName)).toBeDefined()
})

test(`initials from ${nullUserName} not null`, () => {
  expect(getInitials(nullUserName)).toBeDefined()
})

test(`avatar color from ${userName}`, () => {
  expect(getAvatarColor(userName)).toMatch(/#*/)
})

test(`avatar color from ${userNameOnlyName}`, () => {
  expect(getAvatarColor(userNameOnlyName)).toMatch(/#*/)
})

test(`avatar color from ${emptyUserName}`, () => {
  expect(getAvatarColor(emptyUserName)).toMatch(/#*/)
})

test(`avatar color from ${undefinedUserName}`, () => {
  expect(getAvatarColor(undefinedUserName)).toMatch(/#*/)
})

test(`avatar color from ${nullUserName}`, () => {
  expect(getAvatarColor(nullUserName)).toMatch(/#*/)
})
