<script>
  import HelpText from "/src/components/HelpText.svelte";
  import Label from "/src/components/Label.svelte";

  export let id
  export let label
  export let helpText
</script>

<div>
  <Label id={id}>{label}</Label>
  <input id={id} {...$$restProps} />
  {#if helpText}
  <HelpText>{helpText}</HelpText>
  {/if}
</div>

<style>
  div {
    min-height: 80px
  }

  input {
    width: 100%;
  }
</style>