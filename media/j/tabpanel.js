Ext.onReady(function() {
/*
	new Ext.Viewport({
		layout: 'absolute',
		items: 
		[
			{ xtype: 'button', text: 'Button', x: 100, y: 100 },
			{ xtype: 'label', text: 'Send to:', x: 0, y: 0 },
			{ xtype: 'textfield', text: 'to', width: 200, x: 80, y: 0 },
			{ xtype: 'label', text: 'Message:', x: 0, y: 30 },
			{ xtype: 'textarea', text: 'msg', width: 200, x: 80, y: 30 },
			{ xtype: 'tabpanel', text: 'msg', width: 200, x: 80, y: 30 }
		]
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
					{ title: 'Tab 1', html: 'A simple tab' },
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
