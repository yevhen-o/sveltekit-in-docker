<script>
  import Icons from "/src/components/Icons.svelte";
  import Buttons from "/src/components/Buttons.svelte";
  import Modal from "/src/components/Modal.svelte";
  import TextInput from "/src/components/TextInput.svelte";

  let isModalShown = false
</script>

<h1>Form elements comes here</h1>

<form class="pure-form ">
  <TextInput id='some_id' label="Field label" helpText="Some text for describe this field" />
</form>
<br>
<br>
<a href="https://material-ui.com/components/material-icons/" target="_blank">https://material-ui.com/components/material-icons/</a> <br>
<Icons>face</Icons>
<span style="color: red">
  <Icons>settings</Icons>
</span>
<br>
<Buttons on:click={() => {
  isModalShown =  true
  console.log('handle')
}} isSecondary>Show modal</Buttons>
{#if isModalShown}
<Modal onClose={() => isModalShown = false} title="Modal title">
  <form class="pure-form pure-form-stacked">
    <TextInput id='some_id' label="Field label" helpText="Some text for describe this field" />
  </form>

  <div slot="actions">
    <Buttons on:click={() => isModalShown = false} isPrimary>Do some staf</Buttons>
  </div>
</Modal>
{/if}