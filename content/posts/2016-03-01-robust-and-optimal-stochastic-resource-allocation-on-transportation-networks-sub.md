+++
title = "Robust and Optimal Stochastic Resource Allocation on Transportation Networks Subject to Disruptive Events"
date = 2016-03-01T21:51:37.000Z
draft = false
url = "/2016/03/01/03012016-1651/"
tags = ["Python", "Optimization", "Maximum Flow"]
categories = ["Python"]
+++
<!-- 
[img id]: https://www.hdwallpapers.net/previews/water-plant-close-up-979.jpg  "Optional title attribute"
![Alt text][img id] -->
<blockquote>
<p> The models I built for solving resource allocation problem on transportation networks. Different size of directed graphs have been considered, and comparison between models have been made. Python Gurobi is used to realize the optimization process.</p>
</blockquote>
<p>Resource allocation is the assignment of available resources to various uses, which is closely related to the network interdiction problem depends on our objects. The network interdiction problem ask to find a special number of edges whose removal from the network minimizes the maximum flow. Various examples could be found in areas such as military planning, hospital infection control or poison food interdiction. Our goals in such examples are the same: to determine the worst-case scenario, after the realization of uncertainty. </p>
<a id="more"></a>
<blockquote class="pullquote right"><p>contentf af afajkhdfjk</p>
</blockquote>
<p>Imagine that there are refineries that process several million barrels of crude oil every day, and pipelines are used to transport crude oil to consumption centers. There are intermediate pump stations in long distance networks to keep the crude oil moving smoothly. However, pump stations and pipelines may be out of service. Hence, it is important to manage the oil transportation system in such a way that it is capable of coping with such situations and to reduce the amount of storage of crude oil at consumption centers as much as possible. </p>
<p>The bold red lines in the above graphs are the critical edges that determines the maximum flow, assuming the realization of uncertainty. </p>
  <svg viewbox="0 0 560 168" class="header-lockup"><br/>  <text transform="matrix(1 0 0 1 7 126.14385)"><tspan x="80" y="-45" font-family="Righteous" font-size="70px">QING</tspan><br/><br/><br/><svg viewbox="0 0 560 168" class="header-lockup"><br/><text transform="matrix(1 0 0 1 7 126.14385)"><tspan x="80" y="-45" font-family="Righteous" font-size="70px">QING</tspan><br/><br/><tspan x="150" y="28" font-family="Righteous" font-size="69px">JOURNAL</tspan><br/><br/></text><br/><br/><circle fill="#e64040" stroke="#e64040" stroke-width="4" cx="250" cy="91" r="22"/><br/><text class="words animate-right" transform="matrix(1 0 0 1 235.5 102.4)"><br/>  <tspan x="0" y="0" font-family="Pacifico" font-size="22px" fill="white">‘S</tspan><br/></text><br/><br/></svg>

<p>```</p>
</text></svg>
