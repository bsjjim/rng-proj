(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("기타매출 전표관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">theme://images/ico_flag_add.png</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\">theme://images/ico_flag_del.png</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\">theme://images/ico_flag_mod.png</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","794",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","398","52","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","108","86","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","180","86","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","208","86","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","30","18","74","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("웹전표구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","30","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","30","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","0","108","25",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("left 108");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","108","18","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_innerdataset", obj);
            DivSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">기타매출</Col><Col id=\"datacolumn\">기타매출</Col></Row><Row><Col id=\"codecolumn\">기타매출(BC정산)</Col><Col id=\"datacolumn\">기타매출(BC정산)</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","398","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("작성부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","29","86","67","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("실적부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","727","0","80","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","108","52","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","205","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","232","52","106","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","125","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_03","404","0","80","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","465","18","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","537","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","565","18","137","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","30","52","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("작성자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","338","0","60","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("60");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","398","86","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","465","86","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_00_innerdataset", obj);
            DivSearch_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">개인등록</Col><Col id=\"datacolumn\">개인등록</Col></Row><Row><Col id=\"codecolumn\">회계팀전송</Col><Col id=\"datacolumn\">회계팀전송</Col></Row><Row><Col id=\"codecolumn\">승인완료</Col><Col id=\"datacolumn\">승인완료</Col></Row><Row><Col id=\"codecolumn\">반려</Col><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","465","52","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0",null,null,"794","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","166","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기타매출 전표목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"웹전표구분\"/><Cell col=\"3\" text=\"전기일자\"/><Cell col=\"4\" text=\"회계전표번호\"/><Cell col=\"5\" text=\"계정유형\"/><Cell col=\"6\" text=\"작성부서\"/><Cell col=\"7\" text=\"작성자\"/><Cell col=\"8\" text=\"실적부서\"/><Cell col=\"9\" text=\"적요\"/><Cell col=\"10\" text=\"처리금액\"/><Cell col=\"11\" text=\"승인구분\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","300","0","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","15","39","80","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","86","24","114",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("회계팀전송");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","110","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("회계팀전송취소");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01_00","585","44","80","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","204",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","260",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","471","13","15","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","317",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","415","13","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","403","14","4","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","332",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"0","734",null,"40","47",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","5","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","36","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("웹전표구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","139","36","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","372","36","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("회계전표번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","69","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("실적부서");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","139","69","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","102","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","139","102","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","372","102","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","372","69","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("계정유형");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","135","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("작성자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","139","135","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","144","107","147","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","120","82","4","45",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","368","82","4","45",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","538","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("상세내역등록");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01","15","557","80","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("grd00","0","568","734",null,null,"1",null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("20");
            obj.set_binddataset("ds_grid00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"자금신청 상세내역\"/><Cell col=\"4\" text=\"차변금액\"/><Cell col=\"5\" text=\"대변금액\"/><Cell col=\"6\" text=\"실적부점\"/><Cell col=\"7\" text=\"실적담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00","498","538","76","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00","658","538","76","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01_00","585","562","80","6",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01_01","2","24","80","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","372","135","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_text("작성부서");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","168","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("계정과목");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","139","168","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","372","168","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","201","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("입금내역조회");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","139","201","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","234","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_text("사업장");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","139","234","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00","372","234","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_text("종된사업장");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00","139","267","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00","372","267","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00","0","300","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_text("세금코드");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00","139","300","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00","0","333","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_text("총지급액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00_00","139","333","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00_00_00","372","333","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_text("공급가액/세액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00_00","0","366","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_text("결의제목");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00_00_00","139","366","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","420","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("44");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","360","400","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("45");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","451","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("46");
            obj.set_text("거래처명");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","139","451","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","372","451","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("48");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","484","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("49");
            obj.set_text("주민/법인등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","139","484","595","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","372","484","120","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("51");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","450",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_01","120","497","4","45",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("53");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01_01_00","2","439","80","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("54");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","360","518","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("55");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","267","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_text("세금계산서 증빙일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02","578","538","76","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("56");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00","496","173","105","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_value("20220110");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_00","144","272","105","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("57");
            obj.set_value("20220110");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","144","41","223","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("58");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","496","41","233","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_01","144","74","70","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("60");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","216","74","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("61");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","243","74","124","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("62");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_01_00","496","74","70","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("63");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00","568","74","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("64");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_00","596","74","133","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("65");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","496","106","95","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("66");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","593","106","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("67");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","620","106","109","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("68");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","144","140","95","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("69");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","241","140","126","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("70");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_01_01","496","140","70","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("71");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_01","568","140","161","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("72");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","144","174","223","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("73");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01","144","206","105","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("74");
            obj.set_value("20220110");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_01","252","206","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("75");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_02","280","206","143","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("76");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_02_00","425","206","304","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("77");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","144","239","224","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("78");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00","496","239","233","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("79");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","144","305","185","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("80");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_cmb00_innerdataset = new nexacro.NormalDataset("Div00_00_form_cmb00_innerdataset", obj);
            Div00_00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">부가세 제외</Col><Col id=\"datacolumn\">부가세 제외</Col></Row><Row><Col id=\"codecolumn\">10% 매출세금계산서(일반)</Col><Col id=\"datacolumn\">10% 매출세금계산서(일반)</Col></Row><Row><Col id=\"codecolumn\">0% 매출세금계산서(일반)</Col><Col id=\"datacolumn\">0% 매출세금계산서(일반)</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_cmb00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","144","338","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("81");
            obj.set_format("#,###");
            obj.set_value("123123123123");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","264","338","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("82");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","496","338","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("83");
            obj.set_format("#,###");
            obj.set_value("123123123123");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","616","338","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("84");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_00","496","272","233","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("85");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_01","144","371","586","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("86");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_02","144","456","224","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("87");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_02_00","496","489","234","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("88");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","496","456","105","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("89");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_value("1231212345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","144","489","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("90");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_maskchar(" ");
            obj.set_value("1234561234567");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","104","28","132",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("회계팀 전송");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","71",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","128","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("회계팀 전송취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","-238","348","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","87","273","479","214",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("설계검토 필요. 내용이 너무 많음.");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("false");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("rgba(255,0,0,0.60)");
            obj.set_color("#ffffff");
            obj.set_font("20px \"NotoKr-Regular\"");
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
        this.registerScript("FI00510.xfdl", function() {

        this.Div00_00_Static26_03_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00_00.form.Static26_03_00_00.addEventHandler("onclick",this.Div00_00_Static26_03_00_00_onclick,this);
        };
        this.loadIncludeScript("FI00510.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
