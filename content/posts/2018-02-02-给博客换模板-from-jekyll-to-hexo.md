+++
title = "给博客换模板 - From Jekyll To Hexo"
date = 2018-02-02T04:01:25.000Z
draft = false
url = "/2018/02/01/02012018-2301/"
tags = ["Hexo", "Jekyll"]
categories = []
+++
<h5 id="契机"><a href="#契机" class="headerlink" title="契机"></a>契机</h5><p>使用Jekyll模板已经两年了，期间修修改改，已经完全看不出其中的结构，完全不想再碰。正好看中了更顺眼的Hexo Theme，干脆来个一次性大换血，也顺便整理一下这几年来的总结。</p>
<p>Jekyll已经乱成了这样，大量的文件被放在总目录下，杂乱无章：</p>
<pre><code>builderqing.github.io-directory-tree/
├── ._config.yml
├── _data
├── _includes
├── _layouts
├── _sass
├── _templates
├── dataset
├── gallery
├── image
└── project
</code></pre><a id="more"></a>
<p>新建的Hexo使用了hiker theme，好看又好用：</p>
<pre><code>builderqing.github.io-directory-tree/
├── ._config.yml
├── public
├── scaffolds
├── source
└── themes
</code></pre><h5 id="如何解决代码块中出现垂直代码块-vertical-scroll-bar-的方法"><a href="#如何解决代码块中出现垂直代码块-vertical-scroll-bar-的方法" class="headerlink" title="如何解决代码块中出现垂直代码块(vertical scroll bar)的方法"></a>如何解决代码块中出现垂直代码块(vertical scroll bar)的方法</h5><p>模板中如果使用 ``` 来引用code块， 有点不好看。 我需要代码块不仅能高亮部分代码， 还能使用水平滚动条。 在default code选项中， 不仅会出现水平滚动条，也会出现垂直滚动条。 其中一个方法是改变css文件， 步骤如下：</p>
<ol>
<li>打开文件themes/hiker/source/css/_partial/highlight.styl</li>
<li>找到代码块，并做以下的修改</li>
<li>使用``` 来高亮代码块</li>
</ol>
<figure class="highlight css"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br></pre></td><td class="code"><pre><span class="line">$code-block</span><br><span class="line">  background: $highlight-background</span><br><span class="line">  <span class="selector-tag">margin</span>: <span class="selector-tag">article-padding</span> <span class="selector-tag">article-padding</span> * 0</span><br><span class="line">  <span class="selector-tag">padding</span>: 15<span class="selector-tag">px</span> <span class="selector-tag">article-padding</span></span><br><span class="line">  <span class="selector-tag">border-style</span>: <span class="selector-tag">solid</span></span><br><span class="line">  <span class="selector-tag">border-color</span>: <span class="selector-tag">color-border</span></span><br><span class="line">  <span class="selector-tag">border-width</span>: 1<span class="selector-tag">px</span> 0</span><br><span class="line">  <span class="comment">/*change*/</span></span><br><span class="line">  <span class="selector-tag">overflow</span>: <span class="selector-tag">auto</span></span><br><span class="line">  <span class="selector-tag">overflow-y</span>: <span class="selector-tag">hidden</span>;</span><br><span class="line">  <span class="comment">/*end change*/</span></span><br><span class="line">  color: $highlight-foreground</span><br><span class="line">  <span class="selector-tag">font-size</span>: 0<span class="selector-class">.9em</span>;</span><br><span class="line">  <span class="selector-tag">line-height</span>: 1<span class="selector-tag">em</span></span><br></pre></td></tr></table></figure>
<h5 id="如何在首页显示READMORE"><a href="#如何在首页显示READMORE" class="headerlink" title="如何在首页显示READMORE"></a>如何在首页显示READMORE</h5><p>在写markdown的过程中，把想要显示的内容文本后加入以下代码， 剩下的就会被隐藏，只显示readmore</p>
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">show text </span><br><span class="line"></span><br><span class="line">&lt;!--more--&gt;</span><br><span class="line"></span><br><span class="line">other hidden text</span><br></pre></td></tr></table></figure>
