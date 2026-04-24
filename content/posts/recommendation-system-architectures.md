+++
title = "Notes of System Architectures for Personalization and Recommendation"
date = 2020-02-07T22:18:08.000Z
draft = false
url = "/2020/02/07/page/"
tags = ["Recommendation", "System Design"]
+++
<p>Here is the overall system diagram for recommendation systems for recommendation, each of which contains one or more machine learning algorithms.</p>
<figure>
<img src="https://cdn-images-1.medium.com/max/1600/1*qqTSkHNOzukJ5r-b54-wJQ.png" alt="img1" /><figcaption>img1</figcaption>
</figure>
<p><strong>Online Computation Advantages&amp;Disadvantages</strong></p>
<p>+:online computation can respond quickly to events and use the most recent data.</p>
<p>-:make it harder to fit complex and computationally costly algorithms in this approach.</p>
<p>-: additional infrastructure required for online data, like horizontal scaling to achieve throughput</p>
<p><strong>Offline Computation Advantages&amp;Disadvantages</strong></p>
<p>+: offline computation allows for more choices in algorithmic complex algorithms, and less limitations on the amount of data that is used.</p>
<p>+: simpler engineering requirements: if your new algorithms are slower to execute, we can choose to deploy more EC2 instances, instead of tuning performance.</p>
<p>-: will not react quickly to changes in contexts.</p>
<p>-: higher requires have infrastructure for storing, computing, and accessing large sets of pre computation results.</p>
<p><strong>Nearline Computation Advantages&amp;Disadvantages</strong></p>
<p>+: computation is performed exactly like online case, which is done in response to user events so that the system can be more responsive between requires.</p>
<p><strong>How to choose the processing</strong></p>
<ul>
<li>using offline computation as a fallback</li>
<li>Precompute part of a result with an offline process and leave the less costly or more context-sensitive parts of the algorithms for online computation.</li>
<li>Matrix Factorization: more natural fit for hybrid online/offline modeling-some facts can be precomputed offline while other can be updated in real time to create more fresh result.</li>
<li>Clustering: allow for offline computation of the cluster centers and online assignment of cluster.</li>
</ul>
<p><img src="/page_illustration/pg1.png" title="pg1" /></p>
<p><strong>Information Models</strong></p>
<p>consider the publish-subscribe framework <em>Netflix Hermes</em> use</p>
<ol type="1">
<li>notify subscribers when the result of a query is ready</li>
<li>support different repositories</li>
<li>Should transparently handle errors</li>
</ol>
<p><strong>Goal 1</strong>: turn member interaction data into insights that can be used to improve online experience.</p>
<p><img src="/page_illustration/pg2.png" title="pg2" /></p>
<p><strong>Reference</strong>:</p>
<p>https://netflixtechblog.com/netflix-recommendations-beyond-the-5-stars-part-1-55838468f429</p>
<p>https://netflixtechblog.com/system-architectures-for-personalization-and-recommendation-e081aa94b5d8</p>
