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
            this.set_titletext("Tab - 탭내 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"summ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"summ\">0</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"summ\">150000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"summ\">1000000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","10",null,"63","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("매각일");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","364","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","431","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","513","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","30","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","597","18","39","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","638","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","848","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","914","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,"11","38","38","30",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","94","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","285","0","120","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","123",null,"194","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"정형데이터\"/><Cell col=\"3\" text=\"비정형데이터\"/><Cell col=\"4\" text=\"금액\"/><Cell col=\"5\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Flag\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:Delete\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column5\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Column1\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"1100000\" displaytype=\"number\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","473","73","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","93","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,318,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_05_01.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_05_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
