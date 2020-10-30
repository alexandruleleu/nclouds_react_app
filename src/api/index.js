function formatUrl(base, params) {
  if (params) {
    let data = '?';
    Object.keys(params).forEach(function (key, index, arr) {
      data += key + '=' + params[key];
      if (index < arr.length - 1) {
        data += '&';
      }
    });
    return `${base}${data}`;
  }
  return `${base}`;
}

async function api(base, params = null, method = 'GET', body = null) {
  const response = await fetch(formatUrl(base, params), {
    method,
    ...(body && { body: JSON.stringify(body) }),
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
  if (!response.ok) {
    throw await response.json();
  }
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export default {
  get: api,
  post: (url, body) => api(url, 'POST', body),
  put: (url, body) => api(url, 'PUT', body),
  delete: (url) => api(url, 'DELETE'),
};
