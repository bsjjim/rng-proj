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
            this.set_titletext("NICE신용정보조회(웰빙)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10허4089</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">10139805</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">10139805</Col><Col id=\"Column2\">77허6329</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">10074192</Col><Col id=\"Column2\">28허3310</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">10049209</Col><Col id=\"Column2\">08허5193</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">R2B</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">10139474</Col><Col id=\"Column2\">17허8312</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">10139474</Col><Col id=\"Column2\">17허8312</Col><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">10139470</Col><Col id=\"Column2\">17허8349</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">인수형매각</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">10187237</Col><Col id=\"Column2\">30호1881</Col><Col id=\"Column3\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">10096033</Col><Col id=\"Column2\">12허5036</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">10186273</Col><Col id=\"Column2\">30호1252</Col><Col id=\"Column3\">TUCSON IX (D) 2.0 2WD SMART SPECIAL</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">10045514</Col><Col id=\"Column2\">47허1675</Col><Col id=\"Column3\">LOTZE (L) 2.0 </Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("Safe-key");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","361","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","321","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","692","18","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회목적");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","652","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","923","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","961","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("조회동의");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","82","4","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","418","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","748","6","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","1017","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","92","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","179","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","206","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","428","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_value("123406789");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","510","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","537","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","758","18","165","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("대금업 대출 보증인 조회");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","1027","18","125","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("연체 등 정보조회");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","63",null,null,"560","48",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("조회경로");
            obj.set_cssclass("sta_DA_label_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("조회의뢰자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("상품명");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("조회자 정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","483","117","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("계약형태");
            obj.set_cssclass("sta_DA_label_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","483","51","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("에이전트");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","150",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","150","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("조회일시");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","183","130","150",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("MEMO");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","183",null,"150","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","483","150","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("조회번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","56","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("input_req");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","617","56","57","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","676","56","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","703","56","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","134","89","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","134","122","180","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","617","122","180","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("input_req");
            this.Div01.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","134","155","155","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","617","155","100","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("201601011234");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","188",null,"140","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("메모저장");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","840",null,"100","35",null,"-608",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_01",null,"10","131","28","151",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("SafeKey 조회");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1206","1","19","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("19");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02",null,"10","79","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("인증");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01_00",null,"DivSearch:0","500",null,"40","575",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("CB스코어");
            obj.set_cssclass("sta_WF_title1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","0","50",null,"62","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid_table");
            obj.set_taborder("3");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"점수\"/><Cell col=\"1\" text=\"등급\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"175","500","527","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","19","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("코드정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","50","180","124",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("적용배제 사유코드\r\n(Exclusion Reason Code)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","179","50",null,"124","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","173","180","124",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("신용평점사유코드\r\n(Scoring Reason Code)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","179","173",null,"124","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","296","180","124",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("고객 Profile Code");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","179","296",null,"124","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","163","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","184","55",null,"114","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","184","178",null,"114","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00","184","301",null,"114","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
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
        this.registerScript("SD11760.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.DivSearch.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.Div00.form.Static26_01_01_00.addEventHandler("onclick",this.Div00_Static26_01_01_00_onclick,this);
        };
        this.loadIncludeScript("SD11760.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
