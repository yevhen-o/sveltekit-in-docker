<script>
  import Button from '/src/components/html/Button.svelte'
  import Link from '/src/components/html/Link.svelte'

  export let title = 'Provide title property for Button component or slot default'
  export let href = undefined
  export let isPrimary = false
  export let isDisabled = false
  export let isSuccess = false
  export let isWarning = false
  export let isSecondary = false
  export let isError = false
  export let isOutlined = false
  export let isExtraLarge = false
  export let isExtraSmall =  false
  export let isLarge = false
  export let isSmall = false
  export let isWrapper = false

  const CMP = href ? Link : Button
</script>

{#if isWrapper}
  <Button on:click class="button-wrapper"><slot /></Button>
{:else}
  <CMP on:click class={[
    'pure-button', 
    ...isSecondary ? ['button-secondary']: [],
    ...isPrimary ? ['pure-button-primary']: [],
    ...isSuccess ? ['button-success']: [],
    ...isWarning ? ['button-warning']: [],
    ...isError ? ['button-error']: [],
    ...isOutlined ? ['button-outlined']: [],
    ...isDisabled ? ['pure-button-disabled'] : [], 
    ...isExtraSmall ? ['button-xsmall'] : [], 
    ...isSmall ? ['button-small'] : [], 
    ...isLarge ? ['button-large'] : [], 
    ...isExtraLarge ? ['button-xlarge'] : [], 
    ].join(' ')}>
    {#if $$slots && $$slots.default}
      <slot />
    {:else}
      {title}
    {/if}
  </CMP>
{/if}



