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
            this.set_titletext("VOC현황_유형별");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","286","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","182","110","80","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","785","86","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("VOC유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","745","35","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","-206","52","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">접수일</Col><Col id=\"datacolumn\">접수일</Col></Row><Row><Col id=\"codecolumn\">완료일</Col><Col id=\"datacolumn\">완료일</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("접수일");
            obj.set_value("접수일");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","127","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","544","18","34","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("본부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","585","18","160","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">자산관리부문</Col><Col id=\"datacolumn\">자산관리부문</Col></Row><Row><Col id=\"codecolumn\">마케팅커뮤니케이션팀</Col><Col id=\"datacolumn\">마케팅커뮤니케이션팀</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","355","52","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">오토렌탈</Col><Col id=\"datacolumn\">오토렌탈</Col></Row><Row><Col id=\"codecolumn\">일반렌탈</Col><Col id=\"datacolumn\">일반렌탈</Col></Row><Row><Col id=\"codecolumn\">오토리스</Col><Col id=\"datacolumn\">오토리스</Col></Row><Row><Col id=\"codecolumn\">오토리스(재리스)</Col><Col id=\"datacolumn\">오토리스(재리스)</Col></Row><Row><Col id=\"codecolumn\">할부금융</Col><Col id=\"datacolumn\">할부금융</Col></Row><Row><Col id=\"codecolumn\">할부금융(대출)</Col><Col id=\"datacolumn\">할부금융(대출)</Col></Row><Row><Col id=\"codecolumn\">중고차판매</Col><Col id=\"datacolumn\">중고차판매</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","487","52","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_01","589","52","156","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_01_innerdataset", obj);
            DivSearch_form_Combo00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_01_innerdataset);
            obj.set_text("오토론-담보대출-상용");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03","857","86","105","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_03_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_03_innerdataset", obj);
            DivSearch_form_Combo00_00_00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">문의</Col><Col id=\"datacolumn\">문의</Col></Row><Row><Col id=\"codecolumn\">대여/계</Col><Col id=\"datacolumn\">대여/계</Col></Row><Row><Col id=\"codecolumn\">정비/AS</Col><Col id=\"datacolumn\">정비/AS</Col></Row><Row><Col id=\"codecolumn\">청구 미/수납</Col><Col id=\"datacolumn\">청구 미/수납</Col></Row><Row><Col id=\"codecolumn\">반납/재계약</Col><Col id=\"datacolumn\">반납/재계약</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03_00","964","86","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_03_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_03_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_03_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">고객응대</Col><Col id=\"datacolumn\">고객응대</Col></Row><Row><Col id=\"codecolumn\">청구/미납</Col><Col id=\"datacolumn\">청구/미납</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_03_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_03_01","1056","86","190","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_03_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_03_01_innerdataset", obj);
            DivSearch_form_Combo00_00_00_03_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">고객부담금(CDW) 납부 문의</Col><Col id=\"datacolumn\">고객부담금(CDW) 납부 문의</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_03_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_01","592","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_01_00","857","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","785","18","34","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","857","18","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_innerdataset", obj);
            DivSearch_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">전략영업반납주차장(안성)</Col><Col id=\"datacolumn\">전략영업반납주차장(안성)</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","286","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("정렬기준");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02","355","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_02_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_02_innerdataset", obj);
            DivSearch_form_Combo00_00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">발생순위</Col><Col id=\"datacolumn\">발생순위</Col></Row><Row><Col id=\"codecolumn\">VOC구분</Col><Col id=\"datacolumn\">VOC구분</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_02_innerdataset);
            obj.set_text("VOC구분");
            obj.set_value("VOC구분");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01","86","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_value("20220110");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","122","76","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("접수경로");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","86","52","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_00_innerdataset", obj);
            DivSearch_form_Combo00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">(C)고객케어센터</Col><Col id=\"datacolumn\">(C)고객케어센터</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","785","52","37","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("POG");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_00","857","52","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_02_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_02_00_innerdataset", obj);
            DivSearch_form_Combo00_00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">P1</Col><Col id=\"datacolumn\">P1</Col></Row><Row><Col id=\"codecolumn\">P2</Col><Col id=\"datacolumn\">P2</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">G</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_02_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","20","86","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("책임본부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_03","87","86","160","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_03_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_03_innerdataset", obj);
            DivSearch_form_Combo00_00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">자산관리부문</Col><Col id=\"datacolumn\">자산관리부문</Col></Row><Row><Col id=\"codecolumn\">마케팅커뮤니케이션팀</Col><Col id=\"datacolumn\">마케팅커뮤니케이션팀</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","286","86","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("책임부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01","355","86","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_01_innerdataset", obj);
            DivSearch_form_Combo00_00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">전략영업반납주차장(안성)</Col><Col id=\"datacolumn\">전략영업반납주차장(안성)</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","594","86","34","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("경로");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onitemchanged").set("Common_onitemchanged");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00","635","86","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">INBOUND</Col><Col id=\"datacolumn\">INBOUND</Col></Row><Row><Col id=\"codecolumn\">OUTBOUND</Col><Col id=\"datacolumn\">OUTBOUND</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","246","35","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("발생순위");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"VOC구분\"/><Cell col=\"3\" colspan=\"3\" text=\"상품구분\"/><Cell col=\"6\" colspan=\"3\" text=\"발생순위구분\"/><Cell col=\"9\" rowspan=\"2\" text=\"전년수량\"/><Cell col=\"10\" rowspan=\"2\" text=\"전년 누계\" cssclass=\"cell_fix\"/><Cell col=\"11\" colspan=\"3\" text=\"1월\"/><Cell col=\"14\" rowspan=\"2\" text=\"1월\"/><Cell col=\"15\" rowspan=\"2\" text=\"2월\"/><Cell col=\"16\" rowspan=\"2\" text=\"3월\"/><Cell col=\"17\" rowspan=\"2\" text=\"4월\"/><Cell col=\"18\" rowspan=\"2\" text=\"5월\"/><Cell col=\"19\" rowspan=\"2\" text=\"6월\"/><Cell col=\"20\" rowspan=\"2\" text=\"7월\"/><Cell col=\"21\" rowspan=\"2\" text=\"8월\"/><Cell col=\"22\" rowspan=\"2\" text=\"9월\"/><Cell col=\"23\" rowspan=\"2\" text=\"10월\"/><Cell col=\"24\" rowspan=\"2\" text=\"11월\"/><Cell col=\"25\" rowspan=\"2\" text=\"12월\"/><Cell col=\"26\" colspan=\"3\" text=\"누계\"/><Cell col=\"29\" rowspan=\"2\" text=\"책임본부\"/><Cell col=\"30\" rowspan=\"2\" text=\"책임부서\"/><Cell col=\"31\" rowspan=\"2\" text=\"P/O/G\"/><Cell row=\"1\" col=\"3\" text=\"대\"/><Cell row=\"1\" col=\"4\" text=\"중\"/><Cell row=\"1\" col=\"5\" text=\"소\"/><Cell row=\"1\" col=\"6\" text=\"대\"/><Cell row=\"1\" col=\"7\" text=\"중\"/><Cell row=\"1\" col=\"8\" text=\"소\"/><Cell row=\"1\" col=\"11\" text=\"건수\"/><Cell row=\"1\" col=\"12\" text=\"비중\"/><Cell row=\"1\" col=\"13\" text=\"전월대비\"/><Cell row=\"1\" col=\"26\" text=\"건수\"/><Cell row=\"1\" col=\"27\" text=\"비중\"/><Cell row=\"1\" col=\"28\" text=\"전년대비\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column9\" cssclass=\"cell_fix\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\" text=\"bind:Column9\"/><Cell col=\"13\" text=\"bind:Column9\"/><Cell col=\"14\" text=\"bind:Column9\"/><Cell col=\"15\" text=\"bind:Column9\"/><Cell col=\"16\" text=\"bind:Column9\"/><Cell col=\"17\" text=\"bind:Column9\"/><Cell col=\"18\" text=\"bind:Column9\"/><Cell col=\"19\" text=\"bind:Column9\"/><Cell col=\"20\" text=\"bind:Column9\"/><Cell col=\"21\" text=\"bind:Column9\"/><Cell col=\"22\" text=\"bind:Column9\"/><Cell col=\"23\" text=\"bind:Column9\"/><Cell col=\"24\" text=\"bind:Column9\"/><Cell col=\"25\" text=\"bind:Column9\"/><Cell col=\"26\" text=\"bind:Column9\"/><Cell col=\"27\" text=\"bind:Column9\"/><Cell col=\"28\" text=\"bind:Column9\"/><Cell col=\"29\" text=\"bind:Column9\"/><Cell col=\"30\" text=\"bind:Column9\"/><Cell col=\"31\" text=\"bind:Column9\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"8\" text=\"합계\" textAlign=\"center\"/><Cell col=\"9\" displaytype=\"number\"/><Cell col=\"10\" displaytype=\"number\"/><Cell col=\"11\" displaytype=\"number\"/><Cell col=\"12\" displaytype=\"number\"/><Cell col=\"13\" displaytype=\"number\"/><Cell col=\"14\" displaytype=\"number\"/><Cell col=\"15\" displaytype=\"number\"/><Cell col=\"16\" displaytype=\"number\"/><Cell col=\"17\" displaytype=\"number\"/><Cell col=\"18\" displaytype=\"number\"/><Cell col=\"19\" displaytype=\"number\"/><Cell col=\"20\" displaytype=\"number\"/><Cell col=\"21\" displaytype=\"number\"/><Cell col=\"22\" displaytype=\"number\"/><Cell col=\"23\" displaytype=\"number\"/><Cell col=\"24\" displaytype=\"number\"/><Cell col=\"25\" displaytype=\"number\"/><Cell col=\"26\" displaytype=\"number\"/><Cell col=\"27\" displaytype=\"number\"/><Cell col=\"28\" displaytype=\"number\"/><Cell col=\"29\" displaytype=\"number\"/><Cell col=\"30\" displaytype=\"number\"/><Cell col=\"31\" displaytype=\"number\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","DivSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
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
        this.registerScript("CS10140.xfdl", function() {

        this.Common_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DivSearch.form.Combo00_00_01_00_00.addEventHandler("onitemchanged",this.Common_onitemchanged,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("CS10140.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
