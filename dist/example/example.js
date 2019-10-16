/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fastclick = __webpack_require__(1);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _weui = __webpack_require__(2);

	var _weui2 = _interopRequireDefault(_weui);

	__webpack_require__(38);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_fastclick2.default.attach(document.body);

	/* dialog */
	// import 'weui';
	document.querySelector('#alertBtn').addEventListener('click', function () {
	    _weui2.default.alert('自定义标题的alert', function () {
	        console.log('ok');
	    }, {
	        title: '自定义标题'
	    });
	});

	/* confirm */
	document.querySelector('#confirmBtn').addEventListener('click', function () {
	    _weui2.default.confirm('自定义标题的confirm', function () {
	        console.log('yes');
	    }, function () {
	        console.log('no');
	    }, {
	        title: '自定义标题'
	    });
	});

	/* toast */
	document.querySelector('#toastBtn').addEventListener('click', function () {
	    _weui2.default.toast('操作成功', {
	        duration: 3000,
	        className: 'bears'
	    });
	});

	/* loading */
	document.querySelector('#loadingBtn').addEventListener('click', function () {
	    var loading = _weui2.default.loading('loading');
	    setTimeout(function () {
	        loading.hide();
	    }, 3000);
	});

	/* actionSheet */
	document.querySelector('#actionSheetBtn').addEventListener('click', function () {
	    _weui2.default.actionSheet([{
	        label: '拍照',
	        onClick: function onClick() {
	            console.log('拍照');
	        }
	    }, {
	        label: '从相册选择',
	        onClick: function onClick() {
	            console.log('从相册选择');
	        }
	    }, {
	        label: '其他',
	        onClick: function onClick() {
	            console.log('其他');
	        }
	    }], [{
	        label: '取消',
	        onClick: function onClick() {
	            console.log('取消');
	        }
	    }], {
	        className: 'custom-classname'
	    });
	});

	/* topTips */
	document.querySelector('#topTipsBtn').addEventListener('click', function () {
	    _weui2.default.topTips('请填写正确的字段', {
	        duration: 3000,
	        className: 'custom-classname',
	        callback: function callback() {
	            console.log('close');
	        }
	    });
	});

	/* picker */
	// 普通选择器
	document.querySelector('#pickerBtn').addEventListener('click', function () {
	    _weui2.default.picker([{
	        label: '飞机票',
	        value: 0
	    }, {
	        label: '火车票(disabled)',
	        disabled: true,
	        value: 1
	    }, {
	        label: '的士票(disabled)',
	        disabled: true,
	        value: 2
	    }, {
	        label: '住宿费',
	        value: 3
	    }, {
	        label: '礼品费',
	        value: 4
	    }, {
	        label: '活动费',
	        value: 5
	    }, {
	        label: '通讯费',
	        value: 6
	    }, {
	        label: '补助',
	        value: 7
	    }, {
	        label: '通讯费',
	        value: 8
	    }, {
	        label: '其他',
	        value: 9
	    }], {
	        defaultValue: [8],
	        className: 'custom-classname',
	        onChange: function onChange(result) {
	            //console.log(item, index);
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'picker'
	    });
	});

	// 时间选择器
	document.querySelector('#datePickerBtn').addEventListener('click', function () {
	    _weui2.default.dateTimePicker({
	        start: '2016-12-29',
	        end: '2030-12-29',
	        /**
	         * https://zh.wikipedia.org/wiki/Cron
	         * cron 表达式后三位
	         * 示例：
	         *  * * *                每天
	         *  5 * *                每个月的5日
	         *  1-10 * *             每个月的前10日
	         *  1,5,10 * *           每个月的1号、5号、10号
	         *  *\/2 * *             每个月的 1、3、5、7...日，注意写的时候斜杠“/”前面没有反斜杠“\”，这是因为是注释所以需要转义
	         *  * 2 0                2月的每个周日
	         *  * * 0,6              每个周末
	         *  * * 3                每周三
	         */
	        cron: '* * *',
	        defaultValue: [2017, 7, 9],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'datePicker'
	    });
	});

	// 多列选择器
	document.querySelector('#multiPickerBtn').addEventListener('click', function () {
	    _weui2.default.picker([{
	        label: '1',
	        value: '1'
	    }, {
	        label: '2',
	        value: '2'
	    }, {
	        label: '3',
	        value: '3'
	    }], [{
	        label: 'A',
	        value: 'A'
	    }, {
	        label: 'B',
	        value: 'B'
	    }, {
	        label: 'C',
	        value: 'C'
	    }], {
	        defaultValue: ['3', 'A'],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'multiPickerBtn'
	    });
	});

	// 级联选择器
	document.querySelector('#cascadePickerBtn').addEventListener('click', function () {
	    _weui2.default.picker([{
	        label: '广东',
	        value: 0,
	        children: [{
	            label: '广州',
	            value: 0,
	            children: [{
	                label: '海珠',
	                value: 0
	            }, {
	                label: '番禺',
	                value: 1
	            }]
	        }, {
	            label: '佛山',
	            value: 1,
	            children: [{
	                label: '禅城',
	                value: 0
	            }, {
	                label: '南海',
	                value: 1
	            }]
	        }]
	    }, {
	        label: '广西',
	        value: 1,
	        children: [{
	            label: '南宁',
	            value: 0,
	            children: [{
	                label: '青秀',
	                value: 0
	            }, {
	                label: '兴宁',
	                value: 1
	            }]
	        }, {
	            label: '桂林',
	            value: 1,
	            children: [{
	                label: '象山',
	                value: 0
	            }, {
	                label: '秀峰',
	                value: 1
	            }]
	        }]
	    }], {
	        depth: 3,
	        defaultValue: [0, 1, 1],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'cascadePicker'
	    });
	});

	/*list*/
	// 列表多选
	document.querySelector('#list').addEventListener('click', function () {
	    _weui2.default.list([{ id: 1, name: '张三' }, { id: 2, name: '李四' }, { id: 3, name: '王五' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 4, name: '赵六' }, { id: 5, name: '田七' }], [], {
	        title: '请选择人员',
	        onConfirm: function onConfirm(result) {
	            _weui2.default.alert(JSON.stringify(result), { isAndroid: false });
	        }
	    });
	});

	/* searchbar */
	_weui2.default.searchBar('#searchBar');

	/* slider 因为需要获取长度，所以必须要在slider显示的时候才调用weui.slider*/
	var isSetSlider = false;

	function setSlider() {
	    if (isSetSlider) return;
	    isSetSlider = true;

	    // 普通slider
	    var sliderValue = document.getElementById('sliderValue');
	    _weui2.default.slider('#slider', {
	        defaultValue: 50,
	        onChange: function onChange(percent) {
	            sliderValue.innerHTML = Math.round(percent);
	            console.log(percent);
	        }
	    });

	    // 带step的slider
	    var sliderStepValue = document.getElementById('sliderStepValue');
	    _weui2.default.slider('#sliderStep', {
	        step: 10,
	        defaultValue: 40,
	        onChange: function onChange(percent) {
	            sliderStepValue.innerHTML = Math.round(percent);
	            console.log(percent);
	        }
	    });

	    // 分块的slider
	    var sliderBlockValue = document.getElementById('sliderBlockValue');
	    _weui2.default.slider('#sliderBlock', {
	        step: 100 / 3,
	        defaultValue: 33.333,
	        onChange: function onChange(percent) {
	            sliderBlockValue.innerHTML = Math.round(percent);
	            console.log(percent);
	        }
	    });
	}

	/* tab */
	_weui2.default.tab('#tab', {
	    defaultIndex: 0,
	    onChange: function onChange(index) {
	        console.log(index);

	        if (index == 3) {
	            setSlider(); // 设置slider
	        }
	    }
	});

	/* form */
	// 约定正则
	var regexp = {
	    regexp: {
	        IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	        VCODE: /^.{4}$/
	    }
	};

	// 失去焦点时检测
	_weui2.default.form.checkIfBlur('#form', regexp);

	// 表单提交
	document.querySelector('#formSubmitBtn').addEventListener('click', function () {
	    _weui2.default.form.validate('#form', function (error) {
	        console.log(error);
	        if (!error) {
	            var loading = _weui2.default.loading('提交中...');
	            setTimeout(function () {
	                loading.hide();
	                _weui2.default.toast('提交成功', 3000);
	            }, 1500);
	        }
	    }, regexp);
	});

	/* 图片自动上传 */
	var uploadCount = 0,
	    uploadList = [];
	var uploadCountDom = document.getElementById('uploadCount');
	_weui2.default.uploader('#uploader', {
	    url: 'http://' + location.hostname + ':8002/upload',
	    auto: true,
	    type: 'file',
	    fileVal: 'fileVal',
	    compress: {
	        width: 1600,
	        height: 1600,
	        quality: .8
	    },
	    onBeforeQueued: function onBeforeQueued(files) {
	        if (['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].indexOf(this.type) < 0) {
	            _weui2.default.alert('请上传图片');
	            return false;
	        }
	        if (this.size > 10 * 1024 * 1024) {
	            _weui2.default.alert('请上传不超过10M的图片');
	            return false;
	        }
	        if (files.length > 5) {
	            // 防止一下子选中过多文件
	            _weui2.default.alert('最多只能上传5张图片，请重新选择');
	            return false;
	        }
	        if (uploadCount + 1 > 5) {
	            _weui2.default.alert('最多只能上传5张图片');
	            return false;
	        }

	        ++uploadCount;
	        uploadCountDom.innerHTML = uploadCount;
	    },
	    onQueued: function onQueued() {
	        uploadList.push(this);
	        console.log(this);
	    },
	    onBeforeSend: function onBeforeSend(data, headers) {
	        console.log(this, data, headers);
	        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
	        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

	        // return false; // 阻止文件上传
	    },
	    onProgress: function onProgress(procent) {
	        console.log(this, procent);
	    },
	    onSuccess: function onSuccess(ret) {
	        console.log(this, ret);
	    },
	    onError: function onError(err) {
	        console.log(this, err);
	    }
	});
	// 缩略图预览
	document.querySelector('#uploaderFiles').addEventListener('click', function (e) {
	    var target = e.target;

	    while (!target.classList.contains('weui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;

	    var url = target.getAttribute('style') || '';
	    var id = target.getAttribute('data-id');

	    if (url) {
	        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
	    }
	    var gallery = _weui2.default.gallery(url, {
	        className: 'custom-name',
	        onDelete: function onDelete() {
	            _weui2.default.confirm('确定删除该图片？', function () {
	                --uploadCount;
	                uploadCountDom.innerHTML = uploadCount;

	                for (var i = 0, len = uploadList.length; i < len; ++i) {
	                    var file = uploadList[i];
	                    if (file.id == id) {
	                        file.stop();
	                        break;
	                    }
	                }
	                target.remove();
	                gallery.hide();
	            });
	        }
	    });
	});

	/* 图片手动上传 */
	var uploadCustomFileList = [];
	// 这里是简单的调用，其余api请参考文档
	_weui2.default.uploader('#uploaderCustom', {
	    url: 'http://localhost:8002/upload',
	    auto: false,
	    onQueued: function onQueued() {
	        uploadCustomFileList.push(this);
	    }
	});
	// 手动上传按钮
	document.getElementById('uploaderCustomBtn').addEventListener('click', function () {
	    uploadCustomFileList.forEach(function (file) {
	        file.upload();
	    });
	});
	// 缩略图预览
	document.querySelector('#uploaderCustomFiles').addEventListener('click', function (e) {
	    var target = e.target;

	    while (!target.classList.contains('weui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;

	    var url = target.getAttribute('style') || '';
	    var id = target.getAttribute('data-id');

	    if (url) {
	        url = url.match(/url\((.*?)\)/)[1];
	    }
	    var gallery = _weui2.default.gallery(url, {
	        onDelete: function onDelete() {
	            _weui2.default.confirm('确定删除该图片？', function () {
	                var index;
	                for (var i = 0, len = uploadCustomFileList.length; i < len; ++i) {
	                    var file = uploadCustomFileList[i];
	                    if (file.id == id) {
	                        index = i;
	                        break;
	                    }
	                }
	                if (index) uploadCustomFileList.splice(index, 1);

	                target.remove();
	                gallery.hide();
	            });
	        }
	    });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _alert = __webpack_require__(9);

	var _alert2 = _interopRequireDefault(_alert);

	var _alertDelay = __webpack_require__(10);

	var _alertDelay2 = _interopRequireDefault(_alertDelay);

	var _confirm = __webpack_require__(11);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _toast = __webpack_require__(12);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(14);

	var _loading2 = _interopRequireDefault(_loading);

	var _actionSheet = __webpack_require__(16);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	var _topTips = __webpack_require__(18);

	var _topTips2 = _interopRequireDefault(_topTips);

	var _searchBar = __webpack_require__(20);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _tab = __webpack_require__(21);

	var _tab2 = _interopRequireDefault(_tab);

	var _form = __webpack_require__(22);

	var _form2 = _interopRequireDefault(_form);

	var _uploader = __webpack_require__(23);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _picker = __webpack_require__(27);

	var _gallery = __webpack_require__(33);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _slider = __webpack_require__(35);

	var _slider2 = _interopRequireDefault(_slider);

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _list = __webpack_require__(36);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    dialog: _dialog2.default,
	    alert: _alert2.default,
	    alertDelay: _alertDelay2.default,
	    confirm: _confirm2.default,
	    toast: _toast2.default,
	    loading: _loading2.default,
	    actionSheet: _actionSheet2.default,
	    topTips: _topTips2.default,
	    searchBar: _searchBar2.default,
	    tab: _tab2.default,
	    form: _form2.default,
	    uploader: _uploader2.default,
	    picker: _picker.picker,
	    datePicker: _picker.datePicker,
	    dateTimePicker: _picker.dateTimePicker,
	    gallery: _gallery2.default,
	    slider: _slider2.default,
	    util: _util2.default,
	    list: _list2.default
	}; /*
	   * Tencent is pleased to support the open source community by making WeUI.js available.
	   *
	   * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	   *
	   * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	   * with the License. You may obtain a copy of the License at
	   *
	   *       http://opensource.org/licenses/MIT
	   *
	   * Unless required by applicable law or agreed to in writing, software distributed under the License is
	   * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	   * either express or implied. See the License for the specific language governing permissions and
	   * limitations under the License.
	   */

	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(8);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * dialog，弹窗，alert和confirm的父类
	 *
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.content 弹窗的内容
	 * @param {string=} options.className 弹窗的自定义类名
	 * @param {array=} options.buttons 按钮配置项
	 *
	 * @param {string} [options.buttons[].label=确定] 按钮的文字
	 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
	 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
	 *
	 * @example
	 * weui.dialog({
	 *     title: 'dialog标题',
	 *     content: 'dialog内容',
	 *     className: 'custom-classname',
	 *     buttons: [{
	 *         label: '取消',
	 *         type: 'default',
	 *         onClick: function () { alert('取消') }
	 *     }, {
	 *         label: '确定',
	 *         type: 'primary',
	 *         onClick: function () { alert('确定') }
	 *     }]
	 * });
	 *
	 * // 主动关闭
	 * var $dialog = weui.dialog({...});
	 * $dialog.hide(function(){
	 *      console.log('`dialog` has been hidden');
	 * });
	 */
	function dialog() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    if (_sington) return _sington;

	    var isAndroid = false;
	    options = _util2.default.extend({
	        title: null,
	        content: '',
	        className: '',
	        buttons: [{
	            label: '确定',
	            type: 'primary',
	            onClick: _util2.default.noop
	        }],
	        isAndroid: isAndroid
	    }, options);

	    var $dialogWrap = (0, _util2.default)(_util2.default.render(_dialog2.default, options));
	    var $dialog = $dialogWrap.find('.weui-dialog');
	    var $mask = $dialogWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $mask.addClass('weui-animate-fade-out');
	        $dialog.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $dialogWrap.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }

	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($dialogWrap);
	    // 不能直接把.weui-animate-fade-in加到$dialog，会导致mask的z-index有问题
	    $mask.addClass('weui-animate-fade-in');
	    $dialog.addClass('weui-animate-fade-in');

	    $dialogWrap.on('click', '.weui-dialog__btn', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        if (options.buttons[index].onClick) {
	            if (options.buttons[index].onClick.call(this, evt) !== false) hide();
	        } else {
	            hide();
	        }
	    });

	    _sington = $dialogWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}

	exports.default = dialog;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                               * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                               * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                               * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                               * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                               * limitations under the License.
	                                                                                                                                                                                                                                                                               */

	__webpack_require__(5);

	var _objectAssign = __webpack_require__(6);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(7);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其实，$ 的原型就是一个数组，拥有数组的各种方法
	// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

	/* 判断系统 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}

	_detect.call(_balajs2.default, navigator.userAgent);

	/*判断是不是Android或iPhone*/
	function _device(ua) {
	    var os = this.os,
	        mobile = ua.match(/.*iPhone.*|.*Android.*/);
	    if (mobile) {
	        os.mobile = true;
	    }
	}

	_device.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            if ($element && $element.parentNode) {
	                $element.parentNode.removeChild($element);
	            }
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.add(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {removeClass}
	     */
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.remove(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param index
	     * @returns {*|jQuery|HTMLElement}
	     */
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 目前只能接受字符串
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 目前只能接受object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
	                $element.style[key] = obj[key];
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param eventType
	     * @param selector
	     * @param handler
	     */
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
	                        handler.call(this, evt);
	                    }
	                });
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} eventType
	     * @param {String|Function} selector
	     * @param {Function=} handler
	     * @returns {off}
	     */
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
	                    $element.removeEventListener(event, handler);
	                }
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {Number}
	     */
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;

	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     * 元素是否可见
	     * @returns {boolean}
	     */
	    isVisible: function isVisible() {
	        return !!(this[0].offsetWidth || this[0].offsetHeight || this[0].getClientRects().length);
	    },
	    /**
	     * 元素是否隐藏
	     * @returns {boolean}
	     */
	    isHidden: function isHidden() {
	        return !(this[0].offsetWidth || this[0].offsetHeight || this[0].getClientRects().length);
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments;

	        if (_typeof(arguments[0]) == 'object') {
	            var attrsObj = arguments[0];
	            var that = this;
	            Object.keys(attrsObj).forEach(function (attr) {
	                that.forEach(function ($element) {
	                    $element.setAttribute(attr, attrsObj[attr]);
	                });
	            });
	            return this;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
	    /**
	     * render
	     * 取值：<%= variable %>
	     * 表达式：<% if {} %>
	     * 例子：
	     *  <div>
	     *    <div class="weui-mask"></div>
	     *    <div class="weui-dialog">
	     *    <% if(typeof title === 'string'){ %>
	     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
	     *    <% } %>
	     *    <div class="weui-dialog__bd"><%=content%></div>
	     *    <div class="weui-dialog__ft">
	     *    <% for(var i = 0; i < buttons.length; i++){ %>
	     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
	     *    <% } %>
	     *    </div>
	     *    </div>
	     *  </div>
	     * A very simple template engine
	     * @param {String} tpl
	     * @param {Object=} data
	     * @returns {String}
	     */
	    render: function render(tpl, data) {
	        var code = 'var p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 获得元素计算后的样式值
	     * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	(function (ElementProto) {
		if (typeof ElementProto.matches !== 'function') {
			ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
				var element = this;
				var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
				var index = 0;

				while (elements[index] && elements[index] !== element) {
					++index;
				}

				return Boolean(elements[index]);
			};
		}

		if (typeof ElementProto.closest !== 'function') {
			ElementProto.closest = function closest(selector) {
				var element = this;

				while (element && element.nodeType === 1) {
					if (element.matches(selector)) {
						return element;
					}

					element = element.parentNode;
				}

				return null;
			};
		}
	})(window.Element.prototype);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-plugins <%= className %>\"> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。
	 * @param {string} content 弹窗内容
	 * @param {function=} yes 点击确定按钮的回调
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.className 自定义类名
	 * @param {array=} options.buttons 按钮配置项，详情参考dialog
	 *
	 * @example
	 * weui.alert('普通的alert');
	 * weui.alert('带回调的alert', function(){ console.log('ok') });
	 * var alertDom = weui.alert('手动关闭的alert', function(){
	 *     return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
	 * });
	 * weui.alert('自定义标题的alert', { title: '自定义标题' });
	 * weui.alert('带回调的自定义标题的alert', function(){
	 *    console.log('ok')
	 * }, {
	 *    title: '自定义标题'
	 * });
	 * weui.alert('自定义按钮的alert', {
	 *     title: '自定义按钮的alert',
	 *     buttons: [{
	 *         label: 'OK',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('ok') }
	 *     }]
	 * });
	 */
	function alert() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments[2];

	    if ((typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object') {
	        options = yes;
	        yes = _util2.default.noop;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '确定',
	            type: 'primary',
	            onClick: yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = alert;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _alert = __webpack_require__(9);

	var _alert2 = _interopRequireDefault(_alert);

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 延迟500ms弹出对话框
	 * @param content
	 * @param yes
	 * @param options
	 */
	var alertDelay = function alertDelay() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments[2];

	    var dialog = {};
	    setTimeout(function () {
	        dialog.ref = (0, _alert2.default)(content, yes, options);
	    }, 500);
	    return dialog;
	};
	exports.default = alertDelay;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 确认弹窗
	 * @param {string} content 弹窗内容
	 * @param {function=} yes 点击确定按钮的回调
	 * @param {function=} no  点击取消按钮的回调
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.className 自定义类名
	 * @param {array=} options.buttons 按钮配置项，详情参考dialog
	 *
	 * @example
	 * weui.confirm('普通的confirm');
	 * weui.confirm('自定义标题的confirm', { title: '自定义标题' });
	 * weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
	 * var confirmDom = weui.confirm('手动关闭的confirm', function(){
	 *     return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
	 * });
	 * weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
	 *     title: '自定义标题'
	 * });
	 * weui.confirm('自定义按钮的confirm', {
	 *     title: '自定义按钮的confirm',
	 *     buttons: [{
	 *         label: 'NO',
	 *         type: 'default',
	 *         onClick: function(){ console.log('no') }
	 *     }, {
	 *         label: 'YES',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('yes') }
	 *     }]
	 * });
	 */
	function confirm() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util2.default.noop;
	    var options = arguments[3];

	    if ((typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object') {
	        options = yes;
	        yes = _util2.default.noop;
	    } else if ((typeof no === 'undefined' ? 'undefined' : _typeof(no)) === 'object') {
	        options = no;
	        no = _util2.default.noop;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '取消',
	            type: 'default',
	            onClick: no
	        }, {
	            label: '确定',
	            type: 'primary',
	            onClick: yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = confirm;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(13);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * toast 一般用于操作成功时的提示场景
	 * @param {string} content toast的文字
	 * @param {Object|function=} options 配置项或回调
	 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
	 * @param {function=} options.callback 关闭后的回调
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * weui.toast('操作成功', 3000);
	 * weui.toast('操作成功', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function toast() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }
	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $toastWrap = (0, _util2.default)(_util2.default.render(_toast2.default, options));
	    var $toast = $toastWrap.find('.weui-toast');
	    var $mask = $toastWrap.find('.weui-mask');

	    (0, _util2.default)('body').append($toastWrap);
	    $toast.addClass('weui-animate-fade-in');
	    $mask.addClass('weui-animate-fade-in');

	    setTimeout(function () {
	        $mask.addClass('weui-animate-fade-out');
	        $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $toastWrap.remove();
	            options.callback();
	        });
	    }, options.duration);

	    return { root: $toastWrap[0] };
	}

	exports.default = toast;
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-plugins <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(15);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * loading
	 * @param {string} content loading的文字
	 * @param {object=} options 配置项
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * var loading = weui.loading('loading', {
	 *     className: 'custom-classname'
	 * });
	 * setTimeout(function () {
	 *     loading.hide(function() {
	 *          console.log('`loading` has been hidden');
	 *      });
	 * }, 3000);
	 */
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function loading() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    options = _util2.default.extend({ content: content, className: '' }, options);

	    var $loadingWrap = (0, _util2.default)(_util2.default.render(_loading2.default, options));
	    var $loading = $loadingWrap.find('.weui-toast');
	    var $mask = $loadingWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错
	        $mask.addClass('weui-animate-fade-out');
	        $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            //动画结束
	            $loadingWrap.remove();
	            callback && callback();
	        });
	    }

	    (0, _util2.default)('body').append($loadingWrap);
	    $loading.addClass('weui-animate-fade-in');
	    $mask.addClass('weui-animate-fade-in');

	    return { hide: _hide, root: $loadingWrap[0] };
	}

	exports.default = loading;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-loading_toast weui-plugins <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _actionSheet = __webpack_require__(17);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * actionsheet 弹出式菜单
	 * @param {array} menus 上层的选项
	 * @param {string} menus[].label 选项的文字
	 * @param {function} menus[].onClick 选项点击时的回调
	 *
	 * @param {array} actions 下层的选项
	 * @param {string} actions[].label 选项的文字
	 * @param {function} actions[].onClick 选项点击时的回调
	 *
	 * @param {object=} options 配置项
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * weui.actionSheet([
	 *     {
	 *         label: '拍照',
	 *         onClick: function () {
	 *             console.log('拍照');
	 *         }
	 *     }, {
	 *         label: '从相册选择',
	 *         onClick: function () {
	 *             console.log('从相册选择');
	 *         }
	 *     }, {
	 *         label: '其他',
	 *         onClick: function () {
	 *             console.log('其他');
	 *         }
	 *     }
	 * ], [
	 *     {
	 *         label: '取消',
	 *         onClick: function () {
	 *             console.log('取消');
	 *         }
	 *     }
	 * ], {
	 *     className: 'custom-classname'
	 * });
	 */
	function actionSheet() {
	    var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (_sington) return _sington;

	    var isAndroid = false;
	    options = _util2.default.extend({
	        menus: menus,
	        actions: actions,
	        className: '',
	        isAndroid: isAndroid
	    }, options);
	    var $actionSheetWrap = (0, _util2.default)(_util2.default.render(_actionSheet2.default, options));
	    var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
	    var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
	        $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $actionSheetWrap.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }

	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($actionSheetWrap);

	    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	    _util2.default.getStyle($actionSheet[0], 'transform');

	    $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
	    $actionSheetMask.addClass('weui-animate-fade-in').on('click', function () {
	        hide();
	    });
	    $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        menus[index].onClick.call(this, evt);
	        hide();
	    });
	    $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        actions[index].onClick.call(this, evt);
	        hide();
	    });

	    _sington = $actionSheetWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}

	exports.default = actionSheet;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-plugins <% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(19);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _toptips = null;

	/**
	 * toptips 顶部报错提示
	 * @param {string} content 报错的文字
	 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
	 * @param {number=} [options.duration=3000] 多少毫秒后消失
	 * @param {string=} options.className 自定义类名
	 * @param {function=} options.callback 消失后的回调
	 *
	 * @example
	 * weui.topTips('请填写正确的字段');
	 * weui.topTips('请填写正确的字段', 3000);
	 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
	 * weui.topTips('请填写正确的字段', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 *
	 * // 主动关闭
	 * var $topTips = weui.topTips('请填写正确的字段');
	 * $topTips.hide(function() {
	 *      console.log('`topTips` has been hidden');
	 * });
	 */
	function topTips(content) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }

	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $topTips = (0, _util2.default)(_util2.default.render(_topTips2.default, options));
	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $topTips.remove();
	        callback && callback();
	        options.callback();
	        _toptips = null;
	    }

	    (0, _util2.default)('body').append($topTips);
	    if (_toptips) {
	        clearTimeout(_toptips.timeout);
	        _toptips.hide();
	    }

	    _toptips = {
	        hide: _hide
	    };
	    _toptips.timeout = setTimeout(_hide, options.duration);

	    $topTips[0].hide = _hide;
	    return $topTips[0];
	}
	exports.default = topTips;
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn weui-plugins <%= className %>\" style=display:block><%= content %></div> ";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
	 * @param {string} selector searchbar的selector
	 *
	 * @example
	 * weui.searchBar('#searchBar');
	 */
	function searchBar(selector) {
	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $searchBar = (0, _util2.default)(ele);
	        var $searchLabel = $searchBar.find('.weui-search-bar__label');
	        var $searchInput = $searchBar.find('.weui-search-bar__input');
	        var $searchClear = $searchBar.find('.weui-icon-clear');
	        var $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

	        function cancelSearch() {
	            $searchInput.val('');
	            $searchBar.removeClass('weui-search-bar_focusing');
	        }

	        $searchLabel.on('click', function () {
	            $searchBar.addClass('weui-search-bar_focusing');
	            $searchInput[0].focus();
	        });
	        $searchInput.on('blur', function () {
	            if (!this.value.length) cancelSearch();
	        });
	        $searchClear.on('click', function () {
	            $searchInput.val('');
	            $searchInput[0].focus();
	        });
	        $searchCancel.on('click', function () {
	            cancelSearch();
	            $searchInput[0].blur();
	        });
	    });

	    return $eles;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  * 
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  * 
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  * 
	  *       http://opensource.org/licenses/MIT
	  * 
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = searchBar;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * tab tab导航栏
	 * @param {string} selector tab的selector
	 * @param {object=} options 配置项
	 * @param {number=} [options.defaultIndex=0] 初始展示的index
	 * @param {function=} options.onChange 点击tab时，返回对应的index
	 *
	 * @example
	 * weui.tab('#tab',{
	 *     defaultIndex: 0,
	 *     onChange: function(index){
	 *         console.log(index);
	 *     }
	 * });
	 */
	function tab(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        defaultIndex: 0,
	        onChange: _util2.default.noop
	    }, options);

	    $eles.forEach(function (ele) {
	        var $tab = (0, _util2.default)(ele);
	        var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
	        var $tabContents = $tab.find('.weui-tab__content');

	        $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
	        $tabContents.eq(options.defaultIndex).show();

	        $tabItems.on('click', function () {
	            var $this = (0, _util2.default)(this),
	                index = $this.index();

	            $tabItems.removeClass('weui-bar__item_on');
	            $this.addClass('weui-bar__item_on');

	            $tabContents.hide();
	            $tabContents.eq(index).show();

	            options.onChange.call(this, index);
	        });
	    });

	    return this;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  *
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  *
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  *
	  *       http://opensource.org/licenses/MIT
	  *
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = tab;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _alert = __webpack_require__(9);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Tencent is pleased to support the open source community by making WeUI.js available.
	 *
	 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	 *
	 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	 * with the License. You may obtain a copy of the License at
	 *
	 *       http://opensource.org/licenses/MIT
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under the License is
	 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	 * either express or implied. See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	function _findCellParent(ele) {
	    if (!ele || !ele.classList) return null;
	    if (ele.classList.contains('weui-cell')) return ele;
	    return _findCellParent(ele.parentNode);
	}
	//import topTips from '../topTips/topTips';


	function _validate($input, $form, regexp) {
	    var input = $input[0],
	        val = $input.val();

	    if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
	        var reg = input.getAttribute('pattern') || '';

	        if (input.type == 'radio') {
	            var radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');
	            for (var i = 0, len = radioInputs.length; i < len; ++i) {
	                if (radioInputs[i].checked) return null;
	            }
	            return 'empty';
	        } else if (input.type == 'checkbox') {
	            if (reg) {
	                var checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
	                var regs = reg.replace(/[{\s}]/g, '').split(',');
	                var count = 0;

	                if (regs.length != 2) {
	                    throw input.outerHTML + ' regexp is wrong.';
	                }

	                checkboxInputs.forEach(function (checkboxInput) {
	                    if (checkboxInput.checked) ++count;
	                });

	                if (!count) return 'empty';

	                if (regs[1] === '') {
	                    // {0,}
	                    if (count >= parseInt(regs[0])) {
	                        return null;
	                    } else {
	                        return 'notMatch';
	                    }
	                } else {
	                    // {0,2}
	                    if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
	                        return null;
	                    } else {
	                        return 'notMatch';
	                    }
	                }
	            } else {
	                return input.checked ? null : 'empty';
	            }
	        } else if (!$input.val().length) {
	            return 'empty';
	        } else if (reg) {
	            if (/^REG_/.test(reg)) {
	                if (!regexp) throw 'RegExp ' + reg + ' is empty.';

	                reg = reg.replace(/^REG_/, '');
	                if (!regexp[reg]) throw 'RegExp ' + reg + ' has not found.';

	                reg = regexp[reg];
	            }
	            return new RegExp(reg).test(val) ? null : 'notMatch';
	        } else {
	            return null;
	        }
	    } else if (val.length) {
	        // 有输入值
	        return null;
	    }

	    return 'empty';
	}

	function _showErrorMsg(error) {
	    if (error) {
	        var $ele = (0, _util2.default)(error.ele),
	            msg = error.msg,
	            tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
	        if (tips) (0, _alert2.default)(tips, { isAndroid: false }); //topTips(tips);

	        if (error.ele.type == 'checkbox' || error.ele.type == 'radio') return;

	        var cellParent = _findCellParent(error.ele);
	        if (cellParent) cellParent.classList.add('weui-cell_warn');
	    }
	}

	/**
	 * 表单校验
	 * @param {string} selector 表单的selector
	 * @param {function} callback 校验后的回调
	 * @param {Object=} options 配置项
	 * @param {object=} options.regexp 表单所需的正则表达式
	 *
	 * @example
	 * ##### 普通input的HTML
	 * ```html
	 * <input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
	 * <input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
	 * ```
	 * - required 表示需要校验
	 * - pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
	 * - 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
	 * <br>
	 *
	 * ##### radio
	 * radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
	 * ```html
	 * <input type="radio" value="male" name="sex" required tips="请选择性别" />
	 * <input type="radio" value="female" name="sex" />
	 * ```
	 * <br>
	 *
	 * ##### checkbox
	 * checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
	 * pattern 规定选择个数，用法与正则一致，例如：
	 * ```html
	 * <input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
	 * <input type="checkbox" name="assistance" value="欧阳锋" />
	 * <input type="checkbox" name="assistance" value="段智兴" />
	 * <input type="checkbox" name="assistance" value="洪七公" />
	 * ```
	 * - {1,}   至少选择1个
	 * - {1,2}  选择1-2个
	 * - 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
	 * <br>
	 *
	 * ``` js
	 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
	 * weui.form.validate('#form', function (error) {
	 *     if (!error) {
	 *         var loading = weui.loading('提交中...');
	 *         setTimeout(function () {
	 *             loading.hide();
	 *             weui.toast('提交成功', 3000);
	 *         }, 1500);
	 *     }
	 *     // return true; // 当return true时，不会显示错误
	 * }, {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 * ```
	 */
	function validate(selector) {
	    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var $eles = (0, _util2.default)(selector);
	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        var $requireds = $form.find('[required]');
	        if (typeof callback != 'function') callback = _showErrorMsg;

	        for (var i = 0, len = $requireds.length; i < len; ++i) {

	            var $required = $requireds.eq(i),
	                errorMsg = _validate($required, $form, options.regexp),
	                error = { ele: $required[0], msg: errorMsg };
	            if ($required.isHidden()) continue;
	            if (errorMsg) {
	                if (!callback(error)) _showErrorMsg(error);
	                return;
	            }
	        }
	        callback(null);
	    });
	    return this;
	}

	/**
	 * checkIfBlur 当表单的input失去焦点时校验
	 * @param {string} selector 表单的selector
	 * @param {Object=} options 配置项
	 * @param {object=} options.regexp 表单所需的正则表达式
	 *
	 * @example
	 * weui.form.checkIfBlur('#form', {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 */
	function checkIfBlur(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        $form.find('[required]').on('blur', function () {
	            // checkbox 和 radio 不做blur检测，以免误触发
	            if (this.type == 'checkbox' || this.type == 'radio') return;

	            var $this = (0, _util2.default)(this);
	            if ($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

	            var errorMsg = _validate($this, $form, options.regexp);
	            if (errorMsg) {
	                _showErrorMsg({
	                    ele: $this[0],
	                    msg: errorMsg
	                });
	            }
	        }).on('focus', function () {
	            var cellParent = _findCellParent(this);
	            if (cellParent) cellParent.classList.remove('weui-cell_warn');
	        });
	    });
	    return this;
	}

	exports.default = {
	    validate: validate,
	    checkIfBlur: checkIfBlur
	};
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _item = __webpack_require__(24);

	var _item2 = _interopRequireDefault(_item);

	var _image = __webpack_require__(25);

	var _upload = __webpack_require__(26);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _id = 0;

	/**
	 * uploader 上传组件
	 * @param {string} selector 上传组件的selector
	 * @param {object} options 配置项
	 * @param {string} [options.url] 上传的url，返回值需要使用json格式
	 * @param {boolean} [options.auto=true] 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example
	 * @param {string} [options.type=file] 上传类型, `file`为文件上传; `base64`为以base64上传
	 * @param {string=} [options.fileVal=file] 文件上传域的name
	 * @param {object=} [options.compress] 压缩配置, `false`则不压缩
	 * @param {number=} [options.compress.width=1600] 图片的最大宽度
	 * @param {number=} [options.compress.height=1600] 图片的最大高度
	 * @param {number=} [options.compress.quality=.8] 压缩质量, 取值范围 0 ~ 1
	 * @param {function=} [options.onBeforeQueued] 文件添加前的回调，return false则不添加
	 * @param {function=} [options.onQueued] 文件添加成功的回调
	 * @param {function=} [options.onBeforeSend] 文件上传前调用，具体参数看example
	 * @param {function=} [options.onSuccess] 上传成功的回调
	 * @param {function=} [options.onProgress] 上传进度的回调
	 * @param {function=} [options.onError] 上传失败的回调
	 *
	 * @example
	 * var uploadCount = 0;
	 * weui.uploader('#uploader', {
	 *    url: 'http://localhost:8081',
	 *    auto: true,
	 *    type: 'file',
	 *    fileVal: 'fileVal',
	 *    compress: {
	 *        width: 1600,
	 *        height: 1600,
	 *        quality: .8
	 *    },
	 *    onBeforeQueued: function(files) {
	 *        // `this` 是轮询到的文件, `files` 是所有文件
	 *
	 *        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
	 *            weui.alert('请上传图片');
	 *            return false; // 阻止文件添加
	 *        }
	 *        if(this.size > 10 * 1024 * 1024){
	 *            weui.alert('请上传不超过10M的图片');
	 *            return false;
	 *        }
	 *        if (files.length > 5) { // 防止一下子选择过多文件
	 *            weui.alert('最多只能上传5张图片，请重新选择');
	 *            return false;
	 *        }
	 *        if (uploadCount + 1 > 5) {
	 *            weui.alert('最多只能上传5张图片');
	 *            return false;
	 *        }
	 *
	 *        ++uploadCount;
	 *
	 *        // return true; // 阻止默认行为，不插入预览图的框架
	 *    },
	 *    onQueued: function(){
	 *        console.log(this);
	 *
	 *        // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
	 *        // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64
	 *
	 *        // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
	 *        // this.stop(); // 中断上传
	 *
	 *        // return true; // 阻止默认行为，不显示预览图的图像
	 *    },
	 *    onBeforeSend: function(data, headers){
	 *        console.log(this, data, headers);
	 *        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
	 *        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部
	 *
	 *        // return false; // 阻止文件上传
	 *    },
	 *    onProgress: function(procent){
	 *        console.log(this, procent);
	 *        // return true; // 阻止默认行为，不使用默认的进度显示
	 *    },
	 *    onSuccess: function (ret) {
	 *        console.log(this, ret);
	 *        // return true; // 阻止默认行为，不使用默认的成功态
	 *    },
	 *    onError: function(err){
	 *        console.log(this, err);
	 *        // return true; // 阻止默认行为，不使用默认的失败态
	 *    }
	 * });
	 */
	function uploader(selector, options) {
	    var $uploader = (0, _util2.default)(selector);
	    var URL = window.URL || window.webkitURL || window.mozURL;

	    // 找到DOM里file-content，若无，则插入一个。
	    function findFileCtn($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]');
	        var $fileCtn = $file.find('.weui-uploader__file-content');

	        if (!$fileCtn.length) {
	            $fileCtn = (0, _util2.default)('<div class="weui-uploader__file-content"></div>');
	            $file.append($fileCtn);
	        }
	        $file.addClass('weui-uploader__file_status');
	        return $fileCtn;
	    }

	    // 清除DOM里的上传状态
	    function clearFileStatus($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]').removeClass('weui-uploader__file_status');
	        $file.find('.weui-uploader__file-content').remove();
	    }

	    // 设置上传
	    function setUploadFile(file) {
	        file.url = URL.createObjectURL(file);
	        file.status = 'ready';
	        file.upload = function () {
	            (0, _upload2.default)(_util2.default.extend({
	                $uploader: $uploader,
	                file: file
	            }, options));
	        };
	        file.stop = function () {
	            this.xhr.abort();
	        };

	        options.onQueued(file);
	        if (options.auto) file.upload();
	    }

	    options = _util2.default.extend({
	        url: '',
	        auto: true,
	        type: 'file',
	        fileVal: 'file',
	        xhrFields: {},
	        onBeforeQueued: _util2.default.noop,
	        onQueued: _util2.default.noop,
	        onBeforeSend: _util2.default.noop,
	        onSuccess: _util2.default.noop,
	        onProgress: _util2.default.noop,
	        onError: _util2.default.noop
	    }, options);

	    if (options.compress !== false) {
	        options.compress = _util2.default.extend({
	            width: 1600,
	            height: 1600,
	            quality: .8
	        }, options.compress);
	    }

	    if (options.onBeforeQueued) {
	        var onBeforeQueued = options.onBeforeQueued;
	        options.onBeforeQueued = function (file, files) {
	            var ret = onBeforeQueued.call(file, files);
	            if (ret === false) {
	                return false;
	            }
	            if (ret === true) {
	                return;
	            }

	            var $item = (0, _util2.default)(_util2.default.render(_item2.default, {
	                id: file.id
	            }));
	            $uploader.find('.weui-uploader__files').append($item);
	        };
	    }
	    if (options.onQueued) {
	        var onQueued = options.onQueued;
	        options.onQueued = function (file) {
	            if (!onQueued.call(file)) {
	                var $file = $uploader.find('[data-id="' + file.id + '"]');
	                $file.css({
	                    backgroundImage: 'url("' + (file.base64 || file.url) + '")'
	                });
	                if (!options.auto) {
	                    clearFileStatus($uploader, file.id);
	                }
	            }
	        };
	    }
	    if (options.onBeforeSend) {
	        var onBeforeSend = options.onBeforeSend;
	        options.onBeforeSend = function (file, data, headers) {
	            var ret = onBeforeSend.call(file, data, headers);
	            if (ret === false) {
	                return false;
	            }
	        };
	    }
	    if (options.onSuccess) {
	        var onSuccess = options.onSuccess;
	        options.onSuccess = function (file, ret) {
	            file.status = 'success';
	            if (!onSuccess.call(file, ret)) {
	                clearFileStatus($uploader, file.id);
	            }
	        };
	    }
	    if (options.onProgress) {
	        var onProgress = options.onProgress;
	        options.onProgress = function (file, percent) {
	            if (!onProgress.call(file, percent)) {
	                findFileCtn($uploader, file.id).html(percent + '%');
	            }
	        };
	    }
	    if (options.onError) {
	        var onError = options.onError;
	        options.onError = function (file, err) {
	            file.status = 'fail';
	            if (!onError.call(file, err)) {
	                findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
	            }
	        };
	    }

	    $uploader.find('input[type="file"]').on('change', function (evt) {
	        var files = evt.target.files;

	        if (files.length === 0) {
	            return;
	        }

	        if (options.compress === false && options.type == 'file') {
	            // 以原文件方式上传
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                setUploadFile(file);
	            });
	        } else {
	            // base64上传 和 压缩上传
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                (0, _image.compress)(file, options, function (blob) {
	                    if (blob) setUploadFile(blob);
	                });
	            });
	        }

	        this.value = '';
	    });
	}
	exports.default = uploader;
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	 * 检查图片是否有被压扁，如果有，返回比率
	 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
	 */
	function detectVerticalSquash(img) {
	    // 拍照在IOS7或以下的机型会出现照片被压扁的bug
	    var data;
	    var ih = img.naturalHeight;
	    var canvas = document.createElement('canvas');
	    canvas.width = 1;
	    canvas.height = ih;
	    var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0, 0);
	    try {
	        data = ctx.getImageData(0, 0, 1, ih).data;
	    } catch (err) {
	        console.log('Cannot check verticalSquash: CORS?');
	        return 1;
	    }
	    var sy = 0;
	    var ey = ih;
	    var py = ih;
	    while (py > sy) {
	        var alpha = data[(py - 1) * 4 + 3];
	        if (alpha === 0) {
	            ey = py;
	        } else {
	            sy = py;
	        }
	        py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
	    }
	    var ratio = py / ih;
	    return ratio === 0 ? 1 : ratio;
	}

	/**
	 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
	 * @param dataURI
	 */
	function dataURItoBuffer(dataURI) {
	    var byteString = atob(dataURI.split(',')[1]);
	    var buffer = new ArrayBuffer(byteString.length);
	    var view = new Uint8Array(buffer);
	    for (var i = 0; i < byteString.length; i++) {
	        view[i] = byteString.charCodeAt(i);
	    }
	    return buffer;
	}
	function dataURItoBlob(dataURI) {
	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	    var buffer = dataURItoBuffer(dataURI);
	    return new Blob([buffer], { type: mimeString });
	}

	/**
	 * 获取图片的orientation
	 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
	 */
	function getOrientation(buffer) {
	    var view = new DataView(buffer);
	    if (view.getUint16(0, false) != 0xFFD8) return -2;
	    var length = view.byteLength,
	        offset = 2;
	    while (offset < length) {
	        var marker = view.getUint16(offset, false);
	        offset += 2;
	        if (marker == 0xFFE1) {
	            if (view.getUint32(offset += 2, false) != 0x45786966) return -1;
	            var little = view.getUint16(offset += 6, false) == 0x4949;
	            offset += view.getUint32(offset + 4, little);
	            var tags = view.getUint16(offset, little);
	            offset += 2;
	            for (var i = 0; i < tags; i++) {
	                if (view.getUint16(offset + i * 12, little) == 0x0112) return view.getUint16(offset + i * 12 + 8, little);
	            }
	        } else if ((marker & 0xFF00) != 0xFF00) break;else offset += view.getUint16(offset, false);
	    }
	    return -1;
	}

	/**
	 * 修正拍照时图片的方向
	 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
	 */
	function orientationHelper(canvas, ctx, orientation) {
	    var w = canvas.width,
	        h = canvas.height;
	    if (orientation > 4) {
	        canvas.width = h;
	        canvas.height = w;
	    }
	    switch (orientation) {
	        case 2:
	            ctx.translate(w, 0);
	            ctx.scale(-1, 1);
	            break;
	        case 3:
	            ctx.translate(w, h);
	            ctx.rotate(Math.PI);
	            break;
	        case 4:
	            ctx.translate(0, h);
	            ctx.scale(1, -1);
	            break;
	        case 5:
	            ctx.rotate(0.5 * Math.PI);
	            ctx.scale(1, -1);
	            break;
	        case 6:
	            ctx.rotate(0.5 * Math.PI);
	            ctx.translate(0, -h);
	            break;
	        case 7:
	            ctx.rotate(0.5 * Math.PI);
	            ctx.translate(w, -h);
	            ctx.scale(-1, 1);
	            break;
	        case 8:
	            ctx.rotate(-0.5 * Math.PI);
	            ctx.translate(-w, 0);
	            break;
	    }
	}

	/**
	 * 压缩图片
	 */
	function compress(file, options, callback) {
	    var reader = new FileReader();
	    reader.onload = function (evt) {
	        if (options.compress === false) {
	            // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
	            file.base64 = evt.target.result;
	            callback(file);
	            return;
	        }

	        // 启用压缩的分支
	        var img = new Image();
	        img.onload = function () {
	            var ratio = detectVerticalSquash(img);
	            var orientation = getOrientation(dataURItoBuffer(img.src));
	            var canvas = document.createElement('canvas');
	            var ctx = canvas.getContext('2d');

	            var maxW = options.compress.width;
	            var maxH = options.compress.height;
	            var w = img.width;
	            var h = img.height;
	            var dataURL = void 0;

	            if (w < h && h > maxH) {
	                w = parseInt(maxH * img.width / img.height);
	                h = maxH;
	            } else if (w >= h && w > maxW) {
	                h = parseInt(maxW * img.height / img.width);
	                w = maxW;
	            }

	            canvas.width = w;
	            canvas.height = h;

	            if (orientation > 0) {
	                orientationHelper(canvas, ctx, orientation);
	            }
	            ctx.drawImage(img, 0, 0, w, h / ratio);

	            if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
	                dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
	            } else {
	                dataURL = canvas.toDataURL(file.type);
	            }

	            if (options.type == 'file') {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 压缩出错，以文件方式上传的，采用原文件上传
	                    console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
	                    callback(file);
	                } else {
	                    var blob = dataURItoBlob(dataURL);
	                    blob.id = file.id;
	                    blob.name = file.name;
	                    blob.lastModified = file.lastModified;
	                    blob.lastModifiedDate = file.lastModifiedDate;
	                    callback(blob);
	                }
	            } else {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 压缩失败，以base64上传的，直接报错不上传
	                    options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
	                    callback();
	                } else {
	                    file.base64 = dataURL;
	                    callback(file);
	                }
	            }
	        };
	        img.src = evt.target.result;
	    };
	    reader.readAsDataURL(file);
	}

	exports.default = {
	    compress: compress
	};
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = upload;
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function upload(options) {
	    var url = options.url,
	        file = options.file,
	        fileVal = options.fileVal,
	        onBeforeSend = options.onBeforeSend,
	        onProgress = options.onProgress,
	        onError = options.onError,
	        onSuccess = options.onSuccess,
	        xhrFields = options.xhrFields;
	    var name = file.name,
	        type = file.type,
	        lastModifiedDate = file.lastModifiedDate;

	    var data = {
	        name: name,
	        type: type,
	        size: options.type == 'file' ? file.size : file.base64.length,
	        lastModifiedDate: lastModifiedDate
	    };
	    var headers = {};

	    if (onBeforeSend(file, data, headers) === false) return;

	    file.status = 'progress';

	    onProgress(file, 0);

	    var formData = new FormData();
	    var xhr = new XMLHttpRequest();

	    file.xhr = xhr;

	    // 设置参数
	    Object.keys(data).forEach(function (key) {
	        formData.append(key, data[key]);
	    });
	    if (options.type == 'file') {
	        formData.append(fileVal, file, name);
	    } else {
	        formData.append(fileVal, file.base64);
	    }

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4) {
	            if (xhr.status == 200) {
	                try {
	                    // 只支持json
	                    var ret = JSON.parse(xhr.responseText);
	                    onSuccess(file, ret);
	                } catch (err) {
	                    onError(file, err);
	                }
	            } else {
	                onError(file, new Error('XMLHttpRequest response status is ' + xhr.status));
	            }
	        }
	    };
	    xhr.upload.addEventListener('progress', function (evt) {
	        if (evt.total == 0) return;

	        var percent = Math.ceil(evt.loaded / evt.total) * 100;

	        onProgress(file, percent);
	    }, false);

	    xhr.open('POST', url);

	    Object.keys(xhrFields).forEach(function (key) {
	        xhr[key] = xhrFields[key];
	    });
	    // 设置头部信息
	    Object.keys(headers).forEach(function (key) {
	        xhr.setRequestHeader(key, headers[key]);
	    });

	    xhr.send(formData);
	}
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _cron = __webpack_require__(28);

	var _cron2 = _interopRequireDefault(_cron);

	__webpack_require__(29);

	var _util3 = __webpack_require__(30);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(31);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(32);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function Result(item) {
	    this.label = item.label;
	    this.value = item.value;
	}

	Result.prototype.toString = function () {
	    return this.value;
	};
	Result.prototype.valueOf = function () {
	    return this.value;
	};

	var _sington = void 0;

	/**
	 * picker 多列选择器。
	 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
	 * @param {Object} options 配置项
	 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
	 * @param {string=} [options.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
	 * @param {string=} [options.className] 自定义类名
	 * @param {string=} [options.container] 指定容器
	 * @param {array=} [options.defaultValue] 默认选项的value数组
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 * @example
	 * // 单列picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     disabled: true // 不可用
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3
	 * },
	 * {
	 *     label: '公车票',
	 *     value: 4,
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    container: 'body',
	 *    defaultValue: [3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'singleLinePicker'
	 * });
	 *
	 * @example
	 * // 多列picker
	 * weui.picker([
	 *     {
	 *         label: '1',
	 *         value: '1'
	 *     }, {
	 *         label: '2',
	 *         value: '2'
	 *     }, {
	 *         label: '3',
	 *         value: '3'
	 *     }
	 * ], [
	 *     {
	 *         label: 'A',
	 *         value: 'A'
	 *     }, {
	 *         label: 'B',
	 *         value: 'B'
	 *     }, {
	 *         label: 'C',
	 *         value: 'C'
	 *     }
	 * ], {
	 *     defaultValue: ['3', 'A'],
	 *     onChange: function (result) {
	 *         console.log(result);
	 *     },
	 *     onConfirm: function (result) {
	 *         console.log(result);
	 *     },
	 *     id: 'multiPickerBtn'
	 * });
	 *
	 * @example
	 * // 级联picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     children: [
	 *         {
	 *             label: '经济舱',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '商务舱',
	 *             value: 2
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1,
	 *     children: [
	 *         {
	 *             label: '卧铺',
	 *             value: 1,
	 *             disabled: true // 不可用
	 *         },
	 *         {
	 *             label: '坐票',
	 *             value: 2
	 *         },
	 *         {
	 *             label: '站票',
	 *             value: 3
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3,
	 *     children: [
	 *         {
	 *             label: '快班',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '普通',
	 *             value: 2
	 *         }
	 *     ]
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    container: 'body',
	 *    defaultValue: [1, 3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'doubleLinePicker'
	 * });
	 */
	function picker() {
	    if (_sington) return _sington;
	    var temp = {}; // temp 存在上一次滑动的位置
	    // 配置项
	    var options = arguments[arguments.length - 1];
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        container: 'body',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop
	    }, options);

	    // 数据处理
	    var items = void 0;
	    var isMulti = false; // 是否多列的类型
	    if (arguments.length > 2) {
	        var i = 0;
	        items = [];
	        while (i < arguments.length - 1) {
	            items.push(arguments[i++]);
	        }
	        isMulti = true;
	    } else {
	        items = arguments[0];
	    }

	    // 获取缓存
	    temp[defaults.id] = temp[defaults.id] || [];
	    var result = [];
	    var lineTemp = temp[defaults.id];
	    var $picker = (0, _util2.default)(_util2.default.render(_picker2.default, defaults));
	    var depth = options.depth || (isMulti ? items.length : util.depthOf(items[0])),
	        groups = '';

	    // 显示与隐藏的方法
	    function show() {
	        (0, _util2.default)(defaults.container).append($picker);

	        // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	        _util2.default.getStyle($picker[0], 'transform');

	        $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	    }

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	            $picker.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }

	    function hide(callback) {
	        _hide(callback);
	    }

	    // 初始化滚动的方法
	    function scroll(items, level) {
	        if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
	            // 没有缓存选项，而且存在defaultValue
	            var defaultVal = defaults.defaultValue[level];
	            var index = 0,
	                len = items.length;

	            for (; index < len; ++index) {
	                if (defaultVal == items[index].value) break;
	            }
	            if (index < len) {
	                lineTemp[level] = index;
	            } else {
	                console.warn('Picker has not match defaultValue: ' + defaultVal);
	            }
	        }
	        $picker.find('.weui-picker__group').eq(level).scroll({
	            items: items,
	            temp: lineTemp[level],
	            onChange: function onChange(item, index) {
	                //为当前的result赋值。
	                if (item) {
	                    result[level] = new Result(item);
	                } else {
	                    result[level] = null;
	                }
	                lineTemp[level] = index;

	                if (isMulti) {
	                    defaults.onChange(result);
	                } else {
	                    /**
	                     * @子列表处理
	                     * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
	                     * 2. 滑动之后发现重新有子列表时，再次显示子列表。
	                     *
	                     * @回调处理
	                     * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
	                     * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
	                     */
	                    if (item.children && item.children.length > 0) {
	                        $picker.find('.weui-picker__group').eq(level + 1).show();
	                        !isMulti && scroll(item.children, level + 1); // 不是多列的情况下才继续处理children
	                    } else {
	                        //如果子列表test不通过，子孙列表都隐藏。
	                        var $items = $picker.find('.weui-picker__group');
	                        $items.forEach(function (ele, index) {
	                            if (index > level) {
	                                (0, _util2.default)(ele).hide();
	                            }
	                        });

	                        result.splice(level + 1);

	                        defaults.onChange(result);
	                    }
	                }
	            },
	            onConfirm: defaults.onConfirm
	        });
	    }

	    while (depth--) {
	        groups += _group2.default;
	    }

	    $picker.find('.weui-picker__bd').html(groups);
	    show();

	    if (isMulti) {
	        items.forEach(function (item, index) {
	            scroll(item, index);
	        });
	    } else {
	        scroll(items, 0);
	    }

	    $picker.on('click', '.weui-mask', function () {
	        hide();
	    }).on('click', '.weui-picker__action', function () {
	        hide();
	    }).on('click', '#weui-picker-confirm', function () {
	        defaults.onConfirm(result);
	    });

	    _sington = $picker[0];
	    _sington.hide = hide;
	    return _sington;
	}

	/**
	 * dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
	 * @param options 配置项
	 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
	 * @param {number=|string|Date} [options.start=2000] 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date
	 * @param {number=|string|Date} [options.end=2030] 结束年份，同上
	 * @param {string=} [options.cron=* * *] cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六）
	 * @param {string=} [options.className] 自定义类名
	 * @param {array=} [options.defaultValue] 默认选项的value数组, 如 [1991, 6, 9]
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 *@example
	 * // 示例1：
	 * weui.datePicker({
	 *     start: 1990,
	 *     end: 2000,
	 *     defaultValue: [1991, 6, 9],
	 *     onChange: function(result){
	 *         console.log(result);
	 *     },
	 *     onConfirm: function(result){
	 *         console.log(result);
	 *     },
	 *     id: 'datePicker'
	 * });
	 *
	 * // 示例2：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      defaultValue: [2020, 6, 9],
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 *
	 *  // 示例3：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      cron: '* * 0,6',  // 每逢周日、周六
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 *
	 *  // 示例4：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      cron: '1-10 * *',  // 每月1日-10日
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 */
	function datePicker(options) {
	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        start: 2000,
	        end: 2030,
	        cron: '* * *'
	    }, options);

	    // 兼容原来的 start、end 传 Number 的用法
	    if (typeof defaults.start === 'number') {
	        defaults.start = new Date(defaults.start + '-01-01');
	    } else if (typeof defaults.start === 'string') {
	        defaults.start = new Date(defaults.start);
	    }
	    if (typeof defaults.end === 'number') {
	        defaults.end = new Date(defaults.end + '-12-31');
	    } else if (typeof defaults.end === 'string') {
	        defaults.end = new Date(defaults.end);
	    }

	    var findBy = function findBy(array, key, value) {
	        for (var i = 0, len = array.length; i < len; i++) {
	            var _obj = array[i];
	            if (_obj[key] == value) {
	                return _obj;
	            }
	        }
	    };

	    var date = [];
	    var interval = _cron2.default.parse(defaults.cron, defaults.start, defaults.end);
	    var obj = void 0;
	    do {
	        obj = interval.next();

	        var year = obj.value.getFullYear();
	        var month = obj.value.getMonth() + 1;
	        var day = obj.value.getDate();

	        var Y = findBy(date, 'value', year);
	        if (!Y) {
	            Y = {
	                label: year + '年',
	                value: year,
	                children: []
	            };
	            date.push(Y);
	        }
	        var M = findBy(Y.children, 'value', month);
	        if (!M) {
	            M = {
	                label: month + '月',
	                value: month < 10 ? '0' + month : month,
	                children: []
	            };
	            Y.children.push(M);
	        }
	        M.children.push({
	            label: day + '日',
	            value: day < 10 ? '0' + day : day
	        });
	    } while (!obj.done);

	    return picker(date, defaults);
	}

	/**
	 * 日期时间选择器
	 * @param options
	 */
	function dateTimePicker(options) {
	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        start: 2000,
	        end: 2030,
	        cron: '* * *'
	    }, options);

	    // 兼容原来的 start、end 传 Number 的用法
	    if (typeof defaults.start === 'number') {
	        defaults.start = new Date(defaults.start + '-01-01');
	    } else if (typeof defaults.start === 'string') {
	        defaults.start = new Date(defaults.start);
	    }
	    if (typeof defaults.end === 'number') {
	        defaults.end = new Date(defaults.end + '-12-31');
	    } else if (typeof defaults.end === 'string') {
	        defaults.end = new Date(defaults.end);
	    }

	    var findBy = function findBy(array, key, value) {
	        for (var i = 0, len = array.length; i < len; i++) {
	            var _obj2 = array[i];
	            if (_obj2[key] == value) {
	                return _obj2;
	            }
	        }
	    };

	    var date = [];
	    var hours = [];
	    var minutes = [];

	    for (var i = 0; i < 60; i++) {
	        minutes.push({
	            label: (i < 10 ? '0' + i : i) + '分',
	            value: i < 10 ? '0' + i : i
	        });
	    }

	    for (var _i = 0; _i < 24; _i++) {
	        hours.push({
	            label: (_i < 10 ? '0' + _i : _i) + '时',
	            value: _i < 10 ? '0' + _i : _i,
	            children: minutes
	        });
	    }

	    var interval = _cron2.default.parse(defaults.cron, defaults.start, defaults.end);
	    var obj = void 0;
	    do {
	        obj = interval.next();

	        var year = obj.value.getFullYear();
	        var month = obj.value.getMonth() + 1;
	        var day = obj.value.getDate();

	        var Y = findBy(date, 'value', year);
	        if (!Y) {
	            Y = {
	                label: year + '年',
	                value: year,
	                children: []
	            };
	            date.push(Y);
	        }
	        var M = findBy(Y.children, 'value', month);
	        if (!M) {
	            M = {
	                label: month + '月',
	                value: month,
	                children: []
	            };
	            Y.children.push(M);
	        }
	        var D = {
	            label: day + '日',
	            value: day,
	            children: hours
	        };
	        M.children.push(D);
	    } while (!obj.done);

	    return picker(date, defaults);
	}

	exports.default = {
	    picker: picker,
	    datePicker: datePicker,
	    dateTimePicker: dateTimePicker
	};
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
	var constraints = [[1, 31], [1, 12], [0, 6]];

	/**
	 * Schedule
	 */

	var Schedule = function () {
	    function Schedule(fields, start, end) {
	        _classCallCheck(this, Schedule);

	        /**
	         * dayOfMonth
	         * @type {Array}
	         */
	        this._dates = fields[0];

	        /**
	         * month
	         * @type {Array}
	         */
	        this._months = fields[1];

	        /**
	         * dayOfWeek
	         * @type {Array}
	         */
	        this._days = fields[2];

	        /**
	         * start
	         * @type {Date}
	         */
	        this._start = start;

	        /**
	         * end
	         * @type {Date}
	         */
	        this._end = end;

	        /**
	         * cursor
	         * @type {Date}
	         * @private
	         */
	        this._pointer = start;
	    }

	    _createClass(Schedule, [{
	        key: '_findNext',
	        value: function _findNext() {
	            var next = void 0;
	            while (true) {
	                if (this._end.getTime() - this._pointer.getTime() <= 0) {
	                    throw new Error('out of range, end is ' + this._end + ', current is ' + this._pointer);
	                }

	                var month = this._pointer.getMonth();
	                var date = this._pointer.getDate();
	                var day = this._pointer.getDay();

	                if (this._months.indexOf(month + 1) === -1) {
	                    this._pointer.setMonth(month + 1);
	                    this._pointer.setDate(1);
	                    continue;
	                }

	                if (this._dates.indexOf(date) === -1) {
	                    this._pointer.setDate(date + 1);
	                    continue;
	                }

	                if (this._days.indexOf(day) === -1) {
	                    this._pointer.setDate(date + 1);
	                    continue;
	                }

	                next = new Date(this._pointer);

	                break;
	            }
	            return next;
	        }

	        /**
	         * fetch next data
	         */

	    }, {
	        key: 'next',
	        value: function next() {
	            var value = this._findNext();
	            // move next date
	            this._pointer.setDate(this._pointer.getDate() + 1);
	            return {
	                value: value,
	                done: !this.hasNext()
	            };
	        }

	        /**
	         * has next
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasNext',
	        value: function hasNext() {
	            try {
	                this._findNext();
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    }]);

	    return Schedule;
	}();

	function parseField(field, constraints) {
	    var low = constraints[0];
	    var high = constraints[1];
	    var result = [];
	    var pointer = void 0;

	    // * 号等于最低到最高
	    field = field.replace(/\*/g, low + '-' + high);

	    // 处理 1,2,5-9 这种情况
	    var fields = field.split(',');
	    for (var i = 0, len = fields.length; i < len; i++) {
	        var f = fields[i];
	        if (f.match(regex)) {
	            f.replace(regex, function ($0, lower, upper, step) {
	                // ref to `cron-parser`
	                step = parseInt(step) || 1;
	                // Positive integer higher than constraints[0]
	                lower = Math.min(Math.max(low, ~~Math.abs(lower)), high);

	                // Positive integer lower than constraints[1]
	                upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower;

	                // Count from the lower barrier to the upper
	                pointer = lower;

	                do {
	                    result.push(pointer);
	                    pointer += step;
	                } while (pointer <= upper);
	            });
	        }
	    }
	    return result;
	}

	/**
	 *
	 * @param expr
	 * @param start
	 * @param end
	 * @returns {*}
	 */
	function parse(expr, start, end) {
	    var atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
	    var fields = [];
	    atoms.forEach(function (atom, index) {
	        var constraint = constraints[index];
	        fields.push(parseField(atom, constraint));
	    });
	    return new Schedule(fields, start, end);
	}

	exports.default = {
	    parse: parse
	};
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * set transition
	 * @param $target
	 * @param time
	 */
	var setTransition = function setTransition($target, time) {
	    return $target.css({
	        '-webkit-transition': 'all ' + time + 's',
	        'transition': 'all ' + time + 's'
	    });
	};

	/**
	 * set translate
	 */
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var setTranslate = function setTranslate($target, diff) {
	    return $target.css({
	        '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
	        'transform': 'translate3d(0, ' + diff + 'px, 0)'
	    });
	};

	/**
	 * @desc get index of middle item
	 * @param items
	 * @returns {number}
	 */
	var getDefaultIndex = function getDefaultIndex(items) {
	    var current = Math.floor(items.length / 2);
	    var count = 0;
	    while (!!items[current] && items[current].disabled) {
	        current = ++current % items.length;
	        count++;

	        if (count > items.length) {
	            throw new Error('No selectable item.');
	        }
	    }

	    return current;
	};

	var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
	    var currentIndex = getDefaultIndex(items);

	    return (offset - currentIndex) * rowHeight;
	};

	/**
	 * get max translate
	 * @param offset
	 * @param rowHeight
	 * @returns {number}
	 */
	var getMax = function getMax(offset, rowHeight) {
	    return offset * rowHeight;
	};

	/**
	 * get min translate
	 * @param offset
	 * @param rowHeight
	 * @param length
	 * @returns {number}
	 */
	var getMin = function getMin(offset, rowHeight, length) {
	    return -(rowHeight * (length - offset - 1));
	};

	_util2.default.fn.scroll = function (options) {
	    var _this = this;

	    var defaults = _util2.default.extend({
	        items: [], // 数据
	        scrollable: '.weui-picker__content', // 滚动的元素
	        offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
	        rowHeight: 34, // 列表每一行的高度
	        onChange: _util2.default.noop, // onChange回调
	        temp: null, // translate的缓存
	        bodyHeight: 7 * 34 // picker的高度，用于辅助点击滚动的计算
	    }, options);
	    var items = defaults.items.map(function (item) {
	        return '<div class="weui-picker__item' + (item.disabled ? ' weui-picker__item_disabled' : '') + '">' + item.label + '</div>';
	    }).join('');
	    var $this = (0, _util2.default)(this);

	    $this.find('.weui-picker__content').html(items);

	    var $scrollable = $this.find(defaults.scrollable); // 可滚动的元素
	    var start = void 0; // 保存开始按下的位置
	    var end = void 0; // 保存结束时的位置
	    var startTime = void 0; // 开始触摸的时间
	    var translate = void 0; // 缓存 translate
	    var points = []; // 记录移动点
	    var windowHeight = window.innerHeight; // 屏幕的高度

	    // 首次触发选中事件
	    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
	    if (defaults.temp !== null && defaults.temp < defaults.items.length) {
	        var index = defaults.temp;
	        defaults.onChange.call(this, defaults.items[index], index);
	        translate = (defaults.offset - index) * defaults.rowHeight;
	    } else {
	        var _index = getDefaultIndex(defaults.items);
	        defaults.onChange.call(this, defaults.items[_index], _index);
	        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
	    }
	    setTranslate($scrollable, translate);

	    var stop = function stop(diff) {
	        translate += diff;

	        // 移动到最接近的那一行
	        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
	        var max = getMax(defaults.offset, defaults.rowHeight);
	        var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
	        // 不要超过最大值或者最小值
	        if (translate > max) {
	            translate = max;
	        }
	        if (translate < min) {
	            translate = min;
	        }

	        // 如果是 disabled 的就跳过
	        var index = defaults.offset - translate / defaults.rowHeight;
	        while (!!defaults.items[index] && defaults.items[index].disabled) {
	            diff > 0 ? ++index : --index;
	        }
	        translate = (defaults.offset - index) * defaults.rowHeight;
	        setTransition($scrollable, .3);
	        setTranslate($scrollable, translate);

	        // 触发选择事件
	        defaults.onChange.call(_this, defaults.items[index], index);
	    };

	    function _start(pageY) {
	        start = pageY;
	        startTime = +new Date();
	    }
	    function _move(pageY) {
	        end = pageY;
	        var diff = end - start;

	        setTransition($scrollable, 0);
	        setTranslate($scrollable, translate + diff);
	        startTime = +new Date();
	        points.push({ time: startTime, y: end });
	        if (points.length > 40) {
	            points.shift();
	        }
	    }
	    function _end(pageY) {
	        if (!start) return;

	        /**
	         * 思路:
	         * 0. touchstart 记录按下的点和时间
	         * 1. touchmove 移动时记录前 40个经过的点和时间
	         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
	         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
	         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
	         */
	        var endTime = new Date().getTime();
	        var relativeY = windowHeight - defaults.bodyHeight / 2;
	        end = pageY;

	        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
	        if (endTime - startTime > 100) {
	            //如果end和start相差小于10，则视为
	            if (Math.abs(end - start) > 10) {
	                stop(end - start);
	            } else {
	                stop(relativeY - end);
	            }
	        } else {
	            if (Math.abs(end - start) > 10) {
	                var endPos = points.length - 1;
	                var startPos = endPos;
	                for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
	                    startPos = i;
	                }

	                if (startPos !== endPos) {
	                    var ep = points[endPos];
	                    var sp = points[startPos];
	                    var t = ep.time - sp.time;
	                    var s = ep.y - sp.y;
	                    var v = s / t; // 出手时的速度
	                    var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”
	                    stop(diff);
	                } else {
	                    stop(0);
	                }
	            } else {
	                stop(relativeY - end);
	            }
	        }

	        start = null;
	    }

	    /**
	     * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
	     */
	    $scrollable = $this.offAll().on('touchstart', function (evt) {
	        _start(evt.changedTouches[0].pageY);
	    }).on('touchmove', function (evt) {
	        _move(evt.changedTouches[0].pageY);
	        evt.preventDefault();
	    }).on('touchend', function (evt) {
	        _end(evt.changedTouches[0].pageY);
	    }).find(defaults.scrollable);

	    // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
	    var isSupportTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
	    if (!isSupportTouch) {
	        $this.on('mousedown', function (evt) {
	            _start(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        }).on('mousemove', function (evt) {
	            if (!start) return;

	            _move(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        }).on('mouseup mouseleave', function (evt) {
	            _end(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        });
	    }
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var depthOf = exports.depthOf = function depthOf(object) {
	    var depth = 1;
	    if (object.children && object.children[0]) {
	        depth = depthOf(object.children[0]) + 1;
	    }
	    return depth;
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-plugins <%= className %>\"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd></div> </div> </div> ";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _gallery = __webpack_require__(34);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Tencent is pleased to support the open source community by making WeUI.js available.
	 *
	 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	 *
	 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	 * with the License. You may obtain a copy of the License at
	 *
	 *       http://opensource.org/licenses/MIT
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under the License is
	 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	 * either express or implied. See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var _sington = void 0;

	/**
	 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
	 * @param {string} url gallery显示的图片的url
	 * @param {object=} options 配置项
	 * @param {string=} options.className 自定义类名
	 * @param {function=} options.onDelete 点击删除图片时的回调
	 *
	 * @example
	 * var gallery = weui.gallery(url, {
	 *     className: 'custom-classname',
	 *     onDelete: function(){
	 *         if(confirm('确定删除该图片？')){ console.log('删除'); }
	 *         gallery.hide(function() {
	 *              console.log('`gallery` has been hidden');
	 *          });
	 *     }
	 * });
	 */
	function gallery(url) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    options = _util2.default.extend({
	        className: '',
	        canDelete: 'true',
	        onDelete: _util2.default.noop
	    }, options);

	    var $gallery = (0, _util2.default)(_util2.default.render(_gallery2.default, _util2.default.extend({
	        url: url
	    }, options)));

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $gallery.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $gallery.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }

	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($gallery);
	    $gallery.find('.weui-gallery__img').on('click', function () {
	        hide();
	    });
	    $gallery.find('.weui-gallery__del').on('click', function () {
	        options.onDelete.call(this, url);
	    });

	    $gallery.show().addClass('weui-animate-fade-in');

	    _sington = $gallery[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = gallery;
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-gallery weui-plugins <%= className %>\"> <% if(canDelete){ %> <span class=weui-gallery__img style=\"background-image:url(<%= url %>)\"></span> <% } %> <% if(!canDelete){ %> <span class=weui-gallery__img style=\"background-image:url(<%= url %>);bottom:0\"></span> <% } %> <% if(canDelete){ %> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> <% } %> </div> ";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。
	 * @param {string} selector slider的selector
	 * @param {object=} options 配置项
	 * @param {number=} options.step slider的step，每次移动的百分比，取值范围 [0-100]
	 * @param {number=} [options.defaultValue=0] slider的默认百分比值，取值范围 [0-100]
	 * @param {function=} options.onChange slider发生改变时返回对应的百分比，取值范围 [0-100]
	 *
	 * @example
	 * weui.slider('#sliderStep', {
	 *     step: 10,
	 *     defaultValue: 40,
	 *     onChange: function(percent){
	 *         console.log(percent);
	 *     }
	 * });
	 */
	function slider(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        step: undefined,
	        defaultValue: 0,
	        onChange: _util2.default.noop
	    }, options);

	    if (options.step !== undefined) {
	        options.step = parseFloat(options.step);
	        if (!options.step || options.step < 0) {
	            throw new Error('Slider step must be a positive number.');
	        }
	    }
	    if (options.defaultValue !== undefined && options.defaultValue < 0 || options.defaultValue > 100) {
	        throw new Error('Slider defaultValue must be >= 0 and <= 100.');
	    }

	    $eles.forEach(function (ele) {
	        var $slider = (0, _util2.default)(ele);
	        var $sliderInner = $slider.find('.weui-slider__inner');
	        var $sliderTrack = $slider.find('.weui-slider__track');
	        var $sliderHandler = $slider.find('.weui-slider__handler');

	        var sliderLength = parseInt(_util2.default.getStyle($sliderInner[0], 'width')); // slider的长度
	        var sliderLeft = $sliderInner[0].offsetLeft; // slider相对于页面的offset
	        var handlerStartPos = 0; // handler起始位置
	        var handlerStartX = 0; // handler touchstart的X
	        var stepWidth = void 0; // 每个step的宽度

	        function getHandlerPos() {
	            var pos = _util2.default.getStyle($sliderHandler[0], 'left');

	            if (/%/.test(pos)) {
	                pos = sliderLength * parseFloat(pos) / 100;
	            } else {
	                pos = parseFloat(pos);
	            }
	            return pos;
	        }
	        function setHandler(distance) {
	            var dist = void 0,
	                // handler的目标位置
	            percent = void 0; // 所在位置的百分比

	            if (options.step) {
	                distance = Math.round(distance / stepWidth) * stepWidth;
	            }

	            dist = handlerStartPos + distance;
	            dist = dist < 0 ? 0 : dist > sliderLength ? sliderLength : dist;

	            percent = 100 * dist / sliderLength;

	            $sliderTrack.css({ width: percent + '%' });
	            $sliderHandler.css({ left: percent + '%' });
	            options.onChange.call(ele, percent);
	        }

	        if (options.step) {
	            stepWidth = sliderLength * options.step / 100;
	        }
	        if (options.defaultValue) {
	            setHandler(sliderLength * options.defaultValue / 100);
	        }

	        $slider.on('click', function (evt) {
	            evt.preventDefault();

	            handlerStartPos = getHandlerPos();
	            setHandler(evt.pageX - sliderLeft - handlerStartPos);
	        });
	        $sliderHandler.on('touchstart', function (evt) {
	            handlerStartPos = getHandlerPos();
	            handlerStartX = evt.changedTouches[0].clientX;
	        }).on('touchmove', function (evt) {
	            evt.preventDefault();

	            setHandler(evt.changedTouches[0].clientX - handlerStartX);
	        });
	    });

	    return this;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  * 
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  * 
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  * 
	  *       http://opensource.org/licenses/MIT
	  * 
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = slider;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _listPicker = __webpack_require__(37);

	var _listPicker2 = _interopRequireDefault(_listPicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;
	var temp = []; //上一次选中的项

	/**
	 * 对选列表
	 * @param list {array} 列表数组
	 * @param preCheck {array} 提前选中的项的id数组[1,2,3]
	 * @param options {object} 列表配置
	 * @returns {*}
	 *
	 *weui.list([{id: 1, name: '张三'}
	 *, {id: 2, name: '李四'}
	 *, {id: 3, name: '王五'}
	 *, {id: 4, name: '赵六'}
	 *, {id: 5, name: '田七'}
	 *], [1, 3], {
	 *       title:'请选择人员',
	 *       onConfirm: function (result) {
	 *           weui.alert(JSON.stringify(result), {isAndroid: false});
	 *       }
	 *   });
	 */
	function list() {
	    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var preCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (_sington) return _sington;
	    // 配置项
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        title: '请选择',
	        container: 'body',
	        onConfirm: _util2.default.noop
	    }, options);

	    var isChecked = void 0;
	    if (!preCheck && temp.length > 0) {
	        preCheck = temp;
	    }
	    var $picker = (0, _util2.default)(_util2.default.render(_listPicker2.default, defaults));

	    (0, _util2.default)(defaults.container).append($picker);

	    // 显示与隐藏的方法
	    function show() {
	        (0, _util2.default)(defaults.container).append($picker);

	        // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	        _util2.default.getStyle($picker[0], 'transform');

	        $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	    }

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	            $picker.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }

	    function hide(callback) {
	        _hide(callback);
	    }

	    function _clear(callback) {
	        _clear = _util2.default.noop; // 防止二次调用导致报错
	        $picker.remove();
	        _sington = false;
	        callback && callback();
	    }

	    function clear(cb) {
	        if (_sington) {
	            _clear(cb);
	        }
	    }

	    var items = list.map(function (item, index) {
	        if (preCheck.indexOf(item.id) > -1) {
	            isChecked = 'checked';
	        } else {
	            isChecked = '';
	        }
	        return '<label class="weui-cell weui-check__label" for="item' + index + '"><div class="weui-cell__hd"><input type="checkbox" ' + isChecked + ' name="assistance" class="weui-check" id="item' + index + '"><i class="weui-icon-checked"></i></div><div class="weui-cell__bd">' + item.name + '</div></label>';
	    }).join('');

	    $picker.find('#ls').html(items);

	    var boxes = $picker.find('input[type=checkbox]');

	    show();

	    $picker.on('click', '.weui-mask', function () {
	        hide();
	    }).on('click', '.weui-picker__action', function () {
	        hide();
	    }).on('click', '#weui-picker-confirm', function () {
	        var result = [];
	        temp = [];
	        boxes.forEach(function (value, index) {
	            if (value.checked === true) {
	                result.push(list[index]);
	                temp.push(list[index].id);
	            }
	        });
	        defaults.onConfirm(result);
	    });

	    _sington = $picker[0];
	    _sington.hide = hide;
	    _sington.clear = clear;
	    return _sington;
	}

	exports.default = list;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-plugins <%= className %>\"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <span href=javascript:; class=weui-picker__title><%= title %></span> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div id=wrapper style=position:relative;background-color:#fff;height:238px;overflow-y:scroll> <div id=ls class=weui-cells_checkbox></div> </div> </div> </div> ";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!./weui.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!./weui.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(40)();
	// imports


	// module
	exports.push([module.id, "/*!\n * WeUI v1.1.2 (https://github.com/weui/weui)\n * Copyright 2018 Tencent, Inc.\n * Licensed under the MIT license\n */\nhtml{\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n}\nbody{\n  line-height:1.6;\n  font-family:-apple-system-font, \"Helvetica Neue\", sans-serif;\n}\n*{\n  margin:0;\n  padding:0;\n}\na img{\n  border:0;\n}\na{\n  text-decoration:none;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n@font-face{\n  font-weight:normal;\n  font-style:normal;\n  font-family:\"weui\";\n  src:url('data:application/octet-stream;base64,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') format('truetype');\n}\n[class^=\"weui-icon-\"],\n[class*=\" weui-icon-\"]{\n  display:inline-block;\n  vertical-align:middle;\n  font:normal normal normal 14px/1 \"weui\";\n  font-size:inherit;\n  text-rendering:auto;\n  -webkit-font-smoothing:antialiased;\n}\n[class^=\"weui-icon-\"]:before,\n[class*=\" weui-icon-\"]:before{\n  display:inline-block;\n  margin-left:.2em;\n  margin-right:.2em;\n}\n[class^=\"my-icon-\"],\n[class*=\" my-icon-\"]{\n  display:inline-block;\n  vertical-align:middle;\n  font:normal normal normal 14px/1 \"weui\";\n  font-size:inherit;\n  text-rendering:auto;\n  -webkit-font-smoothing:antialiased;\n}\n[class^=\"my-icon-\"]:before,\n[class*=\" my-icon-\"]:before{\n  display:inline-block;\n  margin-left:.2em;\n  margin-right:.2em;\n}\n.weui-icon-circle:before{\n  content:\"\\EA01\";\n}\n.weui-icon-download:before{\n  content:\"\\EA02\";\n}\n.weui-icon-info:before{\n  content:\"\\EA03\";\n}\n.weui-icon-safe-success:before{\n  content:\"\\EA04\";\n}\n.weui-icon-safe-warn:before{\n  content:\"\\EA05\";\n}\n.weui-icon-success:before{\n  content:\"\\EA06\";\n}\n.weui-icon-success-circle:before{\n  content:\"\\EA07\";\n}\n.weui-icon-success-no-circle:before{\n  content:\"\\EA08\";\n}\n.weui-icon-waiting:before{\n  content:\"\\EA09\";\n}\n.weui-icon-waiting-circle:before{\n  content:\"\\EA0A\";\n}\n.weui-icon-warn:before{\n  content:\"\\EA0B\";\n}\n.weui-icon-info-circle:before{\n  content:\"\\EA0C\";\n}\n.weui-icon-cancel:before{\n  content:\"\\EA0D\";\n}\n.weui-icon-search:before{\n  content:\"\\EA0E\";\n}\n.weui-icon-clear:before{\n  content:\"\\EA0F\";\n}\n.weui-icon-back:before{\n  content:\"\\EA10\";\n}\n.weui-icon-delete:before{\n  content:\"\\EA11\";\n}\n[class^=\"weui-icon_\"]:before,\n[class*=\" weui-icon_\"]:before{\n  margin:0;\n}\n.weui-icon-success{\n  font-size:23px;\n  color:#09BB07;\n}\n.weui-icon-waiting{\n  font-size:23px;\n  color:#10AEFF;\n}\n.weui-icon-warn{\n  font-size:23px;\n  color:#F43530;\n}\n.weui-icon-info{\n  font-size:23px;\n  color:#10AEFF;\n}\n.weui-icon-success-circle{\n  font-size:23px;\n  color:#09BB07;\n}\n.weui-icon-success-no-circle{\n  font-size:23px;\n  color:#09BB07;\n}\n.weui-icon-waiting-circle{\n  font-size:23px;\n  color:#10AEFF;\n}\n.weui-icon-circle{\n  font-size:23px;\n  color:#C9C9C9;\n}\n.weui-icon-download{\n  font-size:23px;\n  color:#09BB07;\n}\n.weui-icon-info-circle{\n  font-size:23px;\n  color:#09BB07;\n}\n.weui-icon-safe-success{\n  color:#09BB07;\n}\n.weui-icon-safe-warn{\n  color:#FFBE00;\n}\n.weui-icon-cancel{\n  color:#F43530;\n  font-size:22px;\n}\n.weui-icon-search{\n  color:#B2B2B2;\n  font-size:14px;\n}\n.weui-icon-clear{\n  color:#B2B2B2;\n  font-size:14px;\n}\n.weui-icon-delete.weui-icon_gallery-delete{\n  color:#FFFFFF;\n  font-size:22px;\n}\n.weui-icon_msg{\n  font-size:93px;\n}\n.weui-icon_msg.weui-icon-warn{\n  color:#F76260;\n}\n.weui-icon_msg-primary{\n  font-size:93px;\n}\n.weui-icon_msg-primary.weui-icon-warn{\n  color:#FFBE00;\n}\n.weui-btn{\n  position:relative;\n  display:block;\n  margin-left:auto;\n  margin-right:auto;\n  padding-left:14px;\n  padding-right:14px;\n  box-sizing:border-box;\n  font-size:18px;\n  text-align:center;\n  text-decoration:none;\n  color:#FFFFFF;\n  line-height:2.55555556;\n  border-radius:5px;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n  overflow:hidden;\n}\n.weui-btn:after{\n  content:\" \";\n  width:200%;\n  height:200%;\n  position:absolute;\n  top:0;\n  left:0;\n  border:1px solid rgba(0, 0, 0, 0.2);\n  transform:scale(0.5);\n  transform-origin:0 0;\n  box-sizing:border-box;\n  border-radius:10px;\n}\n.weui-btn_inline{\n  display:inline-block;\n}\n.weui-btn_default{\n  color:#000000;\n  background-color:#F8F8F8;\n}\n.weui-btn_default:not(.weui-btn_disabled):visited{\n  color:#000000;\n}\n.weui-btn_default:not(.weui-btn_disabled):active{\n  color:rgba(0, 0, 0, 0.6);\n  background-color:#DEDEDE;\n}\n.weui-btn_primary{\n  background-color:#1AAD19;\n}\n.weui-btn_primary:not(.weui-btn_disabled):visited{\n  color:#FFFFFF;\n}\n.weui-btn_primary:not(.weui-btn_disabled):active{\n  color:rgba(255, 255, 255, 0.6);\n  background-color:#179B16;\n}\n.weui-btn_warn{\n  background-color:#E64340;\n}\n.weui-btn_warn:not(.weui-btn_disabled):visited{\n  color:#FFFFFF;\n}\n.weui-btn_warn:not(.weui-btn_disabled):active{\n  color:rgba(255, 255, 255, 0.6);\n  background-color:#CE3C39;\n}\n.weui-btn_disabled{\n  color:rgba(255, 255, 255, 0.6);\n}\n.weui-btn_disabled.weui-btn_default{\n  color:rgba(0, 0, 0, 0.3);\n  background-color:#F7F7F7;\n}\n.weui-btn_disabled.weui-btn_primary{\n  background-color:#9ED99D;\n}\n.weui-btn_disabled.weui-btn_warn{\n  background-color:#EC8B89;\n}\n.weui-btn_loading .weui-loading{\n  margin:-0.2em 0.34em 0 0;\n}\n.weui-btn_loading.weui-btn_primary,\n.weui-btn_loading.weui-btn_warn{\n  color:rgba(255, 255, 255, 0.6);\n}\n.weui-btn_loading.weui-btn_primary{\n  background-color:#179B16;\n}\n.weui-btn_loading.weui-btn_warn{\n  background-color:#CE3C39;\n}\n.weui-btn_plain-primary{\n  color:#1aad19;\n  border:1px solid #1aad19;\n}\n.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{\n  color:rgba(26, 173, 25, 0.6);\n  border-color:rgba(26, 173, 25, 0.6);\n}\n.weui-btn_plain-primary:after{\n  border-width:0;\n}\n.weui-btn_plain-default{\n  color:#353535;\n  border:1px solid #353535;\n}\n.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{\n  color:rgba(53, 53, 53, 0.6);\n  border-color:rgba(53, 53, 53, 0.6);\n}\n.weui-btn_plain-default:after{\n  border-width:0;\n}\n.weui-btn_plain-disabled{\n  color:rgba(0, 0, 0, 0.2);\n  border-color:rgba(0, 0, 0, 0.2);\n}\nbutton.weui-btn,\ninput.weui-btn{\n  width:100%;\n  border-width:0;\n  outline:0;\n  -webkit-appearance:none;\n}\nbutton.weui-btn:focus,\ninput.weui-btn:focus{\n  outline:0;\n}\nbutton.weui-btn_inline,\ninput.weui-btn_inline,\nbutton.weui-btn_mini,\ninput.weui-btn_mini{\n  width:auto;\n}\nbutton.weui-btn_plain-primary,\ninput.weui-btn_plain-primary,\nbutton.weui-btn_plain-default,\ninput.weui-btn_plain-default{\n  border-width:1px;\n  background-color:transparent;\n}\n.weui-btn_mini{\n  display:inline-block;\n  padding:0 1.32em;\n  line-height:2.3;\n  font-size:13px;\n}\n.weui-btn + .weui-btn{\n  margin-top:15px;\n}\n.weui-btn.weui-btn_inline + .weui-btn.weui-btn_inline{\n  margin-top:auto;\n  margin-left:15px;\n}\n.weui-btn-area{\n  margin:1.17647059em 15px 0.3em;\n}\n.weui-btn-area_inline{\n  display:-ms-flexbox;\n  display:flex;\n}\n.weui-btn-area_inline .weui-btn{\n  margin-top:auto;\n  margin-right:15px;\n  width:100%;\n  -ms-flex:1;\n      flex:1;\n}\n.weui-btn-area_inline .weui-btn:last-child{\n  margin-right:0;\n}\n.weui-cells{\n  margin-top:1.17647059em;\n  background-color:#FFFFFF;\n  line-height:1.47058824;\n  font-size:17px;\n  overflow:hidden;\n  position:relative;\n}\n.weui-cells:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n  z-index:2;\n}\n.weui-cells:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n  z-index:2;\n}\n.weui-cells__title{\n  margin-top:.77em;\n  margin-bottom:.3em;\n  padding-left:15px;\n  padding-right:15px;\n  color:#999999;\n  font-size:14px;\n}\n.weui-cells__title + .weui-cells{\n  margin-top:0;\n}\n.weui-cells__tips{\n  margin-top:.3em;\n  color:#999999;\n  padding-left:15px;\n  padding-right:15px;\n  font-size:14px;\n}\n.weui-cell{\n  padding:10px 15px;\n  position:relative;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align:center;\n      align-items:center;\n}\n.weui-cell:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n  left:15px;\n  z-index:2;\n}\n.weui-cell:first-child:before{\n  display:none;\n}\n.weui-cell_primary{\n  -ms-flex-align:start;\n      align-items:flex-start;\n}\n.weui-cell__bd{\n  -ms-flex:1;\n      flex:1;\n}\n.weui-cell__ft{\n  text-align:right;\n  color:#999999;\n}\n.weui-cell_swiped{\n  display:block;\n  padding:0;\n}\n.weui-cell_swiped > .weui-cell__bd{\n  position:relative;\n  z-index:1;\n  background-color:#FFFFFF;\n}\n.weui-cell_swiped > .weui-cell__ft{\n  position:absolute;\n  right:0;\n  top:0;\n  bottom:0;\n  display:-ms-flexbox;\n  display:flex;\n  color:#FFFFFF;\n}\n.weui-swiped-btn{\n  display:block;\n  padding:10px 1em;\n  line-height:1.47058824;\n  color:inherit;\n}\n.weui-swiped-btn_default{\n  background-color:#C7C7CC;\n}\n.weui-swiped-btn_warn{\n  background-color:#FF3B30;\n}\n.weui-cell_access{\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n  color:inherit;\n}\n.weui-cell_access:active{\n  background-color:#ECECEC;\n}\n.weui-cell_access .weui-cell__ft{\n  padding-right:13px;\n  position:relative;\n}\n.weui-cell_access .weui-cell__ft:after{\n  content:\" \";\n  display:inline-block;\n  height:6px;\n  width:6px;\n  border-width:2px 2px 0 0;\n  border-color:#C8C8CD;\n  border-style:solid;\n  transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position:relative;\n  top:-2px;\n  position:absolute;\n  top:50%;\n  margin-top:-4px;\n  right:2px;\n}\n.weui-cell_link{\n  color:#586C94;\n  font-size:14px;\n}\n.weui-cell_link:first-child:before{\n  display:block;\n}\n.weui-check__label{\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n.weui-check__label:active{\n  background-color:#ECECEC;\n}\n.weui-check{\n  position:absolute;\n  left:-9999em;\n}\n.weui-cells_radio .weui-cell__ft{\n  padding-left:0.35em;\n}\n.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{\n  display:block;\n  content:'\\EA08';\n  color:#09BB07;\n  font-size:16px;\n}\n.weui-cells_checkbox .weui-cell__hd{\n  padding-right:0.35em;\n}\n.weui-cells_checkbox .weui-icon-checked:before{\n  content:'\\EA01';\n  color:#C9C9C9;\n  font-size:23px;\n  display:block;\n}\n.weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before{\n  content:'\\EA06';\n  color:#09BB07;\n}\n.my-icon-selected:before{\n  content:'\\EA06';\n  color:#09BB07;\n  font-size:23px;\n}\n.my-icon-no-selected:before{\n  content:'\\EA01';\n  color:#C9C9C9;\n  font-size:23px;\n  display:block;\n}\n.weui-label{\n  display:block;\n  width:105px;\n  word-wrap:break-word;\n  word-break:break-all;\n}\n.weui-input{\n  width:100%;\n  border:0;\n  outline:0;\n  -webkit-appearance:none;\n  background-color:transparent;\n  font-size:inherit;\n  color:inherit;\n  height:1.47058824em;\n  line-height:1.47058824;\n}\n.weui-input::-webkit-outer-spin-button,\n.weui-input::-webkit-inner-spin-button{\n  -webkit-appearance:none;\n  margin:0;\n}\n.weui-textarea{\n  display:block;\n  border:0;\n  resize:none;\n  width:100%;\n  color:inherit;\n  font-size:1em;\n  line-height:inherit;\n  outline:0;\n}\n.weui-textarea-counter{\n  color:#B2B2B2;\n  text-align:right;\n}\n.weui-cell_warn .weui-textarea-counter{\n  color:#E64340;\n}\n.weui-toptips{\n  display:none;\n  position:fixed;\n  transform:translateZ(0);\n  top:0;\n  left:0;\n  right:0;\n  padding:5px;\n  font-size:14px;\n  text-align:center;\n  color:#FFF;\n  z-index:5000;\n  word-wrap:break-word;\n  word-break:break-all;\n}\n.weui-toptips_warn{\n  background-color:#E64340;\n}\n.weui-cells_form .weui-cell__ft{\n  font-size:0;\n}\n.weui-cells_form .weui-icon-warn{\n  display:none;\n}\n.weui-cells_form input,\n.weui-cells_form textarea,\n.weui-cells_form label[for]{\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n.weui-cell_warn{\n  color:#E64340;\n}\n.weui-cell_warn .weui-icon-warn{\n  display:inline-block;\n}\n.weui-form-preview{\n  position:relative;\n  background-color:#FFFFFF;\n}\n.weui-form-preview:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-form-preview:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-form-preview__hd{\n  position:relative;\n  padding:10px 15px;\n  text-align:right;\n  line-height:2.5em;\n}\n.weui-form-preview__hd:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n  left:15px;\n}\n.weui-form-preview__hd .weui-form-preview__value{\n  font-style:normal;\n  font-size:1.6em;\n}\n.weui-form-preview__bd{\n  padding:10px 15px;\n  font-size:.9em;\n  text-align:right;\n  color:#999999;\n  line-height:2;\n}\n.weui-form-preview__ft{\n  position:relative;\n  line-height:50px;\n  display:-ms-flexbox;\n  display:flex;\n}\n.weui-form-preview__ft:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #D5D5D6;\n  color:#D5D5D6;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-form-preview__item{\n  overflow:hidden;\n}\n.weui-form-preview__label{\n  float:left;\n  margin-right:1em;\n  min-width:4em;\n  color:#999999;\n  text-align:justify;\n  text-align-last:justify;\n}\n.weui-form-preview__value{\n  display:block;\n  overflow:hidden;\n  word-break:normal;\n  word-wrap:break-word;\n}\n.weui-form-preview__btn{\n  position:relative;\n  display:block;\n  -ms-flex:1;\n      flex:1;\n  color:#3CC51F;\n  text-align:center;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\nbutton.weui-form-preview__btn{\n  background-color:transparent;\n  border:0;\n  outline:0;\n  line-height:inherit;\n  font-size:inherit;\n}\n.weui-form-preview__btn:active{\n  background-color:#EEEEEE;\n}\n.weui-form-preview__btn:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-left:1px solid #D5D5D6;\n  color:#D5D5D6;\n  transform-origin:0 0;\n  transform:scaleX(0.5);\n}\n.weui-form-preview__btn:first-child:after{\n  display:none;\n}\n.weui-form-preview__btn_default{\n  color:#999999;\n}\n.weui-form-preview__btn_primary{\n  color:#0BB20C;\n}\n.weui-cell_select{\n  padding:0;\n}\n.weui-cell_select .weui-select{\n  padding-right:30px;\n}\n.weui-cell_select .weui-cell__bd:after{\n  content:\" \";\n  display:inline-block;\n  height:6px;\n  width:6px;\n  border-width:2px 2px 0 0;\n  border-color:#C8C8CD;\n  border-style:solid;\n  transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position:relative;\n  top:-2px;\n  position:absolute;\n  top:50%;\n  right:15px;\n  margin-top:-4px;\n}\n.weui-select{\n  -webkit-appearance:none;\n  border:0;\n  outline:0;\n  background-color:transparent;\n  width:100%;\n  font-size:inherit;\n  height:45px;\n  line-height:45px;\n  position:relative;\n  z-index:1;\n  padding-left:15px;\n}\n.weui-cell_select-before{\n  padding-right:15px;\n}\n.weui-cell_select-before .weui-select{\n  width:105px;\n  box-sizing:border-box;\n}\n.weui-cell_select-before .weui-cell__hd{\n  position:relative;\n}\n.weui-cell_select-before .weui-cell__hd:after{\n  content:\" \";\n  position:absolute;\n  right:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-right:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:100% 0;\n  transform:scaleX(0.5);\n}\n.weui-cell_select-before .weui-cell__hd:before{\n  content:\" \";\n  display:inline-block;\n  height:6px;\n  width:6px;\n  border-width:2px 2px 0 0;\n  border-color:#C8C8CD;\n  border-style:solid;\n  transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position:relative;\n  top:-2px;\n  position:absolute;\n  top:50%;\n  right:15px;\n  margin-top:-4px;\n}\n.weui-cell_select-before .weui-cell__bd{\n  padding-left:15px;\n}\n.weui-cell_select-before .weui-cell__bd:after{\n  display:none;\n}\n.weui-cell_select-after{\n  padding-left:15px;\n}\n.weui-cell_select-after .weui-select{\n  padding-left:0;\n}\n.weui-cell_vcode{\n  padding-top:0;\n  padding-right:0;\n  padding-bottom:0;\n}\n.weui-vcode-img{\n  margin-left:5px;\n  height:45px;\n  vertical-align:middle;\n}\n.weui-vcode-btn{\n  display:inline-block;\n  height:45px;\n  margin-left:5px;\n  padding:0 0.6em 0 0.7em;\n  border-left:1px solid #E5E5E5;\n  line-height:45px;\n  vertical-align:middle;\n  font-size:17px;\n  color:#3CC51F;\n}\nbutton.weui-vcode-btn{\n  background-color:transparent;\n  border-top:0;\n  border-right:0;\n  border-bottom:0;\n  outline:0;\n}\n.weui-vcode-btn:active{\n  color:#52a341;\n}\n.weui-gallery{\n  display:none;\n  position:fixed;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  background-color:#000000;\n  z-index:1000;\n}\n.weui-gallery__img{\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:60px;\n  left:0;\n  background:center center no-repeat;\n  background-size:contain;\n}\n.weui-gallery__opr{\n  position:absolute;\n  right:0;\n  bottom:0;\n  left:0;\n  background-color:#0D0D0D;\n  color:#FFFFFF;\n  height:60px;\n  line-height:60px;\n  text-align:center;\n}\n.weui-gallery__del{\n  display:block;\n  margin-top:20px;\n}\n.weui-cell_switch{\n  padding-top:6.5px;\n  padding-bottom:6.5px;\n}\n.weui-switch{\n  -webkit-appearance:none;\n          -moz-appearance:none;\n       appearance:none;\n}\n.weui-switch,\n.weui-switch-cp__box{\n  position:relative;\n  width:52px;\n  height:32px;\n  border:1px solid #DFDFDF;\n  outline:0;\n  border-radius:16px;\n  box-sizing:border-box;\n  background-color:#DFDFDF;\n  transition:background-color 0.1s, border 0.1s;\n}\n.weui-switch:before,\n.weui-switch-cp__box:before{\n  content:\" \";\n  position:absolute;\n  top:0;\n  left:0;\n  width:50px;\n  height:30px;\n  border-radius:15px;\n  background-color:#FDFDFD;\n  transition:transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n}\n.weui-switch:after,\n.weui-switch-cp__box:after{\n  content:\" \";\n  position:absolute;\n  top:0;\n  left:0;\n  width:30px;\n  height:30px;\n  border-radius:15px;\n  background-color:#FFFFFF;\n  box-shadow:0 1px 3px rgba(0, 0, 0, 0.4);\n  transition:transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n}\n.weui-switch:checked,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box{\n  border-color:#04BE02;\n  background-color:#04BE02;\n}\n.weui-switch:checked:before,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before{\n  transform:scale(0);\n}\n.weui-switch:checked:after,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after{\n  transform:translateX(20px);\n}\n.weui-switch-cp__input{\n  position:absolute;\n  left:-9999px;\n}\n.weui-switch-cp__box{\n  display:block;\n}\n.weui-uploader__hd{\n  display:-ms-flexbox;\n  display:flex;\n  padding-bottom:10px;\n  -ms-flex-align:center;\n      align-items:center;\n}\n.weui-uploader__title{\n  -ms-flex:1;\n      flex:1;\n}\n.weui-uploader__info{\n  color:#B2B2B2;\n}\n.weui-uploader__bd{\n  margin-bottom:-4px;\n  margin-right:-9px;\n  overflow:hidden;\n}\n.weui-uploader__files{\n  list-style:none;\n}\n.weui-uploader__file{\n  float:left;\n  margin-right:9px;\n  margin-bottom:9px;\n  width:79px;\n  height:79px;\n  background:no-repeat center center;\n  background-size:cover;\n}\n.weui-uploader__file_status{\n  position:relative;\n}\n.weui-uploader__file_status:before{\n  content:\" \";\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  background-color:rgba(0, 0, 0, 0.5);\n}\n.weui-uploader__file_status .weui-uploader__file-content{\n  display:block;\n}\n.weui-uploader__file-content{\n  display:none;\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%, -50%);\n  color:#FFFFFF;\n}\n.weui-uploader__file-content .weui-icon-warn{\n  display:inline-block;\n}\n.weui-uploader__input-box{\n  float:left;\n  position:relative;\n  margin-right:9px;\n  margin-bottom:9px;\n  width:77px;\n  height:77px;\n  border:1px solid #D9D9D9;\n}\n.weui-uploader__input-box:before,\n.weui-uploader__input-box:after{\n  content:\" \";\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%, -50%);\n  background-color:#D9D9D9;\n}\n.weui-uploader__input-box:before{\n  width:2px;\n  height:39.5px;\n}\n.weui-uploader__input-box:after{\n  width:39.5px;\n  height:2px;\n}\n.weui-uploader__input-box:active{\n  border-color:#999999;\n}\n.weui-uploader__input-box:active:before,\n.weui-uploader__input-box:active:after{\n  background-color:#999999;\n}\n.weui-uploader__input{\n  position:absolute;\n  z-index:1;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  opacity:0;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n.weui-msg{\n  padding-top:36px;\n  text-align:center;\n}\n.weui-msg__icon-area{\n  margin-bottom:30px;\n}\n.weui-msg__text-area{\n  margin-bottom:25px;\n  padding:0 20px;\n}\n.weui-msg__text-area a{\n  color:#586C94;\n}\n.weui-msg__title{\n  margin-bottom:5px;\n  font-weight:400;\n  font-size:20px;\n}\n.weui-msg__desc{\n  font-size:14px;\n  color:#999999;\n}\n.weui-msg__opr-area{\n  margin-bottom:25px;\n}\n.weui-msg__extra-area{\n  margin-bottom:15px;\n  font-size:14px;\n  color:#999999;\n}\n.weui-msg__extra-area a{\n  color:#586C94;\n}\n@media screen and (min-height: 438px){\n  .weui-msg__extra-area{\n    position:fixed;\n    left:0;\n    bottom:0;\n    width:100%;\n    text-align:center;\n  }\n}\n.weui-article{\n  padding:20px 15px;\n  font-size:15px;\n}\n.weui-article section{\n  margin-bottom:1.5em;\n}\n.weui-article h1{\n  font-size:18px;\n  font-weight:400;\n  margin-bottom:.9em;\n}\n.weui-article h2{\n  font-size:16px;\n  font-weight:400;\n  margin-bottom:.34em;\n}\n.weui-article h3{\n  font-weight:400;\n  font-size:15px;\n  margin-bottom:.34em;\n}\n.weui-article *{\n  max-width:100%;\n  box-sizing:border-box;\n  word-wrap:break-word;\n}\n.weui-article p{\n  margin:0 0 .8em;\n}\n.weui-tabbar{\n  display:-ms-flexbox;\n  display:flex;\n  position:absolute;\n  z-index:500;\n  bottom:0;\n  width:100%;\n  background-color:#F7F7FA;\n}\n.weui-tabbar:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #C0BFC4;\n  color:#C0BFC4;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-tabbar__item{\n  display:block;\n  -ms-flex:1;\n      flex:1;\n  padding:5px 0 0;\n  font-size:0;\n  color:#999999;\n  text-align:center;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,\n.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,\n.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{\n  color:#09BB07;\n}\n.weui-tabbar__icon{\n  display:inline-block;\n  width:27px;\n  height:27px;\n}\ni.weui-tabbar__icon,\n.weui-tabbar__icon > i{\n  font-size:24px;\n  color:#999999;\n}\n.weui-tabbar__icon img{\n  width:100%;\n  height:100%;\n}\n.weui-tabbar__label{\n  text-align:center;\n  color:#999999;\n  font-size:10px;\n  line-height:1.8;\n}\n.weui-navbar{\n  display:-ms-flexbox;\n  display:flex;\n  position:absolute;\n  z-index:500;\n  top:0;\n  width:100%;\n  background-color:#FAFAFA;\n}\n.weui-navbar:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #CCCCCC;\n  color:#CCCCCC;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-navbar + .weui-tab__panel{\n  padding-top:50px;\n  padding-bottom:0;\n}\n.weui-navbar__item{\n  position:relative;\n  display:block;\n  -ms-flex:1;\n      flex:1;\n  padding:13px 0;\n  text-align:center;\n  font-size:15px;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n.weui-navbar__item:active{\n  background-color:#EDEDED;\n}\n.weui-navbar__item.weui-bar__item_on{\n  background-color:#EAEAEA;\n}\n.weui-navbar__item:after{\n  content:\" \";\n  position:absolute;\n  right:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-right:1px solid #CCCCCC;\n  color:#CCCCCC;\n  transform-origin:100% 0;\n  transform:scaleX(0.5);\n}\n.weui-navbar__item:last-child:after{\n  display:none;\n}\n.weui-tab{\n  position:relative;\n  height:100%;\n}\n.weui-tab__panel{\n  box-sizing:border-box;\n  height:100%;\n  padding-bottom:50px;\n  overflow:auto;\n  -webkit-overflow-scrolling:touch;\n}\n.weui-tab__content{\n  display:none;\n}\n.weui-progress{\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align:center;\n      align-items:center;\n}\n.weui-progress__bar{\n  background-color:#EBEBEB;\n  height:3px;\n  -ms-flex:1;\n      flex:1;\n}\n.weui-progress__inner-bar{\n  width:0;\n  height:100%;\n  background-color:#09BB07;\n}\n.weui-progress__opr{\n  display:block;\n  margin-left:15px;\n  font-size:0;\n}\n.weui-panel{\n  background-color:#FFFFFF;\n  margin-top:10px;\n  position:relative;\n  overflow:hidden;\n}\n.weui-panel:first-child{\n  margin-top:0;\n}\n.weui-panel:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-panel:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-panel__hd{\n  padding:14px 15px 10px;\n  color:#999999;\n  font-size:13px;\n  position:relative;\n}\n.weui-panel__hd:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n  left:15px;\n}\n.weui-media-box{\n  padding:15px;\n  position:relative;\n}\n.weui-media-box:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n  left:15px;\n}\n.weui-media-box:first-child:before{\n  display:none;\n}\na.weui-media-box{\n  color:#000000;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\na.weui-media-box:active{\n  background-color:#ECECEC;\n}\n.weui-media-box__title{\n  font-weight:400;\n  font-size:17px;\n  width:auto;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  word-wrap:normal;\n  word-wrap:break-word;\n  word-break:break-all;\n}\n.weui-media-box__desc{\n  color:#999999;\n  font-size:13px;\n  line-height:1.2;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  display:-webkit-box;\n  -webkit-line-clamp:2;\n}\n.weui-media-box__info{\n  margin-top:15px;\n  padding-bottom:5px;\n  font-size:13px;\n  color:#CECECE;\n  line-height:1em;\n  list-style:none;\n  overflow:hidden;\n}\n.weui-media-box__info__meta{\n  float:left;\n  padding-right:1em;\n}\n.weui-media-box__info__meta_extra{\n  padding-left:1em;\n  border-left:1px solid #CECECE;\n}\n.weui-media-box_text .weui-media-box__title{\n  margin-bottom:8px;\n}\n.weui-media-box_appmsg{\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align:center;\n      align-items:center;\n}\n.weui-media-box_appmsg .weui-media-box__hd{\n  margin-right:.8em;\n  width:60px;\n  height:60px;\n  line-height:60px;\n  text-align:center;\n}\n.weui-media-box_appmsg .weui-media-box__thumb{\n  width:100%;\n  max-height:100%;\n  vertical-align:top;\n}\n.weui-media-box_appmsg .weui-media-box__bd{\n  -ms-flex:1;\n      flex:1;\n  min-width:0;\n}\n.weui-media-box_small-appmsg{\n  padding:0;\n}\n.weui-media-box_small-appmsg .weui-cells{\n  margin-top:0;\n}\n.weui-media-box_small-appmsg .weui-cells:before{\n  display:none;\n}\n.weui-grids{\n  position:relative;\n  overflow:hidden;\n}\n.weui-grids:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #D9D9D9;\n  color:#D9D9D9;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-grids:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-left:1px solid #D9D9D9;\n  color:#D9D9D9;\n  transform-origin:0 0;\n  transform:scaleX(0.5);\n}\n.weui-grid{\n  position:relative;\n  float:left;\n  padding:20px 10px;\n  width:33.33333333%;\n  box-sizing:border-box;\n}\n.weui-grid:before{\n  content:\" \";\n  position:absolute;\n  right:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-right:1px solid #D9D9D9;\n  color:#D9D9D9;\n  transform-origin:100% 0;\n  transform:scaleX(0.5);\n}\n.weui-grid:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #D9D9D9;\n  color:#D9D9D9;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-grid:active{\n  background-color:#ECECEC;\n}\n.weui-grid__icon{\n  width:28px;\n  height:28px;\n  margin:0 auto;\n}\n.weui-grid__icon img{\n  display:block;\n  width:100%;\n  height:100%;\n}\n.weui-grid__icon + .weui-grid__label{\n  margin-top:5px;\n}\n.weui-grid__label{\n  display:block;\n  text-align:center;\n  color:#000000;\n  font-size:14px;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  overflow:hidden;\n}\n.weui-footer{\n  color:#999999;\n  font-size:14px;\n  text-align:center;\n}\n.weui-footer a{\n  color:#586C94;\n}\n.weui-footer_fixed-bottom{\n  position:fixed;\n  bottom:.52em;\n  left:0;\n  right:0;\n}\n.weui-footer__links{\n  font-size:0;\n}\n.weui-footer__link{\n  display:inline-block;\n  vertical-align:top;\n  margin:0 .62em;\n  position:relative;\n  font-size:14px;\n}\n.weui-footer__link:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-left:1px solid #C7C7C7;\n  color:#C7C7C7;\n  transform-origin:0 0;\n  transform:scaleX(0.5);\n  left:-0.65em;\n  top:.36em;\n  bottom:.36em;\n}\n.weui-footer__link:first-child:before{\n  display:none;\n}\n.weui-footer__text{\n  padding:0 .34em;\n  font-size:12px;\n}\n.weui-flex{\n  display:-ms-flexbox;\n  display:flex;\n}\n.weui-flex__item{\n  -ms-flex:1;\n      flex:1;\n}\n.weui-dialog{\n  position:fixed;\n  z-index:5000;\n  width:80%;\n  max-width:300px;\n  top:50%;\n  left:50%;\n  transform:translate(-50%, -50%);\n  background-color:#FFFFFF;\n  text-align:center;\n  border-radius:3px;\n  overflow:hidden;\n}\n.weui-dialog__hd{\n  padding:1.3em 1.6em 0.5em;\n}\n.weui-dialog__title{\n  font-weight:400;\n  font-size:18px;\n}\n.weui-dialog__bd{\n  padding:0 1.6em 0.8em;\n  min-height:40px;\n  font-size:15px;\n  line-height:1.3;\n  word-wrap:break-word;\n  word-break:break-all;\n  color:#999999;\n}\n.weui-dialog__bd:first-child{\n  padding:2.7em 20px 1.7em;\n  color:#353535;\n}\n.weui-dialog__ft{\n  position:relative;\n  line-height:48px;\n  font-size:18px;\n  display:-ms-flexbox;\n  display:flex;\n}\n.weui-dialog__ft:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #D5D5D6;\n  color:#D5D5D6;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-dialog__btn{\n  display:block;\n  -ms-flex:1;\n      flex:1;\n  color:#3CC51F;\n  text-decoration:none;\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n  position:relative;\n}\n.weui-dialog__btn:active{\n  background-color:#EEEEEE;\n}\n.weui-dialog__btn:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  width:1px;\n  bottom:0;\n  border-left:1px solid #D5D5D6;\n  color:#D5D5D6;\n  transform-origin:0 0;\n  transform:scaleX(0.5);\n}\n.weui-dialog__btn:first-child:after{\n  display:none;\n}\n.weui-dialog__btn_default{\n  color:#353535;\n}\n.weui-dialog__btn_primary{\n  color:#0BB20C;\n}\n.weui-skin_android .weui-dialog{\n  text-align:left;\n  box-shadow:0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n.weui-skin_android .weui-dialog__title{\n  font-size:21px;\n}\n.weui-skin_android .weui-dialog__hd{\n  text-align:left;\n}\n.weui-skin_android .weui-dialog__bd{\n  color:#999999;\n  padding:0.25em 1.6em 2em;\n  font-size:17px;\n  text-align:left;\n}\n.weui-skin_android .weui-dialog__bd:first-child{\n  padding:1.6em 1.6em 2em;\n  color:#353535;\n}\n.weui-skin_android .weui-dialog__ft{\n  display:block;\n  text-align:right;\n  line-height:42px;\n  font-size:16px;\n  padding:0 1.6em 0.7em;\n}\n.weui-skin_android .weui-dialog__ft:after{\n  display:none;\n}\n.weui-skin_android .weui-dialog__btn{\n  display:inline-block;\n  vertical-align:top;\n  padding:0 .8em;\n}\n.weui-skin_android .weui-dialog__btn:after{\n  display:none;\n}\n.weui-skin_android .weui-dialog__btn:active{\n  background-color:rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:visited{\n  background-color:rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:last-child{\n  margin-right:-0.8em;\n}\n.weui-skin_android .weui-dialog__btn_default{\n  color:#808080;\n}\n.weui-dialog__ft a{\n  line-height:3rem;\n}\n@media screen and (min-width: 1024px){\n  .weui-dialog{\n    width:35%;\n  }\n}\n.weui-toast{\n  position:fixed;\n  z-index:5000;\n  width:7.6em;\n  min-height:7.6em;\n  top:180px;\n  left:50%;\n  margin-left:-3.8em;\n  background:rgba(17, 17, 17, 0.7);\n  text-align:center;\n  border-radius:5px;\n  color:#FFFFFF;\n}\n.weui-icon_toast{\n  margin:22px 0 0;\n  display:block;\n}\n.weui-icon_toast.weui-icon-success-no-circle:before{\n  color:#FFFFFF;\n  font-size:55px;\n}\n.weui-icon_toast.weui-loading{\n  margin:30px 0 0;\n  width:38px;\n  height:38px;\n  vertical-align:baseline;\n}\n.weui-toast__content{\n  margin:0 0 15px;\n}\n.weui-mask{\n  position:fixed;\n  z-index:1000;\n  top:0;\n  right:0;\n  left:0;\n  bottom:0;\n  background:rgba(0, 0, 0, 0.6);\n}\n.weui-mask_transparent{\n  position:fixed;\n  z-index:1000;\n  top:0;\n  right:0;\n  left:0;\n  bottom:0;\n}\n.weui-actionsheet{\n  position:fixed;\n  left:0;\n  bottom:0;\n  transform:translate(0, 100%);\n  -webkit-backface-visibility:hidden;\n          backface-visibility:hidden;\n  z-index:5000;\n  width:100%;\n  background-color:#EFEFF4;\n  transition:transform .3s;\n}\n.weui-actionsheet__title{\n  position:relative;\n  height:65px;\n  padding:0 20px;\n  line-height:1.4;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-pack:center;\n      justify-content:center;\n  -ms-flex-direction:column;\n      flex-direction:column;\n  text-align:center;\n  font-size:14px;\n  color:#888;\n  background:#FCFCFD;\n}\n.weui-actionsheet__title:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-actionsheet__title .weui-actionsheet__title-text{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  display:-webkit-box;\n  -webkit-line-clamp:2;\n}\n.weui-actionsheet__menu{\n  background-color:#FCFCFD;\n}\n.weui-actionsheet__action{\n  margin-top:6px;\n  background-color:#FCFCFD;\n}\n.weui-actionsheet__cell{\n  position:relative;\n  padding:10px 0;\n  text-align:center;\n  font-size:18px;\n}\n.weui-actionsheet__cell:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #e5e5e5;\n  color:#e5e5e5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-actionsheet__cell:active{\n  background-color:#ECECEC;\n}\n.weui-actionsheet__cell:first-child:before{\n  display:none;\n}\n.weui-skin_android .weui-actionsheet{\n  position:fixed;\n  left:50%;\n  top:50%;\n  bottom:auto;\n  transform:translate(-50%, -50%);\n  width:274px;\n  box-sizing:border-box;\n  -webkit-backface-visibility:hidden;\n          backface-visibility:hidden;\n  background:transparent;\n  transition:transform .3s;\n}\n.weui-skin_android .weui-actionsheet__action{\n  display:none;\n}\n.weui-skin_android .weui-actionsheet__menu{\n  border-radius:2px;\n  box-shadow:0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n.weui-skin_android .weui-actionsheet__cell{\n  padding:13px 24px;\n  font-size:16px;\n  line-height:1.4;\n  text-align:left;\n}\n.weui-skin_android .weui-actionsheet__cell:first-child{\n  border-top-left-radius:2px;\n  border-top-right-radius:2px;\n}\n.weui-skin_android .weui-actionsheet__cell:last-child{\n  border-bottom-left-radius:2px;\n  border-bottom-right-radius:2px;\n}\n.weui-actionsheet_toggle{\n  transform:translate(0, 0);\n}\n.weui-loadmore{\n  width:65%;\n  margin:1.5em auto;\n  line-height:1.6em;\n  font-size:14px;\n  text-align:center;\n}\n.weui-loadmore__tips{\n  display:inline-block;\n  vertical-align:middle;\n}\n.weui-loadmore_line{\n  border-top:1px solid #E5E5E5;\n  margin-top:2.4em;\n}\n.weui-loadmore_line .weui-loadmore__tips{\n  position:relative;\n  top:-0.9em;\n  padding:0 .55em;\n  background-color:#FFFFFF;\n  color:#999999;\n}\n.weui-loadmore_dot .weui-loadmore__tips{\n  padding:0 .16em;\n}\n.weui-loadmore_dot .weui-loadmore__tips:before{\n  content:\" \";\n  width:4px;\n  height:4px;\n  border-radius:50%;\n  background-color:#E5E5E5;\n  display:inline-block;\n  position:relative;\n  vertical-align:0;\n  top:-0.16em;\n}\n.weui-badge{\n  display:inline-block;\n  padding:.15em .4em;\n  min-width:8px;\n  border-radius:18px;\n  background-color:#F43530;\n  color:#FFFFFF;\n  line-height:1.2;\n  text-align:center;\n  font-size:12px;\n  vertical-align:middle;\n}\n.weui-badge_dot{\n  padding:.4em;\n  min-width:0;\n}\n.weui-search-bar{\n  position:relative;\n  padding:8px 10px;\n  display:-ms-flexbox;\n  display:flex;\n  box-sizing:border-box;\n  background-color:#EFEFF4;\n}\n.weui-search-bar:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #D7D6DC;\n  color:#D7D6DC;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-search-bar:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #D7D6DC;\n  color:#D7D6DC;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{\n  display:block;\n}\n.weui-search-bar.weui-search-bar_focusing .weui-search-bar__label{\n  display:none;\n}\n.weui-search-bar__form{\n  position:relative;\n  -ms-flex:auto;\n      flex:auto;\n  background-color:#EFEFF4;\n}\n.weui-search-bar__form:after{\n  content:'';\n  position:absolute;\n  left:0;\n  top:0;\n  width:200%;\n  height:200%;\n  transform:scale(0.5);\n  transform-origin:0 0;\n  border-radius:10px;\n  border:1px solid #E6E6EA;\n  box-sizing:border-box;\n  background:#FFFFFF;\n}\n.weui-search-bar__box{\n  position:relative;\n  padding-left:30px;\n  padding-right:30px;\n  height:100%;\n  width:100%;\n  box-sizing:border-box;\n  z-index:1;\n}\n.weui-search-bar__box .weui-search-bar__input{\n  padding:4px 0;\n  width:100%;\n  height:1.42857143em;\n  border:0;\n  font-size:14px;\n  line-height:1.42857143em;\n  box-sizing:content-box;\n  background:transparent;\n}\n.weui-search-bar__box .weui-search-bar__input:focus{\n  outline:none;\n}\n.weui-search-bar__box .weui-icon-search{\n  position:absolute;\n  left:10px;\n  top:0;\n  line-height:28px;\n}\n.weui-search-bar__box .weui-icon-clear{\n  position:absolute;\n  top:0;\n  right:0;\n  padding:0 10px;\n  line-height:28px;\n}\n.weui-search-bar__label{\n  position:absolute;\n  top:1px;\n  right:1px;\n  bottom:1px;\n  left:1px;\n  z-index:2;\n  border-radius:3px;\n  text-align:center;\n  color:#9B9B9B;\n  background:#FFFFFF;\n}\n.weui-search-bar__label span{\n  display:inline-block;\n  font-size:14px;\n  vertical-align:middle;\n}\n.weui-search-bar__label .weui-icon-search{\n  margin-right:5px;\n}\n.weui-search-bar__cancel-btn{\n  display:none;\n  margin-left:10px;\n  line-height:28px;\n  color:#09BB07;\n  white-space:nowrap;\n}\n.weui-search-bar__input:not(:valid) ~ .weui-icon-clear{\n  display:none;\n}\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration{\n  display:none;\n}\n.weui-picker{\n  position:fixed;\n  width:100%;\n  left:0;\n  bottom:0;\n  z-index:5000;\n  -webkit-backface-visibility:hidden;\n          backface-visibility:hidden;\n  transform:translate(0, 100%);\n  transition:transform .3s;\n}\n.weui-picker__hd{\n  display:-ms-flexbox;\n  display:flex;\n  padding:9px 15px;\n  background-color:#fff;\n  position:relative;\n  text-align:center;\n  font-size:17px;\n}\n.weui-picker__hd:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-picker__action{\n  display:block;\n  -ms-flex:1;\n      flex:1;\n  color:#1AAD19;\n}\n.weui-picker__action:first-child{\n  text-align:left;\n  color:#888;\n}\n.weui-picker__action:last-child{\n  text-align:right;\n}\n.weui-picker__title{\n  display:block;\n  -ms-flex:1;\n      flex:1;\n  color:#888;\n  text-align:center;\n}\n.weui-picker__bd{\n  display:-ms-flexbox;\n  display:flex;\n  position:relative;\n  background-color:#fff;\n  height:238px;\n  overflow:hidden;\n}\n.weui-picker__group{\n  -ms-flex:1;\n      flex:1;\n  position:relative;\n  height:100%;\n}\n.weui-picker__mask{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  margin:0 auto;\n  z-index:3;\n  background:linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n  background-position:top, bottom;\n  background-size:100% 102px;\n  background-repeat:no-repeat;\n  transform:translateZ(0);\n}\n.weui-picker__indicator{\n  width:100%;\n  height:34px;\n  position:absolute;\n  left:0;\n  top:102px;\n  z-index:3;\n}\n.weui-picker__indicator:before{\n  content:\" \";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  height:1px;\n  border-top:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 0;\n  transform:scaleY(0.5);\n}\n.weui-picker__indicator:after{\n  content:\" \";\n  position:absolute;\n  left:0;\n  bottom:0;\n  right:0;\n  height:1px;\n  border-bottom:1px solid #E5E5E5;\n  color:#E5E5E5;\n  transform-origin:0 100%;\n  transform:scaleY(0.5);\n}\n.weui-picker__content{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n}\n.weui-picker__item{\n  padding:0;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  color:#000;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  overflow:hidden;\n}\n.weui-picker__item_disabled{\n  color:#999999;\n}\n@keyframes slideUp{\n  from{\n    transform:translate3d(0, 100%, 0);\n  }\n  to{\n    transform:translate3d(0, 0, 0);\n  }\n}\n.weui-animate-slide-up{\n  animation:slideUp ease .3s forwards;\n}\n@keyframes slideDown{\n  from{\n    transform:translate3d(0, 0, 0);\n  }\n  to{\n    transform:translate3d(0, 100%, 0);\n  }\n}\n.weui-animate-slide-down{\n  animation:slideDown ease .3s forwards;\n}\n@keyframes fadeIn{\n  from{\n    opacity:0;\n  }\n  to{\n    opacity:1;\n  }\n}\n.weui-animate-fade-in{\n  animation:fadeIn ease .3s forwards;\n}\n@keyframes fadeOut{\n  from{\n    opacity:1;\n  }\n  to{\n    opacity:0;\n  }\n}\n.weui-animate-fade-out{\n  animation:fadeOut ease .3s forwards;\n}\n.weui-agree{\n  display:block;\n  padding:.5em 15px;\n  font-size:13px;\n}\n.weui-agree a{\n  color:#586C94;\n}\n.weui-agree__text{\n  color:#999999;\n}\n.weui-agree__checkbox{\n  -webkit-appearance:none;\n          -moz-appearance:none;\n       appearance:none;\n  outline:0;\n  font-size:0;\n  border:1px solid #D1D1D1;\n  background-color:#FFFFFF;\n  border-radius:3px;\n  width:13px;\n  height:13px;\n  position:relative;\n  vertical-align:0;\n  top:2px;\n}\n.weui-agree__checkbox:checked:before{\n  font-family:\"weui\";\n  font-style:normal;\n  font-weight:normal;\n  font-variant:normal;\n  text-transform:none;\n  text-align:center;\n  speak:none;\n  display:inline-block;\n  vertical-align:middle;\n  text-decoration:inherit;\n  content:\"\\EA08\";\n  color:#09BB07;\n  font-size:13px;\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%, -48%) scale(0.73);\n}\n.weui-agree__checkbox:disabled{\n  background-color:#E1E1E1;\n}\n.weui-agree__checkbox:disabled:before{\n  color:#ADADAD;\n}\n.weui-loading{\n  width:20px;\n  height:20px;\n  display:inline-block;\n  vertical-align:middle;\n  animation:weuiLoading 1s steps(12, end) infinite;\n  background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;\n  background-size:100%;\n}\n.weui-loading.weui-loading_transparent,\n.weui-btn_loading.weui-btn_primary .weui-loading,\n.weui-btn_loading.weui-btn_warn .weui-loading{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\");\n}\n@keyframes weuiLoading{\n  0%{\n    transform:rotate3d(0, 0, 1, 0deg);\n  }\n  100%{\n    transform:rotate3d(0, 0, 1, 360deg);\n  }\n}\n.weui-slider{\n  padding:15px 18px;\n  -webkit-user-select:none;\n          -moz-user-select:none;\n           -ms-user-select:none;\n       user-select:none;\n}\n.weui-slider__inner{\n  position:relative;\n  height:2px;\n  background-color:#E9E9E9;\n}\n.weui-slider__track{\n  height:2px;\n  background-color:#1AAD19;\n  width:0;\n}\n.weui-slider__handler{\n  position:absolute;\n  left:0;\n  top:50%;\n  width:28px;\n  height:28px;\n  margin-left:-14px;\n  margin-top:-14px;\n  border-radius:50%;\n  background-color:#FFFFFF;\n  box-shadow:0 0 4px rgba(0, 0, 0, 0.2);\n}\n.weui-slider-box{\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align:center;\n      align-items:center;\n}\n.weui-slider-box .weui-slider{\n  -ms-flex:1;\n      flex:1;\n}\n.weui-slider-box__value{\n  margin-left:.5em;\n  min-width:24px;\n  color:#888888;\n  text-align:center;\n  font-size:14px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlL2Jhc2UvcmVzZXQubGVzcyIsInN0eWxlL3dldWkuY3NzIiwic3R5bGUvYmFzZS9taXhpbi9tb2JpbGUubGVzcyIsInN0eWxlL2ljb24vd2V1aS1mb250Lmxlc3MiLCJzdHlsZS9pY29uL3dldWktaWNvbl9mb250Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZ2xvYmFsLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZGVmYXVsdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYnV0dG9uL3dldWktYnRuX3ByaW1hcnkubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ0bl93YXJuLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZGlzYWJsZWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ0bl9sb2FkaW5nLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fcGxhaW4ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ1dHRvbi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWNlbGxfZ2xvYmFsLmxlc3MiLCJzdHlsZS9iYXNlL21peGluL3NldE9uZXB4Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktY2VsbF9zd2lwZWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1hY2Nlc3MubGVzcyIsInN0eWxlL2Jhc2UvbWl4aW4vc2V0QXJyb3cubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1jaGVjay93ZXVpLWNoZWNrX2NvbW1vbi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWNoZWNrL3dldWktcmFkaW8ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1jaGVjay93ZXVpLWNoZWNrYm94Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktZm9ybS93ZXVpLWZvcm1fY29tbW9uLmxlc3MiLCJzdHlsZS9iYXNlL21peGluL3RleHQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1mb3JtL3dldWktZm9ybS1wcmV2aWV3Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktZm9ybS93ZXVpLXNlbGVjdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWZvcm0vd2V1aS12Y29kZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWdhbGxlcnkubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1zd2l0Y2gubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS11cGxvYWRlci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGFnZS93ZXVpLW1zZy5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGFnZS93ZXVpLWFydGljbGUubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRhYi93ZXVpLXRhYmJhci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGFiL3dldWktbmF2YmFyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS10YWIvd2V1aS10YWIubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXByb2dyZXNzL3dldWktcHJvZ3Jlc3MubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXBhbmVsL3dldWktcGFuZWwubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLW1lZGlhLWJveC93ZXVpLW1lZGlhLWJveC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktZ3JpZC93ZXVpLWdyaWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWZvb3Rlci93ZXVpLWZvb3Rlci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktZmxleC93ZXVpLWZsZXgubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS1kaWFsb2cubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS10b2FzdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGlwcy93ZXVpLW1hc2subGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS1hY3Rpb25zaGVldC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGlwcy93ZXVpLWxvYWRtb3JlLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS10aXBzL3dldWktYmFkZ2UubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXNlYXJjaGJhci93ZXVpLXNlYXJjaGJhci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGlja2VyL3dldWktcGlja2VyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1hbmltYXRlL3dldWktYW5pbWF0ZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYWdyZWUvd2V1aS1hZ3JlZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktbG9hZGluZy93ZXVpLWxvYWRpbmcubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXNsaWRlci93ZXVpLXNsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBa0JBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtDQ2dOSDtBRDdNRDtFQUNJLGdCQUFBO0VBQ0EsNkRBQUE7Q0MrTUg7QUQ1TUQ7RUFDSSxTQUFBO0VBQ0EsVUFBQTtDQzhNSDtBRDNNRDtFQUNJLFNBQUE7Q0M2TUg7QUQxTUQ7RUFDSSxxQkFBQTtFRXJCQSw2Q0FBQTtDRGtPSDtBRW5PRDtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9tTUFBQTtDRm1RSDtBRS9QRDs7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7Q0ZrUUg7QUVqUUc7O0VBRUkscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0NGbVFQO0FFL1BEOztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0Es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QUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7Q2xEaXFHSDtBa0Q3cEdEO0VBQ0ksb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDJCQUFBO1VBQUEsbUJBQUE7Q2xEK3BHSDtBa0RqcUdEO0VBSVEsbUJBQUE7RUFBQSxlQUFBO1VBQUEsT0FBQTtDbERncUdQO0FrRDdwR0Q7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0NsRCtwR0giLCJmaWxlIjoic3R5bGUvd2V1aS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiZm5cIjtcclxuXHJcbmh0bWwge1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtZmFtaWx5OiBAd2V1aUZvbnREZWZhdWx0O1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEgaW1nIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAuc2V0VGFwQ29sb3IoKTtcclxufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmh0bWwge1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLWZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5hIGltZyB7XG4gIGJvcmRlcjogMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5AZm9udC1mYWNlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJ3ZXVpXCI7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUFFQUFBQUxBSUFBQXdBd1IxTlZRckQrcyswQUFBRTRBQUFBUWs5VEx6SkFLRXgrQUFBQmZBQUFBRlpqYldGdzY1Y0ZIUUFBQWh3QUFBSlFaMng1WnZDUlIvRUFBQVNVQUFBS3RHaGxZV1FNUFJPdEFBQUE0QUFBQURab2FHVmhDQ3dEK2dBQUFMd0FBQUFrYUcxMGVFSm8vLzhBQUFIVUFBQUFTR3h2WTJFWXFoVzRBQUFFYkFBQUFDWnRZWGh3QVNFQVZRQUFBUmdBQUFBZ2JtRnRaZU5jSHRnQUFBOUlBQUFCNW5CdmMzVDZiTGhMQUFBUk1BQUFBT1lBQVFBQUErZ0FBQUJhQStqLy8vLy9BK2tBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQklBQVFBQUFBRUFBQ2JaYnh0ZkR6ejFBQXNENkFBQUFBRFVtMmR2QUFBQUFOU2JaMi8vL3dBQUEra0Q2Z0FBQUFnQUFnQUFBQUFBQUFBQkFBQUFFZ0JKQUFVQUFBQUFBQUlBQUFBS0FBb0FBQUQvQUFBQUFBQUFBQUVBQUFBS0FCNEFMQUFCUkVaTVZBQUlBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFBQUFRT3dBWkFBQlFBSUFub0N2QUFBQUl3Q2VnSzhBQUFCNEFBeEFRSUFBQUlBQlFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVR1pGWkFCQTZnSHFFUVBvQUFBQVdnUHFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2ovL3dQb0FBQUQ2QUFBQUFBQUJRQUFBQU1BQUFBc0FBQUFCQUFBQVhRQUFRQUFBQUFBYmdBREFBRUFBQUFzQUFNQUNnQUFBWFFBQkFCQ0FBQUFCQUFFQUFFQUFPb1IvLzhBQU9vQi8vOEFBQUFCQUFRQUFBQUJBQUlBQXdBRUFBVUFCZ0FIQUFnQUNRQUtBQXNBREFBTkFBNEFEd0FRQUJFQUFBRUdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQU53QUFBQUFBQUFBRVFBQTZnRUFBT29CQUFBQUFRQUE2Z0lBQU9vQ0FBQUFBZ0FBNmdNQUFPb0RBQUFBQXdBQTZnUUFBT29FQUFBQUJBQUE2Z1VBQU9vRkFBQUFCUUFBNmdZQUFPb0dBQUFBQmdBQTZnY0FBT29IQUFBQUJ3QUE2Z2dBQU9vSUFBQUFDQUFBNmdrQUFPb0pBQUFBQ1FBQTZnb0FBT29LQUFBQUNnQUE2Z3NBQU9vTEFBQUFDd0FBNmd3QUFPb01BQUFBREFBQTZnMEFBT29OQUFBQURRQUE2ZzRBQU9vT0FBQUFEZ0FBNmc4QUFPb1BBQUFBRHdBQTZoQUFBT29RQUFBQUVBQUE2aEVBQU9vUkFBQUFFUUFBQUFBQVJnQ01BTklCSkFGNEFjUUNNZ0pnQXFnQy9BTklBNllEL2dST0JLQUU5QVZhQUFBQUFnQUFBQUFEcndPdEFCUUFLUUFBQVNJSEJnY0dGQmNXRnhZeU56WTNOalFuSmljbUF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBZlY0WjJRN1BEdzdaR2Z3Wm1RN1BEdzdaR1o0Ymw1Yk5qYzNObHRlMjE1Yk5qYzNObHRlQTYwOE8yUm44R2RqT3p3OE8yTm44R2RrT3p6OHJ6YzFXMTdiWGx3MU56YzFYRjdiWGxzMU53QUFBQUFDQUFBQUFBT3pBN01BRndBdEFBQUJJZ2NHQndZVkZCY1dGeFl6TWpjMk56WTFOQ2NtSnlZVEJ3WWlMd0VtTmpzQkVUUTJPd0V5RmhVUk16SVdBZTUyWjJRN1BUMDdaR2QyZkdwbU96NCtPMlpwSVhZT0tBNTJEZzBYWFFzSEpnY0xYUmNOQTdNK08yWnFmSFpuWkRzOVBUdGtaM1o5YVdZN1B2M3dtaElTbWhJYUFSY0lDd3NJL3VrYUFBTUFBQUFBQStVRDVRQVhBQ01BTEFBQUFTSUhCZ2NHRlJRWEZoY1dNekkzTmpjMk5UUW5KaWNtQXhRckFTSTFBelE3QVRJSEp5SW1ORFl5RmhRR0FlNkVjbTlCUkVSQmIzS0VpWFp4UWtSRVFuRjFhUUl4QXdnQ1FnTUJJeElaR1NRWkdRUGtSRUp4ZG9tRWNtOUJSRVJCYjNLRWluVnhRa1Q5SFFJQ0FXSUNBakVaSXhrWkl4a0FBQUFBQWdBQUFBQURzUVBrQUJrQUxnQUFBUVlIQmdjMkJSRVVGeFlYRmhjMk56WTNOalVSSkJjbUp5WVRBUVl2QVNZL0FUWXlId0VXTmpjbE5qSWZBUllCOVZWVlFrK3YvdEZIUG14ZWJHeGRiVDFJL3RHdlQwSlZvLzdWQkFTS0F3TVNBUVVCY1FFRkFnRVNBZ1VCRVFRRDR4TVlFaGszWVA2c2puVmxTRDhjSEQ5SVpYV09BVlJnTnhrU0dQNjIvdGtEQTQ4RUJCa0NBVllDQVFIbEFRSVFCQUFBQUFBREFBQUFBQU94QStRQUd3QXFBRE1BQUFFR0J3WUhCZ2NHTnhFVUZ4WVhGaGMyTnpZM05qVVJKQmNtSnlZSE16SVdGUU1VQmlzQklpY0RORFlUSWlZME5qSVdGQVlCOVVGQk9Ec3NPMzhnUno1c1hteHNYVzA5U1A3WXFGQkJWVzgwQkFZTUF3SW1CUUVMQmg0UEZoWWVGUlVENUE4U0RoSU9FaWtLL3EyUGRXUkpQaDBkUGtsa2RZOEJVMTQxR1JJWS9BWUUvc1lDQXdVQk9nUUcva0FWSHhVVkh4VUFBQUFDQUFBQUFBUGtBK1FBRndBdEFBQUJJZ2NHQndZVkZCY1dGeFl6TWpjMk56WTFOQ2NtSnlZVEFRWWlMd0VtUHdFMk1oOEJGakkzQVRZeUh3RVdBZTZFY205QlEwTkNibk9EaVhWeFFrUkVRbkYxa2Y2Z0FRVUJvd01ERmdFRkFZVUNCUUVCUXdJRkFSVUVBK05FUW5GMWlZTnpia0pEUTBGdmNvU0pkWEZDUlA2ai9xVUJBYWdFQlI0Q0FXWUJBUUVOQWdJVkJBQUFBQVFBQUFBQUE2OERyUUFVQUNrQVB3QkRBQUFCSWdjR0J3WVVGeFlYRmpJM05qYzJOQ2NtSnlZRElpY21KeVkwTnpZM05qSVhGaGNXRkFjR0J3WVRCUTRCTHdFbUJnOEJCaFlmQVJZeU53RStBU1lpRnpBZkFRSDFlR2RrT3p3OE8yUm44R1prT3p3OE8yUm1lRzVlV3pZM056WmJYdHRlV3pZM056WmJYbW4rOWdZU0JtQUdEd1VEQlFFR2ZRVVFCZ0VsQlFFTEVCVUJBUU90UER0a1ovQm5ZenM4UER0alovQm5aRHM4L0s4M05WdGUyMTVjTlRjM05WeGUyMTViTlRjQ0p0MEZBUVZKQlFJR0JBY1JCb0FHQlFFaEJROExCQUVCQUFBQkFBQUFBQU83QXpvQUZ3QUFFeTRCUHdFK0FSOEJGalkzQVRZV0Z5Y1dGQWNCQmlJblBRb0dCd1VIR2d6TERDRUxBaDBMSHdzTkNncjl1UW9lQ2dHekN5RU9DdzBIQ1pNSkFRb0J2Z2tDQ2cwTEhRdjlzUXNLQUFBQUFBSUFBQUFBQStVRDVnQVhBQ3dBQUFFaUJ3WUhCaFVVRnhZWEZqTXlOelkzTmpVMEp5WW5KaE1IQmk4QkppY21OUk0wTmpzQk1oWVZFeGNlQVFIdmhISnZRVU5EUW01emc0bDFjVUpFUkVKeGRWY1FBd1Q2QXdJRUVBTUNLd0lERHNVQ0FRUGxSRUp4ZFltRGMyNUNRME5CYjNLRWlYVnhRa1Q5Vmh3RUFuY0NBZ01HQVhvQ0F3TUMvcTJGQWdRQUFBUUFBQUFBQTY4RHJRQURBQmdBTFFBekFBQUJNQjhCQXlJSEJnY0dGQmNXRnhZeU56WTNOalFuSmljbUF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBeU1WTXpVakF1VUJBZko0WjJRN1BEdzdaR2Z3Wm1RN1BEdzdaR1o0Ymw1Yk5qYzNObHRlMjE1Yk5qYzNObHRlbXlUOTJRS0RBUUVCTER3N1pHZndaMk03UER3N1kyZndaMlE3UFB5dk56VmJYdHRlWERVM056VmNYdHRlV3pVM0FqSDlKQUFBQUFNQUFBQUFBK1FENUFBWEFDY0FNQUFBQVNJSEJnY0dGUlFYRmhjV016STNOamMyTlRRbkppY21Bek15RmhVREZBWXJBU0ltTlFNME5oTWlKalEyTWhZVUJnSHVoSEp2UVVORFFtNXpnNGwxY1VKRVJFSnhkWjQyQkFZTUF3SW5Bd01NQmg4UEZoWWVGaFlENDBSQ2NYV0pnM051UWtORFFXOXloSWwxY1VKRS92WUdCZjdBQWdNREFnRkFCUWIrTmhZZkZoWWZGZ0FBQkFBQUFBQUR3QVBBQUFnQUVnQW9BRDBBQUFFeU5qUW1JZ1lVRmhjakZUTVJJeFV6TlNNRElnY0dCd1lWRkJZWEZqTXlOelkzTmpVMEp5NEJBeUluSmljbU5EYzJOell5RnhZWEZoUUhCZ2NHQWZRWUlTRXdJU0ZSanprNXlUb3JoRzVyUFQ5OWFtK0RkbWhsUEQ0K1BNeUZiVjViTlRjM05WdGUybDViTlRjM05WdGVBcUFpTHlJaUx5STVIZjdFSEJ3Q3NUODlhMjZFZDh3OFBqNDhaV2gyZzI5cWZmeWpOelZiWHRwZVd6VTNOelZiWHRwZVd6VTNBQUFEQUFBQUFBT29BNmdBQ3dBZ0FEVUFBQUVISndjWEJ4YzNGemNuTndNaUJ3WUhCaFFYRmhjV01qYzJOelkwSnlZbkpnTWlKeVluSmpRM05qYzJNaGNXRnhZVUJ3WUhCZ0tPbXBvY21wb2NtcG9jbXBxMmRtWmlPanM3T21KbTdHWmlPanM3T21KbWRtdGRXVFEyTmpSWlhkWmRXVFEyTmpSWlhRS3FtcG9jbXBvY21wb2NtcG9CR1RzNlltYnNabUk2T3pzNlltYnNabUk2Ty96Q05qUlpYZFpkV1RRMk5qUlpYZFpkV1RRMkFBTUFBQUFBQStrRDZnQWFBQzhBTUFBQUFRWUhCaU1pSnlZbkpqUTNOamMyTWhjV0Z4WVZGQWNHQndFSEFUSTNOamMyTkNjbUp5WWlCd1lIQmhRWEZoY1dNd0tPTlVCQ1IyMWRXalUzTnpWYVhkcGRXelUyR0JjckFTTTUvZUJYUzBnckt5c3JTRXV1U2trcUxDd3FTVXBYQVNNckZ4ZzJOVnRkMmwxYU5UYzNOVnBkYlVkQ1FEWCszamtCR1NzclNFdXVTa2txTEN3cVNVcXVTMGdyS3dBQy8vOEFBQVBvQStnQUZBQXdBQUFCSWdjR0J3WVFGeFlYRmlBM05qYzJFQ2NtSnlZVEZnNEJJaThCQndZdUFUUS9BU2NtUGdFV0h3RTNOaDRCQmc4QkFmU0lkSEZEUkVSRGNYUUJFSFJ4UTBSRVEzRjBTUW9CRkJzS29xZ0tHeE1LcUtJS0FSUWJDcUtvQ2hzVUFRcW9BK2hFUTNGMC92QjBjVU5FUkVOeGRBRVFkSEZEUlAxakNoc1RDcWlpQ2dFVUd3cWlxQW9iRkFFS3FLSUtBUlFiQ3FJQUFBSUFBQUFBQStRRDVBQVhBRFFBQUFFaUJ3WUhCaFVVRnhZWEZqTXlOelkzTmpVMEp5WW5KaE1VQmlNRkZ4WVVEd0VHTHdFdUFUOEJOaDhCRmhRUEFRVXlGaDBCQWU2RWNtOUJRME5DYm5PRGlYVnhRa1JFUW5GMWZ3UUMvcEdEQVFFVkF3VHNBZ0VDN0FRRUZBSUJoQUZ3QWdNRDQwUkNjWFdKZzNOdVFrTkRRVzl5aElsMWNVSkUvZllDQXd1VkFnUUNGQVFFMEFJRkF0RUVCQlFDQlFHVkN3TURKd0FBQUFVQUFBQUFBOVFEMHdBakFDY0FOd0JIQUVnQUFBRVJGQVlqSVNJbU5SRWpJaVk5QVRRMk15RTFORFl6SVRJV0hRRWhNaFlkQVJRR0l5RVJJUkVISWdZVkVSUVdPd0V5TmpVUk5DWWpJU0lHRlJFVUZqc0JNalkxRVRRbUt3RURleVliL1hZYkprTUpEUTBKQVFZWkVnRXZFeGtCQmdrTkRRbjlDUUpjMFFrTkRRa3RDUTBOQ2Y3c0NRME5DUzBKRFEwSkxRTWkvVFFiSmlZYkFzd01DaXdKRFM0U0dSa1NMZzBKTEFvTS9Vd0N0R3NOQ2Y1TkNRME5DUUd6Q1EwTkNmNU5DUTBOQ1FHekNRMEFBQUFBRUFER0FBRUFBQUFBQUFFQUJBQUFBQUVBQUFBQUFBSUFCd0FFQUFFQUFBQUFBQU1BQkFBTEFBRUFBQUFBQUFRQUJBQVBBQUVBQUFBQUFBVUFDd0FUQUFFQUFBQUFBQVlBQkFBZUFBRUFBQUFBQUFvQUt3QWlBQUVBQUFBQUFBc0FFd0JOQUFNQUFRUUpBQUVBQ0FCZ0FBTUFBUVFKQUFJQURnQm9BQU1BQVFRSkFBTUFDQUIyQUFNQUFRUUpBQVFBQ0FCK0FBTUFBUVFKQUFVQUZnQ0dBQU1BQVFRSkFBWUFDQUNjQUFNQUFRUUpBQW9BVmdDa0FBTUFBUVFKQUFzQUpnRDZkMlYxYVZKbFozVnNZWEozWlhWcGQyVjFhVlpsY25OcGIyNGdNUzR3ZDJWMWFVZGxibVZ5WVhSbFpDQmllU0J6ZG1jeWRIUm1JR1p5YjIwZ1JtOXVkR1ZzYkc4Z2NISnZhbVZqZEM1b2RIUndPaTh2Wm05dWRHVnNiRzh1WTI5dEFIY0FaUUIxQUdrQVVnQmxBR2NBZFFCc0FHRUFjZ0IzQUdVQWRRQnBBSGNBWlFCMUFHa0FWZ0JsQUhJQWN3QnBBRzhBYmdBZ0FERUFMZ0F3QUhjQVpRQjFBR2tBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQWdBQUFBQUFBQUFLQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVNBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBQVpqYVhKamJHVUlaRzkzYm14dllXUUVhVzVtYnd4ellXWmxYM04xWTJObGMzTUpjMkZtWlY5M1lYSnVCM04xWTJObGMzTU9jM1ZqWTJWemN5MWphWEpqYkdVUmMzVmpZMlZ6Y3kxdWJ5MWphWEpqYkdVSGQyRnBkR2x1Wnc1M1lXbDBhVzVuTFdOcGNtTnNaUVIzWVhKdUMybHVabTh0WTJseVkyeGxCbU5oYm1ObGJBWnpaV0Z5WTJnRlkyeGxZWElFWW1GamF3WmtaV3hsZEdVQUFBQUEnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5bY2xhc3NePVwid2V1aS1pY29uLVwiXSxcbltjbGFzcyo9XCIgd2V1aS1pY29uLVwiXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIFwid2V1aVwiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cbltjbGFzc149XCJ3ZXVpLWljb24tXCJdOmJlZm9yZSxcbltjbGFzcyo9XCIgd2V1aS1pY29uLVwiXTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAuMmVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yZW07XG59XG5bY2xhc3NePVwibXktaWNvbi1cIl0sXG5bY2xhc3MqPVwiIG15LWljb24tXCJdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgXCJ3ZXVpXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuW2NsYXNzXj1cIm15LWljb24tXCJdOmJlZm9yZSxcbltjbGFzcyo9XCIgbXktaWNvbi1cIl06YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogLjJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xufVxuLndldWktaWNvbi1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDFcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTAyXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1pbmZvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTAzXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1zYWZlLXN1Y2Nlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDRcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXNhZmUtd2FybjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwNVwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2VzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwNlwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDdcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXN1Y2Nlc3Mtbm8tY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTA4XCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi13YWl0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTA5XCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwQVwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24td2FybjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwQlwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24taW5mby1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMENcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLWNhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwRFwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTBFXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1jbGVhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwRlwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tYmFjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUExMFwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tZGVsZXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTExXCI7XG59XG4vKiAn7qCAJyAqL1xuW2NsYXNzXj1cIndldWktaWNvbl9cIl06YmVmb3JlLFxuW2NsYXNzKj1cIiB3ZXVpLWljb25fXCJdOmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbn1cbi53ZXVpLWljb24tc3VjY2VzcyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS1pY29uLXdhaXRpbmcge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMTBBRUZGO1xufVxuLndldWktaWNvbi13YXJuIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI0Y0MzUzMDtcbn1cbi53ZXVpLWljb24taW5mbyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMxMEFFRkY7XG59XG4ud2V1aS1pY29uLXN1Y2Nlc3MtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMxMEFFRkY7XG59XG4ud2V1aS1pY29uLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICNDOUM5Qzk7XG59XG4ud2V1aS1pY29uLWRvd25sb2FkIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24taW5mby1jaXJjbGUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi1zYWZlLXN1Y2Nlc3Mge1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24tc2FmZS13YXJuIHtcbiAgY29sb3I6ICNGRkJFMDA7XG59XG4ud2V1aS1pY29uLWNhbmNlbCB7XG4gIGNvbG9yOiAjRjQzNTMwO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ud2V1aS1pY29uLXNlYXJjaCB7XG4gIGNvbG9yOiAjQjJCMkIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1pY29uLWNsZWFyIHtcbiAgY29sb3I6ICNCMkIyQjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi53ZXVpLWljb24tZGVsZXRlLndldWktaWNvbl9nYWxsZXJ5LWRlbGV0ZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ud2V1aS1pY29uX21zZyB7XG4gIGZvbnQtc2l6ZTogOTNweDtcbn1cbi53ZXVpLWljb25fbXNnLndldWktaWNvbi13YXJuIHtcbiAgY29sb3I6ICNGNzYyNjA7XG59XG4ud2V1aS1pY29uX21zZy1wcmltYXJ5IHtcbiAgZm9udC1zaXplOiA5M3B4O1xufVxuLndldWktaWNvbl9tc2ctcHJpbWFyeS53ZXVpLWljb24td2FybiB7XG4gIGNvbG9yOiAjRkZCRTAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxpbmUtaGVpZ2h0OiAyLjU1NTU1NTU2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWJ0bjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53ZXVpLWJ0bl9pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWJ0bl9kZWZhdWx0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG59XG4ud2V1aS1idG5fZGVmYXVsdDpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ud2V1aS1idG5fZGVmYXVsdDpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREVERURFO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQUFEMTk7XG59XG4ud2V1aS1idG5fcHJpbWFyeTpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1idG5fcHJpbWFyeTpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc5QjE2O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjQzNDA7XG59XG4ud2V1aS1idG5fd2Fybjpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1idG5fd2Fybjpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0UzQzM5O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLndldWktYnRuX2Rpc2FibGVkLndldWktYnRuX2RlZmF1bHQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xufVxuLndldWktYnRuX2Rpc2FibGVkLndldWktYnRuX3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUVEOTlEO1xufVxuLndldWktYnRuX2Rpc2FibGVkLndldWktYnRuX3dhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM4Qjg5O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fbG9hZGluZyAud2V1aS1sb2FkaW5nIHtcbiAgbWFyZ2luOiAtMC4yZW0gMC4zNGVtIDAgMDtcbn1cbi53ZXVpLWJ0bl9sb2FkaW5nLndldWktYnRuX3ByaW1hcnksXG4ud2V1aS1idG5fbG9hZGluZy53ZXVpLWJ0bl93YXJuIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi53ZXVpLWJ0bl9sb2FkaW5nLndldWktYnRuX3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc5QjE2O1xufVxuLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRTNDMzk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWJ0bl9wbGFpbi1wcmltYXJ5IHtcbiAgY29sb3I6ICMxYWFkMTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYWFkMTk7XG59XG4ud2V1aS1idG5fcGxhaW4tcHJpbWFyeTpub3QoLndldWktYnRuX3BsYWluLWRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNiwgMTczLCAyNSwgMC42KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI2LCAxNzMsIDI1LCAwLjYpO1xufVxuLndldWktYnRuX3BsYWluLXByaW1hcnk6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDA7XG59XG4ud2V1aS1idG5fcGxhaW4tZGVmYXVsdCB7XG4gIGNvbG9yOiAjMzUzNTM1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzUzNTM1O1xufVxuLndldWktYnRuX3BsYWluLWRlZmF1bHQ6bm90KC53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoNTMsIDUzLCA1MywgMC42KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUzLCA1MywgNTMsIDAuNik7XG59XG4ud2V1aS1idG5fcGxhaW4tZGVmYXVsdDphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cbi53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuYnV0dG9uLndldWktYnRuLFxuaW5wdXQud2V1aS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5idXR0b24ud2V1aS1idG46Zm9jdXMsXG5pbnB1dC53ZXVpLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5idXR0b24ud2V1aS1idG5faW5saW5lLFxuaW5wdXQud2V1aS1idG5faW5saW5lLFxuYnV0dG9uLndldWktYnRuX21pbmksXG5pbnB1dC53ZXVpLWJ0bl9taW5pIHtcbiAgd2lkdGg6IGF1dG87XG59XG5idXR0b24ud2V1aS1idG5fcGxhaW4tcHJpbWFyeSxcbmlucHV0LndldWktYnRuX3BsYWluLXByaW1hcnksXG5idXR0b24ud2V1aS1idG5fcGxhaW4tZGVmYXVsdCxcbmlucHV0LndldWktYnRuX3BsYWluLWRlZmF1bHQge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ud2V1aS1idG5fbWluaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxLjMyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi8qZ2FwIGJldHdlZW4gYnRuKi9cbi53ZXVpLWJ0biArIC53ZXVpLWJ0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ud2V1aS1idG4ud2V1aS1idG5faW5saW5lICsgLndldWktYnRuLndldWktYnRuX2lubGluZSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLndldWktYnRuLWFyZWEge1xuICBtYXJnaW46IDEuMTc2NDcwNTllbSAxNXB4IDAuM2VtO1xufVxuLndldWktYnRuLWFyZWFfaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53ZXVpLWJ0bi1hcmVhX2lubGluZSAud2V1aS1idG4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xufVxuLndldWktYnRuLWFyZWFfaW5saW5lIC53ZXVpLWJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuei1pbmRleDpcbjA6IC53ZXVpLXN3aXBlZC1idG5cbjE6IC53ZXVpLWNlbGxfc3dpcGVkIC53ZXVpLWNlbGxfX2JkXG4yOiAud2V1aS1jZWxsc+WSjC53ZXVpLWNlbGznmoQxcHjnur9cbiovXG4ud2V1aS1jZWxscyB7XG4gIG1hcmdpbi10b3A6IDEuMTc2NDcwNTllbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDEuNDcwNTg4MjQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktY2VsbHM6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICB6LWluZGV4OiAyO1xufVxuLndldWktY2VsbHM6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIHotaW5kZXg6IDI7XG59XG4ud2V1aS1jZWxsc19fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAuNzdlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjNlbTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndldWktY2VsbHNfX3RpdGxlICsgLndldWktY2VsbHMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLndldWktY2VsbHNfX3RpcHMge1xuICBtYXJnaW4tdG9wOiAuM2VtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1jZWxsIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2V1aS1jZWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMjtcbn1cbi53ZXVpLWNlbGw6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWNlbGxfcHJpbWFyeSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLndldWktY2VsbF9fYmQge1xuICBmbGV4OiAxO1xufVxuLndldWktY2VsbF9fZnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNlbGxfc3dpcGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG59XG4ud2V1aS1jZWxsX3N3aXBlZCA+IC53ZXVpLWNlbGxfX2JkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktY2VsbF9zd2lwZWQgPiAud2V1aS1jZWxsX19mdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLXN3aXBlZC1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ3MDU4ODI0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi53ZXVpLXN3aXBlZC1idG5fZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Q0M7XG59XG4ud2V1aS1zd2lwZWQtYnRuX3dhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjMwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1jZWxsX2FjY2VzcyB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ud2V1aS1jZWxsX2FjY2VzczphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktY2VsbF9hY2Nlc3MgLndldWktY2VsbF9fZnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1jZWxsX2FjY2VzcyAud2V1aS1jZWxsX19mdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIHJpZ2h0OiAycHg7XG59XG4ud2V1aS1jZWxsX2xpbmsge1xuICBjb2xvcjogIzU4NkM5NDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndldWktY2VsbF9saW5rOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNoZWNrX19sYWJlbCB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLWNoZWNrX19sYWJlbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05OTk5ZW07XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNlbGxzX3JhZGlvIC53ZXVpLWNlbGxfX2Z0IHtcbiAgcGFkZGluZy1sZWZ0OiAwLjM1ZW07XG59XG4ud2V1aS1jZWxsc19yYWRpbyAud2V1aS1jaGVjazpjaGVja2VkICsgLndldWktaWNvbi1jaGVja2VkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiAnXFxFQTA4JztcbiAgY29sb3I6ICMwOUJCMDc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktY2VsbHNfY2hlY2tib3ggLndldWktY2VsbF9faGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjM1ZW07XG59XG4ud2V1aS1jZWxsc19jaGVja2JveCAud2V1aS1pY29uLWNoZWNrZWQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcRUEwMSc7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktY2VsbHNfY2hlY2tib3ggLndldWktY2hlY2s6Y2hlY2tlZCArIC53ZXVpLWljb24tY2hlY2tlZDpiZWZvcmUge1xuICBjb250ZW50OiAnXFxFQTA2JztcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ubXktaWNvbi1zZWxlY3RlZDpiZWZvcmUge1xuICBjb250ZW50OiAnXFxFQTA2JztcbiAgY29sb3I6ICMwOUJCMDc7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cbi5teS1pY29uLW5vLXNlbGVjdGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXEVBMDEnO1xuICBjb2xvcjogI0M5QzlDOTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTA1cHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLndldWktaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBoZWlnaHQ6IDEuNDcwNTg4MjRlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDcwNTg4MjQ7XG59XG4ud2V1aS1pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi53ZXVpLWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ud2V1aS10ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDA7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ud2V1aS10ZXh0YXJlYS1jb3VudGVyIHtcbiAgY29sb3I6ICNCMkIyQjI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndldWktY2VsbF93YXJuIC53ZXVpLXRleHRhcmVhLWNvdW50ZXIge1xuICBjb2xvcjogI0U2NDM0MDtcbn1cbi53ZXVpLXRvcHRpcHMge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDUwMDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLndldWktdG9wdGlwc193YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2NDM0MDtcbn1cbi53ZXVpLWNlbGxzX2Zvcm0gLndldWktY2VsbF9fZnQge1xuICBmb250LXNpemU6IDA7XG59XG4ud2V1aS1jZWxsc19mb3JtIC53ZXVpLWljb24td2FybiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1jZWxsc19mb3JtIGlucHV0LFxuLndldWktY2VsbHNfZm9ybSB0ZXh0YXJlYSxcbi53ZXVpLWNlbGxzX2Zvcm0gbGFiZWxbZm9yXSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLWNlbGxfd2FybiB7XG4gIGNvbG9yOiAjRTY0MzQwO1xufVxuLndldWktY2VsbF93YXJuIC53ZXVpLWljb24td2FybiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktZm9ybS1wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktZm9ybS1wcmV2aWV3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWZvcm0tcHJldmlldzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19faGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19faGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIGxlZnQ6IDE1cHg7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2hkIC53ZXVpLWZvcm0tcHJldmlld19fdmFsdWUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2JkIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IC45ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2Z0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDVENUQ2O1xuICBjb2xvcjogI0Q1RDVENjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19pdGVtIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIG1pbi13aWR0aDogNGVtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1hbGlnbi1sYXN0OiBqdXN0aWZ5O1xufVxuLndldWktZm9ybS1wcmV2aWV3X192YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgY29sb3I6ICMzQ0M1MUY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuYnV0dG9uLndldWktZm9ybS1wcmV2aWV3X19idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuLndldWktZm9ybS1wcmV2aWV3X19idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Q1RDVENjtcbiAgY29sb3I6ICNENUQ1RDY7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuX2RlZmF1bHQge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuX3ByaW1hcnkge1xuICBjb2xvcjogIzBCQjIwQztcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktY2VsbF9zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xufVxuLndldWktY2VsbF9zZWxlY3QgLndldWktc2VsZWN0IHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0IC53ZXVpLWNlbGxfX2JkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XG4gIGJvcmRlci1jb2xvcjogI0M4QzhDRDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoMC43MSwgMC43MSwgLTAuNzEsIDAuNzEsIDAsIDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG4ud2V1aS1zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGhlaWdodDogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0LWJlZm9yZSAud2V1aS1zZWxlY3Qge1xuICB3aWR0aDogMTA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktY2VsbF9faGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktY2VsbF9faGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktY2VsbF9faGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XG4gIGJvcmRlci1jb2xvcjogI0M4QzhDRDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoMC43MSwgMC43MSwgLTAuNzEsIDAuNzEsIDAsIDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktY2VsbF9fYmQge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktY2VsbF9fYmQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktY2VsbF9zZWxlY3QtYWZ0ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1hZnRlciAud2V1aS1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNlbGxfdmNvZGUge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ud2V1aS12Y29kZS1pbWcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud2V1aS12Y29kZS1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogMCAwLjZlbSAwIDAuN2VtO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjM0NDNTFGO1xufVxuYnV0dG9uLndldWktdmNvZGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgb3V0bGluZTogMDtcbn1cbi53ZXVpLXZjb2RlLWJ0bjphY3RpdmUge1xuICBjb2xvcjogIzUyYTM0MTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLndldWktZ2FsbGVyeV9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDYwcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ud2V1aS1nYWxsZXJ5X19vcHIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDBEMEQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1nYWxsZXJ5X19kZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktY2VsbF9zd2l0Y2gge1xuICBwYWRkaW5nLXRvcDogNi41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2LjVweDtcbn1cbi53ZXVpLXN3aXRjaCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4ud2V1aS1zd2l0Y2gsXG4ud2V1aS1zd2l0Y2gtY3BfX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGREZERjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzLCBib3JkZXIgMC4xcztcbn1cbi53ZXVpLXN3aXRjaDpiZWZvcmUsXG4ud2V1aS1zd2l0Y2gtY3BfX2JveDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGREZERkQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cyBjdWJpYy1iZXppZXIoMC40NSwgMSwgMC40LCAxKTtcbn1cbi53ZXVpLXN3aXRjaDphZnRlcixcbi53ZXVpLXN3aXRjaC1jcF9fYm94OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMC40LCAwLjI1LCAxLjM1KTtcbn1cbi53ZXVpLXN3aXRjaDpjaGVja2VkLFxuLndldWktc3dpdGNoLWNwX19pbnB1dDpjaGVja2VkIH4gLndldWktc3dpdGNoLWNwX19ib3gge1xuICBib3JkZXItY29sb3I6ICMwNEJFMDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEJFMDI7XG59XG4ud2V1aS1zd2l0Y2g6Y2hlY2tlZDpiZWZvcmUsXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0OmNoZWNrZWQgfiAud2V1aS1zd2l0Y2gtY3BfX2JveDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLndldWktc3dpdGNoOmNoZWNrZWQ6YWZ0ZXIsXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0OmNoZWNrZWQgfiAud2V1aS1zd2l0Y2gtY3BfX2JveDphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn1cbi53ZXVpLXN3aXRjaC1jcF9faW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05OTk5cHg7XG59XG4ud2V1aS1zd2l0Y2gtY3BfX2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS11cGxvYWRlcl9faGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZXVpLXVwbG9hZGVyX190aXRsZSB7XG4gIGZsZXg6IDE7XG59XG4ud2V1aS11cGxvYWRlcl9faW5mbyB7XG4gIGNvbG9yOiAjQjJCMkIyO1xufVxuLndldWktdXBsb2FkZXJfX2JkIHtcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAtOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGVzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi53ZXVpLXVwbG9hZGVyX19maWxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIHdpZHRoOiA3OXB4O1xuICBoZWlnaHQ6IDc5cHg7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGVfc3RhdHVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGVfc3RhdHVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGVfc3RhdHVzIC53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnQgLndldWktaWNvbi13YXJuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIHdpZHRoOiA3N3B4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG59XG4ud2V1aS11cGxvYWRlcl9faW5wdXQtYm94OmJlZm9yZSxcbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YmVmb3JlIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAzOS41cHg7XG59XG4ud2V1aS11cGxvYWRlcl9faW5wdXQtYm94OmFmdGVyIHtcbiAgd2lkdGg6IDM5LjVweDtcbiAgaGVpZ2h0OiAycHg7XG59XG4ud2V1aS11cGxvYWRlcl9faW5wdXQtYm94OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWN0aXZlOmJlZm9yZSxcbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWN0aXZlOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLW1zZyB7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1tc2dfX2ljb24tYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ud2V1aS1tc2dfX3RleHQtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi53ZXVpLW1zZ19fdGV4dC1hcmVhIGEge1xuICBjb2xvcjogIzU4NkM5NDtcbn1cbi53ZXVpLW1zZ19fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53ZXVpLW1zZ19fZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1tc2dfX29wci1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi53ZXVpLW1zZ19fZXh0cmEtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1tc2dfX2V4dHJhLWFyZWEgYSB7XG4gIGNvbG9yOiAjNTg2Qzk0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQzOHB4KSB7XG4gIC53ZXVpLW1zZ19fZXh0cmEtYXJlYSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1hcnRpY2xlIHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ud2V1aS1hcnRpY2xlIHNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cbi53ZXVpLWFydGljbGUgaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IC45ZW07XG59XG4ud2V1aS1hcnRpY2xlIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAuMzRlbTtcbn1cbi53ZXVpLWFydGljbGUgaDMge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC4zNGVtO1xufVxuLndldWktYXJ0aWNsZSAqIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ud2V1aS1hcnRpY2xlIHAge1xuICBtYXJnaW46IDAgMCAuOGVtO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXRhYmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZBO1xufVxuLndldWktdGFiYmFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MwQkZDNDtcbiAgY29sb3I6ICNDMEJGQzQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXRhYmJhcl9faXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLXRhYmJhcl9faXRlbS53ZXVpLWJhcl9faXRlbV9vbiAud2V1aS10YWJiYXJfX2ljb24sXG4ud2V1aS10YWJiYXJfX2l0ZW0ud2V1aS1iYXJfX2l0ZW1fb24gLndldWktdGFiYmFyX19pY29uID4gaSxcbi53ZXVpLXRhYmJhcl9faXRlbS53ZXVpLWJhcl9faXRlbV9vbiAud2V1aS10YWJiYXJfX2xhYmVsIHtcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS10YWJiYXJfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG59XG5pLndldWktdGFiYmFyX19pY29uLFxuLndldWktdGFiYmFyX19pY29uID4gaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS10YWJiYXJfX2ljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53ZXVpLXRhYmJhcl9fbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLW5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuLndldWktbmF2YmFyOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBjb2xvcjogI0NDQ0NDQztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktbmF2YmFyICsgLndldWktdGFiX19wYW5lbCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi53ZXVpLW5hdmJhcl9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEzcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLW5hdmJhcl9faXRlbTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xufVxuLndldWktbmF2YmFyX19pdGVtLndldWktYmFyX19pdGVtX29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbn1cbi53ZXVpLW5hdmJhcl9faXRlbTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQ0NDQztcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLW5hdmJhcl9faXRlbTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXRhYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndldWktdGFiX19wYW5lbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG4ud2V1aS10YWJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2V1aS1wcm9ncmVzc19fYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcbiAgaGVpZ2h0OiAzcHg7XG4gIGZsZXg6IDE7XG59XG4ud2V1aS1wcm9ncmVzc19faW5uZXItYmFyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLXByb2dyZXNzX19vcHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1wYW5lbDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ud2V1aS1wYW5lbDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1wYW5lbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBhbmVsX19oZCB7XG4gIHBhZGRpbmc6IDE0cHggMTVweCAxMHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1wYW5lbF9faGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIGxlZnQ6IDE1cHg7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLW1lZGlhLWJveCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53ZXVpLW1lZGlhLWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIGxlZnQ6IDE1cHg7XG59XG4ud2V1aS1tZWRpYS1ib3g6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmEud2V1aS1tZWRpYS1ib3gge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuYS53ZXVpLW1lZGlhLWJveDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktbWVkaWEtYm94X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ud2V1aS1tZWRpYS1ib3hfX2Rlc2Mge1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbn1cbi53ZXVpLW1lZGlhLWJveF9faW5mbyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNDRUNFQ0U7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1tZWRpYS1ib3hfX2luZm9fX21ldGEge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuLndldWktbWVkaWEtYm94X19pbmZvX19tZXRhX2V4dHJhIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NFQ0VDRTtcbn1cbi53ZXVpLW1lZGlhLWJveF90ZXh0IC53ZXVpLW1lZGlhLWJveF9fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ud2V1aS1tZWRpYS1ib3hfYXBwbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZXVpLW1lZGlhLWJveF9hcHBtc2cgLndldWktbWVkaWEtYm94X19oZCB7XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLW1lZGlhLWJveF9hcHBtc2cgLndldWktbWVkaWEtYm94X190aHVtYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLndldWktbWVkaWEtYm94X2FwcG1zZyAud2V1aS1tZWRpYS1ib3hfX2JkIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuLndldWktbWVkaWEtYm94X3NtYWxsLWFwcG1zZyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ud2V1aS1tZWRpYS1ib3hfc21hbGwtYXBwbXNnIC53ZXVpLWNlbGxzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi53ZXVpLW1lZGlhLWJveF9zbWFsbC1hcHBtc2cgLndldWktY2VsbHM6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktZ3JpZHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1ncmlkczpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1ncmlkczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDFweDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XG59XG4ud2V1aS1ncmlkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB3aWR0aDogMzMuMzMzMzMzMzMlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLndldWktZ3JpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XG59XG4ud2V1aS1ncmlkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktZ3JpZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktZ3JpZF9faWNvbiB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLndldWktZ3JpZF9faWNvbiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53ZXVpLWdyaWRfX2ljb24gKyAud2V1aS1ncmlkX19sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi53ZXVpLWdyaWRfX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWZvb3RlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLWZvb3RlciBhIHtcbiAgY29sb3I6ICM1ODZDOTQ7XG59XG4ud2V1aS1mb290ZXJfZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC41MmVtO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi53ZXVpLWZvb3Rlcl9fbGlua3Mge1xuICBmb250LXNpemU6IDA7XG59XG4ud2V1aS1mb290ZXJfX2xpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMCAuNjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1mb290ZXJfX2xpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0M3QzdDNztcbiAgY29sb3I6ICNDN0M3Qzc7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbiAgbGVmdDogLTAuNjVlbTtcbiAgdG9wOiAuMzZlbTtcbiAgYm90dG9tOiAuMzZlbTtcbn1cbi53ZXVpLWZvb3Rlcl9fbGluazpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktZm9vdGVyX190ZXh0IHtcbiAgcGFkZGluZzogMCAuMzRlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53ZXVpLWZsZXhfX2l0ZW0ge1xuICBmbGV4OiAxO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwMDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWRpYWxvZ19faGQge1xuICBwYWRkaW5nOiAxLjNlbSAxLjZlbSAwLjVlbTtcbn1cbi53ZXVpLWRpYWxvZ19fdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ud2V1aS1kaWFsb2dfX2JkIHtcbiAgcGFkZGluZzogMCAxLjZlbSAwLjhlbTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1kaWFsb2dfX2JkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZzogMi43ZW0gMjBweCAxLjdlbTtcbiAgY29sb3I6ICMzNTM1MzU7XG59XG4ud2V1aS1kaWFsb2dfX2Z0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndldWktZGlhbG9nX19mdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q1RDVENjtcbiAgY29sb3I6ICNENUQ1RDY7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWRpYWxvZ19fYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjM0NDNTFGO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktZGlhbG9nX19idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cbi53ZXVpLWRpYWxvZ19fYnRuOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Q1RDVENjtcbiAgY29sb3I6ICNENUQ1RDY7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWRpYWxvZ19fYnRuOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWRpYWxvZ19fYnRuX2RlZmF1bHQge1xuICBjb2xvcjogIzM1MzUzNTtcbn1cbi53ZXVpLWRpYWxvZ19fYnRuX3ByaW1hcnkge1xuICBjb2xvcjogIzBCQjIwQztcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2cge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fdGl0bGUge1xuICBmb250LXNpemU6IDIxcHg7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19oZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19iZCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBwYWRkaW5nOiAwLjI1ZW0gMS42ZW0gMmVtO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19iZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmc6IDEuNmVtIDEuNmVtIDJlbTtcbiAgY29sb3I6ICMzNTM1MzU7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19mdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxLjZlbSAwLjdlbTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2Z0OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2J0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMCAuOGVtO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2J0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuOnZpc2l0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IC0wLjhlbTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2J0bl9kZWZhdWx0IHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4vKuS/ruato3dldWnlr7nor53moYbnmoTpq5jluqYqL1xuLndldWktZGlhbG9nX19mdCBhIHtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndldWktZGlhbG9nIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB3aWR0aDogNy42ZW07XG4gIG1pbi1oZWlnaHQ6IDcuNmVtO1xuICB0b3A6IDE4MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMy44ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMTcsIDE3LCAxNywgMC43KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktaWNvbl90b2FzdCB7XG4gIG1hcmdpbjogMjJweCAwIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktaWNvbl90b2FzdC53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGU6YmVmb3JlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cbi53ZXVpLWljb25fdG9hc3Qud2V1aS1sb2FkaW5nIHtcbiAgbWFyZ2luOiAzMHB4IDAgMDtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLndldWktdG9hc3RfX2NvbnRlbnQge1xuICBtYXJnaW46IDAgMCAxNXB4O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1tYXNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi53ZXVpLW1hc2tfdHJhbnNwYXJlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktYWN0aW9uc2hlZXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogNTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRjQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODg4O1xuICBiYWNrZ3JvdW5kOiAjRkNGQ0ZEO1xufVxuLndldWktYWN0aW9uc2hlZXRfX3RpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X190aXRsZSAud2V1aS1hY3Rpb25zaGVldF9fdGl0bGUtdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xufVxuLndldWktYWN0aW9uc2hlZXRfX21lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZEO1xufVxuLndldWktYWN0aW9uc2hlZXRfX2FjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X19jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLndldWktYWN0aW9uc2hlZXRfX2NlbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktYWN0aW9uc2hlZXRfX2NlbGw6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X19jZWxsOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktYWN0aW9uc2hlZXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAyNzRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1hY3Rpb25zaGVldF9fYWN0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1hY3Rpb25zaGVldF9fbWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCA2cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1hY3Rpb25zaGVldF9fY2VsbCB7XG4gIHBhZGRpbmc6IDEzcHggMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19jZWxsOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19jZWxsOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG59XG4ud2V1aS1hY3Rpb25zaGVldF90b2dnbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktbG9hZG1vcmUge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDEuNWVtIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1sb2FkbW9yZV9fdGlwcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZXVpLWxvYWRtb3JlX2xpbmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTVFNTtcbiAgbWFyZ2luLXRvcDogMi40ZW07XG59XG4ud2V1aS1sb2FkbW9yZV9saW5lIC53ZXVpLWxvYWRtb3JlX190aXBzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjllbTtcbiAgcGFkZGluZzogMCAuNTVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1sb2FkbW9yZV9kb3QgLndldWktbG9hZG1vcmVfX3RpcHMge1xuICBwYWRkaW5nOiAwIC4xNmVtO1xufVxuLndldWktbG9hZG1vcmVfZG90IC53ZXVpLWxvYWRtb3JlX190aXBzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IDA7XG4gIHRvcDogLTAuMTZlbTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IC4xNWVtIC40ZW07XG4gIG1pbi13aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQzNTMwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud2V1aS1iYWRnZV9kb3Qge1xuICBwYWRkaW5nOiAuNGVtO1xuICBtaW4td2lkdGg6IDA7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkY0O1xufVxuLndldWktc2VhcmNoLWJhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEN0Q2REM7XG4gIGNvbG9yOiAjRDdENkRDO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1zZWFyY2gtYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDdENkRDO1xuICBjb2xvcjogI0Q3RDZEQztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktc2VhcmNoLWJhci53ZXVpLXNlYXJjaC1iYXJfZm9jdXNpbmcgLndldWktc2VhcmNoLWJhcl9fY2FuY2VsLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktc2VhcmNoLWJhci53ZXVpLXNlYXJjaC1iYXJfZm9jdXNpbmcgLndldWktc2VhcmNoLWJhcl9fbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2VhcmNoLWJhcl9fZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZGNDtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2Zvcm06YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNkVBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLndldWktc2VhcmNoLWJhcl9fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDE7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19ib3ggLndldWktc2VhcmNoLWJhcl9faW5wdXQge1xuICBwYWRkaW5nOiA0cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMS40Mjg1NzE0M2VtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDNlbTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLndldWktc2VhcmNoLWJhcl9fYm94IC53ZXVpLXNlYXJjaC1iYXJfX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2JveCAud2V1aS1pY29uLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2JveCAud2V1aS1pY29uLWNsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLndldWktc2VhcmNoLWJhcl9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICByaWdodDogMXB4O1xuICBib3R0b206IDFweDtcbiAgbGVmdDogMXB4O1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19sYWJlbCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19sYWJlbCAud2V1aS1pY29uLXNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLndldWktc2VhcmNoLWJhcl9fY2FuY2VsLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6ICMwOUJCMDc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19pbnB1dDpub3QoOnZhbGlkKSB+IC53ZXVpLWljb24tY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXBpY2tlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogNTAwMDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbn1cbi53ZXVpLXBpY2tlcl9faGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi53ZXVpLXBpY2tlcl9faGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1waWNrZXJfX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBjb2xvcjogIzFBQUQxOTtcbn1cbi53ZXVpLXBpY2tlcl9fYWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4ODg7XG59XG4ud2V1aS1waWNrZXJfX2FjdGlvbjpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ud2V1aS1waWNrZXJfX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1waWNrZXJfX2JkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDIzOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktcGlja2VyX19ncm91cCB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndldWktcGlja2VyX19tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuLndldWktcGlja2VyX19pbmRpY2F0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAycHg7XG4gIHotaW5kZXg6IDM7XG59XG4ud2V1aS1waWNrZXJfX2luZGljYXRvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1waWNrZXJfX2luZGljYXRvcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBpY2tlcl9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi53ZXVpLXBpY2tlcl9faXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktcGlja2VyX19pdGVtX2Rpc2FibGVkIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi53ZXVpLWFuaW1hdGUtc2xpZGUtdXAge1xuICBhbmltYXRpb246IHNsaWRlVXAgZWFzZSAuM3MgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbi53ZXVpLWFuaW1hdGUtc2xpZGUtZG93biB7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIGVhc2UgLjNzIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ud2V1aS1hbmltYXRlLWZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVJbiBlYXNlIC4zcyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi53ZXVpLWFuaW1hdGUtZmFkZS1vdXQge1xuICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAuM3MgZm9yd2FyZHM7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWFncmVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IC41ZW0gMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLndldWktYWdyZWUgYSB7XG4gIGNvbG9yOiAjNTg2Qzk0O1xufVxuLndldWktYWdyZWVfX3RleHQge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWFncmVlX19jaGVja2JveCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiAwO1xuICB0b3A6IDJweDtcbn1cbi53ZXVpLWFncmVlX19jaGVja2JveDpjaGVja2VkOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIndldWlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgc3BlYWs6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICBjb250ZW50OiBcIlxcRUEwOFwiO1xuICBjb2xvcjogIzA5QkIwNztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00OCUpIHNjYWxlKDAuNzMpO1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTFFMTtcbn1cbi53ZXVpLWFncmVlX19jaGVja2JveDpkaXNhYmxlZDpiZWZvcmUge1xuICBjb2xvcjogI0FEQURBRDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktbG9hZGluZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYW5pbWF0aW9uOiB3ZXVpTG9hZGluZyAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1qQWlJR2hsYVdkb2REMGlNVEl3SWlCMmFXVjNRbTk0UFNJd0lEQWdNVEF3SURFd01DSStQSEJoZEdnZ1ptbHNiRDBpYm05dVpTSWdaRDBpVFRBZ01HZ3hNREIyTVRBd1NEQjZJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpSVGxGT1VVNUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEQWdMVE13S1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSXprNE9UWTVOeUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3pNQ0F4TURVdU9UZ2dOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqT1VJNU9UbEJJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtEWXdJRGMxTGprNElEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMEV6UVRGQk1pSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNnNU1DQTJOU0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlOQlFrRTVRVUVpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9NVEl3SURVNExqWTJJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBJeVFqSkNNaUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3hOVEFnTlRRdU1ESWdOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUWtGQ09FSTVJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtERTRNQ0ExTUNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkRNa013UXpFaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRFMU1DQTBOUzQ1T0NBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkRRa05DUTBJaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRFeU1DQTBNUzR6TkNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkVNa1F5UkRJaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRrd0lETTFJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBSQlJFRkVRU0lnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3ROakFnTWpRdU1ESWdOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUlRKRk1rVXlJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtDMHpNQ0F0TlM0NU9DQTJOU2tpTHo0OEwzTjJaejQ9KSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi53ZXVpLWxvYWRpbmcud2V1aS1sb2FkaW5nX3RyYW5zcGFyZW50LFxuLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fcHJpbWFyeSAud2V1aS1sb2FkaW5nLFxuLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fd2FybiAud2V1aS1sb2FkaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyUzRSUzQ3BhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8lM0UlM0NyZWN0IHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC41NiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMzApJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuNSknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMzAgMTA1Ljk4IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4zOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNjUgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMzIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA1OC42NiA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjI1KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTE1MCA0NS45OCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTkwIDM1IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjEpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC02MCAyNC4wMiA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMzYwZGVnKTtcbiAgfVxufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1zbGlkZXIge1xuICBwYWRkaW5nOiAxNXB4IDE4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLndldWktc2xpZGVyX19pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4ud2V1aS1zbGlkZXJfX3RyYWNrIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQUFEMTk7XG4gIHdpZHRoOiAwO1xufVxuLndldWktc2xpZGVyX19oYW5kbGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi53ZXVpLXNsaWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndldWktc2xpZGVyLWJveCAud2V1aS1zbGlkZXIge1xuICBmbGV4OiAxO1xufVxuLndldWktc2xpZGVyLWJveF9fdmFsdWUge1xuICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBjb2xvcjogIzg4ODg4ODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG4uc2V0VGFwQ29sb3IoQGM6cmdiYSgwLDAsMCwwKSkge1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBAYztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6IFwid2V1aVwiO1xyXG4gICAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxBQUVBQUFBTEFJQUFBd0F3UjFOVlFyRCtzKzBBQUFFNEFBQUFRazlUTHpKQUtFeCtBQUFCZkFBQUFGWmpiV0Z3NjVjRkhRQUFBaHdBQUFKUVoyeDVadkNSUi9FQUFBU1VBQUFLdEdobFlXUU1QUk90QUFBQTRBQUFBRFpvYUdWaENDd0QrZ0FBQUx3QUFBQWthRzEwZUVKby8vOEFBQUhVQUFBQVNHeHZZMkVZcWhXNEFBQUViQUFBQUNadFlYaHdBU0VBVlFBQUFSZ0FBQUFnYm1GdFplTmNIdGdBQUE5SUFBQUI1bkJ2YzNUNmJMaExBQUFSTUFBQUFPWUFBUUFBQStnQUFBQmFBK2ovLy8vL0Era0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFCSUFBUUFBQUFFQUFDYlpieHRmRHp6MUFBc0Q2QUFBQUFEVW0yZHZBQUFBQU5TYloyLy8vd0FBQStrRDZnQUFBQWdBQWdBQUFBQUFBQUFCQUFBQUVnQkpBQVVBQUFBQUFBSUFBQUFLQUFvQUFBRC9BQUFBQUFBQUFBRUFBQUFLQUI0QUxBQUJSRVpNVkFBSUFBUUFBQUFBQUFBQUFRQUFBQUZzYVdkaEFBZ0FBQUFCQUFBQUFRQUVBQVFBQUFBQkFBZ0FBUUFHQUFBQUFRQUFBQUFBQVFPd0FaQUFCUUFJQW5vQ3ZBQUFBSXdDZWdLOEFBQUI0QUF4QVFJQUFBSUFCUU1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVHWkZaQUJBNmdIcUVRUG9BQUFBV2dQcUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErai8vd1BvQUFBRDZBQUFBQUFBQlFBQUFBTUFBQUFzQUFBQUJBQUFBWFFBQVFBQUFBQUFiZ0FEQUFFQUFBQXNBQU1BQ2dBQUFYUUFCQUJDQUFBQUJBQUVBQUVBQU9vUi8vOEFBT29CLy84QUFBQUJBQVFBQUFBQkFBSUFBd0FFQUFVQUJnQUhBQWdBQ1FBS0FBc0FEQUFOQUE0QUR3QVFBQkVBQUFFR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QUFBQUFBTndBQUFBQUFBQUFFUUFBNmdFQUFPb0JBQUFBQVFBQTZnSUFBT29DQUFBQUFnQUE2Z01BQU9vREFBQUFBd0FBNmdRQUFPb0VBQUFBQkFBQTZnVUFBT29GQUFBQUJRQUE2Z1lBQU9vR0FBQUFCZ0FBNmdjQUFPb0hBQUFBQndBQTZnZ0FBT29JQUFBQUNBQUE2Z2tBQU9vSkFBQUFDUUFBNmdvQUFPb0tBQUFBQ2dBQTZnc0FBT29MQUFBQUN3QUE2Z3dBQU9vTUFBQUFEQUFBNmcwQUFPb05BQUFBRFFBQTZnNEFBT29PQUFBQURnQUE2ZzhBQU9vUEFBQUFEd0FBNmhBQUFPb1FBQUFBRUFBQTZoRUFBT29SQUFBQUVRQUFBQUFBUmdDTUFOSUJKQUY0QWNRQ01nSmdBcWdDL0FOSUE2WUQvZ1JPQktBRTlBVmFBQUFBQWdBQUFBQURyd090QUJRQUtRQUFBU0lIQmdjR0ZCY1dGeFl5TnpZM05qUW5KaWNtQXlJbkppY21ORGMyTnpZeUZ4WVhGaFFIQmdjR0FmVjRaMlE3UER3N1pHZndabVE3UER3N1pHWjRibDViTmpjM05sdGUyMTViTmpjM05sdGVBNjA4TzJSbjhHZGpPenc4TzJObjhHZGtPeno4cnpjMVcxN2JYbHcxTnpjMVhGN2JYbHMxTndBQUFBQUNBQUFBQUFPekE3TUFGd0F0QUFBQklnY0dCd1lWRkJjV0Z4WXpNamMyTnpZMU5DY21KeVlUQndZaUx3RW1OanNCRVRRMk93RXlGaFVSTXpJV0FlNTJaMlE3UFQwN1pHZDJmR3BtT3o0K08yWnBJWFlPS0E1MkRnMFhYUXNISmdjTFhSY05BN00rTzJacWZIWm5aRHM5UFR0a1ozWjlhV1k3UHYzd21oSVNtaElhQVJjSUN3c0kvdWthQUFNQUFBQUFBK1VENVFBWEFDTUFMQUFBQVNJSEJnY0dGUlFYRmhjV016STNOamMyTlRRbkppY21BeFFyQVNJMUF6UTdBVElISnlJbU5EWXlGaFFHQWU2RWNtOUJSRVJCYjNLRWlYWnhRa1JFUW5GMWFRSXhBd2dDUWdNQkl4SVpHU1FaR1FQa1JFSnhkb21FY205QlJFUkJiM0tFaW5WeFFrVDlIUUlDQVdJQ0FqRVpJeGtaSXhrQUFBQUFBZ0FBQUFBRHNRUGtBQmtBTGdBQUFRWUhCZ2MyQlJFVUZ4WVhGaGMyTnpZM05qVVJKQmNtSnlZVEFRWXZBU1kvQVRZeUh3RVdOamNsTmpJZkFSWUI5VlZWUWsrdi90RkhQbXhlYkd4ZGJUMUkvdEd2VDBKVm8vN1ZCQVNLQXdNU0FRVUJjUUVGQWdFU0FnVUJFUVFENHhNWUVoazNZUDZzam5WbFNEOGNIRDlJWlhXT0FWUmdOeGtTR1A2Mi90a0RBNDhFQkJrQ0FWWUNBUUhsQVFJUUJBQUFBQUFEQUFBQUFBT3hBK1FBR3dBcUFETUFBQUVHQndZSEJnY0dOeEVVRnhZWEZoYzJOelkzTmpVUkpCY21KeVlITXpJV0ZRTVVCaXNCSWljRE5EWVRJaVkwTmpJV0ZBWUI5VUZCT0Rzc08zOGdSejVzWG14c1hXMDlTUDdZcUZCQlZXODBCQVlNQXdJbUJRRUxCaDRQRmhZZUZSVUQ1QThTRGhJT0Vpa0svcTJQZFdSSlBoMGRQa2xrZFk4QlUxNDFHUklZL0FZRS9zWUNBd1VCT2dRRy9rQVZIeFVWSHhVQUFBQUNBQUFBQUFQa0ErUUFGd0F0QUFBQklnY0dCd1lWRkJjV0Z4WXpNamMyTnpZMU5DY21KeVlUQVFZaUx3RW1Qd0UyTWg4QkZqSTNBVFl5SHdFV0FlNkVjbTlCUTBOQ2JuT0RpWFZ4UWtSRVFuRjFrZjZnQVFVQm93TURGZ0VGQVlVQ0JRRUJRd0lGQVJVRUErTkVRbkYxaVlOemJrSkRRMEZ2Y29TSmRYRkNSUDZqL3FVQkFhZ0VCUjRDQVdZQkFRRU5BZ0lWQkFBQUFBUUFBQUFBQTY4RHJRQVVBQ2tBUHdCREFBQUJJZ2NHQndZVUZ4WVhGakkzTmpjMk5DY21KeVlESWljbUp5WTBOelkzTmpJWEZoY1dGQWNHQndZVEJRNEJMd0VtQmc4QkJoWWZBUll5TndFK0FTWWlGekFmQVFIMWVHZGtPenc4TzJSbjhHWmtPenc4TzJSbWVHNWVXelkzTnpaYlh0dGVXelkzTnpaYlhtbis5Z1lTQm1BR0R3VURCUUVHZlFVUUJnRWxCUUVMRUJVQkFRT3RQRHRrWi9Cbll6czhQRHRqWi9CblpEczgvSzgzTlZ0ZTIxNWNOVGMzTlZ4ZTIxNWJOVGNDSnQwRkFRVkpCUUlHQkFjUkJvQUdCUUVoQlE4TEJBRUJBQUFCQUFBQUFBTzdBem9BRndBQUV5NEJQd0UrQVI4QkZqWTNBVFlXRnljV0ZBY0JCaUluUFFvR0J3VUhHZ3pMRENFTEFoMExId3NOQ2dyOXVRb2VDZ0d6Q3lFT0N3MEhDWk1KQVFvQnZna0NDZzBMSFF2OXNRc0tBQUFBQUFJQUFBQUFBK1VENWdBWEFDd0FBQUVpQndZSEJoVVVGeFlYRmpNeU56WTNOalUwSnlZbkpoTUhCaThCSmljbU5STTBOanNCTWhZVkV4Y2VBUUh2aEhKdlFVTkRRbTV6ZzRsMWNVSkVSRUp4ZFZjUUF3VDZBd0lFRUFNQ0t3SUREc1VDQVFQbFJFSnhkWW1EYzI1Q1EwTkJiM0tFaVhWeFFrVDlWaHdFQW5jQ0FnTUdBWG9DQXdNQy9xMkZBZ1FBQUFRQUFBQUFBNjhEclFBREFCZ0FMUUF6QUFBQk1COEJBeUlIQmdjR0ZCY1dGeFl5TnpZM05qUW5KaWNtQXlJbkppY21ORGMyTnpZeUZ4WVhGaFFIQmdjR0F5TVZNelVqQXVVQkFmSjRaMlE3UER3N1pHZndabVE3UER3N1pHWjRibDViTmpjM05sdGUyMTViTmpjM05sdGVteVQ5MlFLREFRRUJMRHc3Wkdmd1oyTTdQRHc3WTJmd1oyUTdQUHl2TnpWYlh0dGVYRFUzTnpWY1h0dGVXelUzQWpIOUpBQUFBQU1BQUFBQUErUUQ1QUFYQUNjQU1BQUFBU0lIQmdjR0ZSUVhGaGNXTXpJM05qYzJOVFFuSmljbUF6TXlGaFVERkFZckFTSW1OUU0wTmhNaUpqUTJNaFlVQmdIdWhISnZRVU5EUW01emc0bDFjVUpFUkVKeGRaNDJCQVlNQXdJbkF3TU1CaDhQRmhZZUZoWUQ0MFJDY1hXSmczTnVRa05EUVc5eWhJbDFjVUpFL3ZZR0JmN0FBZ01EQWdGQUJRYitOaFlmRmhZZkZnQUFCQUFBQUFBRHdBUEFBQWdBRWdBb0FEMEFBQUV5TmpRbUlnWVVGaGNqRlRNUkl4VXpOU01ESWdjR0J3WVZGQllYRmpNeU56WTNOalUwSnk0QkF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBZlFZSVNFd0lTRlJqems1eVRvcmhHNXJQVDk5YW0rRGRtaGxQRDQrUE15RmJWNWJOVGMzTlZ0ZTJsNWJOVGMzTlZ0ZUFxQWlMeUlpTHlJNUhmN0VIQndDc1Q4OWEyNkVkOHc4UGo0OFpXaDJnMjlxZmZ5ak56VmJYdHBlV3pVM056VmJYdHBlV3pVM0FBQURBQUFBQUFPb0E2Z0FDd0FnQURVQUFBRUhKd2NYQnhjM0Z6Y25Od01pQndZSEJoUVhGaGNXTWpjMk56WTBKeVluSmdNaUp5WW5KalEzTmpjMk1oY1dGeFlVQndZSEJnS09tcG9jbXBvY21wb2NtcHEyZG1aaU9qczdPbUptN0daaU9qczdPbUptZG10ZFdUUTJOalJaWGRaZFdUUTJOalJaWFFLcW1wb2NtcG9jbXBvY21wb0JHVHM2WW1ic1ptSTZPenM2WW1ic1ptSTZPL3pDTmpSWlhkWmRXVFEyTmpSWlhkWmRXVFEyQUFNQUFBQUFBK2tENmdBYUFDOEFNQUFBQVFZSEJpTWlKeVluSmpRM05qYzJNaGNXRnhZVkZBY0dCd0VIQVRJM05qYzJOQ2NtSnlZaUJ3WUhCaFFYRmhjV013S09OVUJDUjIxZFdqVTNOelZhWGRwZFd6VTJHQmNyQVNNNS9lQlhTMGdyS3lzclNFdXVTa2txTEN3cVNVcFhBU01yRnhnMk5WdGQybDFhTlRjM05WcGRiVWRDUURYKzNqa0JHU3NyU0V1dVNra3FMQ3dxU1VxdVMwZ3JLd0FDLy84QUFBUG9BK2dBRkFBd0FBQUJJZ2NHQndZUUZ4WVhGaUEzTmpjMkVDY21KeVlURmc0QklpOEJCd1l1QVRRL0FTY21QZ0VXSHdFM05oNEJCZzhCQWZTSWRIRkRSRVJEY1hRQkVIUnhRMFJFUTNGMFNRb0JGQnNLb3FnS0d4TUtxS0lLQVJRYkNxS29DaHNVQVFxb0EraEVRM0YwL3ZCMGNVTkVSRU54ZEFFUWRIRkRSUDFqQ2hzVENxaWlDZ0VVR3dxaXFBb2JGQUVLcUtJS0FSUWJDcUlBQUFJQUFBQUFBK1FENUFBWEFEUUFBQUVpQndZSEJoVVVGeFlYRmpNeU56WTNOalUwSnlZbkpoTVVCaU1GRnhZVUR3RUdMd0V1QVQ4Qk5oOEJGaFFQQVFVeUZoMEJBZTZFY205QlEwTkNibk9EaVhWeFFrUkVRbkYxZndRQy9wR0RBUUVWQXdUc0FnRUM3QVFFRkFJQmhBRndBZ01ENDBSQ2NYV0pnM051UWtORFFXOXloSWwxY1VKRS9mWUNBd3VWQWdRQ0ZBUUUwQUlGQXRFRUJCUUNCUUdWQ3dNREp3QUFBQVVBQUFBQUE5UUQwd0FqQUNjQU53QkhBRWdBQUFFUkZBWWpJU0ltTlJFaklpWTlBVFEyTXlFMU5EWXpJVElXSFFFaE1oWWRBUlFHSXlFUklSRUhJZ1lWRVJRV093RXlOalVSTkNZaklTSUdGUkVVRmpzQk1qWTFFVFFtS3dFRGV5WWIvWFliSmtNSkRRMEpBUVlaRWdFdkV4a0JCZ2tORFFuOUNRSmMwUWtORFFrdENRME5DZjdzQ1EwTkNTMEpEUTBKTFFNaS9UUWJKaVliQXN3TUNpd0pEUzRTR1JrU0xnMEpMQW9NL1V3Q3RHc05DZjVOQ1EwTkNRR3pDUTBOQ2Y1TkNRME5DUUd6Q1EwQUFBQUFFQURHQUFFQUFBQUFBQUVBQkFBQUFBRUFBQUFBQUFJQUJ3QUVBQUVBQUFBQUFBTUFCQUFMQUFFQUFBQUFBQVFBQkFBUEFBRUFBQUFBQUFVQUN3QVRBQUVBQUFBQUFBWUFCQUFlQUFFQUFBQUFBQW9BS3dBaUFBRUFBQUFBQUFzQUV3Qk5BQU1BQVFRSkFBRUFDQUJnQUFNQUFRUUpBQUlBRGdCb0FBTUFBUVFKQUFNQUNBQjJBQU1BQVFRSkFBUUFDQUIrQUFNQUFRUUpBQVVBRmdDR0FBTUFBUVFKQUFZQUNBQ2NBQU1BQVFRSkFBb0FWZ0NrQUFNQUFRUUpBQXNBSmdENmQyVjFhVkpsWjNWc1lYSjNaWFZwZDJWMWFWWmxjbk5wYjI0Z01TNHdkMlYxYVVkbGJtVnlZWFJsWkNCaWVTQnpkbWN5ZEhSbUlHWnliMjBnUm05dWRHVnNiRzhnY0hKdmFtVmpkQzVvZEhSd09pOHZabTl1ZEdWc2JHOHVZMjl0QUhjQVpRQjFBR2tBVWdCbEFHY0FkUUJzQUdFQWNnQjNBR1VBZFFCcEFIY0FaUUIxQUdrQVZnQmxBSElBY3dCcEFHOEFiZ0FnQURFQUxnQXdBSGNBWlFCMUFHa0FSd0JsQUc0QVpRQnlBR0VBZEFCbEFHUUFJQUJpQUhrQUlBQnpBSFlBWndBeUFIUUFkQUJtQUNBQVpnQnlBRzhBYlFBZ0FFWUFid0J1QUhRQVpRQnNBR3dBYndBZ0FIQUFjZ0J2QUdvQVpRQmpBSFFBTGdCb0FIUUFkQUJ3QURvQUx3QXZBR1lBYndCdUFIUUFaUUJzQUd3QWJ3QXVBR01BYndCdEFBQUFBZ0FBQUFBQUFBQUtBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBU0FRSUJBd0VFQVFVQkJnRUhBUWdCQ1FFS0FRc0JEQUVOQVE0QkR3RVFBUkVCRWdFVEFBWmphWEpqYkdVSVpHOTNibXh2WVdRRWFXNW1id3h6WVdabFgzTjFZMk5sYzNNSmMyRm1aVjkzWVhKdUIzTjFZMk5sYzNNT2MzVmpZMlZ6Y3kxamFYSmpiR1VSYzNWalkyVnpjeTF1YnkxamFYSmpiR1VIZDJGcGRHbHVadzUzWVdsMGFXNW5MV05wY21Oc1pRUjNZWEp1QzJsdVptOHRZMmx5WTJ4bEJtTmhibU5sYkFaelpXRnlZMmdGWTJ4bFlYSUVZbUZqYXdaa1pXeGxkR1VBQUFBQScpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuXHJcbltjbGFzc149XCJ3ZXVpLWljb24tXCJdLCBbY2xhc3MqPVwiIHdldWktaWNvbi1cIl0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBcIndldWlcIjtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICAvLyDlubPmu5HljYfnuqdcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC4yZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5bY2xhc3NePVwibXktaWNvbi1cIl0sIFtjbGFzcyo9XCIgbXktaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBcIndldWlcIjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgJjpiZWZvcmV7XHJcbiAgICAvLyDlubPmu5HljYfnuqdcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAuMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLndldWktaWNvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDFcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDJcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24taW5mbzpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwM1wiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi1zYWZlLXN1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDRcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tc2FmZS13YXJuOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTA1XCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aS1pY29uLXN1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDZcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDdcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDhcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24td2FpdGluZzpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwOVwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwQVwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi13YXJuOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBCXCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aS1pY29uLWluZm8tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBDXCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aS1pY29uLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwRFwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMEVcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tY2xlYXI6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMEZcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tYmFjazpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUExMFwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi1kZWxldGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMTFcIiB9IC8qICfuoIAnICovXHJcbiIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCJ3ZXVpLWZvbnRcIjtcclxuXHJcbltjbGFzc149XCJ3ZXVpLWljb25fXCJdOmJlZm9yZSwgW2NsYXNzKj1cIiB3ZXVpLWljb25fXCJdOmJlZm9yZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLndldWktaWNvbi1zdWNjZXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMDlCQjA3O1xyXG59XHJcbi53ZXVpLWljb24td2FpdGluZyB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogIzEwQUVGRjtcclxufVxyXG4ud2V1aS1pY29uLXdhcm4ge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICNGNDM1MzA7XHJcbn1cclxuLndldWktaWNvbi1pbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMTBBRUZGO1xyXG59XHJcblxyXG4ud2V1aS1pY29uLXN1Y2Nlc3MtY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMDlCQjA3O1xyXG59XHJcbi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICMwOUJCMDc7XHJcbn1cclxuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZSB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogIzEwQUVGRjtcclxufVxyXG4ud2V1aS1pY29uLWNpcmNsZSB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogI0M5QzlDOTtcclxufVxyXG4ud2V1aS1pY29uLWRvd25sb2FkIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMDlCQjA3O1xyXG59XHJcblxyXG4ud2V1aS1pY29uLWluZm8tY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMDlCQjA3O1xyXG59XHJcblxyXG4ud2V1aS1pY29uLXNhZmUtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzA5QkIwNztcclxufVxyXG4ud2V1aS1pY29uLXNhZmUtd2FybiB7XHJcbiAgICBjb2xvcjogI0ZGQkUwMDtcclxufVxyXG5cclxuLndldWktaWNvbi1jYW5jZWwge1xyXG4gICAgY29sb3I6ICNGNDM1MzA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi53ZXVpLWljb24tc2VhcmNoIHtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ud2V1aS1pY29uLWNsZWFyIHtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ud2V1aS1pY29uLWRlbGV0ZSB7XHJcbiAgICAmLndldWktaWNvbl9nYWxsZXJ5LWRlbGV0ZXtcclxuICAgICAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1pY29uX21zZyB7XHJcbiAgICBmb250LXNpemU6IDkzcHg7XHJcbiAgICAmLndldWktaWNvbi13YXJuIHtcclxuICAgICAgICBjb2xvcjogI0Y3NjI2MDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1pY29uX21zZy1wcmltYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogOTNweDtcclxuICAgICYud2V1aS1pY29uLXdhcm4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZCRTAwO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiBAd2V1aUJ0bkZvbnRTaXplO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IEB3ZXVpQnRuRm9udENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IHVuaXQoQHdldWlCdG5IZWlnaHQvQHdldWlCdG5Gb250U2l6ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiBAd2V1aUJ0bkJvcmRlclJhZGl1cztcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQHdldWlCdG5Cb3JkZXJSYWRpdXMqMjtcclxuICAgIH1cclxufVxyXG4ud2V1aS1idG5faW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1idG5fZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogQHdldWlCdG5EZWZhdWx0Rm9udENvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5EZWZhdWx0Qmc7XHJcbiAgICAmOm5vdCgud2V1aS1idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRGb250Q29sb3I7XHJcbiAgICB9XHJcbiAgICAmOm5vdCgud2V1aS1idG5fZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRGVmYXVsdEFjdGl2ZUZvbnRDb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRBY3RpdmVCZztcclxuICAgIH1cclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1idG5fcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlCZztcclxuICAgICY6bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6dmlzaXRlZCB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRm9udENvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkFjdGl2ZUZvbnRDb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlBY3RpdmVCZztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYnRuX3dhcm4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5XYXJuQmc7XHJcbiAgICAmOm5vdCgud2V1aS1idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkZvbnRDb2xvcjtcclxuICAgIH1cclxuICAgICY6bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogQHdldWlCdG5BY3RpdmVGb250Q29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5XYXJuQWN0aXZlQmc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWJ0bl9kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogQHdldWlCdG5EaXNhYmxlZEZvbnRDb2xvcjtcclxuICAgICYud2V1aS1idG5fZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRGVmYXVsdERpc2FibGVkRm9udENvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuRGVmYXVsdERpc2FibGVkQmc7XHJcbiAgICB9XHJcbiAgICAmLndldWktYnRuX3ByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuUHJpbWFyeURpc2FibGVkQmc7XHJcbiAgICB9XHJcbiAgICAmLndldWktYnRuX3dhcm4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRud2FybkRpc2FibGVkQmc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWJ0bl9sb2FkaW5ne1xyXG5cdC53ZXVpLWxvYWRpbmd7XHJcblx0XHRtYXJnaW46LS4yZW0gLjM0ZW0gMCAwO1xyXG5cdH1cclxuICAgICYud2V1aS1idG5fcHJpbWFyeSwgJi53ZXVpLWJ0bl93YXJuIHtcclxuICAgICAgICBjb2xvcjogQHdldWlCdG5BY3RpdmVGb250Q29sb3I7XHJcbiAgICB9XHJcblx0Ji53ZXVpLWJ0bl9wcmltYXJ5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuUHJpbWFyeUFjdGl2ZUJnO1xyXG5cdH1cclxuXHQmLndldWktYnRuX3dhcm57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5XYXJuQWN0aXZlQmc7XHJcblx0fVxyXG59XHJcbiIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1idG5fcGxhaW4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogQHdldWlCdG5QbGFpblByaW1hcnlDb2xvcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIEB3ZXVpQnRuUGxhaW5QcmltYXJ5Qm9yZGVyQ29sb3I7XHJcbiAgICAmOm5vdCgud2V1aS1idG5fcGxhaW4tZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6QHdldWlCdG5QbGFpblByaW1hcnlBY3RpdmVDb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6IEB3ZXVpQnRuUGxhaW5QcmltYXJ5QWN0aXZlQm9yZGVyQ29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWJ0bl9wbGFpbi1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiBAd2V1aUJ0blBsYWluRGVmYXVsdENvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgQHdldWlCdG5QbGFpbkRlZmF1bHRCb3JkZXJDb2xvcjtcclxuICAgICY6bm90KC53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjpAd2V1aUJ0blBsYWluRGVmYXVsdEFjdGl2ZUNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogQHdldWlCdG5QbGFpbkRlZmF1bHRBY3RpdmVCb3JkZXJDb2xvcjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1idG5fcGxhaW4tZGlzYWJsZWR7XHJcbiAgICBjb2xvcjpyZ2JhKDAsMCwwLC4yKTtcclxuICAgIGJvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yKTtcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpLWJ0bl9nbG9iYWxcIjtcclxuQGltcG9ydCBcIndldWktYnRuX2RlZmF1bHRcIjtcclxuQGltcG9ydCBcIndldWktYnRuX3ByaW1hcnlcIjtcclxuQGltcG9ydCBcIndldWktYnRuX3dhcm5cIjtcclxuQGltcG9ydCBcIndldWktYnRuX2Rpc2FibGVkXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpLWJ0bl9sb2FkaW5nXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpLWJ0bl9wbGFpblwiO1xyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICAmLndldWktYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53ZXVpLWJ0bl9pbmxpbmUsJi53ZXVpLWJ0bl9taW5pIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgICYud2V1aS1idG5fcGxhaW4tcHJpbWFyeSwmLndldWktYnRuX3BsYWluLWRlZmF1bHR7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWJ0bl9taW5pIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMS4zMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IEB3ZXVpQnRuTWluaUhlaWdodDtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlCdG5NaW5pRm9udFNpemU7XHJcbn1cclxuXHJcblxyXG4vKmdhcCBiZXR3ZWVuIGJ0biovXHJcbi53ZXVpLWJ0biArIC53ZXVpLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiBAd2V1aUJ0bkRlZmF1bHRHYXA7XHJcbn1cclxuXHJcbi53ZXVpLWJ0bi53ZXVpLWJ0bl9pbmxpbmUgKyAud2V1aS1idG4ud2V1aS1idG5faW5saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogQHdldWlCdG5EZWZhdWx0R2FwO1xyXG59XHJcblxyXG4ud2V1aS1idG4tYXJlYSB7XHJcbiAgICBtYXJnaW46IEB3ZXVpQ2VsbHNNYXJnaW5Ub3AgQHdldWlCdG5EZWZhdWx0R2FwIC4zZW07IFxyXG59XHJcbi53ZXVpLWJ0bi1hcmVhX2lubGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLndldWktYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogQHdldWlCdG5EZWZhdWx0R2FwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLypcclxuei1pbmRleDpcclxuMDogLndldWktc3dpcGVkLWJ0blxyXG4xOiAud2V1aS1jZWxsX3N3aXBlZCAud2V1aS1jZWxsX19iZFxyXG4yOiAud2V1aS1jZWxsc+WSjC53ZXVpLWNlbGznmoQxcHjnur9cclxuKi9cclxuXHJcbi53ZXVpLWNlbGxzIHtcclxuICAgIG1hcmdpbi10b3A6IEB3ZXVpQ2VsbHNNYXJnaW5Ub3A7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUNlbGxCZztcclxuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUNlbGxMaW5lSGVpZ2h0O1xyXG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxGb250U2l6ZTsgLy9jZWxs5Lit6Ze05pyJ5pWI6auY5bqmMjNweO+8jOi3n+WuouaIt+err+m7mOiupOWbvuagh+WwuuWvuOS4gOiHtFxyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8v5Zug5Li65q+P5LiqY2VsbOeahGJvcmRlcuS9v+eUqGJlZm9yZeWFg+e0oGxlZnTmkJ7nmoTvvIxpZeS4i+S8quWFg+e0oOeahGNvbnRhaW5pbmcgYmxvY2vkvLDorqHot5/moIflh4bkuI3lkIzvvIzlnKhjZWxs5LiK55Sob2jkuI3nlJ/mlYhcclxuXHJcbiAgICAvLyBvbmVweFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWNlbGxzX190aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAuNzdlbTsgLy8gMTVweCAtIOihjOmrmFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLjNlbTsgLy8gOHB4IC0g6KGM6auYXHJcbiAgICBwYWRkaW5nLWxlZnQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsVGlwc0ZvbnRTaXplO1xyXG5cclxuICAgICYgKyAud2V1aS1jZWxscyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktY2VsbHNfX3RpcHMge1xyXG4gICAgbWFyZ2luLXRvcDogLjNlbTsgLy8gOHB4IC0g6KGM6auYXHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgcGFkZGluZy1sZWZ0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgcGFkZGluZy1yaWdodDogQHdldWlDZWxsR2FwSDtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsVGlwc0ZvbnRTaXplO1xyXG59XHJcblxyXG4ud2V1aS1jZWxsIHtcclxuICAgIHBhZGRpbmc6IEB3ZXVpQ2VsbEdhcFYgQHdldWlDZWxsR2FwSDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy/ov5nkuKrmmK/kuLrkuoblhbzlrrljZWxsc+WuueWZqG9uZXB45pa55qGI6KKrYmVmb3Jl5oyh5L2P6ICM5YGa55qEXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgbGVmdDogQHdldWlDZWxsR2FwSDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS1jZWxsX3ByaW1hcnl7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4ud2V1aS1jZWxsX19iZHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLndldWktY2VsbF9fZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuLnNldFRvcExpbmUoQGM6ICNDN0M3QzcpIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgQGM7XHJcbiAgICBjb2xvcjogQGM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xyXG59XHJcblxyXG4uc2V0Qm90dG9tTGluZShAYzogI0M3QzdDNykge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAYztcclxuICAgIGNvbG9yOiBAYztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XHJcbn1cclxuXHJcbi5zZXRMZWZ0TGluZShAYzogI0M3QzdDNykge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGM7XHJcbiAgICBjb2xvcjogQGM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xyXG59XHJcblxyXG4uc2V0UmlnaHRMaW5lKEBjOiAjQzdDN0M3KSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIEBjO1xyXG4gICAgY29sb3I6IEBjO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1jZWxsX3N3aXBlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICA+IC53ZXVpLWNlbGxfX2JkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgPiAud2V1aS1jZWxsX19mdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxufVxyXG4ud2V1aS1zd2lwZWQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogQHdldWlDZWxsTGluZUhlaWdodDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi53ZXVpLXN3aXBlZC1idG5fZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0NDO1xyXG59XHJcbi53ZXVpLXN3aXBlZC1idG5fd2FybiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjMwO1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWNlbGxfYWNjZXNzIHtcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcclxuICAgIH1cclxuICAgIC53ZXVpLWNlbGxfX2Z0IHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgIC5zZXRBcnJvdyhyaWdodCwgNnB4LCAjQzhDOENELCAycHgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS1jZWxsX2xpbmt7XHJcbiAgICBjb2xvcjogQHdldWlMaW5rQ29sb3JEZWZhdWx0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIC8vIOeUseS6jndldWktY2VsbDpmaXJzdC1jaGlsZOeahDpiZWZvcmXkuLrpmpDol4/vvIzmiYDku6Xov5nph4zopoHph43mlrDmmL7npLrlh7rmnaVcclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG4uX3NldEFycm93KEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogQGFycm93c2l6ZTtcclxuICAgIHdpZHRoOiBAYXJyb3dzaXplO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBAYm9yZGVyV2lkdGggQGJvcmRlcldpZHRoIDAgMDtcclxuICAgIGJvcmRlci1jb2xvcjogQGJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLnNldEFycm93KEBkaXJlY3Rpb24sIEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKSB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XHJcbiAgICAuX3NldEFycm93KEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKTtcclxuICAgIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsLTAuNzEsMC43MSwwLjcxLDAsMCk7IC8vIHJvdGF0ZSgtNDVkZWcpXHJcbn1cclxuXHJcbi5zZXRBcnJvdyhAZGlyZWN0aW9uLCBAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsQGJvcmRlcldpZHRoKSB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcclxuICAgIC5fc2V0QXJyb3coQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLCBAYm9yZGVyV2lkdGgpO1xyXG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMC43MSwwLjcxLC0wLjcxLDAuNzEsMCwwKTsgLy8gcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5zZXRBcnJvdyhAZGlyZWN0aW9uLCBAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsQGJvcmRlcldpZHRoKSB3aGVuIChAZGlyZWN0aW9uID0gZG93bikge1xyXG4gICAgLl9zZXRBcnJvdyhAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsIEBib3JkZXJXaWR0aCk7XHJcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgtMC43MSwwLjcxLC0wLjcxLC0wLjcxLDAsMCk7IC8vIHJvdGF0ZSgxMzVkZWcpO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTNweDtcclxufVxyXG5cclxuLnNldEFycm93KEBkaXJlY3Rpb24sIEBhcnJvd3NpemUsIEBib3JkZXJDb2xvcixAYm9yZGVyV2lkdGgpIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XHJcbiAgICAuX3NldEFycm93KEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKTtcclxuICAgIHRyYW5zZm9ybTogbWF0cml4KC0wLjcxLC0wLjcxLDAuNzEsLTAuNzEsMCwwKTsgLy8gcm90YXRlKC0xMzVkZWcpO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1jaGVja19fbGFiZWwge1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcclxuICAgIH1cclxufVxyXG5cclxuLndldWktY2hlY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OWVtO1xyXG59XHJcbiIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4vLyBtZXRob2QyIGFjY2Vzc2JpbGl0eVxyXG4ud2V1aS1jZWxsc19yYWRpb3tcclxuICAgIC53ZXVpLWNlbGxfX2Z0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IEB3ZXVpQ2VsbElubmVyR2FwSDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1jaGVjayB7XHJcbiAgICAvLyByYWRpb1xyXG4gICAgLndldWktY2VsbHNfcmFkaW8gJiB7XHJcbiAgICAgICAgJjpjaGVja2VkIHtcclxuICAgICAgICAgICAgJiArIC53ZXVpLWljb24tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcRUEwOCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwOUJCMDc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktY2VsbHNfY2hlY2tib3gge1xyXG4gIC53ZXVpLWNlbGxfX2hkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IEB3ZXVpQ2VsbElubmVyR2FwSDtcclxuICB9XHJcbiAgLndldWktaWNvbi1jaGVja2VkIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ1xcRUEwMSc7XHJcbiAgICAgIGNvbG9yOiAjQzlDOUM5O1xyXG4gICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gbWV0aG9kMiBhY2Nlc3NiaWxpdHlcclxuLndldWktY2hlY2sge1xyXG4gIC8vIGNoZWNrYm94XHJcbiAgLndldWktY2VsbHNfY2hlY2tib3ggJiB7XHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICAmICsgLndldWktaWNvbi1jaGVja2VkIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnXFxFQTA2JztcclxuICAgICAgICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm15LWljb24tc2VsZWN0ZWQ6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxFQTA2JztcclxuICBjb2xvcjogIzA5QkIwNztcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5teS1pY29uLW5vLXNlbGVjdGVkOmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcRUEwMSc7XHJcbiAgY29sb3I6ICNDOUM5Qzk7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1sYWJlbHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOkB3ZXVpQ2VsbExhYmVsV2lkdGg7XHJcbiAgLnRleHRfd3JhcCgpO1xyXG59XHJcbi53ZXVpLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IHVuaXQoQHdldWlDZWxsTGluZUhlaWdodCwgZW0pO1xyXG4gICAgbGluZS1oZWlnaHQ6IEB3ZXVpQ2VsbExpbmVIZWlnaHQ7XHJcblxyXG4gICAgLy8gaGlkZXMgdGhlIHNwaW4tYnV0dG9uXHJcbiAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9ue1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuLndldWktdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi53ZXVpLXRleHRhcmVhLWNvdW50ZXJ7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JUaXBzO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAud2V1aS1jZWxsX3dhcm4gJntcclxuICAgICAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JXYXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS10b3B0aXBzIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAudGV4dF93cmFwKCk7XHJcbn1cclxuLndldWktdG9wdGlwc193YXJuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQ29sb3JXYXJuO1xyXG59XHJcbi53ZXVpLWNlbGxzX2Zvcm0ge1xyXG4gICAgLndldWktY2VsbF9fZnR7XHJcbiAgICAgICAgZm9udC1zaXplOjA7XHJcbiAgICB9XHJcbiAgICAud2V1aS1pY29uLXdhcm57XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgaW5wdXQsIHRleHRhcmVhLCBsYWJlbFtmb3Jde1xyXG4gICAgICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLWNlbGxfd2FybntcclxuICAgIGNvbG9yOkB3ZXVpVGV4dENvbG9yV2FybjtcclxuICAgIC53ZXVpLWljb24td2FybntkaXNwbGF5OmlubGluZS1ibG9jazt9XHJcbn1cclxuIiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuLmVsbGlwc2lzKEB3OmF1dG8pIHtcclxuICAgIHdpZHRoOiBAdztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxufVxyXG5cclxuLmVsbGlwc2lzTG4oQGxpbmUpIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogQGxpbmU7XHJcbn1cclxuLnRleHRfd3JhcCgpIHtcclxuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuLmh5cGhlbnMoKSB7XHJcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxuICAgIC13ZWJraXQtaHlwaGVuczphdXRvO1xyXG4gICAgaHlwaGVuczphdXRvO1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWZvcm0tcHJldmlld3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgIH1cclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2hke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViBAd2V1aUNlbGxHYXBIO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgICAgICBsZWZ0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgfVxyXG4gICAgLndldWktZm9ybS1wcmV2aWV3X192YWx1ZXtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIH1cclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2Jke1xyXG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViBAd2V1aUNlbGxHYXBIO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuLndldWktZm9ybS1wcmV2aWV3X19mdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XHJcbiAgICB9XHJcbn1cclxuLndldWktZm9ybS1wcmV2aWV3X19pdGVte1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2xhYmVse1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIG1pbi13aWR0aDogNGVtO1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGp1c3RpZnk7XHJcbn1cclxuLndldWktZm9ybS1wcmV2aWV3X192YWx1ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtYnJlYWs6bm9ybWFsO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi53ZXVpLWZvcm0tcHJldmlld19fYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleDogMTtcclxuICAgIGNvbG9yOiBAd2V1aURpYWxvZ0xpbmtDb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgYnV0dG9uJntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlEaWFsb2dMaW5rQWN0aXZlQmM7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0TGVmdExpbmUoQHdldWlEaWFsb2dMaW5lQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi53ZXVpLWZvcm0tcHJldmlld19fYnRuX2RlZmF1bHQge1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0bl9wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjMEJCMjBDO1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWNlbGxfc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAud2V1aS1zZWxlY3Qge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAud2V1aS1jZWxsX19iZHtcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgLnNldEFycm93KHJpZ2h0LCA2cHgsICNDOEM4Q0QsIDJweCk7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogQHdldWlDZWxsR2FwSDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLXNlbGVjdCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IEB3ZXVpQ2VsbEhlaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbn1cclxuXHJcbi53ZXVpLWNlbGxfc2VsZWN0LWJlZm9yZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OkB3ZXVpQ2VsbEdhcEg7XHJcbiAgICAud2V1aS1zZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6QHdldWlDZWxsTGFiZWxXaWR0aDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLndldWktY2VsbF9faGQge1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAuc2V0UmlnaHRMaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAuc2V0QXJyb3cocmlnaHQsIDZweCwgI0M4QzhDRCwgMnB4KTtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC53ZXVpLWNlbGxfX2JkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6QHdldWlDZWxsR2FwSDtcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1jZWxsX3NlbGVjdC1hZnRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6QHdldWlDZWxsR2FwSDtcclxuICAgIC53ZXVpLXNlbGVjdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktY2VsbF92Y29kZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ud2V1aS12Y29kZS1pbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgaGVpZ2h0OiBAd2V1aUNlbGxIZWlnaHQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ud2V1aS12Y29kZS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiBAd2V1aUNlbGxIZWlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogMCAwLjZlbSAwIDAuN2VtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBAd2V1aUxpbmVDb2xvckxpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IEB3ZXVpQ2VsbEhlaWdodDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IEB3ZXVpQ2VsbEZvbnRTaXplO1xyXG4gICAgY29sb3I6IEB3ZXVpRGlhbG9nTGlua0NvbG9yO1xyXG4gICAgYnV0dG9uJntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IGRlc2F0dXJhdGUoQHdldWlEaWFsb2dMaW5rQ29sb3IsIDMwJSk7XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG5Ad2V1aUdhbGxlcnlPcHJIZWlnaHQ6IDYwcHg7XHJcbi53ZXVpLWdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi53ZXVpLWdhbGxlcnlfX2ltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IEB3ZXVpR2FsbGVyeU9wckhlaWdodDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLndldWktZ2FsbGVyeV9fb3ByIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEMEQwRDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBoZWlnaHQ6IEB3ZXVpR2FsbGVyeU9wckhlaWdodDtcclxuICBsaW5lLWhlaWdodDogQHdldWlHYWxsZXJ5T3BySGVpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndldWktZ2FsbGVyeV9fZGVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWNlbGxfc3dpdGNoe1xyXG4gICAgcGFkZGluZy10b3A6IChAd2V1aUNlbGxIZWlnaHQgLSBAd2V1aVN3aXRjaEhlaWdodCkgLyAyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IChAd2V1aUNlbGxIZWlnaHQgLSBAd2V1aVN3aXRjaEhlaWdodCkgLyAyO1xyXG59XHJcbi53ZXVpLXN3aXRjaHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuLndldWktc3dpdGNoLFxyXG4ud2V1aS1zd2l0Y2gtY3BfX2JveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiBAd2V1aVN3aXRjaEhlaWdodDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZERkRGO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMsIGJvcmRlciAuMXM7XHJcblxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQgLSAyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcclxuICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLjQ1LCAxLCAwLjQsIDEpO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IEB3ZXVpU3dpdGNoSGVpZ2h0IC0gMjtcclxuICAgICAgICBoZWlnaHQ6IEB3ZXVpU3dpdGNoSGVpZ2h0IC0gMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLjQsIDAuNCwgMC4yNSwgMS4zNSk7XHJcbiAgICB9XHJcbn1cclxuLndldWktc3dpdGNoOmNoZWNrZWQsXHJcbi53ZXVpLXN3aXRjaC1jcF9faW5wdXQ6Y2hlY2tlZCB+IC53ZXVpLXN3aXRjaC1jcF9fYm94e1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDRCRTAyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QkUwMjtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDlhbzlrrlJRSBFZGdl55qE54mI5pysXHJcbi53ZXVpLXN3aXRjaC1jcF9faW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcbi53ZXVpLXN3aXRjaC1jcF9fYm94e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktdXBsb2FkZXJ7fVxyXG4ud2V1aS11cGxvYWRlcl9faGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IEB3ZXVpQ2VsbEdhcFY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi53ZXVpLXVwbG9hZGVyX190aXRsZXtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLndldWktdXBsb2FkZXJfX2luZm97XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JUaXBzO1xyXG59XHJcblxyXG4ud2V1aS11cGxvYWRlcl9fYmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aUNlbGxHYXBIIC0gKEB3ZXVpQ2VsbEdhcFYgKyBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtQHdldWlVcGxvYWRlckZpbGVTcGFjaW5nO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ud2V1aS11cGxvYWRlcl9fZmlsZXN7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi53ZXVpLXVwbG9hZGVyX19maWxle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IEB3ZXVpVXBsb2FkZXJGaWxlU3BhY2luZztcclxuICAgIG1hcmdpbi1ib3R0b206IEB3ZXVpVXBsb2FkZXJGaWxlU3BhY2luZztcclxuICAgIHdpZHRoOiBAd2V1aVVwbG9hZGVyU2l6ZTtcclxuICAgIGhlaWdodDogQHdldWlVcGxvYWRlclNpemU7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLndldWktdXBsb2FkZXJfX2ZpbGVfc3RhdHVze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIH1cclxuICAgIC53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAud2V1aS1pY29uLXdhcm57XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3h7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmc7XHJcbiAgICB3aWR0aDogQHdldWlVcGxvYWRlclNpemUgLSBAd2V1aVVwbG9hZGVyQm9yZGVyV2lkdGggKiAyO1xyXG4gICAgaGVpZ2h0OiBAd2V1aVVwbG9hZGVyU2l6ZSAtIEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCAqIDI7XHJcbiAgICBib3JkZXI6IEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCBzb2xpZCBAd2V1aVVwbG9hZGVyQm9yZGVyQ29sb3I7XHJcbiAgICAmOmJlZm9yZSwgJjphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpVXBsb2FkZXJCb3JkZXJDb2xvcjtcclxuICAgIH1cclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIHdpZHRoOiBAd2V1aVVwbG9hZGVyQm9yZGVyV2lkdGggKyAxO1xyXG4gICAgICAgIGhlaWdodDogQHdldWlVcGxvYWRlclNpemUgLyAyO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgICB3aWR0aDogQHdldWlVcGxvYWRlclNpemUgLyAyO1xyXG4gICAgICAgIGhlaWdodDogQHdldWlVcGxvYWRlckJvcmRlcldpZHRoICsgMTtcclxuICAgIH1cclxuICAgICY6YWN0aXZle1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogQHdldWlVcGxvYWRlckFjdGl2ZUJvcmRlckNvbG9yO1xyXG4gICAgICAgICY6YmVmb3JlLCAmOmFmdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVVwbG9hZGVyQWN0aXZlQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi53ZXVpLXVwbG9hZGVyX19pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5AaW1wb3J0IFwiLi4vd2V1aS1idXR0b24vd2V1aS1idXR0b25cIjtcclxuXHJcbi53ZXVpLW1zZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogQHdldWlNc2dQYWRkaW5nVG9wO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53ZXVpLW1zZ19faWNvbi1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IEB3ZXVpTXNnSWNvbkdhcDtcclxufVxyXG4ud2V1aS1tc2dfX3RleHQtYXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ1RleHRHYXA7XHJcbiAgICBwYWRkaW5nOjAgMjBweDtcclxufVxyXG4ud2V1aS1tc2dfX3RleHQtYXJlYSBhe1xyXG4gICAgY29sb3I6QHdldWlMaW5rQ29sb3JEZWZhdWx0O1xyXG59XHJcbi53ZXVpLW1zZ19fdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dUaXRsZUdhcDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLndldWktbXNnX19kZXNjIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XHJcbn1cclxuLndldWktbXNnX19vcHItYXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ09wckdhcDtcclxufVxyXG4ud2V1aS1tc2dfX2V4dHJhLWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dFeHRyYUFyZWFHYXA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgYXtjb2xvcjogQHdldWlMaW5rQ29sb3JEZWZhdWx0O31cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IEB3ZXVpTXNnRXh0cmFBcmVhT2ZNaW5IZWlnaHQpIHtcclxuICAgIC53ZXVpLW1zZ19fZXh0cmEtYXJlYSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1hcnRpY2xlIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjllbTtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC4zNGVtO1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjM0ZW07XHJcbiAgICB9XHJcbiAgICAqIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAuOGVtO1xyXG4gICAgfVxyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLXRhYmJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZBO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZSgjQzBCRkM0KTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktdGFiYmFyX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDVweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcblxyXG4gICAgJi53ZXVpLWJhcl9faXRlbV9vbiB7XHJcbiAgICAgICAgLndldWktdGFiYmFyX19pY29uLFxyXG4gICAgICAgIC53ZXVpLXRhYmJhcl9faWNvbiA+IGksXHJcbiAgICAgICAgLndldWktdGFiYmFyX19sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLndldWktdGFiYmFyX19pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG5cclxuICAgIGkmLFxyXG4gICAgPiBpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktdGFiYmFyX19sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1uYXZiYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDUwMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0Qm90dG9tTGluZSgjQ0NDQ0NDKTtcclxuICAgIH1cclxuXHJcbiAgICAmICsgLndldWktdGFiX19wYW5lbCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLW5hdmJhcl9faXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAuc2V0VGFwQ29sb3IoKTtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcclxuICAgIH1cclxuXHJcbiAgICAmLndldWktYmFyX19pdGVtX29uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRSaWdodExpbmUoI0NDQ0NDQyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5AaW1wb3J0IFwid2V1aS10YWJiYXJcIjtcclxuQGltcG9ydCBcIndldWktbmF2YmFyXCI7XHJcblxyXG4ud2V1aS10YWIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ud2V1aS10YWJfX3BhbmVsIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcbi53ZXVpLXRhYl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktcHJvZ3Jlc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZXVpLXByb2dyZXNzX19iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlQcm9ncmVzc0JnO1xyXG4gICAgaGVpZ2h0OiBAd2V1aVByb2dyZXNzSGVpZ2h0O1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLndldWktcHJvZ3Jlc3NfX2lubmVyLWJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpUHJvZ3Jlc3NDb2xvcjtcclxufVxyXG5cclxuLndldWktcHJvZ3Jlc3NfX29wciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcblxyXG4ud2V1aS1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpTGluZUNvbG9yTGlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1wYW5lbF9faGQge1xyXG4gICAgcGFkZGluZzogMTRweCAxNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoQHdldWlMaW5lQ29sb3JMaWdodCk7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLW1lZGlhLWJveCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpTGluZUNvbG9yTGlnaHQpO1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYSZ7XHJcbiAgICAgICAgY29sb3I6IzAwMDAwMDtcclxuICAgICAgICAuc2V0VGFwQ29sb3IoKTtcclxuICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRUNFQ0VDO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAuZWxsaXBzaXMoKTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfX2Rlc2Mge1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAuZWxsaXBzaXNMbigyKTtcclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfX2luZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI0NFQ0VDRTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfX2luZm9fX21ldGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuLndldWktbWVkaWEtYm94X19pbmZvX19tZXRhX2V4dHJhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0VDRUNFO1xyXG59XHJcbi53ZXVpLW1lZGlhLWJveF90ZXh0IHtcclxuICAgIC53ZXVpLW1lZGlhLWJveF9fdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfYXBwbXNnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLndldWktbWVkaWEtYm94X19oZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAud2V1aS1tZWRpYS1ib3hfX3RodW1iIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAud2V1aS1tZWRpYS1ib3hfX2JkIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfc21hbGwtYXBwbXNnIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAud2V1aS1jZWxscyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWdyaWRzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpR3JpZEJvcmRlckNvbG9yKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRMZWZ0TGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWdyaWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJSAvIEB3ZXVpR3JpZENvbHVtbkNvdW50O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgLnNldFJpZ2h0TGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQmdDb2xvckFjdGl2ZTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktZ3JpZF9faWNvbiB7XHJcbiAgICB3aWR0aDogQHdldWlHcmlkSWNvblNpemU7XHJcbiAgICBoZWlnaHQ6IEB3ZXVpR3JpZEljb25TaXplO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJiArIC53ZXVpLWdyaWRfX2xhYmVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktZ3JpZF9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JUaXRsZTtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlHcmlkRm9udFNpemU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1mb290ZXIge1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpTGlua0NvbG9yRGVmYXVsdDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1mb290ZXJfZml4ZWQtYm90dG9te1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAuNTJlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4ud2V1aS1mb290ZXJfX2xpbmtze1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59XHJcbi53ZXVpLWZvb3Rlcl9fbGlua3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW46IDAgLjYyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICAuc2V0TGVmdExpbmUoKTtcclxuICAgICAgICBsZWZ0OiAtLjY1ZW07XHJcbiAgICAgICAgdG9wOiAuMzZlbTtcclxuICAgICAgICBib3R0b206IC4zNmVtO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLndldWktZm9vdGVyX190ZXh0e1xyXG4gICAgcGFkZGluZzogMCAuMzRlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLndldWktZmxleF9faXRlbXtcclxuICAgIGZsZXg6IDE7XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1MDAwO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpRGlhbG9nQmFja2dyb3VuZENvbG9yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLndldWktZGlhbG9nX19oZCB7XHJcbiAgcGFkZGluZzogMS4zZW0gQHdldWlEaWFsb2dHYXBXaWR0aCAuNWVtO1xyXG59XHJcblxyXG4ud2V1aS1kaWFsb2dfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLndldWktZGlhbG9nX19iZCB7XHJcbiAgcGFkZGluZzogMCBAd2V1aURpYWxvZ0dhcFdpZHRoIC44ZW07XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAyLjdlbSAyMHB4IDEuN2VtO1xyXG4gICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgfVxyXG59XHJcblxyXG4ud2V1aS1kaWFsb2dfX2Z0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIC5zZXRUb3BMaW5lKEB3ZXVpRGlhbG9nTGluZUNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbi53ZXVpLWRpYWxvZ19fYnRuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4OiAxO1xyXG4gIGNvbG9yOiBAd2V1aURpYWxvZ0xpbmtDb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLnNldFRhcENvbG9yKCk7XHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlEaWFsb2dMaW5rQWN0aXZlQmM7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIC5zZXRMZWZ0TGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XHJcbiAgfVxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud2V1aS1kaWFsb2dfX2J0bl9kZWZhdWx0IHtcclxuICBjb2xvcjogIzM1MzUzNTtcclxufVxyXG5cclxuLndldWktZGlhbG9nX19idG5fcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMwQkIyMEM7XHJcbn1cclxuXHJcbi53ZXVpLXNraW5fYW5kcm9pZCB7XHJcbiAgLndldWktZGlhbG9nIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIC53ZXVpLWRpYWxvZ19fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuICAud2V1aS1kaWFsb2dfX2hkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC53ZXVpLWRpYWxvZ19fYmQge1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIHBhZGRpbmc6IC4yNWVtIEB3ZXVpRGlhbG9nR2FwV2lkdGggMmVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nOiAxLjZlbSBAd2V1aURpYWxvZ0dhcFdpZHRoIDJlbTtcclxuICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53ZXVpLWRpYWxvZ19fZnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCBAd2V1aURpYWxvZ0dhcFdpZHRoIC43ZW07XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLndldWktZGlhbG9nX19idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBhZGRpbmc6IDAgLjhlbTtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDYpO1xyXG4gICAgfVxyXG4gICAgJjp2aXNpdGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDYpO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtLjhlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLndldWktZGlhbG9nX19idG5fZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICB9XHJcbn1cclxuXHJcbi8q5L+u5q2jd2V1aeWvueivneahhueahOmrmOW6piovXHJcbi53ZXVpLWRpYWxvZ19fZnQgYSB7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC53ZXVpLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktdG9hc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIHdpZHRoOiA3LjZlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDcuNmVtO1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMy44ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3LDE3LDE3LDAuNyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ud2V1aS1pY29uX3RvYXN0IHtcclxuICAgIG1hcmdpbjogMjJweCAwIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICYud2V1aS1pY29uLXN1Y2Nlc3Mtbm8tY2lyY2xle1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53ZXVpLWxvYWRpbmd7XHJcbiAgICAgIG1hcmdpbjozMHB4IDAgMDtcclxuICAgICAgd2lkdGg6MzhweDtcclxuICAgICAgaGVpZ2h0OjM4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktdG9hc3RfX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG4iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktbWFzayB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNik7XHJcbn1cclxuXHJcbi53ZXVpLW1hc2tfdHJhbnNwYXJlbnR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuQHdldWlBY3Rpb25TaGVldEFuZHJvaWRCb3JkZXJSYWRpdXM6IDJweDtcclxuXHJcbi53ZXVpLWFjdGlvbnNoZWV0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQmdDb2xvckRlZmF1bHQ7XHJcbiAgICAvL3NsaWRlIHVwIGFuaW1hdGlvblxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxufVxyXG4ud2V1aS1hY3Rpb25zaGVldF9fdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0ZDRkQ7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgLndldWktYWN0aW9uc2hlZXRfX3RpdGxlLXRleHQge1xyXG4gICAgICAgIC5lbGxpcHNpc0xuKDIpO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLWFjdGlvbnNoZWV0X19tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcclxufVxyXG4ud2V1aS1hY3Rpb25zaGVldF9fYWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkQ7O1xyXG59XHJcbi53ZXVpLWFjdGlvbnNoZWV0X19jZWxsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJnQ29sb3JBY3RpdmU7XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vYW5kcm9pZCBhY3Rpb25TaGVldFxyXG4ud2V1aS1za2luX2FuZHJvaWR7XHJcbiAgICAud2V1aS1hY3Rpb25zaGVldCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLy9wYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI3NHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC8vc2xpZGUgdXAgYW5pbWF0aW9uXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxuICAgIH1cclxuICAgIC53ZXVpLWFjdGlvbnNoZWV0X19hY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC53ZXVpLWFjdGlvbnNoZWV0X19tZW51IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBAd2V1aUFjdGlvblNoZWV0QW5kcm9pZEJvcmRlclJhZGl1cztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgICB9XHJcbiAgICAud2V1aS1hY3Rpb25zaGVldF9fY2VsbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IEB3ZXVpQWN0aW9uU2hlZXRBbmRyb2lkQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQHdldWlBY3Rpb25TaGVldEFuZHJvaWRCb3JkZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IEB3ZXVpQWN0aW9uU2hlZXRBbmRyb2lkQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQHdldWlBY3Rpb25TaGVldEFuZHJvaWRCb3JkZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2FjdGlvblNoZWV0IGFuaWFtdGlvblxyXG4ud2V1aS1hY3Rpb25zaGVldF90b2dnbGV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1sb2FkbW9yZXtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46MS41ZW0gYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53ZXVpLWxvYWRtb3JlX190aXBze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLndldWktbG9hZG1vcmVfbGluZXtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIEB3ZXVpTGluZUNvbG9yTGlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjIuNGVtO1xyXG4gICAgLndldWktbG9hZG1vcmVfX3RpcHN7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDotLjllbTtcclxuICAgICAgICBwYWRkaW5nOjAgLjU1ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBjb2xvcjpAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgICB9XHJcbn1cclxuLndldWktbG9hZG1vcmVfZG90e1xyXG4gICAgLndldWktbG9hZG1vcmVfX3RpcHN7XHJcbiAgICAgICAgcGFkZGluZzowIC4xNmVtO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgd2lkdGg6NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlMaW5lQ29sb3JMaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiAwO1xyXG4gICAgICAgICAgICB0b3A6LS4xNmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qXHJcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXHJcbiogXHJcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXHJcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiogXHJcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4qIFxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcclxuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxyXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuMTVlbSAuNGVtO1xyXG4gICAgbWluLXdpZHRoOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0MzUzMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLndldWktYmFkZ2VfZG90IHtcclxuICAgIHBhZGRpbmc6IC40ZW07XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG4ud2V1aS1zZWFyY2gtYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkY0O1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKCNEN0Q2REMpO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoI0Q3RDZEQyk7XHJcbiAgICB9XHJcbiAgICAmLndldWktc2VhcmNoLWJhcl9mb2N1c2luZ3tcclxuICAgICAgICAud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLndldWktc2VhcmNoLWJhcl9fbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi53ZXVpLXNlYXJjaC1iYXJfX2Zvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRjQ7XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNkVBO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIH1cclxufVxyXG4ud2V1aS1zZWFyY2gtYmFyX19ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAud2V1aS1zZWFyY2gtYmFyX19pbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMC8xNGVtO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwLzE0ZW07XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndldWktaWNvbi1zZWFyY2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxuICAgIC53ZXVpLWljb24tY2xlYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLXNlYXJjaC1iYXJfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgbGVmdDogMXB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjOUI5QjlCO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgIC53ZXVpLWljb24tc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICMwOUJCMDc7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi53ZXVpLXNlYXJjaC1iYXJfX2lucHV0Om5vdCg6dmFsaWQpIH4gLndldWktaWNvbi1jbGVhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vL+W5suaOiWlucHV0W3NlYXJjaF3pu5jorqTnmoRjbGVhciBidXR0b25cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuQHBpY2tlckl0ZW1IZWlnaHQ6IDM0cHg7XHJcbi53ZXVpLXBpY2tlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDUwMDA7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xyXG4gIC8vc2xpZGUgdXAgYW5pbWF0aW9uXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxufVxyXG5cclxuLndldWktcGlja2VyX19oZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA5cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgLnNldEJvdHRvbUxpbmUoQHdldWlMaW5lQ29sb3JMaWdodCk7XHJcbiAgfVxyXG59XHJcblxyXG4ud2V1aS1waWNrZXJfX2FjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleDogMTtcclxuICBjb2xvcjogQHdldWlDb2xvclByaW1hcnk7XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gIH1cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ud2V1aS1waWNrZXJfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4OiAxO1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndldWktcGlja2VyX19iZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDIzOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9fZ3JvdXAge1xyXG4gIGZsZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvLy13ZWJraXQtbWFzay1ib3gtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1JSwjZmZmIDUwJSwjZmZmIDUwJSx0cmFuc3BhcmVudCA5NSUsdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4ud2V1aS1waWNrZXJfX21hc2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBoc2xhKDAsIDAlLCAxMDAlLCAuOTUpLCBoc2xhKDAsIDAlLCAxMDAlLCAuNikpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgaHNsYSgwLCAwJSwgMTAwJSwgLjk1KSwgaHNsYSgwLCAwJSwgMTAwJSwgLjYpKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAycHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9faW5kaWNhdG9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IEBwaWNrZXJJdGVtSGVpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTAycHg7XHJcbiAgei1pbmRleDogMztcclxuICAmOmJlZm9yZSB7XHJcbiAgICAuc2V0VG9wTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICAuc2V0Qm90dG9tTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9fY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2V1aS1waWNrZXJfX2l0ZW0ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiBAcGlja2VySXRlbUhlaWdodDtcclxuICBsaW5lLWhlaWdodDogQHBpY2tlckl0ZW1IZWlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLndldWktcGlja2VyX19pdGVtX2Rpc2FibGVkIHtcclxuICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1hbmltYXRlLXNsaWRlLXVwIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCBlYXNlIC4zcyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktYW5pbWF0ZS1zbGlkZS1kb3duIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIGVhc2UgLjNzIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWFuaW1hdGUtZmFkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIC4zcyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktYW5pbWF0ZS1mYWRlLW91dCB7XHJcbiAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAuM3MgZm9yd2FyZHM7XHJcbn0iLCIvKlxyXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxyXG4qIFxyXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIFxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxyXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qIFxyXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuKiBcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXHJcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcclxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYWdyZWV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IC41ZW0gMTVweDtcclxuICAgIGZvbnQtc2l6ZSA6MTNweDtcclxuXHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUxpbmtDb2xvckRlZmF1bHQ7XHJcbiAgICB9XHJcbn1cclxuLndldWktYWdyZWVfX3RleHR7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59XHJcbi53ZXVpLWFncmVlX19jaGVja2JveHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdmVydGljYWwtYWxpZ246IDA7XHJcbiAgICB0b3A6IDJweDtcclxuXHJcbiAgICAmOmNoZWNrZWR7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIndldWlcIjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgc3BlYWs6IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcRUEwOFwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC00OCUpIHNjYWxlKC43Myk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMUUxRTE7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiNBREFEQUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWxvYWRpbmcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYW5pbWF0aW9uOiB3ZXVpTG9hZGluZyAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNakFpSUdobGFXZG9kRDBpTVRJd0lpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lERXdNQ0krUEhCaGRHZ2dabWxzYkQwaWJtOXVaU0lnWkQwaVRUQWdNR2d4TURCMk1UQXdTREI2SWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUlRsRk9VVTVJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREFnTFRNd0tTSXZQanh5WldOMElIZHBaSFJvUFNJM0lpQm9aV2xuYUhROUlqSXdJaUI0UFNJME5pNDFJaUI1UFNJME1DSWdabWxzYkQwaUl6azRPVFk1TnlJZ2NuZzlJalVpSUhKNVBTSTFJaUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2d6TUNBeE1EVXVPVGdnTmpVcElpOCtQSEpsWTNRZ2QybGtkR2c5SWpjaUlHaGxhV2RvZEQwaU1qQWlJSGc5SWpRMkxqVWlJSGs5SWpRd0lpQm1hV3hzUFNJak9VSTVPVGxCSWlCeWVEMGlOU0lnY25rOUlqVWlJSFJ5WVc1elptOXliVDBpY205MFlYUmxLRFl3SURjMUxqazRJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBFelFURkJNaUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZzVNQ0EyTlNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkJRa0U1UVVFaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTVRJd0lEVTRMalkySURZMUtTSXZQanh5WldOMElIZHBaSFJvUFNJM0lpQm9aV2xuYUhROUlqSXdJaUI0UFNJME5pNDFJaUI1UFNJME1DSWdabWxzYkQwaUkwSXlRakpDTWlJZ2NuZzlJalVpSUhKNVBTSTFJaUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2d4TlRBZ05UUXVNRElnTmpVcElpOCtQSEpsWTNRZ2QybGtkR2c5SWpjaUlHaGxhV2RvZEQwaU1qQWlJSGc5SWpRMkxqVWlJSGs5SWpRd0lpQm1hV3hzUFNJalFrRkNPRUk1SWlCeWVEMGlOU0lnY25rOUlqVWlJSFJ5WVc1elptOXliVDBpY205MFlYUmxLREU0TUNBMU1DQTJOU2tpTHo0OGNtVmpkQ0IzYVdSMGFEMGlOeUlnYUdWcFoyaDBQU0l5TUNJZ2VEMGlORFl1TlNJZ2VUMGlOREFpSUdacGJHdzlJaU5ETWtNd1F6RWlJSEo0UFNJMUlpQnllVDBpTlNJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb0xURTFNQ0EwTlM0NU9DQTJOU2tpTHo0OGNtVmpkQ0IzYVdSMGFEMGlOeUlnYUdWcFoyaDBQU0l5TUNJZ2VEMGlORFl1TlNJZ2VUMGlOREFpSUdacGJHdzlJaU5EUWtOQ1EwSWlJSEo0UFNJMUlpQnllVDBpTlNJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb0xURXlNQ0EwTVM0ek5DQTJOU2tpTHo0OGNtVmpkQ0IzYVdSMGFEMGlOeUlnYUdWcFoyaDBQU0l5TUNJZ2VEMGlORFl1TlNJZ2VUMGlOREFpSUdacGJHdzlJaU5FTWtReVJESWlJSEo0UFNJMUlpQnllVDBpTlNJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb0xUa3dJRE0xSURZMUtTSXZQanh5WldOMElIZHBaSFJvUFNJM0lpQm9aV2xuYUhROUlqSXdJaUI0UFNJME5pNDFJaUI1UFNJME1DSWdabWxzYkQwaUkwUkJSRUZFUVNJZ2NuZzlJalVpSUhKNVBTSTFJaUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2d0TmpBZ01qUXVNRElnTmpVcElpOCtQSEpsWTNRZ2QybGtkR2c5SWpjaUlHaGxhV2RvZEQwaU1qQWlJSGc5SWpRMkxqVWlJSGs5SWpRd0lpQm1hV3hzUFNJalJUSkZNa1V5SWlCeWVEMGlOU0lnY25rOUlqVWlJSFJ5WVc1elptOXliVDBpY205MFlYUmxLQzB6TUNBdE5TNDVPQ0EyTlNraUx6NDhMM04yWno0PSkgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG5cclxuICAgICYud2V1aS1sb2FkaW5nX3RyYW5zcGFyZW50LFxyXG4gICAgLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fcHJpbWFyeSAmLFxyXG4gICAgLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fd2FybiAmXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyUzRSUzQ3BhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8lM0UlM0NyZWN0IHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC41NiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMzApJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuNSknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMzAgMTA1Ljk4IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4zOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNjUgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMzIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA1OC42NiA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjI1KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTE1MCA0NS45OCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTkwIDM1IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjEpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC02MCAyNC4wMiA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHdldWlMb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cclxuKiBcclxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcclxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKiBcclxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiogXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xyXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXHJcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLXNsaWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE4cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLndldWktc2xpZGVyX19pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XHJcbn1cclxuXHJcbi53ZXVpLXNsaWRlcl9fdHJhY2sge1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUNvbG9yUHJpbWFyeTtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4ud2V1aS1zbGlkZXJfX2hhbmRsZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcblxyXG5cclxuLndldWktc2xpZGVyLWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLndldWktc2xpZGVye1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuLndldWktc2xpZGVyLWJveF9fdmFsdWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */\n", ""]);

	// exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);