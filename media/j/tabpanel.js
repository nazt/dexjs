Ext.onReady(function() {
var form_button = [{ xtype: 'button', text: 'Button'}, { xtype: 'button', text: 'Button'}]
var form_element = [
		{ xtype: 'label', text: 'Send to:', x: 0, y: 0 },
		{ xtype: 'textfield', text: 'to', width: 200, x: 80, y: 0 },
		{ xtype: 'label', text: 'Message:', x: 0, y: 30 },
		{ xtype: 'textarea', text: 'msg', width: 200, x: 80, y: 30 },
		{ xtype: 'container', autoEl: 'div', layout: 'form', columnWidth: 0.5, style: { padding: '10px'}, items: form_button},
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
