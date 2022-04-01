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
            this.set_titletext("예외유형) 좁은간격 테이블");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\">3848000</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">245000</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">2</Col></Row><Row><Col id=\"Column0\">3</Col></Row><Row><Col id=\"Column0\">4</Col></Row><Row><Col id=\"Column0\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tab_11", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">07</Col><Col id=\"Column2\">07</Col><Col id=\"Column3\">계약변경</Col><Col id=\"Column4\">01</Col><Col id=\"Column5\">정보변경</Col><Col id=\"Column6\">2022-12-12</Col><Col id=\"Column7\">계약담당자</Col><Col id=\"Column8\">홍길동</Col><Col id=\"Column9\">김순이</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">전약영업1지점</Col><Col id=\"Column12\">상세사유</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column2\">07</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column2\">07</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","355","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","779","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","565","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","315","3","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","525","3","40","51",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","739","8","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","633","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_value("123456789");
            obj.set_cssclass("input_select");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","715","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","86","18","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_value("1234067890");
            obj.set_cssclass("input_select");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","173","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","200","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_value("김나나");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","423","18","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_value("123허1234");
            obj.set_cssclass("input_select");
            obj.set_text("123허1234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","501","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","846","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1096","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","1056","3","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","1163","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","475",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("장기계약목록");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"계약상태\"/><Cell col=\"4\" text=\"고객\"/><Cell col=\"5\" text=\"차량번호\"/><Cell col=\"6\" text=\"차종\"/><Cell col=\"7\" text=\"최초계약기간\"/><Cell col=\"8\" text=\"계약시작일자\"/><Cell col=\"9\" text=\"계약종료일자\"/><Cell col=\"10\" text=\"월대여료\"/><Cell col=\"11\" text=\"고객부담금\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:Column6\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"11\" text=\"bind:Column10\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","181",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","167",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","110",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","98","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("차량이동요청");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1375","14","15","27",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1319","19","10","27",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","6","29","594",null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","0",null,null,"407","40","48",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("계약정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0","918","374",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("투입일시");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","306","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("투입시 최초Km");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","306","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","306","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("반납일시");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("요청채널구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","306","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("제휴채널");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","306","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("반납시 최종Km");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","228",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("위약금구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("월대여료*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","187","100","40",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","197","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("상세계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","216","145","11",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("27");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","813","215","100","12",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","306","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("월대여료(공급가)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","306","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("위약금률");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","306","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("31");
            obj.set_text("인수가*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","315",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("실납월대여료");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","344","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("잔가유형");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","344",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","306","344","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("37");
            obj.set_text("잔가조정확인");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","306","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("38");
            obj.set_text("선수금");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_02","612","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("39");
            obj.set_text("장기구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_02","612","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("40");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","612","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("41");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01","612","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("42");
            obj.set_text("반납사유");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","612","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("43");
            obj.set_text("월대여료(부가세)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_00","612","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("44");
            obj.set_text("약정주행거리");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","612","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("45");
            obj.set_text("월선납금");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","612","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("46");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","227",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"197","70","24","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("47");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","44","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("48");
            obj.set_value("정상");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","134","73","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("49");
            obj.set_value("2021017017");
            obj.set_readonly("true");
            obj.set_text("2021017017");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","134","131","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("50");
            obj.set_value("2021-02-02 (10:00:00)");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 (10:00:00)");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","134","160","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","441","44","166","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("52");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","441","73","166","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("53");
            obj.set_value("신규계약");
            obj.set_readonly("true");
            obj.set_text("신규계약");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","441","160","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02","747","44","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("55");
            obj.set_value("2021-02-02 ~ 2021-02-02");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 ~ 2021-02-02");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02_00","747","73","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("56");
            obj.set_value("1개월");
            obj.set_readonly("true");
            obj.set_text("1개월");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02_00_00_00","747","131","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.set_text("월간단기");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","134","347","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_value("표준잔가");
            obj.set_text("표준잔가");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","134","260","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("59");
            obj.set_value("고정");
            obj.set_readonly("true");
            obj.set_text("고정");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03","134","231","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("60");
            obj.set_value("월간단기 개인(112)");
            obj.set_readonly("true");
            obj.set_text("월간단기 개인(112)");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","441","347","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_value("없음");
            obj.set_text("없음");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","441","231","166","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("62");
            obj.set_value("만기반납");
            obj.set_readonly("true");
            obj.set_text("만기반납");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02_00_00_00_00","747","318","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_value("강제해지");
            obj.set_text("강제해지");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02_00_01","747","260","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("64");
            obj.set_value("약정주행거리없음");
            obj.set_readonly("true");
            obj.set_text("약정주행거리없음");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","441","131","143","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_value("7");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","580","131","35","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("66");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01","604","100","8","70",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("67");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00","584","105","3","45",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("68");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00","134","289","66","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("69");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00","196","289","25","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("70");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00","221","289","53","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("71");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00","270","289","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("72");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01","134","318","152","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("73");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00","282","318","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("74");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01","298","279","8","70",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("75");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00","286","309","3","45",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("76");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","441","260","149","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_value("25");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01","587","260","25","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("78");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_02","604","258","8","70",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("79");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_02","441","289","65","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("80");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01","501","289","35","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("81");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00","526","289","54","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("82");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01","576","289","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("83");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00","441","318","139","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("84");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01_00","576","318","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("85");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00","746","231","151","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("86");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00","893","231","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("87");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00",null,"191","8","125","1",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("88");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_02_00","746","289","63","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("89");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00","805","289","35","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("90");
            obj.set_text("원 ");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_01","831","289","54","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("91");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01_01","881","289","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("92");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00","200","294","3","45",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("93");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00_00","211","289","10","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("94");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02_00_00_00_01","747","102","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_value("월간단기");
            obj.set_text("월간단기");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","134","102","167","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("96");
            obj.set_value("2021-02-02 (10:00:00)");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 (10:00:00)");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","938","0",null,"374","0",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("영업채널");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("장기프로모션");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("운용리스계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","274","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("운용리스해지여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","274","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("운용리스여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","274","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("채널상세유형");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("16");
            obj.set_text("B2BC구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("전량영업이관");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","274","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("재계약혜택(월)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","274","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("B2BC고객");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","186","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("21");
            obj.set_text("계약취소일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","186",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","274","186","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("최종종료예정일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("연체관리지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("28");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","315",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","216","100","40",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","226","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("31");
            obj.set_text("계약관리정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","56","219","10","50",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","245","145","11",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("33");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","274","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("34");
            obj.set_text("채권매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","274","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("35");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","274","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("36");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","256",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","344",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","344","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("39");
            obj.set_text("순회정비매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","274","344","130","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("40");
            obj.set_text("컨펌콜 시행");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04","134","44","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("41");
            obj.set_value("직접영업");
            obj.set_readonly("true");
            obj.set_text("직접영업");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","134","73","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_text("2021017017");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","134","131","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 (10:00:00)");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02","134","160","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04_00","409","44","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("45");
            obj.set_value("직접영업");
            obj.set_readonly("true");
            obj.set_text("직접영업");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00","409","73","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_text("2021017017");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","409","131","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 (10:00:00)");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_00","409","160","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","134","189","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("49");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_value("2025-02-22");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","409","189","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("50");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_value("2025-02-22");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01","134","260","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_value("(402) 강남영업소");
            obj.set_text("(402) 강남영업소");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01","134","289","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_value("(402) 강남영업소");
            obj.set_text("(402) 강남영업소");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_01","134","318","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_value("(13080) 홍길동");
            obj.set_text("(13080) 홍길동");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_01","134","347","136","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_value("(13080) 홍길동");
            obj.set_text("(13080) 홍길동");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_00_00","409","347","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_value("(13080) 홍길동");
            obj.set_text("(13080) 홍길동");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00_00","409","318","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_value("(13080) 홍길동");
            obj.set_text("(13080) 홍길동");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00_00","409","289","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.set_value("(13080) 홍길동");
            obj.set_text("(13080) 홍길동");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","409","260","137","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div01.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_value("(402) 강남영업소");
            obj.set_text("(402) 강남영업소");
            this.tab00.Tabpage1.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","918","5","20","50",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("대여료정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div01","0","0","734","374",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","315",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("회계방식");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("원본계약서위치");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("계약서보관함번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("계약서정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"10","112","24","142",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("계약서류확인");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"10","138","24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("전자계약서 다운로드");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","99","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("이전계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","70","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("계약서스캔여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","199",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","170","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("차량가격");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","170",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","199","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("차량옵션가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("기타투입비용");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","228",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","129","100","40",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","139","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("대여료정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","56","132","10","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","158","145","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","366","228","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("26");
            obj.set_text("위약금조정반영금액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","366","199","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("사제용품비용");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","366","170","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("28");
            obj.set_text("차량가본가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","169",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04","134","44","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("30");
            obj.set_value("운용");
            obj.set_readonly("true");
            obj.set_text("운용");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","134","73","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_value("(안양) 문서고이관완료");
            obj.set_text("(안양) 문서고이관완료");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00","505","73","224","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_value("예");
            obj.set_text("예");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00",null,"10","88","24","490",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("33");
            obj.set_text("문서스캔");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_00",null,"10","112","24","374",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("34");
            obj.set_text("스캔문서조회");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_00_00",null,"10","112","24","258",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("35");
            obj.set_text("기타스캔문서");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02_00","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("37");
            obj.set_text("예상취득원가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03_00","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("39");
            obj.set_text("예상회수율");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00","0","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("40");
            obj.set_text("예상공헌이익");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","366","315","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("42");
            obj.set_text("확정공헌이익");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_00","366","286","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("43");
            obj.set_text("확정회수율");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","366","257","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("44");
            obj.set_text("확정취득원가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00_00","0","344","130","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("45");
            obj.set_text("예상기대이익");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00_00","129","344",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00","366","344","135","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("47");
            obj.set_text("확정기대이익");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00","135","347","149","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("48");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00","280","347","25","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("49");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00","307","347","38","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("50");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00","341","347","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("51");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00","134","173","211","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("52");
            obj.set_format("#,##9");
            obj.set_value("25500000");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00","341","173","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("53");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00","358","163","8","145",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("54");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00","345","164","3","45",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("55");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00","134","202","211","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("56");
            obj.set_format("#,##9");
            obj.set_value("550000");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00","341","202","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("57");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00","134","231","211","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("58");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            obj.set_value("0");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00","341","231","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("59");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_00","134","260","211","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("60");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            obj.set_value("24439234");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_00","341","260","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("61");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01","135","318","149","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("62");
            obj.set_format("#,##9");
            obj.set_value("171613");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01","280","318","25","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("63");
            obj.set_text("원 ");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00","307","318","38","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("64");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00","135","287","210","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("65");
            obj.set_format("#,##9.##");
            obj.set_value("2.17");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01","341","287","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("66");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_02","507","347","144","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("67");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_02","647","347","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("68");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01","674","347","38","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("69");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01","708","347","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("70");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_01","506","173","206","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("71");
            obj.set_format("#,##9");
            obj.set_value("25500000");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_01","708","173","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("72");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00_00","725","153","8","115",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00_00","712","164","3","45",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("74");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_01","506","202","206","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("75");
            obj.set_format("#,##9");
            obj.set_value("550000");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_01","708","202","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("76");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_01","506","231","206","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("77");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            obj.set_value("0");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_01","708","231","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("78");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_00_00","506","260","206","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("79");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            obj.set_value("24439234");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_00_00","708","260","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("80");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01","507","318","144","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("81");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00","647","318","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("82");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_01","674","318","38","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("83");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_02","708","318","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("84");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00_00","507","287","205","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("85");
            obj.set_format("#,##9.##");
            obj.set_value("2.17");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_00","708","287","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("86");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_02","297","311","10","55",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("87");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_02_00","664","313","10","55",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("88");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","505","102","224","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("89");
            obj.set_readonly("true");
            obj.set_text("예");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01","134","102","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("90");
            obj.set_readonly("true");
            obj.set_value("639");
            obj.set_text("639");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_01","341","319","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("91");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","257",null,"1","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div01.addChild(obj.name, obj);

            obj = new Div("div01_00","754","0","375","366",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static27","169","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03","169","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","169","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","169","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","169","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","169","186",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","169","215",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","169","244",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","169","273",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","169","302",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","169","331",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("CI투입비용*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("구조변경비용");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("출고가능승인");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("유의업종차종");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","157","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("12");
            obj.set_text("FMS여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","186","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("14");
            obj.set_text("FMS등록번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","215","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("16");
            obj.set_text("공동임차여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","244","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("19");
            obj.set_text("수입차면세가*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","273","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("20");
            obj.set_text("초과운행부담면제발생금액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_01","0","302","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("23");
            obj.set_text("네이게이션설비번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","331","170","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("24");
            obj.set_text("외장네비게이션(중고차)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","70","24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("26");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","275","28","100","12",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_01","294","44","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("28");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_01","174","44","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("29");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00","311","43","5","70",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("30");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_01_00","174","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("31");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_01_00","294","73","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("32");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00_00","294","48","7","70",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","174","131","160","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.set_text("일반(국산타이어)");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","174","159","160","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("35");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00","174","189","195","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("36");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00","173","218","165","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var tab00_Tabpage2_form_div01_00_form_rad00_00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage2_form_div01_00_form_rad00_00_innerdataset", obj);
            tab00_Tabpage2_form_div01_00_form_rad00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage2_form_div01_00_form_rad00_00_innerdataset);
            obj.set_text("예");
            obj.set_value("예");
            obj.set_index("0");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_01_00_00","174","247","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("38");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00_00_00","294","224","7","70",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("39");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_01_00_00","294","247","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("40");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00_01","311","224","5","70",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("41");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_01_00_00_00","174","276","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("42");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_01_00_00_00","294","276","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("43");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","174","305","60","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.set_text("1234067890");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","236","305","24","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("45");
            obj.set_cssclass("btn_Comp_src");
            obj.set_enable("false");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","263","305","107","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","174","334","160","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00","173","102","165","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var tab00_Tabpage2_form_div01_00_form_rad00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage2_form_div01_00_form_rad00_innerdataset", obj);
            tab00_Tabpage2_form_div01_00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage2_form_div01_00_form_rad00_innerdataset);
            obj.set_text("예");
            obj.set_value("예");
            obj.set_index("0");
            this.tab00.Tabpage2.form.div01_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00","1149","0",null,"374","0",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("2");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static27","0","41",null,"145","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("계약특이사항");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","5","46",null,"135","4",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("7");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","179","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("8");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","0","227",null,"147","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","196","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("10");
            obj.set_text("비고사항");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","56","189","10","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","215","145","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("12");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","226",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","5","232",null,"137","4",null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("14");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","179","186","100","40",null,null,null,null,null,null,this.tab00.Tabpage2.form.div01_00_00.form);
            obj.set_taborder("15");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div01_00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("SP정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div01","0","0","734","349",null,null,null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27_03","139","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","140","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("Sales Partner/딜러");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","139","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","140","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("수수료지급방법");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","140","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","139","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("Agent 정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","99","135","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","70","135","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("수수료*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04","144","44","218","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("12");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","144","73","218","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_value("없음");
            obj.set_text("없음");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01","144","102","218","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00","505","102","224","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_02","507","73","145","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("16");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_02","648","73","25","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01","674","73","38","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("18");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01","708","73","20","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01","712","55","3","45",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","634","28","100","12",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("21");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","70","24","0",null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","128","140","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","139","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","41","135","30",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("Sales Partner 명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","505","44","224","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01","144","131","218","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_value("123@lotte.net");
            obj.set_text("123@lotte.net");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_00","665","60","10","45",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_01","651","60","3","45",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_00_00","725","65","8","45",null,null,null,null,null,null,this.tab00.Tabpage3.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.div01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab00);
            obj.set_text("보증정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"329","570",null,null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("보증금액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("선납금*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("선수금*");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","500","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","371","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("선수금 납부개월수");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","371","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("선납금 개월수");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","371","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("보증금 개월수");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","199",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","170","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("보증증권번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","170",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","199","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("보증증권금액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","129","100","40",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","139","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("증권정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","158","145","11",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("19");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","813","28","100","12",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","371","199","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("21");
            obj.set_text("보증증권 개월수");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_02","612","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("선수금 잔액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_02","612","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("선납금 잔액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","612","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("보증금 잔액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_00","612","199","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("이행완료확인서");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","169",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","70","24","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("27");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03","134","173","167","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("월간단기 개인(112)");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00","245","191","7","45",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_01","505","73","50","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("30");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_01","555","73","35","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("31");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_02","555","44","35","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("32");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_02","505","44","50","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("33");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00","554","65","7","45",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_02","866","73","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_03","866","44","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("36");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01","865","35","7","45",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("37");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_03","745","44","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("38");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_02","745","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("39");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00","135","202","110","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("40");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01","245","202","25","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("41");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00","272","202","41","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("42");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00","313","202","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("43");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","505","202","41","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("44");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","546","202","45","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("45");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Radio("rad00","747","202","165","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab00_Tabpage4_form_div00_form_rad00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage4_form_div00_form_rad00_innerdataset", obj);
            tab00_Tabpage4_form_div00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">발송</Col><Col id=\"datacolumn\">발송</Col></Row><Row><Col id=\"codecolumn\">발송 안 함</Col><Col id=\"datacolumn\">발송 안 함</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage4_form_div00_form_rad00_innerdataset);
            obj.set_text("발송");
            obj.set_value("발송");
            obj.set_index("0");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_02","262","191","10","45",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00","135","102","110","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("48");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00","135","73","110","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("49");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00","245","73","25","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("50");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00_00","272","73","41","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("51");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00","313","73","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("52");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_00","135","44","110","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("53");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00_00","245","44","25","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("54");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00_00_00","272","44","41","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("55");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_00","313","44","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("56");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_03","245","-501","7","55",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("57");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_02_00","262","-501","10","55",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00_01","245","102","25","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("59");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00_00_01","272","102","41","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("60");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_01","313","102","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("61");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_01_00","505","102","50","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("62");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_01_00","555","102","35","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("63");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_02_00","745","102","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("64");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_02_00","866","102","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("65");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Div("div01",null,"0","550","349","0",null,null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","273","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("연락처(1)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","273",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("성명(법인명)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("법인/식별번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("연락처(1)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("보증인(1)");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"10","100","24","66",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("커스텀팝업");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"10","62","24","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("커스텀");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","274","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("연락처(2)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","274","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("보증채무액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","274","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("대표자성명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","128",null,"46","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","130","46",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","174","100","40",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","184","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("보증인(2)");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","203","145","11",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04","134","44","136","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("21");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01","134","276","136","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04_00","409","44","137","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("23");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00","409","276","137","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","131","411","40",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("25");
            obj.set_value("(12345) \n서울특별시 강남구 테헤란로 505 서울종합예술학교 3층");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","244",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","215","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("성명(법인명)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","215",null,"30","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","244","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("29");
            obj.set_text("법인/식별번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","274","273","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("32");
            obj.set_text("연락처(2)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","274","244","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("33");
            obj.set_text("보증채무액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","274","215","130","30",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("34");
            obj.set_text("대표자성명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","214",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","302",null,"46","0",null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","302","130","46",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("37");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04_01","134","218","136","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("38");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04_00_00","409","218","137","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("39");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","134","305","411","40",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("40");
            obj.set_value("(12345) \n서울특별시 강남구 테헤란로 505 서울종합예술학교 3층");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","134","73","136","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("41");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_value("123456-1234567");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","134","247","136","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("42");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_value("123456-1234567");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_00","409","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("43");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            obj.set_value("100000000");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00_00","525","73","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_03","529","63","3","55",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("45");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01","134","102","136","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00_00","409","102","137","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00_00","541","69","8","45",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("48");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_00_00","409","247","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("49");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            obj.set_value("100000000");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00_00_00","525","247","20","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div01.form);
            obj.set_taborder("50");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage4.form.div01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab00);
            obj.set_text("차량정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div01","0","0","734","374",null,null,null,null,null,null,this.tab00.Tabpage5.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("차종코드");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("차량정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"10","98","24","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("발주요청변경");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","34","100","6",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","99","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","70","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04","134","44","594","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("14");
            obj.set_value("(1HD030G1425) ACCENT (G) 4DOOR STYLE");
            obj.set_readonly("true");
            obj.set_text("(1HD030G1425) ACCENT (G) 4DOOR STYLE");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","134","73","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_value("1234567890");
            obj.set_text("1234567890");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00","505","73","224","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_value("532호 1234");
            obj.set_text("532호 1234");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_01","728","336","5","70",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"10","98","24","204",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("매각의뢰요청");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"10","98","24","102",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("구매진행현황");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("유종");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","128","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("에어백");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("차량출고 희망일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","366","157","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("차량출고일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","186","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("26");
            obj.set_text("차량등록일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","186",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","366","186","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("28");
            obj.set_text("추가할인율");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","215","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("29");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","215",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","366","215","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("31");
            obj.set_text("등록지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","315",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("33");
            obj.set_text("구매처");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("35");
            obj.set_text("구매의뢰일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_03","0","344","130","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("36");
            obj.set_text("구매전달사항");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_02","129","344",null,"30","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","102","245","48","40",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("38");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","255","120","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("39");
            obj.set_text("구매정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","286","135","30",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("40");
            obj.set_text("구매의뢰번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","285",null,"2","0",null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04_00","134","289","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_text("운용");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01","134","102","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_value("팬텀블랙");
            obj.set_text("팬텀블랙");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","505","102","224","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_value("내장기본색");
            obj.set_text("내장기본색");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01_00","134","131","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_value("가솔린");
            obj.set_text("가솔린");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00_00_00_00","505","218","224","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_value("(3890) 가양배송센터");
            obj.set_text("(3890) 가양배송센터");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01_00_00_00","134","218","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_value("(3890) 가양배송센터");
            obj.set_text("(3890) 가양배송센터");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01","505","131","207","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("48");
            obj.set_format("#,##9.##");
            obj.set_value("2");
            obj.set_readonly("true");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01","708","131","20","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("49");
            obj.set_text("개");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01","712","113","3","105",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("50");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_00_00","725","118","8","100",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("51");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01_00","505","189","207","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("52");
            obj.set_format("#,##9.##");
            obj.set_value("10");
            obj.set_readonly("true");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01_00","708","189","20","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("53");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01_00_00","505","160","224","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("54");
            obj.set_format("####-##-##");
            obj.set_value("2022-10-10");
            obj.set_readonly("true");
            obj.set_type("string");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01_00_00_00","134","160","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("55");
            obj.set_format("####-##-##");
            obj.set_value("2022-10-10");
            obj.set_readonly("true");
            obj.set_type("string");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01_00_00_00_00","134","189","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("56");
            obj.set_format("####-##-##");
            obj.set_value("2022-10-10");
            obj.set_readonly("true");
            obj.set_type("string");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01_00_00_00_01","134","318","228","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("57");
            obj.set_format("####-##-##");
            obj.set_value("2022-10-10");
            obj.set_readonly("true");
            obj.set_type("string");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_01","506","289","224","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_value("0010038101");
            obj.set_text("0010038101");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04_00_00","134","347","595","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div01.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_text("운용");
            this.tab00.Tabpage5.form.div01.addChild(obj.name, obj);

            obj = new Div("div00","div01:20","0","357","373",null,null,null,null,null,null,this.tab00.Tabpage5.form);
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("옵션정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","40",null,null,"0","0",null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"209\"/><Column size=\"103\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"옵션명\"/><Cell col=\"1\" text=\"금액(VAT포함)\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1234","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","50","24","0",null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"10","15","24","57",null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"3","10","35","49",null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"4","4","35","67",null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00",null,"29","100","11","-13",null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"10","50","24","72",null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","1131","0",null,"373","0",null,null,null,null,null,this.tab00.Tabpage5.form);
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_taborder("2");
            this.tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("용품정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1234","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","50","24","0",null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"10","15","24","57",null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"3","10","35","49",null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"4","4","35","67",null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00",null,"29","100","11","-13",null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"10","50","24","72",null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","40",null,null,"0","0",null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("9");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"209\"/><Column size=\"103\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"용품명\"/><Cell col=\"1\" text=\"금액(VAT포함)\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage5.form.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage5.form.div00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.tab00);
            obj.set_text("OBD단말");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","0","918","374",null,null,null,null,null,null,this.tab00.Tabpage6.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("단말기 Type");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("단말기 IMEI");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","500","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("단말기정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","306","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("단말기 CTN");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("장착/등록지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","141",null,"30","0",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","100","100","40",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","110","120","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("단말기 장착정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","129","145","11",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","819","34","100","6",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","306","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("15");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_02","612","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("단말기 상태");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","612","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("18");
            obj.set_text("단말기 S/N");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_00","612","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("위치정보 수집");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","140",null,"2","0",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_03","245","-501","7","55",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("20");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","181","120","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("21");
            obj.set_text("운행정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00","-4","200","145","11",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("22");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Grid("grd00","0","211",null,null,"0","0",null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("23");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"538\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"운행일시\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" text=\"항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"10","114","24","0",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("24");
            obj.set_text("단말기조회/관리");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btn00_00",null,"10","126","24","118",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("25");
            obj.set_text("충격/고장코드관리");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","435","171","100","40",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("26");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00",null,"10","14","25","230",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("27");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00_00",null,"10","14","25","100",null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("28");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","44","473","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","134","73","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","440","73","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","746","44","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","746","73","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","746","144","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","134","144","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","440","144","167","24",null,null,null,null,null,null,this.tab00.Tabpage6.form.div00_00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_format("9999-99-99 (99:99:99)");
            obj.set_value("2022-12-12 (22:22:22)");
            obj.set_type("string");
            this.tab00.Tabpage6.form.div00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.tab00);
            obj.set_text("청구/채권");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div01","0","0","734","354",null,null,null,null,null,null,this.tab00.Tabpage7.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("결제고객");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("납입주기");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("결제월");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("청구정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"10","124","24","274",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("종표통지서발송");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"10","74","24","196",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("입금내역");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","99","135","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("결제일");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","70","135","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("결제방법");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("가상계좌번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","228",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("무통장계좌번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("CMS계좌번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","187","100","40",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","197","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("21");
            obj.set_text("결재정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","216","145","11",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","227",null,"2","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","134","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("(안양) 문서고이관완료");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_00",null,"10","124","24","530",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("스케줄미리보기");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_00_00",null,"10","124","24","402",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("26");
            obj.set_text("실행통지서발송");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","315","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","315",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"10","86","24","106",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("29");
            obj.set_text("스케줄수정");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"10","102","24","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("청구/수납내역");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02_00","129","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03_00","0","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("32");
            obj.set_text("결제담당자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00","0","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("33");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","346","44","384","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("35");
            obj.set_text("(결제고객 변경 시 결제정보 변경에서 CMS 또는 카드자동이체 신청필수)");
            obj.set_cssclass("sta_txt_desc");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","44","80","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("36");
            obj.set_value("123456789");
            obj.set_text("123456789");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","216","44","24","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","243","44","97","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("38");
            obj.set_value("김나나");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00_01","340","47","7","25",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("39");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00","505","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("40");
            obj.set_enable("false");
            obj.set_text("가상계좌");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","505","102","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.set_text("말일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","134","102","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            obj.set_text("익월");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","134","131","57","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("43");
            obj.set_value("P12345");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","193","131","24","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_Comp_src");
            obj.set_enable("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","220","131","115","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("45");
            obj.set_value("홍길순");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","134","160","57","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("46");
            obj.set_value("P12345");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","193","160","24","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_Comp_src");
            obj.set_enable("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","220","160","115","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("48");
            obj.set_value("홍길순");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("btn00","337","131","110","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("49");
            obj.set_text("결제담당자등록");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","134","231","265","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.set_text("농협(1234-12345673-1234");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("btn00_00","401","231","122","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("51");
            obj.set_text("가상계좌번호발급");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00","134","260","265","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00","134","289","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_displaynulltext("(은행)");
            obj.set_text("(안양) 문서고이관완료");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00_00","258","289","265","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","134","318","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("55");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_displaynulltext("(카드사)");
            obj.set_text("(안양) 문서고이관완료");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00_00_00","258","318","265","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("btn00_01","525","289","98","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("57");
            obj.set_text("CMS계좌등록");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","525","318","98","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("58");
            obj.set_text("카드번호등록");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","81","197","429","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("59");
            obj.set_text("※ B2C계약청구정보 입력 시 [B2C 장기납입도래 기간 단축] 영업 게시글 참조");
            obj.set_cssclass("sta_txt_desc");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01","632","10","14","25",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01.form);
            obj.set_taborder("60");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01.addChild(obj.name, obj);

            obj = new Div("div01_00","754","0",null,"357","0",null,null,null,null,null,this.tab00.Tabpage7.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("매입접수번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("연체이자부과");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("연체이자변경사유");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","281","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("연체이자정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"139","100","24","180",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("10");
            obj.set_text("위약금산출");
            obj.set_cssclass("btn_Block_popup");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"139","74","24","102",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("연체내역");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","99","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("12");
            obj.set_text("영세율적용여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","70","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("13");
            obj.set_text("연체이자율");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","199",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","170","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("통합청구요청");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","170",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","199","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("17");
            obj.set_text("계약별연체현황");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("18");
            obj.set_text("연체개월수");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","228",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","216","129","65","40",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("20");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","139","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("21");
            obj.set_text("채권정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","158","145","11",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("22");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","169",null,"2","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","134","102","227","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_value("해당없음");
            obj.set_text("해당없음");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("25");
            obj.set_text("회차조정");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"139","98","24","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("채권상담관리");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","44","105","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("28");
            obj.set_text("123456789");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","241","44","24","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","134","173","227","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01","0","327","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("31");
            obj.set_text("세금계산서 발행일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_01","139","327",null,"30","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","435","286","50","40",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("33");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","296","120","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("34");
            obj.set_text("세금계산서");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00","-4","315","145","11",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("35");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00","134","73","200","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var tab00_Tabpage7_form_div01_00_form_rad00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage7_form_div01_00_form_rad00_innerdataset", obj);
            tab00_Tabpage7_form_div01_00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage7_form_div01_00_form_rad00_innerdataset);
            obj.set_text("예");
            obj.set_value("예");
            obj.set_index("0");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","510","74","60","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("38");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_enable("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","570","74","20","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("39");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00","510","102","200","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var tab00_Tabpage7_form_div01_00_form_rad00_00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage7_form_div01_00_form_rad00_00_innerdataset", obj);
            tab00_Tabpage7_form_div01_00_form_rad00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage7_form_div01_00_form_rad00_00_innerdataset);
            obj.set_text("예");
            obj.set_value("예");
            obj.set_index("0");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","257","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("41");
            obj.set_text("사고부담금 청구방식");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","228","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("42");
            obj.set_text("연체배분구간");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","366","199","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("43");
            obj.set_text("고객별연체현황");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","134","232","60","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("44");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_enable("false");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","194","232","40","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("45");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00","134","202","227","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("해당없음");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00","134","260","121","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_text("적용");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00_00","510","260","121","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("48");
            obj.set_text("우편+CMS");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","510","202","219","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("49");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("해당없음");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00_00","510","231","219","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("50");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("해당없음");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","225","327","140","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("51");
            obj.set_text("세금계산서 발행방법");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","475","327","150","30",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("52");
            obj.set_text("초회차계산서 발행일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","326",null,"2","0",null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_01","144","330","72","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_value("25일");
            obj.set_text("25일");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_01_00","369","330","97","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_value("정발행");
            obj.set_text("정발행");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","628","330","100","24",null,null,null,null,null,null,this.tab00.Tabpage7.form.div01_00.form);
            obj.set_taborder("55");
            obj.set_format("####-##-##");
            obj.set_value("2022-10-10");
            obj.set_type("string");
            obj.set_readonly("true");
            this.tab00.Tabpage7.form.div01_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.tab00);
            obj.set_text("보험/정비");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0","918","288",null,null,null,null,null,null,this.tab00.Tabpage8.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("정비상품");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("순회주기");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("타이어펑크(TK)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("정비정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","306","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("일반정비");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","306","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("일반타이어");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","306","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("고객부담금");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("검사정비");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("내부크리닝");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","306","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("타이어등급");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","306","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("방문정비 쿠폰");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("19");
            obj.set_text("순회정비매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","216","100","40",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("21");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","226","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("정비담당");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","245","145","11",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","306","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_02","612","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("소모품교환");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_02","612","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("27");
            obj.set_text("정비대차");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","612","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("긴급출동");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01","612","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("엔진오일");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","612","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("정비센터");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","256",null,"2","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03","134","260","167","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("31");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","441","260","166","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("32");
            obj.set_value("010-1234-1234");
            obj.set_readonly("true");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","186","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("33");
            obj.set_text("스노우타이어");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","186",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","306","186","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("재고스노우타이어");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01_00","612","157","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("36");
            obj.set_text("광택");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01_00_00","612","186","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("37");
            obj.set_text("VIP정비");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","44","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","134","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("39");
            obj.set_enable("false");
            obj.set_text("1회/2월");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","134","131","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("40");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","134","189","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00","134","160","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00","440","189","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00","440","160","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01","440","131","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("45");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01","440","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.set_text("마모시 제공");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_02","440","44","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_text("10만원");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00_00","746","189","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("48");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00","746","160","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("49");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_00","746","131","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00","746","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.set_text("5일/년");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_02_00","746","44","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            obj.set_text("5회/년");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_00","746","260","167","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("53");
            obj.set_value("순회정비 3MOT");
            obj.set_readonly("true");
            obj.set_text("순회정비 3MOT");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_02","134","102","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.set_text("미가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01","440","102","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("55");
            obj.set_enable("false");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_00_00","746","102","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.set_text("주기별교체");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"10","98","24","102",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("57");
            obj.set_text("정비접수조회");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"10","98","24","0",null,null,null,null,null,this.tab00.Tabpage8.form.div00.form);
            obj.set_taborder("58");
            obj.set_text("정비이력조회");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage8.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","938","0",null,"274","0",null,null,null,null,null,this.tab00.Tabpage8.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"10","98","24","0",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("보험가입증명");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("보험연령");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("자손조건");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("운전자범위");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","226","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("보험정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","274","99","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("특별요율코드");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","274","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("무보험상해");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","274","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("대물조건");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("법률특약여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","274","128","130","30",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("가입보험사");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01","134","44","136","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_value("만 24세");
            obj.set_text("만 24세");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01","134","73","136","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_value("자손 1억원");
            obj.set_text("자손 1억원");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_01","134","131","136","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_value("미가입");
            obj.set_text("미가입");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_00_00","409","131","137","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_value("현대해상");
            obj.set_text("현대해상");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00_00","409","73","137","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_value("2억원/1인당");
            obj.set_text("2억원/1인당");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","409","44","137","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_value("1억원");
            obj.set_text("1억원");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"10","98","24","102",null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("보험조건변경");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01_00","134","102","136","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_value("표준");
            obj.set_text("표준");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_00_00_00","409","102","137","24",null,null,null,null,null,null,this.tab00.Tabpage8.form.div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_value("해당없음");
            obj.set_text("해당없음");
            this.tab00.Tabpage8.form.div01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage9",this.tab00);
            obj.set_text("고객정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","570","0",null,"371","26",null,null,null,null,null,this.tab00.Tabpage9.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage9.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("담당자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","339","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","612","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","134","44","57","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","193","44","24","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","220","44","115","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","473","44","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("13");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","746","44","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("14");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("15");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01","254","73","20","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","279","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("17");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","401","73","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","170",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("담당자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","141",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","170","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","100","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","110","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("결제담당자");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","129","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","339","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","612","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("27");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","140",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","144","57","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","193","144","24","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","220","144","115","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","473","144","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("32");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","746","144","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("33");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","173","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("34");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00","254","173","20","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","279","173","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("36");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Combo("Combo01_00","401","173","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("37");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","270",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","241","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("39");
            obj.set_text("담당자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","241",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","270","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("41");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","435","200","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("42");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","210","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("43");
            obj.set_text("관리담당자");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00","-4","229","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("44");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","339","241","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("45");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00","612","241","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("46");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","240",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","134","244","57","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("48");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","193","244","24","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","220","244","115","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00","473","244","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("51");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","746","244","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("52");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","134","273","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("53");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00_00","254","273","20","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("54");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","279","273","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("55");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00","401","273","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("56");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","341","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("57");
            obj.set_text("법정검사 년월");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","341",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00","435","300","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("59");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","310","155","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("60");
            obj.set_text("법정(정기) 검사정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00","-4","329","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("61");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","339","341","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("62");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00","612","341","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("63");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","340",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00_00","473","344","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("65");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","746","344","104","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("66");
            obj.set_value("010-1234-1234");
            obj.set_readonly("true");
            obj.set_text("010-1234-1234");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","134","344","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div00.form);
            obj.set_taborder("67");
            obj.set_format("####-##");
            obj.set_value("190002");
            obj.set_type("string");
            obj.set_readonly("true");
            this.tab00.Tabpage9.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","0","0","550","407",null,null,null,null,null,null,this.tab00.Tabpage9.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage9.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("운전자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","70","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","226","0","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("실운전자(1)");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","274","41","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("면허번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01","134","44","136","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("만 24세");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01","134","73","136","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("자손 1억원");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","408","44","137","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("1억원");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02_00","129","170",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("운전자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","141",null,"30","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03_00","0","170","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","226","100","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","110","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("실운전자(2)");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","56","103","10","50",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00","-4","129","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("21");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","274","141","130","30",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("면허번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","140",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_01_00","134","144","136","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("24");
            obj.set_text("만 24세");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01_00","134","173","136","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("자손 1억원");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00_00","408","144","137","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("26");
            obj.set_text("1억원");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","241","130","56",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("고객주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","241",null,"56","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00","226","200","100","40",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("29");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","210","120","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("주소정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","56","203","10","50",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00","-4","229","145","11",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("32");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","240",null,"2","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","244","50","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("34");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_value("12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","186","244","24","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","213","244","332","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","134","270","411","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("37");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","131","268","70","2",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("38");
            obj.set_text("원칙4(예외2)");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00","0","296","130","56",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("39");
            obj.set_text("범칙금주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","296",null,"56","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","134","299","50","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("41");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_value("12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","186","299","24","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01","213","299","332","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","134","325","411","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("44");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00","131","323","70","2",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("45");
            obj.set_text("원칙4(예외2)");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_00","0","351","130","56",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("46");
            obj.set_text("순회정비주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00_00","129","351",null,"56","0",null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00","134","354","50","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("48");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_value("12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00","186","354","24","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00","213","354","332","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00","134","380","411","24",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("51");
            obj.set_text("P12345");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00","131","378","70","2",null,null,null,null,null,null,this.tab00.Tabpage9.form.div01.form);
            obj.set_taborder("52");
            obj.set_text("원칙4(예외2)");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","1462","15","10","250",null,null,null,null,null,null,this.tab00.Tabpage9.form);
            obj.set_taborder("2");
            obj.set_text("탭내 스크롤 영역 여백 10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage9.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage10",this.tab00);
            obj.set_text("공동임차");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage10.form);
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage10.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("공통임차목록");
            obj.set_cssclass("sta_WF_title1");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"청구고객\"/><Cell col=\"3\" text=\"결제담당자\"/><Cell col=\"4\" text=\"계산서발행일자\"/><Cell col=\"5\" text=\"결제월\"/><Cell col=\"6\" text=\"결제일\"/><Cell col=\"7\" text=\"결제방법\"/><Cell col=\"8\" text=\"가상계좌번호\"/><Cell col=\"9\" text=\"연체현황\"/><Cell col=\"10\" text=\"연체개월수\"/><Cell col=\"11\" text=\"청구지분율\"/><Cell col=\"12\" text=\"청구금액\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"10\" text=\"합계\" textAlign=\"center\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","109","20","475","24",null,null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("2");
            obj.set_text("※ 공통임차는 [6001] 청구유형관리에서 처리 가능합니다. 투입 후 즉시 처리해야 합니다.");
            obj.set_cssclass("sta_txt_desc");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","122","24","610",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("가상계좌번호발급");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","737",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01",null,"13","15","35","725",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","794",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"13","10","35","786",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"14","4","35","804",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00",null,"39","100","11","724",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","809",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","128","24","478",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("CMS계좌/타드등록");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00",null,"21","14","25","592",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","110","24","364",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("결제담당자등록");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","74","24","286",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("연체내역");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00",null,"20","74","24","208",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("입금내역");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_00",null,"20","102","24","102",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("청구/수납내역");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00_00",null,"21","14","25","190",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("19");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_01",null,"20","98","24","0",null,null,null,null,null,this.tab00.Tabpage10.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("청구유형관리");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage10.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage11",this.tab00);
            obj.set_text("이력관리");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage11.form);
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage11.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("변경이력");
            obj.set_cssclass("sta_WF_title1");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_tab_11");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분코드\"/><Cell col=\"2\" text=\"구분명\"/><Cell col=\"3\" text=\"사유코드\"/><Cell col=\"4\" text=\"사유명\"/><Cell col=\"5\" text=\"변경일자\"/><Cell col=\"6\" text=\"변경항목\"/><Cell col=\"7\" text=\"변경전내용\"/><Cell col=\"8\" text=\"변경후내용\"/><Cell col=\"9\" text=\"수정자\"/><Cell col=\"10\" text=\"수정부서\"/><Cell col=\"11\" text=\"상세사유\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:Column8\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:Column9\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:Column10\"/><Cell col=\"10\" text=\"bind:Column11\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:Column12\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","0",null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","57",null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"13","10","35","49",null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"14","4","35","67",null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00",null,"39","100","11","-13",null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","72",null,null,null,null,null,this.tab00.Tabpage11.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.tab00.Tabpage11.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage12",this.tab00);
            obj.set_text("기타");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div01_00","0","0","375","319",null,null,null,null,null,null,this.tab00.Tabpage12.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage12.addChild(obj.name, obj);

            obj = new Static("Static27","194","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03","194","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","194","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","194","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","194","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집·이용·제공동의서");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("제3자 정보 제공 동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("마케팅활용 동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("개인정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("수집·이용 동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","157","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("12");
            obj.set_text("충전사업자 개인정보 제공 동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","199","131","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","199","159","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("미확인");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","199","101","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","199","73","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00","199","44","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("18");
            obj.set_text("완비");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","207","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("19");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_02","129","228",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","228","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("23");
            obj.set_text("대납여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("24");
            obj.set_text("대납사유");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("25");
            obj.set_text("SMS수신동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","197","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("26");
            obj.set_text("과태료 대납동의");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","216","145","11",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","227",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00","134","231","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_01","134","260","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","134","288","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","181","187","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00.form);
            obj.set_taborder("32");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00","395","0","375","319",null,null,null,null,null,null,this.tab00.Tabpage12.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("2");
            this.tab00.Tabpage12.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","286",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","289","171","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("9");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","226","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("신차장다이렉트");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","257","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("CDM노출여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","286","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("쿠폰번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00","133","260","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","257",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","256",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","166","216","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00","134","260","140","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab00_Tabpage12_form_div01_00_00_form_rad00_00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage12_form_div01_00_00_form_rad00_00_innerdataset", obj);
            tab00_Tabpage12_form_div01_00_00_form_rad00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">부</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage12_form_div01_00_00_form_rad00_00_innerdataset);
            obj.set_text("여");
            obj.set_value("여");
            obj.set_index("0");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","194","41",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","169","70",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","194","99",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","194","128",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","194","157",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","41","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("15");
            obj.set_text("서비스 패키지 가입신청");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","0","70","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("16");
            obj.set_text("CI값 존재여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","99","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("17");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","10","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("18");
            obj.set_text("서비스패키지");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","56","-1","10","50",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","29","145","11",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("20");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","40",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","128","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("22");
            obj.set_text("개인정보 제공 동의");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","157","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("23");
            obj.set_text("서비스 패키지 가입여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_02","199","131","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("24");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01","199","159","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("25");
            obj.set_text("여");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","199","101","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("26");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00","199","44","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("27");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","214","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("28");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","194","186",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","186","195","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("30");
            obj.set_text("서비스 패키지 카드번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00_00","199","73","140","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab00_Tabpage12_form_div01_00_00_form_rad00_00_00_innerdataset = new nexacro.NormalDataset("tab00_Tabpage12_form_div01_00_00_form_rad00_00_00_innerdataset", obj);
            tab00_Tabpage12_form_div01_00_00_form_rad00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">부</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(tab00_Tabpage12_form_div01_00_00_form_rad00_00_00_innerdataset);
            obj.set_text("여");
            obj.set_value("여");
            obj.set_index("0");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","199","189","171","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01_00_00.form);
            obj.set_taborder("32");
            this.tab00.Tabpage12.form.div01_00_00.addChild(obj.name, obj);

            obj = new Div("div01","div01_00_00:20","0",null,"334","0",null,null,null,null,null,this.tab00.Tabpage12.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.tab00.Tabpage12.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","111",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","40",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","182","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("기사포함여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","182",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","141","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","151","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("기사정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","144","10","50",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","170","145","11",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","181",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","211","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("기사명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","211",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","240","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("기사월급여");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","269","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("인력제휴업체");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","269",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","240",null,"30","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","348","240","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("휴일초과금액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","348","211","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("평일초과금액");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00","134","185","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("포함");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","134","214","57","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("16");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","193","214","24","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","220","214","115","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("18");
            obj.set_value("홍길순");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","0","40","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("대차이용구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","348","40","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("탁송여부");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","39",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","80","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("MGM");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","0","111","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("24");
            obj.set_text("추천인");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00","166","70","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","9","160","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("28");
            obj.set_text("신차전대차 이용정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","166","0","48","40",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("29");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","348","111","130","30",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("신규가입자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","0","110",null,"2","0",null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","43","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("31");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","482","43","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("32");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","134","114","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("33");
            obj.set_text("장기고객");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","482","114","80","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("34");
            obj.set_value("123406789");
            obj.set_enable("false");
            obj.set_text("123406789");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","564","114","115","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("35");
            obj.set_value("김나나");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","220","272","115","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("36");
            obj.set_value("홍길순");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","193","272","24","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","134","272","57","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("38");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","482","214","60","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("39");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","542","214","35","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("40");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","542","243","35","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("41");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","482","243","60","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("42");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","243","120","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("43");
            obj.set_format("#,##9");
            obj.set_value("150000");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","243","20","24",null,null,null,null,null,null,this.tab00.Tabpage12.form.div01.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage12.form.div01.addChild(obj.name, obj);

            obj = new Div("div00","0","tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00",null,null,"100","10","0","0",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","88","28","330",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("계약종료");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","262",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02",null,"10","115","28","143",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("계약서출력");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_02_00","0","10","116","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("차량이동관리");
            obj.set_cssclass("btn_Comm_link");
            obj.set_iconPosition("left");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_02_00_00","119","10","116","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("통합고객관리");
            obj.set_cssclass("btn_Comm_link");
            obj.set_iconPosition("left");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","422",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("투입");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_00",null,"10","139","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("계약확인서출력");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_01",null,"10","127","28","490",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("구매의뢰취소");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_01_00",null,"10","103","28","621",null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("구매의뢰");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_00_00",null,"10","151","28","728",null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("전자계약발주요청");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","8","859","918","374",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("보증금액");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("선납금*");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("선수금*");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","500","0","100","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","371","99","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("선수금 납부개월수");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","371","70","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("선납금 개월수");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","371","41","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("보증금 개월수");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","199",null,"30","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","170","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("보증증권번호");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","170",null,"30","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","199","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_text("보증증권금액");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","129","100","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","139","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_text("증권정보");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","158","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","813","28","100","12",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","371","199","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_text("보증증권 개월수");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_02","612","99","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_text("선수금 잔액");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_02","612","70","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_text("선납금 잔액");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","612","41","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_text("보증금 잔액");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_00","612","199","130","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_text("이행완료확인서");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","169",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","70","24","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_03","134","173","167","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("월간단기 개인(112)");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00","245","191","7","45",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("29");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00","912","133","5","70",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("30");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_00_00","555","102","35","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("31");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_00_00","505","102","50","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("32");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_01","505","73","50","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("33");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_01","555","73","35","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("34");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_02","555","44","35","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("35");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_02","505","44","50","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("36");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00","554","65","7","45",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("37");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_00_01","866","102","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("38");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_01_02","866","73","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("39");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_03","866","44","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("40");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01","865","35","7","45",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("41");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_02","912","4","5","70",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("42");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_03","745","44","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("43");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_02","745","73","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("44");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_01_00_01","745","102","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("45");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00","135","202","110","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("46");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01","245","202","25","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("47");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00","272","202","41","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("48");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00","313","202","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("49");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","505","202","41","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("50");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","546","202","45","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("51");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rad00","747","202","165","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_00_form_rad00_innerdataset = new nexacro.NormalDataset("div00_00_form_rad00_innerdataset", obj);
            div00_00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">발송</Col><Col id=\"datacolumn\">발송</Col></Row><Row><Col id=\"codecolumn\">발송 안 함</Col><Col id=\"datacolumn\">발송 안 함</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rad00_innerdataset);
            obj.set_text("발송");
            obj.set_value("발송");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_02","262","191","10","45",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("53");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00","135","102","110","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("54");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00","245","102","25","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("55");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00","272","102","41","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("56");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00","313","102","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("57");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00","135","73","110","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("58");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00","245","73","25","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("59");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00_00","272","73","41","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("60");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00","313","73","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("61");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01_00_00_00_00","135","44","110","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("62");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01_00_00_00","245","44","25","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("63");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00_00_00","272","44","41","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("64");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_00_00_00_00","313","44","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("65");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_03","245","71","7","55",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("66");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_02_00","262","71","10","55",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("67");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div01","946","858","734","349",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","139","70",null,"30","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","140","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("Sales Partner/딜러");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27","139","41",null,"30","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","140","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("수수료지급방법");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","140","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","139","99",null,"30","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","102","0","48","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("Agent 정보");
            obj.set_cssclass("sta_WF_title2");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","99","135","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","70","135","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("수수료*");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_04","144","44","218","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","144","73","218","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_value("없음");
            obj.set_text("없음");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01","144","102","218","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00","505","102","224","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_02","507","73","145","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_02","648","73","25","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01","674","73","41","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01","711","73","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01","715","55","3","45",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00_02","711","44","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","634","28","100","12",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"10","70","24","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","128","140","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","139","128",null,"30","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","41","135","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_text("Sales Partner 명");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03_00_00","505","44","224","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_01","144","131","218","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_value("123@lotte.net");
            obj.set_text("123@lotte.net");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_00","665","60","10","45",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_01","651","60","3","45",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_01_00_00","729","60","5","45",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_01_00_00_00_00","134","189","224","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_format("####-##-##");
            obj.set_value("2022-10-10");
            obj.set_readonly("true");
            obj.set_type("string");
            this.div01.addChild(obj.name, obj);
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
        this.registerScript("ETC-01.xfdl", function() {

        this.tab00_Tabpage12_div01_00_Static26_02_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.tab00.Tabpage12.form.div01_00.form.Static26_02_02.addEventHandler("onclick",this.tab00_Tabpage12_div01_00_Static26_02_02_onclick,this);
            this.tab00.Tabpage12.form.div01_00_00.form.Static26_02_02_00.addEventHandler("onclick",this.tab00_Tabpage12_div01_00_Static26_02_02_onclick,this);
        };
        this.loadIncludeScript("ETC-01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
