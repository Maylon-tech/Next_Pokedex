(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1445:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__QH1mK",
	"id": "Card_id__3Mjgi",
	"title": "Card_title__nskDb",
	"btn": "Card_btn__xV9sX"
};


/***/ }),

/***/ 3579:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"title": "Home_title__T09hD",
	"cardContainer": "Home_cardContainer__frLxE"
};


/***/ }),

/***/ 2309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(3579);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Card.module.css
var Card_module = __webpack_require__(1445);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/Card.jsx




function Card({ pokemon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Card_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
                width: 120,
                height: 120,
                alt: pokemon.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (Card_module_default()).id,
                children: [
                    "#",
                    pokemon.id
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (Card_module_default()).title,
                children: pokemon.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Card_module_default()).btn,
                href: `/pokemon/${pokemon.id}`,
                children: "Detalhes"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.jsx





async function getStaticProps() {
    const maxPokemons = 40;
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    data.results.forEach((item, index)=>{
        item.id = index + 1;
    });
    return {
        props: {
            pokemons: data.results
        }
    };
}
const Home = ({ pokemons  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "Poke",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Next"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/navlogo.png",
                        width: 60,
                        height: 60
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).cardContainer,
                children: pokemons.map((pokemon)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        pokemon: pokemon
                    }, pokemon.id))
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664], () => (__webpack_exec__(2309)));
module.exports = __webpack_exports__;

})();