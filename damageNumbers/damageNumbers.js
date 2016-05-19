addons.register({
    tpl: `
        <div style="position: absolute; left: 4px; top: 4px; background-color: white; padding: 8px;">
            $AMOUNT$
        </div>
    `,
    init: function(events) {
        this.el = $('<div class="modDamageMeter"></div>')
            .appendTo('.ui-container');
        
        events.on('onGetDamage', this.onGetDamage.bind(this));
    },
    onGetDamage: function(msg) {
        if (!msg.amount)
            return;
            
        this.createEl(msg.amount);
    },
    createEl: function(amount) {
        var html = this.tpl
            .split('$AMOUNT$')
            .join(amount);
            
        var el = $(html)
            .appendTo(this.el);
            
        el.css({
            left: ~~(Math.random() * this.el.width()),
            top:  ~~(Math.random() * this.el.height()),
        });
            
        setTimeout(this.removeEl.bind(this, el), 1000);
    },
    removeEl: function(el) {
        el.remove();
    }
});
