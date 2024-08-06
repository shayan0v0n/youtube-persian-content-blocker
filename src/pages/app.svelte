<script lang="ts">
  import { blockPosts } from "../utils/index";

  let IsRunning = JSON.parse(localStorage.getItem("IsRunning") ?? "");
  let interval: number;

  const startBlocking = () => {
    interval = setInterval(blockPosts, 500);
  };

  const stopBlocking = () => {
    clearInterval(interval);
  };

  const updateStorage = () => {
    localStorage.setItem("IsRunning", JSON.stringify(IsRunning));
  };

  const changeRunner = () => {
    IsRunning = !IsRunning;
    updateStorage();
    if (IsRunning) startBlocking();
    else stopBlocking();
  };

  if (IsRunning) {
    startBlocking();
  }
</script>

<button on:click={changeRunner} class="running-btn">
  {IsRunning ? "Stop" : "Running"}
</button>
