(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkFormComm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","0","15","260","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("심사등록(개별) [4120]");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"24","24","56","13",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_padding("0px");
            obj.set_cssclass("btn_TF_collapse");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,null,"24","24","28","13",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_help");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"24","24","0","13",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_close");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi",null,"20","358","30","100",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("뎁스1 > 뎁스2 > 뎁스3");
            obj.set_cssclass("sta_TF_breadcrumb");
            this.addChild(obj.name, obj);

            obj = new Button("btnFav","staTitle:10","21","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_fav");
            this.addChild(obj.name, obj);

            obj = new Button("btnReload","btnFav:6",null,"28","28",null,"11",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_reset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,60,this,function(p){});
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
        this.loadIncludeScript("WorkFormCommHeader.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
