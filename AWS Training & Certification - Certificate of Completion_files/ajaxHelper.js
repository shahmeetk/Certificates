/** Copyright 2020 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","stringHelper","argumentNullError","argumentError"],function($,a,b,c){var d=function(){};return d.invokeWebApi=function(d,e,f,g,h,i,j,k){var l;if(a.isStringNullOrWhiteSpace(d))throw b.createInstance("httpMethod");if(a.isStringNullOrWhiteSpace(e))throw b.createInstance("url");if("get"!==(d=d.toLowerCase())&&"post"!==d&&"put"!==d&&"delete"!==d)throw c.createInstance("HTTP method '"+d+"' is not supported.");l={type:d,url:e,data:k,contentType:"application/json; charset=utf-8",context:g,success:function(a){h&&h(g,a)},error:function(a,b,c){i&&i(g,a,b,c)},complete:function(a,b,c){j&&j(g,a,b,c)},async:f},$.ajax(l)},d});