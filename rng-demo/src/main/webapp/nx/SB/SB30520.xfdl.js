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
            this.set_titletext("중도상환/해지관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10허4089</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">10139805</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">10139805</Col><Col id=\"Column2\">77허6329</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">10074192</Col><Col id=\"Column2\">28허3310</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">10049209</Col><Col id=\"Column2\">08허5193</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">R2B</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">10139474</Col><Col id=\"Column2\">17허8312</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">10139474</Col><Col id=\"Column2\">17허8312</Col><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">10139470</Col><Col id=\"Column2\">17허8349</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">인수형매각</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">10187237</Col><Col id=\"Column2\">30호1881</Col><Col id=\"Column3\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">10096033</Col><Col id=\"Column2\">12허5036</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">10186273</Col><Col id=\"Column2\">30호1252</Col><Col id=\"Column3\">TUCSON IX (D) 2.0 2WD SMART SPECIAL</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">10045514</Col><Col id=\"Column2\">47허1675</Col><Col id=\"Column3\">LOTZE (L) 2.0 </Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("해지기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","337","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","297","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","668","18","69","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","628","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","846","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","886","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","953","18","270","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","77","7","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","394","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","725","6","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","943","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","20","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("작성자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","87","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","404","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","486","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","513","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","735","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","822","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","87","52","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","146","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","173","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","DivSearch:21",null,null,"40","48",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("처리내역");
            obj.set_url("SB::SB30520T01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("처리결과");
            obj.set_url("SB::SB30520T02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("개별계산서발행");
            obj.set_url("SB::SB30520T03.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","Tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_00_00_00",null,"10","187","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("중상환/해지 시뮬레이션");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_00_00_00_00",null,"10","155","28","191",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("중도상환/해지등록");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","97","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h50");
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
            this._addPreloadList("fdl","SB::SB30520T01.xfdl");
            this._addPreloadList("fdl","SB::SB30520T02.xfdl");
            this._addPreloadList("fdl","SB::SB30520T03.xfdl");
        };
        
        // User Script
        this.registerScript("SB30520.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.DivSearch.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
        };
        this.loadIncludeScript("SB30520.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
