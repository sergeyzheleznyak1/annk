document.addEventListener("alpine:init",()=>{Alpine.store("cartCount",{count:window.theme&&window.theme.cartItemCount||0,init(){window.addEventListener("baseline:cart:afteradditem",e=>{this._setFromFetchedSection(e.detail.response)}),window.addEventListener("baseline:cart:cartqtychange",e=>{this._setFromFetchedSection(e.detail.response)})},_setFromFetchedSection(data){const countSectionHTML=data.sections["cart-item-count"];this.count=parseInt(parseDOMFromString(countSectionHTML).firstElementChild.innerText.trim(),10)},countWithText(){let string=theme.strings.itemCountOther;return this.count===1&&(string=theme.strings.itemCountOne),string.replace("{{ count }}",this.count)}})});
//# sourceMappingURL=/cdn/shop/t/2/assets/cart-count.js.map?v=169689669928679996461722327237
