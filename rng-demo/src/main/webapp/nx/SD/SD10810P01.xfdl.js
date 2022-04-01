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
            this.set_titletext("고객담당자 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,613);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">012345</Col><Col id=\"Column4\">계약, 관리</Col><Col id=\"Column5\">02-1234-1234</Col><Col id=\"Column6\">010-1234-1234</Col><Col id=\"Column0\">사용</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"No\">5</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"No\">7</Col><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"No\">9</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"No\">10</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","72","1060","279",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1","21","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("담당자 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grdList","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"고객번호\"/><Cell col=\"2\" text=\"거래처담당자명\"/><Cell col=\"3\" text=\"거래처담당자번호\"/><Cell col=\"4\" text=\"담당업무\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"휴대전화번호\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"우편번호\"/><Cell col=\"9\" text=\"소재지주소\"/><Cell col=\"10\" text=\"상세주소\"/><Cell col=\"11\" text=\"SNS수신여부\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" textAlign=\"left\"/><Cell col=\"10\" textAlign=\"left\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","95","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","17","40","80","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","100","21","578","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("4");
            obj.set_text("※ 거래처에 등록된 담당자가 없는 경우, \'거래처 담당자 신규등록 영역에서 등록이 가능합니다.");
            obj.set_cssclass("sta_txt_desc");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","90","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20","1060","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","108","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("거래처 담당자명");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","268","13","118","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("거래처 담당자번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"30","30","20","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","386","37","80","13",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","490","-6","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","-6","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","228","-1","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","530","13","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName2","128","13","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_03","225","0","80","13",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName2_00","390","13","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rad00","595","13","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_rad00_innerdataset = new nexacro.NormalDataset("divSearch_form_rad00_innerdataset", obj);
            divSearch_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">사용</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">삭제</Col><Col id=\"datacolumn\">삭제</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rad00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSel","948","565","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1016","565","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00",null,"20","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","20","351","1060","118",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","294","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("거래처담당자 신규등록");
            obj.set_cssclass("sta_WF_title2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","50","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("1234067890");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","346","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","706","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","480","56","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("1234067890");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","840","56","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("1234067890");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","89","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01","254","89","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","279","89","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","401","89","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","20","484","1060","66",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","9","794","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("거래처담당자정보 입력 후, [저장] 버튼 클릭 시 상단 그리드에 등록한 담당자 정보를 확인할 수 있습니다.");
            obj.set_cssclass("sta_txt_descDot");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","31","825","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("등록된 담당자 정보는 <b v=\'true\'>통합고객관리화면에서 상세조회/관리</b>할 수 있습니다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","61","27","100","10",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","83",null,"100","15",null,"0",null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","476","469","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","974","550","80","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,613,this,function(p){});
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
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("SD10810P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
