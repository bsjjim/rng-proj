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
            this.set_titletext("Grid  - 사이즈규정 Row");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,1395);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Flag\" type=\"STRING\" size=\"256\"/><Column id=\"Delete\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"Flag\">theme://images/ico_flag_add.png</Col><Col id=\"Delete\">1</Col><Col id=\"Column4\">비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">1260000000</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"Column4\">비정형데이터 비정형데이터비정형데이터 비비정형데이터 비정형데이터비정형데이터 비정형데이터정형데이터 비정형데이터정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">0</Col><Col id=\"Flag\">theme://images/ico_flag_del.png</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"Column4\">비정형데이터 비정형데이터 비정형데이터 비정형데이터 비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">9900000</Col><Col id=\"Flag\">theme://images/ico_flag_mod.png</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"Column4\">비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">150000</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"Column4\">비정형데이터 비정형데이터 비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">0</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"Column4\">비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","35","734","259",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"133\"/><Column size=\"65\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"정형데이터\"/><Cell col=\"1\" text=\"비정형데이터\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"Column1\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column3\"/><Cell col=\"1\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column5\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\" text=\"1100000\" displaytype=\"number\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","730","36","117","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","765","43","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Head <b v=\"true\">H30</b>");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","765","103","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Body H30");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","730","95","117","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","760","270","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Summ H30");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","736","262","96","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","353","734","259",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("8");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"구분\"/><Cell col=\"3\" text=\"Column1\"/><Cell row=\"1\" text=\"정형데이터\"/><Cell row=\"1\" col=\"1\" text=\"비정형데이터\"/><Cell row=\"1\" col=\"2\" text=\"금액\"/><Cell row=\"1\" col=\"3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column3\"/><Cell col=\"1\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column5\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\" text=\"1100000\" displaytype=\"number\"/><Cell col=\"3\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00","-1","324","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Head, Summary 가 여러줄일 때");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static76_00","721","354","111","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","765","361","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Head <b v=\"true\">H30</b>");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","765","451","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Body H30");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","721","443","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","765","572","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Summ H30");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","721","564","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","765","390","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Head <b v=\"true\">H30</b>");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static76_00_00","721","383","111","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","765","542","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Summ H30");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","721","534","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","0","673","734","259",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("20");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"60\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"두줄 타이틀&#13;&#10;두줄 타이틀\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\"/><Cell row=\"1\" text=\"세줄타이틀&#13;&#10;세줄타이틀&#13;&#10;세줄타이틀\"/><Cell row=\"1\" col=\"1\" text=\"세줄타이틀&#13;&#10;세줄타이틀&#13;&#10;세줄타이틀\"/><Cell row=\"1\" col=\"2\" text=\"세줄타이틀&#13;&#10;세줄타이틀&#13;&#10;세줄타이틀\"/><Cell row=\"1\" col=\"3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column3\"/><Cell col=\"1\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column5\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_00","-1","644","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("한 Row에서 텍스트를 줄바꿈 하는 경우");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static76_00_01","721","674","111","45",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01","765","687","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Head <b v=\"true\">H45</b>");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00","267","644","593","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("24");
            obj.set_text("※ 타이틀 줄바꿈의 경우 되도록 2줄을 초과하지 않도록 한다.  텍스트 줄바꿈 (Ctrl+Enter)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static76_00_01_00","721","718","111","61",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00","765","738","67","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Head <b v=\"true\">H60</b>");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01","0","5","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("기본유형");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","81","10","832","15",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("28");
            obj.set_text("※ 그리드 기본 initvalueid 를 iv_Grid로 설정");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_00_00","0","967","860","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Body의 데이터가 잘리지 않고 Row의 높이가 자동으로 변경되어 모든 텍스트를 보여주어야 하는 경우 (예외적인 케이스)");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","0","994","347","259",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("30");
            obj.set_binddataset("ds_grid");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"타이틀\"/></Band><Band id=\"body\"><Cell text=\"bind:Column4\" textAlign=\"left\" autosizerow=\"limitmin\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","380","1042","193","135",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("그리드 속성\r\nautosizingtype :  row\r\nextendsizetype : row\r\n\r\n셀속성\r\nautosizerow: limitmin\r\nwordwrap: char");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","6","1029","652","208",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("사용여부 미정(임의사용금지)");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("rgba(255,0,0,0.60)");
            obj.set_color("#ffffff");
            obj.set_font("20px \"NotoKr-Regular\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,1395,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_04_01.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static76.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static76_00.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static76_00_00.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static76_00_01.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static76_00_01_00.addEventHandler("onclick",this.Static76_onclick,this);
        };
        this.loadIncludeScript("Comp_04_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
