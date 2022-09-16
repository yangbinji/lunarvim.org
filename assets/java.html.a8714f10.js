import{r as e,o as t,c as o,a as s,b as p,F as r,e as l,d as n}from"./app.d32544d0.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const c={},i=l(`<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall java
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>java <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;jdtls&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>NOTE: jdtls requires jdk-11 or newer to run.</p><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>java <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;clang-format&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uncrustify&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>LspSettings jdtls
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This will generate the <code>jdtls.json</code> file where you can change the settings, the example document has this structure, but is too large to put it all here</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://json-schema.org/draft-04/schema#&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is onyl an example, the full document has mora than 700 lines&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;java.autobuild.enabled&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Go to the original document, this is just an example&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;window&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;java.codeGeneration.generateComments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Go to the original document, this is just an example&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;window&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,12),d=n("You can find the full document at nlsp-settings "),h={href:"https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/_generated/jdtls.json",target:"_blank",rel:"noopener noreferrer"},m=n("generated schema"),b=s("h2",{id:"debugger",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#debugger","aria-hidden":"true"},"#"),n(" Debugger")],-1),g=s("p",null,"(TODO)",-1);function k(q,v){const a=e("ExternalLinkIcon");return t(),o(r,null,[i,s("p",null,[d,s("a",h,[m,p(a)])]),b,g],64)}var x=u(c,[["render",k]]);export{x as default};
