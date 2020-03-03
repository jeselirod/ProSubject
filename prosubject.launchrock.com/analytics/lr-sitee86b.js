(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

var gaCall = function(a,b,c,d,e,f,h) {
    ga(a,b,c,d,e,f,h);
};

gaCall('create', 'UA-21058689-4', 'auto', {
    name: 'lr_sites_ga',
    allowLinker: true
});

//lr_site_ga
gaCall('lr_sites_ga.require', 'displayfeatures');
gaCall('lr_sites_ga.send', 'pageview');
gaCall('lr_sites_ga.require', 'linker');
gaCall('lr_sites_ga.linker:autoLink', ['fundable.com', 'clarity.fm', 'startups.co', 'startups.com', 'bizplan.com', 'launchrock.com', 'killerstartups.com']);
