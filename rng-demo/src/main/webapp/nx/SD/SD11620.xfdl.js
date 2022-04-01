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
            this.set_titletext("계약발주진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"198","794",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","369","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("번호선택");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","369","52","83","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","369","86","93","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("구매진행상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","120","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("원본계약서");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","369","120","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("스캔여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","329","5","40","100",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","20","153","68","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","369","153","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("장기구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","90","5","10","175",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","100","18","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","144","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","171","18","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","100","52","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","212","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","100","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","187","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","214","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","100","120","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00","100","153","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","451","8","10","175",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01","461","15","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","461","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","520","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","547","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_02","461","86","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_02_00","461","120","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_02_00_00","461","153","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","573","15","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"794","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"신/중고차\"/><Cell col=\"2\" text=\"계약진행상태\"/><Cell col=\"3\" text=\"장기구분\"/><Cell col=\"4\" text=\"계약지점\"/><Cell col=\"5\" text=\"영업매니저\"/><Cell col=\"6\" text=\"견적번호\"/><Cell col=\"7\" text=\"견적일자\"/><Cell col=\"8\" text=\"거래처명\"/><Cell col=\"9\" text=\"처종명\"/><Cell col=\"10\" text=\"월대여료\"/><Cell col=\"11\" text=\"계약서번호\"/><Cell col=\"12\" text=\"진행단계\"/><Cell col=\"13\" text=\"공급사\"/><Cell col=\"14\" text=\"구매의뢰일자\"/><Cell col=\"15\" text=\"구매의뢰번호\"/><Cell col=\"16\" text=\"발주일자\"/><Cell col=\"17\" text=\"발주번호\"/><Cell col=\"18\" text=\"CM계약번호\"/><Cell col=\"19\" text=\"원본계약서상태\"/><Cell col=\"20\" text=\"스캔여부\"/><Cell col=\"21\" text=\"출고승인요청일\"/><Cell col=\"22\" text=\"최종출고승인확인\"/><Cell col=\"23\" text=\"최종출고승인일\"/><Cell col=\"24\" text=\"출고요청일\"/><Cell col=\"25\" text=\"출고보류일\"/><Cell col=\"26\" text=\"출고일자\"/><Cell col=\"27\" text=\"일고일자\"/><Cell col=\"28\" text=\"검수일\"/><Cell col=\"29\" text=\"경유지\"/><Cell col=\"30\" text=\"차대번호\"/><Cell col=\"31\" text=\"임시차량번호\"/><Cell col=\"32\" text=\"차량번호\"/><Cell col=\"33\" text=\"등록일자(구청)\"/><Cell col=\"34\" text=\"등록일차(전산)\"/><Cell col=\"35\" text=\"차량준비완료예정일\"/><Cell col=\"36\" text=\"차량준비완료일\"/><Cell col=\"37\" text=\"차량투입일\"/><Cell col=\"38\" text=\"계약서이관일\"/><Cell col=\"39\" text=\"서고입고일\"/><Cell col=\"40\" text=\"계약취소일\"/><Cell col=\"41\" text=\"구매전달사항\"/><Cell col=\"42\" text=\"생산예정일\"/><Cell col=\"43\" text=\"차량배정일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","49",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","1",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","23.69%","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","734","763","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","2","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("진행단계");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","36","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","373","36","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","69","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","102","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("차종");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","102","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","373","69","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("거래처명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","41","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","24","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"5","122","24","180",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("장기계약서입출고");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"5","98","24","78",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("구매진행현황");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"5","74","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("탁송요청");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","135","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("공급사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","135","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","373","135","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("월대여료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","168","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","168","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","201","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","201","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","373","201","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("구매의뢰번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","373","168","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("구매의뢰일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","234","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("CM계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","234","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","373","234","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","267","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("원본계약서상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00","129","267","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","300","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("출고승인요청일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","300","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","373","300","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("최종출고승인확인");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","373","267","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("스캔여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","0","333","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("최종출고승인일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00","129","333","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00","373","333","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("출고요청일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00","0","366","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("출고보류일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00","129","366","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","399","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("출고일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","399","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00","373","399","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","373","366","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("출고예정일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01","0","432","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_01","129","432","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_01","373","432","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_01","0","465","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("임시차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_01","129","465","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01","0","498","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("등록일자(구청)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_01","129","498","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_01","373","498","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("등록일자(전산)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_01","373","465","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","0","531","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("보험사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00","129","531","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00_00","373","531","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("검수일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00","0","564","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("차량투입일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00","129","564","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","597","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("차량준비완료일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00","129","597","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00_00","373","564","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_text("차량준비완료예정일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01_00","0","630","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("계약서이관일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_01_00","129","630","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_01_00","373","630","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_text("문서고입고일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","0","663","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00","129","663","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00_00_00","373","663","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00_00_00","0","696","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_text("지점→본사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00_00_00","129","696","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00","0","729","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00","129","729","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00_00","373","729","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_text("본사→지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00_00_00","373","696","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_text("본사→CM");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","516","173","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","134","206","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00","134","305","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00","134","338","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00","134","371","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00","134","404","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_01","516","338","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_01","516","371","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_00","516","404","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01","134","569","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_00","516","569","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("82");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_01","134","602","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("83");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_01_00","134","635","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("84");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_01_00_00","516","635","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("85");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_02","134","503","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("86");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_02_00","516","503","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("87");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00_00_00_00_01_02_00_00","516","536","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("88");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","134","74","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("89");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","516","74","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("90");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","516","41","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("91");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01","134","107","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("92");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02","134","140","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("93");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00","516","140","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("94");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_01","134","173","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("95");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00","516","206","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("96");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00","516","239","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("97");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00","134","239","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("98");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01","516","272","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("99");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00","134","272","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01_00","516","305","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("101");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00_00","134","437","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("102");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01_01","516","437","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("103");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00_00_00","134","470","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("104");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01_01_00","516","470","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("105");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00_00_00_00","134","536","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("106");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00_00_00_01","134","668","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("107");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01_01_00_00","516","668","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("108");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00_00_00_01_00","134","701","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("109");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01_01_00_00_00","516","701","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("110");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_00_00_00_00_01_00_00","134","734","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("111");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00_00_00_01_01_00_00_00_00","516","734","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("112");
            obj.set_text("1234067890");
            this.Div00.addChild(obj.name, obj);
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
        this.registerScript("SD11620.xfdl", function() {

        this.temp01_onload = function(obj,e)
        {
        	this.gfnDivSearchExpand(this.btnSearchExpand,this.divSearch);
        };



        this.Button01_onclick = function(obj,e)
        {

        };

        this.btnSearchExpand_onclick = function(obj,e)
        {
            this.gfnDivSearchExpand(obj,this.divSearch);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SD11620.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
