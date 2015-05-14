require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
require(['lib/jquery.min','a','b','c','d'],function($,a,b,c,d){
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log("加载成功");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    d.add(3,5);
});