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
            this.set_titletext("(대외계)블랙박스 이미지등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63","48.04%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","73","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("입고차량");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","460","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"출고일자\"/><Cell col=\"3\" text=\"인수자\"/><Cell col=\"4\" text=\"발주번호\"/><Cell col=\"5\" text=\"차량번호\"/><Cell col=\"6\" text=\"설비번호\"/><Cell col=\"7\" text=\"차대번호\"/><Cell col=\"8\" text=\"차량외장색상\"/><Cell col=\"9\" text=\"차종명\"/><Cell col=\"10\" text=\"용품명\"/><Cell col=\"11\" text=\"외부사진\"/><Cell col=\"12\" text=\"내부사진\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","408",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("내부사진삭제");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","98","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("외부사진삭제");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","98","24","306",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("외부사진등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","98","24","204",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("내부사진등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","85","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","136","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","71","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","481",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","465",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","267","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"63","40",null,null,null,null,null,this);
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

            obj = new Button("Button02",null,null,"38","38","23","11",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("출고기간");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","296","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","336","18","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("인수자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","482","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","522","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","179","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","878","18","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">완료</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">미완료</Col><Col id=\"datacolumn\">미완료</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","391","18","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","458","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","590","18","180","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","770","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","810","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div01:20","63",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","90","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("업로드 파일");
            obj.set_cssclass("sta_WF_title1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일번호\"/><Cell col=\"3\" text=\"순번\"/><Cell col=\"4\" text=\"파일경로\"/><Cell col=\"5\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","103","20","58","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("선택건수");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","154","20","50","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","88","0","15","40",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","148",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","226",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","64","24","80",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("위로");
            obj.set_cssclass("btn_Block_rowUp");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","76","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("아래로");
            obj.set_cssclass("btn_Block_rowDown");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","313",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","329",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01_00.addChild(obj.name, obj);
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
        this.loadIncludeScript("MM12050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
