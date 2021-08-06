<script>
  export let icon = undefined
  export let name = undefined
</script>


<span class="material-icons">
  {#if $$slots && $$slots.default}
      <slot />
    {:else}
      {icon || name}
    {/if}
</span>