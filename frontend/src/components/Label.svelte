<script>
  export let id
  export let text = ''
</script>

<label for="{id}">
  {#if $$slots && $$slots.default}
    <slot />
  {:else}
    {text ? text : 'Provide text or children component to label'}
  {/if}
</label>

<style>
  label {
    color: #999;
  }
</style>