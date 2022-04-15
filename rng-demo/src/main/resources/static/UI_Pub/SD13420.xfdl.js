(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp01");
            this.set_titletext("주차현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"63","40",null,"0","57",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","485","63","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","448","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("매각센터");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","408","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","38","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","665","18","69","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("차량상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","625","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","731","18","75","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예약가</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">예약</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">대여중</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">불가동</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","846","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("매각방식");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","912","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_usesoftkeyboard("false");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">입찰</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">R2B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">수출</Col></Row><Row><Col id=\"datacolumn\">일괄</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">경매</Col><Col id=\"codecolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","4","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","505","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","86","18","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">입고일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">출고일자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">입고예정일자</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","721","3","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","806","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","902","10","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","515","18","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_02_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_02_innerdataset", obj);
            DivSearch_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">안성매각센터</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">경매장</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">핀카 차고지</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">박차 차고지</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_02_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","198","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","DivSearch:21",null,null,"40","-1",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("입고예정현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div01","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비번호\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"차종명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"영업개월\"/><Cell col=\"6\" text=\"입고예정일\"/><Cell col=\"7\" text=\"보유지점\"/><Cell col=\"8\" text=\"출발지\"/><Cell col=\"9\" text=\"탁송사\"/><Cell col=\"10\" text=\"탁송기사\"/><Cell col=\"11\" text=\"주차위치\"/><Cell col=\"12\" text=\"상품분류\"/><Cell col=\"13\" text=\"매각여부\"/><Cell col=\"14\" text=\"연료\"/><Cell col=\"15\" text=\"주행거리\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","509","44","100","6",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","72",null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","57",null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1429","12","15","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("보유현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div01","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비번호\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"차종명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"영업개월\"/><Cell col=\"6\" text=\"입고일\"/><Cell col=\"7\" text=\"보유지점\"/><Cell col=\"8\" text=\"출발지\"/><Cell col=\"9\" text=\"탁송사\"/><Cell col=\"10\" text=\"탁송기사\"/><Cell col=\"11\" text=\"주차위치\"/><Cell col=\"12\" text=\"상품분류\"/><Cell col=\"13\" text=\"매각여부\"/><Cell col=\"14\" text=\"연료\"/><Cell col=\"15\" text=\"주행거리\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","509","44","100","6",null,null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","72",null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","57",null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1429","12","15","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("출고현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div01","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비번호\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"차종명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"영업개월\"/><Cell col=\"6\" text=\"입고일\"/><Cell col=\"7\" text=\"매각일자\"/><Cell col=\"8\" text=\"출고일자\"/><Cell col=\"9\" text=\"상품분류\"/><Cell col=\"10\" text=\"매각여부\"/><Cell col=\"11\" text=\"연료\"/><Cell col=\"12\" text=\"주행거리\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","509","44","100","6",null,null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","72",null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","57",null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1429","12","15","35",null,null,null,null,null,null,this.Tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage3.form.Div01.addChild(obj.name, obj);
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
        this.registerScript("SD13420.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
        };
        this.loadIncludeScript("SD13420.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
