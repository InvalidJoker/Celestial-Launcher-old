<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import Background from "../images/bg.png";

  let name = "";
  let greetMsg = "";

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg = await invoke("greet", { name });
  }
</script>

<a href="/auth">Login</a>
<a href="/pack">Pack</a>