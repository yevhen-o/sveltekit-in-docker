<script>
import Buttons from "/src/components/CopyButton.svelte";
import Code from "/src/components/Code.svelte";
</script>

<h1>Buttons comes here</h1>

<Code label="Copy and past import script first" code="{`import Buttons from "/src/components/Buttons.svelte";`}"></Code>

<h3>Click on button belove to copy it code</h3>

<Buttons textToCopy="<Buttons isExtraSmall>Default</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons textToCopy="<Buttons isSmall>Default</Buttons>" isSmall>isSmall</Buttons>
<Buttons textToCopy="<Buttons>Default</Buttons>">Default</Buttons>
<Buttons textToCopy="<Buttons isLarge>Default</Buttons>" isLarge>isLarge</Buttons>
<Buttons textToCopy="<Buttons isExtraLarge>Default</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isDisabled>Default isDisabled</Buttons>
<br>
<br>
<Buttons isPrimary textToCopy="<Buttons isPrimary isExtraSmall>isPrimary</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons isPrimary textToCopy="<Buttons isPrimary isSmall>isPrimary</Buttons>" isSmall>isSmall</Buttons>
<Buttons isPrimary textToCopy="<Buttons isPrimary>isPrimary</Buttons>">isPrimary</Buttons>
<Buttons isPrimary textToCopy="<Buttons isPrimary isLarge>isPrimary</Buttons>" isLarge>isLarge</Buttons>
<Buttons isPrimary textToCopy="<Buttons isPrimary isExtraLarge>isPrimary</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isPrimary isDisabled>isPrimary isDisabled</Buttons>
<br>
<br>
<Buttons isSuccess textToCopy="<Buttons isSuccess isExtraSmall>Success</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons isSuccess textToCopy="<Buttons isSuccess isSmall>Success</Buttons>" isSmall>isSmall</Buttons>
<Buttons isSuccess textToCopy="<Buttons isSuccess>Success</Buttons>">isSuccess</Buttons>
<Buttons isSuccess textToCopy="<Buttons isSuccess isLarge>Success</Buttons>" isLarge>isLarge</Buttons>
<Buttons isSuccess textToCopy="<Buttons isSuccess isExtraLarge>Success</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isSuccess isDisabled>Success isDisabled</Buttons>
<br>
<br>
<Buttons isWarning textToCopy="<Buttons isWarning isExtraSmall>isWarning</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons isWarning textToCopy="<Buttons isWarning isSmall>isWarning</Buttons>" isSmall>isSmall</Buttons>
<Buttons isWarning textToCopy="<Buttons isWarning>isWarning</Buttons>">isWarning</Buttons>
<Buttons isWarning textToCopy="<Buttons isWarning isLarge>isWarning</Buttons>" isLarge>isLarge</Buttons>
<Buttons isWarning textToCopy="<Buttons isWarning isExtraLarge>isWarning</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isWarning isDisabled>isWarning isDisabled</Buttons>
<br>
<br>
<Buttons isError textToCopy="<Buttons isError isExtraSmall>isError</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons isError textToCopy="<Buttons isError isSmall>isError</Buttons>" isSmall>isSmall</Buttons>
<Buttons isError textToCopy="<Buttons isError>isError</Buttons>">isError</Buttons>
<Buttons isError textToCopy="<Buttons isError isLarge>isError</Buttons>" isLarge>isLarge</Buttons>
<Buttons isError textToCopy="<Buttons isError isExtraLarge>isError</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isError isDisabled>isError isDisabled</Buttons>

<br>
<br>
<Buttons isSecondary textToCopy="<Buttons isSecondary isExtraSmall>isSecondary</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons isSecondary textToCopy="<Buttons isSecondary isSmall>isSecondary</Buttons>" isSmall>isSmall</Buttons>
<Buttons isSecondary textToCopy="<Buttons isSecondary>isSecondary</Buttons>">isSecondary</Buttons>
<Buttons isSecondary textToCopy="<Buttons isSecondary isLarge>isSecondary</Buttons>" isLarge>isLarge</Buttons>
<Buttons isSecondary textToCopy="<Buttons isSecondary isExtraLarge>isSecondary</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isSecondary isDisabled>isSecondary isDisabled</Buttons>
<br>
<br>
<Buttons isOutlined textToCopy="<Buttons isOutlined isExtraSmall>isOutlined</Buttons>" isExtraSmall>isExtraSmall</Buttons>
<Buttons isOutlined textToCopy="<Buttons isOutlined isSmall>isOutlined</Buttons>" isSmall>isSmall</Buttons>
<Buttons isOutlined textToCopy="<Buttons isOutlined>isOutlined</Buttons>">isOutlined</Buttons>
<Buttons isOutlined textToCopy="<Buttons isOutlined isLarge>isOutlined</Buttons>" isLarge>isLarge</Buttons>
<Buttons isOutlined textToCopy="<Buttons isOutlined isExtraLarge>isOutlined</Buttons>" isExtraLarge>isExtraLarge</Buttons>
<Buttons isOutlined isDisabled>isOutlined isDisabled</Buttons>
<br>
<br>
<Buttons textToCopy="<Buttons isExtraSmall isLarge isExtraLarge isSmall isSecondary isPrimary isSuccess isWarning isError isOutlined>With all props</Buttons>" isExtraSmall isSmall isExtraLarge isLarge isSecondary isPrimary isSuccess isWarning isError isOutlined>With all props</Buttons>
<br>
<br>
<Buttons textToCopy={`
<Buttons isWrapper>
   <div style="padding: 20px; background: red">
    Button can be used as wrapper on some clickable content
  </div>
</Buttons>
`} isWrapper>
  <div style="padding: 20px; background: red">
    Button can be used as wrapper on some clickable content
  </div>
</Buttons>
