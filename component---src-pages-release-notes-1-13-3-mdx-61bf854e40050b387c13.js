"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[6],{73331:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return h}});var r,i=a(63366),n=(a(67294),a(64983)),o=a(20370),s=["components"],l={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),m={_frontmatter:l},p=o.Z;function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"date"},"23rd November 2021"),(0,n.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You no longer see ",(0,n.kt)("inlineCode",{parentName:"li"},"Maximum active streams violated for this endpoint.")," exception anymore. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3858"},"#3858")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3908"},"#3908")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://DecodingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/encoding/DecodingClient.html"},"type://DecodingClient")," does not raise an exception anymore when duplicated encodings are specified. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3932"},"#3932")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3934"},"#3934"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The duplicated encodings are silently ignored."))),(0,n.kt)("li",{parentName:"ul"},"An early cancelled ",(0,n.kt)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse")," is now correctly decremented from the number of active responses. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3920"},"#3920")),(0,n.kt)("li",{parentName:"ul"},"The text in the description sections is now correctly rendered in ",(0,n.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3917"},"#3917")),(0,n.kt)("li",{parentName:"ul"},"The status of a protocol violation is now correctly logged by ",(0,n.kt)("a",{parentName:"li",href:"type://LoggingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/LoggingService.html"},"type://LoggingService")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3914"},"#3914"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"type://ResponseHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/ResponseHeaders.html"},"type://ResponseHeaders")," is written exactly once when a protocol violation error is raised."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://DocServicePlugin:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServicePlugin.html"},"type://DocServicePlugin")," for gRPC now reads description from ",(0,n.kt)("inlineCode",{parentName:"li"},"bin"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"desc"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"dsc"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"pb"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"protobin"),"\nfile. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3912"},"#3912")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://EurekaEndpointGroupBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/eureka/EurekaEndpointGroupBuilder.html"},"type://EurekaEndpointGroupBuilder")," now fails if an empty string is specified for ",(0,n.kt)("inlineCode",{parentName:"li"},"appName")," and\nother parameters. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3903"},"#3903")),(0,n.kt)("li",{parentName:"ul"},"OkHttp can be used with self-signed certificate in Armeria. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3902"},"#3902"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users can use ",(0,n.kt)("inlineCode",{parentName:"li"},"https://127.0.0.1:")," with the default self-signed certificate."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://GraphqlService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlService.html"},"type://GraphqlService")," now produces a ",(0,n.kt)("inlineCode",{parentName:"li"},"graphql+json")," response when the ",(0,n.kt)("inlineCode",{parentName:"li"},"Accept")," header is ",(0,n.kt)("inlineCode",{parentName:"li"},"*"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3898"},"#3898")),(0,n.kt)("li",{parentName:"ul"},"You can now specify an empty path for the request path. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3824"},"#3824")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3942"},"#3942"))),(0,n.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,n.kt)(c,{usernames:["anuraaga","eisig","heowc","hyangtack","ikhoon","jrhee17","minwoox","ohadgur","techno","trustin"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,t,a){a(88025);var r=a(1923),i=a(25444),n=a(67294),o=a(55746),s=a(8284),l=a(96759),c=a(46731),m=a(9396),p=r.Z.Title,h=Object.keys(s)[0],d=u(h);function u(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(o).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(s).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var v=(0,m.Z)(e.location),k=e.version||u(v);return k.match(/^[0-9]/)||(k=void 0),n.createElement(c.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:k?k+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),k&&k!==d?n.createElement(l.Ch,null,"You're seeing the release note of an old version. Check out"," ",n.createElement(i.Link,{to:h},"the latest release note"),"."):"",k?n.createElement(p,{id:"release-notes",level:1},n.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),k," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20230426-newsletter-5":"Armeria Newsletter vol. 5","/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.26.0":"v1.26.0","/release-notes/1.25.2":"v1.25.2","/release-notes/1.25.1":"v1.25.1","/release-notes/1.25.0":"v1.25.0","/release-notes/1.24.3":"v1.24.3","/release-notes/1.24.2":"v1.24.2","/release-notes/1.24.1":"v1.24.1","/release-notes/1.24.0":"v1.24.0","/release-notes/1.23.1":"v1.23.1","/release-notes/1.23.0":"v1.23.0","/release-notes/1.22.1":"v1.22.1","/release-notes/1.22.0":"v1.22.0","/release-notes/1.21.0":"v1.21.0","/release-notes/1.20.3":"v1.20.3","/release-notes/1.20.2":"v1.20.2","/release-notes/1.20.1":"v1.20.1"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-13-3-mdx-61bf854e40050b387c13.js.map