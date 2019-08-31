

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}


function validateJson(res) {
  if (!res.ok) {
    logout();
    return Promise.reject(res.statusText);
  }
  return res.json();
}


function register(data) { // Sign Up A User
  return fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(validateJson)
    .then((res) => res);
}


function login(data) { // Login A User
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(validateJson)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
      }
      return res;
    });
}

export {
  login,
  register,
  logout,
};