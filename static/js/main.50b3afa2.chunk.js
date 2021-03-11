(this["webpackJsonpreact_movies-list-filter"]=this["webpackJsonpreact_movies-list-filter"]||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(3),l=a.n(n),s=(a(16),a(4)),m=a(5),o=a(6),c=a(10),d=a(8),h=(a(17),a(9)),g=a(1),p=a.n(g),u=(p.a.shape({title:p.a.string.isRequired,description:p.a.string,imgUrl:p.a.string.isRequired,imdbUrl:p.a.string.isRequired}),a(20),a(21),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:n},"IMDB"))))});function v(e){var t=e.movies,a=e.query,i=Object(h.a)(t).filter((function(e){return e.title.toLowerCase().startsWith(a.toLowerCase())||e.description.toLowerCase().startsWith(a.toLowerCase())}));return r.a.createElement("div",{className:"movies"},i.map((function(e){return r.a.createElement(u,{key:e.imdbId,title:e.title,description:e.description,imgUrl:e.imgUrl,imdbUrl:e.imdbUrl})})))}u.defaultProps={description:""},v.defaultProps={movies:[],query:""};var w=a(7),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.changeQuery=function(t){var a=t.target,i=a.value,r=a.name;e.setState(Object(s.a)({},r,i))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.query,t=this.changeQuery;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"search-query",className:"label"},"Search movie"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"text",id:"search-query",value:e,className:"input",name:"query",placeholder:"Type search word",onChange:t})))),r.a.createElement(v,{movies:w,query:e})),r.a.createElement("div",{className:"sidebar"},"Sidebar goes here"))}}]),a}(i.Component);l.a.render(r.a.createElement(b,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.50b3afa2.chunk.js.map