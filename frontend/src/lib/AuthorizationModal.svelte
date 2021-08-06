<script>
  import Modal from '/src/components/Modal.svelte';
  import Buttons from '/src/components/Buttons.svelte';
  import TextInput from "/src/components/TextInput.svelte";

  export let onClose
  export let isSignIn = true

  const getFields = isSignIn => {
    if(isSignIn){
      return [
      { label: 'Login', key: 'login' },
      { label: 'Password', key: 'password', options: { type: 'password' }}
    ]
    } 
    return [
      { label: 'Email', key: 'email', options: { type: 'email'}},
      { label: 'Full Name', key: 'fname'},
      { label: 'Username', key: 'uname'},
      { label: 'Password', key: 'password', options: { type: 'password' }},
      { label: 'Confirm password', key: 'confirm', options: { type: 'password' }}
    ]
  }
</script>

<Modal title="{isSignIn ? 'Log In' : 'Get Started with Alpha Stock Price'}" onClose={onClose}>
  <form class="pure-form pure-form-stacked">
    {#each getFields(isSignIn) as field}
      <TextInput id='{field.key}' label="{field.label}" key={field.key} {...field.options || {}}/>
    {/each}
  </form>
  <small>
    By {isSignIn ? 'logging in' : 'signing up'} you agree to ASP <br>
    Terms & Conditions and Privacy Policy
  </small>
  <p>
    {#if isSignIn}
      Don't have an account? <Buttons isWrapper on:click={() => isSignIn = false}>Sign up</Buttons>
    {:else}
      Already have an account? <Buttons isWrapper on:click={() => isSignIn = true}>Log in</Buttons>
    {/if}
  </p>
  <div slot='actions'>
    <Buttons isPrimary type='submit' on:click={() => {console.log('save form')}}> 
      {isSignIn ? 'Log In' : 'Sign Up' }
    </Buttons>
  </div>
</Modal>