(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_04");
            this.set_titletext("지급내역 조회 및 취소(외산)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("출고기간");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","296","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","336","52","61","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("카메이커");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","626","5","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","818","10","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","155","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb04","402","52","144","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb04_innerdataset = new nexacro.NormalDataset("div00_form_cmb04_innerdataset", obj);
            div00_form_cmb04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb04_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","666","18","61","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","336","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","402","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","484","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","511","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("서진아이앤디(주)");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","733","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("123허1234");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","858","18","61","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","926","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("123허1234");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","86","52","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("201601011234");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01","666","52","81","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("선급금");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","733","52","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_form_Radio00_innerdataset", obj);
            div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">유</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">무</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","81","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("미결항목");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","485","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","72","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","87","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","138","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","227",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","213",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","156",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","108",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","50","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","1393","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","1393",null,"50","10",null,"0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_01",null,"10","64","28","68",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_04",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("MM11170.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
