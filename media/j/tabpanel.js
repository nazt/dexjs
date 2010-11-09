Ext.onReady(function() {
    var form = new Ext.form.FormPanel({
        baseCls: 'x-plain',
        labelWidth: 55,
        url:'save-form.php',
        defaultType: 'textfield',
 
        items: [{
            fieldLabel: 'Send To',
            name: 'to',
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
        title: 'Resize Me',
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
            text: 'Send'
        },{
            text: 'Cancel'
        }]
    });
 
    window.show();
var form_button = [{ xtype: 'button', text: 'Button'}, { xtype: 'button', text: 'Button'}]
var form_element = [
		{ xtype: 'label', text: 'Send to:', x: 0, y: 0 },
		{ xtype: 'textfield', text: 'to', width: 200, x: 80, y: 0 },
		{ xtype: 'label', text: 'Message:', x: 0, y: 30 },
		{ xtype: 'textarea', text: 'msg', width: 200, x: 80, y: 30 },
		{ xtype: 'container', autoEl: 'span', layout: 'form', columnWidth: 0.5, style: { padding: '10px'}, items: form_button},
	]
/*
	new Ext.Viewport({
		layout: 'vbox',
		layoutConfig: {
			padding: '5',
			align: 'left'
		},
		items: form_element 
	});
*/
	new Ext.Viewport({
		layout: 'border',
		items: 
		[
			{  
                xtype: 'tabpanel',
                region: 'center',
                activeTab: 0,
				items: 
				[
					{ layoutConfig: { padding: '20', align: 'left'}, layout: 'vbox', title: 'Tab 1', items: form_element}, 
					{ title: 'Tab 2', html: 'Another one' }
				]
			},
		]
	});
/*
	var tabs = new Ext.TabPanel({
		renderTo: 'tab-panel',
		activeTab: 0,
		items: 
		[
			{ title: 'Tab 1', html: 'A simple tab' },
			{ title: 'Tab 2', html: 'Another one' }
		]
	});
*/
})
