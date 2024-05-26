<script>
  import "../style.css";
</script>

<style>
  :global(body) {
    background-image: url(../images/bg.png);
    background-size: cover;
    background-position: center;

  }
</style>

<div class="flex flex-col items-center justify-center h-screen text-white bg-opacity-50 backdrop-filter backdrop-blur-md bg-slate-800">
  <slot />
</div>