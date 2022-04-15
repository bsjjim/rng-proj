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
            this.set_titletext("개선요청접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","237","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","30","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","173","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","197","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_02_00","304","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var DivSearch_form_Combo00_00_00_02_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_02_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">임시저장</Col><Col id=\"datacolumn\">임시저장</Col></Row><Row><Col id=\"codecolumn\">조치중</Col><Col id=\"datacolumn\">조치중</Col></Row><Row><Col id=\"codecolumn\">조치완료</Col><Col id=\"datacolumn\">조치완료</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_02_00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","63","734","566",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","150",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("VOC유형");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","84",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접수정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("책임본부");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","117",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","183","130","119",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","183",null,"119","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","301","130","119",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("개선과제");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","419","130","62",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("VOC접수번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","129","419",null,"62","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","50","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","54",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","345","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("책임부서");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("접수자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00","345","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","188","595","109",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","134","56","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">오토렌탈</Col><Col id=\"datacolumn\">오토렌탈</Col></Row><Row><Col id=\"codecolumn\">일반렌탈</Col><Col id=\"datacolumn\">일반렌탈</Col></Row><Row><Col id=\"codecolumn\">오토리스</Col><Col id=\"datacolumn\">오토리스</Col></Row><Row><Col id=\"codecolumn\">오토리스(재리스)</Col><Col id=\"datacolumn\">오토리스(재리스)</Col></Row><Row><Col id=\"codecolumn\">할부금융</Col><Col id=\"datacolumn\">할부금융</Col></Row><Row><Col id=\"codecolumn\">할부금융(대출)</Col><Col id=\"datacolumn\">할부금융(대출)</Col></Row><Row><Col id=\"codecolumn\">중고차판매</Col><Col id=\"datacolumn\">중고차판매</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","266","56","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_01","368","56","152","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_01_innerdataset", obj);
            Div00_form_Combo00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_01_innerdataset);
            obj.set_text("오토론-담보대출-상용");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03","134","89","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_00_03_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_03_innerdataset", obj);
            Div00_form_Combo00_00_00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">문의</Col><Col id=\"datacolumn\">문의</Col></Row><Row><Col id=\"codecolumn\">대여/계</Col><Col id=\"datacolumn\">대여/계</Col></Row><Row><Col id=\"codecolumn\">정비/AS</Col><Col id=\"datacolumn\">정비/AS</Col></Row><Row><Col id=\"codecolumn\">청구 미/수납</Col><Col id=\"datacolumn\">청구 미/수납</Col></Row><Row><Col id=\"codecolumn\">반납/재계약</Col><Col id=\"datacolumn\">반납/재계약</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03_00","241","89","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_00_03_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_03_00_innerdataset", obj);
            Div00_form_Combo00_00_00_03_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">고객응대</Col><Col id=\"datacolumn\">고객응대</Col></Row><Row><Col id=\"codecolumn\">청구/미납</Col><Col id=\"datacolumn\">청구/미납</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_03_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03_01","333","89","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_00_03_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_03_01_innerdataset", obj);
            Div00_form_Combo00_00_00_03_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">고객부담금(CDW) 납부 문의</Col><Col id=\"datacolumn\">고객부담금(CDW) 납부 문의</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_03_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","479","122","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","516","122","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","543","122","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","134","155","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","134","122","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_text("마케팅커뮤니케이션팀");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","134","424","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","236","424","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00","264","424","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","366","424","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00_00","394","424","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00","496","424","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00_00_00","134","452","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00_00","236","452","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00_00_00_00","264","452","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00_00_00","366","452","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","1419","44","50","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","301",null,"119","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","134","306","595","109",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","479","155","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","754","63",null,null,"40","317",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","282",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","84",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","0","282","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("관련문서");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("조치정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("완료자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","345","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("완료일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","117","130","100",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("책임부서의견");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","117",null,"100","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","216","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("반영여부");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","216",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","50","24","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("완료");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","54",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","122",null,"90","4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("소요시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","479","56","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_format("####-##-## ##:##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","134","56","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_02","134","221","90","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            var Div00_00_form_Combo00_00_00_02_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_00_02_innerdataset", obj);
            Div00_00_form_Combo00_00_00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">반영</Col><Col id=\"datacolumn\">반영</Col></Row><Row><Col id=\"codecolumn\">미반영</Col><Col id=\"datacolumn\">미반영</Col></Row><Row><Col id=\"codecolumn\">일부반영</Col><Col id=\"datacolumn\">일부반영</Col></Row><Row><Col id=\"codecolumn\">보류</Col><Col id=\"datacolumn\">보류</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_00_02_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","134","287",null,"24","748",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae01","134","89","60","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_01","194","89","35","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","249","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","249",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","134","254","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","201","254","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","228","254","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","287",null,"24","4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);
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
        this.loadIncludeScript("CS10090.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
