<script>
  import Buttons from "./Buttons.svelte";
import Card from "/src/components/Card.svelte";
  export let title
  export let onClose = () => { alert('Provide onClose function to Modal component for closing it') }
</script>

<div on:click={onClose} class="modal-backlight"></div>
<div class='modal-wrapper'>
  <Card>
    <div class="modal-title">{title}</div>
    <div class="modal-content"><slot /></div>
    {#if $$slots && $$slots.actions}
    <div class="modal-actions">
      <slot name='actions' />
      <Buttons on:click={onClose}>Cancel</Buttons>
    </div>
    {/if}
  </Card>
</div>

<style>
  .modal-backlight {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.29);
  }
  .modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .modal-title {
    padding-bottom: 8px;
    border-bottom: 1px solid black
  }
  .modal-content {
    padding: 20px 0;
  }
  .modal-actions {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }
</style>