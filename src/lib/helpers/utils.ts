import { invoke } from "@tauri-apps/api";

export async function getOS() {
  return await invoke('plugin:utils|get_os');
}
