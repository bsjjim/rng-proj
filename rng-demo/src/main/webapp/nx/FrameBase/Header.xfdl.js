(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Header");
            this.set_titletext("header");
            this.set_cssclass("frm_header");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1858,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","12","10","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","154","17","236","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_TF_search");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","397","17","29","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_src");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","207","24","123",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("홍길동(디지털혁신TF 영업 Part)");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_TF_user");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"18","18","24","Static02:15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_TF_alarm");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"16","73","30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Static01:-6","20","30","14",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("99+");
            obj.set_cssclass("btn_TF_alarm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1858,60,this,function(p){});
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
        this.loadIncludeScript("Header.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
