sap.ui.define(
    [

   'sap/ui/core/mvc/Controller',
   'sap/m/MessageToast'

    ],(Controller,MessageToast) =>{
        'use strict';

    return Controller.extend('karacraft.ui5.controller.App',{
        onInit: () => {
            console.info('App Controller on Init')
        },
        onExit: () => {
            console.info('App Controller on Exit')
        },

        onShowHello: function() {
            //  Read Message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient =
            this.getView().getModel("helloPanel").getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        }


    })
})