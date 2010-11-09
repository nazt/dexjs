Ext.onReady(function() {
	new Ext.Viewport({
		layout: '',
		items: 
		[
			{ xtype: 'button', text: 'Button', x: 100, y: 100 },
			{ xtype: 'label', text: 'Send to:', x: 0, y: 0 },
			{ xtype: 'textfield', text: 'to', width: 200, x: 80, y: 0 },
			{ xtype: 'label', text: 'Message:', x: 0, y: 30 },
			{ xtype: 'textarea', text: 'msg', width: 200, x: 80, y: 30 }
		]
	});

	var tabs = new Ext.TabPanel({
		renderTo: Ext.getBody(),
		activeTab: 0,
		items: [{
			title: 'Tab 1',
			html: 'A simple tab'
		},{
			title: 'Tab 2',
			html: 'Another one'
		}]
	});
})
