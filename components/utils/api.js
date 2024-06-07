const apiFn = async (method, path, payload, onError) => {
  let token;
  if (typeof window !== 'undefined') {
    token = sessionStorage.getItem('token');
  }
  const headers = {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_API}${path}`, {
      method: method || 'GET', // GET, POST, PUT, DELETE, etc.
      headers,
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (err) {
    if (onError) {
      onError();
    }
  }
  return null;
};

const api = {
  get: (...args) => apiFn('GET', ...args),
  post: (...args) => apiFn('POST', ...args),
  put: (...args) => apiFn('PUT', ...args),
  delete: (...args) => apiFn('DELETE', ...args),
};

export default api;
