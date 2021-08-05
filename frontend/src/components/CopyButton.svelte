<script>
 // import { toasts } from 'src/storages/toastsStorage'
  import Buttons from './Buttons.svelte'
  import { browser } from '$app/env';

  export let textToCopy
  export let title = 'Copy to clipboard'

  async function copy() {
    console.log('copying')
    if (browser) {
      try {
        await navigator.clipboard.writeText(textToCopy)
        // toasts.push({
        //   message: 'Copied to clipboard',
        //   type: toasts.toastTypes.SUCCESS,
        // })
        console.log('Copied')
      } catch (e) {
        console.log(e);
        // toasts.push({
        //   message: 'Clipboard is not supported',
        //   type: toasts.toastTypes.ERROR,
        // })
      }
    }
  }
</script>

<Buttons {...$$restProps} on:click="{copy}" title="{title}" >
  {#if $$slots && $$slots.default}
    <slot />
  {:else}
    {title}
  {/if}
</Buttons>
