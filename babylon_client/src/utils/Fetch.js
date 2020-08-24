const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (exception) {
    return { ok: false, exception };
  }
};

export const buidPostFormData = (postOptions) => {
  const { data: details, ...left } = postOptions;
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  const body = formBody;
  const defaultPost = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };
  const options = {
    ...defaultPost,
    ...left,
    body,
  };
  return options;
};

export const buildPostOptions = (postOptions) => {
  const { data, ...left } = postOptions;
  const body = JSON.stringify(data);
  const defaultPost = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  const options = {
    ...defaultPost,
    ...left,
    body,
  };
  return options;
};

export default fetchData;
