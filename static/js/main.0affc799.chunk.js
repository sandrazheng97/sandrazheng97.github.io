(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports={container:"AboutPage_container__2qbB5",pictureContainer:"AboutPage_pictureContainer__17nBZ",picture:"AboutPage_picture__1wRng",aboutDivider:"AboutPage_aboutDivider__34cKB",info:"AboutPage_info__3bgiO",infoTitle:"AboutPage_infoTitle__zQ7yL",infoBody:"AboutPage_infoBody__2b7J9"}},17:function(e,a,t){e.exports={container:"ShopPage_container__3zCXU",pictureContainer:"ShopPage_pictureContainer__Qvh_k",picture:"ShopPage_picture__2Vm_f",aboutDivider:"ShopPage_aboutDivider__1R8fK",info:"ShopPage_info__4pbxm",infoTitle:"ShopPage_infoTitle__2v_N3",infoBody:"ShopPage_infoBody__6CXqi"}},23:function(e,a,t){e.exports={app:"App_app__dCsik",appBody:"App_appBody__2Vn6Q",copyright:"App_copyright__1wNwa"}},3:function(e,a,t){e.exports={container:"Carousel_container__SYPHw",cancelContainer:"Carousel_cancelContainer__1OBaQ",cancelButton:"Carousel_cancelButton__2tJrj",carouselContainer:"Carousel_carouselContainer__a8ZZd",carouselItem:"Carousel_carouselItem__sNGlz",carouselHeader:"Carousel_carouselHeader__gWHSD",carouselDescription:"Carousel_carouselDescription__1TgyR",carouselItemImage:"Carousel_carouselItemImage__2FFZZ",carouselItemPrimary:"Carousel_carouselItemPrimary__3MmNK",carouselItemSecondary:"Carousel_carouselItemSecondary__3dalG",arrow:"Carousel_arrow__2bSEQ",thumbnailsContainer:"Carousel_thumbnailsContainer__1Ua1V",arrowsContainer:"Carousel_arrowsContainer__1ti--"}},35:function(e,a,t){e.exports=t(61)},40:function(e,a,t){},48:function(e,a,t){},55:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),s=t.n(i),l=(t(40),t(5)),o=t(6),c=t(8),m=t(7),h=t(9),u=t(11),g=t(16),d=t(23),p=t.n(d),f=t(10),y=t.n(f),b=(t(48),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={headerColor:"white"},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"handleScroll",value:function(e){this.setState({headerColor:window.scrollY>20?"#ffe967":"white"})}},{key:"render",value:function(){var e=this.state.headerColor;return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header",style:{backgroundColor:e}},r.a.createElement("div",{className:"header-item navigation"},r.a.createElement(u.c,{className:"link",to:"/illustration"},"ILLUSTRATION"),r.a.createElement(u.c,{className:"link",to:"/design"},"DESIGN"),r.a.createElement(u.c,{className:"link",to:"/shop"},"SHOP"),r.a.createElement(u.c,{className:"link",to:"/about"},"ABOUT")),r.a.createElement("div",{className:"header-item title-container"},r.a.createElement(y.a,null,r.a.createElement("img",{className:"header-title",alt:"name",src:"/images/name.png"}))),r.a.createElement("div",{className:"header-item social"},r.a.createElement("a",{href:"https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fszheng__%2F&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"social-item fab fa-instagram"})),r.a.createElement("a",{href:"https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsandra-zheng-8909aa187%2F&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"social-item fab fa-linkedin-in"})),r.a.createElement("a",{href:"https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.behance.net%2Fsandrazheng&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"social-item fab fa-behance"})),r.a.createElement("a",{href:"mailto:sandrazhengart@gmail.com",rel:"noopener noreferrer"},r.a.createElement("i",{className:"social-item far fa-envelope"})))),r.a.createElement("div",{className:"placeholder"}))}}]),a}(n.Component)),v=t(2),_=(t(55),[{primary:"Floral",secondary:"Mural Design",src:"images/sweet_compound.jpg",width:6,height:3,imageStyles:{transform:"scale(1.2)",transformOrigin:"40% 35%"}},{primary:"Sleeping Dogs",secondary:"Tote Bag Design",src:"images/dog_tote.jpg",width:2,height:3,imageStyles:{transform:"scale(1.4)",transformOrigin:"40% 35%"}},{primary:"Creature Comforts",secondary:"Exhibt Poster Design",src:"images/poster_ad.jpg",width:4,height:3,imageStyles:{transform:"scale(1.2)",transformOrigin:"12% 35%"}},{primary:"Wander, Discover, Dream",secondary:"3 Series Illustration",src:"images/3_windows.jpg",width:6,height:3,imageStyles:{transform:"scale(1.4)",transformOrigin:"30% 35%"}},{primary:"Day Time",secondary:"Throw Pillow Design",src:"images/owl_pillow.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"40% 40%"}},{primary:"Night Time",secondary:"Throw Pillow Design",src:"images/bunny_pillow.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"40% 40%"}},{primary:"Hunter Green",secondary:"Front & Back Cover Illustration",src:"images/turtle_cover.jpg",width:6,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"30% 50%"}},{primary:"Tomorrow Land",secondary:"Poster Event Design",src:"images/tmrland_mockup.jpg",width:2,height:3,imageStyles:{transform:"scale(1.8)",transformOrigin:"30% 40%"}},{primary:"Bergamot & Lime",secondary:"Scented Candle Packaging",src:"images/scented_candle.jpg",width:4,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"30% 50%"}},{primary:"Lavender Berry",secondary:"Chocolate Flavored Powder Packaging",src:"images/lavender_berry.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"50% 50%"}},{primary:"Primrose Lemon",secondary:"Chocolate Flavored Powder Packaging",src:"images/primrose_lemon.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"50% 50%"}}]),w=[{primary:"Wander",secondary:"Digital",src:"images/wander.jpg",width:2,height:2},{primary:"Discover",secondary:"Digital",src:"images/discover.jpg",width:2,height:2},{primary:"Dream",secondary:"Digital",src:"images/dream.jpg",width:2,height:2},{primary:"Radio Snake",secondary:"Watercolor",src:"images/radio_snake.jpg",width:3,height:4},{primary:"Extinct Nature",secondary:"Ink & Watercolor",width:3,src:"images/whale.jpg",imageStyles:{transform:"scale(1.5)",transformOrigin:"40% 40%"}},{primary:"Mug Towers",secondary:"Ink & Watercolor",src:"images/towers.jpg",width:3,height:2,imageStyles:{transform:"scale(1.1)",transformOrigin:"40% 40%"}},{primary:"Egg-Plant",secondary:"Digital",src:"images/final_eggplant.jpg",width:3,height:2,imageStyles:{transform:"scale(1.3)",transformOrigin:"40% 40%"}},{primary:"VANCOUVER",secondary:"Digital",src:"images/finalmap.jpg",width:3,height:4,imageStyles:{transform:"scale(1.8)",transformOrigin:"20% 25%"}},{primary:"Fish Cake",secondary:"Intaglio Print",width:3,src:"images/fishcake.jpg",imageStyles:{transform:"scale(1.2)",transformOrigin:"30% 20%"}},{primary:"Creature Comforts",secondary:"Pen, Watercolor, & Digital",width:3,height:6,src:"images/creature_comforts.jpg",imageStyles:{transform:"scale(1.4)",transformOrigin:"15% 50%"}},{primary:"Living Through Two Shootings",secondary:"Digital",width:3,height:2,src:"images/twoshootings.jpg",imageStyles:{transform:"scale(1.0)",transformOrigin:"30% 70%"}},{primary:"Musical Quintet",secondary:"Ink & Digital",width:3,height:2,src:"images/quintet.jpg",imageStyles:{transform:"scale(0.9)",transformOrigin:"12% 35%"}},{primary:"Sleeping Dogs",secondary:"Silkscreen Print",width:3,height:2,src:"images/sleeping_dog.jpg"}],E=t(22),C=function(e){function a(e){var t;Object(l.a)(this,a),t=Object(c.a)(this,Object(m.a)(a).call(this,e));var n="/"!==e.match.path?e.match.path:"/illustration",i="/illustration"===n?w:_;return t.state={source:n,elements:i},t.onScroll=t.onScroll.bind(Object(v.a)(Object(v.a)(t))),t.profileElement=r.a.createRef(),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"getGridHeight",value:function(){return Math.floor((this.profileElement.current.offsetWidth-20)/6)}},{key:"onScroll",value:function(){this.setState({gridHeight:this.getGridHeight()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.profileElement,className:"profile"},r.a.createElement(E.a,{handleWidth:!0,handleHeight:!0,onResize:this.onScroll}),r.a.createElement("div",{className:"gallery",style:{gridAutoRows:this.state.gridHeight,gridGap:10}},this.state.elements.map(function(a,t){var n=a.height,i=a.src,s=a.width,l=a.imageStyles,o={};return n&&(o.gridRowEnd="span "+parseInt(n)),s&&(o.gridColumnEnd="span "+parseInt(s)),r.a.createElement("div",{key:t,className:"card",style:o},r.a.createElement(u.b,{to:"/carousel"+e.state.source+"/"+parseInt(t)},r.a.createElement(y.a,null,r.a.createElement("img",{alt:i,src:i,style:l}))))})))}}]),a}(n.Component),j=t(25),k=t.n(j),O=(t(56),t(19)),S=t.n(O),N=t(33),T=t.n(N),P=(t(60),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(v.a)(Object(v.a)(t))),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleClick",value:function(){this.props.onClick&&this.props.onClick(this.props.value)}},{key:"render",value:function(){var e=this.props.src;return r.a.createElement("div",{className:T()("thumbnail",{"thumbnail-selected":this.props.selected}),onClick:this.handleClick},r.a.createElement(y.a,null,r.a.createElement("img",{alt:e,src:e,align:"middle"})))}}]),a}(n.Component)),I=t(3),D=t.n(I);function z(e,a){return(e%a+a)%a}var A=function(e){function a(e){var t;Object(l.a)(this,a),t=Object(c.a)(this,Object(m.a)(a).call(this,e));var n=e.match.params.source,i="design"===n?_:w;console.log(n);var s=parseInt(e.match.params.index)||0;return console.log(s),t.state={source:n,value:s,thumbnail:s,elements:i,thumbnails:i,thumbnailsContainerWidth:1,showThumbnails:!0},t.onChangeCarousel=t.onChangeCarousel.bind(Object(v.a)(Object(v.a)(t))),t.onChangeThumbnails=t.onChangeThumbnails.bind(Object(v.a)(Object(v.a)(t))),t.onClickThumbnail=t.onClickThumbnail.bind(Object(v.a)(Object(v.a)(t))),t.onClickArrow=t.onClickArrow.bind(Object(v.a)(Object(v.a)(t))),t.onResize=t.onResize.bind(Object(v.a)(Object(v.a)(t))),t.carouselContainerElement=r.a.createRef(),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onResize()}},{key:"onResize",value:function(){var e=this.carouselContainerElement.current.clientHeight,a=this.carouselContainerElement.current.clientWidth,t=Math.min(e,a),n=e>=500&&a>=600;if(console.log("resize %d %d %s",e,a,n.toString()),n)this.setState({showThumbnails:n,carouselWidth:a,carouselImageHeight:t-200-20,thumbnailsContainerWidth:Math.min(a,1e3)});else{this.setState({showThumbnails:n,carouselWidth:a,carouselImageHeight:t-180,thumbnailsContainerWidth:180})}}},{key:"onChangeCarousel",value:function(e){this.props.history.push("/carousel/"+this.state.source+"/"+parseInt(z(e,this.state.thumbnails.length))),this.setState({value:e,thumbnail:e})}},{key:"onChangeThumbnails",value:function(e){this.state.showThumbnails?this.setState({thumbnail:e}):this.onClickThumbnail(e)}},{key:"onClickThumbnail",value:function(e){this.props.history.push("/carousel/"+this.state.source+"/"+parseInt(z(e,this.state.thumbnails.length)));var a=this.getThumbnailIndex(this.state.thumbnail,parseInt(e));this.setState({value:a,thumbnail:a})}},{key:"onClickArrow",value:function(e){this.onChangeThumbnails(this.state.thumbnail+e)}},{key:"getThumbnailIndex",value:function(e,a){var t=z(e,this.state.elements.length);return Math.abs(a-t)>2?e+(a>t?a-(t+this.state.elements.length):a+this.state.elements.length-t):e+(a-t)}},{key:"render",value:function(){var e=this,a=this.state,t=a.showThumbnails,n=a.carouselWidth,i=a.carouselImageHeight,s=a.thumbnail,l=a.elements,o=a.value;return r.a.createElement("div",{className:D.a.container,ref:this.carouselContainerElement},r.a.createElement(E.a,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}),r.a.createElement("div",{className:D.a.cancelContainer},r.a.createElement(u.b,{to:"/"+this.state.source},r.a.createElement(S.a,{name:"times",className:D.a.cancelButton}))),r.a.createElement("div",{className:D.a.carouselContainer},r.a.createElement(k.a,{infinite:!0,centered:!0,value:o,onChange:this.onChangeCarousel,itemWidth:n,slides:l.map(function(e,a){var t=e.primary,s=e.secondary,l=e.src;return r.a.createElement("div",{key:a,className:D.a.carouselItem,style:{height:i,width:n}},r.a.createElement("div",{className:D.a.carouselHeader},r.a.createElement("div",{className:D.a.carouselDescription},r.a.createElement("div",{className:D.a.carouselItemPrimary},t||"Primary text"),r.a.createElement("div",{className:D.a.carouselItemSecondary},s||"Secondary text"))),r.a.createElement("div",{className:D.a.carouselItemImage},r.a.createElement("img",{alt:l,src:"/"+l})))})}),r.a.createElement("div",{className:D.a.thumbnailsContainer,style:{marginTop:20}},t?r.a.createElement(k.a,{infinite:!0,centered:!0,arrowLeft:r.a.createElement(S.a,{className:D.a.arrow,name:"angle-left"}),arrowRight:r.a.createElement(S.a,{className:D.a.arrow,name:"angle-right"}),addArrowClickHandler:!0,className:D.a.thumbnails,value:t?s:o,onChange:this.onChangeThumbnails,slidesPerScroll:t?3:1,itemWidth:200,slides:l.map(function(a,t){var n=a.src;return r.a.createElement(P,{value:t,src:"/"+n,onClick:e.onClickThumbnail,selected:z(o,e.state.thumbnails.length)===t})})}):r.a.createElement("div",{className:D.a.arrowsContainer},r.a.createElement(S.a,{className:D.a.arrow,name:"angle-left",onClick:function(){e.onClickArrow(-1)}}),r.a.createElement(S.a,{className:D.a.arrow,name:"angle-right",onClick:function(){e.onClickArrow(1)}})))))}}]),a}(n.Component),F=t(15),B=t.n(F),H=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e="/images/sleeping_village.jpg";return r.a.createElement("div",{className:B.a.container},r.a.createElement("div",{className:B.a.pictureContainer},r.a.createElement("div",{className:B.a.picture},r.a.createElement(y.a,null,r.a.createElement("img",{alt:e,src:e,align:"middle"})))),r.a.createElement("div",{className:B.a.aboutDivider}),r.a.createElement("div",{className:B.a.info},r.a.createElement("div",{className:B.a.infoTitle},"INFO"),r.a.createElement("div",{className:B.a.infoBody},"Sandra Zheng is a Canadian born illustrator and designer who recently graduated from ArtCenter College of Design. She is based in Vancouver, BC. Her illustrations usually depict nature with playful interactions of her own whimsical characters.")))}}]),a}(n.Component),R=t(17),W=t.n(R),L=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e="/images/sleeping_village.jpg";return r.a.createElement("div",{className:W.a.container},r.a.createElement("div",{className:W.a.pictureContainer},r.a.createElement("div",{className:W.a.picture},r.a.createElement(y.a,null,r.a.createElement("img",{alt:e,src:e,align:"middle"})))),r.a.createElement("div",{className:W.a.aboutDivider}),r.a.createElement("div",{className:W.a.info},r.a.createElement("div",{className:W.a.infoBody},r.a.createElement("div",null,"We\u2019re working on our site at the moment."),r.a.createElement("p",null,"Please check back soon."))))}}]),a}(n.Component),x=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:p.a.app},r.a.createElement(b,null),r.a.createElement("div",{className:p.a.appBody,ref:this.profileElement},r.a.createElement(g.a,{exact:!0,path:"/",component:C}),r.a.createElement(g.a,{path:"/illustration",component:C}),r.a.createElement(g.a,{path:"/design",component:C}),r.a.createElement(g.a,{path:"/about",component:H}),r.a.createElement(g.a,{path:"/shop",component:L}),r.a.createElement(g.a,{exact:!0,path:"/carousel/:source/:index?",component:A}),r.a.createElement("div",{className:p.a.copyright},"Copyright \xa9 2019 Sandra Zheng"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.0affc799.chunk.js.map