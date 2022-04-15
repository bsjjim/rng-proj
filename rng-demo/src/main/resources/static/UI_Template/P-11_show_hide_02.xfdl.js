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
            this.set_titletext("영역확장/축소 - 그리드(좌우)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">R2B</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">인수형매각</Col></Row><Row><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">인수형매각</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divRight","754","63",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("0");
            obj.set_text("서브그리드");
            obj.set_cssclass("sta_WF_title1");
            this.divRight.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.divRight.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/><Cell col=\"1\" text=\"Column2\"/><Cell col=\"2\" text=\"Column3\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column5\"/><Cell col=\"5\" text=\"Column6\"/><Cell col=\"6\" text=\"Column7\"/><Cell col=\"7\" text=\"Column8\"/><Cell col=\"8\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"20","60","24","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("2");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_expand2");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","395",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","15","24","449",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","394",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("5");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridCount");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"6","5","47","460",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01",null,"1","10","47","441",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("7");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-4","15","60","380",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("8");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"20","70","24","465",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","304",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","224",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("11");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","76","24","144",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("12");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","76","24","64",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("13");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.divRight.addChild(obj.name, obj);

            obj = new Div("divLeft","0","63","734",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","18","120","30",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_text("마스터그리드");
            obj.set_cssclass("sta_WF_title1");
            this.divLeft.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divLeft.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/><Cell col=\"1\" text=\"Column2\"/><Cell col=\"2\" text=\"Column3\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column5\"/><Cell col=\"5\" text=\"Column6\"/><Cell col=\"6\" text=\"Column7\"/><Cell col=\"7\" text=\"Column8\"/><Cell col=\"8\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("Button00",null,"20","60","24","0",null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("3");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_expand2");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","734","220","20","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,null,"258","80","48","57",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그리드 리사이징 \r\n가로: 데이터가 많은 그리드 1개만 리사이징\r\n세로: 100% 리사이징처리");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00",null,null,"258","55","48","144",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("컬럼의 갯수가 적을 경우 좌우 배치");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("발행년도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","193","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","259","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","321","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","153","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","606","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","566","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","86","18","50","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01","136","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","348","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","463","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("오토리스 임직원");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","468","1","15","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","671","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_editformat("yyyy-MM-dd ddd");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
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
        this.registerScript("P-11_show_hide_02.xfdl", function() {
        this.temp_onload = function(obj,e)
        {

        };

        this.divLeft_Button00_onclick = function(obj,e)
        {
        	this.gfnDivExpand("width-right",40,this.divLeft,obj);
        };


        this.divRight_Button00_01_onclick = function(obj,e)
        {
            this.gfnDivExpand("left-left",0,this.divRight,obj);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_onload,this);
            this.divRight.form.Button00_00_01_00_03_00_00_01.addEventHandler("onclick",this.divRight_Button00_01_onclick,this);
            this.divLeft.form.Button00.addEventHandler("onclick",this.divLeft_Button00_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("P-11_show_hide_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
