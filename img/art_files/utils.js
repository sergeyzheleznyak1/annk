function wrap(el,tagName="div"){const wrapper=document.createElement(tagName);return el.parentNode.insertBefore(wrapper,el),wrapper.appendChild(el),wrapper}function wrapAll(nodes,wrapper){for(var parent=nodes[0].parentNode,previousSibling=nodes[0].previousSibling,i=0;nodes.length-i;wrapper.firstChild===nodes[0]&&i++)wrapper.appendChild(nodes[i]);return parent.insertBefore(wrapper,previousSibling.nextSibling),wrapper}function unwrap(wrapper){for(var docFrag=document.createDocumentFragment();wrapper.firstChild;){var child=wrapper.removeChild(wrapper.firstChild);docFrag.appendChild(child)}wrapper.parentNode.replaceChild(docFrag,wrapper)}function cartesian(...a){return a.reduce((a2,b)=>a2.flatMap(d=>b.map(e=>[d,e].flat())))}function loadScriptBySrc(scriptSrc){if(document.head.querySelector(`script[src="${scriptSrc}"]`)||document.body.querySelector(`script[src="${scriptSrc}"]`))return;const scriptEl2=document.createElement("script");return scriptEl2.src=scriptSrc,scriptEl2.type="module",console.log("appending",scriptEl2),document.body.appendChild(scriptEl2),scriptEl2}function loadInlineScript(scriptContent){console.time("inlineScriptDuplicatesCheck");const headScripts=document.head.querySelectorAll('script[type="module"]'),bodyScripts=document.body.querySelectorAll('script[type="module"]'),scriptsWithSameContent=Array.from(headScripts).concat(Array.from(bodyScripts)).filter(script=>!script.src&&script.textContent.replace(/\s/g,"")===scriptContent.replace(/\s/g,""));if(console.timeEnd("inlineScriptDuplicatesCheck"),scriptsWithSameContent.length>0){console.log("we have a script with the same content",scriptsWithSameContent);return}else{const scriptEl2=document.createElement("script");return scriptEl2.type="module",scriptEl2.textContent=scriptContent,console.log("appending",scriptEl2),document.body.appendChild(scriptEl2),scriptEl2}}function loadThisScript(sourceScriptEl){return new Promise((resolve,reject)=>{if(sourceScriptEl.type!=="module"&&(console.warn("Script not loaded, not a module",sourceScriptEl),reject()),sourceScriptEl.src){const scriptEl2=loadScriptBySrc(sourceScriptEl.src);scriptEl2?(scriptEl2.onload=()=>{console.log(`loaded ${scriptEl2.src}`),resolve()},scriptEl2.onerror=()=>{reject()}):resolve()}else if(sourceScriptEl.textContent.trim()!==""){const scriptEl2=loadInlineScript(sourceScriptEl.textContent);resolve()}})}function loadTheseScripts(scriptEls){const promises=[];for(scriptEl of scriptEls)promises.push(loadThisScript(scriptEl));return Promise.all(promises)}let touchDevice=!1;function isTouch(){return touchDevice}document.addEventListener("touchstart",()=>{touchDevice=!0}),document.addEventListener("mousedown",()=>{document.body.classList.add("user-using-mouse")}),document.addEventListener("keydown",()=>{document.body.classList.remove("user-using-mouse")});function themeHeaderEl(){return document.querySelector("[data-theme-header]")}function headerIsSticky(){const headerEl=themeHeaderEl();return!!(headerEl&&headerEl.hasAttribute("data-sticky-header")&&headerEl.dataset.stickyHeader==="true")}function headerIsOverlaid(){const headerEl=themeHeaderEl();return!!(headerEl&&headerEl.hasAttribute("data-overlay-header")&&headerEl.dataset.overlayHeader==="true")}function scrollToTopOf(element){if(!element)return;let topOffset=element.getBoundingClientRect().top;(headerIsSticky()||headerIsOverlaid())&&(topOffset-=parseFloat(document.documentElement.style.getPropertyValue("--header-group-height"))+20),window.scroll({top:window.scrollY+topOffset,...isMotionSafe()&&{behavior:"smooth"}})}function objectHasNoKeys(obj){for(var key in obj)if(obj.hasOwnProperty(key))return!1;return!0}function nextOrFirst(array,currentItem){return currentItem&&array[array.indexOf(currentItem)+1]||array[0]}function previousOrLast(array,currentItem){return currentItem&&array[array.indexOf(currentItem)-1]||array[array.length-1]}function getSizedImageUrl(src,size){const url=new URL(src);return url.searchParams.set("width",size),url}function getImageSrcset(src,sizes=[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024]){if(!src)return;const srcset=[];return sizes.forEach(size=>{srcset.push(`${getSizedImageUrl(src,size.toString())} ${size}w`)}),srcset.join(`,
`)}function fetchConfigDefaults(acceptHeader="application/json"){return{method:"POST",credentials:"same-origin",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json;",Accept:acceptHeader}}}function parseDOMFromString(htmlString){return window.___baselineDOMParser=window.___baselineDOMParser||new DOMParser,window.___baselineDOMParser.parseFromString(htmlString,"text/html")}function querySelectorInHTMLString(selector,htmlString){return parseDOMFromString(htmlString).querySelector(selector)}window.__fetchCache=window.__fetchCache||{};const RESPONSE_TYPE_JSON=0,RESPONSE_TYPE_TEXT=1;async function fetchAndCache(url,options,cacheTimeout=5e3,forceFresh=!1,responseType){if(__fetchCache[url]&&!forceFresh)return __fetchCache[url];const responseReader=responseType===RESPONSE_TYPE_TEXT?Response.prototype.text:Response.prototype.json,res=await fetch(url,options),data=responseReader.call(res);return cacheTimeout&&cacheTimeout>0&&(__fetchCache[url]=data,setTimeout(()=>{delete __fetchCache[url]},cacheTimeout)),data}async function fetchHTML(url,options,cacheTimeout=5e3,forceFresh=!1){return fetchAndCache(url,options,cacheTimeout,forceFresh,RESPONSE_TYPE_TEXT)}function freshHTML(url,options){return fetchHTML(url,options,0,!0)}async function fetchJSON(url,options,cacheTimeout=5e3,forceFresh=!1){return fetchAndCache(url,options,cacheTimeout,forceFresh,RESPONSE_TYPE_JSON)}function freshJSON(url,options){return fetchJSON(url,options,0,!0)}async function fetchHTMLFragment(url,selector){const fetchedHTMLString=await fetchHTML(url),fragment=querySelectorInHTMLString(selector,fetchedHTMLString);return fragment?fragment.innerHTML:""}function mdBreakpointMQL(){return window.matchMedia("(min-width: 768px)")}function isMdBreakpoint(){return window.mdBreakpointMQL().matches}function maxLgBreakpointMQL(){return window.matchMedia("(max-width: 1023px)")}function isMaxLgBreakpoint(){return window.maxLgBreakpointMQL().matches}function lgBreakpointMQL(){return window.matchMedia("(min-width: 1024px)")}function isLgBreakpoint(){return window.lgBreakpointMQL().matches}function motionSafeMQL(){return window.matchMedia("(prefers-reduced-motion)")}function isMotionSafe(){return!window.motionSafeMQL().matches}function showMobileSidebarNav(){return console.log("showMobileSidebarNav, always show is",window.alwaysShowMobileSidebarNav),window.alwaysShowMobileSidebarNav===!0?!0:!isMdBreakpoint()}function initTeleport(el){if(!el)return;const teleportCandidates=el.querySelectorAll("[data-should-teleport]");teleportCandidates.length&&teleportCandidates.forEach(teleportCandidate=>{teleportCandidate.setAttribute("x-teleport",teleportCandidate.dataset.shouldTeleport)})}async function getModalLabel(modalSlotName,slotEl){if(Alpine.store("modals")[modalSlotName].open){await globalNextTick();const labelSourceEl=Array.from(slotEl.children).filter(el=>el.hasAttribute("data-modal-label"))[0];if(labelSourceEl)return labelSourceEl.dataset.modalLabel}return!1}function waitForContent(element){return new Promise((resolve,reject)=>{element.innerHTML.trim().length>0&&resolve(),new MutationObserver((mutationsList,observer)=>{element.innerHTML.trim().length>0&&(observer.disconnect(),resolve())}).observe(element,{childList:!0})})}window.uniqueFilter=(element,index,array)=>array.indexOf(element)===index;function shallowDiffKeys(object1,object2,meaningfulKeys=[]){function keysForDiff(object){return meaningfulKeys.length===0?Object.keys(object):Object.keys(object).filter(key=>meaningfulKeys.indexOf(key)!==-1)}const keys1=keysForDiff(object1),keys2=keysForDiff(object2);let equal=!0;const diffKeys=[];if(keys1.length!==keys2.length&&(equal=!1),equal)for(let key of keys1)object1[key]!==object2[key]&&(diffKeys.push(key),equal=!1);return{equal,diffKeys}}function shallowDiffKeysOnMultiple(arrayOfObjects,meaningfulKeys=[]){const results=[],allDiffKeys=[];for(const array1 of arrayOfObjects)for(const array2 of arrayOfObjects)results.push(shallowDiffKeys(array1,array2,meaningfulKeys).equal),allDiffKeys.push(shallowDiffKeys(array1,array2,meaningfulKeys).diffKeys);const result=results.reduce((prev,curr)=>prev&&curr),uniqueDiffKeys=allDiffKeys.flat().filter(uniqueFilter);return{result,uniqueDiffKeys}}function iFrameCommand(iFrameEl,commandString){!iFrameEl||!commandString||iFrameEl.contentWindow.postMessage(JSON.stringify({event:"command",func:commandString,args:""}),"*")}function iFrameMethod(iFrameEl,methodString){!iFrameEl||!methodString||iFrameEl.contentWindow.postMessage(JSON.stringify({method:methodString}),"*")}function splideIsIdle(splideInstance){if(splideInstance)return!!(window.Splide&&splideInstance&&splideInstance.state.is(window.Splide.STATES.IDLE))}function splideIsDestroyed(splideInstance){if(splideInstance)return!!(window.Splide&&splideInstance&&splideInstance.state.is(window.Splide.STATES.DESTROYED))}function splideIsNotDestroyed(splideInstance){if(splideInstance)return!!(window.Splide&&splideInstance&&!splideInstance.state.is(window.Splide.STATES.DESTROYED))}function getUrlWithVariant(url,id){return/variant=/.test(url)?url.replace(/(variant=)[^&]+/,"$1"+id):/\?/.test(url)?url.concat("&variant=").concat(id):url.concat("?variant=").concat(id)}function getSectionId(el){return el._closestSectionId||(el._closestSectionId=el.closest(".shopify-section").getAttribute("id").replace("shopify-section-","")),el._closestSectionId}function kebabCase(subject){return[" ","_"].includes(subject)?subject:subject.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function clearURLSearchParams(url){for(const key of[...url.searchParams.keys()])url.searchParams.delete(key)}function _getURLByModifyingParams(urlString,paramsInput,clear=!1,append){const url=new URL(urlString,window.location.origin);clear&&clearURLSearchParams(url);const params=new URLSearchParams(paramsInput),setOrAppendParam=append?URLSearchParams.prototype.append:URLSearchParams.prototype.set;for(const[key,value]of params)setOrAppendParam.call(url.searchParams,key,value);return url}function getURLWithParams(url,paramsInput,clear=!1){return _getURLByModifyingParams(url,paramsInput,clear,!1)}function currentURLWithParams(paramsInput,clear=!1){return getURLWithParams(window.location.href,paramsInput,clear)}function getURLAddingParams(url,paramsInput,clear=!1){return _getURLByModifyingParams(url,paramsInput,clear,!0)}function currentURLAddingParams(paramsInput,clear=!1){return getURLAddingParams(window.location.href,paramsInput,clear)}function formatDate(string){return new Date(string).toLocaleDateString(Shopify.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function asyncTimeout(ms){return new Promise(resolve=>{setTimeout(resolve,ms)})}function globalNextTick(){return new Promise(resolve=>{queueMicrotask(resolve)})}function hasWrappedChildren(el){if(!el.children||el.children.length<2)return!1;const childEls=Array.from(el.children);let lastOffsetTop=childEls.shift().offsetTop;for(const childEl of childEls){if(childEl.offsetTop!==lastOffsetTop)return!0;lastOffsetTop=childEl.offsetTop}return!1}function isBooleanString(string){return string==="true"||string==="false"}function stringToBoolean(string){return string==="true"}function daysInMs(days){return days*24*60*60*1e3}function msInDays(ms){return ms/1e3/60/60/24}function isInTheFuture(msSinceEpoch){return msSinceEpoch>Date.now()}function setExpiringStorageItem(key,value,expiresIn){localStorage.setItem(key,JSON.stringify({value,expires:Date.now()+expiresIn}))}function getExpiringStorageItem(key){const value=localStorage.getItem(key);if(!value)return null;let valueObject;try{valueObject=JSON.parse(value)}catch{}return valueObject&&valueObject.expires?isInTheFuture(valueObject.expires)?valueObject.value:(localStorage.removeItem(key),null):null}
//# sourceMappingURL=/cdn/shop/t/2/assets/utils.js.map?v=157423851831221147851722327238
