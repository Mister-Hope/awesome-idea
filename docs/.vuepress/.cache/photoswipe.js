import {
  __commonJS,
  init_define_ARTICLE_INFO_LOCALES,
  init_define_BACK_TO_TOP_LOCALES,
  init_define_CODE_COPY_LOCALES,
  init_define_CODE_COPY_OPIONS,
  init_define_CODE_DEMO_OPTIONS,
  init_define_COMMENT_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MERMAID_OPTIONS,
  init_define_PAGINATION_LOCALES,
  init_define_PHOTO_SWIPE_LOCALES,
  init_define_PHOTO_SWIPE_OPTIONS,
  init_define_PWA_LOCALES,
  init_define_READING_TIME_LOCALES,
  init_define_REVEAL_CONFIG,
  init_define_WALINE_LOCALES
} from "./chunk-TLB7GS64.js";

// node_modules/photoswipe/dist/photoswipe.js
var require_photoswipe = __commonJS({
  "node_modules/photoswipe/dist/photoswipe.js"(exports, module) {
    init_define_ARTICLE_INFO_LOCALES();
    init_define_BACK_TO_TOP_LOCALES();
    init_define_CODE_COPY_LOCALES();
    init_define_CODE_COPY_OPIONS();
    init_define_CODE_DEMO_OPTIONS();
    init_define_COMMENT_OPTIONS();
    init_define_MERMAID_OPTIONS();
    init_define_PAGINATION_LOCALES();
    init_define_PHOTO_SWIPE_LOCALES();
    init_define_PHOTO_SWIPE_OPTIONS();
    init_define_PWA_LOCALES();
    init_define_READING_TIME_LOCALES();
    init_define_REVEAL_CONFIG();
    init_define_WALINE_LOCALES();
    init_define_EXTERNAL_LINK_ICON_LOCALES();
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.PhotoSwipe = factory();
      }
    })(exports, function() {
      "use strict";
      var PhotoSwipe = function(template, UiClass, items, options) {
        var framework = {
          features: null,
          bind: function(target, type, listener, unbind) {
            var methodName = (unbind ? "remove" : "add") + "EventListener";
            type = type.split(" ");
            for (var i = 0; i < type.length; i++) {
              if (type[i]) {
                target[methodName](type[i], listener, false);
              }
            }
          },
          isArray: function(obj) {
            return obj instanceof Array;
          },
          createEl: function(classes, tag) {
            var el = document.createElement(tag || "div");
            if (classes) {
              el.className = classes;
            }
            return el;
          },
          getScrollY: function() {
            var yOffset = window.pageYOffset;
            return yOffset !== void 0 ? yOffset : document.documentElement.scrollTop;
          },
          unbind: function(target, type, listener) {
            framework.bind(target, type, listener, true);
          },
          removeClass: function(el, className) {
            var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
            el.className = el.className.replace(reg, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
          },
          addClass: function(el, className) {
            if (!framework.hasClass(el, className)) {
              el.className += (el.className ? " " : "") + className;
            }
          },
          hasClass: function(el, className) {
            return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
          },
          getChildByClass: function(parentEl, childClassName) {
            var node = parentEl.firstChild;
            while (node) {
              if (framework.hasClass(node, childClassName)) {
                return node;
              }
              node = node.nextSibling;
            }
          },
          arraySearch: function(array, value, key) {
            var i = array.length;
            while (i--) {
              if (array[i][key] === value) {
                return i;
              }
            }
            return -1;
          },
          extend: function(o1, o2, preventOverwrite) {
            for (var prop in o2) {
              if (o2.hasOwnProperty(prop)) {
                if (preventOverwrite && o1.hasOwnProperty(prop)) {
                  continue;
                }
                o1[prop] = o2[prop];
              }
            }
          },
          easing: {
            sine: {
              out: function(k) {
                return Math.sin(k * (Math.PI / 2));
              },
              inOut: function(k) {
                return -(Math.cos(Math.PI * k) - 1) / 2;
              }
            },
            cubic: {
              out: function(k) {
                return --k * k * k + 1;
              }
            }
          },
          detectFeatures: function() {
            if (framework.features) {
              return framework.features;
            }
            var helperEl = framework.createEl(), helperStyle = helperEl.style, vendor = "", features = {};
            features.oldIE = document.all && !document.addEventListener;
            features.touch = "ontouchstart" in window;
            if (window.requestAnimationFrame) {
              features.raf = window.requestAnimationFrame;
              features.caf = window.cancelAnimationFrame;
            }
            features.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled;
            if (!features.pointerEvent) {
              var ua = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                if (v && v.length > 0) {
                  v = parseInt(v[1], 10);
                  if (v >= 1 && v < 8) {
                    features.isOldIOSPhone = true;
                  }
                }
              }
              var match = ua.match(/Android\s([0-9\.]*)/);
              var androidversion = match ? match[1] : 0;
              androidversion = parseFloat(androidversion);
              if (androidversion >= 1) {
                if (androidversion < 4.4) {
                  features.isOldAndroid = true;
                }
                features.androidVersion = androidversion;
              }
              features.isMobileOpera = /opera mini|opera mobi/i.test(ua);
            }
            var styleChecks = ["transform", "perspective", "animationName"], vendors = ["", "webkit", "Moz", "ms", "O"], styleCheckItem, styleName;
            for (var i = 0; i < 4; i++) {
              vendor = vendors[i];
              for (var a = 0; a < 3; a++) {
                styleCheckItem = styleChecks[a];
                styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);
                if (!features[styleCheckItem] && styleName in helperStyle) {
                  features[styleCheckItem] = styleName;
                }
              }
              if (vendor && !features.raf) {
                vendor = vendor.toLowerCase();
                features.raf = window[vendor + "RequestAnimationFrame"];
                if (features.raf) {
                  features.caf = window[vendor + "CancelAnimationFrame"] || window[vendor + "CancelRequestAnimationFrame"];
                }
              }
            }
            if (!features.raf) {
              var lastTime = 0;
              features.raf = function(fn) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                  fn(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
              };
              features.caf = function(id) {
                clearTimeout(id);
              };
            }
            features.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            framework.features = features;
            return features;
          }
        };
        framework.detectFeatures();
        if (framework.features.oldIE) {
          framework.bind = function(target, type, listener, unbind) {
            type = type.split(" ");
            var methodName = (unbind ? "detach" : "attach") + "Event", evName, _handleEv = function() {
              listener.handleEvent.call(listener);
            };
            for (var i = 0; i < type.length; i++) {
              evName = type[i];
              if (evName) {
                if (typeof listener === "object" && listener.handleEvent) {
                  if (!unbind) {
                    listener["oldIE" + evName] = _handleEv;
                  } else {
                    if (!listener["oldIE" + evName]) {
                      return false;
                    }
                  }
                  target[methodName]("on" + evName, listener["oldIE" + evName]);
                } else {
                  target[methodName]("on" + evName, listener);
                }
              }
            }
          };
        }
        var self = this;
        var DOUBLE_TAP_RADIUS = 25, NUM_HOLDERS = 3;
        var _options = {
          allowPanToNext: true,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: false,
          loop: true,
          pinchToClose: true,
          closeOnScroll: true,
          closeOnVerticalDrag: true,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: false,
          focus: true,
          escKey: true,
          arrowKeys: true,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function(el) {
            return el.tagName === "A";
          },
          getDoubleTapZoom: function(isMouseClick, item) {
            if (isMouseClick) {
              return 1;
            } else {
              return item.initialZoomLevel < 0.7 ? 1 : 1.33;
            }
          },
          maxSpreadZoom: 1.33,
          modal: true,
          scaleMode: "fit"
        };
        framework.extend(_options, options);
        var _getEmptyPoint = function() {
          return { x: 0, y: 0 };
        };
        var _isOpen, _isDestroying, _closedByScroll, _currentItemIndex, _containerStyle, _containerShiftIndex, _currPanDist = _getEmptyPoint(), _startPanOffset = _getEmptyPoint(), _panOffset = _getEmptyPoint(), _upMoveEvents, _downEvents, _globalEventHandlers, _viewportSize = {}, _currZoomLevel, _startZoomLevel, _translatePrefix, _translateSufix, _updateSizeInterval, _itemsNeedUpdate, _currPositionIndex = 0, _offset = {}, _slideSize = _getEmptyPoint(), _itemHolders, _prevItemIndex, _indexDiff = 0, _dragStartEvent, _dragMoveEvent, _dragEndEvent, _dragCancelEvent, _transformKey, _pointerEventEnabled, _isFixedPosition = true, _likelyTouchDevice, _modules = [], _requestAF, _cancelAF, _initalClassName, _initalWindowScrollY, _oldIE, _currentWindowScrollY, _features, _windowVisibleSize = {}, _renderMaxResolution = false, _orientationChangeTimeout, _registerModule = function(name, module2) {
          framework.extend(self, module2.publicMethods);
          _modules.push(name);
        }, _getLoopedId = function(index) {
          var numSlides = _getNumItems();
          if (index > numSlides - 1) {
            return index - numSlides;
          } else if (index < 0) {
            return numSlides + index;
          }
          return index;
        }, _listeners = {}, _listen = function(name, fn) {
          if (!_listeners[name]) {
            _listeners[name] = [];
          }
          return _listeners[name].push(fn);
        }, _shout = function(name) {
          var listeners = _listeners[name];
          if (listeners) {
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            for (var i = 0; i < listeners.length; i++) {
              listeners[i].apply(self, args);
            }
          }
        }, _getCurrentTime = function() {
          return new Date().getTime();
        }, _applyBgOpacity = function(opacity) {
          _bgOpacity = opacity;
          self.bg.style.opacity = opacity * _options.bgOpacity;
        }, _applyZoomTransform = function(styleObj, x, y, zoom, item) {
          if (!_renderMaxResolution || item && item !== self.currItem) {
            zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
          }
          styleObj[_transformKey] = _translatePrefix + x + "px, " + y + "px" + _translateSufix + " scale(" + zoom + ")";
        }, _applyCurrentZoomPan = function(allowRenderResolution) {
          if (_currZoomElementStyle) {
            if (allowRenderResolution) {
              if (_currZoomLevel > self.currItem.fitRatio) {
                if (!_renderMaxResolution) {
                  _setImageSize(self.currItem, false, true);
                  _renderMaxResolution = true;
                }
              } else {
                if (_renderMaxResolution) {
                  _setImageSize(self.currItem);
                  _renderMaxResolution = false;
                }
              }
            }
            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
          }
        }, _applyZoomPanToItem = function(item) {
          if (item.container) {
            _applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel, item);
          }
        }, _setTranslateX = function(x, elStyle) {
          elStyle[_transformKey] = _translatePrefix + x + "px, 0px" + _translateSufix;
        }, _moveMainScroll = function(x, dragging) {
          if (!_options.loop && dragging) {
            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x, delta2 = Math.round(x - _mainScrollPos.x);
            if (newSlideIndexOffset < 0 && delta2 > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta2 < 0) {
              x = _mainScrollPos.x + delta2 * _options.mainScrollEndFriction;
            }
          }
          _mainScrollPos.x = x;
          _setTranslateX(x, _containerStyle);
        }, _calculatePanOffset = function(axis, zoomLevel) {
          var m = _midZoomPoint[axis] - _offset[axis];
          return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
        }, _equalizePoints = function(p1, p22) {
          p1.x = p22.x;
          p1.y = p22.y;
          if (p22.id) {
            p1.id = p22.id;
          }
        }, _roundPoint = function(p3) {
          p3.x = Math.round(p3.x);
          p3.y = Math.round(p3.y);
        }, _mouseMoveTimeout = null, _onFirstMouseMove = function() {
          if (_mouseMoveTimeout) {
            framework.unbind(document, "mousemove", _onFirstMouseMove);
            framework.addClass(template, "pswp--has_mouse");
            _options.mouseUsed = true;
            _shout("mouseUsed");
          }
          _mouseMoveTimeout = setTimeout(function() {
            _mouseMoveTimeout = null;
          }, 100);
        }, _bindEvents = function() {
          framework.bind(document, "keydown", self);
          if (_features.transform) {
            framework.bind(self.scrollWrap, "click", self);
          }
          if (!_options.mouseUsed) {
            framework.bind(document, "mousemove", _onFirstMouseMove);
          }
          framework.bind(window, "resize scroll orientationchange", self);
          _shout("bindEvents");
        }, _unbindEvents = function() {
          framework.unbind(window, "resize scroll orientationchange", self);
          framework.unbind(window, "scroll", _globalEventHandlers.scroll);
          framework.unbind(document, "keydown", self);
          framework.unbind(document, "mousemove", _onFirstMouseMove);
          if (_features.transform) {
            framework.unbind(self.scrollWrap, "click", self);
          }
          if (_isDragging) {
            framework.unbind(window, _upMoveEvents, self);
          }
          clearTimeout(_orientationChangeTimeout);
          _shout("unbindEvents");
        }, _calculatePanBounds = function(zoomLevel, update) {
          var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
          if (update) {
            _currPanBounds = bounds;
          }
          return bounds;
        }, _getMinZoomLevel = function(item) {
          if (!item) {
            item = self.currItem;
          }
          return item.initialZoomLevel;
        }, _getMaxZoomLevel = function(item) {
          if (!item) {
            item = self.currItem;
          }
          return item.w > 0 ? _options.maxSpreadZoom : 1;
        }, _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
          if (destZoomLevel === self.currItem.initialZoomLevel) {
            destPanOffset[axis] = self.currItem.initialPosition[axis];
            return true;
          } else {
            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);
            if (destPanOffset[axis] > destPanBounds.min[axis]) {
              destPanOffset[axis] = destPanBounds.min[axis];
              return true;
            } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
              destPanOffset[axis] = destPanBounds.max[axis];
              return true;
            }
          }
          return false;
        }, _setupTransforms = function() {
          if (_transformKey) {
            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
            _translatePrefix = "translate" + (allow3dTransform ? "3d(" : "(");
            _translateSufix = _features.perspective ? ", 0px)" : ")";
            return;
          }
          _transformKey = "left";
          framework.addClass(template, "pswp--ie");
          _setTranslateX = function(x, elStyle) {
            elStyle.left = x + "px";
          };
          _applyZoomPanToItem = function(item) {
            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, s = item.container.style, w = zoomRatio * item.w, h = zoomRatio * item.h;
            s.width = w + "px";
            s.height = h + "px";
            s.left = item.initialPosition.x + "px";
            s.top = item.initialPosition.y + "px";
          };
          _applyCurrentZoomPan = function() {
            if (_currZoomElementStyle) {
              var s = _currZoomElementStyle, item = self.currItem, zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, w = zoomRatio * item.w, h = zoomRatio * item.h;
              s.width = w + "px";
              s.height = h + "px";
              s.left = _panOffset.x + "px";
              s.top = _panOffset.y + "px";
            }
          };
        }, _onKeyDown = function(e) {
          var keydownAction = "";
          if (_options.escKey && e.keyCode === 27) {
            keydownAction = "close";
          } else if (_options.arrowKeys) {
            if (e.keyCode === 37) {
              keydownAction = "prev";
            } else if (e.keyCode === 39) {
              keydownAction = "next";
            }
          }
          if (keydownAction) {
            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
              self[keydownAction]();
            }
          }
        }, _onGlobalClick = function(e) {
          if (!e) {
            return;
          }
          if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
            e.preventDefault();
            e.stopPropagation();
          }
        }, _updatePageScrollOffset = function() {
          self.setScrollOffset(0, framework.getScrollY());
        };
        var _animations = {}, _numAnimations = 0, _stopAnimation = function(name) {
          if (_animations[name]) {
            if (_animations[name].raf) {
              _cancelAF(_animations[name].raf);
            }
            _numAnimations--;
            delete _animations[name];
          }
        }, _registerStartAnimation = function(name) {
          if (_animations[name]) {
            _stopAnimation(name);
          }
          if (!_animations[name]) {
            _numAnimations++;
            _animations[name] = {};
          }
        }, _stopAllAnimations = function() {
          for (var prop in _animations) {
            if (_animations.hasOwnProperty(prop)) {
              _stopAnimation(prop);
            }
          }
        }, _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
          var startAnimTime = _getCurrentTime(), t;
          _registerStartAnimation(name);
          var animloop = function() {
            if (_animations[name]) {
              t = _getCurrentTime() - startAnimTime;
              if (t >= d) {
                _stopAnimation(name);
                onUpdate(endProp);
                if (onComplete) {
                  onComplete();
                }
                return;
              }
              onUpdate((endProp - b) * easingFn(t / d) + b);
              _animations[name].raf = _requestAF(animloop);
            }
          };
          animloop();
        };
        var publicMethods = {
          shout: _shout,
          listen: _listen,
          viewportSize: _viewportSize,
          options: _options,
          isMainScrollAnimating: function() {
            return _mainScrollAnimating;
          },
          getZoomLevel: function() {
            return _currZoomLevel;
          },
          getCurrentIndex: function() {
            return _currentItemIndex;
          },
          isDragging: function() {
            return _isDragging;
          },
          isZooming: function() {
            return _isZooming;
          },
          setScrollOffset: function(x, y) {
            _offset.x = x;
            _currentWindowScrollY = _offset.y = y;
            _shout("updateScrollOffset", _offset);
          },
          applyZoomPan: function(zoomLevel, panX, panY, allowRenderResolution) {
            _panOffset.x = panX;
            _panOffset.y = panY;
            _currZoomLevel = zoomLevel;
            _applyCurrentZoomPan(allowRenderResolution);
          },
          init: function() {
            if (_isOpen || _isDestroying) {
              return;
            }
            var i;
            self.framework = framework;
            self.template = template;
            self.bg = framework.getChildByClass(template, "pswp__bg");
            _initalClassName = template.className;
            _isOpen = true;
            _features = framework.detectFeatures();
            _requestAF = _features.raf;
            _cancelAF = _features.caf;
            _transformKey = _features.transform;
            _oldIE = _features.oldIE;
            self.scrollWrap = framework.getChildByClass(template, "pswp__scroll-wrap");
            self.container = framework.getChildByClass(self.scrollWrap, "pswp__container");
            _containerStyle = self.container.style;
            self.itemHolders = _itemHolders = [
              { el: self.container.children[0], wrap: 0, index: -1 },
              { el: self.container.children[1], wrap: 0, index: -1 },
              { el: self.container.children[2], wrap: 0, index: -1 }
            ];
            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "none";
            _setupTransforms();
            _globalEventHandlers = {
              resize: self.updateSize,
              orientationchange: function() {
                clearTimeout(_orientationChangeTimeout);
                _orientationChangeTimeout = setTimeout(function() {
                  if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                    self.updateSize();
                  }
                }, 500);
              },
              scroll: _updatePageScrollOffset,
              keydown: _onKeyDown,
              click: _onGlobalClick
            };
            var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
            if (!_features.animationName || !_features.transform || oldPhone) {
              _options.showAnimationDuration = _options.hideAnimationDuration = 0;
            }
            for (i = 0; i < _modules.length; i++) {
              self["init" + _modules[i]]();
            }
            if (UiClass) {
              var ui = self.ui = new UiClass(self, framework);
              ui.init();
            }
            _shout("firstUpdate");
            _currentItemIndex = _currentItemIndex || _options.index || 0;
            if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
              _currentItemIndex = 0;
            }
            self.currItem = _getItemAt(_currentItemIndex);
            if (_features.isOldIOSPhone || _features.isOldAndroid) {
              _isFixedPosition = false;
            }
            template.setAttribute("aria-hidden", "false");
            if (_options.modal) {
              if (!_isFixedPosition) {
                template.style.position = "absolute";
                template.style.top = framework.getScrollY() + "px";
              } else {
                template.style.position = "fixed";
              }
            }
            if (_currentWindowScrollY === void 0) {
              _shout("initialLayout");
              _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
            }
            var rootClasses = "pswp--open ";
            if (_options.mainClass) {
              rootClasses += _options.mainClass + " ";
            }
            if (_options.showHideOpacity) {
              rootClasses += "pswp--animate_opacity ";
            }
            rootClasses += _likelyTouchDevice ? "pswp--touch" : "pswp--notouch";
            rootClasses += _features.animationName ? " pswp--css_animation" : "";
            rootClasses += _features.svg ? " pswp--svg" : "";
            framework.addClass(template, rootClasses);
            self.updateSize();
            _containerShiftIndex = -1;
            _indexDiff = null;
            for (i = 0; i < NUM_HOLDERS; i++) {
              _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
            }
            if (!_oldIE) {
              framework.bind(self.scrollWrap, _downEvents, self);
            }
            _listen("initialZoomInEnd", function() {
              self.setContent(_itemHolders[0], _currentItemIndex - 1);
              self.setContent(_itemHolders[2], _currentItemIndex + 1);
              _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "block";
              if (_options.focus) {
                template.focus();
              }
              _bindEvents();
            });
            self.setContent(_itemHolders[1], _currentItemIndex);
            self.updateCurrItem();
            _shout("afterInit");
            if (!_isFixedPosition) {
              _updateSizeInterval = setInterval(function() {
                if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
                  self.updateSize();
                }
              }, 1e3);
            }
            framework.addClass(template, "pswp--visible");
          },
          close: function() {
            if (!_isOpen) {
              return;
            }
            _isOpen = false;
            _isDestroying = true;
            _shout("close");
            _unbindEvents();
            _showOrHide(self.currItem, null, true, self.destroy);
          },
          destroy: function() {
            _shout("destroy");
            if (_showOrHideTimeout) {
              clearTimeout(_showOrHideTimeout);
            }
            template.setAttribute("aria-hidden", "true");
            template.className = _initalClassName;
            if (_updateSizeInterval) {
              clearInterval(_updateSizeInterval);
            }
            framework.unbind(self.scrollWrap, _downEvents, self);
            framework.unbind(window, "scroll", self);
            _stopDragUpdateLoop();
            _stopAllAnimations();
            _listeners = null;
          },
          panTo: function(x, y, force) {
            if (!force) {
              if (x > _currPanBounds.min.x) {
                x = _currPanBounds.min.x;
              } else if (x < _currPanBounds.max.x) {
                x = _currPanBounds.max.x;
              }
              if (y > _currPanBounds.min.y) {
                y = _currPanBounds.min.y;
              } else if (y < _currPanBounds.max.y) {
                y = _currPanBounds.max.y;
              }
            }
            _panOffset.x = x;
            _panOffset.y = y;
            _applyCurrentZoomPan();
          },
          handleEvent: function(e) {
            e = e || window.event;
            if (_globalEventHandlers[e.type]) {
              _globalEventHandlers[e.type](e);
            }
          },
          goTo: function(index) {
            index = _getLoopedId(index);
            var diff = index - _currentItemIndex;
            _indexDiff = diff;
            _currentItemIndex = index;
            self.currItem = _getItemAt(_currentItemIndex);
            _currPositionIndex -= diff;
            _moveMainScroll(_slideSize.x * _currPositionIndex);
            _stopAllAnimations();
            _mainScrollAnimating = false;
            self.updateCurrItem();
          },
          next: function() {
            self.goTo(_currentItemIndex + 1);
          },
          prev: function() {
            self.goTo(_currentItemIndex - 1);
          },
          updateCurrZoomItem: function(emulateSetContent) {
            if (emulateSetContent) {
              _shout("beforeChange", 0);
            }
            if (_itemHolders[1].el.children.length) {
              var zoomElement = _itemHolders[1].el.children[0];
              if (framework.hasClass(zoomElement, "pswp__zoom-wrap")) {
                _currZoomElementStyle = zoomElement.style;
              } else {
                _currZoomElementStyle = null;
              }
            } else {
              _currZoomElementStyle = null;
            }
            _currPanBounds = self.currItem.bounds;
            _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
            _panOffset.x = _currPanBounds.center.x;
            _panOffset.y = _currPanBounds.center.y;
            if (emulateSetContent) {
              _shout("afterChange");
            }
          },
          invalidateCurrItems: function() {
            _itemsNeedUpdate = true;
            for (var i = 0; i < NUM_HOLDERS; i++) {
              if (_itemHolders[i].item) {
                _itemHolders[i].item.needsUpdate = true;
              }
            }
          },
          updateCurrItem: function(beforeAnimation) {
            if (_indexDiff === 0) {
              return;
            }
            var diffAbs = Math.abs(_indexDiff), tempHolder;
            if (beforeAnimation && diffAbs < 2) {
              return;
            }
            self.currItem = _getItemAt(_currentItemIndex);
            _renderMaxResolution = false;
            _shout("beforeChange", _indexDiff);
            if (diffAbs >= NUM_HOLDERS) {
              _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
              diffAbs = NUM_HOLDERS;
            }
            for (var i = 0; i < diffAbs; i++) {
              if (_indexDiff > 0) {
                tempHolder = _itemHolders.shift();
                _itemHolders[NUM_HOLDERS - 1] = tempHolder;
                _containerShiftIndex++;
                _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
                self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
              } else {
                tempHolder = _itemHolders.pop();
                _itemHolders.unshift(tempHolder);
                _containerShiftIndex--;
                _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
                self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
              }
            }
            if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
              var prevItem = _getItemAt(_prevItemIndex);
              if (prevItem.initialZoomLevel !== _currZoomLevel) {
                _calculateItemSize(prevItem, _viewportSize);
                _setImageSize(prevItem);
                _applyZoomPanToItem(prevItem);
              }
            }
            _indexDiff = 0;
            self.updateCurrZoomItem();
            _prevItemIndex = _currentItemIndex;
            _shout("afterChange");
          },
          updateSize: function(force) {
            if (!_isFixedPosition && _options.modal) {
              var windowScrollY = framework.getScrollY();
              if (_currentWindowScrollY !== windowScrollY) {
                template.style.top = windowScrollY + "px";
                _currentWindowScrollY = windowScrollY;
              }
              if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                return;
              }
              _windowVisibleSize.x = window.innerWidth;
              _windowVisibleSize.y = window.innerHeight;
              template.style.height = _windowVisibleSize.y + "px";
            }
            _viewportSize.x = self.scrollWrap.clientWidth;
            _viewportSize.y = self.scrollWrap.clientHeight;
            _updatePageScrollOffset();
            _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
            _slideSize.y = _viewportSize.y;
            _moveMainScroll(_slideSize.x * _currPositionIndex);
            _shout("beforeResize");
            if (_containerShiftIndex !== void 0) {
              var holder, item, hIndex;
              for (var i = 0; i < NUM_HOLDERS; i++) {
                holder = _itemHolders[i];
                _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);
                hIndex = _currentItemIndex + i - 1;
                if (_options.loop && _getNumItems() > 2) {
                  hIndex = _getLoopedId(hIndex);
                }
                item = _getItemAt(hIndex);
                if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
                  self.cleanSlide(item);
                  self.setContent(holder, hIndex);
                  if (i === 1) {
                    self.currItem = item;
                    self.updateCurrZoomItem(true);
                  }
                  item.needsUpdate = false;
                } else if (holder.index === -1 && hIndex >= 0) {
                  self.setContent(holder, hIndex);
                }
                if (item && item.container) {
                  _calculateItemSize(item, _viewportSize);
                  _setImageSize(item);
                  _applyZoomPanToItem(item);
                }
              }
              _itemsNeedUpdate = false;
            }
            _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
            _currPanBounds = self.currItem.bounds;
            if (_currPanBounds) {
              _panOffset.x = _currPanBounds.center.x;
              _panOffset.y = _currPanBounds.center.y;
              _applyCurrentZoomPan(true);
            }
            _shout("resize");
          },
          zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
            if (centerPoint) {
              _startZoomLevel = _currZoomLevel;
              _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
              _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
              _equalizePoints(_startPanOffset, _panOffset);
            }
            var destPanBounds = _calculatePanBounds(destZoomLevel, false), destPanOffset = {};
            _modifyDestPanOffset("x", destPanBounds, destPanOffset, destZoomLevel);
            _modifyDestPanOffset("y", destPanBounds, destPanOffset, destZoomLevel);
            var initialZoomLevel = _currZoomLevel;
            var initialPanOffset = {
              x: _panOffset.x,
              y: _panOffset.y
            };
            _roundPoint(destPanOffset);
            var onUpdate = function(now) {
              if (now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = destPanOffset.x;
                _panOffset.y = destPanOffset.y;
              } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
              }
              if (updateFn) {
                updateFn(now);
              }
              _applyCurrentZoomPan(now === 1);
            };
            if (speed) {
              _animateProp("customZoomTo", 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
            } else {
              onUpdate(1);
            }
          }
        };
        var MIN_SWIPE_DISTANCE = 30, DIRECTION_CHECK_OFFSET = 10;
        var _gestureStartTime, _gestureCheckSpeedTime, p = {}, p2 = {}, delta = {}, _currPoint = {}, _startPoint = {}, _currPointers = [], _startMainScrollPos = {}, _releaseAnimData, _posPoints = [], _tempPoint = {}, _isZoomingIn, _verticalDragInitiated, _oldAndroidTouchEndTimeout, _currZoomedItemIndex = 0, _centerPoint = _getEmptyPoint(), _lastReleaseTime = 0, _isDragging, _isMultitouch, _zoomStarted, _moved, _dragAnimFrame, _mainScrollShifted, _currentPoints, _isZooming, _currPointsDistance, _startPointsDistance, _currPanBounds, _mainScrollPos = _getEmptyPoint(), _currZoomElementStyle, _mainScrollAnimating, _midZoomPoint = _getEmptyPoint(), _currCenterPoint = _getEmptyPoint(), _direction, _isFirstMove, _opacityChanged, _bgOpacity, _wasOverInitialZoom, _isEqualPoints = function(p1, p22) {
          return p1.x === p22.x && p1.y === p22.y;
        }, _isNearbyPoints = function(touch0, touch1) {
          return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
        }, _calculatePointsDistance = function(p1, p22) {
          _tempPoint.x = Math.abs(p1.x - p22.x);
          _tempPoint.y = Math.abs(p1.y - p22.y);
          return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
        }, _stopDragUpdateLoop = function() {
          if (_dragAnimFrame) {
            _cancelAF(_dragAnimFrame);
            _dragAnimFrame = null;
          }
        }, _dragUpdateLoop = function() {
          if (_isDragging) {
            _dragAnimFrame = _requestAF(_dragUpdateLoop);
            _renderMovement();
          }
        }, _canPan = function() {
          return !(_options.scaleMode === "fit" && _currZoomLevel === self.currItem.initialZoomLevel);
        }, _closestElement = function(el, fn) {
          if (!el || el === document) {
            return false;
          }
          if (el.getAttribute("class") && el.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) {
            return false;
          }
          if (fn(el)) {
            return el;
          }
          return _closestElement(el.parentNode, fn);
        }, _preventObj = {}, _preventDefaultEventBehaviour = function(e, isDown) {
          _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);
          _shout("preventDragEvent", e, isDown, _preventObj);
          return _preventObj.prevent;
        }, _convertTouchToPoint = function(touch, p3) {
          p3.x = touch.pageX;
          p3.y = touch.pageY;
          p3.id = touch.identifier;
          return p3;
        }, _findCenterOfPoints = function(p1, p22, pCenter) {
          pCenter.x = (p1.x + p22.x) * 0.5;
          pCenter.y = (p1.y + p22.y) * 0.5;
        }, _pushPosPoint = function(time, x, y) {
          if (time - _gestureCheckSpeedTime > 50) {
            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
            o.x = x;
            o.y = y;
            _posPoints.push(o);
            _gestureCheckSpeedTime = time;
          }
        }, _calculateVerticalDragOpacityRatio = function() {
          var yOffset = _panOffset.y - self.currItem.initialPosition.y;
          return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
        }, _ePoint1 = {}, _ePoint2 = {}, _tempPointsArr = [], _tempCounter, _getTouchPoints = function(e) {
          while (_tempPointsArr.length > 0) {
            _tempPointsArr.pop();
          }
          if (!_pointerEventEnabled) {
            if (e.type.indexOf("touch") > -1) {
              if (e.touches && e.touches.length > 0) {
                _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                if (e.touches.length > 1) {
                  _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                }
              }
            } else {
              _ePoint1.x = e.pageX;
              _ePoint1.y = e.pageY;
              _ePoint1.id = "";
              _tempPointsArr[0] = _ePoint1;
            }
          } else {
            _tempCounter = 0;
            _currPointers.forEach(function(p3) {
              if (_tempCounter === 0) {
                _tempPointsArr[0] = p3;
              } else if (_tempCounter === 1) {
                _tempPointsArr[1] = p3;
              }
              _tempCounter++;
            });
          }
          return _tempPointsArr;
        }, _panOrMoveMainScroll = function(axis, delta2) {
          var panFriction, overDiff = 0, newOffset = _panOffset[axis] + delta2[axis], startOverDiff, dir = delta2[axis] > 0, newMainScrollPosition = _mainScrollPos.x + delta2.x, mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x, newPanPos, newMainScrollPos;
          if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
            panFriction = _options.panEndFriction;
          } else {
            panFriction = 1;
          }
          newOffset = _panOffset[axis] + delta2[axis] * panFriction;
          if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
            if (!_currZoomElementStyle) {
              newMainScrollPos = newMainScrollPosition;
            } else if (_direction === "h" && axis === "x" && !_zoomStarted) {
              if (dir) {
                if (newOffset > _currPanBounds.min[axis]) {
                  panFriction = _options.panEndFriction;
                  overDiff = _currPanBounds.min[axis] - newOffset;
                  startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                }
                if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                  newMainScrollPos = newMainScrollPosition;
                  if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                    newMainScrollPos = _startMainScrollPos.x;
                  }
                } else {
                  if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                    newPanPos = newOffset;
                  }
                }
              } else {
                if (newOffset < _currPanBounds.max[axis]) {
                  panFriction = _options.panEndFriction;
                  overDiff = newOffset - _currPanBounds.max[axis];
                  startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                }
                if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                  newMainScrollPos = newMainScrollPosition;
                  if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                    newMainScrollPos = _startMainScrollPos.x;
                  }
                } else {
                  if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                    newPanPos = newOffset;
                  }
                }
              }
            }
            if (axis === "x") {
              if (newMainScrollPos !== void 0) {
                _moveMainScroll(newMainScrollPos, true);
                if (newMainScrollPos === _startMainScrollPos.x) {
                  _mainScrollShifted = false;
                } else {
                  _mainScrollShifted = true;
                }
              }
              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                if (newPanPos !== void 0) {
                  _panOffset.x = newPanPos;
                } else if (!_mainScrollShifted) {
                  _panOffset.x += delta2.x * panFriction;
                }
              }
              return newMainScrollPos !== void 0;
            }
          }
          if (!_mainScrollAnimating) {
            if (!_mainScrollShifted) {
              if (_currZoomLevel > self.currItem.fitRatio) {
                _panOffset[axis] += delta2[axis] * panFriction;
              }
            }
          }
        }, _onDragStart = function(e) {
          if (e.type === "mousedown" && e.button > 0) {
            return;
          }
          if (_initialZoomRunning) {
            e.preventDefault();
            return;
          }
          if (_oldAndroidTouchEndTimeout && e.type === "mousedown") {
            return;
          }
          if (_preventDefaultEventBehaviour(e, true)) {
            e.preventDefault();
          }
          _shout("pointerDown");
          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
            if (pointerIndex < 0) {
              pointerIndex = _currPointers.length;
            }
            _currPointers[pointerIndex] = { x: e.pageX, y: e.pageY, id: e.pointerId };
          }
          var startPointsList = _getTouchPoints(e), numPoints = startPointsList.length;
          _currentPoints = null;
          _stopAllAnimations();
          if (!_isDragging || numPoints === 1) {
            _isDragging = _isFirstMove = true;
            framework.bind(window, _upMoveEvents, self);
            _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
            _direction = null;
            _shout("firstTouchStart", startPointsList);
            _equalizePoints(_startPanOffset, _panOffset);
            _currPanDist.x = _currPanDist.y = 0;
            _equalizePoints(_currPoint, startPointsList[0]);
            _equalizePoints(_startPoint, _currPoint);
            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
            _posPoints = [{
              x: _currPoint.x,
              y: _currPoint.y
            }];
            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();
            _calculatePanBounds(_currZoomLevel, true);
            _stopDragUpdateLoop();
            _dragUpdateLoop();
          }
          if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
            _startZoomLevel = _currZoomLevel;
            _zoomStarted = false;
            _isZooming = _isMultitouch = true;
            _currPanDist.y = _currPanDist.x = 0;
            _equalizePoints(_startPanOffset, _panOffset);
            _equalizePoints(p, startPointsList[0]);
            _equalizePoints(p2, startPointsList[1]);
            _findCenterOfPoints(p, p2, _currCenterPoint);
            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
          }
        }, _onDragMove = function(e) {
          e.preventDefault();
          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
            if (pointerIndex > -1) {
              var p3 = _currPointers[pointerIndex];
              p3.x = e.pageX;
              p3.y = e.pageY;
            }
          }
          if (_isDragging) {
            var touchesList = _getTouchPoints(e);
            if (!_direction && !_moved && !_isZooming) {
              if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                _direction = "h";
              } else {
                var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                  _direction = diff > 0 ? "h" : "v";
                  _currentPoints = touchesList;
                }
              }
            } else {
              _currentPoints = touchesList;
            }
          }
        }, _renderMovement = function() {
          if (!_currentPoints) {
            return;
          }
          var numPoints = _currentPoints.length;
          if (numPoints === 0) {
            return;
          }
          _equalizePoints(p, _currentPoints[0]);
          delta.x = p.x - _currPoint.x;
          delta.y = p.y - _currPoint.y;
          if (_isZooming && numPoints > 1) {
            _currPoint.x = p.x;
            _currPoint.y = p.y;
            if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
              return;
            }
            _equalizePoints(p2, _currentPoints[1]);
            if (!_zoomStarted) {
              _zoomStarted = true;
              _shout("zoomGestureStarted");
            }
            var pointsDistance = _calculatePointsDistance(p, p2);
            var zoomLevel = _calculateZoomLevel(pointsDistance);
            if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
              _wasOverInitialZoom = true;
            }
            var zoomFriction = 1, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
            if (zoomLevel < minZoomLevel) {
              if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                var minusDiff = minZoomLevel - zoomLevel;
                var percent = 1 - minusDiff / (minZoomLevel / 1.2);
                _applyBgOpacity(percent);
                _shout("onPinchClose", percent);
                _opacityChanged = true;
              } else {
                zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                if (zoomFriction > 1) {
                  zoomFriction = 1;
                }
                zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
              }
            } else if (zoomLevel > maxZoomLevel) {
              zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
              if (zoomFriction > 1) {
                zoomFriction = 1;
              }
              zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
            }
            if (zoomFriction < 0) {
              zoomFriction = 0;
            }
            _currPointsDistance = pointsDistance;
            _findCenterOfPoints(p, p2, _centerPoint);
            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
            _equalizePoints(_currCenterPoint, _centerPoint);
            _panOffset.x = _calculatePanOffset("x", zoomLevel);
            _panOffset.y = _calculatePanOffset("y", zoomLevel);
            _isZoomingIn = zoomLevel > _currZoomLevel;
            _currZoomLevel = zoomLevel;
            _applyCurrentZoomPan();
          } else {
            if (!_direction) {
              return;
            }
            if (_isFirstMove) {
              _isFirstMove = false;
              if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                delta.x -= _currentPoints[0].x - _startPoint.x;
              }
              if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                delta.y -= _currentPoints[0].y - _startPoint.y;
              }
            }
            _currPoint.x = p.x;
            _currPoint.y = p.y;
            if (delta.x === 0 && delta.y === 0) {
              return;
            }
            if (_direction === "v" && _options.closeOnVerticalDrag) {
              if (!_canPan()) {
                _currPanDist.y += delta.y;
                _panOffset.y += delta.y;
                var opacityRatio = _calculateVerticalDragOpacityRatio();
                _verticalDragInitiated = true;
                _shout("onVerticalDrag", opacityRatio);
                _applyBgOpacity(opacityRatio);
                _applyCurrentZoomPan();
                return;
              }
            }
            _pushPosPoint(_getCurrentTime(), p.x, p.y);
            _moved = true;
            _currPanBounds = self.currItem.bounds;
            var mainScrollChanged = _panOrMoveMainScroll("x", delta);
            if (!mainScrollChanged) {
              _panOrMoveMainScroll("y", delta);
              _roundPoint(_panOffset);
              _applyCurrentZoomPan();
            }
          }
        }, _onDragRelease = function(e) {
          if (_features.isOldAndroid) {
            if (_oldAndroidTouchEndTimeout && e.type === "mouseup") {
              return;
            }
            if (e.type.indexOf("touch") > -1) {
              clearTimeout(_oldAndroidTouchEndTimeout);
              _oldAndroidTouchEndTimeout = setTimeout(function() {
                _oldAndroidTouchEndTimeout = 0;
              }, 600);
            }
          }
          _shout("pointerUp");
          if (_preventDefaultEventBehaviour(e, false)) {
            e.preventDefault();
          }
          var releasePoint;
          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
            if (pointerIndex > -1) {
              releasePoint = _currPointers.splice(pointerIndex, 1)[0];
              if (navigator.msPointerEnabled) {
                var MSPOINTER_TYPES = {
                  4: "mouse",
                  2: "touch",
                  3: "pen"
                };
                releasePoint.type = MSPOINTER_TYPES[e.pointerType];
                if (!releasePoint.type) {
                  releasePoint.type = e.pointerType || "mouse";
                }
              } else {
                releasePoint.type = e.pointerType || "mouse";
              }
            }
          }
          var touchList = _getTouchPoints(e), gestureType, numPoints = touchList.length;
          if (e.type === "mouseup") {
            numPoints = 0;
          }
          if (numPoints === 2) {
            _currentPoints = null;
            return true;
          }
          if (numPoints === 1) {
            _equalizePoints(_startPoint, touchList[0]);
          }
          if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
            if (!releasePoint) {
              if (e.type === "mouseup") {
                releasePoint = { x: e.pageX, y: e.pageY, type: "mouse" };
              } else if (e.changedTouches && e.changedTouches[0]) {
                releasePoint = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" };
              }
            }
            _shout("touchRelease", e, releasePoint);
          }
          var releaseTimeDiff = -1;
          if (numPoints === 0) {
            _isDragging = false;
            framework.unbind(window, _upMoveEvents, self);
            _stopDragUpdateLoop();
            if (_isZooming) {
              releaseTimeDiff = 0;
            } else if (_lastReleaseTime !== -1) {
              releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
            }
          }
          _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
          if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
            gestureType = "zoom";
          } else {
            gestureType = "swipe";
          }
          if (_isZooming && numPoints < 2) {
            _isZooming = false;
            if (numPoints === 1) {
              gestureType = "zoomPointerUp";
            }
            _shout("zoomGestureEnded");
          }
          _currentPoints = null;
          if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
            return;
          }
          _stopAllAnimations();
          if (!_releaseAnimData) {
            _releaseAnimData = _initDragReleaseAnimationData();
          }
          _releaseAnimData.calculateSwipeSpeed("x");
          if (_verticalDragInitiated) {
            var opacityRatio = _calculateVerticalDragOpacityRatio();
            if (opacityRatio < _options.verticalDragRange) {
              self.close();
            } else {
              var initalPanY = _panOffset.y, initialBgOpacity = _bgOpacity;
              _animateProp("verticalDrag", 0, 1, 300, framework.easing.cubic.out, function(now) {
                _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;
                _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
                _applyCurrentZoomPan();
              });
              _shout("onVerticalDrag", 1);
            }
            return;
          }
          if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
            if (itemChanged) {
              return;
            }
            gestureType = "zoomPointerUp";
          }
          if (_mainScrollAnimating) {
            return;
          }
          if (gestureType !== "swipe") {
            _completeZoomGesture();
            return;
          }
          if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
            _completePanGesture(_releaseAnimData);
          }
        }, _initDragReleaseAnimationData = function() {
          var lastFlickDuration, tempReleasePos;
          var s = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function(axis) {
              if (_posPoints.length > 1) {
                lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                tempReleasePos = _posPoints[_posPoints.length - 2][axis];
              } else {
                lastFlickDuration = _getCurrentTime() - _gestureStartTime;
                tempReleasePos = _startPoint[axis];
              }
              s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
              s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
              if (s.lastFlickDist[axis] > 20) {
                s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
              } else {
                s.lastFlickSpeed[axis] = 0;
              }
              if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
                s.lastFlickSpeed[axis] = 0;
              }
              s.slowDownRatio[axis] = 0.95;
              s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
              s.speedDecelerationRatio[axis] = 1;
            },
            calculateOverBoundsAnimOffset: function(axis, speed) {
              if (!s.backAnimStarted[axis]) {
                if (_panOffset[axis] > _currPanBounds.min[axis]) {
                  s.backAnimDestination[axis] = _currPanBounds.min[axis];
                } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                  s.backAnimDestination[axis] = _currPanBounds.max[axis];
                }
                if (s.backAnimDestination[axis] !== void 0) {
                  s.slowDownRatio[axis] = 0.7;
                  s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                  if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                    s.lastFlickSpeed[axis] = 0;
                    s.backAnimStarted[axis] = true;
                    _animateProp("bounceZoomPan" + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function(pos) {
                      _panOffset[axis] = pos;
                      _applyCurrentZoomPan();
                    });
                  }
                }
              }
            },
            calculateAnimOffset: function(axis) {
              if (!s.backAnimStarted[axis]) {
                s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
                s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                _panOffset[axis] += s.distanceOffset[axis];
              }
            },
            panAnimLoop: function() {
              if (_animations.zoomPan) {
                _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
                s.now = _getCurrentTime();
                s.timeDiff = s.now - s.lastNow;
                s.lastNow = s.now;
                s.calculateAnimOffset("x");
                s.calculateAnimOffset("y");
                _applyCurrentZoomPan();
                s.calculateOverBoundsAnimOffset("x");
                s.calculateOverBoundsAnimOffset("y");
                if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
                  _panOffset.x = Math.round(_panOffset.x);
                  _panOffset.y = Math.round(_panOffset.y);
                  _applyCurrentZoomPan();
                  _stopAnimation("zoomPan");
                  return;
                }
              }
            }
          };
          return s;
        }, _completePanGesture = function(animData) {
          animData.calculateSwipeSpeed("y");
          _currPanBounds = self.currItem.bounds;
          animData.backAnimDestination = {};
          animData.backAnimStarted = {};
          if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;
            animData.calculateOverBoundsAnimOffset("x");
            animData.calculateOverBoundsAnimOffset("y");
            return true;
          }
          _registerStartAnimation("zoomPan");
          animData.lastNow = _getCurrentTime();
          animData.panAnimLoop();
        }, _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData2) {
          var itemChanged;
          if (!_mainScrollAnimating) {
            _currZoomedItemIndex = _currentItemIndex;
          }
          var itemsDiff;
          if (gestureType === "swipe") {
            var totalShiftDist = _currPoint.x - _startPoint.x, isFastLastFlick = _releaseAnimData2.lastFlickDist.x < 10;
            if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData2.lastFlickOffset.x > 20)) {
              itemsDiff = -1;
            } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData2.lastFlickOffset.x < -20)) {
              itemsDiff = 1;
            }
          }
          var nextCircle;
          if (itemsDiff) {
            _currentItemIndex += itemsDiff;
            if (_currentItemIndex < 0) {
              _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
              nextCircle = true;
            } else if (_currentItemIndex >= _getNumItems()) {
              _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
              nextCircle = true;
            }
            if (!nextCircle || _options.loop) {
              _indexDiff += itemsDiff;
              _currPositionIndex -= itemsDiff;
              itemChanged = true;
            }
          }
          var animateToX = _slideSize.x * _currPositionIndex;
          var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
          var finishAnimDuration;
          if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData2.lastFlickSpeed.x > 0) {
            finishAnimDuration = 333;
          } else {
            finishAnimDuration = Math.abs(_releaseAnimData2.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData2.lastFlickSpeed.x) : 333;
            finishAnimDuration = Math.min(finishAnimDuration, 400);
            finishAnimDuration = Math.max(finishAnimDuration, 250);
          }
          if (_currZoomedItemIndex === _currentItemIndex) {
            itemChanged = false;
          }
          _mainScrollAnimating = true;
          _shout("mainScrollAnimStart");
          _animateProp("mainScroll", _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function() {
            _stopAllAnimations();
            _mainScrollAnimating = false;
            _currZoomedItemIndex = -1;
            if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
              self.updateCurrItem();
            }
            _shout("mainScrollAnimComplete");
          });
          if (itemChanged) {
            self.updateCurrItem(true);
          }
          return itemChanged;
        }, _calculateZoomLevel = function(touchesDistance) {
          return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
        }, _completeZoomGesture = function() {
          var destZoomLevel = _currZoomLevel, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
          if (_currZoomLevel < minZoomLevel) {
            destZoomLevel = minZoomLevel;
          } else if (_currZoomLevel > maxZoomLevel) {
            destZoomLevel = maxZoomLevel;
          }
          var destOpacity = 1, onUpdate, initialOpacity = _bgOpacity;
          if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
            self.close();
            return true;
          }
          if (_opacityChanged) {
            onUpdate = function(now) {
              _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
            };
          }
          self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
          return true;
        };
        _registerModule("Gestures", {
          publicMethods: {
            initGestures: function() {
              var addEventNames = function(pref, down, move, up, cancel) {
                _dragStartEvent = pref + down;
                _dragMoveEvent = pref + move;
                _dragEndEvent = pref + up;
                if (cancel) {
                  _dragCancelEvent = pref + cancel;
                } else {
                  _dragCancelEvent = "";
                }
              };
              _pointerEventEnabled = _features.pointerEvent;
              if (_pointerEventEnabled && _features.touch) {
                _features.touch = false;
              }
              if (_pointerEventEnabled) {
                if (navigator.msPointerEnabled) {
                  addEventNames("MSPointer", "Down", "Move", "Up", "Cancel");
                } else {
                  addEventNames("pointer", "down", "move", "up", "cancel");
                }
              } else if (_features.touch) {
                addEventNames("touch", "start", "move", "end", "cancel");
                _likelyTouchDevice = true;
              } else {
                addEventNames("mouse", "down", "move", "up");
              }
              _upMoveEvents = _dragMoveEvent + " " + _dragEndEvent + " " + _dragCancelEvent;
              _downEvents = _dragStartEvent;
              if (_pointerEventEnabled && !_likelyTouchDevice) {
                _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
              }
              self.likelyTouchDevice = _likelyTouchDevice;
              _globalEventHandlers[_dragStartEvent] = _onDragStart;
              _globalEventHandlers[_dragMoveEvent] = _onDragMove;
              _globalEventHandlers[_dragEndEvent] = _onDragRelease;
              if (_dragCancelEvent) {
                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
              }
              if (_features.touch) {
                _downEvents += " mousedown";
                _upMoveEvents += " mousemove mouseup";
                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
              }
              if (!_likelyTouchDevice) {
                _options.allowPanToNext = false;
              }
            }
          }
        });
        var _showOrHideTimeout, _showOrHide = function(item, img, out, completeFn) {
          if (_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
          }
          _initialZoomRunning = true;
          _initialContentSet = true;
          var thumbBounds;
          if (item.initialLayout) {
            thumbBounds = item.initialLayout;
            item.initialLayout = null;
          } else {
            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
          }
          var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;
          var onComplete = function() {
            _stopAnimation("initialZoom");
            if (!out) {
              _applyBgOpacity(1);
              if (img) {
                img.style.display = "block";
              }
              framework.addClass(template, "pswp--animated-in");
              _shout("initialZoom" + (out ? "OutEnd" : "InEnd"));
            } else {
              self.template.removeAttribute("style");
              self.bg.removeAttribute("style");
            }
            if (completeFn) {
              completeFn();
            }
            _initialZoomRunning = false;
          };
          if (!duration || !thumbBounds || thumbBounds.x === void 0) {
            _shout("initialZoom" + (out ? "Out" : "In"));
            _currZoomLevel = item.initialZoomLevel;
            _equalizePoints(_panOffset, item.initialPosition);
            _applyCurrentZoomPan();
            template.style.opacity = out ? 0 : 1;
            _applyBgOpacity(1);
            if (duration) {
              setTimeout(function() {
                onComplete();
              }, duration);
            } else {
              onComplete();
            }
            return;
          }
          var startAnimation = function() {
            var closeWithRaf = _closedByScroll, fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
            if (item.miniImg) {
              item.miniImg.style.webkitBackfaceVisibility = "hidden";
            }
            if (!out) {
              _currZoomLevel = thumbBounds.w / item.w;
              _panOffset.x = thumbBounds.x;
              _panOffset.y = thumbBounds.y - _initalWindowScrollY;
              self[fadeEverything ? "template" : "bg"].style.opacity = 1e-3;
              _applyCurrentZoomPan();
            }
            _registerStartAnimation("initialZoom");
            if (out && !closeWithRaf) {
              framework.removeClass(template, "pswp--animated-in");
            }
            if (fadeEverything) {
              if (out) {
                framework[(closeWithRaf ? "remove" : "add") + "Class"](template, "pswp--animate_opacity");
              } else {
                setTimeout(function() {
                  framework.addClass(template, "pswp--animate_opacity");
                }, 30);
              }
            }
            _showOrHideTimeout = setTimeout(function() {
              _shout("initialZoom" + (out ? "Out" : "In"));
              if (!out) {
                _currZoomLevel = item.initialZoomLevel;
                _equalizePoints(_panOffset, item.initialPosition);
                _applyCurrentZoomPan();
                _applyBgOpacity(1);
                if (fadeEverything) {
                  template.style.opacity = 1;
                } else {
                  _applyBgOpacity(1);
                }
                _showOrHideTimeout = setTimeout(onComplete, duration + 20);
              } else {
                var destZoomLevel = thumbBounds.w / item.w, initialPanOffset = {
                  x: _panOffset.x,
                  y: _panOffset.y
                }, initialZoomLevel = _currZoomLevel, initalBgOpacity = _bgOpacity, onUpdate = function(now) {
                  if (now === 1) {
                    _currZoomLevel = destZoomLevel;
                    _panOffset.x = thumbBounds.x;
                    _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                  } else {
                    _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                    _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                    _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                  }
                  _applyCurrentZoomPan();
                  if (fadeEverything) {
                    template.style.opacity = 1 - now;
                  } else {
                    _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                  }
                };
                if (closeWithRaf) {
                  _animateProp("initialZoom", 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                } else {
                  onUpdate(1);
                  _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                }
              }
            }, out ? 25 : 90);
          };
          startAnimation();
        };
        var _items, _tempPanAreaSize = {}, _imagesToAppendPool = [], _initialContentSet, _initialZoomRunning, _controllerDefaultOptions = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: false,
          preload: [1, 1],
          getNumItemsFn: function() {
            return _items.length;
          }
        };
        var _getItemAt, _getNumItems, _initialIsLoop, _getZeroBounds = function() {
          return {
            center: { x: 0, y: 0 },
            max: { x: 0, y: 0 },
            min: { x: 0, y: 0 }
          };
        }, _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH) {
          var bounds = item.bounds;
          bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
          bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;
          bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
          bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y;
          bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
          bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
        }, _calculateItemSize = function(item, viewportSize, zoomLevel) {
          if (item.src && !item.loadError) {
            var isInitial = !zoomLevel;
            if (isInitial) {
              if (!item.vGap) {
                item.vGap = { top: 0, bottom: 0 };
              }
              _shout("parseVerticalMargin", item);
            }
            _tempPanAreaSize.x = viewportSize.x;
            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;
            if (isInitial) {
              var hRatio = _tempPanAreaSize.x / item.w;
              var vRatio = _tempPanAreaSize.y / item.h;
              item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
              var scaleMode = _options.scaleMode;
              if (scaleMode === "orig") {
                zoomLevel = 1;
              } else if (scaleMode === "fit") {
                zoomLevel = item.fitRatio;
              }
              if (zoomLevel > 1) {
                zoomLevel = 1;
              }
              item.initialZoomLevel = zoomLevel;
              if (!item.bounds) {
                item.bounds = _getZeroBounds();
              }
            }
            if (!zoomLevel) {
              return;
            }
            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
            if (isInitial && zoomLevel === item.initialZoomLevel) {
              item.initialPosition = item.bounds.center;
            }
            return item.bounds;
          } else {
            item.w = item.h = 0;
            item.initialZoomLevel = item.fitRatio = 1;
            item.bounds = _getZeroBounds();
            item.initialPosition = item.bounds.center;
            return item.bounds;
          }
        }, _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
          if (item.loadError) {
            return;
          }
          if (img) {
            item.imageAppended = true;
            _setImageSize(item, img, item === self.currItem && _renderMaxResolution);
            baseDiv.appendChild(img);
            if (keepPlaceholder) {
              setTimeout(function() {
                if (item && item.loaded && item.placeholder) {
                  item.placeholder.style.display = "none";
                  item.placeholder = null;
                }
              }, 500);
            }
          }
        }, _preloadImage = function(item) {
          item.loading = true;
          item.loaded = false;
          var img = item.img = framework.createEl("pswp__img", "img");
          var onComplete = function() {
            item.loading = false;
            item.loaded = true;
            if (item.loadComplete) {
              item.loadComplete(item);
            } else {
              item.img = null;
            }
            img.onload = img.onerror = null;
            img = null;
          };
          img.onload = onComplete;
          img.onerror = function() {
            item.loadError = true;
            onComplete();
          };
          img.src = item.src;
          return img;
        }, _checkForError = function(item, cleanUp) {
          if (item.src && item.loadError && item.container) {
            if (cleanUp) {
              item.container.innerHTML = "";
            }
            item.container.innerHTML = _options.errorMsg.replace("%url%", item.src);
            return true;
          }
        }, _setImageSize = function(item, img, maxRes) {
          if (!item.src) {
            return;
          }
          if (!img) {
            img = item.container.lastChild;
          }
          var w = maxRes ? item.w : Math.round(item.w * item.fitRatio), h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
          if (item.placeholder && !item.loaded) {
            item.placeholder.style.width = w + "px";
            item.placeholder.style.height = h + "px";
          }
          img.style.width = w + "px";
          img.style.height = h + "px";
        }, _appendImagesPool = function() {
          if (_imagesToAppendPool.length) {
            var poolItem;
            for (var i = 0; i < _imagesToAppendPool.length; i++) {
              poolItem = _imagesToAppendPool[i];
              if (poolItem.holder.index === poolItem.index) {
                _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
              }
            }
            _imagesToAppendPool = [];
          }
        };
        _registerModule("Controller", {
          publicMethods: {
            lazyLoadItem: function(index) {
              index = _getLoopedId(index);
              var item = _getItemAt(index);
              if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
                return;
              }
              _shout("gettingData", index, item);
              if (!item.src) {
                return;
              }
              _preloadImage(item);
            },
            initController: function() {
              framework.extend(_options, _controllerDefaultOptions, true);
              self.items = _items = items;
              _getItemAt = self.getItemAt;
              _getNumItems = _options.getNumItemsFn;
              _initialIsLoop = _options.loop;
              if (_getNumItems() < 3) {
                _options.loop = false;
              }
              _listen("beforeChange", function(diff) {
                var p3 = _options.preload, isNext = diff === null ? true : diff >= 0, preloadBefore = Math.min(p3[0], _getNumItems()), preloadAfter = Math.min(p3[1], _getNumItems()), i;
                for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                  self.lazyLoadItem(_currentItemIndex + i);
                }
                for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                  self.lazyLoadItem(_currentItemIndex - i);
                }
              });
              _listen("initialLayout", function() {
                self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
              });
              _listen("mainScrollAnimComplete", _appendImagesPool);
              _listen("initialZoomInEnd", _appendImagesPool);
              _listen("destroy", function() {
                var item;
                for (var i = 0; i < _items.length; i++) {
                  item = _items[i];
                  if (item.container) {
                    item.container = null;
                  }
                  if (item.placeholder) {
                    item.placeholder = null;
                  }
                  if (item.img) {
                    item.img = null;
                  }
                  if (item.preloader) {
                    item.preloader = null;
                  }
                  if (item.loadError) {
                    item.loaded = item.loadError = false;
                  }
                }
                _imagesToAppendPool = null;
              });
            },
            getItemAt: function(index) {
              if (index >= 0) {
                return _items[index] !== void 0 ? _items[index] : false;
              }
              return false;
            },
            allowProgressiveImg: function() {
              return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
            },
            setContent: function(holder, index) {
              if (_options.loop) {
                index = _getLoopedId(index);
              }
              var prevItem = self.getItemAt(holder.index);
              if (prevItem) {
                prevItem.container = null;
              }
              var item = self.getItemAt(index), img;
              if (!item) {
                holder.el.innerHTML = "";
                return;
              }
              _shout("gettingData", index, item);
              holder.index = index;
              holder.item = item;
              var baseDiv = item.container = framework.createEl("pswp__zoom-wrap");
              if (!item.src && item.html) {
                if (item.html.tagName) {
                  baseDiv.appendChild(item.html);
                } else {
                  baseDiv.innerHTML = item.html;
                }
              }
              _checkForError(item);
              _calculateItemSize(item, _viewportSize);
              if (item.src && !item.loadError && !item.loaded) {
                item.loadComplete = function(item2) {
                  if (!_isOpen) {
                    return;
                  }
                  if (holder && holder.index === index) {
                    if (_checkForError(item2, true)) {
                      item2.loadComplete = item2.img = null;
                      _calculateItemSize(item2, _viewportSize);
                      _applyZoomPanToItem(item2);
                      if (holder.index === _currentItemIndex) {
                        self.updateCurrZoomItem();
                      }
                      return;
                    }
                    if (!item2.imageAppended) {
                      if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                        _imagesToAppendPool.push({
                          item: item2,
                          baseDiv,
                          img: item2.img,
                          index,
                          holder,
                          clearPlaceholder: true
                        });
                      } else {
                        _appendImage(index, item2, baseDiv, item2.img, _mainScrollAnimating || _initialZoomRunning, true);
                      }
                    } else {
                      if (!_initialZoomRunning && item2.placeholder) {
                        item2.placeholder.style.display = "none";
                        item2.placeholder = null;
                      }
                    }
                  }
                  item2.loadComplete = null;
                  item2.img = null;
                  _shout("imageLoadComplete", index, item2);
                };
                if (framework.features.transform) {
                  var placeholderClassName = "pswp__img pswp__img--placeholder";
                  placeholderClassName += item.msrc ? "" : " pswp__img--placeholder--blank";
                  var placeholder = framework.createEl(placeholderClassName, item.msrc ? "img" : "");
                  if (item.msrc) {
                    placeholder.src = item.msrc;
                  }
                  _setImageSize(item, placeholder);
                  baseDiv.appendChild(placeholder);
                  item.placeholder = placeholder;
                }
                if (!item.loading) {
                  _preloadImage(item);
                }
                if (self.allowProgressiveImg()) {
                  if (!_initialContentSet && _features.transform) {
                    _imagesToAppendPool.push({
                      item,
                      baseDiv,
                      img: item.img,
                      index,
                      holder
                    });
                  } else {
                    _appendImage(index, item, baseDiv, item.img, true, true);
                  }
                }
              } else if (item.src && !item.loadError) {
                img = framework.createEl("pswp__img", "img");
                img.style.opacity = 1;
                img.src = item.src;
                _setImageSize(item, img);
                _appendImage(index, item, baseDiv, img, true);
              }
              if (!_initialContentSet && index === _currentItemIndex) {
                _currZoomElementStyle = baseDiv.style;
                _showOrHide(item, img || item.img);
              } else {
                _applyZoomPanToItem(item);
              }
              holder.el.innerHTML = "";
              holder.el.appendChild(baseDiv);
            },
            cleanSlide: function(item) {
              if (item.img) {
                item.img.onload = item.img.onerror = null;
              }
              item.loaded = item.loading = item.img = item.imageAppended = false;
            }
          }
        });
        var tapTimer, tapReleasePoint = {}, _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
          var e = document.createEvent("CustomEvent"), eDetail = {
            origEvent,
            target: origEvent.target,
            releasePoint,
            pointerType: pointerType || "touch"
          };
          e.initCustomEvent("pswpTap", true, true, eDetail);
          origEvent.target.dispatchEvent(e);
        };
        _registerModule("Tap", {
          publicMethods: {
            initTap: function() {
              _listen("firstTouchStart", self.onTapStart);
              _listen("touchRelease", self.onTapRelease);
              _listen("destroy", function() {
                tapReleasePoint = {};
                tapTimer = null;
              });
            },
            onTapStart: function(touchList) {
              if (touchList.length > 1) {
                clearTimeout(tapTimer);
                tapTimer = null;
              }
            },
            onTapRelease: function(e, releasePoint) {
              if (!releasePoint) {
                return;
              }
              if (!_moved && !_isMultitouch && !_numAnimations) {
                var p0 = releasePoint;
                if (tapTimer) {
                  clearTimeout(tapTimer);
                  tapTimer = null;
                  if (_isNearbyPoints(p0, tapReleasePoint)) {
                    _shout("doubleTap", p0);
                    return;
                  }
                }
                if (releasePoint.type === "mouse") {
                  _dispatchTapEvent(e, releasePoint, "mouse");
                  return;
                }
                var clickedTagName = e.target.tagName.toUpperCase();
                if (clickedTagName === "BUTTON" || framework.hasClass(e.target, "pswp__single-tap")) {
                  _dispatchTapEvent(e, releasePoint);
                  return;
                }
                _equalizePoints(tapReleasePoint, p0);
                tapTimer = setTimeout(function() {
                  _dispatchTapEvent(e, releasePoint);
                  tapTimer = null;
                }, 300);
              }
            }
          }
        });
        var _wheelDelta;
        _registerModule("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function() {
              if (_oldIE) {
                return;
              }
              if (_likelyTouchDevice) {
                _listen("mouseUsed", function() {
                  self.setupDesktopZoom();
                });
              } else {
                self.setupDesktopZoom(true);
              }
            },
            setupDesktopZoom: function(onInit) {
              _wheelDelta = {};
              var events = "wheel mousewheel DOMMouseScroll";
              _listen("bindEvents", function() {
                framework.bind(template, events, self.handleMouseWheel);
              });
              _listen("unbindEvents", function() {
                if (_wheelDelta) {
                  framework.unbind(template, events, self.handleMouseWheel);
                }
              });
              self.mouseZoomedIn = false;
              var hasDraggingClass, updateZoomable = function() {
                if (self.mouseZoomedIn) {
                  framework.removeClass(template, "pswp--zoomed-in");
                  self.mouseZoomedIn = false;
                }
                if (_currZoomLevel < 1) {
                  framework.addClass(template, "pswp--zoom-allowed");
                } else {
                  framework.removeClass(template, "pswp--zoom-allowed");
                }
                removeDraggingClass();
              }, removeDraggingClass = function() {
                if (hasDraggingClass) {
                  framework.removeClass(template, "pswp--dragging");
                  hasDraggingClass = false;
                }
              };
              _listen("resize", updateZoomable);
              _listen("afterChange", updateZoomable);
              _listen("pointerDown", function() {
                if (self.mouseZoomedIn) {
                  hasDraggingClass = true;
                  framework.addClass(template, "pswp--dragging");
                }
              });
              _listen("pointerUp", removeDraggingClass);
              if (!onInit) {
                updateZoomable();
              }
            },
            handleMouseWheel: function(e) {
              if (_currZoomLevel <= self.currItem.fitRatio) {
                if (_options.modal) {
                  if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                    e.preventDefault();
                  } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                    _closedByScroll = true;
                    self.close();
                  }
                }
                return true;
              }
              e.stopPropagation();
              _wheelDelta.x = 0;
              if ("deltaX" in e) {
                if (e.deltaMode === 1) {
                  _wheelDelta.x = e.deltaX * 18;
                  _wheelDelta.y = e.deltaY * 18;
                } else {
                  _wheelDelta.x = e.deltaX;
                  _wheelDelta.y = e.deltaY;
                }
              } else if ("wheelDelta" in e) {
                if (e.wheelDeltaX) {
                  _wheelDelta.x = -0.16 * e.wheelDeltaX;
                }
                if (e.wheelDeltaY) {
                  _wheelDelta.y = -0.16 * e.wheelDeltaY;
                } else {
                  _wheelDelta.y = -0.16 * e.wheelDelta;
                }
              } else if ("detail" in e) {
                _wheelDelta.y = e.detail;
              } else {
                return;
              }
              _calculatePanBounds(_currZoomLevel, true);
              var newPanX = _panOffset.x - _wheelDelta.x, newPanY = _panOffset.y - _wheelDelta.y;
              if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
                e.preventDefault();
              }
              self.panTo(newPanX, newPanY);
            },
            toggleDesktopZoom: function(centerPoint) {
              centerPoint = centerPoint || { x: _viewportSize.x / 2 + _offset.x, y: _viewportSize.y / 2 + _offset.y };
              var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
              var zoomOut = _currZoomLevel === doubleTapZoomLevel;
              self.mouseZoomedIn = !zoomOut;
              self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
              framework[(!zoomOut ? "add" : "remove") + "Class"](template, "pswp--zoomed-in");
            }
          }
        });
        var _historyDefaultOptions = {
          history: true,
          galleryUID: 1
        };
        var _historyUpdateTimeout, _hashChangeTimeout, _hashAnimCheckTimeout, _hashChangedByScript, _hashChangedByHistory, _hashReseted, _initialHash, _historyChanged, _closedFromURL, _urlChangedOnce, _windowLoc, _supportsPushState, _getHash = function() {
          return _windowLoc.hash.substring(1);
        }, _cleanHistoryTimeouts = function() {
          if (_historyUpdateTimeout) {
            clearTimeout(_historyUpdateTimeout);
          }
          if (_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
          }
        }, _parseItemIndexFromURL = function() {
          var hash = _getHash(), params = {};
          if (hash.length < 5) {
            return params;
          }
          var i, vars = hash.split("&");
          for (i = 0; i < vars.length; i++) {
            if (!vars[i]) {
              continue;
            }
            var pair = vars[i].split("=");
            if (pair.length < 2) {
              continue;
            }
            params[pair[0]] = pair[1];
          }
          if (_options.galleryPIDs) {
            var searchfor = params.pid;
            params.pid = 0;
            for (i = 0; i < _items.length; i++) {
              if (_items[i].pid === searchfor) {
                params.pid = i;
                break;
              }
            }
          } else {
            params.pid = parseInt(params.pid, 10) - 1;
          }
          if (params.pid < 0) {
            params.pid = 0;
          }
          return params;
        }, _updateHash = function() {
          if (_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
          }
          if (_numAnimations || _isDragging) {
            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
            return;
          }
          if (_hashChangedByScript) {
            clearTimeout(_hashChangeTimeout);
          } else {
            _hashChangedByScript = true;
          }
          var pid = _currentItemIndex + 1;
          var item = _getItemAt(_currentItemIndex);
          if (item.hasOwnProperty("pid")) {
            pid = item.pid;
          }
          var newHash = _initialHash + "&gid=" + _options.galleryUID + "&pid=" + pid;
          if (!_historyChanged) {
            if (_windowLoc.hash.indexOf(newHash) === -1) {
              _urlChangedOnce = true;
            }
          }
          var newURL = _windowLoc.href.split("#")[0] + "#" + newHash;
          if (_supportsPushState) {
            if ("#" + newHash !== window.location.hash) {
              history[_historyChanged ? "replaceState" : "pushState"]("", document.title, newURL);
            }
          } else {
            if (_historyChanged) {
              _windowLoc.replace(newURL);
            } else {
              _windowLoc.hash = newHash;
            }
          }
          _historyChanged = true;
          _hashChangeTimeout = setTimeout(function() {
            _hashChangedByScript = false;
          }, 60);
        };
        _registerModule("History", {
          publicMethods: {
            initHistory: function() {
              framework.extend(_options, _historyDefaultOptions, true);
              if (!_options.history) {
                return;
              }
              _windowLoc = window.location;
              _urlChangedOnce = false;
              _closedFromURL = false;
              _historyChanged = false;
              _initialHash = _getHash();
              _supportsPushState = "pushState" in history;
              if (_initialHash.indexOf("gid=") > -1) {
                _initialHash = _initialHash.split("&gid=")[0];
                _initialHash = _initialHash.split("?gid=")[0];
              }
              _listen("afterChange", self.updateURL);
              _listen("unbindEvents", function() {
                framework.unbind(window, "hashchange", self.onHashChange);
              });
              var returnToOriginal = function() {
                _hashReseted = true;
                if (!_closedFromURL) {
                  if (_urlChangedOnce) {
                    history.back();
                  } else {
                    if (_initialHash) {
                      _windowLoc.hash = _initialHash;
                    } else {
                      if (_supportsPushState) {
                        history.pushState("", document.title, _windowLoc.pathname + _windowLoc.search);
                      } else {
                        _windowLoc.hash = "";
                      }
                    }
                  }
                }
                _cleanHistoryTimeouts();
              };
              _listen("unbindEvents", function() {
                if (_closedByScroll) {
                  returnToOriginal();
                }
              });
              _listen("destroy", function() {
                if (!_hashReseted) {
                  returnToOriginal();
                }
              });
              _listen("firstUpdate", function() {
                _currentItemIndex = _parseItemIndexFromURL().pid;
              });
              var index = _initialHash.indexOf("pid=");
              if (index > -1) {
                _initialHash = _initialHash.substring(0, index);
                if (_initialHash.slice(-1) === "&") {
                  _initialHash = _initialHash.slice(0, -1);
                }
              }
              setTimeout(function() {
                if (_isOpen) {
                  framework.bind(window, "hashchange", self.onHashChange);
                }
              }, 40);
            },
            onHashChange: function() {
              if (_getHash() === _initialHash) {
                _closedFromURL = true;
                self.close();
                return;
              }
              if (!_hashChangedByScript) {
                _hashChangedByHistory = true;
                self.goTo(_parseItemIndexFromURL().pid);
                _hashChangedByHistory = false;
              }
            },
            updateURL: function() {
              _cleanHistoryTimeouts();
              if (_hashChangedByHistory) {
                return;
              }
              if (!_historyChanged) {
                _updateHash();
              } else {
                _historyUpdateTimeout = setTimeout(_updateHash, 800);
              }
            }
          }
        });
        framework.extend(self, publicMethods);
      };
      return PhotoSwipe;
    });
  }
});

// dep:photoswipe
init_define_ARTICLE_INFO_LOCALES();
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PAGINATION_LOCALES();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_PWA_LOCALES();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_WALINE_LOCALES();
init_define_EXTERNAL_LINK_ICON_LOCALES();
var photoswipe_default = require_photoswipe();
export {
  photoswipe_default as default
};
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
//# sourceMappingURL=photoswipe.js.map
