/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_shows_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shows.js */ \"./src/modules/shows.js\");\n/* harmony import */ var _modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n/* harmony import */ var _assets_KANBAN_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/KANBAN.png */ \"./src/assets/KANBAN.png\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n\n\n\n\n\n\nconst image = document.querySelector('#logo');\nimage.setAttribute('src', _assets_KANBAN_png__WEBPACK_IMPORTED_MODULE_4__);\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_shows_js__WEBPACK_IMPORTED_MODULE_2__.arrow)().then(movies => {\n    movies.forEach((movie, index) => {\n      (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie, index);\n    });\n    (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movies);\n    (0,_modules_shows_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n    (0,_modules_shows_js__WEBPACK_IMPORTED_MODULE_2__.like)();\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_5__.commentLayout)();\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_5__.commentBtn)(movies);\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_5__.closePopup)();\n  });\n});\n\n//# sourceURL=webpack://kanban/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"commentBtn\": () => (/* binding */ commentBtn),\n/* harmony export */   \"commentLayout\": () => (/* binding */ commentLayout),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _commentsCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter */ \"./src/modules/commentsCounter.js\");\n\nconst involvementId = 'sGPblqXwvYvemdbE1QYB';\nconst commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;\nconst nav = document.querySelector('.navigation');\nconst commentLayout = index => {\n  nav.insertAdjacentHTML('afterend', ` <div class=\"container-fluid popup p-5 mt-5\" id=\"popup-${index}\">\n  <div class=\"row main-row\">\n  <div class=\"col col-12 img-section\">\n      <div class=\"row image-row\">\n          <div class=\"col col-11 d-flex justify-content-center\">\n              <div class=\"img-div\">\n                <img id=\"popup-img\" src=\"\" alt=\"\" srcset=\"\">\n              </div>\n          </div>\n          <button class=\"col col-1 mt-3 btn close\">\n              <i class=\"fa-solid fa-xmark fa-2xl exit-btn\"></i>\n          </button>\n      </div>\n  </div>\n  <div class=\"col col-12 pt-3 title-section\">\n      <div class=\"row title-row\">\n          <div class=\"col col-12 d-flex justify-content-center\">\n              <h2>Arrow Season </h2>\n          </div>\n          <div class=\"col col-12 ps-4\"></div>\n          <div class=\"col col-6 ps-5\"></div>\n          <div class=\"col col-12 pt-1 ps-4\"></div>\n      </div>\n  </div>\n  <div class=\"col col-12 pt-3 mt-4 comments-section\" id=\"comments-${index}\">\n      <div class=\"row coments-container comments-row\">\n          <div class=\"col col-12 d-flex count-comments justify-content-center\">\n          </div>\n          <div class=\"col col-12 ps-4\">\n           <ul class=\"commentsList\">\n           </ul>\n          </div>\n      </div>\n  </div>\n  <div class=\"col col-12 comment-section mt-4 pt-3\">\n      <div class=\"col col-12 d-flex justify-content-center\">\n          <h5 class=\"mb-\">Add a comment</h5>\n      </div>\n      <div class=\"col col-12 form-section\">\n          <form id=\"form-submit-comment\" class=\"comment-form\">\n              <div class=\"mt-3 ps-4\">\n              <label for=\"Your name\"hidden>Your name</label>\n              <input type=\"text\" class=\"form-control name-input\" id=\"your-name\" placeholder=\"Your name\" required>\n              </div>\n              <div class=\"mt-3 ps-4\">\n              <label for=\"Your insights\"hidden>Your insights</label>\n              <textarea type=\"text\" class=\"form-control review-input\" id=\"your-insights\" placeholder=\"Your insights\" required></textarea>\n              </div>\n              <div class=\" mt-3 ps-4\">\n                  <button type=\"submit\" id=\"form-submit\" class=\"btn btn-outline-light\">comment</button>\n              </div>\n          </form>\n      </div>\n  </div>\n</div>\n    </div>\n    `);\n};\nconst getComment = async itemId => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments?item_id=${itemId}`);\n    const commentUser = await response.json();\n    return commentUser;\n  } catch (error) {\n    return error;\n  }\n};\nconst postComment = async (itemId, name, comment) => {\n  const response = await fetch(commentUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      item_id: itemId,\n      username: name,\n      comment\n    })\n  });\n  const data = await response.text();\n  getComment(itemId);\n  return data || null;\n};\nconst commentBtn = async movies => {\n  const commentPopUp = document.querySelectorAll('.comments-btn');\n  const popup = document.querySelector('.popup');\n  commentPopUp.forEach(button => {\n    button.addEventListener('click', async () => {\n      const index = parseInt(button.dataset.movies, 10);\n      const movie = movies[index];\n      const imgSrc = movie.image.medium;\n      const {\n        summary\n      } = movie;\n      const season = movie.number;\n      document.getElementById('popup-img').setAttribute('src', imgSrc);\n      document.querySelector('.title-section h2').textContent = `Arrow Season ${season}`;\n      document.querySelector('.title-section .ps-4').innerHTML = summary;\n      popup.classList.add('active');\n      (0,_commentsCounter__WEBPACK_IMPORTED_MODULE_0__.commentsCounter)(movie.id);\n      const commentFrom = document.querySelector('#form-submit-comment');\n      const commentList = document.querySelector('.commentsList');\n      commentFrom.addEventListener('submit', async e => {\n        e.preventDefault();\n        const formName = document.querySelector('#your-name');\n        const formComment = document.querySelector('#your-insights');\n        const movieIndex = movies[index];\n        const movieId = movieIndex.id;\n        await postComment(movieId, formName.value, formComment.value);\n        formComment.value = '';\n        formName.value = '';\n        (0,_commentsCounter__WEBPACK_IMPORTED_MODULE_0__.commentsCounter)(movieId);\n        const getAllComment = await getComment(movieId);\n        let html = '';\n        getAllComment.forEach(element => {\n          html += `<li>${element.creation_date} - ${element.username}: ${element.comment}</li>`;\n        });\n        commentList.innerHTML = html;\n      });\n      const movieIndexGet = movies[index];\n      const movieIdGet = movieIndexGet.id;\n      const getAllComment = await getComment(movieIdGet);\n      let html = '';\n      getAllComment.forEach(element => {\n        html += `<li>${element.creation_date} - ${element.username}: ${element.comment}</li>`;\n      });\n      commentList.innerHTML = html;\n    });\n  });\n};\nconst closePopup = () => {\n  document.querySelector('.exit-btn').addEventListener('click', () => {\n    const popup = document.querySelector('.popup');\n    popup.classList.remove('active');\n    location.reload();\n  });\n};\n\n\n//# sourceURL=webpack://kanban/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentsCounter\": () => (/* binding */ commentsCounter)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\nconst commentsCounter = async itemId => {\n  try {\n    const getLength = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(itemId);\n    const commentTitle = document.querySelector(\".count-comments\");\n    commentTitle.innerHTML = `<h5>Comment(${getLength.length})</h5>`;\n  } catch (error) {\n    console.error(error);\n    const commentTitle = document.querySelector(\".count-comments\");\n    commentTitle.innerHTML = `<h5>Comment(0)</h5>`;\n  }\n};\n\n\n//# sourceURL=webpack://kanban/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst layout = (movie, index) => {\n  const movieSection = document.querySelector('.movies');\n  const movieItem = document.createElement('div');\n  movieItem.innerHTML = `\n  <div>\n      <img src=\"${movie.image.original}\" alt=\"\" >\n      <div class=\"title\">\n        <h2>Arrow Season ${movie.number}</h2>\n        <span>\n        <button type=\"button\" class=\"like-btn\"><i class=\"fa-solid fa-heart btn btn-secondary btn-sm  text-xl font-bold\"></i></button>\n        <span class=\"likes\"> 0 likes </span>\n        </span>    \n      </div> \n  </div>\n  <button id=\"${movie.id}\" data-movies=\"${index}\" type=\"button\" class=\"comments-btn\">Comments</button>\n  `;\n  movieSection.appendChild(movieItem);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\n\n//# sourceURL=webpack://kanban/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviesCounter = movies => {\n  const itemsCounter = movies.length;\n  const seasons = document.querySelector('.home');\n  seasons.insertAdjacentHTML('beforeend', `<span>(${itemsCounter})</span>`);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesCounter);\n\n//# sourceURL=webpack://kanban/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/shows.js":
/*!******************************!*\
  !*** ./src/modules/shows.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrow\": () => (/* binding */ arrow),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"like\": () => (/* binding */ like)\n/* harmony export */ });\nconst appId = 'sGPblqXwvYvemdbE1QYB';\nconst url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\nconst postLike = async itemId => {\n  const requestBody = {\n    item_id: itemId\n  };\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(requestBody)\n  };\n  try {\n    const response = await fetch(url, options);\n    if (response.status === 201) {\n      return 'Like recorded successfully!';\n    }\n  } catch (error) {\n    return 'Error recording like:', error;\n  }\n};\nconst getLikes = async () => {\n  try {\n    const response = await fetch(url);\n    const likes = await response.json();\n    likes.forEach(like => {\n      const itemId = like.item_id;\n      const itemImg = document.querySelector(`img[src=\"${itemId}\"]`);\n      if (itemImg) {\n        const item = itemImg.parentNode;\n        const likeBtn = item.querySelector('.like-btn');\n        const likesCount = like.likes;\n        const likesText = likesCount === 1 ? '1 like' : `${likesCount} likes`;\n        const likesDisplay = item.querySelector('.likes');\n        if (likesDisplay) {\n          likesDisplay.innerText = likesText;\n        } else {\n          likeBtn.insertAdjacentHTML('afterend', `<span class=\"likes\">${likesText}</span>`);\n        }\n      }\n    });\n  } catch (error) {\n    alert('Error getting likes:', error);\n  }\n  ;\n};\nconst like = () => {\n  const likeBtn = document.querySelectorAll('.like-btn');\n  likeBtn.forEach(button => {\n    button.addEventListener('click', () => {\n      const itemId = button.parentNode.parentNode.parentNode.querySelector('img').getAttribute('src');\n      postLike(itemId);\n      button.disabled = true;\n      const likesDisplay = button.parentNode.querySelector('.likes');\n      if (likesDisplay) {\n        const likesCount = parseInt(likesDisplay.innerText, 10) + 1;\n        likesDisplay.innerText = likesCount === 1 ? '1 like' : `${likesCount} likes`;\n      } else {\n        button.insertAdjacentHTML('afterend', '<span class=\"likes\">1 like</span>');\n      }\n      ;\n    });\n  });\n};\nconst movies = [];\nconst arrow = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows/4/seasons', {\n    method: 'GET'\n  });\n  const data = await response.json();\n  for (const movie of data) {\n    movies.push(movie);\n  }\n  return movies;\n};\n\n\n//# sourceURL=webpack://kanban/./src/modules/shows.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  display: block;\\n  background: #ccc5b9;\\n  margin: 0;\\n}\\nbody footer span a {\\n  color: #403d39;\\n  text-decoration: none;\\n}\\nbody .navigation {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 20px;\\n  align-items: center;\\n  margin-inline: 10%;\\n  margin-block: 20px;\\n  height: 100px;\\n}\\nbody .navigation a {\\n  color: #403d39;\\n  text-decoration: none;\\n}\\nbody .navigation p {\\n  border-radius: 50%;\\n  font-size: 20px;\\n  font-weight: 600;\\n}\\nbody .navigation p img {\\n  width: 80px;\\n}\\nbody .popup {\\n  font-size: 20px;\\n  display: none;\\n  position: fixed;\\n  height: 100%;\\n  top: -50px;\\n  z-index: 5;\\n  overflow-y: auto;\\n}\\nbody .popup.active {\\n  display: block;\\n}\\nbody .popup .main-row {\\n  background-color: #252422;\\n  width: 90%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  border-radius: 8px;\\n  color: #fffcf2;\\n  overflow: scroll;\\n  padding: 50px;\\n}\\nbody .popup .main-row .img-section {\\n  display: flex;\\n  justify-content: center;\\n}\\nbody .popup .main-row .img-section .close {\\n  height: 40px;\\n}\\nbody .popup .main-row .img-section .close .exit-btn {\\n  color: #fffcf2;\\n}\\nbody .popup .main-row .img-section .image-row {\\n  width: 100%;\\n}\\nbody .popup .main-row .img-section .img-div {\\n  width: 600px;\\n  height: 300px;\\n  overflow: hidden;\\n}\\nbody .popup .main-row .img-section .img-div #popup-img {\\n  width: 100%;\\n}\\nbody .popup .main-row .title-section {\\n  display: flex;\\n  justify-content: center;\\n}\\nbody .popup .main-row .title-section .title-row {\\n  width: 60%;\\n}\\nbody .popup .main-row .comments-section {\\n  display: flex;\\n  justify-content: center;\\n  margin: auto;\\n  width: 60%;\\n}\\nbody .popup .main-row .comments-section .comments-row {\\n  width: 60%;\\n  margin-right: auto;\\n}\\nbody .popup .main-row .comments-section .commentsList {\\n  list-style-type: none;\\n}\\nbody .popup .main-row .comment-section .form-section {\\n  margin: auto;\\n  width: 60%;\\n}\\nbody .popup .main-row .comment-section .form-section .name-input {\\n  width: 40%;\\n}\\nbody .popup .main-row .comment-section .form-section .review-input {\\n  width: 60%;\\n}\\nbody .movies {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  align-items: center;\\n  justify-content: space-around;\\n  margin-inline: 12%;\\n  padding-top: 20px;\\n  gap: 30px 20px;\\n}\\nbody .movies div {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  width: 200px;\\n}\\nbody .movies div h2 {\\n  font-size: 18px;\\n}\\nbody .movies div button {\\n  border: none;\\n  background: #403d39;\\n  color: #ccc5b9;\\n  border-radius: 3px;\\n  padding: 6px 8px;\\n}\\nbody .movies div div {\\n  display: block;\\n}\\nbody .movies div div img {\\n  width: 200px;\\n  height: 200px;\\n  object-fit: cover;\\n}\\nbody .movies div div .title {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\nbody .movies div div span {\\n  display: flex;\\n  flex-direction: column;\\n  width: fit-content;\\n}\\nbody .movies div div span button {\\n  border: none;\\n  background: transparent;\\n  color: red;\\n}\\nbody .movies div div span button .fa-heart {\\n  color: red;\\n  background: #ccc5b9;\\n  border: none;\\n  font-size: 22px;\\n  transition: all 250ms ease-in-out;\\n}\\nbody .movies div div span button .fa-heart:hover, body .movies div div span button .fa-heart:focus {\\n  color: red;\\n  background: #ccc5b9;\\n  border: none;\\n  font-size: 26px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/KANBAN.png":
/*!*******************************!*\
  !*** ./src/assets/KANBAN.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0d98d3770aa28dc950a.png\";\n\n//# sourceURL=webpack://kanban/./src/assets/KANBAN.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;