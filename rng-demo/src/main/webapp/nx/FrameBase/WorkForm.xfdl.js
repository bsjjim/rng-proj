(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            this.set_scrollbartype("auto auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1568,812);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("CommHeader","40","0",null,"60","40",null,"1488",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("FrameBase::WorkFormCommHeader.xfdl");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","40","60",null,null,"0","50","1528",null,"702",null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_visible("true");
            obj.set_url("UI_Template::Temp01_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0",null,null,"49","0","0","1568",null,"49",null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("FrameBase::WorkFormCommFooter.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","0","340","20","73",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_hide");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1568,812,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::WorkFormCommHeader.xfdl");
            this._addPreloadList("fdl","UI_Template::Temp01_01.xfdl");
            this._addPreloadList("fdl","FrameBase::WorkFormCommFooter.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00_01_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("WorkForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
