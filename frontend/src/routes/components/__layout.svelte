<script>
  import { IDENTIFIERS } from '/src/utils/urlsHelper';
  import HorizontalMenu from '/src/components/HorizontalMenu.svelte';

  const menuItems = [
    { title: 'Buttons', identifier: IDENTIFIERS.BUTTONS},
    { title: 'Headings', identifier: IDENTIFIERS.HEADINGS},
    { title: 'Form elements', identifier: IDENTIFIERS.FORM_ELEMENTS},
  ]
</script>

<div>
  <HorizontalMenu menuItems={menuItems} />
  <slot />
</div>