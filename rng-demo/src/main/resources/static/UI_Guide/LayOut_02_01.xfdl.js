(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayOut_02_01");
            this.set_titletext("테이블 - 테이블 구조 및 클래스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_00_01_00_00","528","35","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-27","40",null,"0","27",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","35","734","231",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","113",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","80","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","80",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","113","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","146","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("필수입력 Label");
            obj.set_cssclass("sta_DA_label_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","146",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","210","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("좌헤더형");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25","55","175","23","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","85","190","266","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("필수입력 Label : .sta_DA_label_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25_00","365","175","23","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","395","190","266","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("데이터영역 bg : .sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25_01","125","129","38","1",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01","170","118","266","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("일반 Label 클래스 : sta_DA_label_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","28","683","44",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("13");
            obj.set_text("※ 테이블 영역 내 여러 컴포넌트를 리사이징 or anchor를 걸기위해 \'div_group\'의 클래스를 가진 div로 감싼후 사용한다.\r\n     (브라우저에서 확인 시 보이지 않음)");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","79",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25_00_00","415","80","23","17",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","445","85","266","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("상단보더 : sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","51","90","14","14",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_tooltiptext("도움말 툴팁입니다.");
            obj.set_cssclass("sta_WF_help");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","46","90","5","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25_00_00_00","69","97","68","1",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","142","85","266","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("도움말 툴팁 : sta_WF_help");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","266","734","381",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","340","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("상단헤더형");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","0","50","242","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01","241","50","242","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00","482","50","252","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("필수입력 Label");
            obj.set_cssclass("sta_DA_labelTop_req");
            obj.set_textAlign("center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","0","83",null,"34","492",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","241","83",null,"34","251",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","482","83",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","187","340","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("혼합형");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","217","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","129","217","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","431","217","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("필수입력 Label");
            obj.set_cssclass("sta_DA_labelTop_req");
            obj.set_textAlign("center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","129","250","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","431","250","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","515","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("13");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","250","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","129","283","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","431","283","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","283","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("17");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00","129","316","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","431","316","303","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","0","316","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("20");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static25","64","79","28","57",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("21");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","100","124","266","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("22");
            obj.set_text("Top Label 클래스 : sta_DA_labelTop");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static25_00","681","79","28","57",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("23");
            obj.set_border("0px none rgba(128,128,128,1),1px solid red, 1px solid red, 0px none");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","387","124","291","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("24");
            obj.set_text("Top 필수입력 Label 클래스 : sta_DA_labelTop_req");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","49",null,"2","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","216",null,"2","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","45","260","5","15",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("27");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","50","260","14","14",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("28");
            obj.set_tooltiptext("도움말 툴팁입니다.");
            obj.set_cssclass("sta_WF_help");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기본 구조 및 클래스");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01","754","35","734","612",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_01","0","180","130","115",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("36");
            obj.set_text("서브그리드");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02_01","129","180","605","115",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","317","210","24",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("6");
            obj.set_text("영역 포인트 컬러");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","346","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","129","346","300","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","428","346","306","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","129","379","300","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_bg1");
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_bg1");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","428","379","306","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_bg4");
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_bg4");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","379","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("5");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","129","412","300","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_bg2");
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_bg2");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","428","412","306","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_bg5");
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_bg5");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","412","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00","129","478","605","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_sub_summ");
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_sub_summ");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","0","478","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_sub_summ");
            obj.set_taborder("11");
            obj.set_text("소계");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00","129","511","605","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_summ");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00","0","511","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("13");
            obj.set_text("합계");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01","129","445","300","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_tbl_bg3");
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("initvalueid : iv_tbl_bg3");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01","428","445","306","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01","0","445","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("16");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","345",null,"2","0",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","6","340","24",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("18");
            obj.set_text("테이블 내 서브 테이블 or 서브 그리드");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","514","1","100","35",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("19");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02","0","71","130","110",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("20");
            obj.set_text("서브테이블");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02","129","71","605","110",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","36",null,"2","0",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00","0","38","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("23");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02_00","129","38","605","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00_00","134","76","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("25");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02_00_00","263","76","467","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01","116","43","35","19",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("27");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","129","62","6","35",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("28");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00_00_00","431","76","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("29");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00_00_01","134","109","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("30");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02_00_00_00","263","109","467","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00_00_00_00","431","109","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("32");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00_00_01_00","134","142","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("33");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02_00_00_00_00","263","142","467","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00_00_00_00_00","431","142","130","34",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("35");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","118","72","36","5",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("38");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_00","118","176","36","5",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("39");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00","96","63","25","19",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("40");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_00","96","168","25","19",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("41");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","134","216",null,"74","3",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("42");
            obj.set_cssclass("grd_WF_sub");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"188","46","24","54",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("43");
            obj.set_text("버튼");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"188","46","24","4",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("44");
            obj.set_text("버튼");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_01","590","202","25","19",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("45");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_01","612","211","36","5",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("46");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_01_00","485","180","36","37",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("48");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_01","510","180","6","35",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("49");
            obj.set_border("0px none , 1px dotted rgba(177,192,203,1), 0px none, 0px none");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_01_00","501","188","25","19",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("47");
            obj.set_text("35px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_00_00","118","290","36","5",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("50");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_00_00","96","282","25","19",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("51");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","129","317","601","24",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("52");
            obj.set_text("※ 테이블 영역 bg 포인트 컬러는 initvalueid를 이용해 적용. 사용할 경우 iv_tbl_bg1 컬러 부터 순차적으로 사용");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","490","295","100","50",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("53");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","1483","98","6","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00","1470","79","35","19",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","893","111","585","97",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사용여부 미정\r\n(테이블 내 서브테이블 사용 지양. \r\n좌측에 그룹 헤더를 두어 가급적 1차 테이블 로 그릴 것)");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("rgba(255,0,0,0.60)");
            obj.set_color("#ffffff");
            obj.set_font("16px \"NotoKr-Regular\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
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
        this.loadIncludeScript("LayOut_02_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
