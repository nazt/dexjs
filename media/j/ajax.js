Ext.onReady(function() {
    var form = new Ext.form.FormPanel({
        baseCls: 'x-plain',
        defaultType: 'textfield',
 
        items: [{
            fieldLabel: 'Send From',
            name: 'sender',
            anchor:'100%'  // anchor width by percentage
        },{
            fieldLabel: 'Subject',
            name: 'subject',
            anchor: '100%'  // anchor width by percentage
        }, {
            xtype: 'textarea',
            hideLabel: true,
            name: 'msg',
            anchor: '100% -53'  // anchor width by percentage and height by raw adjustment
        }]
    });
 
    var window = new Ext.Window({
        title: 'Contact US',
        width: 500,
        height:300,
        minWidth: 300,
        minHeight: 200,
        layout: 'fit',
        plain:true,
        bodyStyle:'padding:5px;',
        buttonAlign:'center',
        items: form,
 
        buttons: [{
            text: 'Send',
            handler: function() {
              if(form.getForm().isValid()) {
				form.getForm().submit({
                  url: '/sendmail',
                  waitMsg: 'Processing Request',
                  success: function(loginForm, resp) {
                    msg('Success', 'Yoyo'); 
                  } 
                })
              }
            }
        },{
            text: 'Cancel'
        }]
    });
 
    window.show();
})
