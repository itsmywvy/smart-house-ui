export function getJwtToken() {
  return sessionStorage.getItem('jwt');
}

export function setJwtToken(token) {
  sessionStorage.setItem('jwt', token);
}

// Longer duration refresh token (30-60 min)
export function getRefreshToken() {
  return sessionStorage.getItem('refreshToken');
}

export function setRefreshToken(token) {
  sessionStorage.setItem('refreshToken', token);
}

export async function login(data) {
  try {
    const response = await fetch(
      'https://backend-smart-house-production.up.railway.app/api/user/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    const responseJson = await response.json();

    return {
      jwtToken: responseJson.token,
      refreshToken: responseJson.token,
      user: responseJson.user,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function signup(data) {
  try {
    const response = await fetch(
      'https://backend-smart-house-production.up.railway.app/api/users/signup',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.error) {
      return {
        success: false,
        message: responseJson.error,
      };
    }

    return {
      jwtToken: responseJson.token,
      refreshToken: responseJson.token,
      success: responseJson.success,
      message: responseJson.message,
    };
  } catch (error) {
    console.log(error.message);
  }
}
