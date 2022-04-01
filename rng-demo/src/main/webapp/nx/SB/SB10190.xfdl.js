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
            this.set_titletext("청구실적비교현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column19\"/><Col id=\"Column20\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","329","33","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","369","18","48","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","671","23","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","89","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","20","52","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_01","711","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("지점구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1084","18","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","369","52","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_SA_label");
            obj.set_text("청구매니저");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","100","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("123허1234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","187","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","214","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","447","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","529","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","556","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_01_00","1124","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("청구구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("청구년월");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","100","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_01_01_01","778","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_01_01_01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_01_01_01_innerdataset", obj);
            divSearch_form_cmb01_01_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_01_01_01_innerdataset);
            obj.set_text("청구부서");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","860","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","942","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","969","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("Radio00","447","18","265","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_Radio00_innerdataset = new nexacro.NormalDataset("divSearch_form_Radio00_innerdataset", obj);
            divSearch_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">월별</Col><Col id=\"datacolumn\">월별</Col></Row><Row><Col id=\"codecolumn\">분기별</Col><Col id=\"datacolumn\">분기별</Col></Row><Row><Col id=\"codecolumn\">년별</Col><Col id=\"datacolumn\">년별</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","1192","18","195","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_viewtype("B");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_MultiCombo00_innerdataset = new nexacro.NormalDataset("divSearch_form_MultiCombo00_innerdataset", obj);
            divSearch_form_MultiCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">대여료</Col><Col id=\"datacolumn\">대여료</Col></Row><Row><Col id=\"codecolumn\">고객수리(옵션반납)</Col><Col id=\"datacolumn\">고객수리(옵션반납)</Col></Row><Row><Col id=\"codecolumn\">손해배상금</Col><Col id=\"datacolumn\">손해배상금</Col></Row><Row><Col id=\"codecolumn\">기타비용</Col><Col id=\"datacolumn\">기타비용</Col></Row><Row><Col id=\"codecolumn\">법무비용</Col><Col id=\"datacolumn\">법무비용</Col></Row><Row><Col id=\"codecolumn\">과태료</Col><Col id=\"datacolumn\">과태료</Col></Row><Row><Col id=\"codecolumn\">고객부담급(반납)</Col><Col id=\"datacolumn\">고객부담급(반납)</Col></Row><Row><Col id=\"codecolumn\">위약금</Col><Col id=\"datacolumn\">위약금</Col></Row><Row><Col id=\"codecolumn\">휴차료</Col><Col id=\"datacolumn\">휴차료</Col></Row><Row><Col id=\"codecolumn\">고객수리(반납)</Col><Col id=\"datacolumn\">고객수리(반납)</Col></Row><Row><Col id=\"codecolumn\">유류비</Col><Col id=\"datacolumn\">유류비</Col></Row><Row><Col id=\"codecolumn\">고객부담금(사고)</Col><Col id=\"datacolumn\">고객부담금(사고)</Col></Row><Row><Col id=\"codecolumn\">고객수리(사고)</Col><Col id=\"datacolumn\">고객수리(사고)</Col></Row><Row><Col id=\"codecolumn\">초과운행 부담금</Col><Col id=\"datacolumn\">초과운행 부담금</Col></Row><Row><Col id=\"codecolumn\">반환지연금</Col><Col id=\"datacolumn\">반환지연금</Col></Row><Row><Col id=\"codecolumn\">해지채권</Col><Col id=\"datacolumn\">해지채권</Col></Row><Row><Col id=\"codecolumn\">보험료</Col><Col id=\"datacolumn\">보험료</Col></Row><Row><Col id=\"codecolumn\">밸류팩</Col><Col id=\"datacolumn\">밸류팩</Col></Row><Row><Col id=\"codecolumn\">카드재발급</Col><Col id=\"datacolumn\">카드재발급</Col></Row><Row><Col id=\"codecolumn\">기타수익-IOT서비스</Col><Col id=\"datacolumn\">기타수익-IOT서비스</Col></Row><Row><Col id=\"codecolumn\">승계수수료</Col><Col id=\"datacolumn\">승계수수료</Col></Row><Row><Col id=\"codecolumn\">기타수익-IOT서비스(상품권)</Col><Col id=\"datacolumn\">기타수익-IOT서비스(상품권)</Col></Row><Row><Col id=\"codecolumn\">마이플랜</Col><Col id=\"datacolumn\">마이플랜</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_MultiCombo00_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","94","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("미처리내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","412","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"No\"/><Cell col=\"1\" rowspan=\"3\" text=\"(계약)청구부서\" cssclass=\"cell_fix\"/><Cell col=\"2\" rowspan=\"3\" text=\"청구매니저\"/><Cell col=\"3\" rowspan=\"3\" text=\"청구구분\"/><Cell col=\"4\" colspan=\"6\"/><Cell col=\"10\" colspan=\"6\"/><Cell col=\"16\" colspan=\"6\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"청구\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"미청구\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"전체\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" text=\"청구\"/><Cell row=\"1\" col=\"12\" colspan=\"2\" text=\"미청구\"/><Cell row=\"1\" col=\"14\" colspan=\"2\" text=\"전체\"/><Cell row=\"1\" col=\"16\" colspan=\"2\" text=\"청구\"/><Cell row=\"1\" col=\"18\" colspan=\"2\" text=\"미청구\"/><Cell row=\"1\" col=\"20\" colspan=\"2\" text=\"전체\"/><Cell row=\"2\" col=\"4\" text=\"건수\"/><Cell row=\"2\" col=\"5\" text=\"금액\"/><Cell row=\"2\" col=\"6\" text=\"건수\"/><Cell row=\"2\" col=\"7\" text=\"금액\"/><Cell row=\"2\" col=\"8\" text=\"건수\"/><Cell row=\"2\" col=\"9\" text=\"금액\"/><Cell row=\"2\" col=\"10\" text=\"건수\"/><Cell row=\"2\" col=\"11\" text=\"금액\"/><Cell row=\"2\" col=\"12\" text=\"건수\"/><Cell row=\"2\" col=\"13\" text=\"금액\"/><Cell row=\"2\" col=\"14\" text=\"건수\"/><Cell row=\"2\" col=\"15\" text=\"금액\"/><Cell row=\"2\" col=\"16\" text=\"건수\"/><Cell row=\"2\" col=\"17\" text=\"금액\"/><Cell row=\"2\" col=\"18\" text=\"건수\"/><Cell row=\"2\" col=\"19\" text=\"금액\"/><Cell row=\"2\" col=\"20\" text=\"건수\"/><Cell row=\"2\" col=\"21\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column3\" cssclass=\"cell_fix\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column10\"/><Cell col=\"10\" text=\"bind:Column11\"/><Cell col=\"11\" text=\"bind:Column12\"/><Cell col=\"12\" text=\"bind:Column13\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:Column14\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:Column15\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:Column16\"/><Cell col=\"16\" text=\"bind:Column17\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:Column18\"/><Cell col=\"18\" text=\"bind:Column19\"/><Cell col=\"19\" text=\"bind:Column20\"/><Cell col=\"20\" text=\"bind:Column21\"/><Cell col=\"21\" text=\"bind:Column22\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" textAlign=\"center\" cssclass=\"cell_fix\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"0\" displaytype=\"number\"/><Cell col=\"5\" text=\"0\" displaytype=\"number\"/><Cell col=\"6\" textAlign=\"right\" displaytype=\"number\" text=\"0\"/><Cell col=\"7\" text=\"0\" displaytype=\"number\"/><Cell col=\"8\" text=\"0\" displaytype=\"number\"/><Cell col=\"9\" text=\"0\" displaytype=\"number\"/><Cell col=\"10\" text=\"0\" displaytype=\"number\"/><Cell col=\"11\" text=\"0\" displaytype=\"number\"/><Cell col=\"12\" displaytype=\"number\" text=\"0\"/><Cell col=\"13\" text=\"0\" displaytype=\"number\"/><Cell col=\"14\" text=\"0\" displaytype=\"number\"/><Cell col=\"15\" text=\"0\" displaytype=\"number\"/><Cell col=\"16\" text=\"0\" displaytype=\"number\"/><Cell col=\"17\" text=\"0\" displaytype=\"number\"/><Cell col=\"18\" text=\"0\" displaytype=\"number\"/><Cell col=\"19\" displaytype=\"number\" text=\"0\"/><Cell col=\"20\" text=\"0\" displaytype=\"number\"/><Cell col=\"21\" displaytype=\"number\" text=\"0\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","122",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","92",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
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
            this.divSearch.form.Static00_00_00_00_00_01.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01_01.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01_01_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Radio00.addEventHandler("onitemchanged",this.divSearch_Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("SB10190.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
