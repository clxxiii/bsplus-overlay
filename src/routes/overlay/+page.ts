import { getParams } from "$lib/params";
import type { Load } from "@sveltejs/kit";

export const ssr = false;

export const load: Load = ({ url }) => {
  const params = getParams(url.searchParams);
  return { params }
}