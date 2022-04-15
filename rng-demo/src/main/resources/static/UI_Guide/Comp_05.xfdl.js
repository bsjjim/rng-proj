(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_07_01");
            this.set_titletext("탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1뎁스 탭과 여백규정");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","35",null,"350","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("탭 내 조회");
            obj.set_url("UI_Guide::Comp_05_01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("타이틀/버튼영역이 있을 경우");
            obj.set_url("UI_Guide::Comp_05_02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("타이틀/버튼영역이 없을 경우");
            obj.set_url("UI_Guide::Comp_05_03.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("탭 내 스크롤이 생길 경우");
            obj.set_url("UI_Guide::Comp_05_04.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00","0","418","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2뎁스 탭");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00_00","0","451",null,"350","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_2Depth");
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_00);
            obj.set_text("탭 내 조회");
            obj.set_url("UI_Guide::Comp_05_01.xfdl");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_00);
            obj.set_text("타이틀/버튼영역이 있을 경우");
            obj.set_url("UI_Guide::Comp_05_02.xfdl");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00_00);
            obj.set_text("타이틀/버튼영역이 없을 경우");
            obj.set_url("UI_Guide::Comp_05_03.xfdl");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00_00);
            obj.set_text("탭 내 스크롤이 생길 경우");
            obj.set_url("UI_Guide::Comp_05_04.xfdl");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","305",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_02","680","35","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00","162","10","437","18",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("7");
            obj.set_text("※ initvaluid = iv_Tab_1Depth");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00","77","421","437","18",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("8");
            obj.set_text("※ initvaluid = iv_Tab_2Depth (여백규정은 1뎁스와 동일)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UI_Guide::Comp_05_01.xfdl");
            this._addPreloadList("fdl","UI_Guide::Comp_05_02.xfdl");
            this._addPreloadList("fdl","UI_Guide::Comp_05_03.xfdl");
            this._addPreloadList("fdl","UI_Guide::Comp_05_04.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_05.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
