+++
title = "Structure of A Python Project"
date = 2018-02-25T04:10:43.000Z
draft = false
url = "/2018/02/24/02242018-1110/"
tags = ["Python"]
categories = []
+++
<h4 id="structure-of-the-repository"><a href="#structure-of-the-repository" class="headerlink" title="structure of the repository"></a>structure of the repository</h4><ul>
<li>Project name</li>
<li>project description</li>
<li>Bunch o’files</li>
</ul>
<h4 id="Sample-Respository"><a href="#Sample-Respository" class="headerlink" title="Sample Respository"></a>Sample Respository</h4><figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br></pre></td><td class="code"><pre><span class="line">1. README.rst</span><br><span class="line">2. LICENSE</span><br><span class="line">3. setup.py</span><br><span class="line">4. requirements.txt</span><br><span class="line">5. sample/__init__.py</span><br><span class="line">6. sample/core.py</span><br><span class="line">7. sample/helpers.py</span><br><span class="line">8. docs/conf.py</span><br><span class="line">9. docs/index.rst</span><br><span class="line">10.tests/test_basic.py</span><br><span class="line">11.tests/test_advanced.py</span><br></pre></td></tr></table></figure>
<a id="more"></a>
<p>5-7: if you module consists of only one file, ./smple.py</p>
<p>2: check out <a href="http://choosealicense.com/" target="_blank" rel="noopener">choosealicense.com</a></p>
<p>3: some module package is at the root of your repository</p>
<p>4: specify the dependencies required to contribute to the project: testing, building, and generating documentation</p>
<p>8-9: package reference documentation</p>
<p>10-11: package integration and unit tests</p>
