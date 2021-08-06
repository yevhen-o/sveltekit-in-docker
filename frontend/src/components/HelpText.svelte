<script>
  export let text
  export let isError = false
  export let isWithTopLine = false
</script>

<span class="pure-form-message-inline">
  {#if $$slots && $$slots.default}
    <slot />
  {:else}
    {text}
  {/if}
</span>