export async function adminFetch<T>(url: string): Promise<T> {
  const accessToken = window.localStorage.getItem("admin_access_token");

  if (!accessToken) {
    window.location.href = "/v1/admin/login";
    throw new Error("401 unauthorized: access_token is missing.");
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    window.location.href = "/v1/admin/login";
    throw new Error("401 unauthorized.");
  }

  if (!response.ok) {
    throw new Error("Request failed.");
  }

  return response.json() as Promise<T>;
}
