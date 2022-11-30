exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb",
	"error": "Home_error__m2kA6",
	"link": "Home_link__mt0ji"
};


/***/ }),

/***/ 8970:
/***/ ((module) => {

// Exports
module.exports = {
	"menuLink": "MenuLink_menuLink__o1WYS"
};


/***/ }),

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gU": () => (/* reexport */ classN),
  "zB": () => (/* reexport */ classicInput),
  "Pc": () => (/* reexport */ classnamesTest),
  "LO": () => (/* reexport */ clsxTest),
  "Bp": () => (/* reexport */ createElement),
  "d8": () => (/* reexport */ dSIH_DSIH),
  "KX": () => (/* reexport */ dSIHDataLayer_DSIHDataLayer),
  "ME": () => (/* reexport */ exampleRouter),
  "$_": () => (/* reexport */ footer),
  "h4": () => (/* reexport */ header),
  "PA": () => (/* reexport */ htmlAttr_HtmlAttr),
  "Z7": () => (/* reexport */ locationHref),
  "or": () => (/* reexport */ main),
  "Zn": () => (/* reexport */ mainLayout),
  "Uk": () => (/* reexport */ menuLink),
  "dO": () => (/* reexport */ muiInput),
  "iT": () => (/* reexport */ refInnerHTML),
  "RB": () => (/* reexport */ slugHref),
  "Yu": () => (/* reexport */ windowOpen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/common/header/header.tsx


const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Vulnerable React/Next App"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Vulnerable react/next app"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/public/favicon.ico"
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/common/footer/footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Home_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "Vulnerable with",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Home_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/vercel.svg",
                        alt: "Vercel Logo",
                        width: 72,
                        height: 16
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/common/main/main.tsx



const Main = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: (Home_module_default()).main,
        children: children
    });
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/muiInput/muiInput.tsx



const MuiInput = ({ value , onChangeHandler  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "form",
        sx: {
            "& > :not(style)": {
                m: 1,
                width: "25ch"
            }
        },
        noValidate: true,
        autoComplete: "off",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "MUI INPUT"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                id: "outlined-user-input",
                label: "MUI INPUT",
                variant: "outlined",
                value: value,
                onChange: (event)=>onChangeHandler(event.target.value)
            })
        ]
    });
};
/* harmony default export */ const muiInput = (MuiInput);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/exampleRouter/exampleRouter.tsx




const ExampleRouter = ({ route  })=>{
    const [switcher, setSwitcher] = (0,external_react_.useState)("0");
    const [payload, setPayload] = (0,external_react_.useState)("");
    const [basePath, setBasePath] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        setBasePath(window.location.href);
    }, []);
    (0,external_react_.useEffect)(()=>{
        setPayload(`${switcher === "1" ? window.location.href + "/" : ""}${route}`);
    }, [
        route,
        switcher
    ]);
    const handleChange = (event)=>{
        setSwitcher(event.target.value);
    };
    const router = async (payload)=>{
        await router_default().push(payload);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "next/router.push(payload)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.RadioGroup, {
                    "aria-labelledby": "demo-controlled-radio-buttons-group",
                    name: "controlled-radio-buttons-group",
                    value: switcher,
                    onChange: handleChange,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                            value: "0",
                            control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Radio, {}),
                            label: route
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                            value: "1",
                            control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Radio, {}),
                            label: basePath + "/" + route
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                variant: "outlined",
                onClick: ()=>router(payload),
                children: "TRY ME!"
            })
        ]
    });
};
/* harmony default export */ const exampleRouter = (ExampleRouter);

;// CONCATENATED MODULE: ./components/locationHref/locationHref.tsx



const LocationHref = ({ route  })=>{
    const windowLocationButton = (value)=>{
        window.location.href = value;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    "window.location.href = ",
                    route
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                variant: "outlined",
                onClick: ()=>windowLocationButton(route),
                children: "TRY ME!"
            })
        ]
    });
};
/* harmony default export */ const locationHref = (LocationHref);

;// CONCATENATED MODULE: ./components/classicInput/classicInput.tsx


const ClassicInput = ({ value , onChangeHandler  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Classic input field"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "clIn",
                children: "Classic Input: "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "clIn",
                value: value,
                onChange: onChangeHandler
            })
        ]
    });
};
/* harmony default export */ const classicInput = (ClassicInput);

;// CONCATENATED MODULE: ./components/dSIH/DSIH.tsx



