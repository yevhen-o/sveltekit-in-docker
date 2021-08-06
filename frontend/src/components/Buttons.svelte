<script>
  import Button from '/src/components/html/Button.svelte'
  import Link from '/src/components/html/Link.svelte'
  import Icons from '/src/components/Icons.svelte'

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
  export let iconBefore = undefined
  export let iconAfter = undefined
  export let icon = undefined

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
    ...icon ? ['button-icon'] : [],
    ...iconAfter || iconBefore ? ['button-with-icon'] : [],
    ].join(' ')}>
    {#if icon}
      <Icons>{icon}</Icons>
    {:else}
      <span class='button-content'>
        {#if iconBefore}
          <Icons>{iconBefore}</Icons>
        {/if}
        <span class="button-text">
          {#if $$slots && $$slots.default}
            <slot />
          {:else}
            {title}
          {/if}
        </span>
        {#if iconAfter}
          <Icons>{iconAfter}</Icons>
        {/if}
      </span>
    {/if}
  </CMP>
{/if}

<style>
  .button-content {
    display: flex;
    align-items: center;
  }
</style>

