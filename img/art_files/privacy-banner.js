document.addEventListener("alpine:init",()=>{Alpine.data("PrivacyBanner",({enabled})=>({ShopifyCustomerPrivacy:null,shown:!1,enabled,sectionId:null,bottom:null,transition:!1,init(){this.sectionId=this.$root.id,this.setUpBottom(),Shopify.designMode?(window.theme.designMode.selected===this.sectionId&&(this.enabled===!0?setTimeout(()=>{this.shown=!0},200):setTimeout(()=>{this.shown=!1},200)),document.addEventListener("shopify:section:select",e=>{e.target.contains(this.$root)&&this.enabled&&(this.shown=!0)}),document.addEventListener("shopify:section:deselect",e=>{e.target.contains(this.$root)&&(this.shown=!1)})):Shopify.loadFeatures([{name:"consent-tracking-api",version:"0.1"}],error=>{if(error)throw error;this.setUp()})},setUp(){this.ShopifyCustomerPrivacy=window.Shopify.customerPrivacy;const userCanBeTracked=this.ShopifyCustomerPrivacy.userCanBeTracked(),userTrackingConsent=this.ShopifyCustomerPrivacy.getTrackingConsent();!userCanBeTracked&&userTrackingConsent==="no_interaction"&&this.enabled&&(this.shown=!0)},accept(){this.ShopifyCustomerPrivacy.setTrackingConsent(!0,()=>this.shown=!1)},decline(){this.ShopifyCustomerPrivacy.setTrackingConsent(!1,()=>this.shown=!1)},setUpBottom(){this.bottom=this.$root.style.getPropertyValue("--bottom");const adjustBottom=(promoModalIsOpen,doTransition=!0)=>{this.shown&&(doTransition&&(this.transition=!0),this.$nextTick(()=>{if(promoModalIsOpen===!1)this.bottom="0";else{const promoHeight=document.getElementById("promo-slot").getBoundingClientRect().height;this.bottom=`${promoHeight}px`,doTransition&&setTimeout(()=>{this.transition=!1},300)}}))};Alpine.store("modals").promo.open&&adjustBottom(!0),document.body.addEventListener("promo-is-open",()=>{adjustBottom(!0)}),document.body.addEventListener("promo-is-closed",()=>{adjustBottom(!1)}),new ResizeObserver(()=>{adjustBottom(Alpine.store("modals").promo.open,!1)}).observe(this.$root)}}))});
//# sourceMappingURL=/cdn/shop/t/2/assets/privacy-banner.js.map?v=33472920116098439441722327238
