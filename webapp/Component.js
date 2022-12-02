sap.ui.define(
    [
        'sap/ui/core/UIComponent'
    ],(UIComponent)=>{

        
    return UIComponent.extend('karacraft.ui5.Component',{

        metadata:{
            manifest:"json"
        },
        onInit: () => {
            //  call the init function of parent
            UIComponent.prototype.init.apply(this,arguments)
            //  Additional initialization can be done below
            console.info('UIComponent on Init')
        },

    })

})