import authHeader from '../helpers';



function getAll() { // Create A New Note
  return fetch('/api/note', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
  })
    .then((res) => res.json())
    .then((res) => res);
}


function getOne(id) { // Get Note By Id
  return fetch(`/api/note/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
  })
    .then((res) => res.json())
    .then((res) => res);
}


function create(data) { // Create A New Note
  return fetch('/api/note/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res);
}



function update(data) { // Update A Note By Id
  return fetch(`/api/note/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res);
}


function del(id) { // Delete A Note By Id
  return fetch(`/api/note/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
  })
    .then((res) => res.json())
    .then((res) => res);
}


export {
  getAll,
  getOne,
  create,
  update,
  del,
};