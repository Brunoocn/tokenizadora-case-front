import { fetchWrapper } from "@/utils/fetchWrapper";

export async function handlePostAuthSignin(data: any) {
  try {
    const request: any = await fetchWrapper("auth/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    return request;
  } catch (error: any) {
    throw new Error(error);
  }
}