const DSIH = ({ value  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "dangerouslySetInnerHTML in div"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).code,
                children: [
                    "inspect me!",
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: `${value}`
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dSIH_DSIH = (DSIH);

;// CONCATENATED MODULE: ./components/dSIHDataLayer/DSIHDataLayer.tsx



const DSIHDataLayer = ({ value  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "dangerouslySetInnerHTML window.digitalData=payload"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).code,
                children: [
                    "inspect me!",
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        "data-testid": "data-layer",
                        dangerouslySetInnerHTML: {
                            __html: `window.digitalData=${JSON.stringify(value)}`
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dSIHDataLayer_DSIHDataLayer = (DSIHDataLayer);

;// CONCATENATED MODULE: ./components/refInnerHTML/refInnerHTML.tsx



const RefInnerHTML = ({ value  })=>{
    const codeRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (codeRef.current) {
            const element = codeRef.current;
            element.innerHTML = value;
        }
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "ref.current.innerHTML"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (Home_module_default()).description,
                children: [
                    "Inspect me!",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("code", {
                        className: (Home_module_default()).code,
                        ref: codeRef,
                        children: "NULL"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const refInnerHTML = (RefInnerHTML); // worked xss
 // <img src=xxx:x onerror=javascript:alert(1)> -->

;// CONCATENATED MODULE: ./components/classN/classN.tsx



const ClassN = ({ value  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "className injection"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).code,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: value,
                    children: [
                        "I'm a <p\xa0className=",
                        `{payload} /`,
                        ">. Inspect me!"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const classN = (ClassN);

;// CONCATENATED MODULE: ./components/htmlAttr/HtmlAttr.tsx



const HtmlAttr = ({ value  })=>{
    const xssObject = (0,external_react_.useMemo)(()=>{
        return {
            id: value,
            "aria-label": value
        };
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "DIV HTML ATTRIBUTES"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).code,
                ...xssObject,
                children: [
                    "I'm a <div\xa0",
                    `{...payload}/`,
                    ">. Inspect me!"
                ]
            })
        ]
    });
};
/* harmony default export */ const htmlAttr_HtmlAttr = (HtmlAttr);

;// CONCATENATED MODULE: ./components/windowOpen/windowOpen.tsx



const WindowOpen = ({ value  })=>{
    const windowOpenButton = (value)=>{
        window.open(value, "_blank")?.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: 'window.open(payload, "_blank")?.focus();'
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                variant: "outlined",
                onClick: ()=>windowOpenButton(value),
                children: "TRY ME!"
            })
        ]
    });
};
/* harmony default export */ const windowOpen = (WindowOpen);

;// CONCATENATED MODULE: ./components/slugHref/slugHref.tsx


const SlugHref = ({ value  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "<a href={'.../${payload}/...'></a>"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: `/${value}/vercel.svg`,
                children: [
                    "<a href={'/${",
                    value,
                    "}/vercel.svg'>VERCEL.SVG</a>"
                ]
            })
        ]
    });
};
/* harmony default export */ const slugHref = (SlugHref);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/clsxTest/clsxTest.tsx




const ClsxTest = ({ value  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "NPM CLSX"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()((Home_module_default()).code, value),
                children: [
                    "<div classNames={cx(styles.code, ",
                    value,
                    ")}'>Inspect me!</div>"
                ]
            })
        ]
    });
};
/* harmony default export */ const clsxTest = (ClsxTest);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/classnamesTest/classnamesTest.tsx




const ClassnamesTest = ({ value  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "NPM CLASSNAMES"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((Home_module_default()).code, value),
                children: [
                    "<div classNames={cn(styles.code, ",
                    value,
                    ")}'>Inspect me!</div>"
                ]
            })
        ]
    });
};
/* harmony default export */ const classnamesTest = (ClassnamesTest);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/layouts/mainLayout/mainLayout.tsx






const MainLayout = ({ children , keywords  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "vulnerable, nextjs, security" + keywords && `, ${keywords}`,
                        className: "jsx-9b00fc23b348c23"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Valentin Panov",
                        className: "jsx-9b00fc23b348c23"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-9b00fc23b348c23",
                        children: "Vulnerable NextJS App"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-9b00fc23b348c23" + " " + ((Home_module_default()).container || ""),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "jsx-9b00fc23b348c23",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(menuLink, {
                                link: "/",
                                text: "Vulnerable NextApp"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menuLink, {
                                link: "/markup",
                                text: "[ Markup  ]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menuLink, {
                                link: "/path",
                                text: "[ Path  ]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menuLink, {
                                link: "/queryInjection?payload=",
                                text: "[ URL ]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menuLink, {
                                link: "/payloads",
                                text: "[ Cookies ]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menuLink, {
                                link: "/users",
                                text: "[ REST ]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(main, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "9b00fc23b348c23",
                children: "nav.jsx-9b00fc23b348c23{position:fixed;height:60px;left:0;top:0;right:0;background:#0070f3;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;gap:2rem;padding:1rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}nav.jsx-9b00fc23b348c23 a.jsx-9b00fc23b348c23{color:#eaeaea;text-decoration:none}main.jsx-9b00fc23b348c23{margin-top:60px;padding:1rem}"
            })
        ]
    });
};
/* harmony default export */ const mainLayout = (MainLayout);

// EXTERNAL MODULE: ./styles/MenuLink.module.scss
var MenuLink_module = __webpack_require__(8970);
var MenuLink_module_default = /*#__PURE__*/__webpack_require__.n(MenuLink_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/menuLink/menuLink.tsx




const MenuLink = ({ text , link  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        className: (MenuLink_module_default()).menuLink,
        children: text
    });
};
/* harmony default export */ const menuLink = (MenuLink);

;// CONCATENATED MODULE: ./components/createElement/createElement.tsx

const CreateElement = ({ value , props , children  })=>{
    return /*#__PURE__*/ external_react_default().createElement(value, props, children);
};
/* harmony default export */ const createElement = (CreateElement);

;// CONCATENATED MODULE: ./components/index.tsx





















/***/ })

};
;