(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,205);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0","370","205",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Notice");
            obj.set_cssclass("sta_POP_title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","319","1","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_close");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","531","45","274","175",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컨펌\r\n타이틀 Question\r\n\r\n알럿\r\n타이틀 Notice\r\n\r\n에러\r\n타이틀 Error\r\n");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00","161","50","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/img_alert.png\')");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00","644","107","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/img_alert.png\')");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00_00","644","160","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'theme://images/img_error.png\')");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00_00_00","644","52","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'theme://images/img_question.png\')");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","70","30","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","70","98","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","106","350","39",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("선택한 데이터를 삭제하시겠습니까?");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","107","156","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("예");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","187","156","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("아니오");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","110","184","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,205,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup.xfdl", function() {

        this.Static01_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
        };
        this.loadIncludeScript("Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
