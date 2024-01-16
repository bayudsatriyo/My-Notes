const BASE_URL = "https://notes-api.dicoding.dev/v1";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken: { accessToken: string }) {
  console.log(accessToken);
  return localStorage.setItem("accessToken", accessToken.accessToken);
}

async function fetchWithToken(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: { [key: string]: any } = {}
) {
  console.log(options);
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function register({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function login({ email, password }: { email: string; password: string }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addNote({ title, body }: { title: string; body: string }) {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getArchivesNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function deleteNote(note_id: number) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${note_id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function ArchiveNote(note_id: number) {
  const response = await fetchWithToken(
    `${BASE_URL}/notes/${note_id}/archive`,
    {
      method: "POST",
    }
  );

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function UnarchiveNote(note_id: number) {
  const response = await fetchWithToken(
    `${BASE_URL}/notes/${note_id}/unarchive`,
    {
      method: "POST",
    }
  );

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

export {
  register,
  login,
  getAccessToken,
  putAccessToken,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivesNotes,
  deleteNote,
  ArchiveNote,
  UnarchiveNote,
};
