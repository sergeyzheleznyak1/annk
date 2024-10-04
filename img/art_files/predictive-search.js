document.addEventListener("alpine:init",()=>{Alpine.data("PredictiveSearch",resources=>({loading:!1,resultsOpen:!1,rawQuery:"",resultsHTML:null,resources,selectedElement:null,allOptionsArray:null,get trimmedQuery(){return this.rawQuery.trim()},get queryKey(){return this.trimmedQuery.replace(" ","-").toLowerCase()},init(){this.$watch("searchOpen",value=>{value===!0&&(this.onOpen(),this.$focus.focus(this.$refs.input),this.$nextTick(()=>{this.$root.style.setProperty("--search-bar-height",`${this.$root.getBoundingClientRect().height}px`)}))}),this.$watch("trimmedQuery",(value,oldValue)=>{this.trimmedQuery.length?(this.openResults(),value!==oldValue&&this.getSearchResults()):this.closeResults()})},close(clearSearchTerm=!0,focusAfter){this.closeResults(clearSearchTerm),this.searchOpen=!1,focusAfter&&setTimeout(()=>{this.$focus.focus(focusAfter)})},openResults(){this.resultsOpen=!0,document.documentElement.style.overflowY="hidden"},closeResults(clearSearchTerm=!1){this.resultsOpen=!1,clearSearchTerm&&(this.rawQuery=""),this.selectedElement=null,document.documentElement.style.overflowY="auto"},async getSearchResults(){this.loading=!0,liveRegion(window.theme.strings.loading);const updatedHTML=await fetchHTML(getURLWithParams(window.theme.routes.predictive_search_url,{q:this.trimmedQuery,"resources[type]":this.resources,section_id:"predictive-search"})),resultsMarkup=querySelectorInHTMLString("#shopify-section-predictive-search",updatedHTML).innerHTML,liveRegionText=querySelectorInHTMLString("#predictive-search-count",updatedHTML).innerHTML;this.resultsHTML=resultsMarkup,liveRegion(liveRegionText),this.$nextTick(()=>{this.allOptionsArray=Array.from(this.$root.querySelectorAll('[role="option"]'))}),this.loading=!1,this.openResults()},onFocus(){this.trimmedQuery.length&&(this.resultsHTML?this.openResults():this.getSearchResults())},onFormSubmit(event){(!this.trimmedQuery.length||this.$el.querySelector('[aria-selected="true"] a'))&&event.preventDefault()},onOpen(){this.trimmedQuery.length&&(this.openResults(),this.$nextTick(()=>{this.getSearchResults()}))},switchOption(direction){direction==="previous"&&!this.selectedElement||(direction==="next"?this.selectedElement=nextOrFirst(this.allOptionsArray,this.selectedElement):direction==="previous"&&(this.selectedElement=previousOrLast(this.allOptionsArray,this.selectedElement)),this.selectedElement.scrollIntoView({behavior:isMotionSafe()?"smooth":"auto",block:"end"}))},onKeyup(){switch(this.$event.preventDefault(),this.$event.code){case"ArrowUp":this.switchOption("previous");break;case"ArrowDown":this.switchOption("next");break;case"Enter":this.selectOption();break}},onKeydown(){(this.$event.code==="ArrowUp"||this.$event.code==="ArrowDown"||this.$event.code==="Enter"&&this.selectedElement)&&this.$event.preventDefault()},isSelected(){return this.$el===this.selectedElement?"true":"false"},selectOption(){if(this.selectedElement){const selectedOptionAction=this.selectedElement.querySelector("a, button");selectedOptionAction&&selectedOptionAction.click()}}}))});
//# sourceMappingURL=/cdn/shop/t/2/assets/predictive-search.js.map?v=73099588884941047221722327238
