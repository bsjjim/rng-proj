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
            this.set_titletext("차량번호확정");
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

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","17","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","23","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","156","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","196","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("가입기간");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","499","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","539","18","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","74","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","86","18","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_innerdataset", obj);
            div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","289","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","607","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("123허1234");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","692","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","732","18","50","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("보험사");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","799","18","170","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","969","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1009","18","50","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("대리점");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","1102","18","145","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_00_00_innerdataset);
            obj.set_text("삼성화재(일등대리점)");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01","86","52","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_01_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_01_innerdataset", obj);
            div00_form_cmb00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_01_innerdataset);
            obj.set_text("신규");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","196","52","88","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("최초등록기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","289","52","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","539","52","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","607","52","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("123허1234");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","732","52","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("변경여부");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","799","52","130","24",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_form_Radio00_innerdataset", obj);
            div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니요</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","1009","52","88","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("번호변경기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00_00","1102","52","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀명");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","50","24","580",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","38","24","835",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("메모");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","74","24","330",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("번호확정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","71","0","10","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","80","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","131","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","529",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","513",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","973","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","525",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","908","10","50","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"20","200","24","631",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","456",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","408",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","98","24","228",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("번호확정취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00",null,"20","98","24","126",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("번호변경확정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00_00",null,"20","122","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("번호변경확정취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
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
        this.loadIncludeScript("MM20030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
