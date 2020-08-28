require(['gitbook', 'jQuery'], function (gitbook, $) {
  var colorRibbons = {
    red: {
      src: 'https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-red.png'
    },
    green: {
      src: 'https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-green.png'
    },
    darkblue: {
      src: 'https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-darkblue.png'
    },
    orange: {
      src: 'https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-orange.png'
    },
    gray: {
      src: 'https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-gray.png'
    },
  };
  
  var forkmeRibbon;
  var pluginConfig = {};
  function initializePlugin(config) {
    pluginConfig = config['forkmegithub-cn'];

    var colorRibbon = colorRibbons[pluginConfig.color];
    forkmeRibbon
      = '<a id="forkmegithub" href="' + pluginConfig.url + '">'
      + '<img src="' + colorRibbon.src + '" alt="Fork me on GitHub"'
      + '"></img>'
      + '</a>'
      ;
  }

  function getPluginConfig() {
    return pluginConfig;
  }

  gitbook.events.bind('start', function (e, config) {
    initializePlugin(config);

    gitbook.toolbar.createButton({
      icon: 'fa fa-github',
      label: 'GitHub',
      position: 'right',
      onClick: function() {
        window.open(pluginConfig.url);
      }
    });
  });

  gitbook.events.bind('page.change', function() {
    var bodyInner = $('.book .book-body .body-inner');
    bodyInner.append(forkmeRibbon);
  });
});

