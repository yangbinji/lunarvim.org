import{r as t,o as e,c as p,a as n,b as o,F as c,d as s,e as l}from"./app.d32544d0.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=n("h1",{id:"autocommands",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autocommands","aria-hidden":"true"},"#"),s(" Autocommands")],-1),m=s("To set up autocommands use the native nvim api "),k=n("code",null,"vim.api.nvim_create_autocmd",-1),d=s(", or use the helper Lunarvim table "),b=n("code",null,"lvim.autocommands",-1),_=s(" which will be passed to "),h={href:"https://github.com/LunarVim/lunarvim/blob/3475f7675d8928b49c85878dfc2912407de57342/lua/lvim/core/autocmds.lua#L177",target:"_blank",rel:"noopener noreferrer"},v=s("define_autocmds()"),g=s(" automatically."),f=l(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>autocommands <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;BufEnter&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- see \`:h autocmd-events\`</span>
      <span class="token punctuation">{</span> <span class="token comment">-- this table is passed verbatim as \`opts\` to \`nvim_create_autocmd\`</span>
          pattern <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;*.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.jsonc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">-- see \`:h autocmd-events\`</span>
          command <span class="token operator">=</span> <span class="token string">&quot;setlocal wrap&quot;</span><span class="token punctuation">,</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>This will run a command at a given event for the given filetype.</p><p>An example using the nvim api could look like this:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_create_autocmd</span><span class="token punctuation">(</span><span class="token string">&quot;BufEnter&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	  pattern <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;*.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.jsonc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	  <span class="token comment">-- enable wrap mode for json files only</span>
	  command <span class="token operator">=</span> <span class="token string">&quot;setlocal wrap&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You can also add lua callbacks</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>autocommands <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;BufWinEnter&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      pattern <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;*.cpp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.hpp&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      callback <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">-- DYI editorconfig</span>
        <span class="token keyword">if</span> vim<span class="token punctuation">.</span>loop<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;path/to/my/project&quot;</span> <span class="token keyword">then</span>
          vim<span class="token punctuation">.</span>cmd <span class="token string">[[setlocal tabstop=8 shiftwidth=8]]</span>
        <span class="token keyword">end</span>
      <span class="token keyword">end</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,6);function q(w,x){const a=t("ExternalLinkIcon");return e(),p(c,null,[r,n("p",null,[m,k,d,b,_,n("a",h,[v,o(a)]),g]),f],64)}var B=u(i,[["render",q]]);export{B as default};
