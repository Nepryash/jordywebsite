import { reactive, readonly } from "vue";
import { fetchContent } from "./api";
import type { SiteContent } from "./types";

type SiteState = {
  content: SiteContent | null;
  loading: boolean;
  error: string;
};

const state = reactive<SiteState>({
  content: null,
  loading: true,
  error: ""
});

let request: Promise<void> | null = null;

export function useSiteStore() {
  async function ensureLoaded() {
    if (state.content || request) {
      return request;
    }

    request = fetchContent()
      .then((content) => {
        state.content = content;
      })
      .catch((error: Error) => {
        state.error = error.message;
      })
      .finally(() => {
        state.loading = false;
        request = null;
      });

    return request;
  }

  return {
    state: readonly(state),
    ensureLoaded
  };
}
