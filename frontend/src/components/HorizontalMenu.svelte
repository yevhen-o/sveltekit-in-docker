<script>
  import { page } from '$app/stores';
  import { getUrl } from '/src/utils/urlsHelper'
  
  export let menuItems = [];
</script>

<div class="pure-menu pure-menu-horizontal">
  <ul class="pure-menu-list">
    {#each menuItems as item }
      <li class="pure-menu-item" class:pure-menu-selected={getUrl(item.identifier) === $page.path}>
        <a href="{getUrl(item.identifier)}"class="pure-menu-link" >{item.title}</a>
      </li>
    {/each}
  </ul>
</div>