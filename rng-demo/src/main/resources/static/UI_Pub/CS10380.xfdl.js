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
            this.set_titletext("상품구분별 VOC유형관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">P1</Col></Row><Row><Col id=\"Column0\">P2</Col></Row><Row><Col id=\"Column0\">O</Col></Row><Row><Col id=\"Column0\">G</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","155","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상품별 VOC유형 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","170","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"상품구분(대)\"/><Cell col=\"4\" text=\"상품구분(중)\"/><Cell col=\"5\" text=\"상품구분(소)\"/><Cell col=\"6\" text=\"VOC유형(대)\"/><Cell col=\"7\" text=\"VOC유형(중)\"/><Cell col=\"8\" text=\"VOC유형(소)\"/><Cell col=\"9\" text=\"POG구분\"/><Cell col=\"10\" text=\"책임본부\"/><Cell col=\"11\" text=\"책임부서\"/><Cell col=\"12\" text=\"미사용여부\"/><Cell col=\"13\" text=\"적용시작일\"/><Cell col=\"14\" text=\"적용종료일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:Column1\" textAlign=\"center\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comb\" combocodecol=\"Column0\" combodatacol=\"Column0\"/><Cell col=\"10\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:Column1\" textAlign=\"center\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"12\" text=\"bind:Column1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"13\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:Column1\" textAlign=\"center\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","422",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","374",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","294",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","214",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","134",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02",null,"20","71","24","919",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("미사용여부");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00",null,"20","45","24","866",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_cmb00_innerdataset = new nexacro.NormalDataset("Div01_form_cmb00_innerdataset", obj);
            Div01_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_cmb00_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01",null,"20","50","24","814",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("적용");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","70","24","505",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","15","24","489",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","674","15","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","71","24","727",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("적용종료일");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","50","24","562",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("적용");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1003","15","20","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","614",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_02","926","4","50","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","472","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","512","18","62","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("VOC유형");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","973","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1013","18","73","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("미사용여부");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","1096","18","176","24",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_form_Radio00_innerdataset", obj);
            div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Radio00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","86","18","130","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_00_innerdataset", obj);
            div00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">오토렌탈</Col><Col id=\"datacolumn\">오토렌탈</Col></Row><Row><Col id=\"codecolumn\">일반렌탈</Col><Col id=\"datacolumn\">일반렌탈</Col></Row><Row><Col id=\"codecolumn\">오토리스</Col><Col id=\"datacolumn\">오토리스</Col></Row><Row><Col id=\"codecolumn\">오토리스(재리스)</Col><Col id=\"datacolumn\">오토리스(재리스)</Col></Row><Row><Col id=\"codecolumn\">할부금융</Col><Col id=\"datacolumn\">할부금융</Col></Row><Row><Col id=\"codecolumn\">할부금융(대출)</Col><Col id=\"datacolumn\">할부금융(대출)</Col></Row><Row><Col id=\"codecolumn\">중고차판매</Col><Col id=\"datacolumn\">중고차판매</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","218","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_00_00_innerdataset", obj);
            div00_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_01","320","18","152","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_00_01_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_00_01_innerdataset", obj);
            div00_form_Combo00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_00_01_innerdataset);
            obj.set_text("오토론-담보대출-상용");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03","584","18","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_00_03_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_00_03_innerdataset", obj);
            div00_form_Combo00_00_00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">문의</Col><Col id=\"datacolumn\">문의</Col></Row><Row><Col id=\"codecolumn\">대여/계</Col><Col id=\"datacolumn\">대여/계</Col></Row><Row><Col id=\"codecolumn\">정비/AS</Col><Col id=\"datacolumn\">정비/AS</Col></Row><Row><Col id=\"codecolumn\">청구 미/수납</Col><Col id=\"datacolumn\">청구 미/수납</Col></Row><Row><Col id=\"codecolumn\">반납/재계약</Col><Col id=\"datacolumn\">반납/재계약</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_00_03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03_00","691","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_00_03_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_00_03_00_innerdataset", obj);
            div00_form_Combo00_00_00_03_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">고객응대</Col><Col id=\"datacolumn\">고객응대</Col></Row><Row><Col id=\"codecolumn\">청구/미납</Col><Col id=\"datacolumn\">청구/미납</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_00_03_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03_01","783","18","190","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_00_03_01_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_00_03_01_innerdataset", obj);
            div00_form_Combo00_00_00_03_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">고객부담금(CDW) 납부 문의</Col><Col id=\"datacolumn\">고객부담금(CDW) 납부 문의</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_00_03_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","20","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("책임본부");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_03","86","52","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_03_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_03_innerdataset", obj);
            div00_form_Combo00_00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">자산관리부문</Col><Col id=\"datacolumn\">자산관리부문</Col></Row><Row><Col id=\"codecolumn\">마케팅커뮤니케이션팀</Col><Col id=\"datacolumn\">마케팅커뮤니케이션팀</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02_00","512","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("책임부서");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","584","52","40","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("A06");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","626","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","653","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("전략기획팀");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","1013","52","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("POG구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_00","1096","52","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_02_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_02_00_innerdataset", obj);
            div00_form_Combo00_00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">P1</Col><Col id=\"datacolumn\">P1</Col></Row><Row><Col id=\"codecolumn\">P2</Col><Col id=\"datacolumn\">P2</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">G</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_02_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CS10380.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
