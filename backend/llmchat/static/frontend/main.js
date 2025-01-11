/*! For license information please see main.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
            232: (e, t) => {
                Object.prototype.toString;
            },
            992: (e, t, n) => {
                n.d(t, { A: () => i });
                var r = n(601),
                    a = n.n(r),
                    o = n(314),
                    l = n.n(o)()(a());
                l.push([
                    e.id,
                    ":root {\n    --primary-color: #adf0d4;\n    --secondary-color: #1fd8a4;\n    --bg-color: #0d1512;\n    --bg-lighter: #1b2c26;\n    --bg-darker: #020303;\n\n\n    /* Markdown variables and colours */\n    /* Base colors */\n    --markdown-text: var(--primary-color);\n    --markdown-heading: var(--secondary-color);\n    --markdown-link: var(--secondary-color);\n    --markdown-bold: var(--secondary-color);\n    --markdown-italic: var(--primary-color);\n    \n    /* Code blocks */\n    --markdown-code: var(--secondary-color);\n    --markdown-code-bg: var(--bg-darker);\n    --markdown-block-bg: var(--bg-darker);\n    \n    /* Blockquotes */\n    --markdown-blockquote: var(--bg-color);\n    --markdown-blockquote-border: var(--bg-color);\n    \n    /* Borders & Lines */\n    --markdown-border: var(--bg-color);\n    --markdown-hr: var(--bg-color);\n\n    /* Lists */\n    --markdown-li: var(--primary-color);\n    --markdown-ol: var(--primary-color);\n    --markdown-ul: var(--primary-color);\n\n    /* Table variables */\n    --markdown-table-border: var(--bg-color);\n    --markdown-table-header-bg: var(--bg-color);\n    --markdown-table-header-text: var(--secondary-color);\n    \n    /* Checkbox variables */\n    --markdown-checkbox-checked: var(--bg-color);\n    --markdown-checkbox-border: var(--secondary-color);\n    --markdown-checkbox-focus: var(--secondary-color);\n}\n\nbody {\n    background: var(--bg-color);\n    color: var(--primary-color);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 36px;\n    padding: 14px;\n}\n\n.initial-input {\n    background: var(--bg-darker);\n    color: var(--primary-color);\n}\n\n.message-container-user {\n    background: var(--bg-darker);\n    color: var(--primary-color);\n}\n\n.message-container-bot {\n    background: var(--bg-lighter);\n    color: var(--secondary-color);\n}\n\n.artifact-button {\n    background: var(--bg-darker);\n    color: var(--primary-color);\n}\n\n.sidepanel-container {\n    background: var(--bg-lighter);\n    color: var(--secondary-color);\n}\n\n.sidepannel-header {\n    border-color: var(--bg-color);\n}\n\n.sidepanel-button:hover {\n    background: var(--bg-color);\n}\n\n.sidepanel-code-renderer {\n    background: var(--bg-color);\n}\n",
                    "",
                ]);
                const i = l;
            },
            321: (e, t, n) => {
                n.d(t, { A: () => i });
                var r = n(601),
                    a = n.n(r),
                    o = n(314),
                    l = n.n(o)()(a());
                l.push([
                    e.id,
                    '*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type=\'button\']),\ninput:where([type=\'reset\']),\ninput:where([type=\'submit\']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden="until-found"])) {\n  display: none;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where(p):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where([class~="lead"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(a strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(blockquote strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(thead th strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(ol):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: decimal;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-inline-start: 1.625em;\n}\n.prose :where(ol[type="A"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type="a"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type="A" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type="a" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type="I"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type="i"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type="I" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type="i" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type="1"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  list-style-type: disc;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-inline-start: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(dt):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.25em;\n}\n.prose :where(hr):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-inline-start-width: 0.25rem;\n  border-inline-start-color: var(--tw-prose-quote-borders);\n  quotes: "\\201C""\\201D""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-inline-start: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"],[class~="not-prose"] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"],[class~="not-prose"] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  font-weight: 900;\n  color: inherit;\n}\n.prose :where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  font-weight: 800;\n  color: inherit;\n}\n.prose :where(h3):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(h4):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(img):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(picture):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  display: block;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(video):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(kbd):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--tw-prose-kbd);\n  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);\n  font-size: 0.875em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1875em;\n  padding-inline-end: 0.375em;\n  padding-bottom: 0.1875em;\n  padding-inline-start: 0.375em;\n}\n.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before {\n  content: "`";\n}\n.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after {\n  content: "`";\n}\n.prose :where(a code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(h1 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(h2 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n  font-size: 0.9em;\n}\n.prose :where(h4 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(blockquote code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(thead th code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: inherit;\n}\n.prose :where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-inline-end: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-inline-start: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  width: 100%;\n  table-layout: auto;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-inline-end: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-inline-start: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  vertical-align: baseline;\n}\n.prose :where(tfoot):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  border-top-width: 1px;\n  border-top-color: var(--tw-prose-th-borders);\n}\n.prose :where(tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  vertical-align: top;\n}\n.prose :where(th, td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  text-align: start;\n}\n.prose :where(figure > *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-kbd: #111827;\n  --tw-prose-kbd-shadows: 17 24 39;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-kbd: #fff;\n  --tw-prose-invert-kbd-shadows: 255 255 255;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(picture > img):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-inline-start: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-inline-start: 0.375em;\n}\n.prose :where(.prose > ul > li p):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(.prose > ul > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ul > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(.prose > ol > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ol > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(dl):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(dd):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0.5em;\n  padding-inline-start: 1.625em;\n}\n.prose :where(hr + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-inline-start: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-inline-end: 0;\n}\n.prose :where(tbody td, tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-top: 0.5714286em;\n  padding-inline-end: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-inline-start: 0.5714286em;\n}\n.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-inline-start: 0;\n}\n.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  padding-inline-end: 0;\n}\n.prose :where(figure):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(.prose > :first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-top: 0;\n}\n.prose :where(.prose > :last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {\n  margin-bottom: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-4 {\n  bottom: 1rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.right-0 {\n  right: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.top-5 {\n  top: 1.25rem;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.ml-0 {\n  margin-left: 0px;\n}\n.ml-16 {\n  margin-left: 4rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.ml-px {\n  margin-left: 1px;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-5\\/6 {\n  height: 83.333333%;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-\\[300px\\] {\n  max-height: 300px;\n}\n.min-h-\\[40px\\] {\n  min-height: 40px;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-7\\/12 {\n  width: 58.333333%;\n}\n.w-72 {\n  width: 18rem;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-max {\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-\\[75ch\\] {\n  max-width: 75ch;\n}\n.max-w-none {\n  max-width: none;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-text {\n  cursor: text;\n}\n.resize-none {\n  resize: none;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.rounded-2xl {\n  border-radius: 1rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.pb-2\\.5 {\n  padding-bottom: 0.625rem;\n}\n.pb-20 {\n  padding-bottom: 5rem;\n}\n.pl-2\\.5 {\n  padding-left: 0.625rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pl-\\[4\\.5rem\\] {\n  padding-left: 4.5rem;\n}\n.pr-2\\.5 {\n  padding-right: 0.625rem;\n}\n.pr-6 {\n  padding-right: 1.5rem;\n}\n.pt-1 {\n  padding-top: 0.25rem;\n}\n.pt-12 {\n  padding-top: 3rem;\n}\n.pt-2\\.5 {\n  padding-top: 0.625rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.shadow-\\[0_0\\.25rem_1\\.25rem_rgba\\(0\\2c 0\\2c 0\\2c 0\\.035\\)\\] {\n  --tw-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.035);\n  --tw-shadow-colored: 0 0.25rem 1.25rem var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.focus-within\\:shadow-\\[0_0\\.25rem_1\\.25rem_rgba\\(0\\2c 0\\2c 0\\2c 0\\.075\\)\\]:focus-within {\n  --tw-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.075);\n  --tw-shadow-colored: 0 0.25rem 1.25rem var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:bg-black:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.prose-headings\\:text-\\[var\\(--markdown-heading\\)\\] :is(:where(h1, h2, h3, h4, h5, h6, th):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-heading);\n}\n.prose-p\\:text-\\[var\\(--markdown-text\\)\\] :is(:where(p):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-text);\n}\n.prose-a\\:text-\\[var\\(--markdown-link\\)\\] :is(:where(a):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-link);\n}\n.hover\\:prose-a\\:opacity-80 :is(:where(a):not(:where([class~="not-prose"],[class~="not-prose"] *))):hover {\n  opacity: 0.8;\n}\n.prose-blockquote\\:border-l-4 :is(:where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-left-width: 4px;\n}\n.prose-blockquote\\:border-\\[var\\(--markdown-blockquote-border\\)\\] :is(:where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-blockquote-border);\n}\n.prose-blockquote\\:pl-4 :is(:where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  padding-left: 1rem;\n}\n.prose-blockquote\\:text-\\[var\\(--markdown-blockquote\\)\\] :is(:where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-blockquote);\n}\n.prose-strong\\:text-\\[var\\(--markdown-bold\\)\\] :is(:where(strong):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-bold);\n}\n.prose-em\\:text-\\[var\\(--markdown-italic\\)\\] :is(:where(em):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-italic);\n}\n.prose-code\\:rounded :is(:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-radius: 0.25rem;\n}\n.prose-code\\:bg-\\[var\\(--markdown-code-bg\\)\\] :is(:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  background-color: var(--markdown-code-bg);\n}\n.prose-code\\:px-1\\.5 :is(:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n.prose-code\\:py-0\\.5 :is(:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.prose-code\\:text-\\[var\\(--markdown-code\\)\\] :is(:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-code);\n}\n.prose-pre\\:rounded :is(:where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-radius: 0.25rem;\n}\n.prose-pre\\:bg-\\[var\\(--markdown-block-bg\\)\\] :is(:where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  background-color: var(--markdown-block-bg);\n}\n.prose-pre\\:p-4 :is(:where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  padding: 1rem;\n}\n.prose-ol\\:text-\\[var\\(--markdown-text\\)\\] :is(:where(ol):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-text);\n}\n.prose-ul\\:text-\\[var\\(--markdown-text\\)\\] :is(:where(ul):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-text);\n}\n.prose-li\\:text-\\[var\\(--markdown-text\\)\\] :is(:where(li):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-text);\n}\n.prose-table\\:w-full :is(:where(table):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  width: 100%;\n}\n.prose-table\\:border-collapse :is(:where(table):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-collapse: collapse;\n}\n.prose-table\\:border-\\[var\\(--markdown-table-border\\)\\] :is(:where(table):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-table-border);\n}\n.prose-table\\:text-\\[var\\(--markdown-text\\)\\] :is(:where(table):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-text);\n}\n.prose-thead\\:border-\\[var\\(--markdown-border\\)\\] :is(:where(thead):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-border);\n}\n.prose-thead\\:bg-\\[var\\(--markdown-table-header-bg\\)\\] :is(:where(thead):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  background-color: var(--markdown-table-header-bg);\n}\n.prose-tr\\:border-\\[var\\(--markdown-border\\)\\] :is(:where(tr):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-border);\n}\n.prose-th\\:p-2 :is(:where(th):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  padding: 0.5rem;\n}\n.prose-th\\:font-semibold :is(:where(th):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  font-weight: 600;\n}\n.prose-th\\:text-\\[var\\(--markdown-heading\\)\\] :is(:where(th):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-heading);\n}\n.prose-th\\:text-\\[var\\(--markdown-table-header-text\\)\\] :is(:where(th):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-table-header-text);\n}\n.prose-td\\:border-\\[var\\(--markdown-border\\)\\] :is(:where(td):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-border);\n}\n.prose-td\\:border-\\[var\\(--markdown-table-border\\)\\] :is(:where(td):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-table-border);\n}\n.prose-td\\:p-2 :is(:where(td):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  padding: 0.5rem;\n}\n.prose-td\\:text-\\[var\\(--markdown-text\\)\\] :is(:where(td):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  color: var(--markdown-text);\n}\n.prose-hr\\:border-\\[var\\(--markdown-hr\\)\\] :is(:where(hr):not(:where([class~="not-prose"],[class~="not-prose"] *))) {\n  border-color: var(--markdown-hr);\n}\n@media (min-width: 640px) {\n\n  .sm\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:sticky {\n    position: sticky;\n  }\n\n  .md\\:w-\\[calc\\(50vw-2\\.5rem\\)\\] {\n    width: calc(50vw - 2.5rem);\n  }\n\n  .md\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .md\\:pl-8 {\n    padding-left: 2rem;\n  }\n\n  .md\\:pr-14 {\n    padding-right: 3.5rem;\n  }\n\n  .md\\:pr-8 {\n    padding-right: 2rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\32xl\\:pr-20 {\n    padding-right: 5rem;\n  }\n}\n',
                    "",
                ]);
                const i = l;
            },
            314: (e) => {
                e.exports = function (e) {
                    var t = [];
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = "",
                                    r = void 0 !== t[5];
                                return (
                                    t[4] &&
                                        (n += "@supports (".concat(
                                            t[4],
                                            ") {",
                                        )),
                                    t[2] && (n += "@media ".concat(t[2], " {")),
                                    r &&
                                        (n += "@layer".concat(
                                            t[5].length > 0
                                                ? " ".concat(t[5])
                                                : "",
                                            " {",
                                        )),
                                    (n += e(t)),
                                    r && (n += "}"),
                                    t[2] && (n += "}"),
                                    t[4] && (n += "}"),
                                    n
                                );
                            }).join("");
                        }),
                        (t.i = function (e, n, r, a, o) {
                            "string" == typeof e && (e = [[null, e, void 0]]);
                            var l = {};
                            if (r)
                                for (var i = 0; i < this.length; i++) {
                                    var s = this[i][0];
                                    null != s && (l[s] = !0);
                                }
                            for (var u = 0; u < e.length; u++) {
                                var c = [].concat(e[u]);
                                (r && l[c[0]]) ||
                                    (void 0 !== o &&
                                        (void 0 === c[5] ||
                                            (c[1] = "@layer"
                                                .concat(
                                                    c[5].length > 0
                                                        ? " ".concat(c[5])
                                                        : "",
                                                    " {",
                                                )
                                                .concat(c[1], "}")),
                                        (c[5] = o)),
                                    n &&
                                        (c[2]
                                            ? ((c[1] = "@media "
                                                  .concat(c[2], " {")
                                                  .concat(c[1], "}")),
                                              (c[2] = n))
                                            : (c[2] = n)),
                                    a &&
                                        (c[4]
                                            ? ((c[1] = "@supports ("
                                                  .concat(c[4], ") {")
                                                  .concat(c[1], "}")),
                                              (c[4] = a))
                                            : (c[4] = "".concat(a))),
                                    t.push(c));
                            }
                        }),
                        t
                    );
                };
            },
            601: (e) => {
                e.exports = function (e) {
                    return e[1];
                };
            },
            247: (e, t, n) => {
                var r = n(982),
                    a = n(540),
                    o = n(961);
                function l(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++)
                            t += "&args[]=" + encodeURIComponent(arguments[n]);
                    }
                    return (
                        "Minified React error #" +
                        e +
                        "; visit " +
                        t +
                        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                    );
                }
                var i = Symbol.for("react.element"),
                    s = Symbol.for("react.transitional.element"),
                    u = Symbol.for("react.portal"),
                    c = Symbol.for("react.fragment"),
                    d = Symbol.for("react.strict_mode"),
                    p = Symbol.for("react.profiler"),
                    f = Symbol.for("react.provider"),
                    h = Symbol.for("react.consumer"),
                    m = Symbol.for("react.context"),
                    g = Symbol.for("react.forward_ref"),
                    b = Symbol.for("react.suspense"),
                    y = Symbol.for("react.suspense_list"),
                    w = Symbol.for("react.memo"),
                    v = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var k = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"),
                    Symbol.for("react.tracing_marker");
                var x = Symbol.for("react.memo_cache_sentinel"),
                    S = Symbol.iterator;
                function E(e) {
                    return null === e || "object" != typeof e
                        ? null
                        : "function" ==
                            typeof (e = (S && e[S]) || e["@@iterator"])
                          ? e
                          : null;
                }
                var C = Symbol.for("react.client.reference");
                function z(e) {
                    if (null == e) return null;
                    if ("function" == typeof e)
                        return e.$$typeof === C
                            ? null
                            : e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case c:
                            return "Fragment";
                        case u:
                            return "Portal";
                        case p:
                            return "Profiler";
                        case d:
                            return "StrictMode";
                        case b:
                            return "Suspense";
                        case y:
                            return "SuspenseList";
                    }
                    if ("object" == typeof e)
                        switch (e.$$typeof) {
                            case m:
                                return (
                                    (e.displayName || "Context") + ".Provider"
                                );
                            case h:
                                return (
                                    (e._context.displayName || "Context") +
                                    ".Consumer"
                                );
                            case g:
                                var t = e.render;
                                return (
                                    (e = e.displayName) ||
                                        (e =
                                            "" !==
                                            (e = t.displayName || t.name || "")
                                                ? "ForwardRef(" + e + ")"
                                                : "ForwardRef"),
                                    e
                                );
                            case w:
                                return null !== (t = e.displayName || null)
                                    ? t
                                    : z(e.type) || "Memo";
                            case v:
                                (t = e._payload), (e = e._init);
                                try {
                                    return z(e(t));
                                } catch (e) {}
                        }
                    return null;
                }
                var _,
                    P,
                    T =
                        a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    N = Object.assign;
                function R(e) {
                    if (void 0 === _)
                        try {
                            throw Error();
                        } catch (e) {
                            var t = e.stack.trim().match(/\n( *(at )?)/);
                            (_ = (t && t[1]) || ""),
                                (P =
                                    -1 < e.stack.indexOf("\n    at")
                                        ? " (<anonymous>)"
                                        : -1 < e.stack.indexOf("@")
                                          ? "@unknown:0:0"
                                          : "");
                        }
                    return "\n" + _ + e + P;
                }
                var L = !1;
                function A(e, t) {
                    if (!e || L) return "";
                    L = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        var r = {
                            DetermineComponentFrameRoot: function () {
                                try {
                                    if (t) {
                                        var n = function () {
                                            throw Error();
                                        };
                                        if (
                                            (Object.defineProperty(
                                                n.prototype,
                                                "props",
                                                {
                                                    set: function () {
                                                        throw Error();
                                                    },
                                                },
                                            ),
                                            "object" == typeof Reflect &&
                                                Reflect.construct)
                                        ) {
                                            try {
                                                Reflect.construct(n, []);
                                            } catch (e) {
                                                var r = e;
                                            }
                                            Reflect.construct(e, [], n);
                                        } else {
                                            try {
                                                n.call();
                                            } catch (e) {
                                                r = e;
                                            }
                                            e.call(n.prototype);
                                        }
                                    } else {
                                        try {
                                            throw Error();
                                        } catch (e) {
                                            r = e;
                                        }
                                        (n = e()) &&
                                            "function" == typeof n.catch &&
                                            n.catch(function () {});
                                    }
                                } catch (e) {
                                    if (e && r && "string" == typeof e.stack)
                                        return [e.stack, r.stack];
                                }
                                return [null, null];
                            },
                        };
                        r.DetermineComponentFrameRoot.displayName =
                            "DetermineComponentFrameRoot";
                        var a = Object.getOwnPropertyDescriptor(
                            r.DetermineComponentFrameRoot,
                            "name",
                        );
                        a &&
                            a.configurable &&
                            Object.defineProperty(
                                r.DetermineComponentFrameRoot,
                                "name",
                                { value: "DetermineComponentFrameRoot" },
                            );
                        var o = r.DetermineComponentFrameRoot(),
                            l = o[0],
                            i = o[1];
                        if (l && i) {
                            var s = l.split("\n"),
                                u = i.split("\n");
                            for (
                                a = r = 0;
                                r < s.length &&
                                !s[r].includes("DetermineComponentFrameRoot");

                            )
                                r++;
                            for (
                                ;
                                a < u.length &&
                                !u[a].includes("DetermineComponentFrameRoot");

                            )
                                a++;
                            if (r === s.length || a === u.length)
                                for (
                                    r = s.length - 1, a = u.length - 1;
                                    1 <= r && 0 <= a && s[r] !== u[a];

                                )
                                    a--;
                            for (; 1 <= r && 0 <= a; r--, a--)
                                if (s[r] !== u[a]) {
                                    if (1 !== r || 1 !== a)
                                        do {
                                            if (
                                                (r--, 0 > --a || s[r] !== u[a])
                                            ) {
                                                var c =
                                                    "\n" +
                                                    s[r].replace(
                                                        " at new ",
                                                        " at ",
                                                    );
                                                return (
                                                    e.displayName &&
                                                        c.includes(
                                                            "<anonymous>",
                                                        ) &&
                                                        (c = c.replace(
                                                            "<anonymous>",
                                                            e.displayName,
                                                        )),
                                                    c
                                                );
                                            }
                                        } while (1 <= r && 0 <= a);
                                    break;
                                }
                        }
                    } finally {
                        (L = !1), (Error.prepareStackTrace = n);
                    }
                    return (n = e ? e.displayName || e.name : "") ? R(n) : "";
                }
                function O(e) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            return R(e.type);
                        case 16:
                            return R("Lazy");
                        case 13:
                            return R("Suspense");
                        case 19:
                            return R("SuspenseList");
                        case 0:
                        case 15:
                            return A(e.type, !1);
                        case 11:
                            return A(e.type.render, !1);
                        case 1:
                            return A(e.type, !0);
                        default:
                            return "";
                    }
                }
                function $(e) {
                    try {
                        var t = "";
                        do {
                            (t += O(e)), (e = e.return);
                        } while (e);
                        return t;
                    } catch (e) {
                        return (
                            "\nError generating stack: " +
                            e.message +
                            "\n" +
                            e.stack
                        );
                    }
                }
                function M(e) {
                    var t = e,
                        n = e;
                    if (e.alternate) for (; t.return; ) t = t.return;
                    else {
                        e = t;
                        do {
                            !!(4098 & (t = e).flags) && (n = t.return),
                                (e = t.return);
                        } while (e);
                    }
                    return 3 === t.tag ? n : null;
                }
                function D(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (
                            (null === t &&
                                null !== (e = e.alternate) &&
                                (t = e.memoizedState),
                            null !== t)
                        )
                            return t.dehydrated;
                    }
                    return null;
                }
                function F(e) {
                    if (M(e) !== e) throw Error(l(188));
                }
                function I(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                    for (e = e.child; null !== e; ) {
                        if (null !== (t = I(e))) return t;
                        e = e.sibling;
                    }
                    return null;
                }
                var j = Array.isArray,
                    U =
                        o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    B = { pending: !1, data: null, method: null, action: null },
                    q = [],
                    H = -1;
                function W(e) {
                    return { current: e };
                }
                function V(e) {
                    0 > H || ((e.current = q[H]), (q[H] = null), H--);
                }
                function Q(e, t) {
                    H++, (q[H] = e.current), (e.current = t);
                }
                var K = W(null),
                    Y = W(null),
                    G = W(null),
                    X = W(null);
                function Z(e, t) {
                    switch ((Q(G, t), Q(Y, e), Q(K, null), (e = t.nodeType))) {
                        case 9:
                        case 11:
                            t =
                                (t = t.documentElement) && (t = t.namespaceURI)
                                    ? Yc(t)
                                    : 0;
                            break;
                        default:
                            if (
                                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                                (e = e.namespaceURI))
                            )
                                t = Gc((e = Yc(e)), t);
                            else
                                switch (t) {
                                    case "svg":
                                        t = 1;
                                        break;
                                    case "math":
                                        t = 2;
                                        break;
                                    default:
                                        t = 0;
                                }
                    }
                    V(K), Q(K, t);
                }
                function J() {
                    V(K), V(Y), V(G);
                }
                function ee(e) {
                    null !== e.memoizedState && Q(X, e);
                    var t = K.current,
                        n = Gc(t, e.type);
                    t !== n && (Q(Y, e), Q(K, n));
                }
                function te(e) {
                    Y.current === e && (V(K), V(Y)),
                        X.current === e && (V(X), ($d._currentValue = B));
                }
                var ne = Object.prototype.hasOwnProperty,
                    re = r.unstable_scheduleCallback,
                    ae = r.unstable_cancelCallback,
                    oe = r.unstable_shouldYield,
                    le = r.unstable_requestPaint,
                    ie = r.unstable_now,
                    se = r.unstable_getCurrentPriorityLevel,
                    ue = r.unstable_ImmediatePriority,
                    ce = r.unstable_UserBlockingPriority,
                    de = r.unstable_NormalPriority,
                    pe = r.unstable_LowPriority,
                    fe = r.unstable_IdlePriority,
                    he = r.log,
                    me = r.unstable_setDisableYieldValue,
                    ge = null,
                    be = null;
                function ye(e) {
                    if (
                        ("function" == typeof he && me(e),
                        be && "function" == typeof be.setStrictMode)
                    )
                        try {
                            be.setStrictMode(ge, e);
                        } catch (e) {}
                }
                var we = Math.clz32
                        ? Math.clz32
                        : function (e) {
                              return 0 == (e >>>= 0)
                                  ? 32
                                  : (31 - ((ve(e) / ke) | 0)) | 0;
                          },
                    ve = Math.log,
                    ke = Math.LN2,
                    xe = 128,
                    Se = 4194304;
                function Ee(e) {
                    var t = 42 & e;
                    if (0 !== t) return t;
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                            return 64;
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194176 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            return 62914560 & e;
                        case 67108864:
                            return 67108864;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 0;
                        default:
                            return e;
                    }
                }
                function Ce(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        o = e.pingedLanes,
                        l = e.warmLanes;
                    e = 0 !== e.finishedLanes;
                    var i = 134217727 & n;
                    return (
                        0 !== i
                            ? 0 != (n = i & ~a)
                                ? (r = Ee(n))
                                : 0 != (o &= i)
                                  ? (r = Ee(o))
                                  : e || (0 != (l = i & ~l) && (r = Ee(l)))
                            : 0 != (i = n & ~a)
                              ? (r = Ee(i))
                              : 0 !== o
                                ? (r = Ee(o))
                                : e || (0 != (l = n & ~l) && (r = Ee(l))),
                        0 === r
                            ? 0
                            : 0 === t ||
                                t === r ||
                                t & a ||
                                !(
                                    (a = r & -r) >= (l = t & -t) ||
                                    (32 === a && 4194176 & l)
                                )
                              ? r
                              : t
                    );
                }
                function ze(e, t) {
                    return !(
                        e.pendingLanes &
                        ~(e.suspendedLanes & ~e.pingedLanes) &
                        t
                    );
                }
                function _e(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                        case 8:
                            return t + 250;
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1;
                    }
                }
                function Pe() {
                    var e = xe;
                    return !(4194176 & (xe <<= 1)) && (xe = 128), e;
                }
                function Te() {
                    var e = Se;
                    return !(62914560 & (Se <<= 1)) && (Se = 4194304), e;
                }
                function Ne(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t;
                }
                function Re(e, t) {
                    (e.pendingLanes |= t),
                        268435456 !== t &&
                            ((e.suspendedLanes = 0),
                            (e.pingedLanes = 0),
                            (e.warmLanes = 0));
                }
                function Le(e, t, n) {
                    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
                    var r = 31 - we(t);
                    (e.entangledLanes |= t),
                        (e.entanglements[r] =
                            1073741824 | e.entanglements[r] | (4194218 & n));
                }
                function Ae(e, t) {
                    var n = (e.entangledLanes |= t);
                    for (e = e.entanglements; n; ) {
                        var r = 31 - we(n),
                            a = 1 << r;
                        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
                    }
                }
                function Oe(e) {
                    return 2 < (e &= -e)
                        ? 8 < e
                            ? 134217727 & e
                                ? 32
                                : 268435456
                            : 8
                        : 2;
                }
                function $e() {
                    var e = U.p;
                    return 0 !== e
                        ? e
                        : void 0 === (e = window.event)
                          ? 32
                          : Kd(e.type);
                }
                var Me = Math.random().toString(36).slice(2),
                    De = "__reactFiber$" + Me,
                    Fe = "__reactProps$" + Me,
                    Ie = "__reactContainer$" + Me,
                    je = "__reactEvents$" + Me,
                    Ue = "__reactListeners$" + Me,
                    Be = "__reactHandles$" + Me,
                    qe = "__reactResources$" + Me,
                    He = "__reactMarker$" + Me;
                function We(e) {
                    delete e[De],
                        delete e[Fe],
                        delete e[je],
                        delete e[Ue],
                        delete e[Be];
                }
                function Ve(e) {
                    var t = e[De];
                    if (t) return t;
                    for (var n = e.parentNode; n; ) {
                        if ((t = n[Ie] || n[De])) {
                            if (
                                ((n = t.alternate),
                                null !== t.child ||
                                    (null !== n && null !== n.child))
                            )
                                for (e = id(e); null !== e; ) {
                                    if ((n = e[De])) return n;
                                    e = id(e);
                                }
                            return t;
                        }
                        n = (e = n).parentNode;
                    }
                    return null;
                }
                function Qe(e) {
                    if ((e = e[De] || e[Ie])) {
                        var t = e.tag;
                        if (
                            5 === t ||
                            6 === t ||
                            13 === t ||
                            26 === t ||
                            27 === t ||
                            3 === t
                        )
                            return e;
                    }
                    return null;
                }
                function Ke(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t)
                        return e.stateNode;
                    throw Error(l(33));
                }
                function Ye(e) {
                    var t = e[qe];
                    return (
                        t ||
                            (t = e[qe] =
                                {
                                    hoistableStyles: new Map(),
                                    hoistableScripts: new Map(),
                                }),
                        t
                    );
                }
                function Ge(e) {
                    e[He] = !0;
                }
                var Xe = new Set(),
                    Ze = {};
                function Je(e, t) {
                    et(e, t), et(e + "Capture", t);
                }
                function et(e, t) {
                    for (Ze[e] = t, e = 0; e < t.length; e++) Xe.add(t[e]);
                }
                var tt = !(
                        "undefined" == typeof window ||
                        void 0 === window.document ||
                        void 0 === window.document.createElement
                    ),
                    nt = RegExp(
                        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
                    ),
                    rt = {},
                    at = {};
                function ot(e, t, n) {
                    if (
                        ((a = t),
                        ne.call(at, a) ||
                            (!ne.call(rt, a) &&
                                (nt.test(a)
                                    ? (at[a] = !0)
                                    : ((rt[a] = !0), 0))))
                    )
                        if (null === n) e.removeAttribute(t);
                        else {
                            switch (typeof n) {
                                case "undefined":
                                case "function":
                                case "symbol":
                                    return void e.removeAttribute(t);
                                case "boolean":
                                    var r = t.toLowerCase().slice(0, 5);
                                    if ("data-" !== r && "aria-" !== r)
                                        return void e.removeAttribute(t);
                            }
                            e.setAttribute(t, "" + n);
                        }
                    var a;
                }
                function lt(e, t, n) {
                    if (null === n) e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(t);
                        }
                        e.setAttribute(t, "" + n);
                    }
                }
                function it(e, t, n, r) {
                    if (null === r) e.removeAttribute(n);
                    else {
                        switch (typeof r) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(n);
                        }
                        e.setAttributeNS(t, n, "" + r);
                    }
                }
                function st(e) {
                    switch (typeof e) {
                        case "bigint":
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return "";
                    }
                }
                function ut(e) {
                    var t = e.type;
                    return (
                        (e = e.nodeName) &&
                        "input" === e.toLowerCase() &&
                        ("checkbox" === t || "radio" === t)
                    );
                }
                function ct(e) {
                    e._valueTracker ||
                        (e._valueTracker = (function (e) {
                            var t = ut(e) ? "checked" : "value",
                                n = Object.getOwnPropertyDescriptor(
                                    e.constructor.prototype,
                                    t,
                                ),
                                r = "" + e[t];
                            if (
                                !e.hasOwnProperty(t) &&
                                void 0 !== n &&
                                "function" == typeof n.get &&
                                "function" == typeof n.set
                            ) {
                                var a = n.get,
                                    o = n.set;
                                return (
                                    Object.defineProperty(e, t, {
                                        configurable: !0,
                                        get: function () {
                                            return a.call(this);
                                        },
                                        set: function (e) {
                                            (r = "" + e), o.call(this, e);
                                        },
                                    }),
                                    Object.defineProperty(e, t, {
                                        enumerable: n.enumerable,
                                    }),
                                    {
                                        getValue: function () {
                                            return r;
                                        },
                                        setValue: function (e) {
                                            r = "" + e;
                                        },
                                        stopTracking: function () {
                                            (e._valueTracker = null),
                                                delete e[t];
                                        },
                                    }
                                );
                            }
                        })(e));
                }
                function dt(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return (
                        e &&
                            (r = ut(e)
                                ? e.checked
                                    ? "true"
                                    : "false"
                                : e.value),
                        (e = r) !== n && (t.setValue(e), !0)
                    );
                }
                function pt(e) {
                    if (
                        void 0 ===
                        (e =
                            e ||
                            ("undefined" != typeof document
                                ? document
                                : void 0))
                    )
                        return null;
                    try {
                        return e.activeElement || e.body;
                    } catch (t) {
                        return e.body;
                    }
                }
                var ft = /[\n"\\]/g;
                function ht(e) {
                    return e.replace(ft, function (e) {
                        return "\\" + e.charCodeAt(0).toString(16) + " ";
                    });
                }
                function mt(e, t, n, r, a, o, l, i) {
                    (e.name = ""),
                        null != l &&
                        "function" != typeof l &&
                        "symbol" != typeof l &&
                        "boolean" != typeof l
                            ? (e.type = l)
                            : e.removeAttribute("type"),
                        null != t
                            ? "number" === l
                                ? ((0 === t && "" === e.value) ||
                                      e.value != t) &&
                                  (e.value = "" + st(t))
                                : e.value !== "" + st(t) &&
                                  (e.value = "" + st(t))
                            : ("submit" !== l && "reset" !== l) ||
                              e.removeAttribute("value"),
                        null != t
                            ? bt(e, l, st(t))
                            : null != n
                              ? bt(e, l, st(n))
                              : null != r && e.removeAttribute("value"),
                        null == a && null != o && (e.defaultChecked = !!o),
                        null != a &&
                            (e.checked =
                                a &&
                                "function" != typeof a &&
                                "symbol" != typeof a),
                        null != i &&
                        "function" != typeof i &&
                        "symbol" != typeof i &&
                        "boolean" != typeof i
                            ? (e.name = "" + st(i))
                            : e.removeAttribute("name");
                }
                function gt(e, t, n, r, a, o, l, i) {
                    if (
                        (null != o &&
                            "function" != typeof o &&
                            "symbol" != typeof o &&
                            "boolean" != typeof o &&
                            (e.type = o),
                        null != t || null != n)
                    ) {
                        if (("submit" === o || "reset" === o) && null == t)
                            return;
                        (n = null != n ? "" + st(n) : ""),
                            (t = null != t ? "" + st(t) : n),
                            i || t === e.value || (e.value = t),
                            (e.defaultValue = t);
                    }
                    (r =
                        "function" != typeof (r = null != r ? r : a) &&
                        "symbol" != typeof r &&
                        !!r),
                        (e.checked = i ? e.checked : !!r),
                        (e.defaultChecked = !!r),
                        null != l &&
                            "function" != typeof l &&
                            "symbol" != typeof l &&
                            "boolean" != typeof l &&
                            (e.name = l);
                }
                function bt(e, t, n) {
                    ("number" === t && pt(e.ownerDocument) === e) ||
                        e.defaultValue === "" + n ||
                        (e.defaultValue = "" + n);
                }
                function yt(e, t, n, r) {
                    if (((e = e.options), t)) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++)
                            (a = t.hasOwnProperty("$" + e[n].value)),
                                e[n].selected !== a && (e[n].selected = a),
                                a && r && (e[n].defaultSelected = !0);
                    } else {
                        for (
                            n = "" + st(n), t = null, a = 0;
                            a < e.length;
                            a++
                        ) {
                            if (e[a].value === n)
                                return (
                                    (e[a].selected = !0),
                                    void (r && (e[a].defaultSelected = !0))
                                );
                            null !== t || e[a].disabled || (t = e[a]);
                        }
                        null !== t && (t.selected = !0);
                    }
                }
                function wt(e, t, n) {
                    null == t ||
                    ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
                        ? (e.defaultValue = null != n ? "" + st(n) : "")
                        : e.defaultValue !== t && (e.defaultValue = t);
                }
                function vt(e, t, n, r) {
                    if (null == t) {
                        if (null != r) {
                            if (null != n) throw Error(l(92));
                            if (j(r)) {
                                if (1 < r.length) throw Error(l(93));
                                r = r[0];
                            }
                            n = r;
                        }
                        null == n && (n = ""), (t = n);
                    }
                    (n = st(t)),
                        (e.defaultValue = n),
                        (r = e.textContent) === n &&
                            "" !== r &&
                            null !== r &&
                            (e.value = r);
                }
                function kt(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType)
                            return void (n.nodeValue = t);
                    }
                    e.textContent = t;
                }
                var xt = new Set(
                    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
                        " ",
                    ),
                );
                function St(e, t, n) {
                    var r = 0 === t.indexOf("--");
                    null == n || "boolean" == typeof n || "" === n
                        ? r
                            ? e.setProperty(t, "")
                            : "float" === t
                              ? (e.cssFloat = "")
                              : (e[t] = "")
                        : r
                          ? e.setProperty(t, n)
                          : "number" != typeof n || 0 === n || xt.has(t)
                            ? "float" === t
                                ? (e.cssFloat = n)
                                : (e[t] = ("" + n).trim())
                            : (e[t] = n + "px");
                }
                function Et(e, t, n) {
                    if (null != t && "object" != typeof t) throw Error(l(62));
                    if (((e = e.style), null != n)) {
                        for (var r in n)
                            !n.hasOwnProperty(r) ||
                                (null != t && t.hasOwnProperty(r)) ||
                                (0 === r.indexOf("--")
                                    ? e.setProperty(r, "")
                                    : "float" === r
                                      ? (e.cssFloat = "")
                                      : (e[r] = ""));
                        for (var a in t)
                            (r = t[a]),
                                t.hasOwnProperty(a) &&
                                    n[a] !== r &&
                                    St(e, a, r);
                    } else
                        for (var o in t) t.hasOwnProperty(o) && St(e, o, t[o]);
                }
                function Ct(e) {
                    if (-1 === e.indexOf("-")) return !1;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0;
                    }
                }
                var zt = new Map([
                        ["acceptCharset", "accept-charset"],
                        ["htmlFor", "for"],
                        ["httpEquiv", "http-equiv"],
                        ["crossOrigin", "crossorigin"],
                        ["accentHeight", "accent-height"],
                        ["alignmentBaseline", "alignment-baseline"],
                        ["arabicForm", "arabic-form"],
                        ["baselineShift", "baseline-shift"],
                        ["capHeight", "cap-height"],
                        ["clipPath", "clip-path"],
                        ["clipRule", "clip-rule"],
                        ["colorInterpolation", "color-interpolation"],
                        [
                            "colorInterpolationFilters",
                            "color-interpolation-filters",
                        ],
                        ["colorProfile", "color-profile"],
                        ["colorRendering", "color-rendering"],
                        ["dominantBaseline", "dominant-baseline"],
                        ["enableBackground", "enable-background"],
                        ["fillOpacity", "fill-opacity"],
                        ["fillRule", "fill-rule"],
                        ["floodColor", "flood-color"],
                        ["floodOpacity", "flood-opacity"],
                        ["fontFamily", "font-family"],
                        ["fontSize", "font-size"],
                        ["fontSizeAdjust", "font-size-adjust"],
                        ["fontStretch", "font-stretch"],
                        ["fontStyle", "font-style"],
                        ["fontVariant", "font-variant"],
                        ["fontWeight", "font-weight"],
                        ["glyphName", "glyph-name"],
                        [
                            "glyphOrientationHorizontal",
                            "glyph-orientation-horizontal",
                        ],
                        [
                            "glyphOrientationVertical",
                            "glyph-orientation-vertical",
                        ],
                        ["horizAdvX", "horiz-adv-x"],
                        ["horizOriginX", "horiz-origin-x"],
                        ["imageRendering", "image-rendering"],
                        ["letterSpacing", "letter-spacing"],
                        ["lightingColor", "lighting-color"],
                        ["markerEnd", "marker-end"],
                        ["markerMid", "marker-mid"],
                        ["markerStart", "marker-start"],
                        ["overlinePosition", "overline-position"],
                        ["overlineThickness", "overline-thickness"],
                        ["paintOrder", "paint-order"],
                        ["panose-1", "panose-1"],
                        ["pointerEvents", "pointer-events"],
                        ["renderingIntent", "rendering-intent"],
                        ["shapeRendering", "shape-rendering"],
                        ["stopColor", "stop-color"],
                        ["stopOpacity", "stop-opacity"],
                        ["strikethroughPosition", "strikethrough-position"],
                        ["strikethroughThickness", "strikethrough-thickness"],
                        ["strokeDasharray", "stroke-dasharray"],
                        ["strokeDashoffset", "stroke-dashoffset"],
                        ["strokeLinecap", "stroke-linecap"],
                        ["strokeLinejoin", "stroke-linejoin"],
                        ["strokeMiterlimit", "stroke-miterlimit"],
                        ["strokeOpacity", "stroke-opacity"],
                        ["strokeWidth", "stroke-width"],
                        ["textAnchor", "text-anchor"],
                        ["textDecoration", "text-decoration"],
                        ["textRendering", "text-rendering"],
                        ["transformOrigin", "transform-origin"],
                        ["underlinePosition", "underline-position"],
                        ["underlineThickness", "underline-thickness"],
                        ["unicodeBidi", "unicode-bidi"],
                        ["unicodeRange", "unicode-range"],
                        ["unitsPerEm", "units-per-em"],
                        ["vAlphabetic", "v-alphabetic"],
                        ["vHanging", "v-hanging"],
                        ["vIdeographic", "v-ideographic"],
                        ["vMathematical", "v-mathematical"],
                        ["vectorEffect", "vector-effect"],
                        ["vertAdvY", "vert-adv-y"],
                        ["vertOriginX", "vert-origin-x"],
                        ["vertOriginY", "vert-origin-y"],
                        ["wordSpacing", "word-spacing"],
                        ["writingMode", "writing-mode"],
                        ["xmlnsXlink", "xmlns:xlink"],
                        ["xHeight", "x-height"],
                    ]),
                    _t =
                        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
                function Pt(e) {
                    return _t.test("" + e)
                        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                        : e;
                }
                var Tt = null;
                function Nt(e) {
                    return (
                        (e = e.target || e.srcElement || window)
                            .correspondingUseElement &&
                            (e = e.correspondingUseElement),
                        3 === e.nodeType ? e.parentNode : e
                    );
                }
                var Rt = null,
                    Lt = null;
                function At(e) {
                    var t = Qe(e);
                    if (t && (e = t.stateNode)) {
                        var n = e[Fe] || null;
                        e: switch (((e = t.stateNode), t.type)) {
                            case "input":
                                if (
                                    (mt(
                                        e,
                                        n.value,
                                        n.defaultValue,
                                        n.defaultValue,
                                        n.checked,
                                        n.defaultChecked,
                                        n.type,
                                        n.name,
                                    ),
                                    (t = n.name),
                                    "radio" === n.type && null != t)
                                ) {
                                    for (n = e; n.parentNode; )
                                        n = n.parentNode;
                                    for (
                                        n = n.querySelectorAll(
                                            'input[name="' +
                                                ht("" + t) +
                                                '"][type="radio"]',
                                        ),
                                            t = 0;
                                        t < n.length;
                                        t++
                                    ) {
                                        var r = n[t];
                                        if (r !== e && r.form === e.form) {
                                            var a = r[Fe] || null;
                                            if (!a) throw Error(l(90));
                                            mt(
                                                r,
                                                a.value,
                                                a.defaultValue,
                                                a.defaultValue,
                                                a.checked,
                                                a.defaultChecked,
                                                a.type,
                                                a.name,
                                            );
                                        }
                                    }
                                    for (t = 0; t < n.length; t++)
                                        (r = n[t]).form === e.form && dt(r);
                                }
                                break e;
                            case "textarea":
                                wt(e, n.value, n.defaultValue);
                                break e;
                            case "select":
                                null != (t = n.value) &&
                                    yt(e, !!n.multiple, t, !1);
                        }
                    }
                }
                var Ot = !1;
                function $t(e, t, n) {
                    if (Ot) return e(t, n);
                    Ot = !0;
                    try {
                        return e(t);
                    } finally {
                        if (
                            ((Ot = !1),
                            (null !== Rt || null !== Lt) &&
                                (Du(),
                                Rt &&
                                    ((t = Rt),
                                    (e = Lt),
                                    (Lt = Rt = null),
                                    At(t),
                                    e)))
                        )
                            for (t = 0; t < e.length; t++) At(e[t]);
                    }
                }
                function Mt(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = n[Fe] || null;
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) ||
                                (r = !(
                                    "button" === (e = e.type) ||
                                    "input" === e ||
                                    "select" === e ||
                                    "textarea" === e
                                )),
                                (e = !r);
                            break e;
                        default:
                            e = !1;
                    }
                    if (e) return null;
                    if (n && "function" != typeof n)
                        throw Error(l(231, t, typeof n));
                    return n;
                }
                var Dt = !1;
                if (tt)
                    try {
                        var Ft = {};
                        Object.defineProperty(Ft, "passive", {
                            get: function () {
                                Dt = !0;
                            },
                        }),
                            window.addEventListener("test", Ft, Ft),
                            window.removeEventListener("test", Ft, Ft);
                    } catch (e) {
                        Dt = !1;
                    }
                var It = null,
                    jt = null,
                    Ut = null;
                function Bt() {
                    if (Ut) return Ut;
                    var e,
                        t,
                        n = jt,
                        r = n.length,
                        a = "value" in It ? It.value : It.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var l = r - e;
                    for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
                    return (Ut = a.slice(e, 1 < t ? 1 - t : void 0));
                }
                function qt(e) {
                    var t = e.keyCode;
                    return (
                        "charCode" in e
                            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                            : (e = t),
                        10 === e && (e = 13),
                        32 <= e || 13 === e ? e : 0
                    );
                }
                function Ht() {
                    return !0;
                }
                function Wt() {
                    return !1;
                }
                function Vt(e) {
                    function t(t, n, r, a, o) {
                        for (var l in ((this._reactName = t),
                        (this._targetInst = r),
                        (this.type = n),
                        (this.nativeEvent = a),
                        (this.target = o),
                        (this.currentTarget = null),
                        e))
                            e.hasOwnProperty(l) &&
                                ((t = e[l]), (this[l] = t ? t(a) : a[l]));
                        return (
                            (this.isDefaultPrevented = (
                                null != a.defaultPrevented
                                    ? a.defaultPrevented
                                    : !1 === a.returnValue
                            )
                                ? Ht
                                : Wt),
                            (this.isPropagationStopped = Wt),
                            this
                        );
                    }
                    return (
                        N(t.prototype, {
                            preventDefault: function () {
                                this.defaultPrevented = !0;
                                var e = this.nativeEvent;
                                e &&
                                    (e.preventDefault
                                        ? e.preventDefault()
                                        : "unknown" != typeof e.returnValue &&
                                          (e.returnValue = !1),
                                    (this.isDefaultPrevented = Ht));
                            },
                            stopPropagation: function () {
                                var e = this.nativeEvent;
                                e &&
                                    (e.stopPropagation
                                        ? e.stopPropagation()
                                        : "unknown" != typeof e.cancelBubble &&
                                          (e.cancelBubble = !0),
                                    (this.isPropagationStopped = Ht));
                            },
                            persist: function () {},
                            isPersistent: Ht,
                        }),
                        t
                    );
                }
                var Qt,
                    Kt,
                    Yt,
                    Gt = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (e) {
                            return e.timeStamp || Date.now();
                        },
                        defaultPrevented: 0,
                        isTrusted: 0,
                    },
                    Xt = Vt(Gt),
                    Zt = N({}, Gt, { view: 0, detail: 0 }),
                    Jt = Vt(Zt),
                    en = N({}, Zt, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: pn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (e) {
                            return void 0 === e.relatedTarget
                                ? e.fromElement === e.srcElement
                                    ? e.toElement
                                    : e.fromElement
                                : e.relatedTarget;
                        },
                        movementX: function (e) {
                            return "movementX" in e
                                ? e.movementX
                                : (e !== Yt &&
                                      (Yt && "mousemove" === e.type
                                          ? ((Qt = e.screenX - Yt.screenX),
                                            (Kt = e.screenY - Yt.screenY))
                                          : (Kt = Qt = 0),
                                      (Yt = e)),
                                  Qt);
                        },
                        movementY: function (e) {
                            return "movementY" in e ? e.movementY : Kt;
                        },
                    }),
                    tn = Vt(en),
                    nn = Vt(N({}, en, { dataTransfer: 0 })),
                    rn = Vt(N({}, Zt, { relatedTarget: 0 })),
                    an = Vt(
                        N({}, Gt, {
                            animationName: 0,
                            elapsedTime: 0,
                            pseudoElement: 0,
                        }),
                    ),
                    on = Vt(
                        N({}, Gt, {
                            clipboardData: function (e) {
                                return "clipboardData" in e
                                    ? e.clipboardData
                                    : window.clipboardData;
                            },
                        }),
                    ),
                    ln = Vt(N({}, Gt, { data: 0 })),
                    sn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified",
                    },
                    un = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta",
                    },
                    cn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey",
                    };
                function dn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState
                        ? t.getModifierState(e)
                        : !!(e = cn[e]) && !!t[e];
                }
                function pn() {
                    return dn;
                }
                var fn = Vt(
                        N({}, Zt, {
                            key: function (e) {
                                if (e.key) {
                                    var t = sn[e.key] || e.key;
                                    if ("Unidentified" !== t) return t;
                                }
                                return "keypress" === e.type
                                    ? 13 === (e = qt(e))
                                        ? "Enter"
                                        : String.fromCharCode(e)
                                    : "keydown" === e.type || "keyup" === e.type
                                      ? un[e.keyCode] || "Unidentified"
                                      : "";
                            },
                            code: 0,
                            location: 0,
                            ctrlKey: 0,
                            shiftKey: 0,
                            altKey: 0,
                            metaKey: 0,
                            repeat: 0,
                            locale: 0,
                            getModifierState: pn,
                            charCode: function (e) {
                                return "keypress" === e.type ? qt(e) : 0;
                            },
                            keyCode: function (e) {
                                return "keydown" === e.type ||
                                    "keyup" === e.type
                                    ? e.keyCode
                                    : 0;
                            },
                            which: function (e) {
                                return "keypress" === e.type
                                    ? qt(e)
                                    : "keydown" === e.type || "keyup" === e.type
                                      ? e.keyCode
                                      : 0;
                            },
                        }),
                    ),
                    hn = Vt(
                        N({}, en, {
                            pointerId: 0,
                            width: 0,
                            height: 0,
                            pressure: 0,
                            tangentialPressure: 0,
                            tiltX: 0,
                            tiltY: 0,
                            twist: 0,
                            pointerType: 0,
                            isPrimary: 0,
                        }),
                    ),
                    mn = Vt(
                        N({}, Zt, {
                            touches: 0,
                            targetTouches: 0,
                            changedTouches: 0,
                            altKey: 0,
                            metaKey: 0,
                            ctrlKey: 0,
                            shiftKey: 0,
                            getModifierState: pn,
                        }),
                    ),
                    gn = Vt(
                        N({}, Gt, {
                            propertyName: 0,
                            elapsedTime: 0,
                            pseudoElement: 0,
                        }),
                    ),
                    bn = Vt(
                        N({}, en, {
                            deltaX: function (e) {
                                return "deltaX" in e
                                    ? e.deltaX
                                    : "wheelDeltaX" in e
                                      ? -e.wheelDeltaX
                                      : 0;
                            },
                            deltaY: function (e) {
                                return "deltaY" in e
                                    ? e.deltaY
                                    : "wheelDeltaY" in e
                                      ? -e.wheelDeltaY
                                      : "wheelDelta" in e
                                        ? -e.wheelDelta
                                        : 0;
                            },
                            deltaZ: 0,
                            deltaMode: 0,
                        }),
                    ),
                    yn = Vt(N({}, Gt, { newState: 0, oldState: 0 })),
                    wn = [9, 13, 27, 32],
                    vn = tt && "CompositionEvent" in window,
                    kn = null;
                tt &&
                    "documentMode" in document &&
                    (kn = document.documentMode);
                var xn = tt && "TextEvent" in window && !kn,
                    Sn = tt && (!vn || (kn && 8 < kn && 11 >= kn)),
                    En = String.fromCharCode(32),
                    Cn = !1;
                function zn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== wn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1;
                    }
                }
                function _n(e) {
                    return "object" == typeof (e = e.detail) && "data" in e
                        ? e.data
                        : null;
                }
                var Pn = !1,
                    Tn = {
                        color: !0,
                        date: !0,
                        datetime: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        password: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                    };
                function Nn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Tn[e.type] : "textarea" === t;
                }
                function Rn(e, t, n, r) {
                    Rt ? (Lt ? Lt.push(r) : (Lt = [r])) : (Rt = r),
                        0 < (t = $c(t, "onChange")).length &&
                            ((n = new Xt("onChange", "change", null, n, r)),
                            e.push({ event: n, listeners: t }));
                }
                var Ln = null,
                    An = null;
                function On(e) {
                    _c(e, 0);
                }
                function $n(e) {
                    if (dt(Ke(e))) return e;
                }
                function Mn(e, t) {
                    if ("change" === e) return t;
                }
                var Dn = !1;
                if (tt) {
                    var Fn;
                    if (tt) {
                        var In = "oninput" in document;
                        if (!In) {
                            var jn = document.createElement("div");
                            jn.setAttribute("oninput", "return;"),
                                (In = "function" == typeof jn.oninput);
                        }
                        Fn = In;
                    } else Fn = !1;
                    Dn =
                        Fn &&
                        (!document.documentMode || 9 < document.documentMode);
                }
                function Un() {
                    Ln &&
                        (Ln.detachEvent("onpropertychange", Bn),
                        (An = Ln = null));
                }
                function Bn(e) {
                    if ("value" === e.propertyName && $n(An)) {
                        var t = [];
                        Rn(t, An, e, Nt(e)), $t(On, t);
                    }
                }
                function qn(e, t, n) {
                    "focusin" === e
                        ? (Un(),
                          (An = n),
                          (Ln = t).attachEvent("onpropertychange", Bn))
                        : "focusout" === e && Un();
                }
                function Hn(e) {
                    if (
                        "selectionchange" === e ||
                        "keyup" === e ||
                        "keydown" === e
                    )
                        return $n(An);
                }
                function Wn(e, t) {
                    if ("click" === e) return $n(t);
                }
                function Vn(e, t) {
                    if ("input" === e || "change" === e) return $n(t);
                }
                var Qn =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (
                                  (e === t && (0 !== e || 1 / e == 1 / t)) ||
                                  (e != e && t != t)
                              );
                          };
                function Kn(e, t) {
                    if (Qn(e, t)) return !0;
                    if (
                        "object" != typeof e ||
                        null === e ||
                        "object" != typeof t ||
                        null === t
                    )
                        return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!ne.call(t, a) || !Qn(e[a], t[a])) return !1;
                    }
                    return !0;
                }
                function Yn(e) {
                    for (; e && e.firstChild; ) e = e.firstChild;
                    return e;
                }
                function Gn(e, t) {
                    var n,
                        r = Yn(e);
                    for (e = 0; r; ) {
                        if (3 === r.nodeType) {
                            if (
                                ((n = e + r.textContent.length),
                                e <= t && n >= t)
                            )
                                return { node: r, offset: t - e };
                            e = n;
                        }
                        e: {
                            for (; r; ) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e;
                                }
                                r = r.parentNode;
                            }
                            r = void 0;
                        }
                        r = Yn(r);
                    }
                }
                function Xn(e, t) {
                    return (
                        !(!e || !t) &&
                        (e === t ||
                            ((!e || 3 !== e.nodeType) &&
                                (t && 3 === t.nodeType
                                    ? Xn(e, t.parentNode)
                                    : "contains" in e
                                      ? e.contains(t)
                                      : !!e.compareDocumentPosition &&
                                        !!(16 & e.compareDocumentPosition(t)))))
                    );
                }
                function Zn(e) {
                    for (
                        var t = pt(
                            (e =
                                null != e &&
                                null != e.ownerDocument &&
                                null != e.ownerDocument.defaultView
                                    ? e.ownerDocument.defaultView
                                    : window).document,
                        );
                        t instanceof e.HTMLIFrameElement;

                    ) {
                        try {
                            var n =
                                "string" ==
                                typeof t.contentWindow.location.href;
                        } catch (e) {
                            n = !1;
                        }
                        if (!n) break;
                        t = pt((e = t.contentWindow).document);
                    }
                    return t;
                }
                function Jn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return (
                        t &&
                        (("input" === t &&
                            ("text" === e.type ||
                                "search" === e.type ||
                                "tel" === e.type ||
                                "url" === e.type ||
                                "password" === e.type)) ||
                            "textarea" === t ||
                            "true" === e.contentEditable)
                    );
                }
                function er(e, t) {
                    var n = Zn(t);
                    t = e.focusedElem;
                    var r = e.selectionRange;
                    if (
                        n !== t &&
                        t &&
                        t.ownerDocument &&
                        Xn(t.ownerDocument.documentElement, t)
                    ) {
                        if (null !== r && Jn(t))
                            if (
                                ((e = r.start),
                                void 0 === (n = r.end) && (n = e),
                                "selectionStart" in t)
                            )
                                (t.selectionStart = e),
                                    (t.selectionEnd = Math.min(
                                        n,
                                        t.value.length,
                                    ));
                            else if (
                                (n =
                                    ((e = t.ownerDocument || document) &&
                                        e.defaultView) ||
                                    window).getSelection
                            ) {
                                n = n.getSelection();
                                var a = t.textContent.length,
                                    o = Math.min(r.start, a);
                                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                                    !n.extend &&
                                        o > r &&
                                        ((a = r), (r = o), (o = a)),
                                    (a = Gn(t, o));
                                var l = Gn(t, r);
                                a &&
                                    l &&
                                    (1 !== n.rangeCount ||
                                        n.anchorNode !== a.node ||
                                        n.anchorOffset !== a.offset ||
                                        n.focusNode !== l.node ||
                                        n.focusOffset !== l.offset) &&
                                    ((e = e.createRange()).setStart(
                                        a.node,
                                        a.offset,
                                    ),
                                    n.removeAllRanges(),
                                    o > r
                                        ? (n.addRange(e),
                                          n.extend(l.node, l.offset))
                                        : (e.setEnd(l.node, l.offset),
                                          n.addRange(e)));
                            }
                        for (e = [], n = t; (n = n.parentNode); )
                            1 === n.nodeType &&
                                e.push({
                                    element: n,
                                    left: n.scrollLeft,
                                    top: n.scrollTop,
                                });
                        for (
                            "function" == typeof t.focus && t.focus(), t = 0;
                            t < e.length;
                            t++
                        )
                            ((n = e[t]).element.scrollLeft = n.left),
                                (n.element.scrollTop = n.top);
                    }
                }
                var tr =
                        tt &&
                        "documentMode" in document &&
                        11 >= document.documentMode,
                    nr = null,
                    rr = null,
                    ar = null,
                    or = !1;
                function lr(e, t, n) {
                    var r =
                        n.window === n
                            ? n.document
                            : 9 === n.nodeType
                              ? n
                              : n.ownerDocument;
                    or ||
                        null == nr ||
                        nr !== pt(r) ||
                        ((r =
                            "selectionStart" in (r = nr) && Jn(r)
                                ? {
                                      start: r.selectionStart,
                                      end: r.selectionEnd,
                                  }
                                : {
                                      anchorNode: (r = (
                                          (r.ownerDocument &&
                                              r.ownerDocument.defaultView) ||
                                          window
                                      ).getSelection()).anchorNode,
                                      anchorOffset: r.anchorOffset,
                                      focusNode: r.focusNode,
                                      focusOffset: r.focusOffset,
                                  }),
                        (ar && Kn(ar, r)) ||
                            ((ar = r),
                            0 < (r = $c(rr, "onSelect")).length &&
                                ((t = new Xt("onSelect", "select", null, t, n)),
                                e.push({ event: t, listeners: r }),
                                (t.target = nr))));
                }
                function ir(e, t) {
                    var n = {};
                    return (
                        (n[e.toLowerCase()] = t.toLowerCase()),
                        (n["Webkit" + e] = "webkit" + t),
                        (n["Moz" + e] = "moz" + t),
                        n
                    );
                }
                var sr = {
                        animationend: ir("Animation", "AnimationEnd"),
                        animationiteration: ir(
                            "Animation",
                            "AnimationIteration",
                        ),
                        animationstart: ir("Animation", "AnimationStart"),
                        transitionrun: ir("Transition", "TransitionRun"),
                        transitionstart: ir("Transition", "TransitionStart"),
                        transitioncancel: ir("Transition", "TransitionCancel"),
                        transitionend: ir("Transition", "TransitionEnd"),
                    },
                    ur = {},
                    cr = {};
                function dr(e) {
                    if (ur[e]) return ur[e];
                    if (!sr[e]) return e;
                    var t,
                        n = sr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in cr)
                            return (ur[e] = n[t]);
                    return e;
                }
                tt &&
                    ((cr = document.createElement("div").style),
                    "AnimationEvent" in window ||
                        (delete sr.animationend.animation,
                        delete sr.animationiteration.animation,
                        delete sr.animationstart.animation),
                    "TransitionEvent" in window ||
                        delete sr.transitionend.transition);
                var pr = dr("animationend"),
                    fr = dr("animationiteration"),
                    hr = dr("animationstart"),
                    mr = dr("transitionrun"),
                    gr = dr("transitionstart"),
                    br = dr("transitioncancel"),
                    yr = dr("transitionend"),
                    wr = new Map(),
                    vr =
                        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
                            " ",
                        );
                function kr(e, t) {
                    wr.set(e, t), Je(t, [e]);
                }
                var xr = [],
                    Sr = 0,
                    Er = 0;
                function Cr() {
                    for (var e = Sr, t = (Er = Sr = 0); t < e; ) {
                        var n = xr[t];
                        xr[t++] = null;
                        var r = xr[t];
                        xr[t++] = null;
                        var a = xr[t];
                        xr[t++] = null;
                        var o = xr[t];
                        if (((xr[t++] = null), null !== r && null !== a)) {
                            var l = r.pending;
                            null === l
                                ? (a.next = a)
                                : ((a.next = l.next), (l.next = a)),
                                (r.pending = a);
                        }
                        0 !== o && Tr(n, a, o);
                    }
                }
                function zr(e, t, n, r) {
                    (xr[Sr++] = e),
                        (xr[Sr++] = t),
                        (xr[Sr++] = n),
                        (xr[Sr++] = r),
                        (Er |= r),
                        (e.lanes |= r),
                        null !== (e = e.alternate) && (e.lanes |= r);
                }
                function _r(e, t, n, r) {
                    return zr(e, t, n, r), Nr(e);
                }
                function Pr(e, t) {
                    return zr(e, null, null, t), Nr(e);
                }
                function Tr(e, t, n) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n);
                    for (var a = !1, o = e.return; null !== o; )
                        (o.childLanes |= n),
                            null !== (r = o.alternate) && (r.childLanes |= n),
                            22 === o.tag &&
                                (null === (e = o.stateNode) ||
                                    1 & e._visibility ||
                                    (a = !0)),
                            (e = o),
                            (o = o.return);
                    a &&
                        null !== t &&
                        3 === e.tag &&
                        ((o = e.stateNode),
                        (a = 31 - we(n)),
                        null === (e = (o = o.hiddenUpdates)[a])
                            ? (o[a] = [t])
                            : e.push(t),
                        (t.lane = 536870912 | n));
                }
                function Nr(e) {
                    if (50 < _u) throw ((_u = 0), (Pu = null), Error(l(185)));
                    for (var t = e.return; null !== t; ) t = (e = t).return;
                    return 3 === e.tag ? e.stateNode : null;
                }
                var Rr = {},
                    Lr = new WeakMap();
                function Ar(e, t) {
                    if ("object" == typeof e && null !== e) {
                        var n = Lr.get(e);
                        return void 0 !== n
                            ? n
                            : ((t = { value: e, source: t, stack: $(t) }),
                              Lr.set(e, t),
                              t);
                    }
                    return { value: e, source: t, stack: $(t) };
                }
                var Or = [],
                    $r = 0,
                    Mr = null,
                    Dr = 0,
                    Fr = [],
                    Ir = 0,
                    jr = null,
                    Ur = 1,
                    Br = "";
                function qr(e, t) {
                    (Or[$r++] = Dr), (Or[$r++] = Mr), (Mr = e), (Dr = t);
                }
                function Hr(e, t, n) {
                    (Fr[Ir++] = Ur), (Fr[Ir++] = Br), (Fr[Ir++] = jr), (jr = e);
                    var r = Ur;
                    e = Br;
                    var a = 32 - we(r) - 1;
                    (r &= ~(1 << a)), (n += 1);
                    var o = 32 - we(t) + a;
                    if (30 < o) {
                        var l = a - (a % 5);
                        (o = (r & ((1 << l) - 1)).toString(32)),
                            (r >>= l),
                            (a -= l),
                            (Ur = (1 << (32 - we(t) + a)) | (n << a) | r),
                            (Br = o + e);
                    } else (Ur = (1 << o) | (n << a) | r), (Br = e);
                }
                function Wr(e) {
                    null !== e.return && (qr(e, 1), Hr(e, 1, 0));
                }
                function Vr(e) {
                    for (; e === Mr; )
                        (Mr = Or[--$r]),
                            (Or[$r] = null),
                            (Dr = Or[--$r]),
                            (Or[$r] = null);
                    for (; e === jr; )
                        (jr = Fr[--Ir]),
                            (Fr[Ir] = null),
                            (Br = Fr[--Ir]),
                            (Fr[Ir] = null),
                            (Ur = Fr[--Ir]),
                            (Fr[Ir] = null);
                }
                var Qr = null,
                    Kr = null,
                    Yr = !1,
                    Gr = null,
                    Xr = !1,
                    Zr = Error(l(519));
                function Jr(e) {
                    throw (aa(Ar(Error(l(418, "")), e)), Zr);
                }
                function ea(e) {
                    var t = e.stateNode,
                        n = e.type,
                        r = e.memoizedProps;
                    switch (((t[De] = e), (t[Fe] = r), n)) {
                        case "dialog":
                            Pc("cancel", t), Pc("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Pc("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (n = 0; n < Cc.length; n++) Pc(Cc[n], t);
                            break;
                        case "source":
                            Pc("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Pc("error", t), Pc("load", t);
                            break;
                        case "details":
                            Pc("toggle", t);
                            break;
                        case "input":
                            Pc("invalid", t),
                                gt(
                                    t,
                                    r.value,
                                    r.defaultValue,
                                    r.checked,
                                    r.defaultChecked,
                                    r.type,
                                    r.name,
                                    !0,
                                ),
                                ct(t);
                            break;
                        case "select":
                            Pc("invalid", t);
                            break;
                        case "textarea":
                            Pc("invalid", t),
                                vt(t, r.value, r.defaultValue, r.children),
                                ct(t);
                    }
                    ("string" != typeof (n = r.children) &&
                        "number" != typeof n &&
                        "bigint" != typeof n) ||
                    t.textContent === "" + n ||
                    !0 === r.suppressHydrationWarning ||
                    Uc(t.textContent, n)
                        ? (null != r.popover &&
                              (Pc("beforetoggle", t), Pc("toggle", t)),
                          null != r.onScroll && Pc("scroll", t),
                          null != r.onScrollEnd && Pc("scrollend", t),
                          null != r.onClick && (t.onclick = Bc),
                          (t = !0))
                        : (t = !1),
                        t || Jr(e);
                }
                function ta(e) {
                    for (Qr = e.return; Qr; )
                        switch (Qr.tag) {
                            case 3:
                            case 27:
                                return void (Xr = !0);
                            case 5:
                            case 13:
                                return void (Xr = !1);
                            default:
                                Qr = Qr.return;
                        }
                }
                function na(e) {
                    if (e !== Qr) return !1;
                    if (!Yr) return ta(e), (Yr = !0), !1;
                    var t,
                        n = !1;
                    if (
                        ((t = 3 !== e.tag && 27 !== e.tag) &&
                            ((t = 5 === e.tag) &&
                                (t =
                                    !(
                                        "form" !== (t = e.type) &&
                                        "button" !== t
                                    ) || Xc(e.type, e.memoizedProps)),
                            (t = !t)),
                        t && (n = !0),
                        n && Kr && Jr(e),
                        ta(e),
                        13 === e.tag)
                    ) {
                        if (
                            !(e =
                                null !== (e = e.memoizedState)
                                    ? e.dehydrated
                                    : null)
                        )
                            throw Error(l(317));
                        e: {
                            for (e = e.nextSibling, n = 0; e; ) {
                                if (8 === e.nodeType)
                                    if ("/$" === (t = e.data)) {
                                        if (0 === n) {
                                            Kr = ld(e.nextSibling);
                                            break e;
                                        }
                                        n--;
                                    } else
                                        ("$" !== t &&
                                            "$!" !== t &&
                                            "$?" !== t) ||
                                            n++;
                                e = e.nextSibling;
                            }
                            Kr = null;
                        }
                    } else Kr = Qr ? ld(e.stateNode.nextSibling) : null;
                    return !0;
                }
                function ra() {
                    (Kr = Qr = null), (Yr = !1);
                }
                function aa(e) {
                    null === Gr ? (Gr = [e]) : Gr.push(e);
                }
                var oa = Error(l(460)),
                    la = Error(l(474)),
                    ia = { then: function () {} };
                function sa(e) {
                    return "fulfilled" === (e = e.status) || "rejected" === e;
                }
                function ua() {}
                function ca(e, t, n) {
                    switch (
                        (void 0 === (n = e[n])
                            ? e.push(t)
                            : n !== t && (t.then(ua, ua), (t = n)),
                        t.status)
                    ) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            if ((e = t.reason) === oa) throw Error(l(483));
                            throw e;
                        default:
                            if ("string" == typeof t.status) t.then(ua, ua);
                            else {
                                if (
                                    null !== (e = eu) &&
                                    100 < e.shellSuspendCounter
                                )
                                    throw Error(l(482));
                                ((e = t).status = "pending"),
                                    e.then(
                                        function (e) {
                                            if ("pending" === t.status) {
                                                var n = t;
                                                (n.status = "fulfilled"),
                                                    (n.value = e);
                                            }
                                        },
                                        function (e) {
                                            if ("pending" === t.status) {
                                                var n = t;
                                                (n.status = "rejected"),
                                                    (n.reason = e);
                                            }
                                        },
                                    );
                            }
                            switch (t.status) {
                                case "fulfilled":
                                    return t.value;
                                case "rejected":
                                    if ((e = t.reason) === oa)
                                        throw Error(l(483));
                                    throw e;
                            }
                            throw ((da = t), oa);
                    }
                }
                var da = null;
                function pa() {
                    if (null === da) throw Error(l(459));
                    var e = da;
                    return (da = null), e;
                }
                var fa = null,
                    ha = 0;
                function ma(e) {
                    var t = ha;
                    return (ha += 1), null === fa && (fa = []), ca(fa, e, t);
                }
                function ga(e, t) {
                    (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
                }
                function ba(e, t) {
                    if (t.$$typeof === i) throw Error(l(525));
                    throw (
                        ((e = Object.prototype.toString.call(t)),
                        Error(
                            l(
                                31,
                                "[object Object]" === e
                                    ? "object with keys {" +
                                          Object.keys(t).join(", ") +
                                          "}"
                                    : e,
                            ),
                        ))
                    );
                }
                function ya(e) {
                    return (0, e._init)(e._payload);
                }
                function wa(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r
                                ? ((t.deletions = [n]), (t.flags |= 16))
                                : r.push(n);
                        }
                    }
                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r; ) t(n, r), (r = r.sibling);
                        return null;
                    }
                    function r(e) {
                        for (var t = new Map(); null !== e; )
                            null !== e.key
                                ? t.set(e.key, e)
                                : t.set(e.index, e),
                                (e = e.sibling);
                        return t;
                    }
                    function a(e, t) {
                        return (
                            ((e = Ms(e, t)).index = 0), (e.sibling = null), e
                        );
                    }
                    function o(t, n, r) {
                        return (
                            (t.index = r),
                            e
                                ? null !== (r = t.alternate)
                                    ? (r = r.index) < n
                                        ? ((t.flags |= 33554434), n)
                                        : r
                                    : ((t.flags |= 33554434), n)
                                : ((t.flags |= 1048576), n)
                        );
                    }
                    function i(t) {
                        return (
                            e && null === t.alternate && (t.flags |= 33554434),
                            t
                        );
                    }
                    function d(e, t, n, r) {
                        return null === t || 6 !== t.tag
                            ? (((t = Us(n, e.mode, r)).return = e), t)
                            : (((t = a(t, n)).return = e), t);
                    }
                    function p(e, t, n, r) {
                        var o = n.type;
                        return o === c
                            ? h(e, t, n.props.children, r, n.key)
                            : null !== t &&
                                (t.elementType === o ||
                                    ("object" == typeof o &&
                                        null !== o &&
                                        o.$$typeof === v &&
                                        ya(o) === t.type))
                              ? (ga((t = a(t, n.props)), n), (t.return = e), t)
                              : (ga(
                                    (t = Fs(
                                        n.type,
                                        n.key,
                                        n.props,
                                        null,
                                        e.mode,
                                        r,
                                    )),
                                    n,
                                ),
                                (t.return = e),
                                t);
                    }
                    function f(e, t, n, r) {
                        return null === t ||
                            4 !== t.tag ||
                            t.stateNode.containerInfo !== n.containerInfo ||
                            t.stateNode.implementation !== n.implementation
                            ? (((t = Bs(n, e.mode, r)).return = e), t)
                            : (((t = a(t, n.children || [])).return = e), t);
                    }
                    function h(e, t, n, r, o) {
                        return null === t || 7 !== t.tag
                            ? (((t = Is(n, e.mode, r, o)).return = e), t)
                            : (((t = a(t, n)).return = e), t);
                    }
                    function g(e, t, n) {
                        if (
                            ("string" == typeof t && "" !== t) ||
                            "number" == typeof t ||
                            "bigint" == typeof t
                        )
                            return ((t = Us("" + t, e.mode, n)).return = e), t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case s:
                                    return (
                                        ga(
                                            (n = Fs(
                                                t.type,
                                                t.key,
                                                t.props,
                                                null,
                                                e.mode,
                                                n,
                                            )),
                                            t,
                                        ),
                                        (n.return = e),
                                        n
                                    );
                                case u:
                                    return (
                                        ((t = Bs(t, e.mode, n)).return = e), t
                                    );
                                case v:
                                    return g(
                                        e,
                                        (t = (0, t._init)(t._payload)),
                                        n,
                                    );
                            }
                            if (j(t) || E(t))
                                return (
                                    ((t = Is(t, e.mode, n, null)).return = e), t
                                );
                            if ("function" == typeof t.then)
                                return g(e, ma(t), n);
                            if (t.$$typeof === m) return g(e, Ci(e, t), n);
                            ba(e, t);
                        }
                        return null;
                    }
                    function b(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if (
                            ("string" == typeof n && "" !== n) ||
                            "number" == typeof n ||
                            "bigint" == typeof n
                        )
                            return null !== a ? null : d(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case s:
                                    return n.key === a ? p(e, t, n, r) : null;
                                case u:
                                    return n.key === a ? f(e, t, n, r) : null;
                                case v:
                                    return b(
                                        e,
                                        t,
                                        (n = (a = n._init)(n._payload)),
                                        r,
                                    );
                            }
                            if (j(n) || E(n))
                                return null !== a ? null : h(e, t, n, r, null);
                            if ("function" == typeof n.then)
                                return b(e, t, ma(n), r);
                            if (n.$$typeof === m) return b(e, t, Ci(e, n), r);
                            ba(e, n);
                        }
                        return null;
                    }
                    function y(e, t, n, r, a) {
                        if (
                            ("string" == typeof r && "" !== r) ||
                            "number" == typeof r ||
                            "bigint" == typeof r
                        )
                            return d(t, (e = e.get(n) || null), "" + r, a);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case s:
                                    return p(
                                        t,
                                        (e =
                                            e.get(null === r.key ? n : r.key) ||
                                            null),
                                        r,
                                        a,
                                    );
                                case u:
                                    return f(
                                        t,
                                        (e =
                                            e.get(null === r.key ? n : r.key) ||
                                            null),
                                        r,
                                        a,
                                    );
                                case v:
                                    return y(
                                        e,
                                        t,
                                        n,
                                        (r = (0, r._init)(r._payload)),
                                        a,
                                    );
                            }
                            if (j(r) || E(r))
                                return h(t, (e = e.get(n) || null), r, a, null);
                            if ("function" == typeof r.then)
                                return y(e, t, n, ma(r), a);
                            if (r.$$typeof === m)
                                return y(e, t, n, Ci(t, r), a);
                            ba(t, r);
                        }
                        return null;
                    }
                    function w(d, p, f, h) {
                        if (
                            ("object" == typeof f &&
                                null !== f &&
                                f.type === c &&
                                null === f.key &&
                                (f = f.props.children),
                            "object" == typeof f && null !== f)
                        ) {
                            switch (f.$$typeof) {
                                case s:
                                    e: {
                                        for (var k = f.key; null !== p; ) {
                                            if (p.key === k) {
                                                if ((k = f.type) === c) {
                                                    if (7 === p.tag) {
                                                        n(d, p.sibling),
                                                            ((h = a(
                                                                p,
                                                                f.props
                                                                    .children,
                                                            )).return = d),
                                                            (d = h);
                                                        break e;
                                                    }
                                                } else if (
                                                    p.elementType === k ||
                                                    ("object" == typeof k &&
                                                        null !== k &&
                                                        k.$$typeof === v &&
                                                        ya(k) === p.type)
                                                ) {
                                                    n(d, p.sibling),
                                                        ga(
                                                            (h = a(p, f.props)),
                                                            f,
                                                        ),
                                                        (h.return = d),
                                                        (d = h);
                                                    break e;
                                                }
                                                n(d, p);
                                                break;
                                            }
                                            t(d, p), (p = p.sibling);
                                        }
                                        f.type === c
                                            ? (((h = Is(
                                                  f.props.children,
                                                  d.mode,
                                                  h,
                                                  f.key,
                                              )).return = d),
                                              (d = h))
                                            : (ga(
                                                  (h = Fs(
                                                      f.type,
                                                      f.key,
                                                      f.props,
                                                      null,
                                                      d.mode,
                                                      h,
                                                  )),
                                                  f,
                                              ),
                                              (h.return = d),
                                              (d = h));
                                    }
                                    return i(d);
                                case u:
                                    e: {
                                        for (k = f.key; null !== p; ) {
                                            if (p.key === k) {
                                                if (
                                                    4 === p.tag &&
                                                    p.stateNode
                                                        .containerInfo ===
                                                        f.containerInfo &&
                                                    p.stateNode
                                                        .implementation ===
                                                        f.implementation
                                                ) {
                                                    n(d, p.sibling),
                                                        ((h = a(
                                                            p,
                                                            f.children || [],
                                                        )).return = d),
                                                        (d = h);
                                                    break e;
                                                }
                                                n(d, p);
                                                break;
                                            }
                                            t(d, p), (p = p.sibling);
                                        }
                                        ((h = Bs(f, d.mode, h)).return = d),
                                            (d = h);
                                    }
                                    return i(d);
                                case v:
                                    return w(
                                        d,
                                        p,
                                        (f = (k = f._init)(f._payload)),
                                        h,
                                    );
                            }
                            if (j(f))
                                return (function (a, l, i, s) {
                                    for (
                                        var u = null,
                                            c = null,
                                            d = l,
                                            p = (l = 0),
                                            f = null;
                                        null !== d && p < i.length;
                                        p++
                                    ) {
                                        d.index > p
                                            ? ((f = d), (d = null))
                                            : (f = d.sibling);
                                        var h = b(a, d, i[p], s);
                                        if (null === h) {
                                            null === d && (d = f);
                                            break;
                                        }
                                        e &&
                                            d &&
                                            null === h.alternate &&
                                            t(a, d),
                                            (l = o(h, l, p)),
                                            null === c
                                                ? (u = h)
                                                : (c.sibling = h),
                                            (c = h),
                                            (d = f);
                                    }
                                    if (p === i.length)
                                        return n(a, d), Yr && qr(a, p), u;
                                    if (null === d) {
                                        for (; p < i.length; p++)
                                            null !== (d = g(a, i[p], s)) &&
                                                ((l = o(d, l, p)),
                                                null === c
                                                    ? (u = d)
                                                    : (c.sibling = d),
                                                (c = d));
                                        return Yr && qr(a, p), u;
                                    }
                                    for (d = r(d); p < i.length; p++)
                                        null !== (f = y(d, a, p, i[p], s)) &&
                                            (e &&
                                                null !== f.alternate &&
                                                d.delete(
                                                    null === f.key ? p : f.key,
                                                ),
                                            (l = o(f, l, p)),
                                            null === c
                                                ? (u = f)
                                                : (c.sibling = f),
                                            (c = f));
                                    return (
                                        e &&
                                            d.forEach(function (e) {
                                                return t(a, e);
                                            }),
                                        Yr && qr(a, p),
                                        u
                                    );
                                })(d, p, f, h);
                            if (E(f)) {
                                if ("function" != typeof (k = E(f)))
                                    throw Error(l(150));
                                return (function (a, i, s, u) {
                                    if (null == s) throw Error(l(151));
                                    for (
                                        var c = null,
                                            d = null,
                                            p = i,
                                            f = (i = 0),
                                            h = null,
                                            m = s.next();
                                        null !== p && !m.done;
                                        f++, m = s.next()
                                    ) {
                                        p.index > f
                                            ? ((h = p), (p = null))
                                            : (h = p.sibling);
                                        var w = b(a, p, m.value, u);
                                        if (null === w) {
                                            null === p && (p = h);
                                            break;
                                        }
                                        e &&
                                            p &&
                                            null === w.alternate &&
                                            t(a, p),
                                            (i = o(w, i, f)),
                                            null === d
                                                ? (c = w)
                                                : (d.sibling = w),
                                            (d = w),
                                            (p = h);
                                    }
                                    if (m.done)
                                        return n(a, p), Yr && qr(a, f), c;
                                    if (null === p) {
                                        for (; !m.done; f++, m = s.next())
                                            null !== (m = g(a, m.value, u)) &&
                                                ((i = o(m, i, f)),
                                                null === d
                                                    ? (c = m)
                                                    : (d.sibling = m),
                                                (d = m));
                                        return Yr && qr(a, f), c;
                                    }
                                    for (p = r(p); !m.done; f++, m = s.next())
                                        null !== (m = y(p, a, f, m.value, u)) &&
                                            (e &&
                                                null !== m.alternate &&
                                                p.delete(
                                                    null === m.key ? f : m.key,
                                                ),
                                            (i = o(m, i, f)),
                                            null === d
                                                ? (c = m)
                                                : (d.sibling = m),
                                            (d = m));
                                    return (
                                        e &&
                                            p.forEach(function (e) {
                                                return t(a, e);
                                            }),
                                        Yr && qr(a, f),
                                        c
                                    );
                                })(d, p, (f = k.call(f)), h);
                            }
                            if ("function" == typeof f.then)
                                return w(d, p, ma(f), h);
                            if (f.$$typeof === m) return w(d, p, Ci(d, f), h);
                            ba(d, f);
                        }
                        return ("string" == typeof f && "" !== f) ||
                            "number" == typeof f ||
                            "bigint" == typeof f
                            ? ((f = "" + f),
                              null !== p && 6 === p.tag
                                  ? (n(d, p.sibling),
                                    ((h = a(p, f)).return = d),
                                    (d = h))
                                  : (n(d, p),
                                    ((h = Us(f, d.mode, h)).return = d),
                                    (d = h)),
                              i(d))
                            : n(d, p);
                    }
                    return function (e, t, n, r) {
                        try {
                            ha = 0;
                            var a = w(e, t, n, r);
                            return (fa = null), a;
                        } catch (t) {
                            if (t === oa) throw t;
                            var o = Os(29, t, null, e.mode);
                            return (o.lanes = r), (o.return = e), o;
                        }
                    };
                }
                var va = wa(!0),
                    ka = wa(!1),
                    xa = W(null),
                    Sa = W(0);
                function Ea(e, t) {
                    Q(Sa, (e = su)), Q(xa, t), (su = e | t.baseLanes);
                }
                function Ca() {
                    Q(Sa, su), Q(xa, xa.current);
                }
                function za() {
                    (su = Sa.current), V(xa), V(Sa);
                }
                var _a = W(null),
                    Pa = null;
                function Ta(e) {
                    var t = e.alternate;
                    Q(Aa, 1 & Aa.current),
                        Q(_a, e),
                        null === Pa &&
                            (null === t ||
                                null !== xa.current ||
                                null !== t.memoizedState) &&
                            (Pa = e);
                }
                function Na(e) {
                    if (22 === e.tag) {
                        if ((Q(Aa, Aa.current), Q(_a, e), null === Pa)) {
                            var t = e.alternate;
                            null !== t && null !== t.memoizedState && (Pa = e);
                        }
                    } else Ra();
                }
                function Ra() {
                    Q(Aa, Aa.current), Q(_a, _a.current);
                }
                function La(e) {
                    V(_a), Pa === e && (Pa = null), V(Aa);
                }
                var Aa = W(0);
                function Oa(e) {
                    for (var t = e; null !== t; ) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (
                                null !== n &&
                                (null === (n = n.dehydrated) ||
                                    "$?" === n.data ||
                                    "$!" === n.data)
                            )
                                return t;
                        } else if (
                            19 === t.tag &&
                            void 0 !== t.memoizedProps.revealOrder
                        ) {
                            if (128 & t.flags) return t;
                        } else if (null !== t.child) {
                            (t.child.return = t), (t = t.child);
                            continue;
                        }
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e)
                                return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                    return null;
                }
                var $a =
                        "undefined" != typeof AbortController
                            ? AbortController
                            : function () {
                                  var e = [],
                                      t = (this.signal = {
                                          aborted: !1,
                                          addEventListener: function (t, n) {
                                              e.push(n);
                                          },
                                      });
                                  this.abort = function () {
                                      (t.aborted = !0),
                                          e.forEach(function (e) {
                                              return e();
                                          });
                                  };
                              },
                    Ma = r.unstable_scheduleCallback,
                    Da = r.unstable_NormalPriority,
                    Fa = {
                        $$typeof: m,
                        Consumer: null,
                        Provider: null,
                        _currentValue: null,
                        _currentValue2: null,
                        _threadCount: 0,
                    };
                function Ia() {
                    return {
                        controller: new $a(),
                        data: new Map(),
                        refCount: 0,
                    };
                }
                function ja(e) {
                    e.refCount--,
                        0 === e.refCount &&
                            Ma(Da, function () {
                                e.controller.abort();
                            });
                }
                var Ua = null,
                    Ba = 0,
                    qa = 0,
                    Ha = null;
                function Wa() {
                    if (0 == --Ba && null !== Ua) {
                        null !== Ha && (Ha.status = "fulfilled");
                        var e = Ua;
                        (Ua = null), (qa = 0), (Ha = null);
                        for (var t = 0; t < e.length; t++) (0, e[t])();
                    }
                }
                var Va = T.S;
                T.S = function (e, t) {
                    "object" == typeof t &&
                        null !== t &&
                        "function" == typeof t.then &&
                        (function (e, t) {
                            if (null === Ua) {
                                var n = (Ua = []);
                                (Ba = 0),
                                    (qa = vc()),
                                    (Ha = {
                                        status: "pending",
                                        value: void 0,
                                        then: function (e) {
                                            n.push(e);
                                        },
                                    });
                            }
                            Ba++, t.then(Wa, Wa);
                        })(0, t),
                        null !== Va && Va(e, t);
                };
                var Qa = W(null);
                function Ka() {
                    var e = Qa.current;
                    return null !== e ? e : eu.pooledCache;
                }
                function Ya(e, t) {
                    Q(Qa, null === t ? Qa.current : t.pool);
                }
                function Ga() {
                    var e = Ka();
                    return null === e
                        ? null
                        : { parent: Fa._currentValue, pool: e };
                }
                var Xa = 0,
                    Za = null,
                    Ja = null,
                    eo = null,
                    to = !1,
                    no = !1,
                    ro = !1,
                    ao = 0,
                    oo = 0,
                    lo = null,
                    io = 0;
                function so() {
                    throw Error(l(321));
                }
                function uo(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Qn(e[n], t[n])) return !1;
                    return !0;
                }
                function co(e, t, n, r, a, o) {
                    return (
                        (Xa = o),
                        (Za = t),
                        (t.memoizedState = null),
                        (t.updateQueue = null),
                        (t.lanes = 0),
                        (T.H =
                            null === e || null === e.memoizedState ? Cl : zl),
                        (ro = !1),
                        (o = n(r, a)),
                        (ro = !1),
                        no && (o = fo(t, n, r, a)),
                        po(e),
                        o
                    );
                }
                function po(e) {
                    T.H = El;
                    var t = null !== Ja && null !== Ja.next;
                    if (
                        ((Xa = 0),
                        (eo = Ja = Za = null),
                        (to = !1),
                        (oo = 0),
                        (lo = null),
                        t)
                    )
                        throw Error(l(300));
                    null === e ||
                        ql ||
                        (null !== (e = e.dependencies) && xi(e) && (ql = !0));
                }
                function fo(e, t, n, r) {
                    Za = e;
                    var a = 0;
                    do {
                        if ((no && (lo = null), (oo = 0), (no = !1), 25 <= a))
                            throw Error(l(301));
                        if (
                            ((a += 1), (eo = Ja = null), null != e.updateQueue)
                        ) {
                            var o = e.updateQueue;
                            (o.lastEffect = null),
                                (o.events = null),
                                (o.stores = null),
                                null != o.memoCache && (o.memoCache.index = 0);
                        }
                        (T.H = _l), (o = t(n, r));
                    } while (no);
                    return o;
                }
                function ho() {
                    var e = T.H,
                        t = e.useState()[0];
                    return (
                        (t = "function" == typeof t.then ? vo(t) : t),
                        (e = e.useState()[0]),
                        (null !== Ja ? Ja.memoizedState : null) !== e &&
                            (Za.flags |= 1024),
                        t
                    );
                }
                function mo() {
                    var e = 0 !== ao;
                    return (ao = 0), e;
                }
                function go(e, t, n) {
                    (t.updateQueue = e.updateQueue),
                        (t.flags &= -2053),
                        (e.lanes &= ~n);
                }
                function bo(e) {
                    if (to) {
                        for (e = e.memoizedState; null !== e; ) {
                            var t = e.queue;
                            null !== t && (t.pending = null), (e = e.next);
                        }
                        to = !1;
                    }
                    (Xa = 0),
                        (eo = Ja = Za = null),
                        (no = !1),
                        (oo = ao = 0),
                        (lo = null);
                }
                function yo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null,
                    };
                    return (
                        null === eo
                            ? (Za.memoizedState = eo = e)
                            : (eo = eo.next = e),
                        eo
                    );
                }
                function wo() {
                    if (null === Ja) {
                        var e = Za.alternate;
                        e = null !== e ? e.memoizedState : null;
                    } else e = Ja.next;
                    var t = null === eo ? Za.memoizedState : eo.next;
                    if (null !== t) (eo = t), (Ja = e);
                    else {
                        if (null === e) {
                            if (null === Za.alternate) throw Error(l(467));
                            throw Error(l(310));
                        }
                        (e = {
                            memoizedState: (Ja = e).memoizedState,
                            baseState: Ja.baseState,
                            baseQueue: Ja.baseQueue,
                            queue: Ja.queue,
                            next: null,
                        }),
                            null === eo
                                ? (Za.memoizedState = eo = e)
                                : (eo = eo.next = e);
                    }
                    return eo;
                }
                function vo(e) {
                    var t = oo;
                    return (
                        (oo += 1),
                        null === lo && (lo = []),
                        (e = ca(lo, e, t)),
                        (t = Za),
                        null === (null === eo ? t.memoizedState : eo.next) &&
                            ((t = t.alternate),
                            (T.H =
                                null === t || null === t.memoizedState
                                    ? Cl
                                    : zl)),
                        e
                    );
                }
                function ko(e) {
                    if (null !== e && "object" == typeof e) {
                        if ("function" == typeof e.then) return vo(e);
                        if (e.$$typeof === m) return Ei(e);
                    }
                    throw Error(l(438, String(e)));
                }
                function xo(e) {
                    var t = null,
                        n = Za.updateQueue;
                    if ((null !== n && (t = n.memoCache), null == t)) {
                        var r = Za.alternate;
                        null !== r &&
                            null !== (r = r.updateQueue) &&
                            null != (r = r.memoCache) &&
                            (t = {
                                data: r.data.map(function (e) {
                                    return e.slice();
                                }),
                                index: 0,
                            });
                    }
                    if (
                        (null == t && (t = { data: [], index: 0 }),
                        null === n &&
                            ((n = {
                                lastEffect: null,
                                events: null,
                                stores: null,
                                memoCache: null,
                            }),
                            (Za.updateQueue = n)),
                        (n.memoCache = t),
                        void 0 === (n = t.data[t.index]))
                    )
                        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
                            n[r] = x;
                    return t.index++, n;
                }
                function So(e, t) {
                    return "function" == typeof t ? t(e) : t;
                }
                function Eo(e) {
                    return Co(wo(), Ja, e);
                }
                function Co(e, t, n) {
                    var r = e.queue;
                    if (null === r) throw Error(l(311));
                    r.lastRenderedReducer = n;
                    var a = e.baseQueue,
                        o = r.pending;
                    if (null !== o) {
                        if (null !== a) {
                            var i = a.next;
                            (a.next = o.next), (o.next = i);
                        }
                        (t.baseQueue = a = o), (r.pending = null);
                    }
                    if (((o = e.baseState), null === a)) e.memoizedState = o;
                    else {
                        var s = (i = null),
                            u = null,
                            c = (t = a.next),
                            d = !1;
                        do {
                            var p = -536870913 & c.lane;
                            if (
                                p !== c.lane ? (nu & p) === p : (Xa & p) === p
                            ) {
                                var f = c.revertLane;
                                if (0 === f)
                                    null !== u &&
                                        (u = u.next =
                                            {
                                                lane: 0,
                                                revertLane: 0,
                                                action: c.action,
                                                hasEagerState: c.hasEagerState,
                                                eagerState: c.eagerState,
                                                next: null,
                                            }),
                                        p === qa && (d = !0);
                                else {
                                    if ((Xa & f) === f) {
                                        (c = c.next), f === qa && (d = !0);
                                        continue;
                                    }
                                    (p = {
                                        lane: 0,
                                        revertLane: c.revertLane,
                                        action: c.action,
                                        hasEagerState: c.hasEagerState,
                                        eagerState: c.eagerState,
                                        next: null,
                                    }),
                                        null === u
                                            ? ((s = u = p), (i = o))
                                            : (u = u.next = p),
                                        (Za.lanes |= f),
                                        (cu |= f);
                                }
                                (p = c.action),
                                    ro && n(o, p),
                                    (o = c.hasEagerState
                                        ? c.eagerState
                                        : n(o, p));
                            } else
                                (f = {
                                    lane: p,
                                    revertLane: c.revertLane,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null,
                                }),
                                    null === u
                                        ? ((s = u = f), (i = o))
                                        : (u = u.next = f),
                                    (Za.lanes |= p),
                                    (cu |= p);
                            c = c.next;
                        } while (null !== c && c !== t);
                        if (
                            (null === u ? (i = o) : (u.next = s),
                            !Qn(o, e.memoizedState) &&
                                ((ql = !0), d && null !== (n = Ha)))
                        )
                            throw n;
                        (e.memoizedState = o),
                            (e.baseState = i),
                            (e.baseQueue = u),
                            (r.lastRenderedState = o);
                    }
                    return (
                        null === a && (r.lanes = 0),
                        [e.memoizedState, r.dispatch]
                    );
                }
                function zo(e) {
                    var t = wo(),
                        n = t.queue;
                    if (null === n) throw Error(l(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        o = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var i = (a = a.next);
                        do {
                            (o = e(o, i.action)), (i = i.next);
                        } while (i !== a);
                        Qn(o, t.memoizedState) || (ql = !0),
                            (t.memoizedState = o),
                            null === t.baseQueue && (t.baseState = o),
                            (n.lastRenderedState = o);
                    }
                    return [o, r];
                }
                function _o(e, t, n) {
                    var r = Za,
                        a = wo(),
                        o = Yr;
                    if (o) {
                        if (void 0 === n) throw Error(l(407));
                        n = n();
                    } else n = t();
                    var i = !Qn((Ja || a).memoizedState, n);
                    if (
                        (i && ((a.memoizedState = n), (ql = !0)),
                        (a = a.queue),
                        Zo(No.bind(null, r, a, e), [e]),
                        a.getSnapshot !== t ||
                            i ||
                            (null !== eo && 1 & eo.memoizedState.tag))
                    ) {
                        if (
                            ((r.flags |= 2048),
                            Qo(
                                9,
                                To.bind(null, r, a, n, t),
                                { destroy: void 0 },
                                null,
                            ),
                            null === eu)
                        )
                            throw Error(l(349));
                        o || 60 & Xa || Po(r, t, n);
                    }
                    return n;
                }
                function Po(e, t, n) {
                    (e.flags |= 16384),
                        (e = { getSnapshot: t, value: n }),
                        null === (t = Za.updateQueue)
                            ? ((t = {
                                  lastEffect: null,
                                  events: null,
                                  stores: null,
                                  memoCache: null,
                              }),
                              (Za.updateQueue = t),
                              (t.stores = [e]))
                            : null === (n = t.stores)
                              ? (t.stores = [e])
                              : n.push(e);
                }
                function To(e, t, n, r) {
                    (t.value = n), (t.getSnapshot = r), Ro(t) && Lo(e);
                }
                function No(e, t, n) {
                    return n(function () {
                        Ro(t) && Lo(e);
                    });
                }
                function Ro(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Qn(e, n);
                    } catch (e) {
                        return !0;
                    }
                }
                function Lo(e) {
                    var t = Pr(e, 2);
                    null !== t && Ru(t, 0, 2);
                }
                function Ao(e) {
                    var t = yo();
                    if ("function" == typeof e) {
                        var n = e;
                        if (((e = n()), ro)) {
                            ye(!0);
                            try {
                                n();
                            } finally {
                                ye(!1);
                            }
                        }
                    }
                    return (
                        (t.memoizedState = t.baseState = e),
                        (t.queue = {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: So,
                            lastRenderedState: e,
                        }),
                        t
                    );
                }
                function Oo(e, t, n, r) {
                    return (
                        (e.baseState = n),
                        Co(e, Ja, "function" == typeof r ? r : So)
                    );
                }
                function $o(e, t, n, r, a) {
                    if (kl(e)) throw Error(l(485));
                    if (null !== (e = t.action)) {
                        var o = {
                            payload: a,
                            action: e,
                            next: null,
                            isTransition: !0,
                            status: "pending",
                            value: null,
                            reason: null,
                            listeners: [],
                            then: function (e) {
                                o.listeners.push(e);
                            },
                        };
                        null !== T.T ? n(!0) : (o.isTransition = !1),
                            r(o),
                            null === (n = t.pending)
                                ? ((o.next = t.pending = o), Mo(t, o))
                                : ((o.next = n.next), (t.pending = n.next = o));
                    }
                }
                function Mo(e, t) {
                    var n = t.action,
                        r = t.payload,
                        a = e.state;
                    if (t.isTransition) {
                        var o = T.T,
                            l = {};
                        T.T = l;
                        try {
                            var i = n(a, r),
                                s = T.S;
                            null !== s && s(l, i), Do(e, t, i);
                        } catch (n) {
                            Io(e, t, n);
                        } finally {
                            T.T = o;
                        }
                    } else
                        try {
                            Do(e, t, (o = n(a, r)));
                        } catch (n) {
                            Io(e, t, n);
                        }
                }
                function Do(e, t, n) {
                    null !== n &&
                    "object" == typeof n &&
                    "function" == typeof n.then
                        ? n.then(
                              function (n) {
                                  Fo(e, t, n);
                              },
                              function (n) {
                                  return Io(e, t, n);
                              },
                          )
                        : Fo(e, t, n);
                }
                function Fo(e, t, n) {
                    (t.status = "fulfilled"),
                        (t.value = n),
                        jo(t),
                        (e.state = n),
                        null !== (t = e.pending) &&
                            ((n = t.next) === t
                                ? (e.pending = null)
                                : ((n = n.next), (t.next = n), Mo(e, n)));
                }
                function Io(e, t, n) {
                    var r = e.pending;
                    if (((e.pending = null), null !== r)) {
                        r = r.next;
                        do {
                            (t.status = "rejected"),
                                (t.reason = n),
                                jo(t),
                                (t = t.next);
                        } while (t !== r);
                    }
                    e.action = null;
                }
                function jo(e) {
                    e = e.listeners;
                    for (var t = 0; t < e.length; t++) (0, e[t])();
                }
                function Uo(e, t) {
                    return t;
                }
                function Bo(e, t) {
                    if (Yr) {
                        var n = eu.formState;
                        if (null !== n) {
                            e: {
                                var r = Za;
                                if (Yr) {
                                    if (Kr) {
                                        t: {
                                            for (
                                                var a = Kr, o = Xr;
                                                8 !== a.nodeType;

                                            ) {
                                                if (!o) {
                                                    a = null;
                                                    break t;
                                                }
                                                if (
                                                    null ===
                                                    (a = ld(a.nextSibling))
                                                ) {
                                                    a = null;
                                                    break t;
                                                }
                                            }
                                            a =
                                                "F!" === (o = a.data) ||
                                                "F" === o
                                                    ? a
                                                    : null;
                                        }
                                        if (a) {
                                            (Kr = ld(a.nextSibling)),
                                                (r = "F!" === a.data);
                                            break e;
                                        }
                                    }
                                    Jr(r);
                                }
                                r = !1;
                            }
                            r && (t = n[0]);
                        }
                    }
                    return (
                        ((n = yo()).memoizedState = n.baseState = t),
                        (r = {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: Uo,
                            lastRenderedState: t,
                        }),
                        (n.queue = r),
                        (n = yl.bind(null, Za, r)),
                        (r.dispatch = n),
                        (r = Ao(!1)),
                        (o = vl.bind(null, Za, !1, r.queue)),
                        (a = {
                            state: t,
                            dispatch: null,
                            action: e,
                            pending: null,
                        }),
                        ((r = yo()).queue = a),
                        (n = $o.bind(null, Za, a, o, n)),
                        (a.dispatch = n),
                        (r.memoizedState = e),
                        [t, n, !1]
                    );
                }
                function qo(e) {
                    return Ho(wo(), Ja, e);
                }
                function Ho(e, t, n) {
                    (t = Co(e, t, Uo)[0]),
                        (e = Eo(So)[0]),
                        (t =
                            "object" == typeof t &&
                            null !== t &&
                            "function" == typeof t.then
                                ? vo(t)
                                : t);
                    var r = wo(),
                        a = r.queue,
                        o = a.dispatch;
                    return (
                        n !== r.memoizedState &&
                            ((Za.flags |= 2048),
                            Qo(
                                9,
                                Wo.bind(null, a, n),
                                { destroy: void 0 },
                                null,
                            )),
                        [t, o, e]
                    );
                }
                function Wo(e, t) {
                    e.action = t;
                }
                function Vo(e) {
                    var t = wo(),
                        n = Ja;
                    if (null !== n) return Ho(t, n, e);
                    wo(), (t = t.memoizedState);
                    var r = (n = wo()).queue.dispatch;
                    return (n.memoizedState = e), [t, r, !1];
                }
                function Qo(e, t, n, r) {
                    return (
                        (e = {
                            tag: e,
                            create: t,
                            inst: n,
                            deps: r,
                            next: null,
                        }),
                        null === (t = Za.updateQueue) &&
                            ((t = {
                                lastEffect: null,
                                events: null,
                                stores: null,
                                memoCache: null,
                            }),
                            (Za.updateQueue = t)),
                        null === (n = t.lastEffect)
                            ? (t.lastEffect = e.next = e)
                            : ((r = n.next),
                              (n.next = e),
                              (e.next = r),
                              (t.lastEffect = e)),
                        e
                    );
                }
                function Ko() {
                    return wo().memoizedState;
                }
                function Yo(e, t, n, r) {
                    var a = yo();
                    (Za.flags |= e),
                        (a.memoizedState = Qo(
                            1 | t,
                            n,
                            { destroy: void 0 },
                            void 0 === r ? null : r,
                        ));
                }
                function Go(e, t, n, r) {
                    var a = wo();
                    r = void 0 === r ? null : r;
                    var o = a.memoizedState.inst;
                    null !== Ja && null !== r && uo(r, Ja.memoizedState.deps)
                        ? (a.memoizedState = Qo(t, n, o, r))
                        : ((Za.flags |= e),
                          (a.memoizedState = Qo(1 | t, n, o, r)));
                }
                function Xo(e, t) {
                    Yo(8390656, 8, e, t);
                }
                function Zo(e, t) {
                    Go(2048, 8, e, t);
                }
                function Jo(e, t) {
                    return Go(4, 2, e, t);
                }
                function el(e, t) {
                    return Go(4, 4, e, t);
                }
                function tl(e, t) {
                    if ("function" == typeof t) {
                        e = e();
                        var n = t(e);
                        return function () {
                            "function" == typeof n ? n() : t(null);
                        };
                    }
                    if (null != t)
                        return (
                            (e = e()),
                            (t.current = e),
                            function () {
                                t.current = null;
                            }
                        );
                }
                function nl(e, t, n) {
                    (n = null != n ? n.concat([e]) : null),
                        Go(4, 4, tl.bind(null, t, e), n);
                }
                function rl() {}
                function al(e, t) {
                    var n = wo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== t && uo(t, r[1])
                        ? r[0]
                        : ((n.memoizedState = [e, t]), e);
                }
                function ol(e, t) {
                    var n = wo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    if (null !== t && uo(t, r[1])) return r[0];
                    if (((r = e()), ro)) {
                        ye(!0);
                        try {
                            e();
                        } finally {
                            ye(!1);
                        }
                    }
                    return (n.memoizedState = [r, t]), r;
                }
                function ll(e, t, n) {
                    return void 0 === n || 1073741824 & Xa
                        ? (e.memoizedState = t)
                        : ((e.memoizedState = n),
                          (e = Nu()),
                          (Za.lanes |= e),
                          (cu |= e),
                          n);
                }
                function il(e, t, n, r) {
                    return Qn(n, t)
                        ? n
                        : null !== xa.current
                          ? ((e = ll(e, n, r)), Qn(e, t) || (ql = !0), e)
                          : 42 & Xa
                            ? ((e = Nu()), (Za.lanes |= e), (cu |= e), t)
                            : ((ql = !0), (e.memoizedState = n));
                }
                function sl(e, t, n, r, a) {
                    var o = U.p;
                    U.p = 0 !== o && 8 > o ? o : 8;
                    var l,
                        i,
                        s,
                        u = T.T,
                        c = {};
                    (T.T = c), vl(e, !1, t, n);
                    try {
                        var d = a(),
                            p = T.S;
                        null !== p && p(c, d),
                            null !== d &&
                            "object" == typeof d &&
                            "function" == typeof d.then
                                ? wl(
                                      e,
                                      t,
                                      ((l = r),
                                      (i = []),
                                      (s = {
                                          status: "pending",
                                          value: null,
                                          reason: null,
                                          then: function (e) {
                                              i.push(e);
                                          },
                                      }),
                                      d.then(
                                          function () {
                                              (s.status = "fulfilled"),
                                                  (s.value = l);
                                              for (var e = 0; e < i.length; e++)
                                                  (0, i[e])(l);
                                          },
                                          function (e) {
                                              for (
                                                  s.status = "rejected",
                                                      s.reason = e,
                                                      e = 0;
                                                  e < i.length;
                                                  e++
                                              )
                                                  (0, i[e])(void 0);
                                          },
                                      ),
                                      s),
                                      Tu(),
                                  )
                                : wl(e, t, r, Tu());
                    } catch (n) {
                        wl(
                            e,
                            t,
                            {
                                then: function () {},
                                status: "rejected",
                                reason: n,
                            },
                            Tu(),
                        );
                    } finally {
                        (U.p = o), (T.T = u);
                    }
                }
                function ul() {}
                function cl(e, t, n, r) {
                    if (5 !== e.tag) throw Error(l(476));
                    var a = dl(e).queue;
                    sl(
                        e,
                        a,
                        t,
                        B,
                        null === n
                            ? ul
                            : function () {
                                  return pl(e), n(r);
                              },
                    );
                }
                function dl(e) {
                    var t = e.memoizedState;
                    if (null !== t) return t;
                    var n = {};
                    return (
                        ((t = {
                            memoizedState: B,
                            baseState: B,
                            baseQueue: null,
                            queue: {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: So,
                                lastRenderedState: B,
                            },
                            next: null,
                        }).next = {
                            memoizedState: n,
                            baseState: n,
                            baseQueue: null,
                            queue: {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: So,
                                lastRenderedState: n,
                            },
                            next: null,
                        }),
                        (e.memoizedState = t),
                        null !== (e = e.alternate) && (e.memoizedState = t),
                        t
                    );
                }
                function pl(e) {
                    wl(e, dl(e).next.queue, {}, Tu());
                }
                function fl() {
                    return Ei($d);
                }
                function hl() {
                    return wo().memoizedState;
                }
                function ml() {
                    return wo().memoizedState;
                }
                function gl(e) {
                    for (var t = e.return; null !== t; ) {
                        switch (t.tag) {
                            case 24:
                            case 3:
                                var n = Tu(),
                                    r = Ri(t, (e = Ni(n)), n);
                                return (
                                    null !== r && (Ru(r, 0, n), Li(r, t, n)),
                                    (t = { cache: Ia() }),
                                    void (e.payload = t)
                                );
                        }
                        t = t.return;
                    }
                }
                function bl(e, t, n) {
                    var r = Tu();
                    (n = {
                        lane: r,
                        revertLane: 0,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null,
                    }),
                        kl(e)
                            ? xl(t, n)
                            : null !== (n = _r(e, t, n, r)) &&
                              (Ru(n, 0, r), Sl(n, t, r));
                }
                function yl(e, t, n) {
                    wl(e, t, n, Tu());
                }
                function wl(e, t, n, r) {
                    var a = {
                        lane: r,
                        revertLane: 0,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null,
                    };
                    if (kl(e)) xl(t, a);
                    else {
                        var o = e.alternate;
                        if (
                            0 === e.lanes &&
                            (null === o || 0 === o.lanes) &&
                            null !== (o = t.lastRenderedReducer)
                        )
                            try {
                                var l = t.lastRenderedState,
                                    i = o(l, n);
                                if (
                                    ((a.hasEagerState = !0),
                                    (a.eagerState = i),
                                    Qn(i, l))
                                )
                                    return (
                                        zr(e, t, a, 0), null === eu && Cr(), !1
                                    );
                            } catch (e) {}
                        if (null !== (n = _r(e, t, a, r)))
                            return Ru(n, 0, r), Sl(n, t, r), !0;
                    }
                    return !1;
                }
                function vl(e, t, n, r) {
                    if (
                        ((r = {
                            lane: 2,
                            revertLane: vc(),
                            action: r,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null,
                        }),
                        kl(e))
                    ) {
                        if (t) throw Error(l(479));
                    } else null !== (t = _r(e, n, r, 2)) && Ru(t, 0, 2);
                }
                function kl(e) {
                    var t = e.alternate;
                    return e === Za || (null !== t && t === Za);
                }
                function xl(e, t) {
                    no = to = !0;
                    var n = e.pending;
                    null === n
                        ? (t.next = t)
                        : ((t.next = n.next), (n.next = t)),
                        (e.pending = t);
                }
                function Sl(e, t, n) {
                    if (4194176 & n) {
                        var r = t.lanes;
                        (n |= r &= e.pendingLanes), (t.lanes = n), Ae(e, n);
                    }
                }
                var El = {
                    readContext: Ei,
                    use: ko,
                    useCallback: so,
                    useContext: so,
                    useEffect: so,
                    useImperativeHandle: so,
                    useLayoutEffect: so,
                    useInsertionEffect: so,
                    useMemo: so,
                    useReducer: so,
                    useRef: so,
                    useState: so,
                    useDebugValue: so,
                    useDeferredValue: so,
                    useTransition: so,
                    useSyncExternalStore: so,
                    useId: so,
                };
                (El.useCacheRefresh = so),
                    (El.useMemoCache = so),
                    (El.useHostTransitionStatus = so),
                    (El.useFormState = so),
                    (El.useActionState = so),
                    (El.useOptimistic = so);
                var Cl = {
                    readContext: Ei,
                    use: ko,
                    useCallback: function (e, t) {
                        return (
                            (yo().memoizedState = [e, void 0 === t ? null : t]),
                            e
                        );
                    },
                    useContext: Ei,
                    useEffect: Xo,
                    useImperativeHandle: function (e, t, n) {
                        (n = null != n ? n.concat([e]) : null),
                            Yo(4194308, 4, tl.bind(null, t, e), n);
                    },
                    useLayoutEffect: function (e, t) {
                        return Yo(4194308, 4, e, t);
                    },
                    useInsertionEffect: function (e, t) {
                        Yo(4, 2, e, t);
                    },
                    useMemo: function (e, t) {
                        var n = yo();
                        t = void 0 === t ? null : t;
                        var r = e();
                        if (ro) {
                            ye(!0);
                            try {
                                e();
                            } finally {
                                ye(!1);
                            }
                        }
                        return (n.memoizedState = [r, t]), r;
                    },
                    useReducer: function (e, t, n) {
                        var r = yo();
                        if (void 0 !== n) {
                            var a = n(t);
                            if (ro) {
                                ye(!0);
                                try {
                                    n(t);
                                } finally {
                                    ye(!1);
                                }
                            }
                        } else a = t;
                        return (
                            (r.memoizedState = r.baseState = a),
                            (e = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: a,
                            }),
                            (r.queue = e),
                            (e = e.dispatch = bl.bind(null, Za, e)),
                            [r.memoizedState, e]
                        );
                    },
                    useRef: function (e) {
                        return (e = { current: e }), (yo().memoizedState = e);
                    },
                    useState: function (e) {
                        var t = (e = Ao(e)).queue,
                            n = yl.bind(null, Za, t);
                        return (t.dispatch = n), [e.memoizedState, n];
                    },
                    useDebugValue: rl,
                    useDeferredValue: function (e, t) {
                        return ll(yo(), e, t);
                    },
                    useTransition: function () {
                        var e = Ao(!1);
                        return (
                            (e = sl.bind(null, Za, e.queue, !0, !1)),
                            (yo().memoizedState = e),
                            [!1, e]
                        );
                    },
                    useSyncExternalStore: function (e, t, n) {
                        var r = Za,
                            a = yo();
                        if (Yr) {
                            if (void 0 === n) throw Error(l(407));
                            n = n();
                        } else {
                            if (((n = t()), null === eu)) throw Error(l(349));
                            60 & nu || Po(r, t, n);
                        }
                        a.memoizedState = n;
                        var o = { value: n, getSnapshot: t };
                        return (
                            (a.queue = o),
                            Xo(No.bind(null, r, o, e), [e]),
                            (r.flags |= 2048),
                            Qo(
                                9,
                                To.bind(null, r, o, n, t),
                                { destroy: void 0 },
                                null,
                            ),
                            n
                        );
                    },
                    useId: function () {
                        var e = yo(),
                            t = eu.identifierPrefix;
                        if (Yr) {
                            var n = Br;
                            (t =
                                ":" +
                                t +
                                "R" +
                                (n =
                                    (Ur & ~(1 << (32 - we(Ur) - 1))).toString(
                                        32,
                                    ) + n)),
                                0 < (n = ao++) && (t += "H" + n.toString(32)),
                                (t += ":");
                        } else
                            t = ":" + t + "r" + (n = io++).toString(32) + ":";
                        return (e.memoizedState = t);
                    },
                    useCacheRefresh: function () {
                        return (yo().memoizedState = gl.bind(null, Za));
                    },
                };
                (Cl.useMemoCache = xo),
                    (Cl.useHostTransitionStatus = fl),
                    (Cl.useFormState = Bo),
                    (Cl.useActionState = Bo),
                    (Cl.useOptimistic = function (e) {
                        var t = yo();
                        t.memoizedState = t.baseState = e;
                        var n = {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: null,
                            lastRenderedState: null,
                        };
                        return (
                            (t.queue = n),
                            (t = vl.bind(null, Za, !0, n)),
                            (n.dispatch = t),
                            [e, t]
                        );
                    });
                var zl = {
                    readContext: Ei,
                    use: ko,
                    useCallback: al,
                    useContext: Ei,
                    useEffect: Zo,
                    useImperativeHandle: nl,
                    useInsertionEffect: Jo,
                    useLayoutEffect: el,
                    useMemo: ol,
                    useReducer: Eo,
                    useRef: Ko,
                    useState: function () {
                        return Eo(So);
                    },
                    useDebugValue: rl,
                    useDeferredValue: function (e, t) {
                        return il(wo(), Ja.memoizedState, e, t);
                    },
                    useTransition: function () {
                        var e = Eo(So)[0],
                            t = wo().memoizedState;
                        return ["boolean" == typeof e ? e : vo(e), t];
                    },
                    useSyncExternalStore: _o,
                    useId: hl,
                };
                (zl.useCacheRefresh = ml),
                    (zl.useMemoCache = xo),
                    (zl.useHostTransitionStatus = fl),
                    (zl.useFormState = qo),
                    (zl.useActionState = qo),
                    (zl.useOptimistic = function (e, t) {
                        return Oo(wo(), 0, e, t);
                    });
                var _l = {
                    readContext: Ei,
                    use: ko,
                    useCallback: al,
                    useContext: Ei,
                    useEffect: Zo,
                    useImperativeHandle: nl,
                    useInsertionEffect: Jo,
                    useLayoutEffect: el,
                    useMemo: ol,
                    useReducer: zo,
                    useRef: Ko,
                    useState: function () {
                        return zo(So);
                    },
                    useDebugValue: rl,
                    useDeferredValue: function (e, t) {
                        var n = wo();
                        return null === Ja
                            ? ll(n, e, t)
                            : il(n, Ja.memoizedState, e, t);
                    },
                    useTransition: function () {
                        var e = zo(So)[0],
                            t = wo().memoizedState;
                        return ["boolean" == typeof e ? e : vo(e), t];
                    },
                    useSyncExternalStore: _o,
                    useId: hl,
                };
                function Pl(e, t, n, r) {
                    (n =
                        null == (n = n(r, (t = e.memoizedState)))
                            ? t
                            : N({}, t, n)),
                        (e.memoizedState = n),
                        0 === e.lanes && (e.updateQueue.baseState = n);
                }
                (_l.useCacheRefresh = ml),
                    (_l.useMemoCache = xo),
                    (_l.useHostTransitionStatus = fl),
                    (_l.useFormState = Vo),
                    (_l.useActionState = Vo),
                    (_l.useOptimistic = function (e, t) {
                        var n = wo();
                        return null !== Ja
                            ? Oo(n, 0, e, t)
                            : ((n.baseState = e), [e, n.queue.dispatch]);
                    });
                var Tl = {
                    isMounted: function (e) {
                        return !!(e = e._reactInternals) && M(e) === e;
                    },
                    enqueueSetState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = Tu(),
                            a = Ni(r);
                        (a.payload = t),
                            null != n && (a.callback = n),
                            null !== (t = Ri(e, a, r)) &&
                                (Ru(t, 0, r), Li(t, e, r));
                    },
                    enqueueReplaceState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = Tu(),
                            a = Ni(r);
                        (a.tag = 1),
                            (a.payload = t),
                            null != n && (a.callback = n),
                            null !== (t = Ri(e, a, r)) &&
                                (Ru(t, 0, r), Li(t, e, r));
                    },
                    enqueueForceUpdate: function (e, t) {
                        e = e._reactInternals;
                        var n = Tu(),
                            r = Ni(n);
                        (r.tag = 2),
                            null != t && (r.callback = t),
                            null !== (t = Ri(e, r, n)) &&
                                (Ru(t, 0, n), Li(t, e, n));
                    },
                };
                function Nl(e, t, n, r, a, o, l) {
                    return "function" ==
                        typeof (e = e.stateNode).shouldComponentUpdate
                        ? e.shouldComponentUpdate(r, o, l)
                        : !(
                              t.prototype &&
                              t.prototype.isPureReactComponent &&
                              Kn(n, r) &&
                              Kn(a, o)
                          );
                }
                function Rl(e, t, n, r) {
                    (e = t.state),
                        "function" == typeof t.componentWillReceiveProps &&
                            t.componentWillReceiveProps(n, r),
                        "function" ==
                            typeof t.UNSAFE_componentWillReceiveProps &&
                            t.UNSAFE_componentWillReceiveProps(n, r),
                        t.state !== e &&
                            Tl.enqueueReplaceState(t, t.state, null);
                }
                function Ll(e, t) {
                    var n = t;
                    if ("ref" in t)
                        for (var r in ((n = {}), t))
                            "ref" !== r && (n[r] = t[r]);
                    if ((e = e.defaultProps))
                        for (var a in (n === t && (n = N({}, n)), e))
                            void 0 === n[a] && (n[a] = e[a]);
                    return n;
                }
                var Al =
                    "function" == typeof reportError
                        ? reportError
                        : function (e) {
                              if (
                                  "object" == typeof window &&
                                  "function" == typeof window.ErrorEvent
                              ) {
                                  var t = new window.ErrorEvent("error", {
                                      bubbles: !0,
                                      cancelable: !0,
                                      message:
                                          "object" == typeof e &&
                                          null !== e &&
                                          "string" == typeof e.message
                                              ? String(e.message)
                                              : String(e),
                                      error: e,
                                  });
                                  if (!window.dispatchEvent(t)) return;
                              } else if (
                                  "object" == typeof process &&
                                  "function" == typeof process.emit
                              )
                                  return void process.emit(
                                      "uncaughtException",
                                      e,
                                  );
                              console.error(e);
                          };
                function Ol(e) {
                    Al(e);
                }
                function $l(e) {
                    console.error(e);
                }
                function Ml(e) {
                    Al(e);
                }
                function Dl(e, t) {
                    try {
                        (0, e.onUncaughtError)(t.value, {
                            componentStack: t.stack,
                        });
                    } catch (e) {
                        setTimeout(function () {
                            throw e;
                        });
                    }
                }
                function Fl(e, t, n) {
                    try {
                        (0, e.onCaughtError)(n.value, {
                            componentStack: n.stack,
                            errorBoundary: 1 === t.tag ? t.stateNode : null,
                        });
                    } catch (e) {
                        setTimeout(function () {
                            throw e;
                        });
                    }
                }
                function Il(e, t, n) {
                    return (
                        ((n = Ni(n)).tag = 3),
                        (n.payload = { element: null }),
                        (n.callback = function () {
                            Dl(e, t);
                        }),
                        n
                    );
                }
                function jl(e) {
                    return ((e = Ni(e)).tag = 3), e;
                }
                function Ul(e, t, n, r) {
                    var a = n.type.getDerivedStateFromError;
                    if ("function" == typeof a) {
                        var o = r.value;
                        (e.payload = function () {
                            return a(o);
                        }),
                            (e.callback = function () {
                                Fl(t, n, r);
                            });
                    }
                    var l = n.stateNode;
                    null !== l &&
                        "function" == typeof l.componentDidCatch &&
                        (e.callback = function () {
                            Fl(t, n, r),
                                "function" != typeof a &&
                                    (null === ku
                                        ? (ku = new Set([this]))
                                        : ku.add(this));
                            var e = r.stack;
                            this.componentDidCatch(r.value, {
                                componentStack: null !== e ? e : "",
                            });
                        });
                }
                var Bl = Error(l(461)),
                    ql = !1;
                function Hl(e, t, n, r) {
                    t.child =
                        null === e ? ka(t, null, n, r) : va(t, e.child, n, r);
                }
                function Wl(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    if ("ref" in r) {
                        var l = {};
                        for (var i in r) "ref" !== i && (l[i] = r[i]);
                    } else l = r;
                    return (
                        Si(t),
                        (r = co(e, t, n, l, o, a)),
                        (i = mo()),
                        null === e || ql
                            ? (Yr && i && Wr(t),
                              (t.flags |= 1),
                              Hl(e, t, r, a),
                              t.child)
                            : (go(e, t, a), di(e, t, a))
                    );
                }
                function Vl(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" != typeof o ||
                            $s(o) ||
                            void 0 !== o.defaultProps ||
                            null !== n.compare
                            ? (((e = Fs(n.type, null, r, t, t.mode, a)).ref =
                                  t.ref),
                              (e.return = t),
                              (t.child = e))
                            : ((t.tag = 15), (t.type = o), Ql(e, t, o, r, a));
                    }
                    if (((o = e.child), !pi(e, a))) {
                        var l = o.memoizedProps;
                        if (
                            (n = null !== (n = n.compare) ? n : Kn)(l, r) &&
                            e.ref === t.ref
                        )
                            return di(e, t, a);
                    }
                    return (
                        (t.flags |= 1),
                        ((e = Ms(o, r)).ref = t.ref),
                        (e.return = t),
                        (t.child = e)
                    );
                }
                function Ql(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (Kn(o, r) && e.ref === t.ref) {
                            if (
                                ((ql = !1), (t.pendingProps = r = o), !pi(e, a))
                            )
                                return (t.lanes = e.lanes), di(e, t, a);
                            131072 & e.flags && (ql = !0);
                        }
                    }
                    return Xl(e, t, n, r, a);
                }
                function Kl(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = !!(2 & t.stateNode._pendingVisibility),
                        l = null !== e ? e.memoizedState : null;
                    if ((Gl(e, t), "hidden" === r.mode || o)) {
                        if (128 & t.flags) {
                            if (
                                ((r = null !== l ? l.baseLanes | n : n),
                                null !== e)
                            ) {
                                for (a = t.child = e.child, o = 0; null !== a; )
                                    (o = o | a.lanes | a.childLanes),
                                        (a = a.sibling);
                                t.childLanes = o & ~r;
                            } else (t.childLanes = 0), (t.child = null);
                            return Yl(e, t, r, n);
                        }
                        if (!(536870912 & n))
                            return (
                                (t.lanes = t.childLanes = 536870912),
                                Yl(e, t, null !== l ? l.baseLanes | n : n, n)
                            );
                        (t.memoizedState = { baseLanes: 0, cachePool: null }),
                            null !== e &&
                                Ya(0, null !== l ? l.cachePool : null),
                            null !== l ? Ea(t, l) : Ca(),
                            Na(t);
                    } else
                        null !== l
                            ? (Ya(0, l.cachePool),
                              Ea(t, l),
                              Ra(),
                              (t.memoizedState = null))
                            : (null !== e && Ya(0, null), Ca(), Ra());
                    return Hl(e, t, a, n), t.child;
                }
                function Yl(e, t, n, r) {
                    var a = Ka();
                    return (
                        (a =
                            null === a
                                ? null
                                : { parent: Fa._currentValue, pool: a }),
                        (t.memoizedState = { baseLanes: n, cachePool: a }),
                        null !== e && Ya(0, null),
                        Ca(),
                        Na(t),
                        null !== e && ki(e, t, r, !0),
                        null
                    );
                }
                function Gl(e, t) {
                    var n = t.ref;
                    if (null === n)
                        null !== e && null !== e.ref && (t.flags |= 2097664);
                    else {
                        if ("function" != typeof n && "object" != typeof n)
                            throw Error(l(284));
                        (null !== e && e.ref === n) || (t.flags |= 2097664);
                    }
                }
                function Xl(e, t, n, r, a) {
                    return (
                        Si(t),
                        (n = co(e, t, n, r, void 0, a)),
                        (r = mo()),
                        null === e || ql
                            ? (Yr && r && Wr(t),
                              (t.flags |= 1),
                              Hl(e, t, n, a),
                              t.child)
                            : (go(e, t, a), di(e, t, a))
                    );
                }
                function Zl(e, t, n, r, a, o) {
                    return (
                        Si(t),
                        (t.updateQueue = null),
                        (n = fo(t, r, n, a)),
                        po(e),
                        (r = mo()),
                        null === e || ql
                            ? (Yr && r && Wr(t),
                              (t.flags |= 1),
                              Hl(e, t, n, o),
                              t.child)
                            : (go(e, t, o), di(e, t, o))
                    );
                }
                function Jl(e, t, n, r, a) {
                    if ((Si(t), null === t.stateNode)) {
                        var o = Rr,
                            l = n.contextType;
                        "object" == typeof l && null !== l && (o = Ei(l)),
                            (o = new n(r, o)),
                            (t.memoizedState =
                                null !== o.state && void 0 !== o.state
                                    ? o.state
                                    : null),
                            (o.updater = Tl),
                            (t.stateNode = o),
                            (o._reactInternals = t),
                            ((o = t.stateNode).props = r),
                            (o.state = t.memoizedState),
                            (o.refs = {}),
                            Pi(t),
                            (l = n.contextType),
                            (o.context =
                                "object" == typeof l && null !== l
                                    ? Ei(l)
                                    : Rr),
                            (o.state = t.memoizedState),
                            "function" ==
                                typeof (l = n.getDerivedStateFromProps) &&
                                (Pl(t, n, l, r), (o.state = t.memoizedState)),
                            "function" == typeof n.getDerivedStateFromProps ||
                                "function" ==
                                    typeof o.getSnapshotBeforeUpdate ||
                                ("function" !=
                                    typeof o.UNSAFE_componentWillMount &&
                                    "function" !=
                                        typeof o.componentWillMount) ||
                                ((l = o.state),
                                "function" == typeof o.componentWillMount &&
                                    o.componentWillMount(),
                                "function" ==
                                    typeof o.UNSAFE_componentWillMount &&
                                    o.UNSAFE_componentWillMount(),
                                l !== o.state &&
                                    Tl.enqueueReplaceState(o, o.state, null),
                                Mi(t, r, o, a),
                                $i(),
                                (o.state = t.memoizedState)),
                            "function" == typeof o.componentDidMount &&
                                (t.flags |= 4194308),
                            (r = !0);
                    } else if (null === e) {
                        o = t.stateNode;
                        var i = t.memoizedProps,
                            s = Ll(n, i);
                        o.props = s;
                        var u = o.context,
                            c = n.contextType;
                        (l = Rr),
                            "object" == typeof c && null !== c && (l = Ei(c));
                        var d = n.getDerivedStateFromProps;
                        (c =
                            "function" == typeof d ||
                            "function" == typeof o.getSnapshotBeforeUpdate),
                            (i = t.pendingProps !== i),
                            c ||
                                ("function" !=
                                    typeof o.UNSAFE_componentWillReceiveProps &&
                                    "function" !=
                                        typeof o.componentWillReceiveProps) ||
                                ((i || u !== l) && Rl(t, o, r, l)),
                            (_i = !1);
                        var p = t.memoizedState;
                        (o.state = p),
                            Mi(t, r, o, a),
                            $i(),
                            (u = t.memoizedState),
                            i || p !== u || _i
                                ? ("function" == typeof d &&
                                      (Pl(t, n, d, r), (u = t.memoizedState)),
                                  (s = _i || Nl(t, n, s, r, p, u, l))
                                      ? (c ||
                                            ("function" !=
                                                typeof o.UNSAFE_componentWillMount &&
                                                "function" !=
                                                    typeof o.componentWillMount) ||
                                            ("function" ==
                                                typeof o.componentWillMount &&
                                                o.componentWillMount(),
                                            "function" ==
                                                typeof o.UNSAFE_componentWillMount &&
                                                o.UNSAFE_componentWillMount()),
                                        "function" ==
                                            typeof o.componentDidMount &&
                                            (t.flags |= 4194308))
                                      : ("function" ==
                                            typeof o.componentDidMount &&
                                            (t.flags |= 4194308),
                                        (t.memoizedProps = r),
                                        (t.memoizedState = u)),
                                  (o.props = r),
                                  (o.state = u),
                                  (o.context = l),
                                  (r = s))
                                : ("function" == typeof o.componentDidMount &&
                                      (t.flags |= 4194308),
                                  (r = !1));
                    } else {
                        (o = t.stateNode),
                            Ti(e, t),
                            (c = Ll(n, (l = t.memoizedProps))),
                            (o.props = c),
                            (d = t.pendingProps),
                            (p = o.context),
                            (u = n.contextType),
                            (s = Rr),
                            "object" == typeof u && null !== u && (s = Ei(u)),
                            (u =
                                "function" ==
                                    typeof (i = n.getDerivedStateFromProps) ||
                                "function" ==
                                    typeof o.getSnapshotBeforeUpdate) ||
                                ("function" !=
                                    typeof o.UNSAFE_componentWillReceiveProps &&
                                    "function" !=
                                        typeof o.componentWillReceiveProps) ||
                                ((l !== d || p !== s) && Rl(t, o, r, s)),
                            (_i = !1),
                            (p = t.memoizedState),
                            (o.state = p),
                            Mi(t, r, o, a),
                            $i();
                        var f = t.memoizedState;
                        l !== d ||
                        p !== f ||
                        _i ||
                        (null !== e &&
                            null !== e.dependencies &&
                            xi(e.dependencies))
                            ? ("function" == typeof i &&
                                  (Pl(t, n, i, r), (f = t.memoizedState)),
                              (c =
                                  _i ||
                                  Nl(t, n, c, r, p, f, s) ||
                                  (null !== e &&
                                      null !== e.dependencies &&
                                      xi(e.dependencies)))
                                  ? (u ||
                                        ("function" !=
                                            typeof o.UNSAFE_componentWillUpdate &&
                                            "function" !=
                                                typeof o.componentWillUpdate) ||
                                        ("function" ==
                                            typeof o.componentWillUpdate &&
                                            o.componentWillUpdate(r, f, s),
                                        "function" ==
                                            typeof o.UNSAFE_componentWillUpdate &&
                                            o.UNSAFE_componentWillUpdate(
                                                r,
                                                f,
                                                s,
                                            )),
                                    "function" == typeof o.componentDidUpdate &&
                                        (t.flags |= 4),
                                    "function" ==
                                        typeof o.getSnapshotBeforeUpdate &&
                                        (t.flags |= 1024))
                                  : ("function" !=
                                        typeof o.componentDidUpdate ||
                                        (l === e.memoizedProps &&
                                            p === e.memoizedState) ||
                                        (t.flags |= 4),
                                    "function" !=
                                        typeof o.getSnapshotBeforeUpdate ||
                                        (l === e.memoizedProps &&
                                            p === e.memoizedState) ||
                                        (t.flags |= 1024),
                                    (t.memoizedProps = r),
                                    (t.memoizedState = f)),
                              (o.props = r),
                              (o.state = f),
                              (o.context = s),
                              (r = c))
                            : ("function" != typeof o.componentDidUpdate ||
                                  (l === e.memoizedProps &&
                                      p === e.memoizedState) ||
                                  (t.flags |= 4),
                              "function" != typeof o.getSnapshotBeforeUpdate ||
                                  (l === e.memoizedProps &&
                                      p === e.memoizedState) ||
                                  (t.flags |= 1024),
                              (r = !1));
                    }
                    return (
                        (o = r),
                        Gl(e, t),
                        (r = !!(128 & t.flags)),
                        o || r
                            ? ((o = t.stateNode),
                              (n =
                                  r &&
                                  "function" !=
                                      typeof n.getDerivedStateFromError
                                      ? null
                                      : o.render()),
                              (t.flags |= 1),
                              null !== e && r
                                  ? ((t.child = va(t, e.child, null, a)),
                                    (t.child = va(t, null, n, a)))
                                  : Hl(e, t, n, a),
                              (t.memoizedState = o.state),
                              (e = t.child))
                            : (e = di(e, t, a)),
                        e
                    );
                }
                function ei(e, t, n, r) {
                    return ra(), (t.flags |= 256), Hl(e, t, n, r), t.child;
                }
                var ti = { dehydrated: null, treeContext: null, retryLane: 0 };
                function ni(e) {
                    return { baseLanes: e, cachePool: Ga() };
                }
                function ri(e, t, n) {
                    return (
                        (e = null !== e ? e.childLanes & ~n : 0),
                        t && (e |= fu),
                        e
                    );
                }
                function ai(e, t, n) {
                    var r,
                        a = t.pendingProps,
                        o = !1,
                        i = !!(128 & t.flags);
                    if (
                        ((r = i) ||
                            (r =
                                (null === e || null !== e.memoizedState) &&
                                !!(2 & Aa.current)),
                        r && ((o = !0), (t.flags &= -129)),
                        (r = !!(32 & t.flags)),
                        (t.flags &= -33),
                        null === e)
                    ) {
                        if (Yr) {
                            if ((o ? Ta(t) : Ra(), Yr)) {
                                var s,
                                    u = Kr;
                                if ((s = u)) {
                                    e: {
                                        for (
                                            s = u, u = Xr;
                                            8 !== s.nodeType;

                                        ) {
                                            if (!u) {
                                                u = null;
                                                break e;
                                            }
                                            if (
                                                null === (s = ld(s.nextSibling))
                                            ) {
                                                u = null;
                                                break e;
                                            }
                                        }
                                        u = s;
                                    }
                                    null !== u
                                        ? ((t.memoizedState = {
                                              dehydrated: u,
                                              treeContext:
                                                  null !== jr
                                                      ? { id: Ur, overflow: Br }
                                                      : null,
                                              retryLane: 536870912,
                                          }),
                                          ((s = Os(
                                              18,
                                              null,
                                              null,
                                              0,
                                          )).stateNode = u),
                                          (s.return = t),
                                          (t.child = s),
                                          (Qr = t),
                                          (Kr = null),
                                          (s = !0))
                                        : (s = !1);
                                }
                                s || Jr(t);
                            }
                            if (
                                null !== (u = t.memoizedState) &&
                                null !== (u = u.dehydrated)
                            )
                                return (
                                    "$!" === u.data
                                        ? (t.lanes = 16)
                                        : (t.lanes = 536870912),
                                    null
                                );
                            La(t);
                        }
                        return (
                            (u = a.children),
                            (a = a.fallback),
                            o
                                ? (Ra(),
                                  (u = li(
                                      { mode: "hidden", children: u },
                                      (o = t.mode),
                                  )),
                                  (a = Is(a, o, n, null)),
                                  (u.return = t),
                                  (a.return = t),
                                  (u.sibling = a),
                                  (t.child = u),
                                  ((o = t.child).memoizedState = ni(n)),
                                  (o.childLanes = ri(e, r, n)),
                                  (t.memoizedState = ti),
                                  a)
                                : (Ta(t), oi(t, u))
                        );
                    }
                    if (
                        null !== (s = e.memoizedState) &&
                        null !== (u = s.dehydrated)
                    ) {
                        if (i)
                            256 & t.flags
                                ? (Ta(t), (t.flags &= -257), (t = ii(e, t, n)))
                                : null !== t.memoizedState
                                  ? (Ra(),
                                    (t.child = e.child),
                                    (t.flags |= 128),
                                    (t = null))
                                  : (Ra(),
                                    (o = a.fallback),
                                    (u = t.mode),
                                    (a = li(
                                        {
                                            mode: "visible",
                                            children: a.children,
                                        },
                                        u,
                                    )),
                                    ((o = Is(o, u, n, null)).flags |= 2),
                                    (a.return = t),
                                    (o.return = t),
                                    (a.sibling = o),
                                    (t.child = a),
                                    va(t, e.child, null, n),
                                    ((a = t.child).memoizedState = ni(n)),
                                    (a.childLanes = ri(e, r, n)),
                                    (t.memoizedState = ti),
                                    (t = o));
                        else if ((Ta(t), "$!" === u.data)) {
                            if ((r = u.nextSibling && u.nextSibling.dataset))
                                var c = r.dgst;
                            (r = c),
                                ((a = Error(l(419))).stack = ""),
                                (a.digest = r),
                                aa({ value: a, source: null, stack: null }),
                                (t = ii(e, t, n));
                        } else if (
                            (ql || ki(e, t, n, !1),
                            (r = !!(n & e.childLanes)),
                            ql || r)
                        ) {
                            if (null !== (r = eu)) {
                                if (42 & (a = n & -n)) a = 1;
                                else
                                    switch (a) {
                                        case 2:
                                            a = 1;
                                            break;
                                        case 8:
                                            a = 4;
                                            break;
                                        case 32:
                                            a = 16;
                                            break;
                                        case 128:
                                        case 256:
                                        case 512:
                                        case 1024:
                                        case 2048:
                                        case 4096:
                                        case 8192:
                                        case 16384:
                                        case 32768:
                                        case 65536:
                                        case 131072:
                                        case 262144:
                                        case 524288:
                                        case 1048576:
                                        case 2097152:
                                        case 4194304:
                                        case 8388608:
                                        case 16777216:
                                        case 33554432:
                                            a = 64;
                                            break;
                                        case 268435456:
                                            a = 134217728;
                                            break;
                                        default:
                                            a = 0;
                                    }
                                if (
                                    0 !==
                                        (a =
                                            a & (r.suspendedLanes | n)
                                                ? 0
                                                : a) &&
                                    a !== s.retryLane
                                )
                                    throw (
                                        ((s.retryLane = a),
                                        Pr(e, a),
                                        Ru(r, 0, a),
                                        Bl)
                                    );
                            }
                            "$?" === u.data || qu(), (t = ii(e, t, n));
                        } else
                            "$?" === u.data
                                ? ((t.flags |= 128),
                                  (t.child = e.child),
                                  (t = lc.bind(null, e)),
                                  (u._reactRetry = t),
                                  (t = null))
                                : ((e = s.treeContext),
                                  (Kr = ld(u.nextSibling)),
                                  (Qr = t),
                                  (Yr = !0),
                                  (Gr = null),
                                  (Xr = !1),
                                  null !== e &&
                                      ((Fr[Ir++] = Ur),
                                      (Fr[Ir++] = Br),
                                      (Fr[Ir++] = jr),
                                      (Ur = e.id),
                                      (Br = e.overflow),
                                      (jr = t)),
                                  ((t = oi(t, a.children)).flags |= 4096));
                        return t;
                    }
                    return o
                        ? (Ra(),
                          (o = a.fallback),
                          (u = t.mode),
                          (c = (s = e.child).sibling),
                          ((a = Ms(s, {
                              mode: "hidden",
                              children: a.children,
                          })).subtreeFlags = 31457280 & s.subtreeFlags),
                          null !== c
                              ? (o = Ms(c, o))
                              : ((o = Is(o, u, n, null)).flags |= 2),
                          (o.return = t),
                          (a.return = t),
                          (a.sibling = o),
                          (t.child = a),
                          (a = o),
                          (o = t.child),
                          null === (u = e.child.memoizedState)
                              ? (u = ni(n))
                              : (null !== (s = u.cachePool)
                                    ? ((c = Fa._currentValue),
                                      (s =
                                          s.parent !== c
                                              ? { parent: c, pool: c }
                                              : s))
                                    : (s = Ga()),
                                (u = {
                                    baseLanes: u.baseLanes | n,
                                    cachePool: s,
                                })),
                          (o.memoizedState = u),
                          (o.childLanes = ri(e, r, n)),
                          (t.memoizedState = ti),
                          a)
                        : (Ta(t),
                          (e = (n = e.child).sibling),
                          ((n = Ms(n, {
                              mode: "visible",
                              children: a.children,
                          })).return = t),
                          (n.sibling = null),
                          null !== e &&
                              (null === (r = t.deletions)
                                  ? ((t.deletions = [e]), (t.flags |= 16))
                                  : r.push(e)),
                          (t.child = n),
                          (t.memoizedState = null),
                          n);
                }
                function oi(e, t) {
                    return (
                        ((t = li(
                            { mode: "visible", children: t },
                            e.mode,
                        )).return = e),
                        (e.child = t)
                    );
                }
                function li(e, t) {
                    return js(e, t, 0, null);
                }
                function ii(e, t, n) {
                    return (
                        va(t, e.child, null, n),
                        ((e = oi(t, t.pendingProps.children)).flags |= 2),
                        (t.memoizedState = null),
                        e
                    );
                }
                function si(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), wi(e.return, t, n);
                }
                function ui(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o
                        ? (e.memoizedState = {
                              isBackwards: t,
                              rendering: null,
                              renderingStartTime: 0,
                              last: r,
                              tail: n,
                              tailMode: a,
                          })
                        : ((o.isBackwards = t),
                          (o.rendering = null),
                          (o.renderingStartTime = 0),
                          (o.last = r),
                          (o.tail = n),
                          (o.tailMode = a));
                }
                function ci(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if ((Hl(e, t, r.children, n), 2 & (r = Aa.current)))
                        (r = (1 & r) | 2), (t.flags |= 128);
                    else {
                        if (null !== e && 128 & e.flags)
                            e: for (e = t.child; null !== e; ) {
                                if (13 === e.tag)
                                    null !== e.memoizedState && si(e, n, t);
                                else if (19 === e.tag) si(e, n, t);
                                else if (null !== e.child) {
                                    (e.child.return = e), (e = e.child);
                                    continue;
                                }
                                if (e === t) break e;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === t)
                                        break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        r &= 1;
                    }
                    switch ((Q(Aa, r), a)) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n; )
                                null !== (e = n.alternate) &&
                                    null === Oa(e) &&
                                    (a = n),
                                    (n = n.sibling);
                            null === (n = a)
                                ? ((a = t.child), (t.child = null))
                                : ((a = n.sibling), (n.sibling = null)),
                                ui(t, !1, a, n, o);
                            break;
                        case "backwards":
                            for (
                                n = null, a = t.child, t.child = null;
                                null !== a;

                            ) {
                                if (
                                    null !== (e = a.alternate) &&
                                    null === Oa(e)
                                ) {
                                    t.child = a;
                                    break;
                                }
                                (e = a.sibling),
                                    (a.sibling = n),
                                    (n = a),
                                    (a = e);
                            }
                            ui(t, !0, n, null, o);
                            break;
                        case "together":
                            ui(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null;
                    }
                    return t.child;
                }
                function di(e, t, n) {
                    if (
                        (null !== e && (t.dependencies = e.dependencies),
                        (cu |= t.lanes),
                        !(n & t.childLanes))
                    ) {
                        if (null === e) return null;
                        if ((ki(e, t, n, !1), !(n & t.childLanes))) return null;
                    }
                    if (null !== e && t.child !== e.child) throw Error(l(153));
                    if (null !== t.child) {
                        for (
                            n = Ms((e = t.child), e.pendingProps),
                                t.child = n,
                                n.return = t;
                            null !== e.sibling;

                        )
                            (e = e.sibling),
                                ((n = n.sibling =
                                    Ms(e, e.pendingProps)).return = t);
                        n.sibling = null;
                    }
                    return t.child;
                }
                function pi(e, t) {
                    return (
                        !!(e.lanes & t) ||
                        !(null === (e = e.dependencies) || !xi(e))
                    );
                }
                function fi(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps) ql = !0;
                        else {
                            if (!(pi(e, n) || 128 & t.flags))
                                return (
                                    (ql = !1),
                                    (function (e, t, n) {
                                        switch (t.tag) {
                                            case 3:
                                                Z(t, t.stateNode.containerInfo),
                                                    bi(
                                                        0,
                                                        Fa,
                                                        e.memoizedState.cache,
                                                    ),
                                                    ra();
                                                break;
                                            case 27:
                                            case 5:
                                                ee(t);
                                                break;
                                            case 4:
                                                Z(t, t.stateNode.containerInfo);
                                                break;
                                            case 10:
                                                bi(
                                                    0,
                                                    t.type,
                                                    t.memoizedProps.value,
                                                );
                                                break;
                                            case 13:
                                                var r = t.memoizedState;
                                                if (null !== r)
                                                    return null !== r.dehydrated
                                                        ? (Ta(t),
                                                          (t.flags |= 128),
                                                          null)
                                                        : n & t.child.childLanes
                                                          ? ai(e, t, n)
                                                          : (Ta(t),
                                                            null !==
                                                            (e = di(e, t, n))
                                                                ? e.sibling
                                                                : null);
                                                Ta(t);
                                                break;
                                            case 19:
                                                var a = !!(128 & e.flags);
                                                if (
                                                    ((r = !!(
                                                        n & t.childLanes
                                                    )) ||
                                                        (ki(e, t, n, !1),
                                                        (r = !!(
                                                            n & t.childLanes
                                                        ))),
                                                    a)
                                                ) {
                                                    if (r) return ci(e, t, n);
                                                    t.flags |= 128;
                                                }
                                                if (
                                                    (null !==
                                                        (a = t.memoizedState) &&
                                                        ((a.rendering = null),
                                                        (a.tail = null),
                                                        (a.lastEffect = null)),
                                                    Q(Aa, Aa.current),
                                                    r)
                                                )
                                                    break;
                                                return null;
                                            case 22:
                                            case 23:
                                                return (
                                                    (t.lanes = 0), Kl(e, t, n)
                                                );
                                            case 24:
                                                bi(
                                                    0,
                                                    Fa,
                                                    e.memoizedState.cache,
                                                );
                                        }
                                        return di(e, t, n);
                                    })(e, t, n)
                                );
                            ql = !!(131072 & e.flags);
                        }
                    else
                        (ql = !1),
                            Yr && 1048576 & t.flags && Hr(t, Dr, t.index);
                    switch (((t.lanes = 0), t.tag)) {
                        case 16:
                            e: {
                                e = t.pendingProps;
                                var r = t.elementType,
                                    a = r._init;
                                if (
                                    ((r = a(r._payload)),
                                    (t.type = r),
                                    "function" != typeof r)
                                ) {
                                    if (null != r) {
                                        if ((a = r.$$typeof) === g) {
                                            (t.tag = 11),
                                                (t = Wl(null, t, r, e, n));
                                            break e;
                                        }
                                        if (a === w) {
                                            (t.tag = 14),
                                                (t = Vl(null, t, r, e, n));
                                            break e;
                                        }
                                    }
                                    throw (
                                        ((t = z(r) || r), Error(l(306, t, "")))
                                    );
                                }
                                $s(r)
                                    ? ((e = Ll(r, e)),
                                      (t.tag = 1),
                                      (t = Jl(null, t, r, e, n)))
                                    : ((t.tag = 0), (t = Xl(null, t, r, e, n)));
                            }
                            return t;
                        case 0:
                            return Xl(e, t, t.type, t.pendingProps, n);
                        case 1:
                            return Jl(
                                e,
                                t,
                                (r = t.type),
                                (a = Ll(r, t.pendingProps)),
                                n,
                            );
                        case 3:
                            e: {
                                if (
                                    (Z(t, t.stateNode.containerInfo),
                                    null === e)
                                )
                                    throw Error(l(387));
                                var o = t.pendingProps;
                                (r = (a = t.memoizedState).element),
                                    Ti(e, t),
                                    Mi(t, o, null, n);
                                var i = t.memoizedState;
                                if (
                                    ((o = i.cache),
                                    bi(0, Fa, o),
                                    o !== a.cache && vi(t, [Fa], n, !0),
                                    $i(),
                                    (o = i.element),
                                    a.isDehydrated)
                                ) {
                                    if (
                                        ((a = {
                                            element: o,
                                            isDehydrated: !1,
                                            cache: i.cache,
                                        }),
                                        (t.updateQueue.baseState = a),
                                        (t.memoizedState = a),
                                        256 & t.flags)
                                    ) {
                                        t = ei(e, t, o, n);
                                        break e;
                                    }
                                    if (o !== r) {
                                        aa((r = Ar(Error(l(424)), t))),
                                            (t = ei(e, t, o, n));
                                        break e;
                                    }
                                    for (
                                        Kr = ld(
                                            t.stateNode.containerInfo
                                                .firstChild,
                                        ),
                                            Qr = t,
                                            Yr = !0,
                                            Gr = null,
                                            Xr = !0,
                                            n = ka(t, null, o, n),
                                            t.child = n;
                                        n;

                                    )
                                        (n.flags = (-3 & n.flags) | 4096),
                                            (n = n.sibling);
                                } else {
                                    if ((ra(), o === r)) {
                                        t = di(e, t, n);
                                        break e;
                                    }
                                    Hl(e, t, o, n);
                                }
                                t = t.child;
                            }
                            return t;
                        case 26:
                            return (
                                Gl(e, t),
                                null === e
                                    ? (n = md(
                                          t.type,
                                          null,
                                          t.pendingProps,
                                          null,
                                      ))
                                        ? (t.memoizedState = n)
                                        : Yr ||
                                          ((n = t.type),
                                          (e = t.pendingProps),
                                          ((r = Kc(G.current).createElement(n))[
                                              De
                                          ] = t),
                                          (r[Fe] = e),
                                          Wc(r, n, e),
                                          Ge(r),
                                          (t.stateNode = r))
                                    : (t.memoizedState = md(
                                          t.type,
                                          e.memoizedProps,
                                          t.pendingProps,
                                          e.memoizedState,
                                      )),
                                null
                            );
                        case 27:
                            return (
                                ee(t),
                                null === e &&
                                    Yr &&
                                    ((r = t.stateNode =
                                        sd(t.type, t.pendingProps, G.current)),
                                    (Qr = t),
                                    (Xr = !0),
                                    (Kr = ld(r.firstChild))),
                                (r = t.pendingProps.children),
                                null !== e || Yr
                                    ? Hl(e, t, r, n)
                                    : (t.child = va(t, null, r, n)),
                                Gl(e, t),
                                t.child
                            );
                        case 5:
                            return (
                                null === e &&
                                    Yr &&
                                    ((a = r = Kr) &&
                                        (null !==
                                        (r = (function (e, t, n, r) {
                                            for (; 1 === e.nodeType; ) {
                                                var a = n;
                                                if (
                                                    e.nodeName.toLowerCase() !==
                                                    t.toLowerCase()
                                                ) {
                                                    if (
                                                        !r &&
                                                        ("INPUT" !==
                                                            e.nodeName ||
                                                            "hidden" !== e.type)
                                                    )
                                                        break;
                                                } else if (r) {
                                                    if (!e[He])
                                                        switch (t) {
                                                            case "meta":
                                                                if (
                                                                    !e.hasAttribute(
                                                                        "itemprop",
                                                                    )
                                                                )
                                                                    break;
                                                                return e;
                                                            case "link":
                                                                if (
                                                                    "stylesheet" ===
                                                                        (o =
                                                                            e.getAttribute(
                                                                                "rel",
                                                                            )) &&
                                                                    e.hasAttribute(
                                                                        "data-precedence",
                                                                    )
                                                                )
                                                                    break;
                                                                if (
                                                                    o !==
                                                                        a.rel ||
                                                                    e.getAttribute(
                                                                        "href",
                                                                    ) !==
                                                                        (null ==
                                                                        a.href
                                                                            ? null
                                                                            : a.href) ||
                                                                    e.getAttribute(
                                                                        "crossorigin",
                                                                    ) !==
                                                                        (null ==
                                                                        a.crossOrigin
                                                                            ? null
                                                                            : a.crossOrigin) ||
                                                                    e.getAttribute(
                                                                        "title",
                                                                    ) !==
                                                                        (null ==
                                                                        a.title
                                                                            ? null
                                                                            : a.title)
                                                                )
                                                                    break;
                                                                return e;
                                                            case "style":
                                                                if (
                                                                    e.hasAttribute(
                                                                        "data-precedence",
                                                                    )
                                                                )
                                                                    break;
                                                                return e;
                                                            case "script":
                                                                if (
                                                                    ((o =
                                                                        e.getAttribute(
                                                                            "src",
                                                                        )) !==
                                                                        (null ==
                                                                        a.src
                                                                            ? null
                                                                            : a.src) ||
                                                                        e.getAttribute(
                                                                            "type",
                                                                        ) !==
                                                                            (null ==
                                                                            a.type
                                                                                ? null
                                                                                : a.type) ||
                                                                        e.getAttribute(
                                                                            "crossorigin",
                                                                        ) !==
                                                                            (null ==
                                                                            a.crossOrigin
                                                                                ? null
                                                                                : a.crossOrigin)) &&
                                                                    o &&
                                                                    e.hasAttribute(
                                                                        "async",
                                                                    ) &&
                                                                    !e.hasAttribute(
                                                                        "itemprop",
                                                                    )
                                                                )
                                                                    break;
                                                                return e;
                                                            default:
                                                                return e;
                                                        }
                                                } else {
                                                    if (
                                                        "input" !== t ||
                                                        "hidden" !== e.type
                                                    )
                                                        return e;
                                                    var o =
                                                        null == a.name
                                                            ? null
                                                            : "" + a.name;
                                                    if (
                                                        "hidden" === a.type &&
                                                        e.getAttribute(
                                                            "name",
                                                        ) === o
                                                    )
                                                        return e;
                                                }
                                                if (
                                                    null ===
                                                    (e = ld(e.nextSibling))
                                                )
                                                    break;
                                            }
                                            return null;
                                        })(r, t.type, t.pendingProps, Xr))
                                            ? ((t.stateNode = r),
                                              (Qr = t),
                                              (Kr = ld(r.firstChild)),
                                              (Xr = !1),
                                              (a = !0))
                                            : (a = !1)),
                                    a || Jr(t)),
                                ee(t),
                                (a = t.type),
                                (o = t.pendingProps),
                                (i = null !== e ? e.memoizedProps : null),
                                (r = o.children),
                                Xc(a, o)
                                    ? (r = null)
                                    : null !== i && Xc(a, i) && (t.flags |= 32),
                                null !== t.memoizedState &&
                                    ((a = co(e, t, ho, null, null, n)),
                                    ($d._currentValue = a)),
                                Gl(e, t),
                                Hl(e, t, r, n),
                                t.child
                            );
                        case 6:
                            return (
                                null === e &&
                                    Yr &&
                                    ((e = n = Kr) &&
                                        (null !==
                                        (n = (function (e, t, n) {
                                            if ("" === t) return null;
                                            for (; 3 !== e.nodeType; ) {
                                                if (
                                                    (1 !== e.nodeType ||
                                                        "INPUT" !==
                                                            e.nodeName ||
                                                        "hidden" !== e.type) &&
                                                    !n
                                                )
                                                    return null;
                                                if (
                                                    null ===
                                                    (e = ld(e.nextSibling))
                                                )
                                                    return null;
                                            }
                                            return e;
                                        })(n, t.pendingProps, Xr))
                                            ? ((t.stateNode = n),
                                              (Qr = t),
                                              (Kr = null),
                                              (e = !0))
                                            : (e = !1)),
                                    e || Jr(t)),
                                null
                            );
                        case 13:
                            return ai(e, t, n);
                        case 4:
                            return (
                                Z(t, t.stateNode.containerInfo),
                                (r = t.pendingProps),
                                null === e
                                    ? (t.child = va(t, null, r, n))
                                    : Hl(e, t, r, n),
                                t.child
                            );
                        case 11:
                            return Wl(e, t, t.type, t.pendingProps, n);
                        case 7:
                            return Hl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return (
                                Hl(e, t, t.pendingProps.children, n), t.child
                            );
                        case 10:
                            return (
                                (r = t.pendingProps),
                                bi(0, t.type, r.value),
                                Hl(e, t, r.children, n),
                                t.child
                            );
                        case 9:
                            return (
                                (a = t.type._context),
                                (r = t.pendingProps.children),
                                Si(t),
                                (r = r((a = Ei(a)))),
                                (t.flags |= 1),
                                Hl(e, t, r, n),
                                t.child
                            );
                        case 14:
                            return Vl(e, t, t.type, t.pendingProps, n);
                        case 15:
                            return Ql(e, t, t.type, t.pendingProps, n);
                        case 19:
                            return ci(e, t, n);
                        case 22:
                            return Kl(e, t, n);
                        case 24:
                            return (
                                Si(t),
                                (r = Ei(Fa)),
                                null === e
                                    ? (null === (a = Ka()) &&
                                          ((a = eu),
                                          (o = Ia()),
                                          (a.pooledCache = o),
                                          o.refCount++,
                                          null !== o &&
                                              (a.pooledCacheLanes |= n),
                                          (a = o)),
                                      (t.memoizedState = {
                                          parent: r,
                                          cache: a,
                                      }),
                                      Pi(t),
                                      bi(0, Fa, a))
                                    : (!!(e.lanes & n) &&
                                          (Ti(e, t),
                                          Mi(t, null, null, n),
                                          $i()),
                                      (a = e.memoizedState),
                                      (o = t.memoizedState),
                                      a.parent !== r
                                          ? ((a = { parent: r, cache: r }),
                                            (t.memoizedState = a),
                                            0 === t.lanes &&
                                                (t.memoizedState =
                                                    t.updateQueue.baseState =
                                                        a),
                                            bi(0, Fa, r))
                                          : ((r = o.cache),
                                            bi(0, Fa, r),
                                            r !== a.cache &&
                                                vi(t, [Fa], n, !0))),
                                Hl(e, t, t.pendingProps.children, n),
                                t.child
                            );
                        case 29:
                            throw t.pendingProps;
                    }
                    throw Error(l(156, t.tag));
                }
                var hi = W(null),
                    mi = null,
                    gi = null;
                function bi(e, t, n) {
                    Q(hi, t._currentValue), (t._currentValue = n);
                }
                function yi(e) {
                    (e._currentValue = hi.current), V(hi);
                }
                function wi(e, t, n) {
                    for (; null !== e; ) {
                        var r = e.alternate;
                        if (
                            ((e.childLanes & t) !== t
                                ? ((e.childLanes |= t),
                                  null !== r && (r.childLanes |= t))
                                : null !== r &&
                                  (r.childLanes & t) !== t &&
                                  (r.childLanes |= t),
                            e === n)
                        )
                            break;
                        e = e.return;
                    }
                }
                function vi(e, t, n, r) {
                    var a = e.child;
                    for (null !== a && (a.return = e); null !== a; ) {
                        var o = a.dependencies;
                        if (null !== o) {
                            var i = a.child;
                            o = o.firstContext;
                            e: for (; null !== o; ) {
                                var s = o;
                                o = a;
                                for (var u = 0; u < t.length; u++)
                                    if (s.context === t[u]) {
                                        (o.lanes |= n),
                                            null !== (s = o.alternate) &&
                                                (s.lanes |= n),
                                            wi(o.return, n, e),
                                            r || (i = null);
                                        break e;
                                    }
                                o = s.next;
                            }
                        } else if (18 === a.tag) {
                            if (null === (i = a.return)) throw Error(l(341));
                            (i.lanes |= n),
                                null !== (o = i.alternate) && (o.lanes |= n),
                                wi(i, n, e),
                                (i = null);
                        } else i = a.child;
                        if (null !== i) i.return = a;
                        else
                            for (i = a; null !== i; ) {
                                if (i === e) {
                                    i = null;
                                    break;
                                }
                                if (null !== (a = i.sibling)) {
                                    (a.return = i.return), (i = a);
                                    break;
                                }
                                i = i.return;
                            }
                        a = i;
                    }
                }
                function ki(e, t, n, r) {
                    e = null;
                    for (var a = t, o = !1; null !== a; ) {
                        if (!o)
                            if (524288 & a.flags) o = !0;
                            else if (262144 & a.flags) break;
                        if (10 === a.tag) {
                            var i = a.alternate;
                            if (null === i) throw Error(l(387));
                            if (null !== (i = i.memoizedProps)) {
                                var s = a.type;
                                Qn(a.pendingProps.value, i.value) ||
                                    (null !== e ? e.push(s) : (e = [s]));
                            }
                        } else if (a === X.current) {
                            if (null === (i = a.alternate)) throw Error(l(387));
                            i.memoizedState.memoizedState !==
                                a.memoizedState.memoizedState &&
                                (null !== e ? e.push($d) : (e = [$d]));
                        }
                        a = a.return;
                    }
                    null !== e && vi(t, e, n, r), (t.flags |= 262144);
                }
                function xi(e) {
                    for (e = e.firstContext; null !== e; ) {
                        if (!Qn(e.context._currentValue, e.memoizedValue))
                            return !0;
                        e = e.next;
                    }
                    return !1;
                }
                function Si(e) {
                    (mi = e),
                        (gi = null),
                        null !== (e = e.dependencies) &&
                            (e.firstContext = null);
                }
                function Ei(e) {
                    return zi(mi, e);
                }
                function Ci(e, t) {
                    return null === mi && Si(e), zi(e, t);
                }
                function zi(e, t) {
                    var n = t._currentValue;
                    if (
                        ((t = { context: t, memoizedValue: n, next: null }),
                        null === gi)
                    ) {
                        if (null === e) throw Error(l(308));
                        (gi = t),
                            (e.dependencies = { lanes: 0, firstContext: t }),
                            (e.flags |= 524288);
                    } else gi = gi.next = t;
                    return n;
                }
                var _i = !1;
                function Pi(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            lanes: 0,
                            hiddenCallbacks: null,
                        },
                        callbacks: null,
                    };
                }
                function Ti(e, t) {
                    (e = e.updateQueue),
                        t.updateQueue === e &&
                            (t.updateQueue = {
                                baseState: e.baseState,
                                firstBaseUpdate: e.firstBaseUpdate,
                                lastBaseUpdate: e.lastBaseUpdate,
                                shared: e.shared,
                                callbacks: null,
                            });
                }
                function Ni(e) {
                    return {
                        lane: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null,
                    };
                }
                function Ri(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (((r = r.shared), 2 & Js)) {
                        var a = r.pending;
                        return (
                            null === a
                                ? (t.next = t)
                                : ((t.next = a.next), (a.next = t)),
                            (r.pending = t),
                            (t = Nr(e)),
                            Tr(e, null, n),
                            t
                        );
                    }
                    return zr(e, r, t, n), Nr(e);
                }
                function Li(e, t, n) {
                    if (
                        null !== (t = t.updateQueue) &&
                        ((t = t.shared), 4194176 & n)
                    ) {
                        var r = t.lanes;
                        (n |= r &= e.pendingLanes), (t.lanes = n), Ae(e, n);
                    }
                }
                function Ai(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var l = {
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: null,
                                    next: null,
                                };
                                null === o ? (a = o = l) : (o = o.next = l),
                                    (n = n.next);
                            } while (null !== n);
                            null === o ? (a = o = t) : (o = o.next = t);
                        } else a = o = t;
                        return (
                            (n = {
                                baseState: r.baseState,
                                firstBaseUpdate: a,
                                lastBaseUpdate: o,
                                shared: r.shared,
                                callbacks: r.callbacks,
                            }),
                            void (e.updateQueue = n)
                        );
                    }
                    null === (e = n.lastBaseUpdate)
                        ? (n.firstBaseUpdate = t)
                        : (e.next = t),
                        (n.lastBaseUpdate = t);
                }
                var Oi = !1;
                function $i() {
                    if (Oi && null !== Ha) throw Ha;
                }
                function Mi(e, t, n, r) {
                    Oi = !1;
                    var a = e.updateQueue;
                    _i = !1;
                    var o = a.firstBaseUpdate,
                        l = a.lastBaseUpdate,
                        i = a.shared.pending;
                    if (null !== i) {
                        a.shared.pending = null;
                        var s = i,
                            u = s.next;
                        (s.next = null),
                            null === l ? (o = u) : (l.next = u),
                            (l = s);
                        var c = e.alternate;
                        null !== c &&
                            (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
                            (null === i
                                ? (c.firstBaseUpdate = u)
                                : (i.next = u),
                            (c.lastBaseUpdate = s));
                    }
                    if (null !== o) {
                        var d = a.baseState;
                        for (l = 0, c = u = s = null, i = o; ; ) {
                            var p = -536870913 & i.lane,
                                f = p !== i.lane;
                            if (f ? (nu & p) === p : (r & p) === p) {
                                0 !== p && p === qa && (Oi = !0),
                                    null !== c &&
                                        (c = c.next =
                                            {
                                                lane: 0,
                                                tag: i.tag,
                                                payload: i.payload,
                                                callback: null,
                                                next: null,
                                            });
                                e: {
                                    var h = e,
                                        m = i;
                                    p = t;
                                    var g = n;
                                    switch (m.tag) {
                                        case 1:
                                            if (
                                                "function" ==
                                                typeof (h = m.payload)
                                            ) {
                                                d = h.call(g, d, p);
                                                break e;
                                            }
                                            d = h;
                                            break e;
                                        case 3:
                                            h.flags = (-65537 & h.flags) | 128;
                                        case 0:
                                            if (
                                                null ==
                                                (p =
                                                    "function" ==
                                                    typeof (h = m.payload)
                                                        ? h.call(g, d, p)
                                                        : h)
                                            )
                                                break e;
                                            d = N({}, d, p);
                                            break e;
                                        case 2:
                                            _i = !0;
                                    }
                                }
                                null !== (p = i.callback) &&
                                    ((e.flags |= 64),
                                    f && (e.flags |= 8192),
                                    null === (f = a.callbacks)
                                        ? (a.callbacks = [p])
                                        : f.push(p));
                            } else
                                (f = {
                                    lane: p,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null,
                                }),
                                    null === c
                                        ? ((u = c = f), (s = d))
                                        : (c = c.next = f),
                                    (l |= p);
                            if (null === (i = i.next)) {
                                if (null === (i = a.shared.pending)) break;
                                (i = (f = i).next),
                                    (f.next = null),
                                    (a.lastBaseUpdate = f),
                                    (a.shared.pending = null);
                            }
                        }
                        null === c && (s = d),
                            (a.baseState = s),
                            (a.firstBaseUpdate = u),
                            (a.lastBaseUpdate = c),
                            null === o && (a.shared.lanes = 0),
                            (cu |= l),
                            (e.lanes = l),
                            (e.memoizedState = d);
                    }
                }
                function Di(e, t) {
                    if ("function" != typeof e) throw Error(l(191, e));
                    e.call(t);
                }
                function Fi(e, t) {
                    var n = e.callbacks;
                    if (null !== n)
                        for (e.callbacks = null, e = 0; e < n.length; e++)
                            Di(n[e], t);
                }
                function Ii(e, t) {
                    try {
                        var n = t.updateQueue,
                            r = null !== n ? n.lastEffect : null;
                        if (null !== r) {
                            var a = r.next;
                            n = a;
                            do {
                                if ((n.tag & e) === e) {
                                    r = void 0;
                                    var o = n.create,
                                        l = n.inst;
                                    (r = o()), (l.destroy = r);
                                }
                                n = n.next;
                            } while (n !== a);
                        }
                    } catch (e) {
                        nc(t, t.return, e);
                    }
                }
                function ji(e, t, n) {
                    try {
                        var r = t.updateQueue,
                            a = null !== r ? r.lastEffect : null;
                        if (null !== a) {
                            var o = a.next;
                            r = o;
                            do {
                                if ((r.tag & e) === e) {
                                    var l = r.inst,
                                        i = l.destroy;
                                    if (void 0 !== i) {
                                        (l.destroy = void 0), (a = t);
                                        var s = n;
                                        try {
                                            i();
                                        } catch (e) {
                                            nc(a, s, e);
                                        }
                                    }
                                }
                                r = r.next;
                            } while (r !== o);
                        }
                    } catch (e) {
                        nc(t, t.return, e);
                    }
                }
                function Ui(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        var n = e.stateNode;
                        try {
                            Fi(t, n);
                        } catch (t) {
                            nc(e, e.return, t);
                        }
                    }
                }
                function Bi(e, t, n) {
                    (n.props = Ll(e.type, e.memoizedProps)),
                        (n.state = e.memoizedState);
                    try {
                        n.componentWillUnmount();
                    } catch (n) {
                        nc(e, t, n);
                    }
                }
                function qi(e, t) {
                    try {
                        var n = e.ref;
                        if (null !== n) {
                            var r = e.stateNode;
                            switch (e.tag) {
                                case 26:
                                case 27:
                                case 5:
                                    var a = r;
                                    break;
                                default:
                                    a = r;
                            }
                            "function" == typeof n
                                ? (e.refCleanup = n(a))
                                : (n.current = a);
                        }
                    } catch (n) {
                        nc(e, t, n);
                    }
                }
                function Hi(e, t) {
                    var n = e.ref,
                        r = e.refCleanup;
                    if (null !== n)
                        if ("function" == typeof r)
                            try {
                                r();
                            } catch (n) {
                                nc(e, t, n);
                            } finally {
                                (e.refCleanup = null),
                                    null != (e = e.alternate) &&
                                        (e.refCleanup = null);
                            }
                        else if ("function" == typeof n)
                            try {
                                n(null);
                            } catch (n) {
                                nc(e, t, n);
                            }
                        else n.current = null;
                }
                function Wi(e) {
                    var t = e.type,
                        n = e.memoizedProps,
                        r = e.stateNode;
                    try {
                        e: switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n.autoFocus && r.focus();
                                break e;
                            case "img":
                                n.src
                                    ? (r.src = n.src)
                                    : n.srcSet && (r.srcset = n.srcSet);
                        }
                    } catch (t) {
                        nc(e, e.return, t);
                    }
                }
                function Vi(e, t, n) {
                    try {
                        var r = e.stateNode;
                        !(function (e, t, n, r) {
                            switch (t) {
                                case "div":
                                case "span":
                                case "svg":
                                case "path":
                                case "a":
                                case "g":
                                case "p":
                                case "li":
                                    break;
                                case "input":
                                    var a = null,
                                        o = null,
                                        i = null,
                                        s = null,
                                        u = null,
                                        c = null,
                                        d = null;
                                    for (h in n) {
                                        var p = n[h];
                                        if (n.hasOwnProperty(h) && null != p)
                                            switch (h) {
                                                case "checked":
                                                case "value":
                                                    break;
                                                case "defaultValue":
                                                    u = p;
                                                default:
                                                    r.hasOwnProperty(h) ||
                                                        qc(e, t, h, null, r, p);
                                            }
                                    }
                                    for (var f in r) {
                                        var h = r[f];
                                        if (
                                            ((p = n[f]),
                                            r.hasOwnProperty(f) &&
                                                (null != h || null != p))
                                        )
                                            switch (f) {
                                                case "type":
                                                    o = h;
                                                    break;
                                                case "name":
                                                    a = h;
                                                    break;
                                                case "checked":
                                                    c = h;
                                                    break;
                                                case "defaultChecked":
                                                    d = h;
                                                    break;
                                                case "value":
                                                    i = h;
                                                    break;
                                                case "defaultValue":
                                                    s = h;
                                                    break;
                                                case "children":
                                                case "dangerouslySetInnerHTML":
                                                    if (null != h)
                                                        throw Error(l(137, t));
                                                    break;
                                                default:
                                                    h !== p &&
                                                        qc(e, t, f, h, r, p);
                                            }
                                    }
                                    return void mt(e, i, s, u, c, d, o, a);
                                case "select":
                                    for (o in ((h = i = s = f = null), n))
                                        if (
                                            ((u = n[o]),
                                            n.hasOwnProperty(o) && null != u)
                                        )
                                            switch (o) {
                                                case "value":
                                                    break;
                                                case "multiple":
                                                    h = u;
                                                default:
                                                    r.hasOwnProperty(o) ||
                                                        qc(e, t, o, null, r, u);
                                            }
                                    for (a in r)
                                        if (
                                            ((o = r[a]),
                                            (u = n[a]),
                                            r.hasOwnProperty(a) &&
                                                (null != o || null != u))
                                        )
                                            switch (a) {
                                                case "value":
                                                    f = o;
                                                    break;
                                                case "defaultValue":
                                                    s = o;
                                                    break;
                                                case "multiple":
                                                    i = o;
                                                default:
                                                    o !== u &&
                                                        qc(e, t, a, o, r, u);
                                            }
                                    return (
                                        (t = s),
                                        (n = i),
                                        (r = h),
                                        void (null != f
                                            ? yt(e, !!n, f, !1)
                                            : !!r != !!n &&
                                              (null != t
                                                  ? yt(e, !!n, t, !0)
                                                  : yt(
                                                        e,
                                                        !!n,
                                                        n ? [] : "",
                                                        !1,
                                                    )))
                                    );
                                case "textarea":
                                    for (s in ((h = f = null), n))
                                        if (
                                            ((a = n[s]),
                                            n.hasOwnProperty(s) &&
                                                null != a &&
                                                !r.hasOwnProperty(s))
                                        )
                                            switch (s) {
                                                case "value":
                                                case "children":
                                                    break;
                                                default:
                                                    qc(e, t, s, null, r, a);
                                            }
                                    for (i in r)
                                        if (
                                            ((a = r[i]),
                                            (o = n[i]),
                                            r.hasOwnProperty(i) &&
                                                (null != a || null != o))
                                        )
                                            switch (i) {
                                                case "value":
                                                    f = a;
                                                    break;
                                                case "defaultValue":
                                                    h = a;
                                                    break;
                                                case "children":
                                                    break;
                                                case "dangerouslySetInnerHTML":
                                                    if (null != a)
                                                        throw Error(l(91));
                                                    break;
                                                default:
                                                    a !== o &&
                                                        qc(e, t, i, a, r, o);
                                            }
                                    return void wt(e, f, h);
                                case "option":
                                    for (var m in n)
                                        (f = n[m]),
                                            n.hasOwnProperty(m) &&
                                                null != f &&
                                                !r.hasOwnProperty(m) &&
                                                ("selected" === m
                                                    ? (e.selected = !1)
                                                    : qc(e, t, m, null, r, f));
                                    for (u in r)
                                        (f = r[u]),
                                            (h = n[u]),
                                            !r.hasOwnProperty(u) ||
                                                f === h ||
                                                (null == f && null == h) ||
                                                ("selected" === u
                                                    ? (e.selected =
                                                          f &&
                                                          "function" !=
                                                              typeof f &&
                                                          "symbol" != typeof f)
                                                    : qc(e, t, u, f, r, h));
                                    return;
                                case "img":
                                case "link":
                                case "area":
                                case "base":
                                case "br":
                                case "col":
                                case "embed":
                                case "hr":
                                case "keygen":
                                case "meta":
                                case "param":
                                case "source":
                                case "track":
                                case "wbr":
                                case "menuitem":
                                    for (var g in n)
                                        (f = n[g]),
                                            n.hasOwnProperty(g) &&
                                                null != f &&
                                                !r.hasOwnProperty(g) &&
                                                qc(e, t, g, null, r, f);
                                    for (c in r)
                                        if (
                                            ((f = r[c]),
                                            (h = n[c]),
                                            r.hasOwnProperty(c) &&
                                                f !== h &&
                                                (null != f || null != h))
                                        )
                                            switch (c) {
                                                case "children":
                                                case "dangerouslySetInnerHTML":
                                                    if (null != f)
                                                        throw Error(l(137, t));
                                                    break;
                                                default:
                                                    qc(e, t, c, f, r, h);
                                            }
                                    return;
                                default:
                                    if (Ct(t)) {
                                        for (var b in n)
                                            (f = n[b]),
                                                n.hasOwnProperty(b) &&
                                                    void 0 !== f &&
                                                    !r.hasOwnProperty(b) &&
                                                    Hc(e, t, b, void 0, r, f);
                                        for (d in r)
                                            (f = r[d]),
                                                (h = n[d]),
                                                !r.hasOwnProperty(d) ||
                                                    f === h ||
                                                    (void 0 === f &&
                                                        void 0 === h) ||
                                                    Hc(e, t, d, f, r, h);
                                        return;
                                    }
                            }
                            for (var y in n)
                                (f = n[y]),
                                    n.hasOwnProperty(y) &&
                                        null != f &&
                                        !r.hasOwnProperty(y) &&
                                        qc(e, t, y, null, r, f);
                            for (p in r)
                                (f = r[p]),
                                    (h = n[p]),
                                    !r.hasOwnProperty(p) ||
                                        f === h ||
                                        (null == f && null == h) ||
                                        qc(e, t, p, f, r, h);
                        })(r, e.type, n, t),
                            (r[Fe] = t);
                    } catch (t) {
                        nc(e, e.return, t);
                    }
                }
                function Qi(e) {
                    return (
                        5 === e.tag ||
                        3 === e.tag ||
                        26 === e.tag ||
                        27 === e.tag ||
                        4 === e.tag
                    );
                }
                function Ki(e) {
                    e: for (;;) {
                        for (; null === e.sibling; ) {
                            if (null === e.return || Qi(e.return)) return null;
                            e = e.return;
                        }
                        for (
                            e.sibling.return = e.return, e = e.sibling;
                            5 !== e.tag &&
                            6 !== e.tag &&
                            27 !== e.tag &&
                            18 !== e.tag;

                        ) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            (e.child.return = e), (e = e.child);
                        }
                        if (!(2 & e.flags)) return e.stateNode;
                    }
                }
                function Yi(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r)
                        (e = e.stateNode),
                            t
                                ? 8 === n.nodeType
                                    ? n.parentNode.insertBefore(e, t)
                                    : n.insertBefore(e, t)
                                : (8 === n.nodeType
                                      ? (t = n.parentNode).insertBefore(e, n)
                                      : (t = n).appendChild(e),
                                  null != (n = n._reactRootContainer) ||
                                      null !== t.onclick ||
                                      (t.onclick = Bc));
                    else if (4 !== r && 27 !== r && null !== (e = e.child))
                        for (Yi(e, t, n), e = e.sibling; null !== e; )
                            Yi(e, t, n), (e = e.sibling);
                }
                function Gi(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r)
                        (e = e.stateNode),
                            t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && 27 !== r && null !== (e = e.child))
                        for (Gi(e, t, n), e = e.sibling; null !== e; )
                            Gi(e, t, n), (e = e.sibling);
                }
                var Xi = !1,
                    Zi = !1,
                    Ji = !1,
                    es = "function" == typeof WeakSet ? WeakSet : Set,
                    ts = null,
                    ns = !1;
                function rs(e, t, n) {
                    var r = n.flags;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            gs(e, n), 4 & r && Ii(5, n);
                            break;
                        case 1:
                            if ((gs(e, n), 4 & r))
                                if (((e = n.stateNode), null === t))
                                    try {
                                        e.componentDidMount();
                                    } catch (e) {
                                        nc(n, n.return, e);
                                    }
                                else {
                                    var a = Ll(n.type, t.memoizedProps);
                                    t = t.memoizedState;
                                    try {
                                        e.componentDidUpdate(
                                            a,
                                            t,
                                            e.__reactInternalSnapshotBeforeUpdate,
                                        );
                                    } catch (e) {
                                        nc(n, n.return, e);
                                    }
                                }
                            64 & r && Ui(n), 512 & r && qi(n, n.return);
                            break;
                        case 3:
                            if (
                                (gs(e, n),
                                64 & r && null !== (r = n.updateQueue))
                            ) {
                                if (((e = null), null !== n.child))
                                    switch (n.child.tag) {
                                        case 27:
                                        case 5:
                                        case 1:
                                            e = n.child.stateNode;
                                    }
                                try {
                                    Fi(r, e);
                                } catch (e) {
                                    nc(n, n.return, e);
                                }
                            }
                            break;
                        case 26:
                            gs(e, n), 512 & r && qi(n, n.return);
                            break;
                        case 27:
                        case 5:
                            gs(e, n),
                                null === t && 4 & r && Wi(n),
                                512 & r && qi(n, n.return);
                            break;
                        case 12:
                        default:
                            gs(e, n);
                            break;
                        case 13:
                            gs(e, n), 4 & r && us(e, n);
                            break;
                        case 22:
                            if (!(a = null !== n.memoizedState || Xi)) {
                                t =
                                    (null !== t && null !== t.memoizedState) ||
                                    Zi;
                                var o = Xi,
                                    l = Zi;
                                (Xi = a),
                                    (Zi = t) && !l
                                        ? ys(e, n, !!(8772 & n.subtreeFlags))
                                        : gs(e, n),
                                    (Xi = o),
                                    (Zi = l);
                            }
                            512 & r &&
                                ("manual" === n.memoizedProps.mode
                                    ? qi(n, n.return)
                                    : Hi(n, n.return));
                    }
                }
                function as(e) {
                    var t = e.alternate;
                    null !== t && ((e.alternate = null), as(t)),
                        (e.child = null),
                        (e.deletions = null),
                        (e.sibling = null),
                        5 === e.tag && null !== (t = e.stateNode) && We(t),
                        (e.stateNode = null),
                        (e.return = null),
                        (e.dependencies = null),
                        (e.memoizedProps = null),
                        (e.memoizedState = null),
                        (e.pendingProps = null),
                        (e.stateNode = null),
                        (e.updateQueue = null);
                }
                var os = null,
                    ls = !1;
                function is(e, t, n) {
                    for (n = n.child; null !== n; )
                        ss(e, t, n), (n = n.sibling);
                }
                function ss(e, t, n) {
                    if (be && "function" == typeof be.onCommitFiberUnmount)
                        try {
                            be.onCommitFiberUnmount(ge, n);
                        } catch (e) {}
                    switch (n.tag) {
                        case 26:
                            Zi || Hi(n, t),
                                is(e, t, n),
                                n.memoizedState
                                    ? n.memoizedState.count--
                                    : n.stateNode &&
                                      (n = n.stateNode).parentNode.removeChild(
                                          n,
                                      );
                            break;
                        case 27:
                            Zi || Hi(n, t);
                            var r = os,
                                a = ls;
                            for (
                                os = n.stateNode,
                                    is(e, t, n),
                                    t = (n = n.stateNode).attributes;
                                t.length;

                            )
                                n.removeAttributeNode(t[0]);
                            We(n), (os = r), (ls = a);
                            break;
                        case 5:
                            Zi || Hi(n, t);
                        case 6:
                            a = os;
                            var o = ls;
                            if (
                                ((os = null),
                                is(e, t, n),
                                (ls = o),
                                null !== (os = a))
                            )
                                if (ls)
                                    try {
                                        (e = os),
                                            (r = n.stateNode),
                                            8 === e.nodeType
                                                ? e.parentNode.removeChild(r)
                                                : e.removeChild(r);
                                    } catch (e) {
                                        nc(n, t, e);
                                    }
                                else
                                    try {
                                        os.removeChild(n.stateNode);
                                    } catch (e) {
                                        nc(n, t, e);
                                    }
                            break;
                        case 18:
                            null !== os &&
                                (ls
                                    ? ((t = os),
                                      (n = n.stateNode),
                                      8 === t.nodeType
                                          ? ad(t.parentNode, n)
                                          : 1 === t.nodeType && ad(t, n),
                                      pp(t))
                                    : ad(os, n.stateNode));
                            break;
                        case 4:
                            (r = os),
                                (a = ls),
                                (os = n.stateNode.containerInfo),
                                (ls = !0),
                                is(e, t, n),
                                (os = r),
                                (ls = a);
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Zi || ji(2, n, t), Zi || ji(4, n, t), is(e, t, n);
                            break;
                        case 1:
                            Zi ||
                                (Hi(n, t),
                                "function" ==
                                    typeof (r = n.stateNode)
                                        .componentWillUnmount && Bi(n, t, r)),
                                is(e, t, n);
                            break;
                        case 21:
                            is(e, t, n);
                            break;
                        case 22:
                            Zi || Hi(n, t),
                                (Zi = (r = Zi) || null !== n.memoizedState),
                                is(e, t, n),
                                (Zi = r);
                            break;
                        default:
                            is(e, t, n);
                    }
                }
                function us(e, t) {
                    if (
                        null === t.memoizedState &&
                        null !== (e = t.alternate) &&
                        null !== (e = e.memoizedState) &&
                        null !== (e = e.dehydrated)
                    )
                        try {
                            pp(e);
                        } catch (e) {
                            nc(t, t.return, e);
                        }
                }
                function cs(e, t) {
                    var n = (function (e) {
                        switch (e.tag) {
                            case 13:
                            case 19:
                                var t = e.stateNode;
                                return (
                                    null === t && (t = e.stateNode = new es()),
                                    t
                                );
                            case 22:
                                return (
                                    null ===
                                        (t = (e = e.stateNode)._retryCache) &&
                                        (t = e._retryCache = new es()),
                                    t
                                );
                            default:
                                throw Error(l(435, e.tag));
                        }
                    })(e);
                    t.forEach(function (t) {
                        var r = ic.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r));
                    });
                }
                function ds(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                                o = e,
                                i = t,
                                s = i;
                            e: for (; null !== s; ) {
                                switch (s.tag) {
                                    case 27:
                                    case 5:
                                        (os = s.stateNode), (ls = !1);
                                        break e;
                                    case 3:
                                    case 4:
                                        (os = s.stateNode.containerInfo),
                                            (ls = !0);
                                        break e;
                                }
                                s = s.return;
                            }
                            if (null === os) throw Error(l(160));
                            ss(o, i, a),
                                (os = null),
                                (ls = !1),
                                null !== (o = a.alternate) && (o.return = null),
                                (a.return = null);
                        }
                    if (13878 & t.subtreeFlags)
                        for (t = t.child; null !== t; )
                            fs(t, e), (t = t.sibling);
                }
                var ps = null;
                function fs(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ds(t, e),
                                hs(e),
                                4 & r &&
                                    (ji(3, e, e.return),
                                    Ii(3, e),
                                    ji(5, e, e.return));
                            break;
                        case 1:
                            ds(t, e),
                                hs(e),
                                512 & r &&
                                    (Zi || null === n || Hi(n, n.return)),
                                64 & r &&
                                    Xi &&
                                    null !== (e = e.updateQueue) &&
                                    null !== (r = e.callbacks) &&
                                    ((n = e.shared.hiddenCallbacks),
                                    (e.shared.hiddenCallbacks =
                                        null === n ? r : n.concat(r)));
                            break;
                        case 26:
                            var a = ps;
                            if (
                                (ds(t, e),
                                hs(e),
                                512 & r &&
                                    (Zi || null === n || Hi(n, n.return)),
                                4 & r)
                            ) {
                                var o = null !== n ? n.memoizedState : null;
                                if (((r = e.memoizedState), null === n))
                                    if (null === r)
                                        if (null === e.stateNode) {
                                            e: {
                                                (r = e.type),
                                                    (n = e.memoizedProps),
                                                    (a = a.ownerDocument || a);
                                                t: switch (r) {
                                                    case "title":
                                                        (!(o =
                                                            a.getElementsByTagName(
                                                                "title",
                                                            )[0]) ||
                                                            o[He] ||
                                                            o[De] ||
                                                            "http://www.w3.org/2000/svg" ===
                                                                o.namespaceURI ||
                                                            o.hasAttribute(
                                                                "itemprop",
                                                            )) &&
                                                            ((o =
                                                                a.createElement(
                                                                    r,
                                                                )),
                                                            a.head.insertBefore(
                                                                o,
                                                                a.querySelector(
                                                                    "head > title",
                                                                ),
                                                            )),
                                                            Wc(o, r, n),
                                                            (o[De] = e),
                                                            Ge(o),
                                                            (r = o);
                                                        break e;
                                                    case "link":
                                                        var i = zd(
                                                            "link",
                                                            "href",
                                                            a,
                                                        ).get(
                                                            r + (n.href || ""),
                                                        );
                                                        if (i)
                                                            for (
                                                                var s = 0;
                                                                s < i.length;
                                                                s++
                                                            )
                                                                if (
                                                                    (o =
                                                                        i[
                                                                            s
                                                                        ]).getAttribute(
                                                                        "href",
                                                                    ) ===
                                                                        (null ==
                                                                        n.href
                                                                            ? null
                                                                            : n.href) &&
                                                                    o.getAttribute(
                                                                        "rel",
                                                                    ) ===
                                                                        (null ==
                                                                        n.rel
                                                                            ? null
                                                                            : n.rel) &&
                                                                    o.getAttribute(
                                                                        "title",
                                                                    ) ===
                                                                        (null ==
                                                                        n.title
                                                                            ? null
                                                                            : n.title) &&
                                                                    o.getAttribute(
                                                                        "crossorigin",
                                                                    ) ===
                                                                        (null ==
                                                                        n.crossOrigin
                                                                            ? null
                                                                            : n.crossOrigin)
                                                                ) {
                                                                    i.splice(
                                                                        s,
                                                                        1,
                                                                    );
                                                                    break t;
                                                                }
                                                        Wc(
                                                            (o =
                                                                a.createElement(
                                                                    r,
                                                                )),
                                                            r,
                                                            n,
                                                        ),
                                                            a.head.appendChild(
                                                                o,
                                                            );
                                                        break;
                                                    case "meta":
                                                        if (
                                                            (i = zd(
                                                                "meta",
                                                                "content",
                                                                a,
                                                            ).get(
                                                                r +
                                                                    (n.content ||
                                                                        ""),
                                                            ))
                                                        )
                                                            for (
                                                                s = 0;
                                                                s < i.length;
                                                                s++
                                                            )
                                                                if (
                                                                    (o =
                                                                        i[
                                                                            s
                                                                        ]).getAttribute(
                                                                        "content",
                                                                    ) ===
                                                                        (null ==
                                                                        n.content
                                                                            ? null
                                                                            : "" +
                                                                              n.content) &&
                                                                    o.getAttribute(
                                                                        "name",
                                                                    ) ===
                                                                        (null ==
                                                                        n.name
                                                                            ? null
                                                                            : n.name) &&
                                                                    o.getAttribute(
                                                                        "property",
                                                                    ) ===
                                                                        (null ==
                                                                        n.property
                                                                            ? null
                                                                            : n.property) &&
                                                                    o.getAttribute(
                                                                        "http-equiv",
                                                                    ) ===
                                                                        (null ==
                                                                        n.httpEquiv
                                                                            ? null
                                                                            : n.httpEquiv) &&
                                                                    o.getAttribute(
                                                                        "charset",
                                                                    ) ===
                                                                        (null ==
                                                                        n.charSet
                                                                            ? null
                                                                            : n.charSet)
                                                                ) {
                                                                    i.splice(
                                                                        s,
                                                                        1,
                                                                    );
                                                                    break t;
                                                                }
                                                        Wc(
                                                            (o =
                                                                a.createElement(
                                                                    r,
                                                                )),
                                                            r,
                                                            n,
                                                        ),
                                                            a.head.appendChild(
                                                                o,
                                                            );
                                                        break;
                                                    default:
                                                        throw Error(l(468, r));
                                                }
                                                (o[De] = e), Ge(o), (r = o);
                                            }
                                            e.stateNode = r;
                                        } else _d(a, e.type, e.stateNode);
                                    else
                                        e.stateNode = kd(a, r, e.memoizedProps);
                                else
                                    o !== r
                                        ? (null === o
                                              ? null !== n.stateNode &&
                                                (n =
                                                    n.stateNode).parentNode.removeChild(
                                                    n,
                                                )
                                              : o.count--,
                                          null === r
                                              ? _d(a, e.type, e.stateNode)
                                              : kd(a, r, e.memoizedProps))
                                        : null === r &&
                                          null !== e.stateNode &&
                                          Vi(
                                              e,
                                              e.memoizedProps,
                                              n.memoizedProps,
                                          );
                            }
                            break;
                        case 27:
                            if (4 & r && null === e.alternate) {
                                (a = e.stateNode), (o = e.memoizedProps);
                                try {
                                    for (var u = a.firstChild; u; ) {
                                        var c = u.nextSibling,
                                            d = u.nodeName;
                                        u[He] ||
                                            "HEAD" === d ||
                                            "BODY" === d ||
                                            "SCRIPT" === d ||
                                            "STYLE" === d ||
                                            ("LINK" === d &&
                                                "stylesheet" ===
                                                    u.rel.toLowerCase()) ||
                                            a.removeChild(u),
                                            (u = c);
                                    }
                                    for (
                                        var p = e.type, f = a.attributes;
                                        f.length;

                                    )
                                        a.removeAttributeNode(f[0]);
                                    Wc(a, p, o), (a[De] = e), (a[Fe] = o);
                                } catch (t) {
                                    nc(e, e.return, t);
                                }
                            }
                        case 5:
                            if (
                                (ds(t, e),
                                hs(e),
                                512 & r &&
                                    (Zi || null === n || Hi(n, n.return)),
                                32 & e.flags)
                            ) {
                                a = e.stateNode;
                                try {
                                    kt(a, "");
                                } catch (t) {
                                    nc(e, e.return, t);
                                }
                            }
                            4 & r &&
                                null != e.stateNode &&
                                Vi(
                                    e,
                                    (a = e.memoizedProps),
                                    null !== n ? n.memoizedProps : a,
                                ),
                                1024 & r && (Ji = !0);
                            break;
                        case 6:
                            if ((ds(t, e), hs(e), 4 & r)) {
                                if (null === e.stateNode) throw Error(l(162));
                                (r = e.memoizedProps), (n = e.stateNode);
                                try {
                                    n.nodeValue = r;
                                } catch (t) {
                                    nc(e, e.return, t);
                                }
                            }
                            break;
                        case 3:
                            if (
                                ((Cd = null),
                                (a = ps),
                                (ps = dd(t.containerInfo)),
                                ds(t, e),
                                (ps = a),
                                hs(e),
                                4 & r &&
                                    null !== n &&
                                    n.memoizedState.isDehydrated)
                            )
                                try {
                                    pp(t.containerInfo);
                                } catch (t) {
                                    nc(e, e.return, t);
                                }
                            Ji && ((Ji = !1), ms(e));
                            break;
                        case 4:
                            (r = ps),
                                (ps = dd(e.stateNode.containerInfo)),
                                ds(t, e),
                                hs(e),
                                (ps = r);
                            break;
                        case 12:
                            ds(t, e), hs(e);
                            break;
                        case 13:
                            ds(t, e),
                                hs(e),
                                8192 & e.child.flags &&
                                    (null !== e.memoizedState) !=
                                        (null !== n &&
                                            null !== n.memoizedState) &&
                                    (yu = ie()),
                                4 & r &&
                                    null !== (r = e.updateQueue) &&
                                    ((e.updateQueue = null), cs(e, r));
                            break;
                        case 22:
                            if (
                                (512 & r &&
                                    (Zi || null === n || Hi(n, n.return)),
                                (u = null !== e.memoizedState),
                                (c = null !== n && null !== n.memoizedState),
                                (Xi = (d = Xi) || u),
                                (Zi = (p = Zi) || c),
                                ds(t, e),
                                (Zi = p),
                                (Xi = d),
                                hs(e),
                                ((t = e.stateNode)._current = e),
                                (t._visibility &= -3),
                                (t._visibility |= 2 & t._pendingVisibility),
                                8192 & r &&
                                    ((t._visibility = u
                                        ? -2 & t._visibility
                                        : 1 | t._visibility),
                                    u &&
                                        ((t = Xi || Zi),
                                        null === n || c || t || bs(e)),
                                    null === e.memoizedProps ||
                                        "manual" !== e.memoizedProps.mode))
                            )
                                e: for (n = null, t = e; ; ) {
                                    if (
                                        5 === t.tag ||
                                        26 === t.tag ||
                                        27 === t.tag
                                    ) {
                                        if (null === n) {
                                            c = n = t;
                                            try {
                                                if (((a = c.stateNode), u))
                                                    "function" ==
                                                    typeof (o = a.style)
                                                        .setProperty
                                                        ? o.setProperty(
                                                              "display",
                                                              "none",
                                                              "important",
                                                          )
                                                        : (o.display = "none");
                                                else {
                                                    i = c.stateNode;
                                                    var h =
                                                        null !=
                                                            (s =
                                                                c.memoizedProps
                                                                    .style) &&
                                                        s.hasOwnProperty(
                                                            "display",
                                                        )
                                                            ? s.display
                                                            : null;
                                                    i.style.display =
                                                        null == h ||
                                                        "boolean" == typeof h
                                                            ? ""
                                                            : ("" + h).trim();
                                                }
                                            } catch (e) {
                                                nc(c, c.return, e);
                                            }
                                        }
                                    } else if (6 === t.tag) {
                                        if (null === n) {
                                            c = t;
                                            try {
                                                c.stateNode.nodeValue = u
                                                    ? ""
                                                    : c.memoizedProps;
                                            } catch (e) {
                                                nc(c, c.return, e);
                                            }
                                        }
                                    } else if (
                                        ((22 !== t.tag && 23 !== t.tag) ||
                                            null === t.memoizedState ||
                                            t === e) &&
                                        null !== t.child
                                    ) {
                                        (t.child.return = t), (t = t.child);
                                        continue;
                                    }
                                    if (t === e) break e;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e)
                                            break e;
                                        n === t && (n = null), (t = t.return);
                                    }
                                    n === t && (n = null),
                                        (t.sibling.return = t.return),
                                        (t = t.sibling);
                                }
                            4 & r &&
                                null !== (r = e.updateQueue) &&
                                null !== (n = r.retryQueue) &&
                                ((r.retryQueue = null), cs(e, n));
                            break;
                        case 19:
                            ds(t, e),
                                hs(e),
                                4 & r &&
                                    null !== (r = e.updateQueue) &&
                                    ((e.updateQueue = null), cs(e, r));
                            break;
                        case 21:
                            break;
                        default:
                            ds(t, e), hs(e);
                    }
                }
                function hs(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            if (27 !== e.tag) {
                                e: {
                                    for (var n = e.return; null !== n; ) {
                                        if (Qi(n)) {
                                            var r = n;
                                            break e;
                                        }
                                        n = n.return;
                                    }
                                    throw Error(l(160));
                                }
                                switch (r.tag) {
                                    case 27:
                                        var a = r.stateNode;
                                        Gi(e, Ki(e), a);
                                        break;
                                    case 5:
                                        var o = r.stateNode;
                                        32 & r.flags &&
                                            (kt(o, ""), (r.flags &= -33)),
                                            Gi(e, Ki(e), o);
                                        break;
                                    case 3:
                                    case 4:
                                        var i = r.stateNode.containerInfo;
                                        Yi(e, Ki(e), i);
                                        break;
                                    default:
                                        throw Error(l(161));
                                }
                            }
                        } catch (t) {
                            nc(e, e.return, t);
                        }
                        e.flags &= -3;
                    }
                    4096 & t && (e.flags &= -4097);
                }
                function ms(e) {
                    if (1024 & e.subtreeFlags)
                        for (e = e.child; null !== e; ) {
                            var t = e;
                            ms(t),
                                5 === t.tag &&
                                    1024 & t.flags &&
                                    t.stateNode.reset(),
                                (e = e.sibling);
                        }
                }
                function gs(e, t) {
                    if (8772 & t.subtreeFlags)
                        for (t = t.child; null !== t; )
                            rs(e, t.alternate, t), (t = t.sibling);
                }
                function bs(e) {
                    for (e = e.child; null !== e; ) {
                        var t = e;
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ji(4, t, t.return), bs(t);
                                break;
                            case 1:
                                Hi(t, t.return);
                                var n = t.stateNode;
                                "function" == typeof n.componentWillUnmount &&
                                    Bi(t, t.return, n),
                                    bs(t);
                                break;
                            case 26:
                            case 27:
                            case 5:
                                Hi(t, t.return), bs(t);
                                break;
                            case 22:
                                Hi(t, t.return),
                                    null === t.memoizedState && bs(t);
                                break;
                            default:
                                bs(t);
                        }
                        e = e.sibling;
                    }
                }
                function ys(e, t, n) {
                    for (
                        n = n && !!(8772 & t.subtreeFlags), t = t.child;
                        null !== t;

                    ) {
                        var r = t.alternate,
                            a = e,
                            o = t,
                            l = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ys(a, o, n), Ii(4, o);
                                break;
                            case 1:
                                if (
                                    (ys(a, o, n),
                                    "function" ==
                                        typeof (a = (r = o).stateNode)
                                            .componentDidMount)
                                )
                                    try {
                                        a.componentDidMount();
                                    } catch (e) {
                                        nc(r, r.return, e);
                                    }
                                if (null !== (a = (r = o).updateQueue)) {
                                    var i = r.stateNode;
                                    try {
                                        var s = a.shared.hiddenCallbacks;
                                        if (null !== s)
                                            for (
                                                a.shared.hiddenCallbacks = null,
                                                    a = 0;
                                                a < s.length;
                                                a++
                                            )
                                                Di(s[a], i);
                                    } catch (e) {
                                        nc(r, r.return, e);
                                    }
                                }
                                n && 64 & l && Ui(o), qi(o, o.return);
                                break;
                            case 26:
                            case 27:
                            case 5:
                                ys(a, o, n),
                                    n && null === r && 4 & l && Wi(o),
                                    qi(o, o.return);
                                break;
                            case 12:
                            default:
                                ys(a, o, n);
                                break;
                            case 13:
                                ys(a, o, n), n && 4 & l && us(a, o);
                                break;
                            case 22:
                                null === o.memoizedState && ys(a, o, n),
                                    qi(o, o.return);
                        }
                        t = t.sibling;
                    }
                }
                function ws(e, t) {
                    var n = null;
                    null !== e &&
                        null !== e.memoizedState &&
                        null !== e.memoizedState.cachePool &&
                        (n = e.memoizedState.cachePool.pool),
                        (e = null),
                        null !== t.memoizedState &&
                            null !== t.memoizedState.cachePool &&
                            (e = t.memoizedState.cachePool.pool),
                        e !== n &&
                            (null != e && e.refCount++, null != n && ja(n));
                }
                function vs(e, t) {
                    (e = null),
                        null !== t.alternate &&
                            (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache) !== e &&
                            (t.refCount++, null != e && ja(e));
                }
                function ks(e, t, n, r) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t; )
                            xs(e, t, n, r), (t = t.sibling);
                }
                function xs(e, t, n, r) {
                    var a = t.flags;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ks(e, t, n, r), 2048 & a && Ii(9, t);
                            break;
                        case 3:
                            ks(e, t, n, r),
                                2048 & a &&
                                    ((e = null),
                                    null !== t.alternate &&
                                        (e = t.alternate.memoizedState.cache),
                                    (t = t.memoizedState.cache) !== e &&
                                        (t.refCount++, null != e && ja(e)));
                            break;
                        case 12:
                            if (2048 & a) {
                                ks(e, t, n, r), (e = t.stateNode);
                                try {
                                    var o = t.memoizedProps,
                                        l = o.id,
                                        i = o.onPostCommit;
                                    "function" == typeof i &&
                                        i(
                                            l,
                                            null === t.alternate
                                                ? "mount"
                                                : "update",
                                            e.passiveEffectDuration,
                                            -0,
                                        );
                                } catch (e) {
                                    nc(t, t.return, e);
                                }
                            } else ks(e, t, n, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            (o = t.stateNode),
                                null !== t.memoizedState
                                    ? 4 & o._visibility
                                        ? ks(e, t, n, r)
                                        : Es(e, t)
                                    : 4 & o._visibility
                                      ? ks(e, t, n, r)
                                      : ((o._visibility |= 4),
                                        Ss(
                                            e,
                                            t,
                                            n,
                                            r,
                                            !!(10256 & t.subtreeFlags),
                                        )),
                                2048 & a && ws(t.alternate, t);
                            break;
                        case 24:
                            ks(e, t, n, r), 2048 & a && vs(t.alternate, t);
                            break;
                        default:
                            ks(e, t, n, r);
                    }
                }
                function Ss(e, t, n, r, a) {
                    for (
                        a = a && !!(10256 & t.subtreeFlags), t = t.child;
                        null !== t;

                    ) {
                        var o = e,
                            l = t,
                            i = n,
                            s = r,
                            u = l.flags;
                        switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ss(o, l, i, s, a), Ii(8, l);
                                break;
                            case 23:
                                break;
                            case 22:
                                var c = l.stateNode;
                                null !== l.memoizedState
                                    ? 4 & c._visibility
                                        ? Ss(o, l, i, s, a)
                                        : Es(o, l)
                                    : ((c._visibility |= 4), Ss(o, l, i, s, a)),
                                    a && 2048 & u && ws(l.alternate, l);
                                break;
                            case 24:
                                Ss(o, l, i, s, a),
                                    a && 2048 & u && vs(l.alternate, l);
                                break;
                            default:
                                Ss(o, l, i, s, a);
                        }
                        t = t.sibling;
                    }
                }
                function Es(e, t) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t; ) {
                            var n = e,
                                r = t,
                                a = r.flags;
                            switch (r.tag) {
                                case 22:
                                    Es(n, r), 2048 & a && ws(r.alternate, r);
                                    break;
                                case 24:
                                    Es(n, r), 2048 & a && vs(r.alternate, r);
                                    break;
                                default:
                                    Es(n, r);
                            }
                            t = t.sibling;
                        }
                }
                var Cs = 8192;
                function zs(e) {
                    if (e.subtreeFlags & Cs)
                        for (e = e.child; null !== e; ) _s(e), (e = e.sibling);
                }
                function _s(e) {
                    switch (e.tag) {
                        case 26:
                            zs(e),
                                e.flags & Cs &&
                                    null !== e.memoizedState &&
                                    (function (e, t, n) {
                                        if (null === Td) throw Error(l(475));
                                        var r = Td;
                                        if (
                                            !(
                                                "stylesheet" !== t.type ||
                                                ("string" == typeof n.media &&
                                                    !1 ===
                                                        matchMedia(n.media)
                                                            .matches) ||
                                                4 & t.state.loading
                                            )
                                        ) {
                                            if (null === t.instance) {
                                                var a = gd(n.href),
                                                    o = e.querySelector(bd(a));
                                                if (o)
                                                    return (
                                                        null !== (e = o._p) &&
                                                            "object" ==
                                                                typeof e &&
                                                            "function" ==
                                                                typeof e.then &&
                                                            (r.count++,
                                                            (r = Rd.bind(r)),
                                                            e.then(r, r)),
                                                        (t.state.loading |= 4),
                                                        (t.instance = o),
                                                        void Ge(o)
                                                    );
                                                (o = e.ownerDocument || e),
                                                    (n = yd(n)),
                                                    (a = ud.get(a)) && Sd(n, a),
                                                    Ge(
                                                        (o =
                                                            o.createElement(
                                                                "link",
                                                            )),
                                                    );
                                                var i = o;
                                                (i._p = new Promise(function (
                                                    e,
                                                    t,
                                                ) {
                                                    (i.onload = e),
                                                        (i.onerror = t);
                                                })),
                                                    Wc(o, "link", n),
                                                    (t.instance = o);
                                            }
                                            null === r.stylesheets &&
                                                (r.stylesheets = new Map()),
                                                r.stylesheets.set(t, e),
                                                (e = t.state.preload) &&
                                                    !(3 & t.state.loading) &&
                                                    (r.count++,
                                                    (t = Rd.bind(r)),
                                                    e.addEventListener(
                                                        "load",
                                                        t,
                                                    ),
                                                    e.addEventListener(
                                                        "error",
                                                        t,
                                                    ));
                                        }
                                    })(ps, e.memoizedState, e.memoizedProps);
                            break;
                        case 5:
                        default:
                            zs(e);
                            break;
                        case 3:
                        case 4:
                            var t = ps;
                            (ps = dd(e.stateNode.containerInfo)),
                                zs(e),
                                (ps = t);
                            break;
                        case 22:
                            null === e.memoizedState &&
                                (null !== (t = e.alternate) &&
                                null !== t.memoizedState
                                    ? ((t = Cs),
                                      (Cs = 16777216),
                                      zs(e),
                                      (Cs = t))
                                    : zs(e));
                    }
                }
                function Ps(e) {
                    var t = e.alternate;
                    if (null !== t && null !== (e = t.child)) {
                        t.child = null;
                        do {
                            (t = e.sibling), (e.sibling = null), (e = t);
                        } while (null !== e);
                    }
                }
                function Ts(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (ts = r), Ls(r, e);
                            }
                        Ps(e);
                    }
                    if (10256 & e.subtreeFlags)
                        for (e = e.child; null !== e; ) Ns(e), (e = e.sibling);
                }
                function Ns(e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ts(e), 2048 & e.flags && ji(9, e, e.return);
                            break;
                        case 3:
                        case 12:
                        default:
                            Ts(e);
                            break;
                        case 22:
                            var t = e.stateNode;
                            null !== e.memoizedState &&
                            4 & t._visibility &&
                            (null === e.return || 13 !== e.return.tag)
                                ? ((t._visibility &= -5), Rs(e))
                                : Ts(e);
                    }
                }
                function Rs(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (ts = r), Ls(r, e);
                            }
                        Ps(e);
                    }
                    for (e = e.child; null !== e; ) {
                        switch ((t = e).tag) {
                            case 0:
                            case 11:
                            case 15:
                                ji(8, t, t.return), Rs(t);
                                break;
                            case 22:
                                4 & (n = t.stateNode)._visibility &&
                                    ((n._visibility &= -5), Rs(t));
                                break;
                            default:
                                Rs(t);
                        }
                        e = e.sibling;
                    }
                }
                function Ls(e, t) {
                    for (; null !== ts; ) {
                        var n = ts;
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ji(8, n, t);
                                break;
                            case 23:
                            case 22:
                                if (
                                    null !== n.memoizedState &&
                                    null !== n.memoizedState.cachePool
                                ) {
                                    var r = n.memoizedState.cachePool.pool;
                                    null != r && r.refCount++;
                                }
                                break;
                            case 24:
                                ja(n.memoizedState.cache);
                        }
                        if (null !== (r = n.child)) (r.return = n), (ts = r);
                        else
                            e: for (n = e; null !== ts; ) {
                                var a = (r = ts).sibling,
                                    o = r.return;
                                if ((as(r), r === n)) {
                                    ts = null;
                                    break e;
                                }
                                if (null !== a) {
                                    (a.return = o), (ts = a);
                                    break e;
                                }
                                ts = o;
                            }
                    }
                }
                function As(e, t, n, r) {
                    (this.tag = e),
                        (this.key = n),
                        (this.sibling =
                            this.child =
                            this.return =
                            this.stateNode =
                            this.type =
                            this.elementType =
                                null),
                        (this.index = 0),
                        (this.refCleanup = this.ref = null),
                        (this.pendingProps = t),
                        (this.dependencies =
                            this.memoizedState =
                            this.updateQueue =
                            this.memoizedProps =
                                null),
                        (this.mode = r),
                        (this.subtreeFlags = this.flags = 0),
                        (this.deletions = null),
                        (this.childLanes = this.lanes = 0),
                        (this.alternate = null);
                }
                function Os(e, t, n, r) {
                    return new As(e, t, n, r);
                }
                function $s(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent);
                }
                function Ms(e, t) {
                    var n = e.alternate;
                    return (
                        null === n
                            ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
                                  e.elementType),
                              (n.type = e.type),
                              (n.stateNode = e.stateNode),
                              (n.alternate = e),
                              (e.alternate = n))
                            : ((n.pendingProps = t),
                              (n.type = e.type),
                              (n.flags = 0),
                              (n.subtreeFlags = 0),
                              (n.deletions = null)),
                        (n.flags = 31457280 & e.flags),
                        (n.childLanes = e.childLanes),
                        (n.lanes = e.lanes),
                        (n.child = e.child),
                        (n.memoizedProps = e.memoizedProps),
                        (n.memoizedState = e.memoizedState),
                        (n.updateQueue = e.updateQueue),
                        (t = e.dependencies),
                        (n.dependencies =
                            null === t
                                ? null
                                : {
                                      lanes: t.lanes,
                                      firstContext: t.firstContext,
                                  }),
                        (n.sibling = e.sibling),
                        (n.index = e.index),
                        (n.ref = e.ref),
                        (n.refCleanup = e.refCleanup),
                        n
                    );
                }
                function Ds(e, t) {
                    e.flags &= 31457282;
                    var n = e.alternate;
                    return (
                        null === n
                            ? ((e.childLanes = 0),
                              (e.lanes = t),
                              (e.child = null),
                              (e.subtreeFlags = 0),
                              (e.memoizedProps = null),
                              (e.memoizedState = null),
                              (e.updateQueue = null),
                              (e.dependencies = null),
                              (e.stateNode = null))
                            : ((e.childLanes = n.childLanes),
                              (e.lanes = n.lanes),
                              (e.child = n.child),
                              (e.subtreeFlags = 0),
                              (e.deletions = null),
                              (e.memoizedProps = n.memoizedProps),
                              (e.memoizedState = n.memoizedState),
                              (e.updateQueue = n.updateQueue),
                              (e.type = n.type),
                              (t = n.dependencies),
                              (e.dependencies =
                                  null === t
                                      ? null
                                      : {
                                            lanes: t.lanes,
                                            firstContext: t.firstContext,
                                        })),
                        e
                    );
                }
                function Fs(e, t, n, r, a, o) {
                    var i = 0;
                    if (((r = e), "function" == typeof e)) $s(e) && (i = 1);
                    else if ("string" == typeof e)
                        i = (function (e, t, n) {
                            if (1 === n || null != t.itemProp) return !1;
                            switch (e) {
                                case "meta":
                                case "title":
                                    return !0;
                                case "style":
                                    if (
                                        "string" != typeof t.precedence ||
                                        "string" != typeof t.href ||
                                        "" === t.href
                                    )
                                        break;
                                    return !0;
                                case "link":
                                    if (
                                        "string" != typeof t.rel ||
                                        "string" != typeof t.href ||
                                        "" === t.href ||
                                        t.onLoad ||
                                        t.onError
                                    )
                                        break;
                                    return (
                                        "stylesheet" !== t.rel ||
                                        ((e = t.disabled),
                                        "string" == typeof t.precedence &&
                                            null == e)
                                    );
                                case "script":
                                    if (
                                        t.async &&
                                        "function" != typeof t.async &&
                                        "symbol" != typeof t.async &&
                                        !t.onLoad &&
                                        !t.onError &&
                                        t.src &&
                                        "string" == typeof t.src
                                    )
                                        return !0;
                            }
                            return !1;
                        })(e, n, K.current)
                            ? 26
                            : "html" === e || "head" === e || "body" === e
                              ? 27
                              : 5;
                    else
                        e: switch (e) {
                            case c:
                                return Is(n.children, a, o, t);
                            case d:
                                (i = 8), (a |= 24);
                                break;
                            case p:
                                return (
                                    ((e = Os(12, n, t, 2 | a)).elementType = p),
                                    (e.lanes = o),
                                    e
                                );
                            case b:
                                return (
                                    ((e = Os(13, n, t, a)).elementType = b),
                                    (e.lanes = o),
                                    e
                                );
                            case y:
                                return (
                                    ((e = Os(19, n, t, a)).elementType = y),
                                    (e.lanes = o),
                                    e
                                );
                            case k:
                                return js(n, a, o, t);
                            default:
                                if ("object" == typeof e && null !== e)
                                    switch (e.$$typeof) {
                                        case f:
                                        case m:
                                            i = 10;
                                            break e;
                                        case h:
                                            i = 9;
                                            break e;
                                        case g:
                                            i = 11;
                                            break e;
                                        case w:
                                            i = 14;
                                            break e;
                                        case v:
                                            (i = 16), (r = null);
                                            break e;
                                    }
                                (i = 29),
                                    (n = Error(
                                        l(
                                            130,
                                            null === e ? "null" : typeof e,
                                            "",
                                        ),
                                    )),
                                    (r = null);
                        }
                    return (
                        ((t = Os(i, n, t, a)).elementType = e),
                        (t.type = r),
                        (t.lanes = o),
                        t
                    );
                }
                function Is(e, t, n, r) {
                    return ((e = Os(7, e, r, t)).lanes = n), e;
                }
                function js(e, t, n, r) {
                    ((e = Os(22, e, r, t)).elementType = k), (e.lanes = n);
                    var a = {
                        _visibility: 1,
                        _pendingVisibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null,
                        _current: null,
                        detach: function () {
                            var e = a._current;
                            if (null === e) throw Error(l(456));
                            if (!(2 & a._pendingVisibility)) {
                                var t = Pr(e, 2);
                                null !== t &&
                                    ((a._pendingVisibility |= 2), Ru(t, 0, 2));
                            }
                        },
                        attach: function () {
                            var e = a._current;
                            if (null === e) throw Error(l(456));
                            if (2 & a._pendingVisibility) {
                                var t = Pr(e, 2);
                                null !== t &&
                                    ((a._pendingVisibility &= -3), Ru(t, 0, 2));
                            }
                        },
                    };
                    return (e.stateNode = a), e;
                }
                function Us(e, t, n) {
                    return ((e = Os(6, e, null, t)).lanes = n), e;
                }
                function Bs(e, t, n) {
                    return (
                        ((t = Os(
                            4,
                            null !== e.children ? e.children : [],
                            e.key,
                            t,
                        )).lanes = n),
                        (t.stateNode = {
                            containerInfo: e.containerInfo,
                            pendingChildren: null,
                            implementation: e.implementation,
                        }),
                        t
                    );
                }
                function qs(e) {
                    e.flags |= 4;
                }
                function Hs(e, t) {
                    if ("stylesheet" !== t.type || 4 & t.state.loading)
                        e.flags &= -16777217;
                    else if (((e.flags |= 16777216), !Pd(t))) {
                        if (
                            null !== (t = _a.current) &&
                            ((4194176 & nu) === nu
                                ? null !== Pa
                                : ((62914560 & nu) !== nu &&
                                      !(536870912 & nu)) ||
                                  t !== Pa)
                        )
                            throw ((da = ia), la);
                        e.flags |= 8192;
                    }
                }
                function Ws(e, t) {
                    null !== t && (e.flags |= 4),
                        16384 & e.flags &&
                            ((t = 22 !== e.tag ? Te() : 536870912),
                            (e.lanes |= t),
                            (hu |= t));
                }
                function Vs(e, t) {
                    if (!Yr)
                        switch (e.tailMode) {
                            case "hidden":
                                t = e.tail;
                                for (var n = null; null !== t; )
                                    null !== t.alternate && (n = t),
                                        (t = t.sibling);
                                null === n
                                    ? (e.tail = null)
                                    : (n.sibling = null);
                                break;
                            case "collapsed":
                                n = e.tail;
                                for (var r = null; null !== n; )
                                    null !== n.alternate && (r = n),
                                        (n = n.sibling);
                                null === r
                                    ? t || null === e.tail
                                        ? (e.tail = null)
                                        : (e.tail.sibling = null)
                                    : (r.sibling = null);
                        }
                }
                function Qs(e) {
                    var t =
                            null !== e.alternate &&
                            e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a; )
                            (n |= a.lanes | a.childLanes),
                                (r |= 31457280 & a.subtreeFlags),
                                (r |= 31457280 & a.flags),
                                (a.return = e),
                                (a = a.sibling);
                    else
                        for (a = e.child; null !== a; )
                            (n |= a.lanes | a.childLanes),
                                (r |= a.subtreeFlags),
                                (r |= a.flags),
                                (a.return = e),
                                (a = a.sibling);
                    return (e.subtreeFlags |= r), (e.childLanes = n), t;
                }
                function Ks(e, t, n) {
                    var r = t.pendingProps;
                    switch ((Vr(t), t.tag)) {
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return Qs(t), null;
                        case 3:
                            return (
                                (n = t.stateNode),
                                (r = null),
                                null !== e && (r = e.memoizedState.cache),
                                t.memoizedState.cache !== r &&
                                    (t.flags |= 2048),
                                yi(Fa),
                                J(),
                                n.pendingContext &&
                                    ((n.context = n.pendingContext),
                                    (n.pendingContext = null)),
                                (null !== e && null !== e.child) ||
                                    (na(t)
                                        ? qs(t)
                                        : null === e ||
                                          (e.memoizedState.isDehydrated &&
                                              !(256 & t.flags)) ||
                                          ((t.flags |= 1024),
                                          null !== Gr &&
                                              (Au(Gr), (Gr = null)))),
                                Qs(t),
                                null
                            );
                        case 26:
                            return (
                                (n = t.memoizedState),
                                null === e
                                    ? (qs(t),
                                      null !== n
                                          ? (Qs(t), Hs(t, n))
                                          : (Qs(t), (t.flags &= -16777217)))
                                    : n
                                      ? n !== e.memoizedState
                                          ? (qs(t), Qs(t), Hs(t, n))
                                          : (Qs(t), (t.flags &= -16777217))
                                      : (e.memoizedProps !== r && qs(t),
                                        Qs(t),
                                        (t.flags &= -16777217)),
                                null
                            );
                        case 27:
                            te(t), (n = G.current);
                            var a = t.type;
                            if (null !== e && null != t.stateNode)
                                e.memoizedProps !== r && qs(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode)
                                        throw Error(l(166));
                                    return Qs(t), null;
                                }
                                (e = K.current),
                                    na(t)
                                        ? ea(t)
                                        : ((e = sd(a, r, n)),
                                          (t.stateNode = e),
                                          qs(t));
                            }
                            return Qs(t), null;
                        case 5:
                            if (
                                (te(t),
                                (n = t.type),
                                null !== e && null != t.stateNode)
                            )
                                e.memoizedProps !== r && qs(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode)
                                        throw Error(l(166));
                                    return Qs(t), null;
                                }
                                if (((e = K.current), na(t))) ea(t);
                                else {
                                    switch (((a = Kc(G.current)), e)) {
                                        case 1:
                                            e = a.createElementNS(
                                                "http://www.w3.org/2000/svg",
                                                n,
                                            );
                                            break;
                                        case 2:
                                            e = a.createElementNS(
                                                "http://www.w3.org/1998/Math/MathML",
                                                n,
                                            );
                                            break;
                                        default:
                                            switch (n) {
                                                case "svg":
                                                    e = a.createElementNS(
                                                        "http://www.w3.org/2000/svg",
                                                        n,
                                                    );
                                                    break;
                                                case "math":
                                                    e = a.createElementNS(
                                                        "http://www.w3.org/1998/Math/MathML",
                                                        n,
                                                    );
                                                    break;
                                                case "script":
                                                    ((e =
                                                        a.createElement(
                                                            "div",
                                                        )).innerHTML =
                                                        "<script></script>"),
                                                        (e = e.removeChild(
                                                            e.firstChild,
                                                        ));
                                                    break;
                                                case "select":
                                                    (e =
                                                        "string" == typeof r.is
                                                            ? a.createElement(
                                                                  "select",
                                                                  { is: r.is },
                                                              )
                                                            : a.createElement(
                                                                  "select",
                                                              )),
                                                        r.multiple
                                                            ? (e.multiple = !0)
                                                            : r.size &&
                                                              (e.size = r.size);
                                                    break;
                                                default:
                                                    e =
                                                        "string" == typeof r.is
                                                            ? a.createElement(
                                                                  n,
                                                                  { is: r.is },
                                                              )
                                                            : a.createElement(
                                                                  n,
                                                              );
                                            }
                                    }
                                    (e[De] = t), (e[Fe] = r);
                                    e: for (a = t.child; null !== a; ) {
                                        if (5 === a.tag || 6 === a.tag)
                                            e.appendChild(a.stateNode);
                                        else if (
                                            4 !== a.tag &&
                                            27 !== a.tag &&
                                            null !== a.child
                                        ) {
                                            (a.child.return = a), (a = a.child);
                                            continue;
                                        }
                                        if (a === t) break e;
                                        for (; null === a.sibling; ) {
                                            if (
                                                null === a.return ||
                                                a.return === t
                                            )
                                                break e;
                                            a = a.return;
                                        }
                                        (a.sibling.return = a.return),
                                            (a = a.sibling);
                                    }
                                    t.stateNode = e;
                                    e: switch ((Wc(e, n, r), n)) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            e = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            e = !0;
                                            break e;
                                        default:
                                            e = !1;
                                    }
                                    e && qs(t);
                                }
                            }
                            return Qs(t), (t.flags &= -16777217), null;
                        case 6:
                            if (e && null != t.stateNode)
                                e.memoizedProps !== r && qs(t);
                            else {
                                if (
                                    "string" != typeof r &&
                                    null === t.stateNode
                                )
                                    throw Error(l(166));
                                if (((e = G.current), na(t))) {
                                    if (
                                        ((e = t.stateNode),
                                        (n = t.memoizedProps),
                                        (r = null),
                                        null !== (a = Qr))
                                    )
                                        switch (a.tag) {
                                            case 27:
                                            case 5:
                                                r = a.memoizedProps;
                                        }
                                    (e[De] = t),
                                        (e = !!(
                                            e.nodeValue === n ||
                                            (null !== r &&
                                                !0 ===
                                                    r.suppressHydrationWarning) ||
                                            Uc(e.nodeValue, n)
                                        )) || Jr(t);
                                } else
                                    ((e = Kc(e).createTextNode(r))[De] = t),
                                        (t.stateNode = e);
                            }
                            return Qs(t), null;
                        case 13:
                            if (
                                ((r = t.memoizedState),
                                null === e ||
                                    (null !== e.memoizedState &&
                                        null !== e.memoizedState.dehydrated))
                            ) {
                                if (
                                    ((a = na(t)),
                                    null !== r && null !== r.dehydrated)
                                ) {
                                    if (null === e) {
                                        if (!a) throw Error(l(318));
                                        if (
                                            !(a =
                                                null !== (a = t.memoizedState)
                                                    ? a.dehydrated
                                                    : null)
                                        )
                                            throw Error(l(317));
                                        a[De] = t;
                                    } else
                                        ra(),
                                            !(128 & t.flags) &&
                                                (t.memoizedState = null),
                                            (t.flags |= 4);
                                    Qs(t), (a = !1);
                                } else
                                    null !== Gr && (Au(Gr), (Gr = null)),
                                        (a = !0);
                                if (!a)
                                    return 256 & t.flags
                                        ? (La(t), t)
                                        : (La(t), null);
                            }
                            if ((La(t), 128 & t.flags)) return (t.lanes = n), t;
                            if (
                                ((n = null !== r),
                                (e = null !== e && null !== e.memoizedState),
                                n)
                            ) {
                                (a = null),
                                    null !== (r = t.child).alternate &&
                                        null !== r.alternate.memoizedState &&
                                        null !==
                                            r.alternate.memoizedState
                                                .cachePool &&
                                        (a =
                                            r.alternate.memoizedState.cachePool
                                                .pool);
                                var o = null;
                                null !== r.memoizedState &&
                                    null !== r.memoizedState.cachePool &&
                                    (o = r.memoizedState.cachePool.pool),
                                    o !== a && (r.flags |= 2048);
                            }
                            return (
                                n !== e && n && (t.child.flags |= 8192),
                                Ws(t, t.updateQueue),
                                Qs(t),
                                null
                            );
                        case 4:
                            return (
                                J(),
                                null === e && Rc(t.stateNode.containerInfo),
                                Qs(t),
                                null
                            );
                        case 10:
                            return yi(t.type), Qs(t), null;
                        case 19:
                            if ((V(Aa), null === (a = t.memoizedState)))
                                return Qs(t), null;
                            if (
                                ((r = !!(128 & t.flags)),
                                null === (o = a.rendering))
                            )
                                if (r) Vs(a, !1);
                                else {
                                    if (
                                        0 !== uu ||
                                        (null !== e && 128 & e.flags)
                                    )
                                        for (e = t.child; null !== e; ) {
                                            if (null !== (o = Oa(e))) {
                                                for (
                                                    t.flags |= 128,
                                                        Vs(a, !1),
                                                        e = o.updateQueue,
                                                        t.updateQueue = e,
                                                        Ws(t, e),
                                                        t.subtreeFlags = 0,
                                                        e = n,
                                                        n = t.child;
                                                    null !== n;

                                                )
                                                    Ds(n, e), (n = n.sibling);
                                                return (
                                                    Q(Aa, (1 & Aa.current) | 2),
                                                    t.child
                                                );
                                            }
                                            e = e.sibling;
                                        }
                                    null !== a.tail &&
                                        ie() > wu &&
                                        ((t.flags |= 128),
                                        (r = !0),
                                        Vs(a, !1),
                                        (t.lanes = 4194304));
                                }
                            else {
                                if (!r)
                                    if (null !== (e = Oa(o))) {
                                        if (
                                            ((t.flags |= 128),
                                            (r = !0),
                                            (e = e.updateQueue),
                                            (t.updateQueue = e),
                                            Ws(t, e),
                                            Vs(a, !0),
                                            null === a.tail &&
                                                "hidden" === a.tailMode &&
                                                !o.alternate &&
                                                !Yr)
                                        )
                                            return Qs(t), null;
                                    } else
                                        2 * ie() - a.renderingStartTime > wu &&
                                            536870912 !== n &&
                                            ((t.flags |= 128),
                                            (r = !0),
                                            Vs(a, !1),
                                            (t.lanes = 4194304));
                                a.isBackwards
                                    ? ((o.sibling = t.child), (t.child = o))
                                    : (null !== (e = a.last)
                                          ? (e.sibling = o)
                                          : (t.child = o),
                                      (a.last = o));
                            }
                            return null !== a.tail
                                ? ((t = a.tail),
                                  (a.rendering = t),
                                  (a.tail = t.sibling),
                                  (a.renderingStartTime = ie()),
                                  (t.sibling = null),
                                  (e = Aa.current),
                                  Q(Aa, r ? (1 & e) | 2 : 1 & e),
                                  t)
                                : (Qs(t), null);
                        case 22:
                        case 23:
                            return (
                                La(t),
                                za(),
                                (r = null !== t.memoizedState),
                                null !== e
                                    ? (null !== e.memoizedState) !== r &&
                                      (t.flags |= 8192)
                                    : r && (t.flags |= 8192),
                                r
                                    ? !!(536870912 & n) &&
                                      !(128 & t.flags) &&
                                      (Qs(t),
                                      6 & t.subtreeFlags && (t.flags |= 8192))
                                    : Qs(t),
                                null !== (n = t.updateQueue) &&
                                    Ws(t, n.retryQueue),
                                (n = null),
                                null !== e &&
                                    null !== e.memoizedState &&
                                    null !== e.memoizedState.cachePool &&
                                    (n = e.memoizedState.cachePool.pool),
                                (r = null),
                                null !== t.memoizedState &&
                                    null !== t.memoizedState.cachePool &&
                                    (r = t.memoizedState.cachePool.pool),
                                r !== n && (t.flags |= 2048),
                                null !== e && V(Qa),
                                null
                            );
                        case 24:
                            return (
                                (n = null),
                                null !== e && (n = e.memoizedState.cache),
                                t.memoizedState.cache !== n &&
                                    (t.flags |= 2048),
                                yi(Fa),
                                Qs(t),
                                null
                            );
                        case 25:
                            return null;
                    }
                    throw Error(l(156, t.tag));
                }
                function Ys(e, t) {
                    switch ((Vr(t), t.tag)) {
                        case 1:
                            return 65536 & (e = t.flags)
                                ? ((t.flags = (-65537 & e) | 128), t)
                                : null;
                        case 3:
                            return (
                                yi(Fa),
                                J(),
                                65536 & (e = t.flags) && !(128 & e)
                                    ? ((t.flags = (-65537 & e) | 128), t)
                                    : null
                            );
                        case 26:
                        case 27:
                        case 5:
                            return te(t), null;
                        case 13:
                            if (
                                (La(t),
                                null !== (e = t.memoizedState) &&
                                    null !== e.dehydrated)
                            ) {
                                if (null === t.alternate) throw Error(l(340));
                                ra();
                            }
                            return 65536 & (e = t.flags)
                                ? ((t.flags = (-65537 & e) | 128), t)
                                : null;
                        case 19:
                            return V(Aa), null;
                        case 4:
                            return J(), null;
                        case 10:
                            return yi(t.type), null;
                        case 22:
                        case 23:
                            return (
                                La(t),
                                za(),
                                null !== e && V(Qa),
                                65536 & (e = t.flags)
                                    ? ((t.flags = (-65537 & e) | 128), t)
                                    : null
                            );
                        case 24:
                            return yi(Fa), null;
                        default:
                            return null;
                    }
                }
                function Gs(e, t) {
                    switch ((Vr(t), t.tag)) {
                        case 3:
                            yi(Fa), J();
                            break;
                        case 26:
                        case 27:
                        case 5:
                            te(t);
                            break;
                        case 4:
                            J();
                            break;
                        case 13:
                            La(t);
                            break;
                        case 19:
                            V(Aa);
                            break;
                        case 10:
                            yi(t.type);
                            break;
                        case 22:
                        case 23:
                            La(t), za(), null !== e && V(Qa);
                            break;
                        case 24:
                            yi(Fa);
                    }
                }
                var Xs = {
                        getCacheForType: function (e) {
                            var t = Ei(Fa),
                                n = t.data.get(e);
                            return (
                                void 0 === n && ((n = e()), t.data.set(e, n)), n
                            );
                        },
                    },
                    Zs = "function" == typeof WeakMap ? WeakMap : Map,
                    Js = 0,
                    eu = null,
                    tu = null,
                    nu = 0,
                    ru = 0,
                    au = null,
                    ou = !1,
                    lu = !1,
                    iu = !1,
                    su = 0,
                    uu = 0,
                    cu = 0,
                    du = 0,
                    pu = 0,
                    fu = 0,
                    hu = 0,
                    mu = null,
                    gu = null,
                    bu = !1,
                    yu = 0,
                    wu = 1 / 0,
                    vu = null,
                    ku = null,
                    xu = !1,
                    Su = null,
                    Eu = 0,
                    Cu = 0,
                    zu = null,
                    _u = 0,
                    Pu = null;
                function Tu() {
                    return 2 & Js && 0 !== nu
                        ? nu & -nu
                        : null !== T.T
                          ? 0 !== qa
                              ? qa
                              : vc()
                          : $e();
                }
                function Nu() {
                    0 === fu && (fu = 536870912 & nu && !Yr ? 536870912 : Pe());
                    var e = _a.current;
                    return null !== e && (e.flags |= 32), fu;
                }
                function Ru(e, t, n) {
                    ((e === eu && 2 === ru) ||
                        null !== e.cancelPendingCommit) &&
                        (Iu(e, 0), Mu(e, nu, fu, !1)),
                        Re(e, n),
                        (2 & Js && e === eu) ||
                            (e === eu &&
                                (!(2 & Js) && (du |= n),
                                4 === uu && Mu(e, nu, fu, !1)),
                            hc(e));
                }
                function Lu(e, t, n) {
                    if (6 & Js) throw Error(l(327));
                    for (
                        var r =
                                (!n && !(60 & t) && !(t & e.expiredLanes)) ||
                                ze(e, t),
                            a = r
                                ? (function (e, t) {
                                      var n = Js;
                                      Js |= 2;
                                      var r = Uu(),
                                          a = Bu();
                                      eu !== e || nu !== t
                                          ? ((vu = null),
                                            (wu = ie() + 500),
                                            Iu(e, t))
                                          : (lu = ze(e, t));
                                      e: for (;;)
                                          try {
                                              if (0 !== ru && null !== tu) {
                                                  t = tu;
                                                  var o = au;
                                                  t: switch (ru) {
                                                      case 1:
                                                          (ru = 0),
                                                              (au = null),
                                                              Yu(e, t, o, 1);
                                                          break;
                                                      case 2:
                                                          if (sa(o)) {
                                                              (ru = 0),
                                                                  (au = null),
                                                                  Ku(t);
                                                              break;
                                                          }
                                                          (t = function () {
                                                              2 === ru &&
                                                                  eu === e &&
                                                                  (ru = 7),
                                                                  hc(e);
                                                          }),
                                                              o.then(t, t);
                                                          break e;
                                                      case 3:
                                                          ru = 7;
                                                          break e;
                                                      case 4:
                                                          ru = 5;
                                                          break e;
                                                      case 7:
                                                          sa(o)
                                                              ? ((ru = 0),
                                                                (au = null),
                                                                Ku(t))
                                                              : ((ru = 0),
                                                                (au = null),
                                                                Yu(e, t, o, 7));
                                                          break;
                                                      case 5:
                                                          var i = null;
                                                          switch (tu.tag) {
                                                              case 26:
                                                                  i =
                                                                      tu.memoizedState;
                                                              case 5:
                                                              case 27:
                                                                  var s = tu;
                                                                  if (
                                                                      !i ||
                                                                      Pd(i)
                                                                  ) {
                                                                      (ru = 0),
                                                                          (au =
                                                                              null);
                                                                      var u =
                                                                          s.sibling;
                                                                      if (
                                                                          null !==
                                                                          u
                                                                      )
                                                                          tu =
                                                                              u;
                                                                      else {
                                                                          var c =
                                                                              s.return;
                                                                          null !==
                                                                          c
                                                                              ? ((tu =
                                                                                    c),
                                                                                Gu(
                                                                                    c,
                                                                                ))
                                                                              : (tu =
                                                                                    null);
                                                                      }
                                                                      break t;
                                                                  }
                                                          }
                                                          (ru = 0),
                                                              (au = null),
                                                              Yu(e, t, o, 5);
                                                          break;
                                                      case 6:
                                                          (ru = 0),
                                                              (au = null),
                                                              Yu(e, t, o, 6);
                                                          break;
                                                      case 8:
                                                          Fu(), (uu = 6);
                                                          break e;
                                                      default:
                                                          throw Error(l(462));
                                                  }
                                              }
                                              Vu();
                                              break;
                                          } catch (t) {
                                              ju(e, t);
                                          }
                                      return (
                                          (gi = mi = null),
                                          (T.H = r),
                                          (T.A = a),
                                          (Js = n),
                                          null !== tu
                                              ? 0
                                              : ((eu = null),
                                                (nu = 0),
                                                Cr(),
                                                uu)
                                      );
                                  })(e, t)
                                : Hu(e, t, !0),
                            o = r;
                        ;

                    ) {
                        if (0 === a) {
                            lu && !r && Mu(e, t, 0, !1);
                            break;
                        }
                        if (6 === a) Mu(e, t, 0, !ou);
                        else {
                            if (((n = e.current.alternate), o && !$u(n))) {
                                (a = Hu(e, t, !1)), (o = !1);
                                continue;
                            }
                            if (2 === a) {
                                if (((o = t), e.errorRecoveryDisabledLanes & o))
                                    var i = 0;
                                else
                                    i =
                                        0 != (i = -536870913 & e.pendingLanes)
                                            ? i
                                            : 536870912 & i
                                              ? 536870912
                                              : 0;
                                if (0 !== i) {
                                    t = i;
                                    e: {
                                        var s = e;
                                        a = mu;
                                        var u =
                                            s.current.memoizedState
                                                .isDehydrated;
                                        if (
                                            (u && (Iu(s, i).flags |= 256),
                                            2 !== (i = Hu(s, i, !1)))
                                        ) {
                                            if (iu && !u) {
                                                (s.errorRecoveryDisabledLanes |=
                                                    o),
                                                    (du |= o),
                                                    (a = 4);
                                                break e;
                                            }
                                            (o = gu),
                                                (gu = a),
                                                null !== o && Au(o);
                                        }
                                        a = i;
                                    }
                                    if (((o = !1), 2 !== a)) continue;
                                }
                            }
                            if (1 === a) {
                                Iu(e, 0), Mu(e, t, 0, !0);
                                break;
                            }
                            e: {
                                switch (((r = e), a)) {
                                    case 0:
                                    case 1:
                                        throw Error(l(345));
                                    case 4:
                                        if ((4194176 & t) === t) {
                                            Mu(r, t, fu, !ou);
                                            break e;
                                        }
                                        break;
                                    case 2:
                                        gu = null;
                                        break;
                                    case 3:
                                    case 5:
                                        break;
                                    default:
                                        throw Error(l(329));
                                }
                                if (
                                    ((r.finishedWork = n),
                                    (r.finishedLanes = t),
                                    (62914560 & t) === t &&
                                        10 < (o = yu + 300 - ie()))
                                ) {
                                    if ((Mu(r, t, fu, !ou), 0 !== Ce(r, 0)))
                                        break e;
                                    r.timeoutHandle = Jc(
                                        Ou.bind(
                                            null,
                                            r,
                                            n,
                                            gu,
                                            vu,
                                            bu,
                                            t,
                                            fu,
                                            du,
                                            hu,
                                            ou,
                                            2,
                                            -0,
                                            0,
                                        ),
                                        o,
                                    );
                                } else
                                    Ou(
                                        r,
                                        n,
                                        gu,
                                        vu,
                                        bu,
                                        t,
                                        fu,
                                        du,
                                        hu,
                                        ou,
                                        0,
                                        -0,
                                        0,
                                    );
                            }
                        }
                        break;
                    }
                    hc(e);
                }
                function Au(e) {
                    null === gu ? (gu = e) : gu.push.apply(gu, e);
                }
                function Ou(e, t, n, r, a, o, i, s, u, c, d, p, f) {
                    var h = t.subtreeFlags;
                    if (
                        (8192 & h || !(16785408 & ~h)) &&
                        ((Td = { stylesheets: null, count: 0, unsuspend: Nd }),
                        _s(t),
                        null !==
                            (t = (function () {
                                if (null === Td) throw Error(l(475));
                                var e = Td;
                                return (
                                    e.stylesheets &&
                                        0 === e.count &&
                                        Ad(e, e.stylesheets),
                                    0 < e.count
                                        ? function (t) {
                                              var n = setTimeout(function () {
                                                  if (
                                                      (e.stylesheets &&
                                                          Ad(e, e.stylesheets),
                                                      e.unsuspend)
                                                  ) {
                                                      var t = e.unsuspend;
                                                      (e.unsuspend = null), t();
                                                  }
                                              }, 6e4);
                                              return (
                                                  (e.unsuspend = t),
                                                  function () {
                                                      (e.unsuspend = null),
                                                          clearTimeout(n);
                                                  }
                                              );
                                          }
                                        : null
                                );
                            })()))
                    )
                        return (
                            (e.cancelPendingCommit = t(
                                Zu.bind(null, e, n, r, a, i, s, u, 1, p, f),
                            )),
                            void Mu(e, o, i, !c)
                        );
                    Zu(e, n, r, a, i, s, u);
                }
                function $u(e) {
                    for (var t = e; ; ) {
                        var n = t.tag;
                        if (
                            (0 === n || 11 === n || 15 === n) &&
                            16384 & t.flags &&
                            null !== (n = t.updateQueue) &&
                            null !== (n = n.stores)
                        )
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r],
                                    o = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!Qn(o(), a)) return !1;
                                } catch (e) {
                                    return !1;
                                }
                            }
                        if (
                            ((n = t.child),
                            16384 & t.subtreeFlags && null !== n)
                        )
                            (n.return = t), (t = n);
                        else {
                            if (t === e) break;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === e)
                                    return !0;
                                t = t.return;
                            }
                            (t.sibling.return = t.return), (t = t.sibling);
                        }
                    }
                    return !0;
                }
                function Mu(e, t, n, r) {
                    (t &= ~pu),
                        (t &= ~du),
                        (e.suspendedLanes |= t),
                        (e.pingedLanes &= ~t),
                        r && (e.warmLanes |= t),
                        (r = e.expirationTimes);
                    for (var a = t; 0 < a; ) {
                        var o = 31 - we(a),
                            l = 1 << o;
                        (r[o] = -1), (a &= ~l);
                    }
                    0 !== n && Le(e, n, t);
                }
                function Du() {
                    return !!(6 & Js) || (mc(0, !1), !1);
                }
                function Fu() {
                    if (null !== tu) {
                        if (0 === ru) var e = tu.return;
                        else
                            (gi = mi = null),
                                bo((e = tu)),
                                (fa = null),
                                (ha = 0),
                                (e = tu);
                        for (; null !== e; ) Gs(e.alternate, e), (e = e.return);
                        tu = null;
                    }
                }
                function Iu(e, t) {
                    (e.finishedWork = null), (e.finishedLanes = 0);
                    var n = e.timeoutHandle;
                    -1 !== n && ((e.timeoutHandle = -1), ed(n)),
                        null !== (n = e.cancelPendingCommit) &&
                            ((e.cancelPendingCommit = null), n()),
                        Fu(),
                        (eu = e),
                        (tu = n = Ms(e.current, null)),
                        (nu = t),
                        (ru = 0),
                        (au = null),
                        (ou = !1),
                        (lu = ze(e, t)),
                        (iu = !1),
                        (hu = fu = pu = du = cu = uu = 0),
                        (gu = mu = null),
                        (bu = !1),
                        8 & t && (t |= 32 & t);
                    var r = e.entangledLanes;
                    if (0 !== r)
                        for (e = e.entanglements, r &= t; 0 < r; ) {
                            var a = 31 - we(r),
                                o = 1 << a;
                            (t |= e[a]), (r &= ~o);
                        }
                    return (su = t), Cr(), n;
                }
                function ju(e, t) {
                    (Za = null),
                        (T.H = El),
                        t === oa
                            ? ((t = pa()), (ru = 3))
                            : t === la
                              ? ((t = pa()), (ru = 4))
                              : (ru =
                                    t === Bl
                                        ? 8
                                        : null !== t &&
                                            "object" == typeof t &&
                                            "function" == typeof t.then
                                          ? 6
                                          : 1),
                        (au = t),
                        null === tu && ((uu = 1), Dl(e, Ar(t, e.current)));
                }
                function Uu() {
                    var e = T.H;
                    return (T.H = El), null === e ? El : e;
                }
                function Bu() {
                    var e = T.A;
                    return (T.A = Xs), e;
                }
                function qu() {
                    (uu = 4),
                        ou ||
                            ((4194176 & nu) !== nu && null !== _a.current) ||
                            (lu = !0),
                        (!(134217727 & cu) && !(134217727 & du)) ||
                            null === eu ||
                            Mu(eu, nu, fu, !1);
                }
                function Hu(e, t, n) {
                    var r = Js;
                    Js |= 2;
                    var a = Uu(),
                        o = Bu();
                    (eu === e && nu === t) || ((vu = null), Iu(e, t)), (t = !1);
                    var l = uu;
                    e: for (;;)
                        try {
                            if (0 !== ru && null !== tu) {
                                var i = tu,
                                    s = au;
                                switch (ru) {
                                    case 8:
                                        Fu(), (l = 6);
                                        break e;
                                    case 3:
                                    case 2:
                                    case 6:
                                        null === _a.current && (t = !0);
                                        var u = ru;
                                        if (
                                            ((ru = 0),
                                            (au = null),
                                            Yu(e, i, s, u),
                                            n && lu)
                                        ) {
                                            l = 0;
                                            break e;
                                        }
                                        break;
                                    default:
                                        (u = ru),
                                            (ru = 0),
                                            (au = null),
                                            Yu(e, i, s, u);
                                }
                            }
                            Wu(), (l = uu);
                            break;
                        } catch (t) {
                            ju(e, t);
                        }
                    return (
                        t && e.shellSuspendCounter++,
                        (gi = mi = null),
                        (Js = r),
                        (T.H = a),
                        (T.A = o),
                        null === tu && ((eu = null), (nu = 0), Cr()),
                        l
                    );
                }
                function Wu() {
                    for (; null !== tu; ) Qu(tu);
                }
                function Vu() {
                    for (; null !== tu && !oe(); ) Qu(tu);
                }
                function Qu(e) {
                    var t = fi(e.alternate, e, su);
                    (e.memoizedProps = e.pendingProps),
                        null === t ? Gu(e) : (tu = t);
                }
                function Ku(e) {
                    var t = e,
                        n = t.alternate;
                    switch (t.tag) {
                        case 15:
                        case 0:
                            t = Zl(n, t, t.pendingProps, t.type, void 0, nu);
                            break;
                        case 11:
                            t = Zl(
                                n,
                                t,
                                t.pendingProps,
                                t.type.render,
                                t.ref,
                                nu,
                            );
                            break;
                        case 5:
                            bo(t);
                        default:
                            Gs(n, t), (t = fi(n, (t = tu = Ds(t, su)), su));
                    }
                    (e.memoizedProps = e.pendingProps),
                        null === t ? Gu(e) : (tu = t);
                }
                function Yu(e, t, n, r) {
                    (gi = mi = null), bo(t), (fa = null), (ha = 0);
                    var a = t.return;
                    try {
                        if (
                            (function (e, t, n, r, a) {
                                if (
                                    ((n.flags |= 32768),
                                    null !== r &&
                                        "object" == typeof r &&
                                        "function" == typeof r.then)
                                ) {
                                    if (
                                        (null !== (t = n.alternate) &&
                                            ki(t, n, a, !0),
                                        null !== (n = _a.current))
                                    ) {
                                        switch (n.tag) {
                                            case 13:
                                                return (
                                                    null === Pa
                                                        ? qu()
                                                        : null ===
                                                              n.alternate &&
                                                          0 === uu &&
                                                          (uu = 3),
                                                    (n.flags &= -257),
                                                    (n.flags |= 65536),
                                                    (n.lanes = a),
                                                    r === ia
                                                        ? (n.flags |= 16384)
                                                        : (null ===
                                                          (t = n.updateQueue)
                                                              ? (n.updateQueue =
                                                                    new Set([
                                                                        r,
                                                                    ]))
                                                              : t.add(r),
                                                          rc(e, r, a)),
                                                    !1
                                                );
                                            case 22:
                                                return (
                                                    (n.flags |= 65536),
                                                    r === ia
                                                        ? (n.flags |= 16384)
                                                        : (null ===
                                                          (t = n.updateQueue)
                                                              ? ((t = {
                                                                    transitions:
                                                                        null,
                                                                    markerInstances:
                                                                        null,
                                                                    retryQueue:
                                                                        new Set(
                                                                            [r],
                                                                        ),
                                                                }),
                                                                (n.updateQueue =
                                                                    t))
                                                              : null ===
                                                                  (n =
                                                                      t.retryQueue)
                                                                ? (t.retryQueue =
                                                                      new Set([
                                                                          r,
                                                                      ]))
                                                                : n.add(r),
                                                          rc(e, r, a)),
                                                    !1
                                                );
                                        }
                                        throw Error(l(435, n.tag));
                                    }
                                    return rc(e, r, a), qu(), !1;
                                }
                                if (Yr)
                                    return (
                                        null !== (t = _a.current)
                                            ? (!(65536 & t.flags) &&
                                                  (t.flags |= 256),
                                              (t.flags |= 65536),
                                              (t.lanes = a),
                                              r !== Zr &&
                                                  aa(
                                                      Ar(
                                                          (e = Error(l(422), {
                                                              cause: r,
                                                          })),
                                                          n,
                                                      ),
                                                  ))
                                            : (r !== Zr &&
                                                  aa(
                                                      Ar(
                                                          (t = Error(l(423), {
                                                              cause: r,
                                                          })),
                                                          n,
                                                      ),
                                                  ),
                                              ((e =
                                                  e.current.alternate).flags |=
                                                  65536),
                                              (a &= -a),
                                              (e.lanes |= a),
                                              (r = Ar(r, n)),
                                              Ai(
                                                  e,
                                                  (a = Il(e.stateNode, r, a)),
                                              ),
                                              4 !== uu && (uu = 2)),
                                        !1
                                    );
                                var o = Error(l(520), { cause: r });
                                if (
                                    ((o = Ar(o, n)),
                                    null === mu ? (mu = [o]) : mu.push(o),
                                    4 !== uu && (uu = 2),
                                    null === t)
                                )
                                    return !0;
                                (r = Ar(r, n)), (n = t);
                                do {
                                    switch (n.tag) {
                                        case 3:
                                            return (
                                                (n.flags |= 65536),
                                                (e = a & -a),
                                                (n.lanes |= e),
                                                Ai(
                                                    n,
                                                    (e = Il(n.stateNode, r, e)),
                                                ),
                                                !1
                                            );
                                        case 1:
                                            if (
                                                ((t = n.type),
                                                (o = n.stateNode),
                                                !(
                                                    128 & n.flags ||
                                                    ("function" !=
                                                        typeof t.getDerivedStateFromError &&
                                                        (null === o ||
                                                            "function" !=
                                                                typeof o.componentDidCatch ||
                                                            (null !== ku &&
                                                                ku.has(o))))
                                                ))
                                            )
                                                return (
                                                    (n.flags |= 65536),
                                                    (a &= -a),
                                                    (n.lanes |= a),
                                                    Ul((a = jl(a)), e, n, r),
                                                    Ai(n, a),
                                                    !1
                                                );
                                    }
                                    n = n.return;
                                } while (null !== n);
                                return !1;
                            })(e, a, t, n, nu)
                        )
                            return (
                                (uu = 1),
                                Dl(e, Ar(n, e.current)),
                                void (tu = null)
                            );
                    } catch (t) {
                        if (null !== a) throw ((tu = a), t);
                        return (
                            (uu = 1), Dl(e, Ar(n, e.current)), void (tu = null)
                        );
                    }
                    32768 & t.flags
                        ? (Yr || 1 === r
                              ? (e = !0)
                              : lu || 536870912 & nu
                                ? (e = !1)
                                : ((ou = e = !0),
                                  (2 === r || 3 === r || 6 === r) &&
                                      null !== (r = _a.current) &&
                                      13 === r.tag &&
                                      (r.flags |= 16384)),
                          Xu(t, e))
                        : Gu(t);
                }
                function Gu(e) {
                    var t = e;
                    do {
                        if (32768 & t.flags) return void Xu(t, ou);
                        e = t.return;
                        var n = Ks(t.alternate, t, su);
                        if (null !== n) return void (tu = n);
                        if (null !== (t = t.sibling)) return void (tu = t);
                        tu = t = e;
                    } while (null !== t);
                    0 === uu && (uu = 5);
                }
                function Xu(e, t) {
                    do {
                        var n = Ys(e.alternate, e);
                        if (null !== n)
                            return (n.flags &= 32767), void (tu = n);
                        if (
                            (null !== (n = e.return) &&
                                ((n.flags |= 32768),
                                (n.subtreeFlags = 0),
                                (n.deletions = null)),
                            !t && null !== (e = e.sibling))
                        )
                            return void (tu = e);
                        tu = e = n;
                    } while (null !== e);
                    (uu = 6), (tu = null);
                }
                function Zu(e, t, n, r, a, o, i, s, u, c) {
                    var d = T.T,
                        p = U.p;
                    try {
                        (U.p = 2),
                            (T.T = null),
                            (function (e, t, n, r, a, o, i, s) {
                                do {
                                    ec();
                                } while (null !== Su);
                                if (6 & Js) throw Error(l(327));
                                var u = e.finishedWork;
                                if (((r = e.finishedLanes), null === u))
                                    return null;
                                if (
                                    ((e.finishedWork = null),
                                    (e.finishedLanes = 0),
                                    u === e.current)
                                )
                                    throw Error(l(177));
                                (e.callbackNode = null),
                                    (e.callbackPriority = 0),
                                    (e.cancelPendingCommit = null);
                                var c = u.lanes | u.childLanes;
                                if (
                                    ((function (e, t, n, r, a, o) {
                                        var l = e.pendingLanes;
                                        (e.pendingLanes = n),
                                            (e.suspendedLanes = 0),
                                            (e.pingedLanes = 0),
                                            (e.warmLanes = 0),
                                            (e.expiredLanes &= n),
                                            (e.entangledLanes &= n),
                                            (e.errorRecoveryDisabledLanes &= n),
                                            (e.shellSuspendCounter = 0);
                                        var i = e.entanglements,
                                            s = e.expirationTimes,
                                            u = e.hiddenUpdates;
                                        for (n = l & ~n; 0 < n; ) {
                                            var c = 31 - we(n),
                                                d = 1 << c;
                                            (i[c] = 0), (s[c] = -1);
                                            var p = u[c];
                                            if (null !== p)
                                                for (
                                                    u[c] = null, c = 0;
                                                    c < p.length;
                                                    c++
                                                ) {
                                                    var f = p[c];
                                                    null !== f &&
                                                        (f.lane &= -536870913);
                                                }
                                            n &= ~d;
                                        }
                                        0 !== r && Le(e, r, 0),
                                            0 !== o &&
                                                0 === a &&
                                                0 !== e.tag &&
                                                (e.suspendedLanes |=
                                                    o & ~(l & ~t));
                                    })(e, r, (c |= Er), o, i, s),
                                    e === eu && ((tu = eu = null), (nu = 0)),
                                    (!(10256 & u.subtreeFlags) &&
                                        !(10256 & u.flags)) ||
                                        xu ||
                                        ((xu = !0),
                                        (Cu = c),
                                        (zu = n),
                                        re(de, function () {
                                            return ec(), null;
                                        })),
                                    (n = !!(15990 & u.flags)),
                                    15990 & u.subtreeFlags || n
                                        ? ((n = T.T),
                                          (T.T = null),
                                          (o = U.p),
                                          (U.p = 2),
                                          (i = Js),
                                          (Js |= 4),
                                          (function (e, t) {
                                              if (
                                                  ((e = e.containerInfo),
                                                  (Vc = Ud),
                                                  Jn((e = Zn(e))))
                                              ) {
                                                  if ("selectionStart" in e)
                                                      var n = {
                                                          start: e.selectionStart,
                                                          end: e.selectionEnd,
                                                      };
                                                  else
                                                      e: {
                                                          var r =
                                                              (n =
                                                                  ((n =
                                                                      e.ownerDocument) &&
                                                                      n.defaultView) ||
                                                                  window)
                                                                  .getSelection &&
                                                              n.getSelection();
                                                          if (
                                                              r &&
                                                              0 !== r.rangeCount
                                                          ) {
                                                              n = r.anchorNode;
                                                              var a =
                                                                      r.anchorOffset,
                                                                  o =
                                                                      r.focusNode;
                                                              r = r.focusOffset;
                                                              try {
                                                                  n.nodeType,
                                                                      o.nodeType;
                                                              } catch (e) {
                                                                  n = null;
                                                                  break e;
                                                              }
                                                              var i = 0,
                                                                  s = -1,
                                                                  u = -1,
                                                                  c = 0,
                                                                  d = 0,
                                                                  p = e,
                                                                  f = null;
                                                              t: for (;;) {
                                                                  for (
                                                                      var h;
                                                                      p !== n ||
                                                                          (0 !==
                                                                              a &&
                                                                              3 !==
                                                                                  p.nodeType) ||
                                                                          (s =
                                                                              i +
                                                                              a),
                                                                          p !==
                                                                              o ||
                                                                              (0 !==
                                                                                  r &&
                                                                                  3 !==
                                                                                      p.nodeType) ||
                                                                              (u =
                                                                                  i +
                                                                                  r),
                                                                          3 ===
                                                                              p.nodeType &&
                                                                              (i +=
                                                                                  p
                                                                                      .nodeValue
                                                                                      .length),
                                                                          null !==
                                                                              (h =
                                                                                  p.firstChild);

                                                                  )
                                                                      (f = p),
                                                                          (p =
                                                                              h);
                                                                  for (;;) {
                                                                      if (
                                                                          p ===
                                                                          e
                                                                      )
                                                                          break t;
                                                                      if (
                                                                          (f ===
                                                                              n &&
                                                                              ++c ===
                                                                                  a &&
                                                                              (s =
                                                                                  i),
                                                                          f ===
                                                                              o &&
                                                                              ++d ===
                                                                                  r &&
                                                                              (u =
                                                                                  i),
                                                                          null !==
                                                                              (h =
                                                                                  p.nextSibling))
                                                                      )
                                                                          break;
                                                                      f = (p =
                                                                          f)
                                                                          .parentNode;
                                                                  }
                                                                  p = h;
                                                              }
                                                              n =
                                                                  -1 === s ||
                                                                  -1 === u
                                                                      ? null
                                                                      : {
                                                                            start: s,
                                                                            end: u,
                                                                        };
                                                          } else n = null;
                                                      }
                                                  n = n || { start: 0, end: 0 };
                                              } else n = null;
                                              for (
                                                  Qc = {
                                                      focusedElem: e,
                                                      selectionRange: n,
                                                  },
                                                      Ud = !1,
                                                      ts = t;
                                                  null !== ts;

                                              )
                                                  if (
                                                      ((e = (t = ts).child),
                                                      1028 & t.subtreeFlags &&
                                                          null !== e)
                                                  )
                                                      (e.return = t), (ts = e);
                                                  else
                                                      for (; null !== ts; ) {
                                                          switch (
                                                              ((o = (t = ts)
                                                                  .alternate),
                                                              (e = t.flags),
                                                              t.tag)
                                                          ) {
                                                              case 0:
                                                              case 11:
                                                              case 15:
                                                              case 5:
                                                              case 26:
                                                              case 27:
                                                              case 6:
                                                              case 4:
                                                              case 17:
                                                                  break;
                                                              case 1:
                                                                  if (
                                                                      1024 &
                                                                          e &&
                                                                      null !== o
                                                                  ) {
                                                                      (e =
                                                                          void 0),
                                                                          (n =
                                                                              t),
                                                                          (a =
                                                                              o.memoizedProps),
                                                                          (o =
                                                                              o.memoizedState),
                                                                          (r =
                                                                              n.stateNode);
                                                                      try {
                                                                          var m =
                                                                              Ll(
                                                                                  n.type,
                                                                                  a,
                                                                                  (n.elementType,
                                                                                  n.type),
                                                                              );
                                                                          (e =
                                                                              r.getSnapshotBeforeUpdate(
                                                                                  m,
                                                                                  o,
                                                                              )),
                                                                              (r.__reactInternalSnapshotBeforeUpdate =
                                                                                  e);
                                                                      } catch (e) {
                                                                          nc(
                                                                              n,
                                                                              n.return,
                                                                              e,
                                                                          );
                                                                      }
                                                                  }
                                                                  break;
                                                              case 3:
                                                                  if (1024 & e)
                                                                      if (
                                                                          9 ===
                                                                          (n =
                                                                              (e =
                                                                                  t
                                                                                      .stateNode
                                                                                      .containerInfo)
                                                                                  .nodeType)
                                                                      )
                                                                          od(e);
                                                                      else if (
                                                                          1 ===
                                                                          n
                                                                      )
                                                                          switch (
                                                                              e.nodeName
                                                                          ) {
                                                                              case "HEAD":
                                                                              case "HTML":
                                                                              case "BODY":
                                                                                  od(
                                                                                      e,
                                                                                  );
                                                                                  break;
                                                                              default:
                                                                                  e.textContent =
                                                                                      "";
                                                                          }
                                                                  break;
                                                              default:
                                                                  if (1024 & e)
                                                                      throw Error(
                                                                          l(
                                                                              163,
                                                                          ),
                                                                      );
                                                          }
                                                          if (
                                                              null !==
                                                              (e = t.sibling)
                                                          ) {
                                                              (e.return =
                                                                  t.return),
                                                                  (ts = e);
                                                              break;
                                                          }
                                                          ts = t.return;
                                                      }
                                              (m = ns), (ns = !1);
                                          })(e, u),
                                          fs(u, e),
                                          er(Qc, e.containerInfo),
                                          (Ud = !!Vc),
                                          (Qc = Vc = null),
                                          (e.current = u),
                                          rs(e, u.alternate, u),
                                          le(),
                                          (Js = i),
                                          (U.p = o),
                                          (T.T = n))
                                        : (e.current = u),
                                    xu
                                        ? ((xu = !1), (Su = e), (Eu = r))
                                        : Ju(e, c),
                                    0 === (c = e.pendingLanes) && (ku = null),
                                    (function (e) {
                                        if (
                                            be &&
                                            "function" ==
                                                typeof be.onCommitFiberRoot
                                        )
                                            try {
                                                be.onCommitFiberRoot(
                                                    ge,
                                                    e,
                                                    void 0,
                                                    !(128 & ~e.current.flags),
                                                );
                                            } catch (e) {}
                                    })(u.stateNode),
                                    hc(e),
                                    null !== t)
                                )
                                    for (
                                        a = e.onRecoverableError, u = 0;
                                        u < t.length;
                                        u++
                                    )
                                        a((c = t[u]).value, {
                                            componentStack: c.stack,
                                        });
                                !!(3 & Eu) && ec(),
                                    (c = e.pendingLanes),
                                    4194218 & r && 42 & c
                                        ? e === Pu
                                            ? _u++
                                            : ((_u = 0), (Pu = e))
                                        : (_u = 0),
                                    mc(0, !1);
                            })(e, t, n, r, p, a, o, i);
                    } finally {
                        (T.T = d), (U.p = p);
                    }
                }
                function Ju(e, t) {
                    0 == (e.pooledCacheLanes &= t) &&
                        null != (t = e.pooledCache) &&
                        ((e.pooledCache = null), ja(t));
                }
                function ec() {
                    if (null !== Su) {
                        var e = Su,
                            t = Cu;
                        Cu = 0;
                        var n = Oe(Eu),
                            r = T.T,
                            a = U.p;
                        try {
                            if (
                                ((U.p = 32 > n ? 32 : n),
                                (T.T = null),
                                null === Su)
                            )
                                var o = !1;
                            else {
                                (n = zu), (zu = null);
                                var i = Su,
                                    s = Eu;
                                if (((Su = null), (Eu = 0), 6 & Js))
                                    throw Error(l(331));
                                var u = Js;
                                if (
                                    ((Js |= 4),
                                    Ns(i.current),
                                    xs(i, i.current, s, n),
                                    (Js = u),
                                    mc(0, !1),
                                    be &&
                                        "function" ==
                                            typeof be.onPostCommitFiberRoot)
                                )
                                    try {
                                        be.onPostCommitFiberRoot(ge, i);
                                    } catch (e) {}
                                o = !0;
                            }
                            return o;
                        } finally {
                            (U.p = a), (T.T = r), Ju(e, t);
                        }
                    }
                    return !1;
                }
                function tc(e, t, n) {
                    (t = Ar(n, t)),
                        null !== (e = Ri(e, (t = Il(e.stateNode, t, 2)), 2)) &&
                            (Re(e, 2), hc(e));
                }
                function nc(e, t, n) {
                    if (3 === e.tag) tc(e, e, n);
                    else
                        for (; null !== t; ) {
                            if (3 === t.tag) {
                                tc(t, e, n);
                                break;
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if (
                                    "function" ==
                                        typeof t.type
                                            .getDerivedStateFromError ||
                                    ("function" == typeof r.componentDidCatch &&
                                        (null === ku || !ku.has(r)))
                                ) {
                                    (e = Ar(n, e)),
                                        null !== (r = Ri(t, (n = jl(2)), 2)) &&
                                            (Ul(n, r, t, e), Re(r, 2), hc(r));
                                    break;
                                }
                            }
                            t = t.return;
                        }
                }
                function rc(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new Zs();
                        var a = new Set();
                        r.set(t, a);
                    } else
                        void 0 === (a = r.get(t)) &&
                            ((a = new Set()), r.set(t, a));
                    a.has(n) ||
                        ((iu = !0),
                        a.add(n),
                        (e = ac.bind(null, e, t, n)),
                        t.then(e, e));
                }
                function ac(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t),
                        (e.pingedLanes |= e.suspendedLanes & n),
                        (e.warmLanes &= ~n),
                        eu === e &&
                            (nu & n) === n &&
                            (4 === uu ||
                            (3 === uu &&
                                (62914560 & nu) === nu &&
                                300 > ie() - yu)
                                ? !(2 & Js) && Iu(e, 0)
                                : (pu |= n),
                            hu === nu && (hu = 0)),
                        hc(e);
                }
                function oc(e, t) {
                    0 === t && (t = Te()),
                        null !== (e = Pr(e, t)) && (Re(e, t), hc(e));
                }
                function lc(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), oc(e, n);
                }
                function ic(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        case 22:
                            r = e.stateNode._retryCache;
                            break;
                        default:
                            throw Error(l(314));
                    }
                    null !== r && r.delete(t), oc(e, n);
                }
                var sc = null,
                    uc = null,
                    cc = !1,
                    dc = !1,
                    pc = !1,
                    fc = 0;
                function hc(e) {
                    var t;
                    e !== uc &&
                        null === e.next &&
                        (null === uc ? (sc = uc = e) : (uc = uc.next = e)),
                        (dc = !0),
                        cc ||
                            ((cc = !0),
                            (t = gc),
                            nd(function () {
                                6 & Js ? re(ue, t) : t();
                            }));
                }
                function mc(e, t) {
                    if (!pc && dc) {
                        pc = !0;
                        do {
                            for (var n = !1, r = sc; null !== r; ) {
                                if (!t)
                                    if (0 !== e) {
                                        var a = r.pendingLanes;
                                        if (0 === a) var o = 0;
                                        else {
                                            var l = r.suspendedLanes,
                                                i = r.pingedLanes;
                                            (o =
                                                (1 << (31 - we(42 | e) + 1)) -
                                                1),
                                                (o =
                                                    201326677 &
                                                    (o &= a & ~(l & ~i))
                                                        ? (201326677 & o) | 1
                                                        : o
                                                          ? 2 | o
                                                          : 0);
                                        }
                                        0 !== o && ((n = !0), wc(r, o));
                                    } else
                                        (o = nu),
                                            !(
                                                3 &
                                                (o = Ce(r, r === eu ? o : 0))
                                            ) ||
                                                ze(r, o) ||
                                                ((n = !0), wc(r, o));
                                r = r.next;
                            }
                        } while (n);
                        pc = !1;
                    }
                }
                function gc() {
                    dc = cc = !1;
                    var e,
                        t = 0;
                    0 !== fc &&
                        (((e = window.event) && "popstate" === e.type
                            ? e !== Zc && ((Zc = e), !0)
                            : ((Zc = null), !1)) && (t = fc),
                        (fc = 0));
                    for (var n = ie(), r = null, a = sc; null !== a; ) {
                        var o = a.next,
                            l = bc(a, n);
                        0 === l
                            ? ((a.next = null),
                              null === r ? (sc = o) : (r.next = o),
                              null === o && (uc = r))
                            : ((r = a), (0 !== t || 3 & l) && (dc = !0)),
                            (a = o);
                    }
                    mc(t, !1);
                }
                function bc(e, t) {
                    for (
                        var n = e.suspendedLanes,
                            r = e.pingedLanes,
                            a = e.expirationTimes,
                            o = -62914561 & e.pendingLanes;
                        0 < o;

                    ) {
                        var l = 31 - we(o),
                            i = 1 << l,
                            s = a[l];
                        -1 === s
                            ? (i & n && !(i & r)) || (a[l] = _e(i, t))
                            : s <= t && (e.expiredLanes |= i),
                            (o &= ~i);
                    }
                    if (
                        ((n = nu),
                        (n = Ce(e, e === (t = eu) ? n : 0)),
                        (r = e.callbackNode),
                        0 === n ||
                            (e === t && 2 === ru) ||
                            null !== e.cancelPendingCommit)
                    )
                        return (
                            null !== r && null !== r && ae(r),
                            (e.callbackNode = null),
                            (e.callbackPriority = 0)
                        );
                    if (!(3 & n) || ze(e, n)) {
                        if ((t = n & -n) === e.callbackPriority) return t;
                        switch ((null !== r && ae(r), Oe(n))) {
                            case 2:
                            case 8:
                                n = ce;
                                break;
                            case 32:
                            default:
                                n = de;
                                break;
                            case 268435456:
                                n = fe;
                        }
                        return (
                            (r = yc.bind(null, e)),
                            (n = re(n, r)),
                            (e.callbackPriority = t),
                            (e.callbackNode = n),
                            t
                        );
                    }
                    return (
                        null !== r && null !== r && ae(r),
                        (e.callbackPriority = 2),
                        (e.callbackNode = null),
                        2
                    );
                }
                function yc(e, t) {
                    var n = e.callbackNode;
                    if (ec() && e.callbackNode !== n) return null;
                    var r = nu;
                    return 0 === (r = Ce(e, e === eu ? r : 0))
                        ? null
                        : (Lu(e, r, t),
                          bc(e, ie()),
                          null != e.callbackNode && e.callbackNode === n
                              ? yc.bind(null, e)
                              : null);
                }
                function wc(e, t) {
                    if (ec()) return null;
                    Lu(e, t, !0);
                }
                function vc() {
                    return 0 === fc && (fc = Pe()), fc;
                }
                function kc(e) {
                    return null == e ||
                        "symbol" == typeof e ||
                        "boolean" == typeof e
                        ? null
                        : "function" == typeof e
                          ? e
                          : Pt("" + e);
                }
                function xc(e, t) {
                    var n = t.ownerDocument.createElement("input");
                    return (
                        (n.name = t.name),
                        (n.value = t.value),
                        e.id && n.setAttribute("form", e.id),
                        t.parentNode.insertBefore(n, t),
                        (e = new FormData(e)),
                        n.parentNode.removeChild(n),
                        e
                    );
                }
                for (var Sc = 0; Sc < vr.length; Sc++) {
                    var Ec = vr[Sc];
                    kr(
                        Ec.toLowerCase(),
                        "on" + (Ec[0].toUpperCase() + Ec.slice(1)),
                    );
                }
                kr(pr, "onAnimationEnd"),
                    kr(fr, "onAnimationIteration"),
                    kr(hr, "onAnimationStart"),
                    kr("dblclick", "onDoubleClick"),
                    kr("focusin", "onFocus"),
                    kr("focusout", "onBlur"),
                    kr(mr, "onTransitionRun"),
                    kr(gr, "onTransitionStart"),
                    kr(br, "onTransitionCancel"),
                    kr(yr, "onTransitionEnd"),
                    et("onMouseEnter", ["mouseout", "mouseover"]),
                    et("onMouseLeave", ["mouseout", "mouseover"]),
                    et("onPointerEnter", ["pointerout", "pointerover"]),
                    et("onPointerLeave", ["pointerout", "pointerover"]),
                    Je(
                        "onChange",
                        "change click focusin focusout input keydown keyup selectionchange".split(
                            " ",
                        ),
                    ),
                    Je(
                        "onSelect",
                        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                            " ",
                        ),
                    ),
                    Je("onBeforeInput", [
                        "compositionend",
                        "keypress",
                        "textInput",
                        "paste",
                    ]),
                    Je(
                        "onCompositionEnd",
                        "compositionend focusout keydown keypress keyup mousedown".split(
                            " ",
                        ),
                    ),
                    Je(
                        "onCompositionStart",
                        "compositionstart focusout keydown keypress keyup mousedown".split(
                            " ",
                        ),
                    ),
                    Je(
                        "onCompositionUpdate",
                        "compositionupdate focusout keydown keypress keyup mousedown".split(
                            " ",
                        ),
                    );
                var Cc =
                        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                            " ",
                        ),
                    zc = new Set(
                        "beforetoggle cancel close invalid load scroll scrollend toggle"
                            .split(" ")
                            .concat(Cc),
                    );
                function _c(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var l = r.length - 1; 0 <= l; l--) {
                                    var i = r[l],
                                        s = i.instance,
                                        u = i.currentTarget;
                                    if (
                                        ((i = i.listener),
                                        s !== o && a.isPropagationStopped())
                                    )
                                        break e;
                                    (o = i), (a.currentTarget = u);
                                    try {
                                        o(a);
                                    } catch (e) {
                                        Al(e);
                                    }
                                    (a.currentTarget = null), (o = s);
                                }
                            else
                                for (l = 0; l < r.length; l++) {
                                    if (
                                        ((s = (i = r[l]).instance),
                                        (u = i.currentTarget),
                                        (i = i.listener),
                                        s !== o && a.isPropagationStopped())
                                    )
                                        break e;
                                    (o = i), (a.currentTarget = u);
                                    try {
                                        o(a);
                                    } catch (e) {
                                        Al(e);
                                    }
                                    (a.currentTarget = null), (o = s);
                                }
                        }
                    }
                }
                function Pc(e, t) {
                    var n = t[je];
                    void 0 === n && (n = t[je] = new Set());
                    var r = e + "__bubble";
                    n.has(r) || (Lc(t, e, 2, !1), n.add(r));
                }
                function Tc(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Lc(n, e, r, t);
                }
                var Nc =
                    "_reactListening" + Math.random().toString(36).slice(2);
                function Rc(e) {
                    if (!e[Nc]) {
                        (e[Nc] = !0),
                            Xe.forEach(function (t) {
                                "selectionchange" !== t &&
                                    (zc.has(t) || Tc(t, !1, e), Tc(t, !0, e));
                            });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t ||
                            t[Nc] ||
                            ((t[Nc] = !0), Tc("selectionchange", !1, t));
                    }
                }
                function Lc(e, t, n, r) {
                    switch (Kd(t)) {
                        case 2:
                            var a = Bd;
                            break;
                        case 8:
                            a = qd;
                            break;
                        default:
                            a = Hd;
                    }
                    (n = a.bind(null, t, n, e)),
                        (a = void 0),
                        !Dt ||
                            ("touchstart" !== t &&
                                "touchmove" !== t &&
                                "wheel" !== t) ||
                            (a = !0),
                        r
                            ? void 0 !== a
                                ? e.addEventListener(t, n, {
                                      capture: !0,
                                      passive: a,
                                  })
                                : e.addEventListener(t, n, !0)
                            : void 0 !== a
                              ? e.addEventListener(t, n, { passive: a })
                              : e.addEventListener(t, n, !1);
                }
                function Ac(e, t, n, r, a) {
                    var o = r;
                    if (!(1 & t || 2 & t || null === r))
                        e: for (;;) {
                            if (null === r) return;
                            var l = r.tag;
                            if (3 === l || 4 === l) {
                                var i = r.stateNode.containerInfo;
                                if (
                                    i === a ||
                                    (8 === i.nodeType && i.parentNode === a)
                                )
                                    break;
                                if (4 === l)
                                    for (l = r.return; null !== l; ) {
                                        var s = l.tag;
                                        if (
                                            (3 === s || 4 === s) &&
                                            ((s = l.stateNode.containerInfo) ===
                                                a ||
                                                (8 === s.nodeType &&
                                                    s.parentNode === a))
                                        )
                                            return;
                                        l = l.return;
                                    }
                                for (; null !== i; ) {
                                    if (null === (l = Ve(i))) return;
                                    if (
                                        5 === (s = l.tag) ||
                                        6 === s ||
                                        26 === s ||
                                        27 === s
                                    ) {
                                        r = o = l;
                                        continue e;
                                    }
                                    i = i.parentNode;
                                }
                            }
                            r = r.return;
                        }
                    $t(function () {
                        var r = o,
                            a = Nt(n),
                            l = [];
                        e: {
                            var i = wr.get(e);
                            if (void 0 !== i) {
                                var s = Xt,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === qt(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        s = fn;
                                        break;
                                    case "focusin":
                                        (u = "focus"), (s = rn);
                                        break;
                                    case "focusout":
                                        (u = "blur"), (s = rn);
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        s = rn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        s = tn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        s = nn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        s = mn;
                                        break;
                                    case pr:
                                    case fr:
                                    case hr:
                                        s = an;
                                        break;
                                    case yr:
                                        s = gn;
                                        break;
                                    case "scroll":
                                    case "scrollend":
                                        s = Jt;
                                        break;
                                    case "wheel":
                                        s = bn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        s = on;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        s = hn;
                                        break;
                                    case "toggle":
                                    case "beforetoggle":
                                        s = yn;
                                }
                                var c = !!(4 & t),
                                    d =
                                        !c &&
                                        ("scroll" === e || "scrollend" === e),
                                    p = c
                                        ? null !== i
                                            ? i + "Capture"
                                            : null
                                        : i;
                                c = [];
                                for (var f, h = r; null !== h; ) {
                                    var m = h;
                                    if (
                                        ((f = m.stateNode),
                                        (5 !== (m = m.tag) &&
                                            26 !== m &&
                                            27 !== m) ||
                                            null === f ||
                                            null === p ||
                                            (null != (m = Mt(h, p)) &&
                                                c.push(Oc(h, m, f))),
                                        d)
                                    )
                                        break;
                                    h = h.return;
                                }
                                0 < c.length &&
                                    ((i = new s(i, u, null, n, a)),
                                    l.push({ event: i, listeners: c }));
                            }
                        }
                        if (!(7 & t)) {
                            if (
                                ((s = "mouseout" === e || "pointerout" === e),
                                (!(i =
                                    "mouseover" === e || "pointerover" === e) ||
                                    n === Tt ||
                                    !(u = n.relatedTarget || n.fromElement) ||
                                    (!Ve(u) && !u[Ie])) &&
                                    (s || i) &&
                                    ((i =
                                        a.window === a
                                            ? a
                                            : (i = a.ownerDocument)
                                              ? i.defaultView || i.parentWindow
                                              : window),
                                    s
                                        ? ((s = r),
                                          null !==
                                              (u = (u =
                                                  n.relatedTarget ||
                                                  n.toElement)
                                                  ? Ve(u)
                                                  : null) &&
                                              ((d = M(u)),
                                              (c = u.tag),
                                              u !== d ||
                                                  (5 !== c &&
                                                      27 !== c &&
                                                      6 !== c)) &&
                                              (u = null))
                                        : ((s = null), (u = r)),
                                    s !== u))
                            ) {
                                if (
                                    ((c = tn),
                                    (m = "onMouseLeave"),
                                    (p = "onMouseEnter"),
                                    (h = "mouse"),
                                    ("pointerout" !== e &&
                                        "pointerover" !== e) ||
                                        ((c = hn),
                                        (m = "onPointerLeave"),
                                        (p = "onPointerEnter"),
                                        (h = "pointer")),
                                    (d = null == s ? i : Ke(s)),
                                    (f = null == u ? i : Ke(u)),
                                    ((i = new c(
                                        m,
                                        h + "leave",
                                        s,
                                        n,
                                        a,
                                    )).target = d),
                                    (i.relatedTarget = f),
                                    (m = null),
                                    Ve(a) === r &&
                                        (((c = new c(
                                            p,
                                            h + "enter",
                                            u,
                                            n,
                                            a,
                                        )).target = f),
                                        (c.relatedTarget = d),
                                        (m = c)),
                                    (d = m),
                                    s && u)
                                )
                                    e: {
                                        for (
                                            p = u, h = 0, f = c = s;
                                            f;
                                            f = Mc(f)
                                        )
                                            h++;
                                        for (f = 0, m = p; m; m = Mc(m)) f++;
                                        for (; 0 < h - f; ) (c = Mc(c)), h--;
                                        for (; 0 < f - h; ) (p = Mc(p)), f--;
                                        for (; h--; ) {
                                            if (
                                                c === p ||
                                                (null !== p &&
                                                    c === p.alternate)
                                            )
                                                break e;
                                            (c = Mc(c)), (p = Mc(p));
                                        }
                                        c = null;
                                    }
                                else c = null;
                                null !== s && Dc(l, i, s, c, !1),
                                    null !== u &&
                                        null !== d &&
                                        Dc(l, d, u, c, !0);
                            }
                            if (
                                "select" ===
                                    (s =
                                        (i = r ? Ke(r) : window).nodeName &&
                                        i.nodeName.toLowerCase()) ||
                                ("input" === s && "file" === i.type)
                            )
                                var g = Mn;
                            else if (Nn(i))
                                if (Dn) g = Vn;
                                else {
                                    g = Hn;
                                    var b = qn;
                                }
                            else
                                !(s = i.nodeName) ||
                                "input" !== s.toLowerCase() ||
                                ("checkbox" !== i.type && "radio" !== i.type)
                                    ? r && Ct(r.elementType) && (g = Mn)
                                    : (g = Wn);
                            switch (
                                (g && (g = g(e, r))
                                    ? Rn(l, g, n, a)
                                    : (b && b(e, i, r),
                                      "focusout" === e &&
                                          r &&
                                          "number" === i.type &&
                                          null != r.memoizedProps.value &&
                                          bt(i, "number", i.value)),
                                (b = r ? Ke(r) : window),
                                e)
                            ) {
                                case "focusin":
                                    (Nn(b) || "true" === b.contentEditable) &&
                                        ((nr = b), (rr = r), (ar = null));
                                    break;
                                case "focusout":
                                    ar = rr = nr = null;
                                    break;
                                case "mousedown":
                                    or = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    (or = !1), lr(l, n, a);
                                    break;
                                case "selectionchange":
                                    if (tr) break;
                                case "keydown":
                                case "keyup":
                                    lr(l, n, a);
                            }
                            var y;
                            if (vn)
                                e: {
                                    switch (e) {
                                        case "compositionstart":
                                            var w = "onCompositionStart";
                                            break e;
                                        case "compositionend":
                                            w = "onCompositionEnd";
                                            break e;
                                        case "compositionupdate":
                                            w = "onCompositionUpdate";
                                            break e;
                                    }
                                    w = void 0;
                                }
                            else
                                Pn
                                    ? zn(e, n) && (w = "onCompositionEnd")
                                    : "keydown" === e &&
                                      229 === n.keyCode &&
                                      (w = "onCompositionStart");
                            w &&
                                (Sn &&
                                    "ko" !== n.locale &&
                                    (Pn || "onCompositionStart" !== w
                                        ? "onCompositionEnd" === w &&
                                          Pn &&
                                          (y = Bt())
                                        : ((jt =
                                              "value" in (It = a)
                                                  ? It.value
                                                  : It.textContent),
                                          (Pn = !0))),
                                0 < (b = $c(r, w)).length &&
                                    ((w = new ln(w, e, null, n, a)),
                                    l.push({ event: w, listeners: b }),
                                    (y || null !== (y = _n(n))) &&
                                        (w.data = y))),
                                (y = xn
                                    ? (function (e, t) {
                                          switch (e) {
                                              case "compositionend":
                                                  return _n(t);
                                              case "keypress":
                                                  return 32 !== t.which
                                                      ? null
                                                      : ((Cn = !0), En);
                                              case "textInput":
                                                  return (e = t.data) === En &&
                                                      Cn
                                                      ? null
                                                      : e;
                                              default:
                                                  return null;
                                          }
                                      })(e, n)
                                    : (function (e, t) {
                                          if (Pn)
                                              return "compositionend" === e ||
                                                  (!vn && zn(e, t))
                                                  ? ((e = Bt()),
                                                    (Ut = jt = It = null),
                                                    (Pn = !1),
                                                    e)
                                                  : null;
                                          switch (e) {
                                              case "paste":
                                              default:
                                                  return null;
                                              case "keypress":
                                                  if (
                                                      !(
                                                          t.ctrlKey ||
                                                          t.altKey ||
                                                          t.metaKey
                                                      ) ||
                                                      (t.ctrlKey && t.altKey)
                                                  ) {
                                                      if (
                                                          t.char &&
                                                          1 < t.char.length
                                                      )
                                                          return t.char;
                                                      if (t.which)
                                                          return String.fromCharCode(
                                                              t.which,
                                                          );
                                                  }
                                                  return null;
                                              case "compositionend":
                                                  return Sn && "ko" !== t.locale
                                                      ? null
                                                      : t.data;
                                          }
                                      })(e, n)) &&
                                    0 < (w = $c(r, "onBeforeInput")).length &&
                                    ((b = new ln(
                                        "onBeforeInput",
                                        "beforeinput",
                                        null,
                                        n,
                                        a,
                                    )),
                                    l.push({ event: b, listeners: w }),
                                    (b.data = y)),
                                (function (e, t, n, r, a) {
                                    if (
                                        "submit" === t &&
                                        n &&
                                        n.stateNode === a
                                    ) {
                                        var o = kc((a[Fe] || null).action),
                                            l = r.submitter;
                                        l &&
                                            null !==
                                                (t = (t = l[Fe] || null)
                                                    ? kc(t.formAction)
                                                    : l.getAttribute(
                                                          "formAction",
                                                      )) &&
                                            ((o = t), (l = null));
                                        var i = new Xt(
                                            "action",
                                            "action",
                                            null,
                                            r,
                                            a,
                                        );
                                        e.push({
                                            event: i,
                                            listeners: [
                                                {
                                                    instance: null,
                                                    listener: function () {
                                                        if (
                                                            r.defaultPrevented
                                                        ) {
                                                            if (0 !== fc) {
                                                                var e = l
                                                                    ? xc(a, l)
                                                                    : new FormData(
                                                                          a,
                                                                      );
                                                                cl(
                                                                    n,
                                                                    {
                                                                        pending:
                                                                            !0,
                                                                        data: e,
                                                                        method: a.method,
                                                                        action: o,
                                                                    },
                                                                    null,
                                                                    e,
                                                                );
                                                            }
                                                        } else
                                                            "function" ==
                                                                typeof o &&
                                                                (i.preventDefault(),
                                                                (e = l
                                                                    ? xc(a, l)
                                                                    : new FormData(
                                                                          a,
                                                                      )),
                                                                cl(
                                                                    n,
                                                                    {
                                                                        pending:
                                                                            !0,
                                                                        data: e,
                                                                        method: a.method,
                                                                        action: o,
                                                                    },
                                                                    o,
                                                                    e,
                                                                ));
                                                    },
                                                    currentTarget: a,
                                                },
                                            ],
                                        });
                                    }
                                })(l, e, r, n, a);
                        }
                        _c(l, t);
                    });
                }
                function Oc(e, t, n) {
                    return { instance: e, listener: t, currentTarget: n };
                }
                function $c(e, t) {
                    for (var n = t + "Capture", r = []; null !== e; ) {
                        var a = e,
                            o = a.stateNode;
                        (5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
                            null === o ||
                            (null != (a = Mt(e, n)) && r.unshift(Oc(e, a, o)),
                            null != (a = Mt(e, t)) && r.push(Oc(e, a, o))),
                            (e = e.return);
                    }
                    return r;
                }
                function Mc(e) {
                    if (null === e) return null;
                    do {
                        e = e.return;
                    } while (e && 5 !== e.tag && 27 !== e.tag);
                    return e || null;
                }
                function Dc(e, t, n, r, a) {
                    for (
                        var o = t._reactName, l = [];
                        null !== n && n !== r;

                    ) {
                        var i = n,
                            s = i.alternate,
                            u = i.stateNode;
                        if (((i = i.tag), null !== s && s === r)) break;
                        (5 !== i && 26 !== i && 27 !== i) ||
                            null === u ||
                            ((s = u),
                            a
                                ? null != (u = Mt(n, o)) &&
                                  l.unshift(Oc(n, u, s))
                                : a ||
                                  (null != (u = Mt(n, o)) &&
                                      l.push(Oc(n, u, s)))),
                            (n = n.return);
                    }
                    0 !== l.length && e.push({ event: t, listeners: l });
                }
                var Fc = /\r\n?/g,
                    Ic = /\u0000|\uFFFD/g;
                function jc(e) {
                    return ("string" == typeof e ? e : "" + e)
                        .replace(Fc, "\n")
                        .replace(Ic, "");
                }
                function Uc(e, t) {
                    return (t = jc(t)), jc(e) === t;
                }
                function Bc() {}
                function qc(e, t, n, r, a, o) {
                    switch (n) {
                        case "children":
                            "string" == typeof r
                                ? "body" === t ||
                                  ("textarea" === t && "" === r) ||
                                  kt(e, r)
                                : ("number" == typeof r ||
                                      "bigint" == typeof r) &&
                                  "body" !== t &&
                                  kt(e, "" + r);
                            break;
                        case "className":
                            lt(e, "class", r);
                            break;
                        case "tabIndex":
                            lt(e, "tabindex", r);
                            break;
                        case "dir":
                        case "role":
                        case "viewBox":
                        case "width":
                        case "height":
                            lt(e, n, r);
                            break;
                        case "style":
                            Et(e, r, o);
                            break;
                        case "data":
                            if ("object" !== t) {
                                lt(e, "data", r);
                                break;
                            }
                        case "src":
                        case "href":
                            if ("" === r && ("a" !== t || "href" !== n)) {
                                e.removeAttribute(n);
                                break;
                            }
                            if (
                                null == r ||
                                "function" == typeof r ||
                                "symbol" == typeof r ||
                                "boolean" == typeof r
                            ) {
                                e.removeAttribute(n);
                                break;
                            }
                            (r = Pt("" + r)), e.setAttribute(n, r);
                            break;
                        case "action":
                        case "formAction":
                            if ("function" == typeof r) {
                                e.setAttribute(
                                    n,
                                    "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                                );
                                break;
                            }
                            if (
                                ("function" == typeof o &&
                                    ("formAction" === n
                                        ? ("input" !== t &&
                                              qc(e, t, "name", a.name, a, null),
                                          qc(
                                              e,
                                              t,
                                              "formEncType",
                                              a.formEncType,
                                              a,
                                              null,
                                          ),
                                          qc(
                                              e,
                                              t,
                                              "formMethod",
                                              a.formMethod,
                                              a,
                                              null,
                                          ),
                                          qc(
                                              e,
                                              t,
                                              "formTarget",
                                              a.formTarget,
                                              a,
                                              null,
                                          ))
                                        : (qc(
                                              e,
                                              t,
                                              "encType",
                                              a.encType,
                                              a,
                                              null,
                                          ),
                                          qc(e, t, "method", a.method, a, null),
                                          qc(
                                              e,
                                              t,
                                              "target",
                                              a.target,
                                              a,
                                              null,
                                          ))),
                                null == r ||
                                    "symbol" == typeof r ||
                                    "boolean" == typeof r)
                            ) {
                                e.removeAttribute(n);
                                break;
                            }
                            (r = Pt("" + r)), e.setAttribute(n, r);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Bc);
                            break;
                        case "onScroll":
                            null != r && Pc("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Pc("scrollend", e);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r))
                                    throw Error(l(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(l(60));
                                    e.innerHTML = n;
                                }
                            }
                            break;
                        case "multiple":
                            e.multiple =
                                r &&
                                "function" != typeof r &&
                                "symbol" != typeof r;
                            break;
                        case "muted":
                            e.muted =
                                r &&
                                "function" != typeof r &&
                                "symbol" != typeof r;
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "defaultValue":
                        case "defaultChecked":
                        case "innerHTML":
                        case "ref":
                        case "autoFocus":
                            break;
                        case "xlinkHref":
                            if (
                                null == r ||
                                "function" == typeof r ||
                                "boolean" == typeof r ||
                                "symbol" == typeof r
                            ) {
                                e.removeAttribute("xlink:href");
                                break;
                            }
                            (n = Pt("" + r)),
                                e.setAttributeNS(
                                    "http://www.w3.org/1999/xlink",
                                    "xlink:href",
                                    n,
                                );
                            break;
                        case "contentEditable":
                        case "spellCheck":
                        case "draggable":
                        case "value":
                        case "autoReverse":
                        case "externalResourcesRequired":
                        case "focusable":
                        case "preserveAlpha":
                            null != r &&
                            "function" != typeof r &&
                            "symbol" != typeof r
                                ? e.setAttribute(n, "" + r)
                                : e.removeAttribute(n);
                            break;
                        case "inert":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                            r && "function" != typeof r && "symbol" != typeof r
                                ? e.setAttribute(n, "")
                                : e.removeAttribute(n);
                            break;
                        case "capture":
                        case "download":
                            !0 === r
                                ? e.setAttribute(n, "")
                                : !1 !== r &&
                                    null != r &&
                                    "function" != typeof r &&
                                    "symbol" != typeof r
                                  ? e.setAttribute(n, r)
                                  : e.removeAttribute(n);
                            break;
                        case "cols":
                        case "rows":
                        case "size":
                        case "span":
                            null != r &&
                            "function" != typeof r &&
                            "symbol" != typeof r &&
                            !isNaN(r) &&
                            1 <= r
                                ? e.setAttribute(n, r)
                                : e.removeAttribute(n);
                            break;
                        case "rowSpan":
                        case "start":
                            null == r ||
                            "function" == typeof r ||
                            "symbol" == typeof r ||
                            isNaN(r)
                                ? e.removeAttribute(n)
                                : e.setAttribute(n, r);
                            break;
                        case "popover":
                            Pc("beforetoggle", e),
                                Pc("toggle", e),
                                ot(e, "popover", r);
                            break;
                        case "xlinkActuate":
                            it(
                                e,
                                "http://www.w3.org/1999/xlink",
                                "xlink:actuate",
                                r,
                            );
                            break;
                        case "xlinkArcrole":
                            it(
                                e,
                                "http://www.w3.org/1999/xlink",
                                "xlink:arcrole",
                                r,
                            );
                            break;
                        case "xlinkRole":
                            it(
                                e,
                                "http://www.w3.org/1999/xlink",
                                "xlink:role",
                                r,
                            );
                            break;
                        case "xlinkShow":
                            it(
                                e,
                                "http://www.w3.org/1999/xlink",
                                "xlink:show",
                                r,
                            );
                            break;
                        case "xlinkTitle":
                            it(
                                e,
                                "http://www.w3.org/1999/xlink",
                                "xlink:title",
                                r,
                            );
                            break;
                        case "xlinkType":
                            it(
                                e,
                                "http://www.w3.org/1999/xlink",
                                "xlink:type",
                                r,
                            );
                            break;
                        case "xmlBase":
                            it(
                                e,
                                "http://www.w3.org/XML/1998/namespace",
                                "xml:base",
                                r,
                            );
                            break;
                        case "xmlLang":
                            it(
                                e,
                                "http://www.w3.org/XML/1998/namespace",
                                "xml:lang",
                                r,
                            );
                            break;
                        case "xmlSpace":
                            it(
                                e,
                                "http://www.w3.org/XML/1998/namespace",
                                "xml:space",
                                r,
                            );
                            break;
                        case "is":
                            ot(e, "is", r);
                            break;
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            (!(2 < n.length) ||
                                ("o" !== n[0] && "O" !== n[0]) ||
                                ("n" !== n[1] && "N" !== n[1])) &&
                                ot(e, (n = zt.get(n) || n), r);
                    }
                }
                function Hc(e, t, n, r, a, o) {
                    switch (n) {
                        case "style":
                            Et(e, r, o);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r))
                                    throw Error(l(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(l(60));
                                    e.innerHTML = n;
                                }
                            }
                            break;
                        case "children":
                            "string" == typeof r
                                ? kt(e, r)
                                : ("number" == typeof r ||
                                      "bigint" == typeof r) &&
                                  kt(e, "" + r);
                            break;
                        case "onScroll":
                            null != r && Pc("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Pc("scrollend", e);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Bc);
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "innerHTML":
                        case "ref":
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            Ze.hasOwnProperty(n) ||
                                ("o" !== n[0] ||
                                "n" !== n[1] ||
                                ((a = n.endsWith("Capture")),
                                (t = n.slice(2, a ? n.length - 7 : void 0)),
                                "function" ==
                                    typeof (o =
                                        null != (o = e[Fe] || null)
                                            ? o[n]
                                            : null) &&
                                    e.removeEventListener(t, o, a),
                                "function" != typeof r)
                                    ? n in e
                                        ? (e[n] = r)
                                        : !0 === r
                                          ? e.setAttribute(n, "")
                                          : ot(e, n, r)
                                    : ("function" != typeof o &&
                                          null !== o &&
                                          (n in e
                                              ? (e[n] = null)
                                              : e.hasAttribute(n) &&
                                                e.removeAttribute(n)),
                                      e.addEventListener(t, r, a)));
                    }
                }
                function Wc(e, t, n) {
                    switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "img":
                            Pc("error", e), Pc("load", e);
                            var r,
                                a = !1,
                                o = !1;
                            for (r in n)
                                if (n.hasOwnProperty(r)) {
                                    var i = n[r];
                                    if (null != i)
                                        switch (r) {
                                            case "src":
                                                a = !0;
                                                break;
                                            case "srcSet":
                                                o = !0;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                throw Error(l(137, t));
                                            default:
                                                qc(e, t, r, i, n, null);
                                        }
                                }
                            return (
                                o && qc(e, t, "srcSet", n.srcSet, n, null),
                                void (a && qc(e, t, "src", n.src, n, null))
                            );
                        case "input":
                            Pc("invalid", e);
                            var s = (r = i = o = null),
                                u = null,
                                c = null;
                            for (a in n)
                                if (n.hasOwnProperty(a)) {
                                    var d = n[a];
                                    if (null != d)
                                        switch (a) {
                                            case "name":
                                                o = d;
                                                break;
                                            case "type":
                                                i = d;
                                                break;
                                            case "checked":
                                                u = d;
                                                break;
                                            case "defaultChecked":
                                                c = d;
                                                break;
                                            case "value":
                                                r = d;
                                                break;
                                            case "defaultValue":
                                                s = d;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != d)
                                                    throw Error(l(137, t));
                                                break;
                                            default:
                                                qc(e, t, a, d, n, null);
                                        }
                                }
                            return gt(e, r, s, u, c, i, o, !1), void ct(e);
                        case "select":
                            for (o in (Pc("invalid", e), (a = i = r = null), n))
                                if (n.hasOwnProperty(o) && null != (s = n[o]))
                                    switch (o) {
                                        case "value":
                                            r = s;
                                            break;
                                        case "defaultValue":
                                            i = s;
                                            break;
                                        case "multiple":
                                            a = s;
                                        default:
                                            qc(e, t, o, s, n, null);
                                    }
                            return (
                                (t = r),
                                (n = i),
                                (e.multiple = !!a),
                                void (null != t
                                    ? yt(e, !!a, t, !1)
                                    : null != n && yt(e, !!a, n, !0))
                            );
                        case "textarea":
                            for (i in (Pc("invalid", e), (r = o = a = null), n))
                                if (n.hasOwnProperty(i) && null != (s = n[i]))
                                    switch (i) {
                                        case "value":
                                            a = s;
                                            break;
                                        case "defaultValue":
                                            o = s;
                                            break;
                                        case "children":
                                            r = s;
                                            break;
                                        case "dangerouslySetInnerHTML":
                                            if (null != s) throw Error(l(91));
                                            break;
                                        default:
                                            qc(e, t, i, s, n, null);
                                    }
                            return vt(e, a, o, r), void ct(e);
                        case "option":
                            for (u in n)
                                n.hasOwnProperty(u) &&
                                    null != (a = n[u]) &&
                                    ("selected" === u
                                        ? (e.selected =
                                              a &&
                                              "function" != typeof a &&
                                              "symbol" != typeof a)
                                        : qc(e, t, u, a, n, null));
                            return;
                        case "dialog":
                            Pc("cancel", e), Pc("close", e);
                            break;
                        case "iframe":
                        case "object":
                            Pc("load", e);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Cc.length; a++) Pc(Cc[a], e);
                            break;
                        case "image":
                            Pc("error", e), Pc("load", e);
                            break;
                        case "details":
                            Pc("toggle", e);
                            break;
                        case "embed":
                        case "source":
                        case "link":
                            Pc("error", e), Pc("load", e);
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (c in n)
                                if (n.hasOwnProperty(c) && null != (a = n[c]))
                                    switch (c) {
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            throw Error(l(137, t));
                                        default:
                                            qc(e, t, c, a, n, null);
                                    }
                            return;
                        default:
                            if (Ct(t)) {
                                for (d in n)
                                    n.hasOwnProperty(d) &&
                                        void 0 !== (a = n[d]) &&
                                        Hc(e, t, d, a, n, void 0);
                                return;
                            }
                    }
                    for (s in n)
                        n.hasOwnProperty(s) &&
                            null != (a = n[s]) &&
                            qc(e, t, s, a, n, null);
                }
                var Vc = null,
                    Qc = null;
                function Kc(e) {
                    return 9 === e.nodeType ? e : e.ownerDocument;
                }
                function Yc(e) {
                    switch (e) {
                        case "http://www.w3.org/2000/svg":
                            return 1;
                        case "http://www.w3.org/1998/Math/MathML":
                            return 2;
                        default:
                            return 0;
                    }
                }
                function Gc(e, t) {
                    if (0 === e)
                        switch (t) {
                            case "svg":
                                return 1;
                            case "math":
                                return 2;
                            default:
                                return 0;
                        }
                    return 1 === e && "foreignObject" === t ? 0 : e;
                }
                function Xc(e, t) {
                    return (
                        "textarea" === e ||
                        "noscript" === e ||
                        "string" == typeof t.children ||
                        "number" == typeof t.children ||
                        "bigint" == typeof t.children ||
                        ("object" == typeof t.dangerouslySetInnerHTML &&
                            null !== t.dangerouslySetInnerHTML &&
                            null != t.dangerouslySetInnerHTML.__html)
                    );
                }
                var Zc = null,
                    Jc = "function" == typeof setTimeout ? setTimeout : void 0,
                    ed =
                        "function" == typeof clearTimeout
                            ? clearTimeout
                            : void 0,
                    td = "function" == typeof Promise ? Promise : void 0,
                    nd =
                        "function" == typeof queueMicrotask
                            ? queueMicrotask
                            : void 0 !== td
                              ? function (e) {
                                    return td.resolve(null).then(e).catch(rd);
                                }
                              : Jc;
                function rd(e) {
                    setTimeout(function () {
                        throw e;
                    });
                }
                function ad(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if ((e.removeChild(n), a && 8 === a.nodeType))
                            if ("/$" === (n = a.data)) {
                                if (0 === r)
                                    return e.removeChild(a), void pp(t);
                                r--;
                            } else
                                ("$" !== n && "$?" !== n && "$!" !== n) || r++;
                        n = a;
                    } while (n);
                    pp(t);
                }
                function od(e) {
                    var t = e.firstChild;
                    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
                        var n = t;
                        switch (((t = t.nextSibling), n.nodeName)) {
                            case "HTML":
                            case "HEAD":
                            case "BODY":
                                od(n), We(n);
                                continue;
                            case "SCRIPT":
                            case "STYLE":
                                continue;
                            case "LINK":
                                if ("stylesheet" === n.rel.toLowerCase())
                                    continue;
                        }
                        e.removeChild(n);
                    }
                }
                function ld(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if (
                                "$" === (t = e.data) ||
                                "$!" === t ||
                                "$?" === t ||
                                "F!" === t ||
                                "F" === t
                            )
                                break;
                            if ("/$" === t) return null;
                        }
                    }
                    return e;
                }
                function id(e) {
                    e = e.previousSibling;
                    for (var t = 0; e; ) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--;
                            } else "/$" === n && t++;
                        }
                        e = e.previousSibling;
                    }
                    return null;
                }
                function sd(e, t, n) {
                    switch (((t = Kc(n)), e)) {
                        case "html":
                            if (!(e = t.documentElement)) throw Error(l(452));
                            return e;
                        case "head":
                            if (!(e = t.head)) throw Error(l(453));
                            return e;
                        case "body":
                            if (!(e = t.body)) throw Error(l(454));
                            return e;
                        default:
                            throw Error(l(451));
                    }
                }
                var ud = new Map(),
                    cd = new Set();
                function dd(e) {
                    return "function" == typeof e.getRootNode
                        ? e.getRootNode()
                        : e.ownerDocument;
                }
                var pd = U.d;
                U.d = {
                    f: function () {
                        var e = pd.f(),
                            t = Du();
                        return e || t;
                    },
                    r: function (e) {
                        var t = Qe(e);
                        null !== t && 5 === t.tag && "form" === t.type
                            ? pl(t)
                            : pd.r(e);
                    },
                    D: function (e) {
                        pd.D(e), hd("dns-prefetch", e, null);
                    },
                    C: function (e, t) {
                        pd.C(e, t), hd("preconnect", e, t);
                    },
                    L: function (e, t, n) {
                        pd.L(e, t, n);
                        var r = fd;
                        if (r && e && t) {
                            var a = 'link[rel="preload"][as="' + ht(t) + '"]';
                            "image" === t && n && n.imageSrcSet
                                ? ((a +=
                                      '[imagesrcset="' +
                                      ht(n.imageSrcSet) +
                                      '"]'),
                                  "string" == typeof n.imageSizes &&
                                      (a +=
                                          '[imagesizes="' +
                                          ht(n.imageSizes) +
                                          '"]'))
                                : (a += '[href="' + ht(e) + '"]');
                            var o = a;
                            switch (t) {
                                case "style":
                                    o = gd(e);
                                    break;
                                case "script":
                                    o = wd(e);
                            }
                            ud.has(o) ||
                                ((e = N(
                                    {
                                        rel: "preload",
                                        href:
                                            "image" === t && n && n.imageSrcSet
                                                ? void 0
                                                : e,
                                        as: t,
                                    },
                                    n,
                                )),
                                ud.set(o, e),
                                null !== r.querySelector(a) ||
                                    ("style" === t && r.querySelector(bd(o))) ||
                                    ("script" === t &&
                                        r.querySelector(vd(o))) ||
                                    (Wc(
                                        (t = r.createElement("link")),
                                        "link",
                                        e,
                                    ),
                                    Ge(t),
                                    r.head.appendChild(t)));
                        }
                    },
                    m: function (e, t) {
                        pd.m(e, t);
                        var n = fd;
                        if (n && e) {
                            var r =
                                    t && "string" == typeof t.as
                                        ? t.as
                                        : "script",
                                a =
                                    'link[rel="modulepreload"][as="' +
                                    ht(r) +
                                    '"][href="' +
                                    ht(e) +
                                    '"]',
                                o = a;
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    o = wd(e);
                            }
                            if (
                                !ud.has(o) &&
                                ((e = N({ rel: "modulepreload", href: e }, t)),
                                ud.set(o, e),
                                null === n.querySelector(a))
                            ) {
                                switch (r) {
                                    case "audioworklet":
                                    case "paintworklet":
                                    case "serviceworker":
                                    case "sharedworker":
                                    case "worker":
                                    case "script":
                                        if (n.querySelector(vd(o))) return;
                                }
                                Wc((r = n.createElement("link")), "link", e),
                                    Ge(r),
                                    n.head.appendChild(r);
                            }
                        }
                    },
                    X: function (e, t) {
                        pd.X(e, t);
                        var n = fd;
                        if (n && e) {
                            var r = Ye(n).hoistableScripts,
                                a = wd(e),
                                o = r.get(a);
                            o ||
                                ((o = n.querySelector(vd(a))) ||
                                    ((e = N({ src: e, async: !0 }, t)),
                                    (t = ud.get(a)) && Ed(e, t),
                                    Ge((o = n.createElement("script"))),
                                    Wc(o, "link", e),
                                    n.head.appendChild(o)),
                                (o = {
                                    type: "script",
                                    instance: o,
                                    count: 1,
                                    state: null,
                                }),
                                r.set(a, o));
                        }
                    },
                    S: function (e, t, n) {
                        pd.S(e, t, n);
                        var r = fd;
                        if (r && e) {
                            var a = Ye(r).hoistableStyles,
                                o = gd(e);
                            t = t || "default";
                            var l = a.get(o);
                            if (!l) {
                                var i = { loading: 0, preload: null };
                                if ((l = r.querySelector(bd(o)))) i.loading = 5;
                                else {
                                    (e = N(
                                        {
                                            rel: "stylesheet",
                                            href: e,
                                            "data-precedence": t,
                                        },
                                        n,
                                    )),
                                        (n = ud.get(o)) && Sd(e, n);
                                    var s = (l = r.createElement("link"));
                                    Ge(s),
                                        Wc(s, "link", e),
                                        (s._p = new Promise(function (e, t) {
                                            (s.onload = e), (s.onerror = t);
                                        })),
                                        s.addEventListener("load", function () {
                                            i.loading |= 1;
                                        }),
                                        s.addEventListener(
                                            "error",
                                            function () {
                                                i.loading |= 2;
                                            },
                                        ),
                                        (i.loading |= 4),
                                        xd(l, t, r);
                                }
                                (l = {
                                    type: "stylesheet",
                                    instance: l,
                                    count: 1,
                                    state: i,
                                }),
                                    a.set(o, l);
                            }
                        }
                    },
                    M: function (e, t) {
                        pd.M(e, t);
                        var n = fd;
                        if (n && e) {
                            var r = Ye(n).hoistableScripts,
                                a = wd(e),
                                o = r.get(a);
                            o ||
                                ((o = n.querySelector(vd(a))) ||
                                    ((e = N(
                                        { src: e, async: !0, type: "module" },
                                        t,
                                    )),
                                    (t = ud.get(a)) && Ed(e, t),
                                    Ge((o = n.createElement("script"))),
                                    Wc(o, "link", e),
                                    n.head.appendChild(o)),
                                (o = {
                                    type: "script",
                                    instance: o,
                                    count: 1,
                                    state: null,
                                }),
                                r.set(a, o));
                        }
                    },
                };
                var fd = "undefined" == typeof document ? null : document;
                function hd(e, t, n) {
                    var r = fd;
                    if (r && "string" == typeof t && t) {
                        var a = ht(t);
                        (a = 'link[rel="' + e + '"][href="' + a + '"]'),
                            "string" == typeof n &&
                                (a += '[crossorigin="' + n + '"]'),
                            cd.has(a) ||
                                (cd.add(a),
                                (e = { rel: e, crossOrigin: n, href: t }),
                                null === r.querySelector(a) &&
                                    (Wc(
                                        (t = r.createElement("link")),
                                        "link",
                                        e,
                                    ),
                                    Ge(t),
                                    r.head.appendChild(t)));
                    }
                }
                function md(e, t, n, r) {
                    var a,
                        o,
                        i,
                        s,
                        u = (u = G.current) ? dd(u) : null;
                    if (!u) throw Error(l(446));
                    switch (e) {
                        case "meta":
                        case "title":
                            return null;
                        case "style":
                            return "string" == typeof n.precedence &&
                                "string" == typeof n.href
                                ? ((t = gd(n.href)),
                                  (r = (n = Ye(u).hoistableStyles).get(t)) ||
                                      ((r = {
                                          type: "style",
                                          instance: null,
                                          count: 0,
                                          state: null,
                                      }),
                                      n.set(t, r)),
                                  r)
                                : {
                                      type: "void",
                                      instance: null,
                                      count: 0,
                                      state: null,
                                  };
                        case "link":
                            if (
                                "stylesheet" === n.rel &&
                                "string" == typeof n.href &&
                                "string" == typeof n.precedence
                            ) {
                                e = gd(n.href);
                                var c = Ye(u).hoistableStyles,
                                    d = c.get(e);
                                if (
                                    (d ||
                                        ((u = u.ownerDocument || u),
                                        (d = {
                                            type: "stylesheet",
                                            instance: null,
                                            count: 0,
                                            state: {
                                                loading: 0,
                                                preload: null,
                                            },
                                        }),
                                        c.set(e, d),
                                        (c = u.querySelector(bd(e))) &&
                                            !c._p &&
                                            ((d.instance = c),
                                            (d.state.loading = 5)),
                                        ud.has(e) ||
                                            ((n = {
                                                rel: "preload",
                                                as: "style",
                                                href: n.href,
                                                crossOrigin: n.crossOrigin,
                                                integrity: n.integrity,
                                                media: n.media,
                                                hrefLang: n.hrefLang,
                                                referrerPolicy:
                                                    n.referrerPolicy,
                                            }),
                                            ud.set(e, n),
                                            c ||
                                                ((a = u),
                                                (o = e),
                                                (i = n),
                                                (s = d.state),
                                                a.querySelector(
                                                    'link[rel="preload"][as="style"][' +
                                                        o +
                                                        "]",
                                                )
                                                    ? (s.loading = 1)
                                                    : ((o =
                                                          a.createElement(
                                                              "link",
                                                          )),
                                                      (s.preload = o),
                                                      o.addEventListener(
                                                          "load",
                                                          function () {
                                                              return (s.loading |= 1);
                                                          },
                                                      ),
                                                      o.addEventListener(
                                                          "error",
                                                          function () {
                                                              return (s.loading |= 2);
                                                          },
                                                      ),
                                                      Wc(o, "link", i),
                                                      Ge(o),
                                                      a.head.appendChild(o))))),
                                    t && null === r)
                                )
                                    throw Error(l(528, ""));
                                return d;
                            }
                            if (t && null !== r) throw Error(l(529, ""));
                            return null;
                        case "script":
                            return (
                                (t = n.async),
                                "string" == typeof (n = n.src) &&
                                t &&
                                "function" != typeof t &&
                                "symbol" != typeof t
                                    ? ((t = wd(n)),
                                      (r = (n = Ye(u).hoistableScripts).get(
                                          t,
                                      )) ||
                                          ((r = {
                                              type: "script",
                                              instance: null,
                                              count: 0,
                                              state: null,
                                          }),
                                          n.set(t, r)),
                                      r)
                                    : {
                                          type: "void",
                                          instance: null,
                                          count: 0,
                                          state: null,
                                      }
                            );
                        default:
                            throw Error(l(444, e));
                    }
                }
                function gd(e) {
                    return 'href="' + ht(e) + '"';
                }
                function bd(e) {
                    return 'link[rel="stylesheet"][' + e + "]";
                }
                function yd(e) {
                    return N({}, e, {
                        "data-precedence": e.precedence,
                        precedence: null,
                    });
                }
                function wd(e) {
                    return '[src="' + ht(e) + '"]';
                }
                function vd(e) {
                    return "script[async]" + e;
                }
                function kd(e, t, n) {
                    if ((t.count++, null === t.instance))
                        switch (t.type) {
                            case "style":
                                var r = e.querySelector(
                                    'style[data-href~="' + ht(n.href) + '"]',
                                );
                                if (r) return (t.instance = r), Ge(r), r;
                                var a = N({}, n, {
                                    "data-href": n.href,
                                    "data-precedence": n.precedence,
                                    href: null,
                                    precedence: null,
                                });
                                return (
                                    Ge(
                                        (r = (
                                            e.ownerDocument || e
                                        ).createElement("style")),
                                    ),
                                    Wc(r, "style", a),
                                    xd(r, n.precedence, e),
                                    (t.instance = r)
                                );
                            case "stylesheet":
                                a = gd(n.href);
                                var o = e.querySelector(bd(a));
                                if (o)
                                    return (
                                        (t.state.loading |= 4),
                                        (t.instance = o),
                                        Ge(o),
                                        o
                                    );
                                (r = yd(n)),
                                    (a = ud.get(a)) && Sd(r, a),
                                    Ge(
                                        (o = (
                                            e.ownerDocument || e
                                        ).createElement("link")),
                                    );
                                var i = o;
                                return (
                                    (i._p = new Promise(function (e, t) {
                                        (i.onload = e), (i.onerror = t);
                                    })),
                                    Wc(o, "link", r),
                                    (t.state.loading |= 4),
                                    xd(o, n.precedence, e),
                                    (t.instance = o)
                                );
                            case "script":
                                return (
                                    (o = wd(n.src)),
                                    (a = e.querySelector(vd(o)))
                                        ? ((t.instance = a), Ge(a), a)
                                        : ((r = n),
                                          (a = ud.get(o)) &&
                                              Ed((r = N({}, n)), a),
                                          Ge(
                                              (a = (e =
                                                  e.ownerDocument ||
                                                  e).createElement("script")),
                                          ),
                                          Wc(a, "link", r),
                                          e.head.appendChild(a),
                                          (t.instance = a))
                                );
                            case "void":
                                return null;
                            default:
                                throw Error(l(443, t.type));
                        }
                    else
                        "stylesheet" === t.type &&
                            !(4 & t.state.loading) &&
                            ((r = t.instance),
                            (t.state.loading |= 4),
                            xd(r, n.precedence, e));
                    return t.instance;
                }
                function xd(e, t, n) {
                    for (
                        var r = n.querySelectorAll(
                                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
                            ),
                            a = r.length ? r[r.length - 1] : null,
                            o = a,
                            l = 0;
                        l < r.length;
                        l++
                    ) {
                        var i = r[l];
                        if (i.dataset.precedence === t) o = i;
                        else if (o !== a) break;
                    }
                    o
                        ? o.parentNode.insertBefore(e, o.nextSibling)
                        : (t = 9 === n.nodeType ? n.head : n).insertBefore(
                              e,
                              t.firstChild,
                          );
                }
                function Sd(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
                        null == e.referrerPolicy &&
                            (e.referrerPolicy = t.referrerPolicy),
                        null == e.title && (e.title = t.title);
                }
                function Ed(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
                        null == e.referrerPolicy &&
                            (e.referrerPolicy = t.referrerPolicy),
                        null == e.integrity && (e.integrity = t.integrity);
                }
                var Cd = null;
                function zd(e, t, n) {
                    if (null === Cd) {
                        var r = new Map(),
                            a = (Cd = new Map());
                        a.set(n, r);
                    } else
                        (r = (a = Cd).get(n)) || ((r = new Map()), a.set(n, r));
                    if (r.has(e)) return r;
                    for (
                        r.set(e, null), n = n.getElementsByTagName(e), a = 0;
                        a < n.length;
                        a++
                    ) {
                        var o = n[a];
                        if (
                            !(
                                o[He] ||
                                o[De] ||
                                ("link" === e &&
                                    "stylesheet" === o.getAttribute("rel"))
                            ) &&
                            "http://www.w3.org/2000/svg" !== o.namespaceURI
                        ) {
                            var l = o.getAttribute(t) || "";
                            l = e + l;
                            var i = r.get(l);
                            i ? i.push(o) : r.set(l, [o]);
                        }
                    }
                    return r;
                }
                function _d(e, t, n) {
                    (e = e.ownerDocument || e).head.insertBefore(
                        n,
                        "title" === t ? e.querySelector("head > title") : null,
                    );
                }
                function Pd(e) {
                    return !!("stylesheet" !== e.type || 3 & e.state.loading);
                }
                var Td = null;
                function Nd() {}
                function Rd() {
                    if ((this.count--, 0 === this.count))
                        if (this.stylesheets) Ad(this, this.stylesheets);
                        else if (this.unsuspend) {
                            var e = this.unsuspend;
                            (this.unsuspend = null), e();
                        }
                }
                var Ld = null;
                function Ad(e, t) {
                    (e.stylesheets = null),
                        null !== e.unsuspend &&
                            (e.count++,
                            (Ld = new Map()),
                            t.forEach(Od, e),
                            (Ld = null),
                            Rd.call(e));
                }
                function Od(e, t) {
                    if (!(4 & t.state.loading)) {
                        var n = Ld.get(e);
                        if (n) var r = n.get(null);
                        else {
                            (n = new Map()), Ld.set(e, n);
                            for (
                                var a = e.querySelectorAll(
                                        "link[data-precedence],style[data-precedence]",
                                    ),
                                    o = 0;
                                o < a.length;
                                o++
                            ) {
                                var l = a[o];
                                ("LINK" !== l.nodeName &&
                                    "not all" === l.getAttribute("media")) ||
                                    (n.set(l.dataset.precedence, l), (r = l));
                            }
                            r && n.set(null, r);
                        }
                        (l = (a = t.instance).getAttribute("data-precedence")),
                            (o = n.get(l) || r) === r && n.set(null, a),
                            n.set(l, a),
                            this.count++,
                            (r = Rd.bind(this)),
                            a.addEventListener("load", r),
                            a.addEventListener("error", r),
                            o
                                ? o.parentNode.insertBefore(a, o.nextSibling)
                                : (e =
                                      9 === e.nodeType
                                          ? e.head
                                          : e).insertBefore(a, e.firstChild),
                            (t.state.loading |= 4);
                    }
                }
                var $d = {
                    $$typeof: m,
                    Provider: null,
                    Consumer: null,
                    _currentValue: B,
                    _currentValue2: B,
                    _threadCount: 0,
                };
                function Md(e, t, n, r, a, o, l, i) {
                    (this.tag = 1),
                        (this.containerInfo = e),
                        (this.finishedWork =
                            this.pingCache =
                            this.current =
                            this.pendingChildren =
                                null),
                        (this.timeoutHandle = -1),
                        (this.callbackNode =
                            this.next =
                            this.pendingContext =
                            this.context =
                            this.cancelPendingCommit =
                                null),
                        (this.callbackPriority = 0),
                        (this.expirationTimes = Ne(-1)),
                        (this.entangledLanes =
                            this.shellSuspendCounter =
                            this.errorRecoveryDisabledLanes =
                            this.finishedLanes =
                            this.expiredLanes =
                            this.warmLanes =
                            this.pingedLanes =
                            this.suspendedLanes =
                            this.pendingLanes =
                                0),
                        (this.entanglements = Ne(0)),
                        (this.hiddenUpdates = Ne(null)),
                        (this.identifierPrefix = r),
                        (this.onUncaughtError = a),
                        (this.onCaughtError = o),
                        (this.onRecoverableError = l),
                        (this.pooledCache = null),
                        (this.pooledCacheLanes = 0),
                        (this.formState = i),
                        (this.incompleteTransitions = new Map());
                }
                function Dd(e, t, n, r, a, o) {
                    (a = (function (e) {
                        return e ? (e = Rr) : Rr;
                    })(a)),
                        null === r.context
                            ? (r.context = a)
                            : (r.pendingContext = a),
                        ((r = Ni(t)).payload = { element: n }),
                        null !== (o = void 0 === o ? null : o) &&
                            (r.callback = o),
                        null !== (n = Ri(e, r, t)) &&
                            (Ru(n, 0, t), Li(n, e, t));
                }
                function Fd(e, t) {
                    if (
                        null !== (e = e.memoizedState) &&
                        null !== e.dehydrated
                    ) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t;
                    }
                }
                function Id(e, t) {
                    Fd(e, t), (e = e.alternate) && Fd(e, t);
                }
                function jd(e) {
                    if (13 === e.tag) {
                        var t = Pr(e, 67108864);
                        null !== t && Ru(t, 0, 67108864), Id(e, 67108864);
                    }
                }
                var Ud = !0;
                function Bd(e, t, n, r) {
                    var a = T.T;
                    T.T = null;
                    var o = U.p;
                    try {
                        (U.p = 2), Hd(e, t, n, r);
                    } finally {
                        (U.p = o), (T.T = a);
                    }
                }
                function qd(e, t, n, r) {
                    var a = T.T;
                    T.T = null;
                    var o = U.p;
                    try {
                        (U.p = 8), Hd(e, t, n, r);
                    } finally {
                        (U.p = o), (T.T = a);
                    }
                }
                function Hd(e, t, n, r) {
                    if (Ud) {
                        var a = Wd(r);
                        if (null === a) Ac(e, t, r, Vd, n), rp(e, r);
                        else if (
                            (function (e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return (Gd = ap(Gd, e, t, n, r, a)), !0;
                                    case "dragenter":
                                        return (Xd = ap(Xd, e, t, n, r, a)), !0;
                                    case "mouseover":
                                        return (Zd = ap(Zd, e, t, n, r, a)), !0;
                                    case "pointerover":
                                        var o = a.pointerId;
                                        return (
                                            Jd.set(
                                                o,
                                                ap(
                                                    Jd.get(o) || null,
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                    a,
                                                ),
                                            ),
                                            !0
                                        );
                                    case "gotpointercapture":
                                        return (
                                            (o = a.pointerId),
                                            ep.set(
                                                o,
                                                ap(
                                                    ep.get(o) || null,
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                    a,
                                                ),
                                            ),
                                            !0
                                        );
                                }
                                return !1;
                            })(a, e, t, n, r)
                        )
                            r.stopPropagation();
                        else if ((rp(e, r), 4 & t && -1 < np.indexOf(e))) {
                            for (; null !== a; ) {
                                var o = Qe(a);
                                if (null !== o)
                                    switch (o.tag) {
                                        case 3:
                                            if (
                                                (o = o.stateNode).current
                                                    .memoizedState.isDehydrated
                                            ) {
                                                var l = Ee(o.pendingLanes);
                                                if (0 !== l) {
                                                    var i = o;
                                                    for (
                                                        i.pendingLanes |= 2,
                                                            i.entangledLanes |= 2;
                                                        l;

                                                    ) {
                                                        var s =
                                                            1 << (31 - we(l));
                                                        (i.entanglements[1] |=
                                                            s),
                                                            (l &= ~s);
                                                    }
                                                    hc(o),
                                                        !(6 & Js) &&
                                                            ((wu = ie() + 500),
                                                            mc(0, !1));
                                                }
                                            }
                                            break;
                                        case 13:
                                            null !== (i = Pr(o, 2)) &&
                                                Ru(i, 0, 2),
                                                Du(),
                                                Id(o, 2);
                                    }
                                if (
                                    (null === (o = Wd(r)) && Ac(e, t, r, Vd, n),
                                    o === a)
                                )
                                    break;
                                a = o;
                            }
                            null !== a && r.stopPropagation();
                        } else Ac(e, t, r, null, n);
                    }
                }
                function Wd(e) {
                    return Qd((e = Nt(e)));
                }
                var Vd = null;
                function Qd(e) {
                    if (((Vd = null), null !== (e = Ve(e)))) {
                        var t = M(e);
                        if (null === t) e = null;
                        else {
                            var n = t.tag;
                            if (13 === n) {
                                if (null !== (e = D(t))) return e;
                                e = null;
                            } else if (3 === n) {
                                if (
                                    t.stateNode.current.memoizedState
                                        .isDehydrated
                                )
                                    return 3 === t.tag
                                        ? t.stateNode.containerInfo
                                        : null;
                                e = null;
                            } else t !== e && (e = null);
                        }
                    }
                    return (Vd = e), null;
                }
                function Kd(e) {
                    switch (e) {
                        case "beforetoggle":
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "toggle":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 2;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 8;
                        case "message":
                            switch (se()) {
                                case ue:
                                    return 2;
                                case ce:
                                    return 8;
                                case de:
                                case pe:
                                    return 32;
                                case fe:
                                    return 268435456;
                                default:
                                    return 32;
                            }
                        default:
                            return 32;
                    }
                }
                var Yd = !1,
                    Gd = null,
                    Xd = null,
                    Zd = null,
                    Jd = new Map(),
                    ep = new Map(),
                    tp = [],
                    np =
                        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                            " ",
                        );
                function rp(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Gd = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Xd = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Zd = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Jd.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            ep.delete(t.pointerId);
                    }
                }
                function ap(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o
                        ? ((e = {
                              blockedOn: t,
                              domEventName: n,
                              eventSystemFlags: r,
                              nativeEvent: o,
                              targetContainers: [a],
                          }),
                          null !== t && null !== (t = Qe(t)) && jd(t),
                          e)
                        : ((e.eventSystemFlags |= r),
                          (t = e.targetContainers),
                          null !== a && -1 === t.indexOf(a) && t.push(a),
                          e);
                }
                function op(e) {
                    var t = Ve(e.target);
                    if (null !== t) {
                        var n = M(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = D(n)))
                                    return (
                                        (e.blockedOn = t),
                                        void (function (e) {
                                            var t = U.p;
                                            try {
                                                return (
                                                    (U.p = e),
                                                    (function () {
                                                        if (13 === n.tag) {
                                                            var e = Tu(),
                                                                t = Pr(n, e);
                                                            null !== t &&
                                                                Ru(t, 0, e),
                                                                Id(n, e);
                                                        }
                                                    })()
                                                );
                                            } finally {
                                                U.p = t;
                                            }
                                        })(e.priority)
                                    );
                            } else if (
                                3 === t &&
                                n.stateNode.current.memoizedState.isDehydrated
                            )
                                return void (e.blockedOn =
                                    3 === n.tag
                                        ? n.stateNode.containerInfo
                                        : null);
                    }
                    e.blockedOn = null;
                }
                function lp(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length; ) {
                        var n = Wd(e.nativeEvent);
                        if (null !== n)
                            return (
                                null !== (t = Qe(n)) && jd(t),
                                (e.blockedOn = n),
                                !1
                            );
                        var r = new (n = e.nativeEvent).constructor(n.type, n);
                        (Tt = r),
                            n.target.dispatchEvent(r),
                            (Tt = null),
                            t.shift();
                    }
                    return !0;
                }
                function ip(e, t, n) {
                    lp(e) && n.delete(t);
                }
                function sp() {
                    (Yd = !1),
                        null !== Gd && lp(Gd) && (Gd = null),
                        null !== Xd && lp(Xd) && (Xd = null),
                        null !== Zd && lp(Zd) && (Zd = null),
                        Jd.forEach(ip),
                        ep.forEach(ip);
                }
                function up(e, t) {
                    e.blockedOn === t &&
                        ((e.blockedOn = null),
                        Yd ||
                            ((Yd = !0),
                            r.unstable_scheduleCallback(
                                r.unstable_NormalPriority,
                                sp,
                            )));
                }
                var cp = null;
                function dp(e) {
                    cp !== e &&
                        ((cp = e),
                        r.unstable_scheduleCallback(
                            r.unstable_NormalPriority,
                            function () {
                                cp === e && (cp = null);
                                for (var t = 0; t < e.length; t += 3) {
                                    var n = e[t],
                                        r = e[t + 1],
                                        a = e[t + 2];
                                    if ("function" != typeof r) {
                                        if (null === Qd(r || n)) continue;
                                        break;
                                    }
                                    var o = Qe(n);
                                    null !== o &&
                                        (e.splice(t, 3),
                                        (t -= 3),
                                        cl(
                                            o,
                                            {
                                                pending: !0,
                                                data: a,
                                                method: n.method,
                                                action: r,
                                            },
                                            r,
                                            a,
                                        ));
                                }
                            },
                        ));
                }
                function pp(e) {
                    function t(t) {
                        return up(t, e);
                    }
                    null !== Gd && up(Gd, e),
                        null !== Xd && up(Xd, e),
                        null !== Zd && up(Zd, e),
                        Jd.forEach(t),
                        ep.forEach(t);
                    for (var n = 0; n < tp.length; n++) {
                        var r = tp[n];
                        r.blockedOn === e && (r.blockedOn = null);
                    }
                    for (; 0 < tp.length && null === (n = tp[0]).blockedOn; )
                        op(n), null === n.blockedOn && tp.shift();
                    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                        for (r = 0; r < n.length; r += 3) {
                            var a = n[r],
                                o = n[r + 1],
                                l = a[Fe] || null;
                            if ("function" == typeof o) l || dp(n);
                            else if (l) {
                                var i = null;
                                if (o && o.hasAttribute("formAction")) {
                                    if (((a = o), (l = o[Fe] || null)))
                                        i = l.formAction;
                                    else if (null !== Qd(a)) continue;
                                } else i = l.action;
                                "function" == typeof i
                                    ? (n[r + 1] = i)
                                    : (n.splice(r, 3), (r -= 3)),
                                    dp(n);
                            }
                        }
                }
                function fp(e) {
                    this._internalRoot = e;
                }
                function hp(e) {
                    this._internalRoot = e;
                }
                (hp.prototype.render = fp.prototype.render =
                    function (e) {
                        var t = this._internalRoot;
                        if (null === t) throw Error(l(409));
                        Dd(t.current, Tu(), e, t, null, null);
                    }),
                    (hp.prototype.unmount = fp.prototype.unmount =
                        function () {
                            var e = this._internalRoot;
                            if (null !== e) {
                                this._internalRoot = null;
                                var t = e.containerInfo;
                                0 === e.tag && ec(),
                                    Dd(e.current, 2, null, e, null, null),
                                    Du(),
                                    (t[Ie] = null);
                            }
                        }),
                    (hp.prototype.unstable_scheduleHydration = function (e) {
                        if (e) {
                            var t = $e();
                            e = { blockedOn: null, target: e, priority: t };
                            for (
                                var n = 0;
                                n < tp.length && 0 !== t && t < tp[n].priority;
                                n++
                            );
                            tp.splice(n, 0, e), 0 === n && op(e);
                        }
                    });
                var mp = a.version;
                if ("19.0.0" !== mp) throw Error(l(527, mp, "19.0.0"));
                U.findDOMNode = function (e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(l(188));
                        throw (
                            ((e = Object.keys(e).join(",")), Error(l(268, e)))
                        );
                    }
                    return (
                        (e = (function (e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = M(e))) throw Error(l(188));
                                return t !== e ? null : e;
                            }
                            for (var n = e, r = t; ; ) {
                                var a = n.return;
                                if (null === a) break;
                                var o = a.alternate;
                                if (null === o) {
                                    if (null !== (r = a.return)) {
                                        n = r;
                                        continue;
                                    }
                                    break;
                                }
                                if (a.child === o.child) {
                                    for (o = a.child; o; ) {
                                        if (o === n) return F(a), e;
                                        if (o === r) return F(a), t;
                                        o = o.sibling;
                                    }
                                    throw Error(l(188));
                                }
                                if (n.return !== r.return) (n = a), (r = o);
                                else {
                                    for (var i = !1, s = a.child; s; ) {
                                        if (s === n) {
                                            (i = !0), (n = a), (r = o);
                                            break;
                                        }
                                        if (s === r) {
                                            (i = !0), (r = a), (n = o);
                                            break;
                                        }
                                        s = s.sibling;
                                    }
                                    if (!i) {
                                        for (s = o.child; s; ) {
                                            if (s === n) {
                                                (i = !0), (n = o), (r = a);
                                                break;
                                            }
                                            if (s === r) {
                                                (i = !0), (r = o), (n = a);
                                                break;
                                            }
                                            s = s.sibling;
                                        }
                                        if (!i) throw Error(l(189));
                                    }
                                }
                                if (n.alternate !== r) throw Error(l(190));
                            }
                            if (3 !== n.tag) throw Error(l(188));
                            return n.stateNode.current === n ? e : t;
                        })(t)),
                        null === (e = null !== e ? I(e) : null)
                            ? null
                            : e.stateNode
                    );
                };
                var gp = {
                    bundleType: 0,
                    version: "19.0.0",
                    rendererPackageName: "react-dom",
                    currentDispatcherRef: T,
                    findFiberByHostInstance: Ve,
                    reconcilerVersion: "19.0.0",
                };
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!bp.isDisabled && bp.supportsFiber)
                        try {
                            (ge = bp.inject(gp)), (be = bp);
                        } catch (e) {}
                }
                t.createRoot = function (e, t) {
                    if (
                        !(n = e) ||
                        (1 !== n.nodeType &&
                            9 !== n.nodeType &&
                            11 !== n.nodeType)
                    )
                        throw Error(l(299));
                    var n,
                        r = !1,
                        a = "",
                        o = Ol,
                        i = $l,
                        s = Ml;
                    return (
                        null != t &&
                            (!0 === t.unstable_strictMode && (r = !0),
                            void 0 !== t.identifierPrefix &&
                                (a = t.identifierPrefix),
                            void 0 !== t.onUncaughtError &&
                                (o = t.onUncaughtError),
                            void 0 !== t.onCaughtError && (i = t.onCaughtError),
                            void 0 !== t.onRecoverableError &&
                                (s = t.onRecoverableError),
                            void 0 !== t.unstable_transitionCallbacks &&
                                t.unstable_transitionCallbacks),
                        (t = (function (e, t, n, r, a, o, l, i, s, u, c, d) {
                            return (
                                (e = new Md(e, t, n, l, i, s, u, d)),
                                (t = 1),
                                !0 === o && (t |= 24),
                                (o = Os(3, null, null, t)),
                                (e.current = o),
                                (o.stateNode = e),
                                (t = Ia()).refCount++,
                                (e.pooledCache = t),
                                t.refCount++,
                                (o.memoizedState = {
                                    element: r,
                                    isDehydrated: n,
                                    cache: t,
                                }),
                                Pi(o),
                                e
                            );
                        })(e, 1, !1, null, 0, r, a, o, i, s, 0, null)),
                        (e[Ie] = t.current),
                        Rc(8 === e.nodeType ? e.parentNode : e),
                        new fp(t)
                    );
                };
            },
            221: (e, t, n) => {
                var r = n(540);
                function a(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++)
                            t += "&args[]=" + encodeURIComponent(arguments[n]);
                    }
                    return (
                        "Minified React error #" +
                        e +
                        "; visit " +
                        t +
                        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                    );
                }
                function o() {}
                var l = {
                        d: {
                            f: o,
                            r: function () {
                                throw Error(a(522));
                            },
                            D: o,
                            C: o,
                            L: o,
                            m: o,
                            X: o,
                            S: o,
                            M: o,
                        },
                        p: 0,
                        findDOMNode: null,
                    },
                    i = Symbol.for("react.portal"),
                    s =
                        r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
                function u(e, t) {
                    return "font" === e
                        ? ""
                        : "string" == typeof t
                          ? "use-credentials" === t
                              ? t
                              : ""
                          : void 0;
                }
                (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
                    l),
                    (t.createPortal = function (e, t) {
                        var n =
                            2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : null;
                        if (
                            !t ||
                            (1 !== t.nodeType &&
                                9 !== t.nodeType &&
                                11 !== t.nodeType)
                        )
                            throw Error(a(299));
                        return (function (e, t, n) {
                            var r =
                                3 < arguments.length && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : null;
                            return {
                                $$typeof: i,
                                key: null == r ? null : "" + r,
                                children: e,
                                containerInfo: t,
                                implementation: n,
                            };
                        })(e, t, null, n);
                    }),
                    (t.flushSync = function (e) {
                        var t = s.T,
                            n = l.p;
                        try {
                            if (((s.T = null), (l.p = 2), e)) return e();
                        } finally {
                            (s.T = t), (l.p = n), l.d.f();
                        }
                    }),
                    (t.preconnect = function (e, t) {
                        "string" == typeof e &&
                            ((t = t
                                ? "string" == typeof (t = t.crossOrigin)
                                    ? "use-credentials" === t
                                        ? t
                                        : ""
                                    : void 0
                                : null),
                            l.d.C(e, t));
                    }),
                    (t.prefetchDNS = function (e) {
                        "string" == typeof e && l.d.D(e);
                    }),
                    (t.preinit = function (e, t) {
                        if (
                            "string" == typeof e &&
                            t &&
                            "string" == typeof t.as
                        ) {
                            var n = t.as,
                                r = u(n, t.crossOrigin),
                                a =
                                    "string" == typeof t.integrity
                                        ? t.integrity
                                        : void 0,
                                o =
                                    "string" == typeof t.fetchPriority
                                        ? t.fetchPriority
                                        : void 0;
                            "style" === n
                                ? l.d.S(
                                      e,
                                      "string" == typeof t.precedence
                                          ? t.precedence
                                          : void 0,
                                      {
                                          crossOrigin: r,
                                          integrity: a,
                                          fetchPriority: o,
                                      },
                                  )
                                : "script" === n &&
                                  l.d.X(e, {
                                      crossOrigin: r,
                                      integrity: a,
                                      fetchPriority: o,
                                      nonce:
                                          "string" == typeof t.nonce
                                              ? t.nonce
                                              : void 0,
                                  });
                        }
                    }),
                    (t.preinitModule = function (e, t) {
                        if ("string" == typeof e)
                            if ("object" == typeof t && null !== t) {
                                if (null == t.as || "script" === t.as) {
                                    var n = u(t.as, t.crossOrigin);
                                    l.d.M(e, {
                                        crossOrigin: n,
                                        integrity:
                                            "string" == typeof t.integrity
                                                ? t.integrity
                                                : void 0,
                                        nonce:
                                            "string" == typeof t.nonce
                                                ? t.nonce
                                                : void 0,
                                    });
                                }
                            } else null == t && l.d.M(e);
                    }),
                    (t.preload = function (e, t) {
                        if (
                            "string" == typeof e &&
                            "object" == typeof t &&
                            null !== t &&
                            "string" == typeof t.as
                        ) {
                            var n = t.as,
                                r = u(n, t.crossOrigin);
                            l.d.L(e, n, {
                                crossOrigin: r,
                                integrity:
                                    "string" == typeof t.integrity
                                        ? t.integrity
                                        : void 0,
                                nonce:
                                    "string" == typeof t.nonce
                                        ? t.nonce
                                        : void 0,
                                type:
                                    "string" == typeof t.type ? t.type : void 0,
                                fetchPriority:
                                    "string" == typeof t.fetchPriority
                                        ? t.fetchPriority
                                        : void 0,
                                referrerPolicy:
                                    "string" == typeof t.referrerPolicy
                                        ? t.referrerPolicy
                                        : void 0,
                                imageSrcSet:
                                    "string" == typeof t.imageSrcSet
                                        ? t.imageSrcSet
                                        : void 0,
                                imageSizes:
                                    "string" == typeof t.imageSizes
                                        ? t.imageSizes
                                        : void 0,
                                media:
                                    "string" == typeof t.media
                                        ? t.media
                                        : void 0,
                            });
                        }
                    }),
                    (t.preloadModule = function (e, t) {
                        if ("string" == typeof e)
                            if (t) {
                                var n = u(t.as, t.crossOrigin);
                                l.d.m(e, {
                                    as:
                                        "string" == typeof t.as &&
                                        "script" !== t.as
                                            ? t.as
                                            : void 0,
                                    crossOrigin: n,
                                    integrity:
                                        "string" == typeof t.integrity
                                            ? t.integrity
                                            : void 0,
                                });
                            } else l.d.m(e);
                    }),
                    (t.requestFormReset = function (e) {
                        l.d.r(e);
                    }),
                    (t.unstable_batchedUpdates = function (e, t) {
                        return e(t);
                    }),
                    (t.useFormState = function (e, t, n) {
                        return s.H.useFormState(e, t, n);
                    }),
                    (t.useFormStatus = function () {
                        return s.H.useHostTransitionStatus();
                    }),
                    (t.version = "19.0.0");
            },
            338: (e, t, n) => {
                !(function e() {
                    if (
                        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                        "function" ==
                            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
                    )
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                        } catch (e) {
                            console.error(e);
                        }
                })(),
                    (e.exports = n(247));
            },
            961: (e, t, n) => {
                !(function e() {
                    if (
                        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                        "function" ==
                            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
                    )
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                        } catch (e) {
                            console.error(e);
                        }
                })(),
                    (e.exports = n(221));
            },
            869: (e, t) => {
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    l = Symbol.for("react.profiler"),
                    i = Symbol.for("react.consumer"),
                    s = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    p = Symbol.for("react.lazy"),
                    f = Symbol.iterator,
                    h = {
                        isMounted: function () {
                            return !1;
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {},
                    },
                    m = Object.assign,
                    g = {};
                function b(e, t, n) {
                    (this.props = e),
                        (this.context = t),
                        (this.refs = g),
                        (this.updater = n || h);
                }
                function y() {}
                function w(e, t, n) {
                    (this.props = e),
                        (this.context = t),
                        (this.refs = g),
                        (this.updater = n || h);
                }
                (b.prototype.isReactComponent = {}),
                    (b.prototype.setState = function (e, t) {
                        if (
                            "object" != typeof e &&
                            "function" != typeof e &&
                            null != e
                        )
                            throw Error(
                                "takes an object of state variables to update or a function which returns an object of state variables.",
                            );
                        this.updater.enqueueSetState(this, e, t, "setState");
                    }),
                    (b.prototype.forceUpdate = function (e) {
                        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                    }),
                    (y.prototype = b.prototype);
                var v = (w.prototype = new y());
                (v.constructor = w),
                    m(v, b.prototype),
                    (v.isPureReactComponent = !0);
                var k = Array.isArray,
                    x = { H: null, A: null, T: null, S: null },
                    S = Object.prototype.hasOwnProperty;
                function E(e, t, r, a, o, l) {
                    return (
                        (r = l.ref),
                        {
                            $$typeof: n,
                            type: e,
                            key: t,
                            ref: void 0 !== r ? r : null,
                            props: l,
                        }
                    );
                }
                function C(e) {
                    return (
                        "object" == typeof e && null !== e && e.$$typeof === n
                    );
                }
                var z = /\/+/g;
                function _(e, t) {
                    return "object" == typeof e && null !== e && null != e.key
                        ? ((n = "" + e.key),
                          (r = { "=": "=0", ":": "=2" }),
                          "$" +
                              n.replace(/[=:]/g, function (e) {
                                  return r[e];
                              }))
                        : t.toString(36);
                    var n, r;
                }
                function P() {}
                function T(e, t, a, o, l) {
                    var i = typeof e;
                    ("undefined" !== i && "boolean" !== i) || (e = null);
                    var s,
                        u,
                        c = !1;
                    if (null === e) c = !0;
                    else
                        switch (i) {
                            case "bigint":
                            case "string":
                            case "number":
                                c = !0;
                                break;
                            case "object":
                                switch (e.$$typeof) {
                                    case n:
                                    case r:
                                        c = !0;
                                        break;
                                    case p:
                                        return T(
                                            (c = e._init)(e._payload),
                                            t,
                                            a,
                                            o,
                                            l,
                                        );
                                }
                        }
                    if (c)
                        return (
                            (l = l(e)),
                            (c = "" === o ? "." + _(e, 0) : o),
                            k(l)
                                ? ((a = ""),
                                  null != c && (a = c.replace(z, "$&/") + "/"),
                                  T(l, t, a, "", function (e) {
                                      return e;
                                  }))
                                : null != l &&
                                  (C(l) &&
                                      ((s = l),
                                      (u =
                                          a +
                                          (null == l.key ||
                                          (e && e.key === l.key)
                                              ? ""
                                              : ("" + l.key).replace(z, "$&/") +
                                                "/") +
                                          c),
                                      (l = E(
                                          s.type,
                                          u,
                                          void 0,
                                          0,
                                          0,
                                          s.props,
                                      ))),
                                  t.push(l)),
                            1
                        );
                    c = 0;
                    var d,
                        h = "" === o ? "." : o + ":";
                    if (k(e))
                        for (var m = 0; m < e.length; m++)
                            c += T((o = e[m]), t, a, (i = h + _(o, m)), l);
                    else if (
                        "function" ==
                        typeof (m =
                            null === (d = e) || "object" != typeof d
                                ? null
                                : "function" ==
                                    typeof (d = (f && d[f]) || d["@@iterator"])
                                  ? d
                                  : null)
                    )
                        for (e = m.call(e), m = 0; !(o = e.next()).done; )
                            c += T((o = o.value), t, a, (i = h + _(o, m++)), l);
                    else if ("object" === i) {
                        if ("function" == typeof e.then)
                            return T(
                                (function (e) {
                                    switch (e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason;
                                        default:
                                            switch (
                                                ("string" == typeof e.status
                                                    ? e.then(P, P)
                                                    : ((e.status = "pending"),
                                                      e.then(
                                                          function (t) {
                                                              "pending" ===
                                                                  e.status &&
                                                                  ((e.status =
                                                                      "fulfilled"),
                                                                  (e.value =
                                                                      t));
                                                          },
                                                          function (t) {
                                                              "pending" ===
                                                                  e.status &&
                                                                  ((e.status =
                                                                      "rejected"),
                                                                  (e.reason =
                                                                      t));
                                                          },
                                                      )),
                                                e.status)
                                            ) {
                                                case "fulfilled":
                                                    return e.value;
                                                case "rejected":
                                                    throw e.reason;
                                            }
                                    }
                                    throw e;
                                })(e),
                                t,
                                a,
                                o,
                                l,
                            );
                        throw (
                            ((t = String(e)),
                            Error(
                                "Objects are not valid as a React child (found: " +
                                    ("[object Object]" === t
                                        ? "object with keys {" +
                                          Object.keys(e).join(", ") +
                                          "}"
                                        : t) +
                                    "). If you meant to render a collection of children, use an array instead.",
                            ))
                        );
                    }
                    return c;
                }
                function N(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return (
                        T(e, r, "", "", function (e) {
                            return t.call(n, e, a++);
                        }),
                        r
                    );
                }
                function R(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(
                            function (t) {
                                (0 !== e._status && -1 !== e._status) ||
                                    ((e._status = 1), (e._result = t));
                            },
                            function (t) {
                                (0 !== e._status && -1 !== e._status) ||
                                    ((e._status = 2), (e._result = t));
                            },
                        ),
                            -1 === e._status &&
                                ((e._status = 0), (e._result = t));
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result;
                }
                var L =
                    "function" == typeof reportError
                        ? reportError
                        : function (e) {
                              if (
                                  "object" == typeof window &&
                                  "function" == typeof window.ErrorEvent
                              ) {
                                  var t = new window.ErrorEvent("error", {
                                      bubbles: !0,
                                      cancelable: !0,
                                      message:
                                          "object" == typeof e &&
                                          null !== e &&
                                          "string" == typeof e.message
                                              ? String(e.message)
                                              : String(e),
                                      error: e,
                                  });
                                  if (!window.dispatchEvent(t)) return;
                              } else if (
                                  "object" == typeof process &&
                                  "function" == typeof process.emit
                              )
                                  return void process.emit(
                                      "uncaughtException",
                                      e,
                                  );
                              console.error(e);
                          };
                function A() {}
                (t.Children = {
                    map: N,
                    forEach: function (e, t, n) {
                        N(
                            e,
                            function () {
                                t.apply(this, arguments);
                            },
                            n,
                        );
                    },
                    count: function (e) {
                        var t = 0;
                        return (
                            N(e, function () {
                                t++;
                            }),
                            t
                        );
                    },
                    toArray: function (e) {
                        return (
                            N(e, function (e) {
                                return e;
                            }) || []
                        );
                    },
                    only: function (e) {
                        if (!C(e))
                            throw Error(
                                "React.Children.only expected to receive a single React element child.",
                            );
                        return e;
                    },
                }),
                    (t.Component = b),
                    (t.Fragment = a),
                    (t.Profiler = l),
                    (t.PureComponent = w),
                    (t.StrictMode = o),
                    (t.Suspense = c),
                    (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
                        x),
                    (t.act = function () {
                        throw Error(
                            "act(...) is not supported in production builds of React.",
                        );
                    }),
                    (t.cache = function (e) {
                        return function () {
                            return e.apply(null, arguments);
                        };
                    }),
                    (t.cloneElement = function (e, t, n) {
                        if (null == e)
                            throw Error(
                                "The argument must be a React element, but you passed " +
                                    e +
                                    ".",
                            );
                        var r = m({}, e.props),
                            a = e.key;
                        if (null != t)
                            for (o in (t.ref,
                            void 0 !== t.key && (a = "" + t.key),
                            t))
                                !S.call(t, o) ||
                                    "key" === o ||
                                    "__self" === o ||
                                    "__source" === o ||
                                    ("ref" === o && void 0 === t.ref) ||
                                    (r[o] = t[o]);
                        var o = arguments.length - 2;
                        if (1 === o) r.children = n;
                        else if (1 < o) {
                            for (var l = Array(o), i = 0; i < o; i++)
                                l[i] = arguments[i + 2];
                            r.children = l;
                        }
                        return E(e.type, a, void 0, 0, 0, r);
                    }),
                    (t.createContext = function (e) {
                        return (
                            ((e = {
                                $$typeof: s,
                                _currentValue: e,
                                _currentValue2: e,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null,
                            }).Provider = e),
                            (e.Consumer = { $$typeof: i, _context: e }),
                            e
                        );
                    }),
                    (t.createElement = function (e, t, n) {
                        var r,
                            a = {},
                            o = null;
                        if (null != t)
                            for (r in (void 0 !== t.key && (o = "" + t.key), t))
                                S.call(t, r) &&
                                    "key" !== r &&
                                    "__self" !== r &&
                                    "__source" !== r &&
                                    (a[r] = t[r]);
                        var l = arguments.length - 2;
                        if (1 === l) a.children = n;
                        else if (1 < l) {
                            for (var i = Array(l), s = 0; s < l; s++)
                                i[s] = arguments[s + 2];
                            a.children = i;
                        }
                        if (e && e.defaultProps)
                            for (r in (l = e.defaultProps))
                                void 0 === a[r] && (a[r] = l[r]);
                        return E(e, o, void 0, 0, 0, a);
                    }),
                    (t.createRef = function () {
                        return { current: null };
                    }),
                    (t.forwardRef = function (e) {
                        return { $$typeof: u, render: e };
                    }),
                    (t.isValidElement = C),
                    (t.lazy = function (e) {
                        return {
                            $$typeof: p,
                            _payload: { _status: -1, _result: e },
                            _init: R,
                        };
                    }),
                    (t.memo = function (e, t) {
                        return {
                            $$typeof: d,
                            type: e,
                            compare: void 0 === t ? null : t,
                        };
                    }),
                    (t.startTransition = function (e) {
                        var t = x.T,
                            n = {};
                        x.T = n;
                        try {
                            var r = e(),
                                a = x.S;
                            null !== a && a(n, r),
                                "object" == typeof r &&
                                    null !== r &&
                                    "function" == typeof r.then &&
                                    r.then(A, L);
                        } catch (e) {
                            L(e);
                        } finally {
                            x.T = t;
                        }
                    }),
                    (t.unstable_useCacheRefresh = function () {
                        return x.H.useCacheRefresh();
                    }),
                    (t.use = function (e) {
                        return x.H.use(e);
                    }),
                    (t.useActionState = function (e, t, n) {
                        return x.H.useActionState(e, t, n);
                    }),
                    (t.useCallback = function (e, t) {
                        return x.H.useCallback(e, t);
                    }),
                    (t.useContext = function (e) {
                        return x.H.useContext(e);
                    }),
                    (t.useDebugValue = function () {}),
                    (t.useDeferredValue = function (e, t) {
                        return x.H.useDeferredValue(e, t);
                    }),
                    (t.useEffect = function (e, t) {
                        return x.H.useEffect(e, t);
                    }),
                    (t.useId = function () {
                        return x.H.useId();
                    }),
                    (t.useImperativeHandle = function (e, t, n) {
                        return x.H.useImperativeHandle(e, t, n);
                    }),
                    (t.useInsertionEffect = function (e, t) {
                        return x.H.useInsertionEffect(e, t);
                    }),
                    (t.useLayoutEffect = function (e, t) {
                        return x.H.useLayoutEffect(e, t);
                    }),
                    (t.useMemo = function (e, t) {
                        return x.H.useMemo(e, t);
                    }),
                    (t.useOptimistic = function (e, t) {
                        return x.H.useOptimistic(e, t);
                    }),
                    (t.useReducer = function (e, t, n) {
                        return x.H.useReducer(e, t, n);
                    }),
                    (t.useRef = function (e) {
                        return x.H.useRef(e);
                    }),
                    (t.useState = function (e) {
                        return x.H.useState(e);
                    }),
                    (t.useSyncExternalStore = function (e, t, n) {
                        return x.H.useSyncExternalStore(e, t, n);
                    }),
                    (t.useTransition = function () {
                        return x.H.useTransition();
                    }),
                    (t.version = "19.0.0");
            },
            540: (e, t, n) => {
                e.exports = n(869);
            },
            477: (e, t) => {
                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n; ) {
                        var r = (n - 1) >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        (e[r] = t), (e[n] = a), (n = r);
                    }
                }
                function r(e) {
                    return 0 === e.length ? null : e[0];
                }
                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
                            var i = 2 * (r + 1) - 1,
                                s = e[i],
                                u = i + 1,
                                c = e[u];
                            if (0 > o(s, n))
                                u < a && 0 > o(c, s)
                                    ? ((e[r] = c), (e[u] = n), (r = u))
                                    : ((e[r] = s), (e[i] = n), (r = i));
                            else {
                                if (!(u < a && 0 > o(c, n))) break e;
                                (e[r] = c), (e[u] = n), (r = u);
                            }
                        }
                    }
                    return t;
                }
                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id;
                }
                if (
                    ((t.unstable_now = void 0),
                    "object" == typeof performance &&
                        "function" == typeof performance.now)
                ) {
                    var l = performance;
                    t.unstable_now = function () {
                        return l.now();
                    };
                } else {
                    var i = Date,
                        s = i.now();
                    t.unstable_now = function () {
                        return i.now() - s;
                    };
                }
                var u = [],
                    c = [],
                    d = 1,
                    p = null,
                    f = 3,
                    h = !1,
                    m = !1,
                    g = !1,
                    b = "function" == typeof setTimeout ? setTimeout : null,
                    y = "function" == typeof clearTimeout ? clearTimeout : null,
                    w =
                        "undefined" != typeof setImmediate
                            ? setImmediate
                            : null;
                function v(e) {
                    for (var t = r(c); null !== t; ) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), (t.sortIndex = t.expirationTime), n(u, t);
                        }
                        t = r(c);
                    }
                }
                function k(e) {
                    if (((g = !1), v(e), !m))
                        if (null !== r(u)) (m = !0), R();
                        else {
                            var t = r(c);
                            null !== t && L(k, t.startTime - e);
                        }
                }
                var x,
                    S = !1,
                    E = -1,
                    C = 5,
                    z = -1;
                function _() {
                    return !(t.unstable_now() - z < C);
                }
                function P() {
                    if (S) {
                        var e = t.unstable_now();
                        z = e;
                        var n = !0;
                        try {
                            e: {
                                (m = !1),
                                    g && ((g = !1), y(E), (E = -1)),
                                    (h = !0);
                                var o = f;
                                try {
                                    t: {
                                        for (
                                            v(e), p = r(u);
                                            null !== p &&
                                            !(p.expirationTime > e && _());

                                        ) {
                                            var l = p.callback;
                                            if ("function" == typeof l) {
                                                (p.callback = null),
                                                    (f = p.priorityLevel);
                                                var i = l(
                                                    p.expirationTime <= e,
                                                );
                                                if (
                                                    ((e = t.unstable_now()),
                                                    "function" == typeof i)
                                                ) {
                                                    (p.callback = i),
                                                        v(e),
                                                        (n = !0);
                                                    break t;
                                                }
                                                p === r(u) && a(u), v(e);
                                            } else a(u);
                                            p = r(u);
                                        }
                                        if (null !== p) n = !0;
                                        else {
                                            var s = r(c);
                                            null !== s && L(k, s.startTime - e),
                                                (n = !1);
                                        }
                                    }
                                    break e;
                                } finally {
                                    (p = null), (f = o), (h = !1);
                                }
                                n = void 0;
                            }
                        } finally {
                            n ? x() : (S = !1);
                        }
                    }
                }
                if ("function" == typeof w)
                    x = function () {
                        w(P);
                    };
                else if ("undefined" != typeof MessageChannel) {
                    var T = new MessageChannel(),
                        N = T.port2;
                    (T.port1.onmessage = P),
                        (x = function () {
                            N.postMessage(null);
                        });
                } else
                    x = function () {
                        b(P, 0);
                    };
                function R() {
                    S || ((S = !0), x());
                }
                function L(e, n) {
                    E = b(function () {
                        e(t.unstable_now());
                    }, n);
                }
                (t.unstable_IdlePriority = 5),
                    (t.unstable_ImmediatePriority = 1),
                    (t.unstable_LowPriority = 4),
                    (t.unstable_NormalPriority = 3),
                    (t.unstable_Profiling = null),
                    (t.unstable_UserBlockingPriority = 2),
                    (t.unstable_cancelCallback = function (e) {
                        e.callback = null;
                    }),
                    (t.unstable_continueExecution = function () {
                        m || h || ((m = !0), R());
                    }),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                              )
                            : (C = 0 < e ? Math.floor(1e3 / e) : 5);
                    }),
                    (t.unstable_getCurrentPriorityLevel = function () {
                        return f;
                    }),
                    (t.unstable_getFirstCallbackNode = function () {
                        return r(u);
                    }),
                    (t.unstable_next = function (e) {
                        switch (f) {
                            case 1:
                            case 2:
                            case 3:
                                var t = 3;
                                break;
                            default:
                                t = f;
                        }
                        var n = f;
                        f = t;
                        try {
                            return e();
                        } finally {
                            f = n;
                        }
                    }),
                    (t.unstable_pauseExecution = function () {}),
                    (t.unstable_requestPaint = function () {}),
                    (t.unstable_runWithPriority = function (e, t) {
                        switch (e) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                e = 3;
                        }
                        var n = f;
                        f = e;
                        try {
                            return t();
                        } finally {
                            f = n;
                        }
                    }),
                    (t.unstable_scheduleCallback = function (e, a, o) {
                        var l = t.unstable_now();
                        switch (
                            ((o =
                                "object" == typeof o &&
                                null !== o &&
                                "number" == typeof (o = o.delay) &&
                                0 < o
                                    ? l + o
                                    : l),
                            e)
                        ) {
                            case 1:
                                var i = -1;
                                break;
                            case 2:
                                i = 250;
                                break;
                            case 5:
                                i = 1073741823;
                                break;
                            case 4:
                                i = 1e4;
                                break;
                            default:
                                i = 5e3;
                        }
                        return (
                            (e = {
                                id: d++,
                                callback: a,
                                priorityLevel: e,
                                startTime: o,
                                expirationTime: (i = o + i),
                                sortIndex: -1,
                            }),
                            o > l
                                ? ((e.sortIndex = o),
                                  n(c, e),
                                  null === r(u) &&
                                      e === r(c) &&
                                      (g ? (y(E), (E = -1)) : (g = !0),
                                      L(k, o - l)))
                                : ((e.sortIndex = i),
                                  n(u, e),
                                  m || h || ((m = !0), R())),
                            e
                        );
                    }),
                    (t.unstable_shouldYield = _),
                    (t.unstable_wrapCallback = function (e) {
                        var t = f;
                        return function () {
                            var n = f;
                            f = t;
                            try {
                                return e.apply(this, arguments);
                            } finally {
                                f = n;
                            }
                        };
                    });
            },
            982: (e, t, n) => {
                e.exports = n(477);
            },
            72: (e) => {
                var t = [];
                function n(e) {
                    for (var n = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === e) {
                            n = r;
                            break;
                        }
                    return n;
                }
                function r(e, r) {
                    for (var o = {}, l = [], i = 0; i < e.length; i++) {
                        var s = e[i],
                            u = r.base ? s[0] + r.base : s[0],
                            c = o[u] || 0,
                            d = "".concat(u, " ").concat(c);
                        o[u] = c + 1;
                        var p = n(d),
                            f = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5],
                            };
                        if (-1 !== p) t[p].references++, t[p].updater(f);
                        else {
                            var h = a(f, r);
                            (r.byIndex = i),
                                t.splice(i, 0, {
                                    identifier: d,
                                    updater: h,
                                    references: 1,
                                });
                        }
                        l.push(d);
                    }
                    return l;
                }
                function a(e, t) {
                    var n = t.domAPI(t);
                    return (
                        n.update(e),
                        function (t) {
                            if (t) {
                                if (
                                    t.css === e.css &&
                                    t.media === e.media &&
                                    t.sourceMap === e.sourceMap &&
                                    t.supports === e.supports &&
                                    t.layer === e.layer
                                )
                                    return;
                                n.update((e = t));
                            } else n.remove();
                        }
                    );
                }
                e.exports = function (e, a) {
                    var o = r((e = e || []), (a = a || {}));
                    return function (e) {
                        e = e || [];
                        for (var l = 0; l < o.length; l++) {
                            var i = n(o[l]);
                            t[i].references--;
                        }
                        for (var s = r(e, a), u = 0; u < o.length; u++) {
                            var c = n(o[u]);
                            0 === t[c].references &&
                                (t[c].updater(), t.splice(c, 1));
                        }
                        o = s;
                    };
                };
            },
            659: (e) => {
                var t = {};
                e.exports = function (e, n) {
                    var r = (function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    })(e);
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    r.appendChild(n);
                };
            },
            159: (e) => {
                e.exports = function (e) {
                    var t = document.createElement("style");
                    return (
                        e.setAttributes(t, e.attributes),
                        e.insert(t, e.options),
                        t
                    );
                };
            },
            56: (e, t, n) => {
                e.exports = function (e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t);
                };
            },
            825: (e) => {
                e.exports = function (e) {
                    if ("undefined" == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        };
                    var t = e.insertStyleElement(e);
                    return {
                        update: function (n) {
                            !(function (e, t, n) {
                                var r = "";
                                n.supports &&
                                    (r += "@supports (".concat(
                                        n.supports,
                                        ") {",
                                    )),
                                    n.media &&
                                        (r += "@media ".concat(n.media, " {"));
                                var a = void 0 !== n.layer;
                                a &&
                                    (r += "@layer".concat(
                                        n.layer.length > 0
                                            ? " ".concat(n.layer)
                                            : "",
                                        " {",
                                    )),
                                    (r += n.css),
                                    a && (r += "}"),
                                    n.media && (r += "}"),
                                    n.supports && (r += "}");
                                var o = n.sourceMap;
                                o &&
                                    "undefined" != typeof btoa &&
                                    (r +=
                                        "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(o),
                                                    ),
                                                ),
                                            ),
                                            " */",
                                        )),
                                    t.styleTagTransform(r, e, t.options);
                            })(t, e, n);
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(t);
                        },
                    };
                };
            },
            113: (e) => {
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e));
                    }
                };
            },
        },
        t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = (t[r] = { id: r, exports: {} });
        return e[r](o, o.exports, n), o.exports;
    }
    (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
    }),
        (n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.nc = void 0);
    var r = n(540),
        a = n(338),
        o = (n(232), "popstate");
    function l(e = {}) {
        return (function (e, t, n, r = {}) {
            let { window: a = document.defaultView, v5Compat: l = !1 } = r,
                s = a.history,
                p = "POP",
                f = null,
                h = m();
            function m() {
                return (s.state || { idx: null }).idx;
            }
            function g() {
                p = "POP";
                let e = m(),
                    t = null == e ? null : e - h;
                (h = e), f && f({ action: p, location: y.location, delta: t });
            }
            function b(e) {
                let t =
                        "null" !== a.location.origin
                            ? a.location.origin
                            : a.location.href,
                    n = "string" == typeof e ? e : d(e);
                return (
                    (n = n.replace(/ $/, "%20")),
                    i(
                        t,
                        `No window.location.(origin|href) available to create URL for href: ${n}`,
                    ),
                    new URL(n, t)
                );
            }
            null == h && ((h = 0), s.replaceState({ ...s.state, idx: h }, ""));
            let y = {
                get action() {
                    return p;
                },
                get location() {
                    return e(a, s);
                },
                listen(e) {
                    if (f)
                        throw new Error(
                            "A history only accepts one active listener",
                        );
                    return (
                        a.addEventListener(o, g),
                        (f = e),
                        () => {
                            a.removeEventListener(o, g), (f = null);
                        }
                    );
                },
                createHref: (e) => t(a, e),
                createURL: b,
                encodeLocation(e) {
                    let t = b(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash,
                    };
                },
                push: function (e, t) {
                    p = "PUSH";
                    let r = c(y.location, e, t);
                    n && n(r, e), (h = m() + 1);
                    let o = u(r, h),
                        i = y.createHref(r);
                    try {
                        s.pushState(o, "", i);
                    } catch (e) {
                        if (
                            e instanceof DOMException &&
                            "DataCloneError" === e.name
                        )
                            throw e;
                        a.location.assign(i);
                    }
                    l && f && f({ action: p, location: y.location, delta: 1 });
                },
                replace: function (e, t) {
                    p = "REPLACE";
                    let r = c(y.location, e, t);
                    n && n(r, e), (h = m());
                    let a = u(r, h),
                        o = y.createHref(r);
                    s.replaceState(a, "", o),
                        l &&
                            f &&
                            f({ action: p, location: y.location, delta: 0 });
                },
                go: (e) => s.go(e),
            };
            return y;
        })(
            function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return c(
                    "",
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || "default",
                );
            },
            function (e, t) {
                return "string" == typeof t ? t : d(t);
            },
            null,
            e,
        );
    }
    function i(e, t) {
        if (!1 === e || null == e) throw new Error(t);
    }
    function s(e, t) {
        if (!e) {
            "undefined" != typeof console && console.warn(t);
            try {
                throw new Error(t);
            } catch (e) {}
        }
    }
    function u(e, t) {
        return { usr: e.state, key: e.key, idx: t };
    }
    function c(e, t, n = null, r) {
        return {
            pathname: "string" == typeof e ? e : e.pathname,
            search: "",
            hash: "",
            ...("string" == typeof t ? p(t) : t),
            state: n,
            key:
                (t && t.key) ||
                r ||
                Math.random().toString(36).substring(2, 10),
        };
    }
    function d({ pathname: e = "/", search: t = "", hash: n = "" }) {
        return (
            t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
            n && "#" !== n && (e += "#" === n.charAt(0) ? n : "#" + n),
            e
        );
    }
    function p(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
            let r = e.indexOf("?");
            r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
                e && (t.pathname = e);
        }
        return t;
    }
    function f(e, t, n = "/") {
        return (function (e, t, n, r) {
            let a = _(("string" == typeof t ? p(t) : t).pathname || "/", n);
            if (null == a) return null;
            let o = h(e);
            !(function (e) {
                e.sort((e, t) =>
                    e.score !== t.score
                        ? t.score - e.score
                        : (function (e, t) {
                              return e.length === t.length &&
                                  e.slice(0, -1).every((e, n) => e === t[n])
                                  ? e[e.length - 1] - t[t.length - 1]
                                  : 0;
                          })(
                              e.routesMeta.map((e) => e.childrenIndex),
                              t.routesMeta.map((e) => e.childrenIndex),
                          ),
                );
            })(o);
            let l = null;
            for (let e = 0; null == l && e < o.length; ++e) {
                let t = z(a);
                l = E(o[e], t, r);
            }
            return l;
        })(e, t, n, !1);
    }
    function h(e, t = [], n = [], r = "") {
        let a = (e, a, o) => {
            let l = {
                relativePath: void 0 === o ? e.path || "" : o,
                caseSensitive: !0 === e.caseSensitive,
                childrenIndex: a,
                route: e,
            };
            l.relativePath.startsWith("/") &&
                (i(
                    l.relativePath.startsWith(r),
                    `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
                ),
                (l.relativePath = l.relativePath.slice(r.length)));
            let s = R([r, l.relativePath]),
                u = n.concat(l);
            e.children &&
                e.children.length > 0 &&
                (i(
                    !0 !== e.index,
                    `Index routes must not have child routes. Please remove all child routes from route path "${s}".`,
                ),
                h(e.children, t, u, s)),
                (null != e.path || e.index) &&
                    t.push({ path: s, score: S(s, e.index), routesMeta: u });
        };
        return (
            e.forEach((e, t) => {
                if ("" !== e.path && e.path?.includes("?"))
                    for (let n of m(e.path)) a(e, t, n);
                else a(e, t);
            }),
            t
        );
    }
    function m(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
            a = n.endsWith("?"),
            o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let l = m(r.join("/")),
            i = [];
        return (
            i.push(...l.map((e) => ("" === e ? o : [o, e].join("/")))),
            a && i.push(...l),
            i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
    }
    var g = /^:[\w-]+$/,
        b = 3,
        y = 2,
        w = 1,
        v = 10,
        k = -2,
        x = (e) => "*" === e;
    function S(e, t) {
        let n = e.split("/"),
            r = n.length;
        return (
            n.some(x) && (r += k),
            t && (r += y),
            n
                .filter((e) => !x(e))
                .reduce((e, t) => e + (g.test(t) ? b : "" === t ? w : v), r)
        );
    }
    function E(e, t, n = !1) {
        let { routesMeta: r } = e,
            a = {},
            o = "/",
            l = [];
        for (let e = 0; e < r.length; ++e) {
            let i = r[e],
                s = e === r.length - 1,
                u = "/" === o ? t : t.slice(o.length) || "/",
                c = C(
                    {
                        path: i.relativePath,
                        caseSensitive: i.caseSensitive,
                        end: s,
                    },
                    u,
                ),
                d = i.route;
            if (
                (!c &&
                    s &&
                    n &&
                    !r[r.length - 1].route.index &&
                    (c = C(
                        {
                            path: i.relativePath,
                            caseSensitive: i.caseSensitive,
                            end: !1,
                        },
                        u,
                    )),
                !c)
            )
                return null;
            Object.assign(a, c.params),
                l.push({
                    params: a,
                    pathname: R([o, c.pathname]),
                    pathnameBase: L(R([o, c.pathnameBase])),
                    route: d,
                }),
                "/" !== c.pathnameBase && (o = R([o, c.pathnameBase]));
        }
        return l;
    }
    function C(e, t) {
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t = !1, n = !0) {
                s(
                    "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                    `Route path "${e}" will be treated as if it were "${e.replace(
                        /\*$/,
                        "/*",
                    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
                        /\*$/,
                        "/*",
                    )}".`,
                );
                let r = [],
                    a =
                        "^" +
                        e
                            .replace(/\/*\*?$/, "")
                            .replace(/^\/*/, "/")
                            .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                            .replace(
                                /\/:([\w-]+)(\?)?/g,
                                (e, t, n) => (
                                    r.push({
                                        paramName: t,
                                        isOptional: null != n,
                                    }),
                                    n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                                ),
                            );
                return (
                    e.endsWith("*")
                        ? (r.push({ paramName: "*" }),
                          (a +=
                              "*" === e || "/*" === e
                                  ? "(.*)$"
                                  : "(?:\\/(.+)|\\/*)$"))
                        : n
                          ? (a += "\\/*$")
                          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
                    [new RegExp(a, t ? void 0 : "i"), r]
                );
            })(e.path, e.caseSensitive, e.end),
            a = t.match(n);
        if (!a) return null;
        let o = a[0],
            l = o.replace(/(.)\/+$/, "$1"),
            i = a.slice(1);
        return {
            params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
                if ("*" === t) {
                    let e = i[r] || "";
                    l = o
                        .slice(0, o.length - e.length)
                        .replace(/(.)\/+$/, "$1");
                }
                const a = i[r];
                return (
                    (e[t] = n && !a ? void 0 : (a || "").replace(/%2F/g, "/")),
                    e
                );
            }, {}),
            pathname: o,
            pathnameBase: l,
            pattern: e,
        };
    }
    function z(e) {
        try {
            return e
                .split("/")
                .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                .join("/");
        } catch (t) {
            return (
                s(
                    !1,
                    `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
                ),
                e
            );
        }
    }
    function _(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
    }
    function P(e, t, n, r) {
        return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
            r,
        )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function T(e) {
        let t = (function (e) {
            return e.filter(
                (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
            );
        })(e);
        return t.map((e, n) =>
            n === t.length - 1 ? e.pathname : e.pathnameBase,
        );
    }
    function N(e, t, n, r = !1) {
        let a;
        "string" == typeof e
            ? (a = p(e))
            : ((a = { ...e }),
              i(
                  !a.pathname || !a.pathname.includes("?"),
                  P("?", "pathname", "search", a),
              ),
              i(
                  !a.pathname || !a.pathname.includes("#"),
                  P("#", "pathname", "hash", a),
              ),
              i(
                  !a.search || !a.search.includes("#"),
                  P("#", "search", "hash", a),
              ));
        let o,
            l = "" === e || "" === a.pathname,
            s = l ? "/" : a.pathname;
        if (null == s) o = n;
        else {
            let e = t.length - 1;
            if (!r && s.startsWith("..")) {
                let t = s.split("/");
                for (; ".." === t[0]; ) t.shift(), (e -= 1);
                a.pathname = t.join("/");
            }
            o = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t = "/") {
                let {
                        pathname: n,
                        search: r = "",
                        hash: a = "",
                    } = "string" == typeof e ? p(e) : e,
                    o = n
                        ? n.startsWith("/")
                            ? n
                            : (function (e, t) {
                                  let n = t.replace(/\/+$/, "").split("/");
                                  return (
                                      e.split("/").forEach((e) => {
                                          ".." === e
                                              ? n.length > 1 && n.pop()
                                              : "." !== e && n.push(e);
                                      }),
                                      n.length > 1 ? n.join("/") : "/"
                                  );
                              })(n, t)
                        : t;
                return { pathname: o, search: A(r), hash: O(a) };
            })(a, o),
            c = s && "/" !== s && s.endsWith("/"),
            d = (l || "." === s) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!c && !d) || (u.pathname += "/"), u;
    }
    var R = (e) => e.join("/").replace(/\/\/+/g, "/"),
        L = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        A = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        O = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
    function $(e) {
        return (
            null != e &&
            "number" == typeof e.status &&
            "string" == typeof e.statusText &&
            "boolean" == typeof e.internal &&
            "data" in e
        );
    }
    var M = ["POST", "PUT", "PATCH", "DELETE"],
        D = (new Set(M), ["GET", ...M]);
    new Set(D), Symbol("ResetLoaderData");
    var F = r.createContext(null);
    F.displayName = "DataRouter";
    var I = r.createContext(null);
    I.displayName = "DataRouterState";
    var j = r.createContext({ isTransitioning: !1 });
    (j.displayName = "ViewTransition"),
        (r.createContext(new Map()).displayName = "Fetchers"),
        (r.createContext(null).displayName = "Await");
    var U = r.createContext(null);
    U.displayName = "Navigation";
    var B = r.createContext(null);
    B.displayName = "Location";
    var q = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    q.displayName = "Route";
    var H = r.createContext(null);
    function W() {
        return null != r.useContext(B);
    }
    function V() {
        return (
            i(
                W(),
                "useLocation() may be used only in the context of a <Router> component.",
            ),
            r.useContext(B).location
        );
    }
    H.displayName = "RouteError";
    var Q =
        "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function K(e) {
        r.useContext(U).static || r.useLayoutEffect(e);
    }
    function Y() {
        let { isDataRoute: e } = r.useContext(q);
        return e
            ? (function () {
                  let { router: e } = (function (e) {
                          let t = r.useContext(F);
                          return i(t, ne(e)), t;
                      })("useNavigate"),
                      t = re("useNavigate"),
                      n = r.useRef(!1);
                  return (
                      K(() => {
                          n.current = !0;
                      }),
                      r.useCallback(
                          async (r, a = {}) => {
                              s(n.current, Q),
                                  n.current &&
                                      ("number" == typeof r
                                          ? e.navigate(r)
                                          : await e.navigate(r, {
                                                fromRouteId: t,
                                                ...a,
                                            }));
                          },
                          [e, t],
                      )
                  );
              })()
            : (function () {
                  i(
                      W(),
                      "useNavigate() may be used only in the context of a <Router> component.",
                  );
                  let e = r.useContext(F),
                      { basename: t, navigator: n } = r.useContext(U),
                      { matches: a } = r.useContext(q),
                      { pathname: o } = V(),
                      l = JSON.stringify(T(a)),
                      u = r.useRef(!1);
                  return (
                      K(() => {
                          u.current = !0;
                      }),
                      r.useCallback(
                          (r, a = {}) => {
                              if ((s(u.current, Q), !u.current)) return;
                              if ("number" == typeof r) return void n.go(r);
                              let i = N(
                                  r,
                                  JSON.parse(l),
                                  o,
                                  "path" === a.relative,
                              );
                              null == e &&
                                  "/" !== t &&
                                  (i.pathname =
                                      "/" === i.pathname
                                          ? t
                                          : R([t, i.pathname])),
                                  (a.replace ? n.replace : n.push)(
                                      i,
                                      a.state,
                                      a,
                                  );
                          },
                          [t, n, l, o, e],
                      )
                  );
              })();
    }
    function G(e, { relative: t } = {}) {
        let { matches: n } = r.useContext(q),
            { pathname: a } = V(),
            o = JSON.stringify(T(n));
        return r.useMemo(
            () => N(e, JSON.parse(o), a, "path" === t),
            [e, o, a, t],
        );
    }
    function X(e, t, n, a) {
        i(
            W(),
            "useRoutes() may be used only in the context of a <Router> component.",
        );
        let { navigator: o } = r.useContext(U),
            { matches: l } = r.useContext(q),
            u = l[l.length - 1],
            c = u ? u.params : {},
            d = u ? u.pathname : "/",
            h = u ? u.pathnameBase : "/",
            m = u && u.route;
        {
            let e = (m && m.path) || "";
            oe(
                d,
                !m || e.endsWith("*") || e.endsWith("*?"),
                `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${
                    "/" === e ? "*" : `${e}/*`
                }">.`,
            );
        }
        let g,
            b = V();
        if (t) {
            let e = "string" == typeof t ? p(t) : t;
            i(
                "/" === h || e.pathname?.startsWith(h),
                `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
            ),
                (g = e);
        } else g = b;
        let y = g.pathname || "/",
            w = y;
        if ("/" !== h) {
            let e = h.replace(/^\//, "").split("/");
            w = "/" + y.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let v = f(e, { pathname: w });
        s(
            m || null != v,
            `No routes matched location "${g.pathname}${g.search}${g.hash}" `,
        ),
            s(
                null == v ||
                    void 0 !== v[v.length - 1].route.element ||
                    void 0 !== v[v.length - 1].route.Component ||
                    void 0 !== v[v.length - 1].route.lazy,
                `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
            );
        let k = (function (e, t = [], n = null) {
            if (null == e) {
                if (!n) return null;
                if (n.errors) e = n.matches;
                else {
                    if (
                        0 !== t.length ||
                        n.initialized ||
                        !(n.matches.length > 0)
                    )
                        return null;
                    e = n.matches;
                }
            }
            let a = e,
                o = n?.errors;
            if (null != o) {
                let e = a.findIndex(
                    (e) => e.route.id && void 0 !== o?.[e.route.id],
                );
                i(
                    e >= 0,
                    `Could not find a matching route for errors on route IDs: ${Object.keys(
                        o,
                    ).join(",")}`,
                ),
                    (a = a.slice(0, Math.min(a.length, e + 1)));
            }
            let l = !1,
                s = -1;
            if (n)
                for (let e = 0; e < a.length; e++) {
                    let t = a[e];
                    if (
                        ((t.route.HydrateFallback ||
                            t.route.hydrateFallbackElement) &&
                            (s = e),
                        t.route.id)
                    ) {
                        let { loaderData: e, errors: r } = n,
                            o =
                                t.route.loader &&
                                !e.hasOwnProperty(t.route.id) &&
                                (!r || void 0 === r[t.route.id]);
                        if (t.route.lazy || o) {
                            (l = !0), (a = s >= 0 ? a.slice(0, s + 1) : [a[0]]);
                            break;
                        }
                    }
                }
            return a.reduceRight((e, i, u) => {
                let c,
                    d = !1,
                    p = null,
                    f = null;
                n &&
                    ((c = o && i.route.id ? o[i.route.id] : void 0),
                    (p = i.route.errorElement || J),
                    l &&
                        (s < 0 && 0 === u
                            ? (oe(
                                  "route-fallback",
                                  !1,
                                  "No `HydrateFallback` element provided to render during initial hydration",
                              ),
                              (d = !0),
                              (f = null))
                            : s === u &&
                              ((d = !0),
                              (f = i.route.hydrateFallbackElement || null))));
                let h = t.concat(a.slice(0, u + 1)),
                    m = () => {
                        let t;
                        return (
                            (t = c
                                ? p
                                : d
                                  ? f
                                  : i.route.Component
                                    ? r.createElement(i.route.Component, null)
                                    : i.route.element
                                      ? i.route.element
                                      : e),
                            r.createElement(te, {
                                match: i,
                                routeContext: {
                                    outlet: e,
                                    matches: h,
                                    isDataRoute: null != n,
                                },
                                children: t,
                            })
                        );
                    };
                return n &&
                    (i.route.ErrorBoundary || i.route.errorElement || 0 === u)
                    ? r.createElement(ee, {
                          location: n.location,
                          revalidation: n.revalidation,
                          component: p,
                          error: c,
                          children: m(),
                          routeContext: {
                              outlet: null,
                              matches: h,
                              isDataRoute: !0,
                          },
                      })
                    : m();
            }, null);
        })(
            v &&
                v.map((e) =>
                    Object.assign({}, e, {
                        params: Object.assign({}, c, e.params),
                        pathname: R([
                            h,
                            o.encodeLocation
                                ? o.encodeLocation(e.pathname).pathname
                                : e.pathname,
                        ]),
                        pathnameBase:
                            "/" === e.pathnameBase
                                ? h
                                : R([
                                      h,
                                      o.encodeLocation
                                          ? o.encodeLocation(e.pathnameBase)
                                                .pathname
                                          : e.pathnameBase,
                                  ]),
                    }),
                ),
            l,
            n,
            a,
        );
        return t && k
            ? r.createElement(
                  B.Provider,
                  {
                      value: {
                          location: {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                              ...g,
                          },
                          navigationType: "POP",
                      },
                  },
                  k,
              )
            : k;
    }
    function Z() {
        let e = (function () {
                let e = r.useContext(H),
                    t = (function (e) {
                        let t = r.useContext(I);
                        return i(t, ne(e)), t;
                    })("useRouteError"),
                    n = re("useRouteError");
                return void 0 !== e ? e : t.errors?.[n];
            })(),
            t = $(e)
                ? `${e.status} ${e.statusText}`
                : e instanceof Error
                  ? e.message
                  : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            a = "rgba(200,200,200, 0.5)",
            o = { padding: "0.5rem", backgroundColor: a },
            l = { padding: "2px 4px", backgroundColor: a },
            s = null;
        return (
            console.error(
                "Error handled by React Router default ErrorBoundary:",
                e,
            ),
            (s = r.createElement(
                r.Fragment,
                null,
                r.createElement("p", null, "💿 Hey developer 👋"),
                r.createElement(
                    "p",
                    null,
                    "You can provide a way better UX than this when your app throws errors by providing your own ",
                    r.createElement("code", { style: l }, "ErrorBoundary"),
                    " or",
                    " ",
                    r.createElement("code", { style: l }, "errorElement"),
                    " prop on your route.",
                ),
            )),
            r.createElement(
                r.Fragment,
                null,
                r.createElement("h2", null, "Unexpected Application Error!"),
                r.createElement("h3", { style: { fontStyle: "italic" } }, t),
                n ? r.createElement("pre", { style: o }, n) : null,
                s,
            )
        );
    }
    r.createContext(null);
    var J = r.createElement(Z, null),
        ee = class extends r.Component {
            constructor(e) {
                super(e),
                    (this.state = {
                        location: e.location,
                        revalidation: e.revalidation,
                        error: e.error,
                    });
            }
            static getDerivedStateFromError(e) {
                return { error: e };
            }
            static getDerivedStateFromProps(e, t) {
                return t.location !== e.location ||
                    ("idle" !== t.revalidation && "idle" === e.revalidation)
                    ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                      }
                    : {
                          error: void 0 !== e.error ? e.error : t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                      };
            }
            componentDidCatch(e, t) {
                console.error(
                    "React Router caught the following error during render",
                    e,
                    t,
                );
            }
            render() {
                return void 0 !== this.state.error
                    ? r.createElement(
                          q.Provider,
                          { value: this.props.routeContext },
                          r.createElement(H.Provider, {
                              value: this.state.error,
                              children: this.props.component,
                          }),
                      )
                    : this.props.children;
            }
        };
    function te({ routeContext: e, match: t, children: n }) {
        let a = r.useContext(F);
        return (
            a &&
                a.static &&
                a.staticContext &&
                (t.route.errorElement || t.route.ErrorBoundary) &&
                (a.staticContext._deepestRenderedBoundaryId = t.route.id),
            r.createElement(q.Provider, { value: e }, n)
        );
    }
    function ne(e) {
        return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function re(e) {
        let t = (function (e) {
                let t = r.useContext(q);
                return i(t, ne(e)), t;
            })(e),
            n = t.matches[t.matches.length - 1];
        return (
            i(
                n.route.id,
                `${e} can only be used on routes that contain a unique "id"`,
            ),
            n.route.id
        );
    }
    var ae = {};
    function oe(e, t, n) {
        t || ae[e] || ((ae[e] = !0), s(!1, n));
    }
    function le(e) {
        i(
            !1,
            "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
        );
    }
    function ie({
        basename: e = "/",
        children: t = null,
        location: n,
        navigationType: a = "POP",
        navigator: o,
        static: l = !1,
    }) {
        i(
            !W(),
            "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
        );
        let u = e.replace(/^\/*/, "/"),
            c = r.useMemo(
                () => ({ basename: u, navigator: o, static: l, future: {} }),
                [u, o, l],
            );
        "string" == typeof n && (n = p(n));
        let {
                pathname: d = "/",
                search: f = "",
                hash: h = "",
                state: m = null,
                key: g = "default",
            } = n,
            b = r.useMemo(() => {
                let e = _(d, u);
                return null == e
                    ? null
                    : {
                          location: {
                              pathname: e,
                              search: f,
                              hash: h,
                              state: m,
                              key: g,
                          },
                          navigationType: a,
                      };
            }, [u, d, f, h, m, g, a]);
        return (
            s(
                null != b,
                `<Router basename="${u}"> is not able to match the URL "${d}${f}${h}" because it does not start with the basename, so the <Router> won't render anything.`,
            ),
            null == b
                ? null
                : r.createElement(
                      U.Provider,
                      { value: c },
                      r.createElement(B.Provider, { children: t, value: b }),
                  )
        );
    }
    function se({ children: e, location: t }) {
        return X(ue(e), t);
    }
    function ue(e, t = []) {
        let n = [];
        return (
            r.Children.forEach(e, (e, a) => {
                if (!r.isValidElement(e)) return;
                let o = [...t, a];
                if (e.type === r.Fragment)
                    return void n.push.apply(n, ue(e.props.children, o));
                i(
                    e.type === le,
                    `[${
                        "string" == typeof e.type ? e.type : e.type.name
                    }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
                ),
                    i(
                        !e.props.index || !e.props.children,
                        "An index route cannot have child routes.",
                    );
                let l = {
                    id: e.props.id || o.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    hydrateFallbackElement: e.props.hydrateFallbackElement,
                    HydrateFallback: e.props.HydrateFallback,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary:
                        !0 === e.props.hasErrorBoundary ||
                        null != e.props.ErrorBoundary ||
                        null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy,
                };
                e.props.children && (l.children = ue(e.props.children, o)),
                    n.push(l);
            }),
            n
        );
    }
    r.memo(function ({ routes: e, future: t, state: n }) {
        return X(e, void 0, n, t);
    }),
        r.Component;
    var ce = "get",
        de = "application/x-www-form-urlencoded";
    function pe(e) {
        return null != e && "string" == typeof e.tagName;
    }
    var fe = null,
        he = new Set([
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/plain",
        ]);
    function me(e) {
        return null == e || he.has(e)
            ? e
            : (s(
                  !1,
                  `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${de}"`,
              ),
              null);
    }
    function ge(e, t) {
        if (!1 === e || null == e) throw new Error(t);
    }
    function be(e) {
        return (
            null != e &&
            (null == e.href
                ? "preload" === e.rel &&
                  "string" == typeof e.imageSrcSet &&
                  "string" == typeof e.imageSizes
                : "string" == typeof e.rel && "string" == typeof e.href)
        );
    }
    function ye(e, t, n, r, a, o) {
        let l = (e, t) => !n[t] || e.route.id !== n[t].route.id,
            i = (e, t) =>
                n[t].pathname !== e.pathname ||
                (n[t].route.path?.endsWith("*") &&
                    n[t].params["*"] !== e.params["*"]);
        return "assets" === o
            ? t.filter((e, t) => l(e, t) || i(e, t))
            : "data" === o
              ? t.filter((t, o) => {
                    let s = r.routes[t.route.id];
                    if (!s || !s.hasLoader) return !1;
                    if (l(t, o) || i(t, o)) return !0;
                    if (t.route.shouldRevalidate) {
                        let r = t.route.shouldRevalidate({
                            currentUrl: new URL(
                                a.pathname + a.search + a.hash,
                                window.origin,
                            ),
                            currentParams: n[0]?.params || {},
                            nextUrl: new URL(e, window.origin),
                            nextParams: t.params,
                            defaultShouldRevalidate: !0,
                        });
                        if ("boolean" == typeof r) return r;
                    }
                    return !0;
                })
              : [];
    }
    function we() {
        let e = r.useContext(F);
        return (
            ge(
                e,
                "You must render this element inside a <DataRouterContext.Provider> element",
            ),
            e
        );
    }
    function ve() {
        let e = r.useContext(I);
        return (
            ge(
                e,
                "You must render this element inside a <DataRouterStateContext.Provider> element",
            ),
            e
        );
    }
    Symbol("SingleFetchRedirect"), r.Component;
    var ke = r.createContext(void 0);
    function xe() {
        let e = r.useContext(ke);
        return (
            ge(
                e,
                "You must render this element inside a <HydratedRouter> element",
            ),
            e
        );
    }
    function Se(e, t) {
        return (n) => {
            e && e(n), n.defaultPrevented || t(n);
        };
    }
    function Ee({ page: e, ...t }) {
        let { router: n } = we(),
            a = r.useMemo(
                () => f(n.routes, e, n.basename),
                [n.routes, e, n.basename],
            );
        return a ? r.createElement(ze, { page: e, matches: a, ...t }) : null;
    }
    function Ce(e) {
        let { manifest: t, routeModules: n } = xe(),
            [a, o] = r.useState([]);
        return (
            r.useEffect(() => {
                let r = !1;
                return (
                    (async function (e, t, n) {
                        return (function (e, t) {
                            let n = new Set(),
                                r = new Set(t);
                            return e.reduce((e, a) => {
                                if (
                                    t &&
                                    (null == (o = a) ||
                                        "string" != typeof o.page) &&
                                    "script" === a.as &&
                                    a.href &&
                                    r.has(a.href)
                                )
                                    return e;
                                var o;
                                let l = JSON.stringify(
                                    (function (e) {
                                        let t = {},
                                            n = Object.keys(e).sort();
                                        for (let r of n) t[r] = e[r];
                                        return t;
                                    })(a),
                                );
                                return (
                                    n.has(l) ||
                                        (n.add(l), e.push({ key: l, link: a })),
                                    e
                                );
                            }, []);
                        })(
                            (
                                await Promise.all(
                                    e.map(async (e) => {
                                        let r = t.routes[e.route.id];
                                        if (r) {
                                            let e = await (async function (
                                                e,
                                                t,
                                            ) {
                                                if (e.id in t) return t[e.id];
                                                try {
                                                    let n = await import(
                                                        e.module
                                                    );
                                                    return (t[e.id] = n), n;
                                                } catch (t) {
                                                    return (
                                                        console.error(
                                                            `Error loading route module \`${e.module}\`, reloading page...`,
                                                        ),
                                                        console.error(t),
                                                        window.__reactRouterContext &&
                                                            window
                                                                .__reactRouterContext
                                                                .isSpaMode,
                                                        window.location.reload(),
                                                        new Promise(() => {})
                                                    );
                                                }
                                            })(r, n);
                                            return e.links ? e.links() : [];
                                        }
                                        return [];
                                    }),
                                )
                            )
                                .flat(1)
                                .filter(be)
                                .filter(
                                    (e) =>
                                        "stylesheet" === e.rel ||
                                        "preload" === e.rel,
                                )
                                .map((e) =>
                                    "stylesheet" === e.rel
                                        ? { ...e, rel: "prefetch", as: "style" }
                                        : { ...e, rel: "prefetch" },
                                ),
                        );
                    })(e, t, n).then((e) => {
                        r || o(e);
                    }),
                    () => {
                        r = !0;
                    }
                );
            }, [e, t, n]),
            a
        );
    }
    function ze({ page: e, matches: t, ...n }) {
        let a = V(),
            { manifest: o, routeModules: l } = xe(),
            { loaderData: i, matches: s } = ve(),
            u = r.useMemo(() => ye(e, t, s, o, a, "data"), [e, t, s, o, a]),
            c = r.useMemo(() => ye(e, t, s, o, a, "assets"), [e, t, s, o, a]),
            d = r.useMemo(() => {
                if (e === a.pathname + a.search + a.hash) return [];
                let n = new Set(),
                    r = !1;
                if (
                    (t.forEach((e) => {
                        let t = o.routes[e.route.id];
                        t &&
                            t.hasLoader &&
                            ((!u.some((t) => t.route.id === e.route.id) &&
                                e.route.id in i &&
                                l[e.route.id]?.shouldRevalidate) ||
                            t.hasClientLoader
                                ? (r = !0)
                                : n.add(e.route.id));
                    }),
                    0 === n.size)
                )
                    return [];
                let s = (function (e) {
                    let t =
                        "string" == typeof e
                            ? new URL(
                                  e,
                                  "undefined" == typeof window
                                      ? "server://singlefetch/"
                                      : window.location.origin,
                              )
                            : e;
                    return (
                        "/" === t.pathname
                            ? (t.pathname = "_root.data")
                            : (t.pathname = `${t.pathname.replace(
                                  /\/$/,
                                  "",
                              )}.data`),
                        t
                    );
                })(e);
                return (
                    r &&
                        n.size > 0 &&
                        s.searchParams.set(
                            "_routes",
                            t
                                .filter((e) => n.has(e.route.id))
                                .map((e) => e.route.id)
                                .join(","),
                        ),
                    [s.pathname + s.search]
                );
            }, [i, a, o, u, t, e, l]),
            p = r.useMemo(
                () =>
                    (function (e, t) {
                        return (
                            (n = e
                                .map((e) => {
                                    let n = t.routes[e.route.id];
                                    if (!n) return [];
                                    let r = [n.module];
                                    return (
                                        n.imports && (r = r.concat(n.imports)),
                                        r
                                    );
                                })
                                .flat(1)),
                            [...new Set(n)]
                        );
                        var n;
                    })(c, o),
                [c, o],
            ),
            f = Ce(c);
        return r.createElement(
            r.Fragment,
            null,
            d.map((e) =>
                r.createElement("link", {
                    key: e,
                    rel: "prefetch",
                    as: "fetch",
                    href: e,
                    ...n,
                }),
            ),
            p.map((e) =>
                r.createElement("link", {
                    key: e,
                    rel: "modulepreload",
                    href: e,
                    ...n,
                }),
            ),
            f.map(({ key: e, link: t }) =>
                r.createElement("link", { key: e, ...t }),
            ),
        );
    }
    ke.displayName = "FrameworkContext";
    function _e(...e) {
        return (t) => {
            e.forEach((e) => {
                "function" == typeof e ? e(t) : null != e && (e.current = t);
            });
        };
    }
    var Pe =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement;
    try {
        Pe && (window.__reactRouterVersion = "7.1.1");
    } catch (e) {}
    function Te({ basename: e, children: t, window: n }) {
        let a = r.useRef();
        null == a.current && (a.current = l({ window: n, v5Compat: !0 }));
        let o = a.current,
            [i, s] = r.useState({ action: o.action, location: o.location }),
            u = r.useCallback(
                (e) => {
                    r.startTransition(() => s(e));
                },
                [s],
            );
        return (
            r.useLayoutEffect(() => o.listen(u), [o, u]),
            r.createElement(ie, {
                basename: e,
                children: t,
                location: i.location,
                navigationType: i.action,
                navigator: o,
            })
        );
    }
    var Ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Re = r.forwardRef(function (
            {
                onClick: e,
                discover: t = "render",
                prefetch: n = "none",
                relative: a,
                reloadDocument: o,
                replace: l,
                state: u,
                target: c,
                to: p,
                preventScrollReset: f,
                viewTransition: h,
                ...m
            },
            g,
        ) {
            let b,
                { basename: y } = r.useContext(U),
                w = "string" == typeof p && Ne.test(p),
                v = !1;
            if ("string" == typeof p && w && ((b = p), Pe))
                try {
                    let e = new URL(window.location.href),
                        t = p.startsWith("//")
                            ? new URL(e.protocol + p)
                            : new URL(p),
                        n = _(t.pathname, y);
                    t.origin === e.origin && null != n
                        ? (p = n + t.search + t.hash)
                        : (v = !0);
                } catch (e) {
                    s(
                        !1,
                        `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
                    );
                }
            let k = (function (e, { relative: t } = {}) {
                    i(
                        W(),
                        "useHref() may be used only in the context of a <Router> component.",
                    );
                    let { basename: n, navigator: a } = r.useContext(U),
                        {
                            hash: o,
                            pathname: l,
                            search: s,
                        } = G(e, { relative: t }),
                        u = l;
                    return (
                        "/" !== n && (u = "/" === l ? n : R([n, l])),
                        a.createHref({ pathname: u, search: s, hash: o })
                    );
                })(p, { relative: a }),
                [x, S, E] = (function (e, t) {
                    let n = r.useContext(ke),
                        [a, o] = r.useState(!1),
                        [l, i] = r.useState(!1),
                        {
                            onFocus: s,
                            onBlur: u,
                            onMouseEnter: c,
                            onMouseLeave: d,
                            onTouchStart: p,
                        } = t,
                        f = r.useRef(null);
                    r.useEffect(() => {
                        if (("render" === e && i(!0), "viewport" === e)) {
                            let e = new IntersectionObserver(
                                (e) => {
                                    e.forEach((e) => {
                                        i(e.isIntersecting);
                                    });
                                },
                                { threshold: 0.5 },
                            );
                            return (
                                f.current && e.observe(f.current),
                                () => {
                                    e.disconnect();
                                }
                            );
                        }
                    }, [e]),
                        r.useEffect(() => {
                            if (a) {
                                let e = setTimeout(() => {
                                    i(!0);
                                }, 100);
                                return () => {
                                    clearTimeout(e);
                                };
                            }
                        }, [a]);
                    let h = () => {
                            o(!0);
                        },
                        m = () => {
                            o(!1), i(!1);
                        };
                    return n
                        ? "intent" !== e
                            ? [l, f, {}]
                            : [
                                  l,
                                  f,
                                  {
                                      onFocus: Se(s, h),
                                      onBlur: Se(u, m),
                                      onMouseEnter: Se(c, h),
                                      onMouseLeave: Se(d, m),
                                      onTouchStart: Se(p, h),
                                  },
                              ]
                        : [!1, f, {}];
                })(n, m),
                C = (function (
                    e,
                    {
                        target: t,
                        replace: n,
                        state: a,
                        preventScrollReset: o,
                        relative: l,
                        viewTransition: i,
                    } = {},
                ) {
                    let s = Y(),
                        u = V(),
                        c = G(e, { relative: l });
                    return r.useCallback(
                        (r) => {
                            if (
                                (function (e, t) {
                                    return !(
                                        0 !== e.button ||
                                        (t && "_self" !== t) ||
                                        (function (e) {
                                            return !!(
                                                e.metaKey ||
                                                e.altKey ||
                                                e.ctrlKey ||
                                                e.shiftKey
                                            );
                                        })(e)
                                    );
                                })(r, t)
                            ) {
                                r.preventDefault();
                                let t = void 0 !== n ? n : d(u) === d(c);
                                s(e, {
                                    replace: t,
                                    state: a,
                                    preventScrollReset: o,
                                    relative: l,
                                    viewTransition: i,
                                });
                            }
                        },
                        [u, s, c, n, a, t, e, o, l, i],
                    );
                })(p, {
                    replace: l,
                    state: u,
                    target: c,
                    preventScrollReset: f,
                    relative: a,
                    viewTransition: h,
                }),
                z = r.createElement("a", {
                    ...m,
                    ...E,
                    href: b || k,
                    onClick:
                        v || o
                            ? e
                            : function (t) {
                                  e && e(t), t.defaultPrevented || C(t);
                              },
                    ref: _e(g, S),
                    target: c,
                    "data-discover": w || "render" !== t ? void 0 : "true",
                });
            return x && !w
                ? r.createElement(
                      r.Fragment,
                      null,
                      z,
                      r.createElement(Ee, { page: k }),
                  )
                : z;
        });
    function Le(e) {
        let t = r.useContext(F);
        return (
            i(
                t,
                (function (e) {
                    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
                })(e),
            ),
            t
        );
    }
    (Re.displayName = "Link"),
        (r.forwardRef(function (
            {
                "aria-current": e = "page",
                caseSensitive: t = !1,
                className: n = "",
                end: a = !1,
                style: o,
                to: l,
                viewTransition: s,
                children: u,
                ...c
            },
            d,
        ) {
            let p = G(l, { relative: c.relative }),
                f = V(),
                h = r.useContext(I),
                { navigator: m, basename: g } = r.useContext(U),
                b =
                    null != h &&
                    (function (e, t = {}) {
                        let n = r.useContext(j);
                        i(
                            null != n,
                            "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
                        );
                        let { basename: a } = Le("useViewTransitionState"),
                            o = G(e, { relative: t.relative });
                        if (!n.isTransitioning) return !1;
                        let l =
                                _(n.currentLocation.pathname, a) ||
                                n.currentLocation.pathname,
                            s =
                                _(n.nextLocation.pathname, a) ||
                                n.nextLocation.pathname;
                        return (
                            null != C(o.pathname, s) || null != C(o.pathname, l)
                        );
                    })(p) &&
                    !0 === s,
                y = m.encodeLocation
                    ? m.encodeLocation(p).pathname
                    : p.pathname,
                w = f.pathname,
                v =
                    h && h.navigation && h.navigation.location
                        ? h.navigation.location.pathname
                        : null;
            t ||
                ((w = w.toLowerCase()),
                (v = v ? v.toLowerCase() : null),
                (y = y.toLowerCase())),
                v && g && (v = _(v, g) || v);
            const k = "/" !== y && y.endsWith("/") ? y.length - 1 : y.length;
            let x,
                S = w === y || (!a && w.startsWith(y) && "/" === w.charAt(k)),
                E =
                    null != v &&
                    (v === y ||
                        (!a && v.startsWith(y) && "/" === v.charAt(y.length))),
                z = { isActive: S, isPending: E, isTransitioning: b },
                P = S ? e : void 0;
            x =
                "function" == typeof n
                    ? n(z)
                    : [
                          n,
                          S ? "active" : null,
                          E ? "pending" : null,
                          b ? "transitioning" : null,
                      ]
                          .filter(Boolean)
                          .join(" ");
            let T = "function" == typeof o ? o(z) : o;
            return r.createElement(
                Re,
                {
                    ...c,
                    "aria-current": P,
                    className: x,
                    ref: d,
                    style: T,
                    to: l,
                    viewTransition: s,
                },
                "function" == typeof u ? u(z) : u,
            );
        }).displayName = "NavLink"),
        (r.forwardRef(
            (
                {
                    discover: e = "render",
                    fetcherKey: t,
                    navigate: n,
                    reloadDocument: a,
                    replace: o,
                    state: l,
                    method: s = ce,
                    action: u,
                    onSubmit: c,
                    relative: p,
                    preventScrollReset: f,
                    viewTransition: h,
                    ...m
                },
                g,
            ) => {
                let b = (function () {
                        let { router: e } = Le("useSubmit"),
                            { basename: t } = r.useContext(U),
                            n = re("useRouteId");
                        return r.useCallback(
                            async (r, a = {}) => {
                                let {
                                    action: o,
                                    method: l,
                                    encType: i,
                                    formData: s,
                                    body: u,
                                } = (function (e, t) {
                                    let n, r, a, o, l;
                                    if (
                                        pe((i = e)) &&
                                        "form" === i.tagName.toLowerCase()
                                    ) {
                                        let l = e.getAttribute("action");
                                        (r = l ? _(l, t) : null),
                                            (n =
                                                e.getAttribute("method") || ce),
                                            (a =
                                                me(e.getAttribute("enctype")) ||
                                                de),
                                            (o = new FormData(e));
                                    } else if (
                                        (function (e) {
                                            return (
                                                pe(e) &&
                                                "button" ===
                                                    e.tagName.toLowerCase()
                                            );
                                        })(e) ||
                                        ((function (e) {
                                            return (
                                                pe(e) &&
                                                "input" ===
                                                    e.tagName.toLowerCase()
                                            );
                                        })(e) &&
                                            ("submit" === e.type ||
                                                "image" === e.type))
                                    ) {
                                        let l = e.form;
                                        if (null == l)
                                            throw new Error(
                                                'Cannot submit a <button> or <input type="submit"> without a <form>',
                                            );
                                        let i =
                                            e.getAttribute("formaction") ||
                                            l.getAttribute("action");
                                        if (
                                            ((r = i ? _(i, t) : null),
                                            (n =
                                                e.getAttribute("formmethod") ||
                                                l.getAttribute("method") ||
                                                ce),
                                            (a =
                                                me(
                                                    e.getAttribute(
                                                        "formenctype",
                                                    ),
                                                ) ||
                                                me(l.getAttribute("enctype")) ||
                                                de),
                                            (o = new FormData(l, e)),
                                            !(function () {
                                                if (null === fe)
                                                    try {
                                                        new FormData(
                                                            document.createElement(
                                                                "form",
                                                            ),
                                                            0,
                                                        ),
                                                            (fe = !1);
                                                    } catch (e) {
                                                        fe = !0;
                                                    }
                                                return fe;
                                            })())
                                        ) {
                                            let {
                                                name: t,
                                                type: n,
                                                value: r,
                                            } = e;
                                            if ("image" === n) {
                                                let e = t ? `${t}.` : "";
                                                o.append(`${e}x`, "0"),
                                                    o.append(`${e}y`, "0");
                                            } else t && o.append(t, r);
                                        }
                                    } else {
                                        if (pe(e))
                                            throw new Error(
                                                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
                                            );
                                        (n = ce), (r = null), (a = de), (l = e);
                                    }
                                    var i;
                                    return (
                                        o &&
                                            "text/plain" === a &&
                                            ((l = o), (o = void 0)),
                                        {
                                            action: r,
                                            method: n.toLowerCase(),
                                            encType: a,
                                            formData: o,
                                            body: l,
                                        }
                                    );
                                })(r, t);
                                if (!1 === a.navigate) {
                                    let t = a.fetcherKey || Oe();
                                    await e.fetch(t, n, a.action || o, {
                                        preventScrollReset:
                                            a.preventScrollReset,
                                        formData: s,
                                        body: u,
                                        formMethod: a.method || l,
                                        formEncType: a.encType || i,
                                        flushSync: a.flushSync,
                                    });
                                } else
                                    await e.navigate(a.action || o, {
                                        preventScrollReset:
                                            a.preventScrollReset,
                                        formData: s,
                                        body: u,
                                        formMethod: a.method || l,
                                        formEncType: a.encType || i,
                                        replace: a.replace,
                                        state: a.state,
                                        fromRouteId: n,
                                        flushSync: a.flushSync,
                                        viewTransition: a.viewTransition,
                                    });
                            },
                            [e, t, n],
                        );
                    })(),
                    y = (function (e, { relative: t } = {}) {
                        let { basename: n } = r.useContext(U),
                            a = r.useContext(q);
                        i(
                            a,
                            "useFormAction must be used inside a RouteContext",
                        );
                        let [o] = a.matches.slice(-1),
                            l = { ...G(e || ".", { relative: t }) },
                            s = V();
                        if (null == e) {
                            l.search = s.search;
                            let e = new URLSearchParams(l.search),
                                t = e.getAll("index");
                            if (t.some((e) => "" === e)) {
                                e.delete("index"),
                                    t
                                        .filter((e) => e)
                                        .forEach((t) => e.append("index", t));
                                let n = e.toString();
                                l.search = n ? `?${n}` : "";
                            }
                        }
                        return (
                            (e && "." !== e) ||
                                !o.route.index ||
                                (l.search = l.search
                                    ? l.search.replace(/^\?/, "?index&")
                                    : "?index"),
                            "/" !== n &&
                                (l.pathname =
                                    "/" === l.pathname
                                        ? n
                                        : R([n, l.pathname])),
                            d(l)
                        );
                    })(u, { relative: p }),
                    w = "get" === s.toLowerCase() ? "get" : "post",
                    v = "string" == typeof u && Ne.test(u);
                return r.createElement("form", {
                    ref: g,
                    method: w,
                    action: y,
                    onSubmit: a
                        ? c
                        : (e) => {
                              if ((c && c(e), e.defaultPrevented)) return;
                              e.preventDefault();
                              let r = e.nativeEvent.submitter,
                                  a = r?.getAttribute("formmethod") || s;
                              b(r || e.currentTarget, {
                                  fetcherKey: t,
                                  method: a,
                                  navigate: n,
                                  replace: o,
                                  state: l,
                                  relative: p,
                                  preventScrollReset: f,
                                  viewTransition: h,
                              });
                          },
                    ...m,
                    "data-discover": v || "render" !== e ? void 0 : "true",
                });
            },
        ).displayName = "Form");
    var Ae = 0,
        Oe = () => `__${String(++Ae)}__`;
    new TextEncoder();
    const $e = ({ onSubmit: e }) => {
            const [t, n] = (0, r.useState)(""),
                a = (0, r.useRef)(null);
            (0, r.useEffect)(() => {
                o();
            }, [t]);
            const o = () => {
                const e = a.current;
                (e.style.height = "auto"),
                    (e.style.height = `${e.scrollHeight}px`);
            };
            return r.createElement("textarea", {
                ref: a,
                value: t,
                onChange: (e) => n(e.target.value),
                onKeyDown: (r) => {
                    "Enter" !== r.key ||
                        r.shiftKey ||
                        (r.preventDefault(), e(t), n(""));
                },
                className:
                    "initial-input w-full min-h-[40px] max-h-[300px] p-2 border rounded-xl resize-none overflow-hidden overflow-y-scroll",
                placeholder: "Type your message...",
            });
        },
        Me = ({ message: e }) =>
            r.createElement(
                "div",
                { className: "mb-1 mt-1" },
                r.createElement(
                    "div",
                    {
                        className:
                            "message-container-user relative rounded-xl inline-block ml-px pl-2.5 py-2.5 break-words max-w-[75ch] flex-col pr-6",
                    },
                    r.createElement(
                        "p",
                        { className: "whitespace-pre-wrap break-words" },
                        e,
                    ),
                ),
            ),
        De = (0, r.createContext)({
            openArtifact: null,
            setOpenArtifact: () => {},
        }),
        Fe = (...e) =>
            e
                .filter(
                    (e, t, n) =>
                        Boolean(e) && "" !== e.trim() && n.indexOf(e) === t,
                )
                .join(" ")
                .trim();
    var Ie = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };
    const je = (0, r.forwardRef)(
            (
                {
                    color: e = "currentColor",
                    size: t = 24,
                    strokeWidth: n = 2,
                    absoluteStrokeWidth: a,
                    className: o = "",
                    children: l,
                    iconNode: i,
                    ...s
                },
                u,
            ) =>
                (0, r.createElement)(
                    "svg",
                    {
                        ref: u,
                        ...Ie,
                        width: t,
                        height: t,
                        stroke: e,
                        strokeWidth: a ? (24 * Number(n)) / Number(t) : n,
                        className: Fe("lucide", o),
                        ...s,
                    },
                    [
                        ...i.map(([e, t]) => (0, r.createElement)(e, t)),
                        ...(Array.isArray(l) ? l : [l]),
                    ],
                ),
        ),
        Ue = (e, t) => {
            const n = (0, r.forwardRef)(({ className: n, ...a }, o) => {
                return (0, r.createElement)(je, {
                    ref: o,
                    iconNode: t,
                    className: Fe(
                        `lucide-${
                            ((l = e),
                            l
                                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                                .toLowerCase())
                        }`,
                        n,
                    ),
                    ...a,
                });
                var l;
            });
            return (n.displayName = `${e}`), n;
        },
        Be = Ue("ExternalLink", [
            ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
            ["path", { d: "M10 14 21 3", key: "gplh6r" }],
            [
                "path",
                {
                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                    key: "a6xqqp",
                },
            ],
        ]),
        qe = ({ artifact: e, onOpen: t }) =>
            r.createElement(
                "div",
                { className: "flex items-center gap-2 my-2" },
                r.createElement(
                    "button",
                    {
                        onClick: t,
                        className:
                            "artifact-button inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm",
                    },
                    r.createElement(Be, { size: 16 }),
                    r.createElement(
                        "span",
                        null,
                        "Open",
                        " ",
                        "application/vnd.ant.code" === e.type
                            ? "code"
                            : "artifact",
                        ": ",
                        e.title,
                    ),
                ),
            ),
        He = ({ artifact: e }) => {
            const { setOpenArtifact: t } = (0, r.useContext)(De);
            return r.createElement(
                r.Fragment,
                null,
                r.createElement(qe, { artifact: e, onOpen: () => t(e) }),
            );
        },
        We = ({ content: e }) => {
            const t = r.useMemo(
                () =>
                    ((e) => {
                        if (!e) return [{ type: "text", content: "" }];
                        const t = [];
                        let n = 0;
                        const r =
                            /<chatArtifact\s+([^>]*)>([\s\S]*?)<\/chatArtifact>/g;
                        try {
                            const a = String(e),
                                o = Array.from(a.matchAll(r));
                            if (!o.length)
                                return [{ type: "text", content: a }];
                            for (const e of o) {
                                const [r, o, l] = e,
                                    i = e.index;
                                if (i > n) {
                                    const e = a.slice(n, i);
                                    e.trim() &&
                                        t.push({ type: "text", content: e });
                                }
                                const s = {},
                                    u = /(\w+)="([^"]*)"/g;
                                let c;
                                for (; null !== (c = u.exec(o)); )
                                    s[c[1]] = c[2];
                                t.push({
                                    type: "artifact",
                                    attributes: s,
                                    content: l?.trim() || "",
                                }),
                                    (n = i + r.length);
                            }
                            if (n < a.length) {
                                const e = a.slice(n);
                                e.trim() &&
                                    t.push({ type: "text", content: e });
                            }
                            return console.log("Parsed parts:", t), t;
                        } catch (t) {
                            return (
                                console.error("Error parsing message:", t),
                                [{ type: "text", content: String(e) }]
                            );
                        }
                    })(e),
                [e],
            );
            return r.createElement(
                "div",
                { className: "message-content" },
                t.map((e, t) =>
                    "artifact" === e.type
                        ? r.createElement(He, {
                              key: `artifact-${t}`,
                              artifact: {
                                  identifier: e.attributes?.identifier,
                                  type: e.attributes?.type,
                                  title: e.attributes?.title,
                                  content: e.content,
                              },
                          })
                        : r.createElement(
                              "span",
                              {
                                  key: `text-${t}`,
                                  style: { whiteSpace: "pre-wrap" },
                              },
                              e.content,
                          ),
                ),
            );
        },
        Ve = ({ message: e }) =>
            r.createElement(
                "div",
                { className: "mb-1 mt-1" },
                r.createElement(
                    "div",
                    {
                        className:
                            "message-container-bot relative rounded-xl ml-px pl-2.5 py-2.5 break-words max-w-[75ch] flex-col pr-6",
                    },
                    r.createElement(We, { content: e }),
                ),
            ),
        Qe = () => {
            const [e, t] = (0, r.useState)([]),
                n = Y();
            (0, r.useEffect)(() => {
                a();
            }, []);
            const a = async () => {
                const e = await fetch("/app/api/threads/"),
                    n = await e.json();
                t(n);
            };
            return r.createElement(
                "div",
                { className: "thread-list w-full" },
                e.map((e) =>
                    r.createElement(
                        "div",
                        {
                            className:
                                "space-y-2 mt-4 hover:bg-black rounded-xl px-3 py-2 w-full",
                            onClick: () =>
                                ((e) => {
                                    n(`/t/${e.id}`);
                                })(e),
                        },
                        r.createElement(
                            "div",
                            { className: "flex items-center space-x-3 w-full" },
                            r.createElement(
                                "span",
                                { className: "truncate min-w-0" },
                                e.title,
                            ),
                        ),
                        r.createElement(
                            "small",
                            null,
                            new Date(e.last_message_at).toLocaleString(),
                        ),
                    ),
                ),
            );
        },
        Ke = () => {
            const [e, t] = (0, r.useState)(!1),
                [n, a] = (0, r.useState)(!1),
                o = e || n ? "w-72" : "w-16",
                l = e ? "opacity-100" : n ? "opacity-50" : "opacity-0";
            return r.createElement(
                "nav",
                {
                    className: `fixed left-0 top-0 h-screen shadow-lg transition-all duration-300 backdrop-blur rounded-xl z-50 ${o}`,
                    onMouseEnter: () => a(!0),
                    onMouseLeave: () => a(!1),
                },
                r.createElement(
                    "div",
                    {
                        className: `h-full flex flex-col ${o} p-4 gap-6 overflow-hidden`,
                    },
                    r.createElement(
                        "div",
                        { className: "flex items-center h-12 min-w-max" },
                        r.createElement(
                            "span",
                            { className: "font-medium" },
                            "Chats",
                        ),
                    ),
                    r.createElement(
                        "div",
                        {
                            className: `transition-opacity duration-300 h-12 min-w-max ${l}`,
                        },
                        r.createElement(
                            "a",
                            {
                                href: "/",
                                className:
                                    "flex items-center rounded-xl hover:bg-black px-4 py-2",
                            },
                            "Start a new chat",
                        ),
                    ),
                    r.createElement(
                        "div",
                        {
                            className: `transition-opacity overflow-y-scroll duration-300 min-w-0 w-full ${l}`,
                        },
                        r.createElement(Qe, null),
                    ),
                ),
            );
        },
        Ye = Ue("Copy", [
            [
                "rect",
                {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2",
                    key: "17jyea",
                },
            ],
            [
                "path",
                {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                    key: "zix9uf",
                },
            ],
        ]),
        Ge = Ue("X", [
            ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
            ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        Xe = ({ content: e }) =>
            r.createElement(
                "pre",
                {
                    className:
                        "sidepanel-code-renderer p-4 rounded-md overflow-x-auto",
                },
                r.createElement("code", null, e),
            );
    let Ze = {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
    };
    function Je(e) {
        Ze = e;
    }
    const et = { exec: () => null };
    function tt(e, t = "") {
        let n = "string" == typeof e ? e : e.source;
        const r = {
            replace: (e, t) => {
                let a = "string" == typeof t ? t : t.source;
                return (
                    (a = a.replace(nt.caret, "$1")), (n = n.replace(e, a)), r
                );
            },
            getRegex: () => new RegExp(n, t),
        };
        return r;
    }
    const nt = {
            codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
            outputLinkReplace: /\\([\[\]])/g,
            indentCodeCompensation: /^(\s+)(?:```)/,
            beginningSpace: /^\s+/,
            endingHash: /#$/,
            startingSpaceChar: /^ /,
            endingSpaceChar: / $/,
            nonSpaceChar: /[^ ]/,
            newLineCharGlobal: /\n/g,
            tabCharGlobal: /\t/g,
            multipleSpaceGlobal: /\s+/g,
            blankLine: /^[ \t]*$/,
            doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
            blockquoteStart: /^ {0,3}>/,
            blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
            blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
            listReplaceTabs: /^\t+/,
            listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
            listIsTask: /^\[[ xX]\] /,
            listReplaceTask: /^\[[ xX]\] +/,
            anyLine: /\n.*\n/,
            hrefBrackets: /^<(.*)>$/,
            tableDelimiter: /[:|]/,
            tableAlignChars: /^\||\| *$/g,
            tableRowBlankLine: /\n[ \t]*$/,
            tableAlignRight: /^ *-+: *$/,
            tableAlignCenter: /^ *:-+: *$/,
            tableAlignLeft: /^ *:-+ *$/,
            startATag: /^<a /i,
            endATag: /^<\/a>/i,
            startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
            endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
            startAngleBracket: /^</,
            endAngleBracket: />$/,
            pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
            unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
            escapeTest: /[&<>"']/,
            escapeReplace: /[&<>"']/g,
            escapeTestNoEncode:
                /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
            escapeReplaceNoEncode:
                /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
            unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
            caret: /(^|[^\[])\^/g,
            percentDecode: /%25/g,
            findPipe: /\|/g,
            splitPipe: / \|/,
            slashPipe: /\\\|/g,
            carriageReturn: /\r\n|\r/g,
            spaceLine: /^ +$/gm,
            notSpaceStart: /^\S*/,
            endingNewline: /\n$/,
            listItemRegex: (e) =>
                new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),
            nextBulletRegex: (e) =>
                new RegExp(
                    `^ {0,${Math.min(
                        3,
                        e - 1,
                    )}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`,
                ),
            hrRegex: (e) =>
                new RegExp(
                    `^ {0,${Math.min(
                        3,
                        e - 1,
                    )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
                ),
            fencesBeginRegex: (e) =>
                new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
            headingBeginRegex: (e) =>
                new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
            htmlBeginRegex: (e) =>
                new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
        },
        rt =
            /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        at = /(?:[*+-]|\d{1,9}[.)])/,
        ot = tt(
            /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        )
            .replace(/bull/g, at)
            .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
            .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
            .replace(/blockquote/g, / {0,3}>/)
            .replace(/heading/g, / {0,3}#{1,6}/)
            .replace(/html/g, / {0,3}<[^\n>]+>\n/)
            .getRegex(),
        lt =
            /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        it = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        st = tt(
            /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
        )
            .replace("label", it)
            .replace(
                "title",
                /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
            )
            .getRegex(),
        ut = tt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
            .replace(/bull/g, at)
            .getRegex(),
        ct =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
        dt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
        pt = tt(
            "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))",
            "i",
        )
            .replace("comment", dt)
            .replace("tag", ct)
            .replace(
                "attribute",
                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
            )
            .getRegex(),
        ft = tt(lt)
            .replace("hr", rt)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
                "html",
                "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
            )
            .replace("tag", ct)
            .getRegex(),
        ht = {
            blockquote: tt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
                .replace("paragraph", ft)
                .getRegex(),
            code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
            def: st,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            hr: rt,
            html: pt,
            lheading: ot,
            list: ut,
            newline: /^(?:[ \t]*(?:\n|$))+/,
            paragraph: ft,
            table: et,
            text: /^[^\n]+/,
        },
        mt = tt(
            "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        )
            .replace("hr", rt)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("blockquote", " {0,3}>")
            .replace("code", "(?: {4}| {0,3}\t)[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
                "html",
                "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
            )
            .replace("tag", ct)
            .getRegex(),
        gt = {
            ...ht,
            table: mt,
            paragraph: tt(lt)
                .replace("hr", rt)
                .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
                .replace("|lheading", "")
                .replace("table", mt)
                .replace("blockquote", " {0,3}>")
                .replace(
                    "fences",
                    " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n",
                )
                .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                .replace(
                    "html",
                    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
                )
                .replace("tag", ct)
                .getRegex(),
        },
        bt = {
            ...ht,
            html: tt(
                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
            )
                .replace("comment", dt)
                .replace(
                    /tag/g,
                    "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
                )
                .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: et,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: tt(lt)
                .replace("hr", rt)
                .replace("heading", " *#{1,6} *[^\n]")
                .replace("lheading", ot)
                .replace("|table", "")
                .replace("blockquote", " {0,3}>")
                .replace("|fences", "")
                .replace("|list", "")
                .replace("|html", "")
                .replace("|tag", "")
                .getRegex(),
        },
        yt = /^( {2,}|\\)\n(?!\s*$)/,
        wt = /[\p{P}\p{S}]/u,
        vt = /[\s\p{P}\p{S}]/u,
        kt = /[^\s\p{P}\p{S}]/u,
        xt = tt(/^((?![*_])punctSpace)/, "u")
            .replace(/punctSpace/g, vt)
            .getRegex(),
        St = /(?!~)[\p{P}\p{S}]/u,
        Et = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
        Ct = tt(Et, "u").replace(/punct/g, wt).getRegex(),
        zt = tt(Et, "u").replace(/punct/g, St).getRegex(),
        _t =
            "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
        Pt = tt(_t, "gu")
            .replace(/notPunctSpace/g, kt)
            .replace(/punctSpace/g, vt)
            .replace(/punct/g, wt)
            .getRegex(),
        Tt = tt(_t, "gu")
            .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
            .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
            .replace(/punct/g, St)
            .getRegex(),
        Nt = tt(
            "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
            "gu",
        )
            .replace(/notPunctSpace/g, kt)
            .replace(/punctSpace/g, vt)
            .replace(/punct/g, wt)
            .getRegex(),
        Rt = tt(/\\(punct)/, "gu")
            .replace(/punct/g, wt)
            .getRegex(),
        Lt = tt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
            .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
            .replace(
                "email",
                /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
            )
            .getRegex(),
        At = tt(dt).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
        Ot = tt(
            "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        )
            .replace("comment", At)
            .replace(
                "attribute",
                /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
            )
            .getRegex(),
        $t = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
        Mt = tt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
            .replace("label", $t)
            .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
            .replace(
                "title",
                /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
            )
            .getRegex(),
        Dt = tt(/^!?\[(label)\]\[(ref)\]/)
            .replace("label", $t)
            .replace("ref", it)
            .getRegex(),
        Ft = tt(/^!?\[(ref)\](?:\[\])?/)
            .replace("ref", it)
            .getRegex(),
        It = {
            _backpedal: et,
            anyPunctuation: Rt,
            autolink: Lt,
            blockSkip:
                /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
            br: yt,
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            del: et,
            emStrongLDelim: Ct,
            emStrongRDelimAst: Pt,
            emStrongRDelimUnd: Nt,
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            link: Mt,
            nolink: Ft,
            punctuation: xt,
            reflink: Dt,
            reflinkSearch: tt("reflink|nolink(?!\\()", "g")
                .replace("reflink", Dt)
                .replace("nolink", Ft)
                .getRegex(),
            tag: Ot,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            url: et,
        },
        jt = {
            ...It,
            link: tt(/^!?\[(label)\]\((.*?)\)/)
                .replace("label", $t)
                .getRegex(),
            reflink: tt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                .replace("label", $t)
                .getRegex(),
        },
        Ut = {
            ...It,
            emStrongRDelimAst: Tt,
            emStrongLDelim: zt,
            url: tt(
                /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                "i",
            )
                .replace(
                    "email",
                    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                )
                .getRegex(),
            _backpedal:
                /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        },
        Bt = {
            ...Ut,
            br: tt(yt).replace("{2,}", "*").getRegex(),
            text: tt(Ut.text)
                .replace("\\b_", "\\b_| {2,}\\n")
                .replace(/\{2,\}/g, "*")
                .getRegex(),
        },
        qt = { normal: ht, gfm: gt, pedantic: bt },
        Ht = { normal: It, gfm: Ut, breaks: Bt, pedantic: jt },
        Wt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        },
        Vt = (e) => Wt[e];
    function Qt(e, t) {
        if (t) {
            if (nt.escapeTest.test(e)) return e.replace(nt.escapeReplace, Vt);
        } else if (nt.escapeTestNoEncode.test(e))
            return e.replace(nt.escapeReplaceNoEncode, Vt);
        return e;
    }
    function Kt(e) {
        try {
            e = encodeURI(e).replace(nt.percentDecode, "%");
        } catch {
            return null;
        }
        return e;
    }
    function Yt(e, t) {
        const n = e
            .replace(nt.findPipe, (e, t, n) => {
                let r = !1,
                    a = t;
                for (; --a >= 0 && "\\" === n[a]; ) r = !r;
                return r ? "|" : " |";
            })
            .split(nt.splitPipe);
        let r = 0;
        if (
            (n[0].trim() || n.shift(),
            n.length > 0 && !n.at(-1)?.trim() && n.pop(),
            t)
        )
            if (n.length > t) n.splice(t);
            else for (; n.length < t; ) n.push("");
        for (; r < n.length; r++) n[r] = n[r].trim().replace(nt.slashPipe, "|");
        return n;
    }
    function Gt(e, t, n) {
        const r = e.length;
        if (0 === r) return "";
        let a = 0;
        for (; a < r && e.charAt(r - a - 1) === t; ) a++;
        return e.slice(0, r - a);
    }
    function Xt(e, t, n, r, a) {
        const o = t.href,
            l = t.title || null,
            i = e[1].replace(a.other.outputLinkReplace, "$1");
        if ("!" !== e[0].charAt(0)) {
            r.state.inLink = !0;
            const e = {
                type: "link",
                raw: n,
                href: o,
                title: l,
                text: i,
                tokens: r.inlineTokens(i),
            };
            return (r.state.inLink = !1), e;
        }
        return { type: "image", raw: n, href: o, title: l, text: i };
    }
    class Zt {
        options;
        rules;
        lexer;
        constructor(e) {
            this.options = e || Ze;
        }
        space(e) {
            const t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(e) {
            const t = this.rules.block.code.exec(e);
            if (t) {
                const e = t[0].replace(this.rules.other.codeRemoveIndent, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? e : Gt(e, "\n"),
                };
            }
        }
        fences(e) {
            const t = this.rules.block.fences.exec(e);
            if (t) {
                const e = t[0],
                    n = (function (e, t, n) {
                        const r = e.match(n.other.indentCodeCompensation);
                        if (null === r) return t;
                        const a = r[1];
                        return t
                            .split("\n")
                            .map((e) => {
                                const t = e.match(n.other.beginningSpace);
                                if (null === t) return e;
                                const [r] = t;
                                return r.length >= a.length
                                    ? e.slice(a.length)
                                    : e;
                            })
                            .join("\n");
                    })(e, t[3] || "", this.rules);
                return {
                    type: "code",
                    raw: e,
                    lang: t[2]
                        ? t[2]
                              .trim()
                              .replace(this.rules.inline.anyPunctuation, "$1")
                        : t[2],
                    text: n,
                };
            }
        }
        heading(e) {
            const t = this.rules.block.heading.exec(e);
            if (t) {
                let e = t[2].trim();
                if (this.rules.other.endingHash.test(e)) {
                    const t = Gt(e, "#");
                    this.options.pedantic
                        ? (e = t.trim())
                        : (t && !this.rules.other.endingSpaceChar.test(t)) ||
                          (e = t.trim());
                }
                return {
                    type: "heading",
                    raw: t[0],
                    depth: t[1].length,
                    text: e,
                    tokens: this.lexer.inline(e),
                };
            }
        }
        hr(e) {
            const t = this.rules.block.hr.exec(e);
            if (t) return { type: "hr", raw: Gt(t[0], "\n") };
        }
        blockquote(e) {
            const t = this.rules.block.blockquote.exec(e);
            if (t) {
                let e = Gt(t[0], "\n").split("\n"),
                    n = "",
                    r = "";
                const a = [];
                for (; e.length > 0; ) {
                    let t = !1;
                    const o = [];
                    let l;
                    for (l = 0; l < e.length; l++)
                        if (this.rules.other.blockquoteStart.test(e[l]))
                            o.push(e[l]), (t = !0);
                        else {
                            if (t) break;
                            o.push(e[l]);
                        }
                    e = e.slice(l);
                    const i = o.join("\n"),
                        s = i
                            .replace(
                                this.rules.other.blockquoteSetextReplace,
                                "\n    $1",
                            )
                            .replace(
                                this.rules.other.blockquoteSetextReplace2,
                                "",
                            );
                    (n = n ? `${n}\n${i}` : i), (r = r ? `${r}\n${s}` : s);
                    const u = this.lexer.state.top;
                    if (
                        ((this.lexer.state.top = !0),
                        this.lexer.blockTokens(s, a, !0),
                        (this.lexer.state.top = u),
                        0 === e.length)
                    )
                        break;
                    const c = a.at(-1);
                    if ("code" === c?.type) break;
                    if ("blockquote" === c?.type) {
                        const t = c,
                            o = t.raw + "\n" + e.join("\n"),
                            l = this.blockquote(o);
                        (a[a.length - 1] = l),
                            (n =
                                n.substring(0, n.length - t.raw.length) +
                                l.raw),
                            (r =
                                r.substring(0, r.length - t.text.length) +
                                l.text);
                        break;
                    }
                    if ("list" !== c?.type);
                    else {
                        const t = c,
                            o = t.raw + "\n" + e.join("\n"),
                            l = this.list(o);
                        (a[a.length - 1] = l),
                            (n =
                                n.substring(0, n.length - c.raw.length) +
                                l.raw),
                            (r =
                                r.substring(0, r.length - t.raw.length) +
                                l.raw),
                            (e = o.substring(a.at(-1).raw.length).split("\n"));
                    }
                }
                return { type: "blockquote", raw: n, tokens: a, text: r };
            }
        }
        list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
                let n = t[1].trim();
                const r = n.length > 1,
                    a = {
                        type: "list",
                        raw: "",
                        ordered: r,
                        start: r ? +n.slice(0, -1) : "",
                        loose: !1,
                        items: [],
                    };
                (n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
                    this.options.pedantic && (n = r ? n : "[*+-]");
                const o = this.rules.other.listItemRegex(n);
                let l = !1;
                for (; e; ) {
                    let n = !1,
                        r = "",
                        i = "";
                    if (!(t = o.exec(e))) break;
                    if (this.rules.block.hr.test(e)) break;
                    (r = t[0]), (e = e.substring(r.length));
                    let s = t[2]
                            .split("\n", 1)[0]
                            .replace(this.rules.other.listReplaceTabs, (e) =>
                                " ".repeat(3 * e.length),
                            ),
                        u = e.split("\n", 1)[0],
                        c = !s.trim(),
                        d = 0;
                    if (
                        (this.options.pedantic
                            ? ((d = 2), (i = s.trimStart()))
                            : c
                              ? (d = t[1].length + 1)
                              : ((d = t[2].search(
                                    this.rules.other.nonSpaceChar,
                                )),
                                (d = d > 4 ? 1 : d),
                                (i = s.slice(d)),
                                (d += t[1].length)),
                        c &&
                            this.rules.other.blankLine.test(u) &&
                            ((r += u + "\n"),
                            (e = e.substring(u.length + 1)),
                            (n = !0)),
                        !n)
                    ) {
                        const t = this.rules.other.nextBulletRegex(d),
                            n = this.rules.other.hrRegex(d),
                            a = this.rules.other.fencesBeginRegex(d),
                            o = this.rules.other.headingBeginRegex(d),
                            l = this.rules.other.htmlBeginRegex(d);
                        for (; e; ) {
                            const p = e.split("\n", 1)[0];
                            let f;
                            if (
                                ((u = p),
                                this.options.pedantic
                                    ? ((u = u.replace(
                                          this.rules.other.listReplaceNesting,
                                          "  ",
                                      )),
                                      (f = u))
                                    : (f = u.replace(
                                          this.rules.other.tabCharGlobal,
                                          "    ",
                                      )),
                                a.test(u))
                            )
                                break;
                            if (o.test(u)) break;
                            if (l.test(u)) break;
                            if (t.test(u)) break;
                            if (n.test(u)) break;
                            if (
                                f.search(this.rules.other.nonSpaceChar) >= d ||
                                !u.trim()
                            )
                                i += "\n" + f.slice(d);
                            else {
                                if (c) break;
                                if (
                                    s
                                        .replace(
                                            this.rules.other.tabCharGlobal,
                                            "    ",
                                        )
                                        .search(
                                            this.rules.other.nonSpaceChar,
                                        ) >= 4
                                )
                                    break;
                                if (a.test(s)) break;
                                if (o.test(s)) break;
                                if (n.test(s)) break;
                                i += "\n" + u;
                            }
                            c || u.trim() || (c = !0),
                                (r += p + "\n"),
                                (e = e.substring(p.length + 1)),
                                (s = f.slice(d));
                        }
                    }
                    a.loose ||
                        (l
                            ? (a.loose = !0)
                            : this.rules.other.doubleBlankLine.test(r) &&
                              (l = !0));
                    let p,
                        f = null;
                    this.options.gfm &&
                        ((f = this.rules.other.listIsTask.exec(i)),
                        f &&
                            ((p = "[ ] " !== f[0]),
                            (i = i.replace(
                                this.rules.other.listReplaceTask,
                                "",
                            )))),
                        a.items.push({
                            type: "list_item",
                            raw: r,
                            task: !!f,
                            checked: p,
                            loose: !1,
                            text: i,
                            tokens: [],
                        }),
                        (a.raw += r);
                }
                const i = a.items.at(-1);
                if (!i) return;
                (i.raw = i.raw.trimEnd()),
                    (i.text = i.text.trimEnd()),
                    (a.raw = a.raw.trimEnd());
                for (let e = 0; e < a.items.length; e++)
                    if (
                        ((this.lexer.state.top = !1),
                        (a.items[e].tokens = this.lexer.blockTokens(
                            a.items[e].text,
                            [],
                        )),
                        !a.loose)
                    ) {
                        const t = a.items[e].tokens.filter(
                                (e) => "space" === e.type,
                            ),
                            n =
                                t.length > 0 &&
                                t.some((e) =>
                                    this.rules.other.anyLine.test(e.raw),
                                );
                        a.loose = n;
                    }
                if (a.loose)
                    for (let e = 0; e < a.items.length; e++)
                        a.items[e].loose = !0;
                return a;
            }
        }
        html(e) {
            const t = this.rules.block.html.exec(e);
            if (t)
                return {
                    type: "html",
                    block: !0,
                    raw: t[0],
                    pre:
                        "pre" === t[1] || "script" === t[1] || "style" === t[1],
                    text: t[0],
                };
        }
        def(e) {
            const t = this.rules.block.def.exec(e);
            if (t) {
                const e = t[1]
                        .toLowerCase()
                        .replace(this.rules.other.multipleSpaceGlobal, " "),
                    n = t[2]
                        ? t[2]
                              .replace(this.rules.other.hrefBrackets, "$1")
                              .replace(this.rules.inline.anyPunctuation, "$1")
                        : "",
                    r = t[3]
                        ? t[3]
                              .substring(1, t[3].length - 1)
                              .replace(this.rules.inline.anyPunctuation, "$1")
                        : t[3];
                return { type: "def", tag: e, raw: t[0], href: n, title: r };
            }
        }
        table(e) {
            const t = this.rules.block.table.exec(e);
            if (!t) return;
            if (!this.rules.other.tableDelimiter.test(t[2])) return;
            const n = Yt(t[1]),
                r = t[2]
                    .replace(this.rules.other.tableAlignChars, "")
                    .split("|"),
                a = t[3]?.trim()
                    ? t[3]
                          .replace(this.rules.other.tableRowBlankLine, "")
                          .split("\n")
                    : [],
                o = {
                    type: "table",
                    raw: t[0],
                    header: [],
                    align: [],
                    rows: [],
                };
            if (n.length === r.length) {
                for (const e of r)
                    this.rules.other.tableAlignRight.test(e)
                        ? o.align.push("right")
                        : this.rules.other.tableAlignCenter.test(e)
                          ? o.align.push("center")
                          : this.rules.other.tableAlignLeft.test(e)
                            ? o.align.push("left")
                            : o.align.push(null);
                for (let e = 0; e < n.length; e++)
                    o.header.push({
                        text: n[e],
                        tokens: this.lexer.inline(n[e]),
                        header: !0,
                        align: o.align[e],
                    });
                for (const e of a)
                    o.rows.push(
                        Yt(e, o.header.length).map((e, t) => ({
                            text: e,
                            tokens: this.lexer.inline(e),
                            header: !1,
                            align: o.align[t],
                        })),
                    );
                return o;
            }
        }
        lheading(e) {
            const t = this.rules.block.lheading.exec(e);
            if (t)
                return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: t[1],
                    tokens: this.lexer.inline(t[1]),
                };
        }
        paragraph(e) {
            const t = this.rules.block.paragraph.exec(e);
            if (t) {
                const e =
                    "\n" === t[1].charAt(t[1].length - 1)
                        ? t[1].slice(0, -1)
                        : t[1];
                return {
                    type: "paragraph",
                    raw: t[0],
                    text: e,
                    tokens: this.lexer.inline(e),
                };
            }
        }
        text(e) {
            const t = this.rules.block.text.exec(e);
            if (t)
                return {
                    type: "text",
                    raw: t[0],
                    text: t[0],
                    tokens: this.lexer.inline(t[0]),
                };
        }
        escape(e) {
            const t = this.rules.inline.escape.exec(e);
            if (t) return { type: "escape", raw: t[0], text: t[1] };
        }
        tag(e) {
            const t = this.rules.inline.tag.exec(e);
            if (t)
                return (
                    !this.lexer.state.inLink &&
                    this.rules.other.startATag.test(t[0])
                        ? (this.lexer.state.inLink = !0)
                        : this.lexer.state.inLink &&
                          this.rules.other.endATag.test(t[0]) &&
                          (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock &&
                    this.rules.other.startPreScriptTag.test(t[0])
                        ? (this.lexer.state.inRawBlock = !0)
                        : this.lexer.state.inRawBlock &&
                          this.rules.other.endPreScriptTag.test(t[0]) &&
                          (this.lexer.state.inRawBlock = !1),
                    {
                        type: "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: t[0],
                    }
                );
        }
        link(e) {
            const t = this.rules.inline.link.exec(e);
            if (t) {
                const e = t[2].trim();
                if (
                    !this.options.pedantic &&
                    this.rules.other.startAngleBracket.test(e)
                ) {
                    if (!this.rules.other.endAngleBracket.test(e)) return;
                    const t = Gt(e.slice(0, -1), "\\");
                    if ((e.length - t.length) % 2 == 0) return;
                } else {
                    const e = (function (e, t) {
                        if (-1 === e.indexOf(t[1])) return -1;
                        let n = 0;
                        for (let r = 0; r < e.length; r++)
                            if ("\\" === e[r]) r++;
                            else if (e[r] === t[0]) n++;
                            else if (e[r] === t[1] && (n--, n < 0)) return r;
                        return -1;
                    })(t[2], "()");
                    if (e > -1) {
                        const n =
                            (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                        (t[2] = t[2].substring(0, e)),
                            (t[0] = t[0].substring(0, n).trim()),
                            (t[3] = "");
                    }
                }
                let n = t[2],
                    r = "";
                if (this.options.pedantic) {
                    const e = this.rules.other.pedanticHrefTitle.exec(n);
                    e && ((n = e[1]), (r = e[3]));
                } else r = t[3] ? t[3].slice(1, -1) : "";
                return (
                    (n = n.trim()),
                    this.rules.other.startAngleBracket.test(n) &&
                        (n =
                            this.options.pedantic &&
                            !this.rules.other.endAngleBracket.test(e)
                                ? n.slice(1)
                                : n.slice(1, -1)),
                    Xt(
                        t,
                        {
                            href: n
                                ? n.replace(
                                      this.rules.inline.anyPunctuation,
                                      "$1",
                                  )
                                : n,
                            title: r
                                ? r.replace(
                                      this.rules.inline.anyPunctuation,
                                      "$1",
                                  )
                                : r,
                        },
                        t[0],
                        this.lexer,
                        this.rules,
                    )
                );
            }
        }
        reflink(e, t) {
            let n;
            if (
                (n = this.rules.inline.reflink.exec(e)) ||
                (n = this.rules.inline.nolink.exec(e))
            ) {
                const e =
                    t[
                        (n[2] || n[1])
                            .replace(this.rules.other.multipleSpaceGlobal, " ")
                            .toLowerCase()
                    ];
                if (!e) {
                    const e = n[0].charAt(0);
                    return { type: "text", raw: e, text: e };
                }
                return Xt(n, e, n[0], this.lexer, this.rules);
            }
        }
        emStrong(e, t, n = "") {
            let r = this.rules.inline.emStrongLDelim.exec(e);
            if (
                r &&
                (!r[3] || !n.match(this.rules.other.unicodeAlphaNumeric)) &&
                ((!r[1] && !r[2]) ||
                    !n ||
                    this.rules.inline.punctuation.exec(n))
            ) {
                const n = [...r[0]].length - 1;
                let a,
                    o,
                    l = n,
                    i = 0;
                const s =
                    "*" === r[0][0]
                        ? this.rules.inline.emStrongRDelimAst
                        : this.rules.inline.emStrongRDelimUnd;
                for (
                    s.lastIndex = 0, t = t.slice(-1 * e.length + n);
                    null != (r = s.exec(t));

                ) {
                    if (
                        ((a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !a)
                    )
                        continue;
                    if (((o = [...a].length), r[3] || r[4])) {
                        l += o;
                        continue;
                    }
                    if ((r[5] || r[6]) && n % 3 && !((n + o) % 3)) {
                        i += o;
                        continue;
                    }
                    if (((l -= o), l > 0)) continue;
                    o = Math.min(o, o + l + i);
                    const t = [...r[0]][0].length,
                        s = e.slice(0, n + r.index + t + o);
                    if (Math.min(n, o) % 2) {
                        const e = s.slice(1, -1);
                        return {
                            type: "em",
                            raw: s,
                            text: e,
                            tokens: this.lexer.inlineTokens(e),
                        };
                    }
                    const u = s.slice(2, -2);
                    return {
                        type: "strong",
                        raw: s,
                        text: u,
                        tokens: this.lexer.inlineTokens(u),
                    };
                }
            }
        }
        codespan(e) {
            const t = this.rules.inline.code.exec(e);
            if (t) {
                let e = t[2].replace(this.rules.other.newLineCharGlobal, " ");
                const n = this.rules.other.nonSpaceChar.test(e),
                    r =
                        this.rules.other.startingSpaceChar.test(e) &&
                        this.rules.other.endingSpaceChar.test(e);
                return (
                    n && r && (e = e.substring(1, e.length - 1)),
                    { type: "codespan", raw: t[0], text: e }
                );
            }
        }
        br(e) {
            const t = this.rules.inline.br.exec(e);
            if (t) return { type: "br", raw: t[0] };
        }
        del(e) {
            const t = this.rules.inline.del.exec(e);
            if (t)
                return {
                    type: "del",
                    raw: t[0],
                    text: t[2],
                    tokens: this.lexer.inlineTokens(t[2]),
                };
        }
        autolink(e) {
            const t = this.rules.inline.autolink.exec(e);
            if (t) {
                let e, n;
                return (
                    "@" === t[2]
                        ? ((e = t[1]), (n = "mailto:" + e))
                        : ((e = t[1]), (n = e)),
                    {
                        type: "link",
                        raw: t[0],
                        text: e,
                        href: n,
                        tokens: [{ type: "text", raw: e, text: e }],
                    }
                );
            }
        }
        url(e) {
            let t;
            if ((t = this.rules.inline.url.exec(e))) {
                let e, n;
                if ("@" === t[2]) (e = t[0]), (n = "mailto:" + e);
                else {
                    let r;
                    do {
                        (r = t[0]),
                            (t[0] =
                                this.rules.inline._backpedal.exec(t[0])?.[0] ??
                                "");
                    } while (r !== t[0]);
                    (e = t[0]), (n = "www." === t[1] ? "http://" + t[0] : t[0]);
                }
                return {
                    type: "link",
                    raw: t[0],
                    text: e,
                    href: n,
                    tokens: [{ type: "text", raw: e, text: e }],
                };
            }
        }
        inlineText(e) {
            const t = this.rules.inline.text.exec(e);
            if (t) {
                const e = this.lexer.state.inRawBlock;
                return { type: "text", raw: t[0], text: t[0], escaped: e };
            }
        }
    }
    class Jt {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(e) {
            (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = e || Ze),
                (this.options.tokenizer = this.options.tokenizer || new Zt()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
            const t = { other: nt, block: qt.normal, inline: Ht.normal };
            this.options.pedantic
                ? ((t.block = qt.pedantic), (t.inline = Ht.pedantic))
                : this.options.gfm &&
                  ((t.block = qt.gfm),
                  this.options.breaks
                      ? (t.inline = Ht.breaks)
                      : (t.inline = Ht.gfm)),
                (this.tokenizer.rules = t);
        }
        static get rules() {
            return { block: qt, inline: Ht };
        }
        static lex(e, t) {
            return new Jt(t).lex(e);
        }
        static lexInline(e, t) {
            return new Jt(t).inlineTokens(e);
        }
        lex(e) {
            (e = e.replace(nt.carriageReturn, "\n")),
                this.blockTokens(e, this.tokens);
            for (let e = 0; e < this.inlineQueue.length; e++) {
                const t = this.inlineQueue[e];
                this.inlineTokens(t.src, t.tokens);
            }
            return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(e, t = [], n = !1) {
            for (
                this.options.pedantic &&
                (e = e
                    .replace(nt.tabCharGlobal, "    ")
                    .replace(nt.spaceLine, ""));
                e;

            ) {
                let r;
                if (
                    this.options.extensions?.block?.some(
                        (n) =>
                            !!(r = n.call({ lexer: this }, e, t)) &&
                            ((e = e.substring(r.raw.length)), t.push(r), !0),
                    )
                )
                    continue;
                if ((r = this.tokenizer.space(e))) {
                    e = e.substring(r.raw.length);
                    const n = t.at(-1);
                    1 === r.raw.length && void 0 !== n
                        ? (n.raw += "\n")
                        : t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.code(e))) {
                    e = e.substring(r.raw.length);
                    const n = t.at(-1);
                    "paragraph" === n?.type || "text" === n?.type
                        ? ((n.raw += "\n" + r.raw),
                          (n.text += "\n" + r.text),
                          (this.inlineQueue.at(-1).src = n.text))
                        : t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.fences(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.heading(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.hr(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.blockquote(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.list(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.html(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.def(e))) {
                    e = e.substring(r.raw.length);
                    const n = t.at(-1);
                    "paragraph" === n?.type || "text" === n?.type
                        ? ((n.raw += "\n" + r.raw),
                          (n.text += "\n" + r.raw),
                          (this.inlineQueue.at(-1).src = n.text))
                        : this.tokens.links[r.tag] ||
                          (this.tokens.links[r.tag] = {
                              href: r.href,
                              title: r.title,
                          });
                    continue;
                }
                if ((r = this.tokenizer.table(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.lheading(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                let a = e;
                if (this.options.extensions?.startBlock) {
                    let t = 1 / 0;
                    const n = e.slice(1);
                    let r;
                    this.options.extensions.startBlock.forEach((e) => {
                        (r = e.call({ lexer: this }, n)),
                            "number" == typeof r &&
                                r >= 0 &&
                                (t = Math.min(t, r));
                    }),
                        t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1));
                }
                if (this.state.top && (r = this.tokenizer.paragraph(a))) {
                    const o = t.at(-1);
                    n && "paragraph" === o?.type
                        ? ((o.raw += "\n" + r.raw),
                          (o.text += "\n" + r.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = o.text))
                        : t.push(r),
                        (n = a.length !== e.length),
                        (e = e.substring(r.raw.length));
                } else if ((r = this.tokenizer.text(e))) {
                    e = e.substring(r.raw.length);
                    const n = t.at(-1);
                    "text" === n?.type
                        ? ((n.raw += "\n" + r.raw),
                          (n.text += "\n" + r.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = n.text))
                        : t.push(r);
                } else if (e) {
                    const t = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw new Error(t);
                }
            }
            return (this.state.top = !0), t;
        }
        inline(e, t = []) {
            return this.inlineQueue.push({ src: e, tokens: t }), t;
        }
        inlineTokens(e, t = []) {
            let n = e,
                r = null;
            if (this.tokens.links) {
                const e = Object.keys(this.tokens.links);
                if (e.length > 0)
                    for (
                        ;
                        null !=
                        (r = this.tokenizer.rules.inline.reflinkSearch.exec(n));

                    )
                        e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) &&
                            (n =
                                n.slice(0, r.index) +
                                "[" +
                                "a".repeat(r[0].length - 2) +
                                "]" +
                                n.slice(
                                    this.tokenizer.rules.inline.reflinkSearch
                                        .lastIndex,
                                ));
            }
            for (
                ;
                null != (r = this.tokenizer.rules.inline.blockSkip.exec(n));

            )
                n =
                    n.slice(0, r.index) +
                    "[" +
                    "a".repeat(r[0].length - 2) +
                    "]" +
                    n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (
                ;
                null !=
                (r = this.tokenizer.rules.inline.anyPunctuation.exec(n));

            )
                n =
                    n.slice(0, r.index) +
                    "++" +
                    n.slice(
                        this.tokenizer.rules.inline.anyPunctuation.lastIndex,
                    );
            let a = !1,
                o = "";
            for (; e; ) {
                let r;
                if (
                    (a || (o = ""),
                    (a = !1),
                    this.options.extensions?.inline?.some(
                        (n) =>
                            !!(r = n.call({ lexer: this }, e, t)) &&
                            ((e = e.substring(r.raw.length)), t.push(r), !0),
                    ))
                )
                    continue;
                if ((r = this.tokenizer.escape(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.tag(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.link(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
                    e = e.substring(r.raw.length);
                    const n = t.at(-1);
                    "text" === r.type && "text" === n?.type
                        ? ((n.raw += r.raw), (n.text += r.text))
                        : t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.emStrong(e, n, o))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.codespan(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.br(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.del(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.autolink(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if (!this.state.inLink && (r = this.tokenizer.url(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                let l = e;
                if (this.options.extensions?.startInline) {
                    let t = 1 / 0;
                    const n = e.slice(1);
                    let r;
                    this.options.extensions.startInline.forEach((e) => {
                        (r = e.call({ lexer: this }, n)),
                            "number" == typeof r &&
                                r >= 0 &&
                                (t = Math.min(t, r));
                    }),
                        t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1));
                }
                if ((r = this.tokenizer.inlineText(l))) {
                    (e = e.substring(r.raw.length)),
                        "_" !== r.raw.slice(-1) && (o = r.raw.slice(-1)),
                        (a = !0);
                    const n = t.at(-1);
                    "text" === n?.type
                        ? ((n.raw += r.raw), (n.text += r.text))
                        : t.push(r);
                } else if (e) {
                    const t = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw new Error(t);
                }
            }
            return t;
        }
    }
    class en {
        options;
        parser;
        constructor(e) {
            this.options = e || Ze;
        }
        space(e) {
            return "";
        }
        code({ text: e, lang: t, escaped: n }) {
            const r = (t || "").match(nt.notSpaceStart)?.[0],
                a = e.replace(nt.endingNewline, "") + "\n";
            return r
                ? '<pre><code class="language-' +
                      Qt(r) +
                      '">' +
                      (n ? a : Qt(a, !0)) +
                      "</code></pre>\n"
                : "<pre><code>" + (n ? a : Qt(a, !0)) + "</code></pre>\n";
        }
        blockquote({ tokens: e }) {
            return `<blockquote>\n${this.parser.parse(e)}</blockquote>\n`;
        }
        html({ text: e }) {
            return e;
        }
        heading({ tokens: e, depth: t }) {
            return `<h${t}>${this.parser.parseInline(e)}</h${t}>\n`;
        }
        hr(e) {
            return "<hr>\n";
        }
        list(e) {
            const t = e.ordered,
                n = e.start;
            let r = "";
            for (let t = 0; t < e.items.length; t++) {
                const n = e.items[t];
                r += this.listitem(n);
            }
            const a = t ? "ol" : "ul";
            return (
                "<" +
                a +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                ">\n" +
                r +
                "</" +
                a +
                ">\n"
            );
        }
        listitem(e) {
            let t = "";
            if (e.task) {
                const n = this.checkbox({ checked: !!e.checked });
                e.loose
                    ? "paragraph" === e.tokens[0]?.type
                        ? ((e.tokens[0].text = n + " " + e.tokens[0].text),
                          e.tokens[0].tokens &&
                              e.tokens[0].tokens.length > 0 &&
                              "text" === e.tokens[0].tokens[0].type &&
                              ((e.tokens[0].tokens[0].text =
                                  n + " " + Qt(e.tokens[0].tokens[0].text)),
                              (e.tokens[0].tokens[0].escaped = !0)))
                        : e.tokens.unshift({
                              type: "text",
                              raw: n + " ",
                              text: n + " ",
                              escaped: !0,
                          })
                    : (t += n + " ");
            }
            return (
                (t += this.parser.parse(e.tokens, !!e.loose)), `<li>${t}</li>\n`
            );
        }
        checkbox({ checked: e }) {
            return (
                "<input " +
                (e ? 'checked="" ' : "") +
                'disabled="" type="checkbox">'
            );
        }
        paragraph({ tokens: e }) {
            return `<p>${this.parser.parseInline(e)}</p>\n`;
        }
        table(e) {
            let t = "",
                n = "";
            for (let t = 0; t < e.header.length; t++)
                n += this.tablecell(e.header[t]);
            t += this.tablerow({ text: n });
            let r = "";
            for (let t = 0; t < e.rows.length; t++) {
                const a = e.rows[t];
                n = "";
                for (let e = 0; e < a.length; e++) n += this.tablecell(a[e]);
                r += this.tablerow({ text: n });
            }
            return (
                r && (r = `<tbody>${r}</tbody>`),
                "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n"
            );
        }
        tablerow({ text: e }) {
            return `<tr>\n${e}</tr>\n`;
        }
        tablecell(e) {
            const t = this.parser.parseInline(e.tokens),
                n = e.header ? "th" : "td";
            return (
                (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
                t +
                `</${n}>\n`
            );
        }
        strong({ tokens: e }) {
            return `<strong>${this.parser.parseInline(e)}</strong>`;
        }
        em({ tokens: e }) {
            return `<em>${this.parser.parseInline(e)}</em>`;
        }
        codespan({ text: e }) {
            return `<code>${Qt(e, !0)}</code>`;
        }
        br(e) {
            return "<br>";
        }
        del({ tokens: e }) {
            return `<del>${this.parser.parseInline(e)}</del>`;
        }
        link({ href: e, title: t, tokens: n }) {
            const r = this.parser.parseInline(n),
                a = Kt(e);
            if (null === a) return r;
            let o = '<a href="' + (e = a) + '"';
            return (
                t && (o += ' title="' + Qt(t) + '"'), (o += ">" + r + "</a>"), o
            );
        }
        image({ href: e, title: t, text: n }) {
            const r = Kt(e);
            if (null === r) return Qt(n);
            let a = `<img src="${(e = r)}" alt="${n}"`;
            return t && (a += ` title="${Qt(t)}"`), (a += ">"), a;
        }
        text(e) {
            return "tokens" in e && e.tokens
                ? this.parser.parseInline(e.tokens)
                : "escaped" in e && e.escaped
                  ? e.text
                  : Qt(e.text);
        }
    }
    class tn {
        strong({ text: e }) {
            return e;
        }
        em({ text: e }) {
            return e;
        }
        codespan({ text: e }) {
            return e;
        }
        del({ text: e }) {
            return e;
        }
        html({ text: e }) {
            return e;
        }
        text({ text: e }) {
            return e;
        }
        link({ text: e }) {
            return "" + e;
        }
        image({ text: e }) {
            return "" + e;
        }
        br() {
            return "";
        }
    }
    class nn {
        options;
        renderer;
        textRenderer;
        constructor(e) {
            (this.options = e || Ze),
                (this.options.renderer = this.options.renderer || new en()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new tn());
        }
        static parse(e, t) {
            return new nn(t).parse(e);
        }
        static parseInline(e, t) {
            return new nn(t).parseInline(e);
        }
        parse(e, t = !0) {
            let n = "";
            for (let r = 0; r < e.length; r++) {
                const a = e[r];
                if (this.options.extensions?.renderers?.[a.type]) {
                    const e = a,
                        t = this.options.extensions.renderers[e.type].call(
                            { parser: this },
                            e,
                        );
                    if (
                        !1 !== t ||
                        ![
                            "space",
                            "hr",
                            "heading",
                            "code",
                            "table",
                            "blockquote",
                            "list",
                            "html",
                            "paragraph",
                            "text",
                        ].includes(e.type)
                    ) {
                        n += t || "";
                        continue;
                    }
                }
                const o = a;
                switch (o.type) {
                    case "space":
                        n += this.renderer.space(o);
                        continue;
                    case "hr":
                        n += this.renderer.hr(o);
                        continue;
                    case "heading":
                        n += this.renderer.heading(o);
                        continue;
                    case "code":
                        n += this.renderer.code(o);
                        continue;
                    case "table":
                        n += this.renderer.table(o);
                        continue;
                    case "blockquote":
                        n += this.renderer.blockquote(o);
                        continue;
                    case "list":
                        n += this.renderer.list(o);
                        continue;
                    case "html":
                        n += this.renderer.html(o);
                        continue;
                    case "paragraph":
                        n += this.renderer.paragraph(o);
                        continue;
                    case "text": {
                        let a = o,
                            l = this.renderer.text(a);
                        for (; r + 1 < e.length && "text" === e[r + 1].type; )
                            (a = e[++r]), (l += "\n" + this.renderer.text(a));
                        n += t
                            ? this.renderer.paragraph({
                                  type: "paragraph",
                                  raw: l,
                                  text: l,
                                  tokens: [
                                      {
                                          type: "text",
                                          raw: l,
                                          text: l,
                                          escaped: !0,
                                      },
                                  ],
                              })
                            : l;
                        continue;
                    }
                    default: {
                        const e =
                            'Token with "' + o.type + '" type was not found.';
                        if (this.options.silent) return console.error(e), "";
                        throw new Error(e);
                    }
                }
            }
            return n;
        }
        parseInline(e, t = this.renderer) {
            let n = "";
            for (let r = 0; r < e.length; r++) {
                const a = e[r];
                if (this.options.extensions?.renderers?.[a.type]) {
                    const e = this.options.extensions.renderers[a.type].call(
                        { parser: this },
                        a,
                    );
                    if (
                        !1 !== e ||
                        ![
                            "escape",
                            "html",
                            "link",
                            "image",
                            "strong",
                            "em",
                            "codespan",
                            "br",
                            "del",
                            "text",
                        ].includes(a.type)
                    ) {
                        n += e || "";
                        continue;
                    }
                }
                const o = a;
                switch (o.type) {
                    case "escape":
                    case "text":
                        n += t.text(o);
                        break;
                    case "html":
                        n += t.html(o);
                        break;
                    case "link":
                        n += t.link(o);
                        break;
                    case "image":
                        n += t.image(o);
                        break;
                    case "strong":
                        n += t.strong(o);
                        break;
                    case "em":
                        n += t.em(o);
                        break;
                    case "codespan":
                        n += t.codespan(o);
                        break;
                    case "br":
                        n += t.br(o);
                        break;
                    case "del":
                        n += t.del(o);
                        break;
                    default: {
                        const e =
                            'Token with "' + o.type + '" type was not found.';
                        if (this.options.silent) return console.error(e), "";
                        throw new Error(e);
                    }
                }
            }
            return n;
        }
    }
    class rn {
        options;
        block;
        constructor(e) {
            this.options = e || Ze;
        }
        static passThroughHooks = new Set([
            "preprocess",
            "postprocess",
            "processAllTokens",
        ]);
        preprocess(e) {
            return e;
        }
        postprocess(e) {
            return e;
        }
        processAllTokens(e) {
            return e;
        }
        provideLexer() {
            return this.block ? Jt.lex : Jt.lexInline;
        }
        provideParser() {
            return this.block ? nn.parse : nn.parseInline;
        }
    }
    const an = new (class {
        defaults = {
            async: !1,
            breaks: !1,
            extensions: null,
            gfm: !0,
            hooks: null,
            pedantic: !1,
            renderer: null,
            silent: !1,
            tokenizer: null,
            walkTokens: null,
        };
        options = this.setOptions;
        parse = this.parseMarkdown(!0);
        parseInline = this.parseMarkdown(!1);
        Parser = nn;
        Renderer = en;
        TextRenderer = tn;
        Lexer = Jt;
        Tokenizer = Zt;
        Hooks = rn;
        constructor(...e) {
            this.use(...e);
        }
        walkTokens(e, t) {
            let n = [];
            for (const r of e)
                switch (((n = n.concat(t.call(this, r))), r.type)) {
                    case "table": {
                        const e = r;
                        for (const r of e.header)
                            n = n.concat(this.walkTokens(r.tokens, t));
                        for (const r of e.rows)
                            for (const e of r)
                                n = n.concat(this.walkTokens(e.tokens, t));
                        break;
                    }
                    case "list": {
                        const e = r;
                        n = n.concat(this.walkTokens(e.items, t));
                        break;
                    }
                    default: {
                        const e = r;
                        this.defaults.extensions?.childTokens?.[e.type]
                            ? this.defaults.extensions.childTokens[
                                  e.type
                              ].forEach((r) => {
                                  const a = e[r].flat(1 / 0);
                                  n = n.concat(this.walkTokens(a, t));
                              })
                            : e.tokens &&
                              (n = n.concat(this.walkTokens(e.tokens, t)));
                    }
                }
            return n;
        }
        use(...e) {
            const t = this.defaults.extensions || {
                renderers: {},
                childTokens: {},
            };
            return (
                e.forEach((e) => {
                    const n = { ...e };
                    if (
                        ((n.async = this.defaults.async || n.async || !1),
                        e.extensions &&
                            (e.extensions.forEach((e) => {
                                if (!e.name)
                                    throw new Error("extension name required");
                                if ("renderer" in e) {
                                    const n = t.renderers[e.name];
                                    t.renderers[e.name] = n
                                        ? function (...t) {
                                              let r = e.renderer.apply(this, t);
                                              return (
                                                  !1 === r &&
                                                      (r = n.apply(this, t)),
                                                  r
                                              );
                                          }
                                        : e.renderer;
                                }
                                if ("tokenizer" in e) {
                                    if (
                                        !e.level ||
                                        ("block" !== e.level &&
                                            "inline" !== e.level)
                                    )
                                        throw new Error(
                                            "extension level must be 'block' or 'inline'",
                                        );
                                    const n = t[e.level];
                                    n
                                        ? n.unshift(e.tokenizer)
                                        : (t[e.level] = [e.tokenizer]),
                                        e.start &&
                                            ("block" === e.level
                                                ? t.startBlock
                                                    ? t.startBlock.push(e.start)
                                                    : (t.startBlock = [e.start])
                                                : "inline" === e.level &&
                                                  (t.startInline
                                                      ? t.startInline.push(
                                                            e.start,
                                                        )
                                                      : (t.startInline = [
                                                            e.start,
                                                        ])));
                                }
                                "childTokens" in e &&
                                    e.childTokens &&
                                    (t.childTokens[e.name] = e.childTokens);
                            }),
                            (n.extensions = t)),
                        e.renderer)
                    ) {
                        const t =
                            this.defaults.renderer || new en(this.defaults);
                        for (const n in e.renderer) {
                            if (!(n in t))
                                throw new Error(
                                    `renderer '${n}' does not exist`,
                                );
                            if (["options", "parser"].includes(n)) continue;
                            const r = n,
                                a = e.renderer[r],
                                o = t[r];
                            t[r] = (...e) => {
                                let n = a.apply(t, e);
                                return !1 === n && (n = o.apply(t, e)), n || "";
                            };
                        }
                        n.renderer = t;
                    }
                    if (e.tokenizer) {
                        const t =
                            this.defaults.tokenizer || new Zt(this.defaults);
                        for (const n in e.tokenizer) {
                            if (!(n in t))
                                throw new Error(
                                    `tokenizer '${n}' does not exist`,
                                );
                            if (["options", "rules", "lexer"].includes(n))
                                continue;
                            const r = n,
                                a = e.tokenizer[r],
                                o = t[r];
                            t[r] = (...e) => {
                                let n = a.apply(t, e);
                                return !1 === n && (n = o.apply(t, e)), n;
                            };
                        }
                        n.tokenizer = t;
                    }
                    if (e.hooks) {
                        const t = this.defaults.hooks || new rn();
                        for (const n in e.hooks) {
                            if (!(n in t))
                                throw new Error(`hook '${n}' does not exist`);
                            if (["options", "block"].includes(n)) continue;
                            const r = n,
                                a = e.hooks[r],
                                o = t[r];
                            rn.passThroughHooks.has(n)
                                ? (t[r] = (e) => {
                                      if (this.defaults.async)
                                          return Promise.resolve(
                                              a.call(t, e),
                                          ).then((e) => o.call(t, e));
                                      const n = a.call(t, e);
                                      return o.call(t, n);
                                  })
                                : (t[r] = (...e) => {
                                      let n = a.apply(t, e);
                                      return !1 === n && (n = o.apply(t, e)), n;
                                  });
                        }
                        n.hooks = t;
                    }
                    if (e.walkTokens) {
                        const t = this.defaults.walkTokens,
                            r = e.walkTokens;
                        n.walkTokens = function (e) {
                            let n = [];
                            return (
                                n.push(r.call(this, e)),
                                t && (n = n.concat(t.call(this, e))),
                                n
                            );
                        };
                    }
                    this.defaults = { ...this.defaults, ...n };
                }),
                this
            );
        }
        setOptions(e) {
            return (this.defaults = { ...this.defaults, ...e }), this;
        }
        lexer(e, t) {
            return Jt.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
            return nn.parse(e, t ?? this.defaults);
        }
        parseMarkdown(e) {
            return (t, n) => {
                const r = { ...n },
                    a = { ...this.defaults, ...r },
                    o = this.onError(!!a.silent, !!a.async);
                if (!0 === this.defaults.async && !1 === r.async)
                    return o(
                        new Error(
                            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
                        ),
                    );
                if (null == t)
                    return o(
                        new Error(
                            "marked(): input parameter is undefined or null",
                        ),
                    );
                if ("string" != typeof t)
                    return o(
                        new Error(
                            "marked(): input parameter is of type " +
                                Object.prototype.toString.call(t) +
                                ", string expected",
                        ),
                    );
                a.hooks && ((a.hooks.options = a), (a.hooks.block = e));
                const l = a.hooks
                        ? a.hooks.provideLexer()
                        : e
                          ? Jt.lex
                          : Jt.lexInline,
                    i = a.hooks
                        ? a.hooks.provideParser()
                        : e
                          ? nn.parse
                          : nn.parseInline;
                if (a.async)
                    return Promise.resolve(a.hooks ? a.hooks.preprocess(t) : t)
                        .then((e) => l(e, a))
                        .then((e) =>
                            a.hooks ? a.hooks.processAllTokens(e) : e,
                        )
                        .then((e) =>
                            a.walkTokens
                                ? Promise.all(
                                      this.walkTokens(e, a.walkTokens),
                                  ).then(() => e)
                                : e,
                        )
                        .then((e) => i(e, a))
                        .then((e) => (a.hooks ? a.hooks.postprocess(e) : e))
                        .catch(o);
                try {
                    a.hooks && (t = a.hooks.preprocess(t));
                    let e = l(t, a);
                    a.hooks && (e = a.hooks.processAllTokens(e)),
                        a.walkTokens && this.walkTokens(e, a.walkTokens);
                    let n = i(e, a);
                    return a.hooks && (n = a.hooks.postprocess(n)), n;
                } catch (e) {
                    return o(e);
                }
            };
        }
        onError(e, t) {
            return (n) => {
                if (
                    ((n.message +=
                        "\nPlease report this to https://github.com/markedjs/marked."),
                    e)
                ) {
                    const e =
                        "<p>An error occurred:</p><pre>" +
                        Qt(n.message + "", !0) +
                        "</pre>";
                    return t ? Promise.resolve(e) : e;
                }
                if (t) return Promise.reject(n);
                throw n;
            };
        }
    })();
    function on(e, t) {
        return an.parse(e, t);
    }
    (on.options = on.setOptions =
        function (e) {
            return (
                an.setOptions(e),
                (on.defaults = an.defaults),
                Je(on.defaults),
                on
            );
        }),
        (on.getDefaults = function () {
            return {
                async: !1,
                breaks: !1,
                extensions: null,
                gfm: !0,
                hooks: null,
                pedantic: !1,
                renderer: null,
                silent: !1,
                tokenizer: null,
                walkTokens: null,
            };
        }),
        (on.defaults = Ze),
        (on.use = function (...e) {
            return (
                an.use(...e), (on.defaults = an.defaults), Je(on.defaults), on
            );
        }),
        (on.walkTokens = function (e, t) {
            return an.walkTokens(e, t);
        }),
        (on.parseInline = an.parseInline),
        (on.Parser = nn),
        (on.parser = nn.parse),
        (on.Renderer = en),
        (on.TextRenderer = tn),
        (on.Lexer = Jt),
        (on.lexer = Jt.lex),
        (on.Tokenizer = Zt),
        (on.Hooks = rn),
        (on.parse = on),
        on.options,
        on.setOptions,
        on.use,
        on.walkTokens,
        on.parseInline,
        nn.parse,
        Jt.lex;
    const ln = ({ content: e }) => {
            on.setOptions({ breaks: !0, gfm: !0 });
            const t = on(e);
            return r.createElement("div", {
                className:
                    "prose max-w-none  prose-headings:text-[var(--markdown-heading)]  prose-p:text-[var(--markdown-text)] prose-a:text-[var(--markdown-link)] hover:prose-a:opacity-80 prose-strong:text-[var(--markdown-bold)] prose-em:text-[var(--markdown-italic)] prose-code:text-[var(--markdown-code)] prose-code:bg-[var(--markdown-code-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--markdown-block-bg)] prose-pre:p-4 prose-pre:rounded prose-pre:code:bg-transparent prose-pre:code:p-0 prose-blockquote:border-l-4 prose-blockquote:border-[var(--markdown-blockquote-border)] prose-blockquote:pl-4 prose-blockquote:text-[var(--markdown-blockquote)] prose-ul:text-[var(--markdown-text)] prose-ol:text-[var(--markdown-text)] prose-li:text-[var(--markdown-text)] prose-hr:border-[var(--markdown-hr)] prose-table:text-[var(--markdown-text)] prose-thead:border-[var(--markdown-border)] prose-tr:border-[var(--markdown-border)] prose-th:text-[var(--markdown-heading)] prose-td:border-[var(--markdown-border)] /* Table styles */ prose-table:border-collapse prose-table:w-full prose-table:border-[var(--markdown-table-border)] prose-thead:bg-[var(--markdown-table-header-bg)] prose-th:text-[var(--markdown-table-header-text)] prose-th:p-2 prose-th:font-semibold prose-td:border-[var(--markdown-table-border)] prose-td:p-2 prose-td:text-[var(--markdown-text)] /* Checkbox styles */ [type='checkbox']:text-[var(--markdown-checkbox-checked)] [type='checkbox']:border-[var(--markdown-checkbox-border)] [type='checkbox']:rounded [type='checkbox']:focus:ring-[var(--markdown-checkbox-focus)]",
                dangerouslySetInnerHTML: { __html: t },
            });
        },
        sn = ({ content: e }) =>
            r.createElement(
                "div",
                { className: "flex justify-center" },
                r.createElement("div", {
                    dangerouslySetInnerHTML: { __html: e },
                }),
            ),
        un = ({ artifact: e }) => {
            const { setOpenArtifact: t } = (0, r.useContext)(De),
                [n, a] = (0, r.useState)(!1);
            return r.createElement(
                "div",
                { className: "flex-1 relative" },
                r.createElement(
                    "div",
                    {
                        className:
                            "sidepanel-container absolute right-0 bottom-0 h-5/6 md:w-[calc(50vw-2.5rem)] flex flex-col transform transition-all ease-in-out rounded-xl",
                    },
                    r.createElement(
                        "div",
                        {
                            className:
                                "sidepannel-header flex items-center justify-between p-4 border-b",
                        },
                        r.createElement(
                            "div",
                            { className: "flex-1 min-w-0" },
                            r.createElement(
                                "h2",
                                { className: "font-semibold" },
                                e.title,
                            ),
                            r.createElement(
                                "p",
                                { className: "text-sm" },
                                "ID: ",
                                e.identifier,
                            ),
                        ),
                        r.createElement(
                            "div",
                            { className: "flex items-center gap-2 ml-4" },
                            r.createElement(
                                "button",
                                {
                                    onClick: () => {
                                        navigator.clipboard.writeText(
                                            e.content,
                                        ),
                                            a(!0),
                                            setTimeout(() => a(!1), 2e3);
                                    },
                                    className:
                                        "sidepanel-button p-2 rounded-md transition-colors",
                                    title: "Copy content",
                                },
                                r.createElement(Ye, { size: 16 }),
                                r.createElement(
                                    "span",
                                    { className: "sr-only" },
                                    "Copy content",
                                ),
                            ),
                            r.createElement(
                                "button",
                                {
                                    onClick: () => t(!1),
                                    className:
                                        "sidepanel-button p-2 rounded-md transition-colors",
                                    title: "Close",
                                },
                                r.createElement(Ge, { size: 16 }),
                                r.createElement(
                                    "span",
                                    { className: "sr-only" },
                                    "Close",
                                ),
                            ),
                        ),
                    ),
                    r.createElement(
                        "div",
                        { className: "flex-1 overflow-auto p-4" },
                        (() => {
                            switch (e.type) {
                                case "application/vnd.ant.code":
                                    return r.createElement(Xe, {
                                        content: e.content,
                                    });
                                case "text/markdown":
                                    return r.createElement(ln, {
                                        content: e.content,
                                    });
                                case "image/svg+xml":
                                    return r.createElement(sn, {
                                        content: e.content,
                                    });
                                default:
                                    return null;
                            }
                        })(),
                    ),
                    n &&
                        r.createElement(
                            "div",
                            {
                                className:
                                    "absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md",
                            },
                            "Copied to clipboard!",
                        ),
                ),
            );
        },
        cn = ({ children: e }) => {
            const t = V(),
                { setOpenArtifact: n } = (0, r.useContext)(De);
            return (
                (0, r.useEffect)(() => {
                    n(null);
                }, [t, n]),
                e
            );
        },
        dn = ({ children: e }) => {
            const [t, n] = (0, r.useState)(null);
            return r.createElement(
                De.Provider,
                { value: { openArtifact: t, setOpenArtifact: n } },
                r.createElement(
                    cn,
                    null,
                    r.createElement(
                        "div",
                        {
                            className:
                                "flex h-screen " + (t ? "ml-16" : "ml-0]"),
                        },
                        r.createElement(
                            "div",
                            {
                                className:
                                    "flex-1 overflow-auto transition-all duration-300 ease-in-out " +
                                    (t ? "w-7/12" : "w-full"),
                            },
                            e,
                        ),
                        t && r.createElement(un, { artifact: t }),
                    ),
                ),
            );
        },
        pn = ({ initialThreadId: e }) => {
            const [t, n] = (0, r.useState)(null),
                [a, o] = (0, r.useState)([]),
                l = Y();
            (0, r.useEffect)(() => {
                e && i(e);
            }, [e]);
            const i = async (e) => {
                    try {
                        const t = await fetch(`/app/api/threads/${e}/`);
                        if (t.ok) {
                            const r = await t.json();
                            n(r), s(e);
                        } else l("/");
                    } catch (e) {
                        console.error("Error fetching thread:", e), l("/");
                    }
                },
                s = async (e) => {
                    const t = await fetch(`/app/api/threads/${e}/messages/`),
                        n = await t.json();
                    o(n);
                };
            return r.createElement(
                "div",
                { className: "relative w-full" },
                r.createElement(Ke, null),
                r.createElement(
                    dn,
                    null,
                    r.createElement(
                        "div",
                        {
                            className:
                                "chat-container flex flex-col items-center w-full max-w-3xl mx-auto px-4 min-h-screen",
                        },
                        r.createElement(
                            "div",
                            {
                                className:
                                    "chat-main relative flex w-full flex-1 overflow-x-hidden overflow-y-scroll pt-6 md:pr-8",
                            },
                            r.createElement(
                                "div",
                                {
                                    className:
                                        "relative mx-auto flex h-full w-full max-w-3xl flex-1 flex-col md:px-2",
                                },
                                r.createElement(
                                    "div",
                                    {
                                        className:
                                            "flex-1 flex flex-col gap-3 px-4 max-w-3xl mx-auto w-full pt-1",
                                    },
                                    a.map((e) =>
                                        e.is_bot
                                            ? r.createElement(Ve, {
                                                  message: e.content,
                                              })
                                            : r.createElement(Me, {
                                                  message: e.content,
                                              }),
                                    ),
                                ),
                            ),
                        ),
                        r.createElement(
                            "div",
                            {
                                className:
                                    "message-input sticky bottom-0 mx-auto w-full pt-6",
                            },
                            r.createElement($e, {
                                onSubmit: async (e) => {
                                    if (!e.trim() || !t) return;
                                    console.log(t.id);
                                    const n = await fetch(
                                            "/app/api/messages/",
                                            {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type":
                                                        "application/json",
                                                },
                                                body: JSON.stringify({
                                                    content: e.trim(),
                                                    thread: t.id,
                                                }),
                                            },
                                        ),
                                        r = await n.json();
                                    o([...a, ...r]);
                                },
                            }),
                        ),
                    ),
                ),
            );
        },
        fn = () => {
            const e = Y();
            return r.createElement(
                "div",
                { className: "flex min-h-screen w-full" },
                r.createElement(Ke, null),
                r.createElement(
                    "main",
                    { className: "flex-1 pl-[4.5rem]" },
                    " ",
                    r.createElement(
                        "div",
                        {
                            className:
                                "mx-auto mt-4 w-full max-w-7xl px-4 pb-20 md:pl-8 lg:mt-6 flex flex-col items-center gap-8 pt-12 md:pr-14 2xl:pr-20",
                        },
                        r.createElement(
                            "div",
                            {
                                className:
                                    "text-input top-5 mx-auto w-full max-w-2xl md:sticky",
                            },
                            r.createElement(
                                "form",
                                null,
                                r.createElement(
                                    "div",
                                    {
                                        className:
                                            "flex flex-col bg-bg-000 gap-1.5 border-0.5 border-border-300 pl-4 pt-2.5 pr-2.5 pb-2.5 sm:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.035)] focus-within:shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)] focus-within:border-border-200 cursor-text z-10 rounded-2xl",
                                    },
                                    r.createElement($e, {
                                        onSubmit: async (t) => {
                                            if (!t.trim()) return;
                                            const n = await fetch(
                                                    "/app/api/threads/",
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            title: t.trim(),
                                                        }),
                                                    },
                                                ),
                                                r = await n.json();
                                            (async (e, t) => {
                                                if (!e.trim()) return;
                                                const n = await fetch(
                                                    "/app/api/messages/",
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            content: e,
                                                            thread: t,
                                                        }),
                                                    },
                                                );
                                                await n.json();
                                            })(t, r.id),
                                                e(`/t/${r.id}`);
                                        },
                                    }),
                                ),
                            ),
                        ),
                    ),
                ),
            );
        };
    var hn = n(72),
        mn = n.n(hn),
        gn = n(825),
        bn = n.n(gn),
        yn = n(659),
        wn = n.n(yn),
        vn = n(56),
        kn = n.n(vn),
        xn = n(159),
        Sn = n.n(xn),
        En = n(113),
        Cn = n.n(En),
        zn = n(992),
        _n = {};
    (_n.styleTagTransform = Cn()),
        (_n.setAttributes = kn()),
        (_n.insert = wn().bind(null, "head")),
        (_n.domAPI = bn()),
        (_n.insertStyleElement = Sn()),
        mn()(zn.A, _n),
        zn.A && zn.A.locals && zn.A.locals;
    var Pn = n(321),
        Tn = {};
    (Tn.styleTagTransform = Cn()),
        (Tn.setAttributes = kn()),
        (Tn.insert = wn().bind(null, "head")),
        (Tn.domAPI = bn()),
        (Tn.insertStyleElement = Sn()),
        mn()(Pn.A, Tn),
        Pn.A && Pn.A.locals && Pn.A.locals;
    const Nn = () => {
            const { threadId: e } = (function () {
                let { matches: e } = r.useContext(q),
                    t = e[e.length - 1];
                return t ? t.params : {};
            })();
            return r.createElement(pn, { initialThreadId: e });
        },
        Rn = () =>
            r.createElement(
                Te,
                null,
                r.createElement(
                    se,
                    null,
                    r.createElement(le, {
                        path: "/t/:threadId",
                        element: r.createElement(Nn, null),
                    }),
                    r.createElement(le, {
                        path: "/",
                        element: r.createElement(fn, null),
                    }),
                ),
            ),
        Ln = document.getElementById("root");
    (0, a.createRoot)(Ln).render(r.createElement(Rn, null));
})();
