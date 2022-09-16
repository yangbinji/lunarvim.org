import{r as p,o,c,a as s,b as e,F as l,e as a,d as n}from"./app.d32544d0.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=a(`<h1 id="c-c" tabindex="-1"><a class="header-anchor" href="#c-c" aria-hidden="true">#</a> C/C++</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token keyword">c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall cpp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2>`,5),k=n("You can install "),d=s("code",null,"clangd",-1),m=n(" language server using the "),b={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},g=n("nvim-lsp-installer"),h=a(`<div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall clangd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),f=n("Check the official documentation for other methods "),v={href:"https://clangd.llvm.org/installation",target:"_blank",rel:"noopener noreferrer"},_=n("https://clangd.llvm.org/installation"),q=n("."),y=a(`<h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><p><code>clangd</code> language server supports formatting using <code>clang_format</code> by default. Optionally, you can use <code>uncrustify</code> or <code>clang-format</code> directly if you don&#39;t want to use <code>clangd</code>.</p><p>Configuration in <code>~/.config/lvim/config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>
formatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;uncrustify&quot;</span><span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The selected formatter must be installed separately.</p><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><p>If you need specific settings for <code>clangd</code> then you can override it like this</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- check the full default list \`:lua print(vim.inspect(lvim.lsp.automatic_configuration.set_keymappings))\`</span>
vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;clangd&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Now you can customize the setup completely</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- some settings can only passed as commandline flags \`clangd --help\`</span>
<span class="token keyword">local</span> clangd_flags <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;--all-scopes-completion&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--suggest-missing-includes&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--background-index&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--pch-storage=disk&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--cross-file-rename&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--log=info&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--completion-style=detailed&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;--enable-config&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- clangd 11+ supports reading from .clangd configuration file</span>
  <span class="token string">&quot;--clang-tidy&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">-- &quot;--clang-tidy-checks=-*,llvm-*,clang-analyzer-*,modernize-*,-modernize-use-trailing-return-type&quot;,</span>
  <span class="token comment">-- &quot;--fallback-style=Google&quot;,</span>
  <span class="token comment">-- &quot;--header-insertion=never&quot;,</span>
  <span class="token comment">-- &quot;--query-driver=&lt;list-of-white-listed-complers&gt;&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> clangd_bin <span class="token operator">=</span> <span class="token string">&quot;clangd&quot;</span>

<span class="token keyword">local</span> custom_on_attach <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> bufnr<span class="token punctuation">)</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">common_on_attach</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> bufnr<span class="token punctuation">)</span>
  <span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span> noremap <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> silent <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token punctuation">}</span>
  vim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_buf_set_keymap</span><span class="token punctuation">(</span>bufnr<span class="token punctuation">,</span> <span class="token string">&quot;n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;leader&gt;lh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;Cmd&gt;ClangdSwitchSourceHeader&lt;CR&gt;&quot;</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span>
  cmd <span class="token operator">=</span> <span class="token punctuation">{</span> clangd_bin<span class="token punctuation">,</span> <span class="token function">unpack</span><span class="token punctuation">(</span>clangd_flags<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  on_attach <span class="token operator">=</span> custom_on_attach<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&quot;clangd&quot;</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,10),x=n("Refer to the official documentation if you face any issues "),w={href:"https://clangd.llvm.org/troubleshooting",target:"_blank",rel:"noopener noreferrer"},I=n("https://clangd.llvm.org/troubleshooting"),C=n("."),S=a(`<h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall ccppr_vsc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>To enable pretty-printing, create a custom configuration:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/cpp.lua</span>
<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>
dap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;ccppr_vsc&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  adapters <span class="token operator">=</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token string">&quot;executable&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  configurations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      type <span class="token operator">=</span> <span class="token string">&quot;cpptools&quot;</span><span class="token punctuation">,</span>
      request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      name <span class="token operator">=</span> <span class="token string">&quot;Launch with pretty-print&quot;</span><span class="token punctuation">,</span>
      program <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string">&#39;Path to exe: &#39;</span><span class="token punctuation">,</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">getcwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">..</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">end</span><span class="token punctuation">,</span>
      cwd <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      stopOnEntry <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>
      setupCommands <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          description <span class="token operator">=</span> <span class="token string">&quot;Enable pretty-printing&quot;</span><span class="token punctuation">,</span>
          text <span class="token operator">=</span> <span class="token string">&quot;-enable-pretty-printing&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,4);function L(E,N){const t=p("ExternalLinkIcon");return o(),c(l,null,[r,s("p",null,[k,d,m,s("a",b,[g,e(t)])]),h,s("p",null,[f,s("a",v,[_,e(t)]),q]),y,s("p",null,[x,s("a",w,[I,e(t)]),C]),S],64)}var F=u(i,[["render",L]]);export{F as default};
