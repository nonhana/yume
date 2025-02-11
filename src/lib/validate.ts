import { promises as dns } from 'node:dns'

export async function validateEmailAddress(emailAddress: string) {
  const invalidDomains = [
    'example.com',
    'email.com',
    'test.com',
  ]
  const [_user, domain] = emailAddress.split('@')

  if (invalidDomains.includes(domain)) {
    return false
  }

  try {
    const mxRecords = await dns.resolveMx(domain)

    if (!mxRecords || mxRecords.length === 0) {
      return false
    }
    return true
  }
  catch (error) {
    console.error(error)
  }
}
