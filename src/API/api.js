export default async function getTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const data = await response.json()
  return data
}

export async function register({ email, password, userName }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        username: `${userName}`,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    },
  )

  if (response.status === 201) {
    const data = await response.json()
    return data
  }

  if (response.status === 400) {
    const data = await response.json()
    throw new Error(
      `${data.username ? `${data.username} ` : ''} ${
        data.email ? `${data.email} ` : ''
      } ${data.password ? `${data.password}` : ''}`,
    )
  }

  throw new Error(`Ошибка сервера. Повторите попытку позже.`)
}

export async function logIn({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    },
  )

  if (response.status === 200) {
    const data = await response.json()
    return data
  }

  if (response.status === 400) {
    const data = await response.json()
    throw new Error(
      `${data.username ? `${data.username} ` : ''} ${
        data.email ? `${data.email} ` : ''
      } ${data.password ? `${data.password}` : ''}`,
    )
  }

  if (response.status === 401) {
    const data = await response.json()
    throw new Error(data.detail)
  }

  throw new Error(`Ошибка сервера. Повторите попытку позже.`)
}
