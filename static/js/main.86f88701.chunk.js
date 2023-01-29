(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(6),c=i.n(a),n=(i(15),i(9)),s=i(2),l=i(10),r=i(1),o=(i(16),i(17),i(18),i(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},b=i(7),j=i.n(b);var u=function(e){var t,i=e.name,a=e.value,c=e.label,n=void 0===c?i:c,l=e.required,d=void 0!==l&&l,m=e.onChange,b=void 0===m?function(){}:m,u=e.hasError,h=Object(r.useState)((function(){return"".concat(i,"-").concat(Math.random().toString().slice(2))})),O=Object(s.a)(h,1)[0],g=Object(r.useState)(!1),p=Object(s.a)(g,2),v=p[0],f=p[1];return t=v&&d&&!a,Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:O,children:n}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{id:O,"data-cy":"movie-".concat(i),className:j()("input",{"is-danger":t}),type:"text",placeholder:"Enter ".concat(n),value:a,onChange:function(e){return b(e.target.value)},onBlur:function(){return f(!0)}})}),t&&Object(o.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},h=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),c=a[0],n=a[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),m=d[0],b=d[1],j=Object(r.useState)(""),h=Object(s.a)(j,2),O=h[0],g=h[1],p=Object(r.useState)(""),v=Object(s.a)(p,2),f=v[0],x=v[1],M=Object(r.useState)(""),N=Object(s.a)(M,2),w=N[0],k=N[1],U=Object(r.useState)(""),y=Object(s.a)(U,2),I=y[0],T=y[1],B=Object(r.useCallback)((function(e){return b(e)}),[b]),S=Object(r.useCallback)((function(e){return g(e)}),[g]),_=Object(r.useCallback)((function(e){return x(e)}),[x]),C=Object(r.useCallback)((function(e){return k(e)}),[k]),z=Object(r.useCallback)((function(e){return T(e)}),[T]),A={title:m,description:O,imgUrl:f,imdbUrl:w,imdbId:I};return Object(o.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t(A),n((function(e){return e+1})),b(""),g(""),x(""),k(""),T("")},children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsx)(u,{name:"title",label:"Title",value:m,onChange:B,required:!0}),Object(o.jsx)(u,{name:"description",label:"Description",value:O,onChange:S}),Object(o.jsx)(u,{name:"imgUrl",label:"Image URL",value:f,onChange:_,required:!0}),Object(o.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:w,onChange:C,required:!0}),Object(o.jsx)(u,{name:"imdbId",label:"Imdb ID",value:I,onChange:z,required:!0}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!(m&&f&&w&&I),children:"Add"})})})]},c)},O=i(8).map((function(e){return Object(l.a)({},e)})),g=function(){var e=Object(r.useState)(O),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(h,{onAdd:function(e){var t;t=e,a([].concat(Object(n.a)(i),[t]))}})})]})};c.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.86f88701.chunk.js.map