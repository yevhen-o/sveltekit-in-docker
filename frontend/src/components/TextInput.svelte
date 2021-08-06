<script>
  import HelpText from "/src/components/HelpText.svelte";
  import Label from "/src/components/Label.svelte";

  export let id
  export let label
  export let helpText
</script>

<div>
  <Label id={id}>{label}</Label>
  <input id={id} />
  <HelpText>{helpText}</HelpText>
</div>