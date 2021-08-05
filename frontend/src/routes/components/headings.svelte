<script>
  import Buttons from "/src/components/CopyButton.svelte";
  import Code from "/src/components/Code.svelte";
</script>

<h1>Headings comes here</h1>

<Code isWithoutCopy code="No need special imports just use regular Hx tag"></Code>

<Buttons textToCopy="<h1>Headings comes here</h1>" isWrapper>
   <h1>H1 heading</h1>
</Buttons>
<br>
<Buttons textToCopy="<h2>Headings comes here</h2>" isWrapper>
  <h2>H2 heading</h2>
</Buttons>
<br>
<Buttons textToCopy="<h3>Headings comes here</h3>" isWrapper>
  <h3>H3 heading</h3>
</Buttons>
<br>
<Buttons textToCopy="<h4>Headings comes here</h4>" isWrapper>
  <h4>H4 heading</h4>
</Buttons>
<br>
<Buttons textToCopy="<h5>Headings comes here</h5>" isWrapper>
  <h5>H5 heading</h5>
</Buttons>
<br>
<Buttons textToCopy="<h6>Headings comes here</h6>" isWrapper>
  <h6>H6 heading</h6>
</Buttons>
<br>
<Buttons textToCopy="<p>Regular paragrapg</p>" isWrapper>
  <p>Regular paragrapg</p>
</Buttons>
<br>
<Buttons textToCopy="<strong>Strong</strong>" isWrapper>
  <strong>Strong</strong>
</Buttons>
<br>
<Buttons textToCopy="<i>Italic</i>" isWrapper>
  <i>Italic</i>
</Buttons>
