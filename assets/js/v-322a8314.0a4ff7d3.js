"use strict";(self.webpackChunkzcomposition=self.webpackChunkzcomposition||[]).push([[11],{2074:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-322a8314",path:"/composition/Effect/useThrottleFn/",title:"useThrottleFn",lang:"en-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"代码演示",slug:"代码演示",children:[]},{level:2,title:"基础使用",slug:"基础使用",children:[]},{level:2,title:"示例代码",slug:"示例代码",children:[]},{level:2,title:"参数",slug:"参数",children:[]},{level:2,title:"options",slug:"options",children:[]},{level:2,title:"Result",slug:"result",children:[]}],filePathRelative:"composition/Effect/useThrottleFn/README.md",git:{updatedTime:1632830925e3,contributors:[{name:"curryPaste",email:"2771885247@qq.com",commits:1}]}}},8416:(n,a,s)=>{s.r(a),s.d(a,{default:()=>u});var t=s(6252),p=s(3577),e=s(2262),o=s(3560);const c=(0,t.uE)('<h1 id="usethrottlefn" tabindex="-1"><a class="header-anchor" href="#usethrottlefn" aria-hidden="true">#</a> useThrottleFn</h1><p>节流</p><h3 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h3><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>',4),l=(0,t.uE)('<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useThrottleFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zcomposition&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span>run<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> flush<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useThrottleFn</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token punctuation">{</span>wait<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>leading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>trailing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        count:{{count}}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>run<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>flush<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>立即执行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>cancel<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fn</td><td>目标函数</td><td><code>() =&gt; viod</code></td><td>-</td></tr><tr><td>options</td><td>选项</td><td><code>Function</code></td><td>-</td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>wait</td><td>超时时间，单位为毫秒</td><td><code>number</code></td><td>1000</td></tr><tr><td>leading</td><td>是否在上升沿触发副作用函数</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trailing</td><td>是否在下降沿触发副作用函数</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>run</td><td>触发执行 fn，函数参数将会传递给 fn</td><td><code>()=&gt; viod)</code></td><td>-</td></tr><tr><td>cancel</td><td>取消当前防抖</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>flush</td><td>当前防抖立即调用</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table>',8),u=(0,t.aZ)({setup(n){const a=(0,e.iH)(0),{run:s,cancel:u,flush:i}=(0,o.vA)((()=>{a.value++}),{wait:1e3,leading:!1,trailing:!0});return(n,o)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[c,(0,t._)("div",null,[(0,t._)("div",null," count:"+(0,p.zw)(a.value),1),(0,t._)("button",{onClick:o[0]||(o[0]=(...n)=>(0,e.SU)(s)&&(0,e.SU)(s)(...n))},"点击"),(0,t._)("button",{onClick:o[1]||(o[1]=(...n)=>(0,e.SU)(i)&&(0,e.SU)(i)(...n))},"立即执行"),(0,t._)("button",{onClick:o[2]||(o[2]=(...n)=>(0,e.SU)(u)&&(0,e.SU)(u)(...n))},"取消")]),l],64))}})}}]);