(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MDI");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_cssclass("frm_MDI");
            if (Form == this.constructor)
            {
                this._setFormPosition(1568,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#D3D3D3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","40",null,null,"29","40","-1",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_selectchangetype("down");
            obj.set_showextrabutton("true");
            obj.set_cssclass("tab_MDI");
            obj.set_tabbuttonheight("29");
            obj.set_visible("true");
            obj.set_tabbuttongap("4");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"2","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("linear-gradient(to bottom,rgba(0,0,0,0.15) 0%,transparent 100%)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1568,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
