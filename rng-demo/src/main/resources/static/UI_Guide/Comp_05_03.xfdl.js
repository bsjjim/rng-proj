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
            this.set_titletext("Tab - 타이틀/버튼영역이 없을경우");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"summ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"summ\">0</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"summ\">150000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"summ\">1000000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","10",null,null,"774","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"10","754","230","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","0","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","0","625","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","376","0","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","33","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("대여지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","33","625","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","376","33","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("대여기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","66","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("배차시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","66","625","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","376","66","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("배차장소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","132","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("기사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","132","625","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","5","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_value("정상");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","134","38","238","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_value("강남영업소");
            obj.set_readonly("true");
            obj.set_text("강남영업소");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01","134","71","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_format("##:##");
            obj.set_value("1200");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","510","71","238","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_value("영업점");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00","510","38","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_format("####-##-## ~ ####-##-##");
            obj.set_value("2021102120211212");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00_00","510","5","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_format("#########");
            obj.set_value("123456789");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_01","0","99","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("예약모델");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","99","625","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","104","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","196","104","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","388","104","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","388","137","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01","196","137","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","134","137","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","95","0","120","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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
        this.registerScript("Comp_05_03.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("Comp_05_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
