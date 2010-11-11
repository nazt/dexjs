Ext.onReady(function() {
	var store = new Ext.data.ArrayStore({
		// store configs
		autoDestroy: true,
		storeId: 'myStore',
		// reader configs
		idIndex: 0,  
		fields: [
		   'company',
		   {name: 'price', type: 'float'},
		   {name: 'change', type: 'float'},
		   {name: 'pctChange', type: 'float'},
		   {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
		]
	});
	// create the combo instance
	var combo = new Ext.form.ComboBox({
		typeAhead: false,
		triggerAction: 'all',
		lazyRender:true,
		mode: 'local',
        fieldLabel: 'Yo',
		store: new Ext.data.ArrayStore({
			id: 0,
			fields: [
				'myId',
				'displayText'
			],
			data: [[1, 'item1'], [2, 'item2']]
		}),
		valueField: 'myId',
		displayField: 'displayText'
	});

    var form = new Ext.form.FormPanel({
        baseCls: 'x-plain',
        defaultType: 'textfield',
 
        items: [
			combo,
		 {
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
            anchor: '100% -99'  // anchor width by percentage and height by raw adjustment
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
