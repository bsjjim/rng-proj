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
            this.set_titletext("조회+그리드+상세(좌우7:3)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">KRW</Col></Row><Row><Col id=\"Column0\">USD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10허4089</Col><Col id=\"Column2\">LOTZE (L) 2.0</Col><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">02허3684</Col><Col id=\"Column2\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각확정</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">02허3684</Col><Col id=\"Column2\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">77허6329</Col><Col id=\"Column2\">STAREX (D) 2.6 12인승</Col><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">28허3310</Col><Col id=\"Column2\">NEW SM5 (L) 2.0</Col><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">08허5193</Col><Col id=\"Column2\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">반려</Col></Row><Row><Col id=\"Column3\">2021-12-08</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각의뢰</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">17허8312</Col><Col id=\"Column2\">PRIDE (G) 1.4 5DOOR 디럭스</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">17허8312</Col><Col id=\"Column2\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col><Col id=\"Column3\">2021-12-08</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">17허8349</Col><Col id=\"Column2\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각확정</Col><Col id=\"Column3\">2021-12-08</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">30호1881</Col><Col id=\"Column2\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col><Col id=\"Column3\">2021-12-08</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">12허5036</Col><Col id=\"Column2\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col><Col id=\"Column3\">2021-12-08</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">30호1252</Col><Col id=\"Column2\">TUCSON IX (D) 2.0 2WD SMART SPECIAL</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">매각</Col><Col id=\"Column3\">2021-12-08</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">47허1675</Col><Col id=\"Column2\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">경매장(자사)</Col><Col id=\"Column5\">반려</Col><Col id=\"Column3\">2021-12-08</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63",null,null,"460","25",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("매각 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","23",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"485\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"차량명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"매각유형\"/><Cell col=\"6\" text=\"상태값\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","44","24","214",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","44","24","166",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","843","44","100","6",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","84","24","78",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","74","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","711","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","795","13","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","270",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","327",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","739","13","10","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","727","14","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","342",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"60","20","60","413",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"62","400","415","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","19","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("매각 상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","50","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","50",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","83","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설비번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","83",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","116","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("매각방식");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","116",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02","134","56","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_value("02허3684");
            obj.set_text("02허3684");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","149","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("매각일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","149",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","182","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","182",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","215","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("결제통화");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","129","215",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","248","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("환율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","248",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_02","0","281","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("매각금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_02","129","281",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01","0","314","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("회계유형");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_01","129","314",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01_00","0","347","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("수출금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01_00","129","347",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","380","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("과세유형");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00","129","380",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","163","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01",null,"18","15","47","416",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03","134","88","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_enable("false");
            obj.set_value("10466689");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","121","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">경매장(지사)</Col><Col id=\"datacolumn\">경매장(지사)</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("경매장(지사)");
            obj.set_value("경매장(지사)");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","134","154","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","134","187","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("input_req");
            obj.set_text("(고객번호)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","226","187","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","253","187","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","134","220","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("33");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00","134","253","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("1186.2");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00","134","286","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_01","134","319","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00","134","352","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_taborder("54");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","385","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_cssclass("input_req");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_innerdataset", obj);
            Div00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">영세</Col><Col id=\"datacolumn\">영세</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_innerdataset);
            obj.set_text("영세");
            obj.set_value("영세");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"476","400","250","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","20","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("매각매출이익");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("공급가");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","51","244","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("부가세");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","84","244","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","129","117","244","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_03","0","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("취득세");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_03","129","150","244","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_02","0","183","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("매각원가");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_02","129","183","244","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","163","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01_00",null,"18","15","47","416",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_02_00","0","216","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("매출이익");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_02_00","129","216","244","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00",null,"56","212","24","27",null,null,null,null,null,this.Div00_00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("0");
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00",null,"89","212","24","27",null,null,null,null,null,this.Div00_00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("0");
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00",null,"122","212","24","27",null,null,null,null,null,this.Div00_00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("32800000");
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_00",null,"221","212","24","27",null,null,null,null,null,this.Div00_00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("0");
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_01",null,"188","212","24","27",null,null,null,null,null,this.Div00_00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("11480000");
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_01",null,"155","212","24","27",null,null,null,null,null,this.Div00_00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("29543723");
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"56","20","24","7",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"89","20","24","7",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"122","20","24","7",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"155","20","24","7",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00",null,"188","20","24","7",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00",null,"221","20","24","7",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","362","18","10","230",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","361","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","540","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","580","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","648","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","429","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("1234067890");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","516","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("매각의뢰기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","321","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","111","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","136",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"10","64","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"547","375","135","507",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<fc v=\"red\">(그리드와 디테일 영역이 혼합된 레이아웃의 리사이징)</fc>\r\n그리드를 리사이징 하고, 디테일 영역을 우측으로 Anchor 걸기위해, \r\n디테일 영역을 Div로 감싼다.");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00",null,"572","225","110","1194",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<fc v=\"red\">기타비율</fc>\r\n그리드 컬럼의 갯수가 많거나 \r\n상세테이블의 내용이 적을경우\r\n6:4, 7:3 등 자유롭게 레이아웃을\r\n지정할 수 있다.");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00",null,"323","300","55","-327",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자율비율일 경우, 우측 좁은 영역의 너비스 350, 400등 50px 간격으로 너비를 정할 수 있음.");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1068","127","20","100",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("20");
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
        this.registerScript("P-04_list_single_02.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_onclick,this);
        };
        this.loadIncludeScript("P-04_list_single_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
