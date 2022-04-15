(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_06");
            this.set_titletext("협력사 제품등록(웰빙)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">전체</Col></Row><Row><Col id=\"Column0\">예</Col></Row><Row><Col id=\"Column0\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00_00",null,"63","400","382","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("상품명(한글)");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("브랜드");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","117",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","134","56","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("김나나");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("상품정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("제조사");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00","129","150",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00","0","183","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("색상");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00","129","183",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00","0","216","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("공급가");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00","129","216",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00_00","0","249","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("타사코드");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00_00","129","249",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00_00_00","0","282","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00_00_00","129","282",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00_00_00_00","0","315","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("제품분류");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00_00_00_00","129","315",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00_00_00_00_00","0","348","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("일반상품");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00_00_00_00_00","129","348",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","134","353","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("21YHOTY");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","221","353","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","248","353","145","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","134","320","130","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("rad00","134","287","200","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_rad00_innerdataset = new nexacro.NormalDataset("Div00_00_form_rad00_innerdataset", obj);
            Div00_00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">예</Col><Col id=\"codecolumn\">예</Col></Row><Row><Col id=\"datacolumn\">아니오</Col><Col id=\"codecolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_rad00_innerdataset);
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","134","254","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("21YHOTY");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","134","221","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_format("#,##9");
            obj.set_value("123123123123");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","254","221","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","134","188","130","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","155","130","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","122","130","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","89","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_text("21YHOTY");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01","222","89","75","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_text("중복확인");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","335","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","87","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","294","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","77","-1","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","179","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("1234067890");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","392","-1","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Radio("Radio00","402","18","190","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("11");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"460","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상품목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제품명\"/><Cell col=\"2\" text=\"제품코드\"/><Cell col=\"3\" text=\"일반상품\"/><Cell col=\"4\" text=\"일반상품코드\"/><Cell col=\"5\" text=\"브랜드\"/><Cell col=\"6\" text=\"제조사\"/><Cell col=\"7\" text=\"색상\"/><Cell col=\"8\" text=\"공급가\"/><Cell col=\"9\" text=\"타사코드\"/><Cell col=\"10\" text=\"등록일\"/><Cell col=\"11\" text=\" 사용유무\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","1038","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","1054","14","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","15",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"Div00_00:0","400","157","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01",null,"18","15","47","416",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","5","24","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("렌탈요금");
            obj.set_cssclass("sta_WF_title3");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","49",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("3");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"렌탈기간\"/><Cell col=\"2\" text=\"렌탈요금\"/><Cell col=\"3\" text=\"사용유무\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","235","-1","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1068","278","20","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00",null,"Div00:0","400","150","35",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","19","120","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("렌탈요금표");
            obj.set_cssclass("sta_WF_title4");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","50","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("렌탈기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","50",null,"34","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","83","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("렌탈요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","83",null,"34","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","116","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","116",null,"34","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","163","0","100","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","62","24","54",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","55","155","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Radio("rad00","134","121","200","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_00_form_rad00_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_rad00_innerdataset", obj);
            Div00_00_00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">예</Col><Col id=\"codecolumn\">예</Col></Row><Row><Col id=\"datacolumn\">아니오</Col><Col id=\"codecolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_rad00_innerdataset);
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","134","88","120","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("15");
            obj.set_format("#,##9");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","254","88","20","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("16");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_01",null,"10","100","28","148",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("구성품등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_01",null,"10","76","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);
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
        this.registerScript("SD20260.xfdl", function() {

        this.DivSearch_Radio00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DivSearch.form.Radio00.addEventHandler("onitemchanged",this.DivSearch_Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("SD20260.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
