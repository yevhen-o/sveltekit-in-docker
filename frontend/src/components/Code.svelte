<script>
  import CopyButton from "/src/components/CopyButton.svelte";

  export let code
  export let label = undefined
</script>

<div class="code-wrapper">
  {#if label}
  <div class="code-label">
    {label}
  </div>
  {/if}
  <pre>
    {code}
  </pre>
  <CopyButton isPrimary textToCopy={code} title="Copy" ></CopyButton>
</div>

<style>
  .code-wrapper {
    text-align: right;
  }

  .code-label {
    text-align: left;
  }

  pre {
    border: 1px solid black;
    border-radius: 4px;
    padding: 20px 10px;
    margin-bottom: 4px;
    margin-top: 4px;
    text-align: left;
    font-size: 12px;
  }
</style>