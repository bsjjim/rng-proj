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
            this.set_titletext("조회그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpare", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10허4089</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">10139805</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">10139805</Col><Col id=\"Column2\">77허6329</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">10074192</Col><Col id=\"Column2\">28허3310</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">10049209</Col><Col id=\"Column2\">08허5193</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">R2B</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">10139474</Col><Col id=\"Column2\">17허8312</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">10139474</Col><Col id=\"Column2\">17허8312</Col><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">10139470</Col><Col id=\"Column2\">17허8349</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">인수형매각</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">10187237</Col><Col id=\"Column2\">30호1881</Col><Col id=\"Column3\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">10096033</Col><Col id=\"Column2\">12허5036</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">10186273</Col><Col id=\"Column2\">30호1252</Col><Col id=\"Column3\">TUCSON IX (D) 2.0 2WD SMART SPECIAL</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">10045514</Col><Col id=\"Column2\">47허1675</Col><Col id=\"Column3\">LOTZE (L) 2.0 </Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-08　</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column7\">2021-12-08　</Col><Col id=\"Column8\">입찰매각</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCm001", this);
            obj._setContents("<ColumnInfo><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"DOMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDCODE\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDNAME\" type=\"STRING\" size=\"40\"/><Column id=\"TEXT\" type=\"STRING\" size=\"255\"/><Column id=\"DDTEXT\" type=\"STRING\" size=\"60\"/><Column id=\"SORD\" type=\"INT\" size=\"1\"/><Column id=\"CODE1\" type=\"STRING\" size=\"30\"/><Column id=\"ETC1V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC1N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7N\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">IN3000</Col><Col id=\"FIELDNAME\">KT렌탈 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">IN3100</Col><Col id=\"FIELDNAME\">오토리스 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">IN3200</Col><Col id=\"FIELDNAME\">KT오토케어 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">MB3000</Col><Col id=\"FIELDNAME\">모바일시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">OT3000</Col><Col id=\"FIELDNAME\">KT렌탈 대외 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">OT3100</Col><Col id=\"FIELDNAME\">오토리스 대외 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">RE1000</Col><Col id=\"FIELDNAME\">일반렌탈 MOBILE 시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">RE2000</Col><Col id=\"FIELDNAME\">렌탈 매니저 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImp", this);
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"I_SALE_DT\" size=\"11\"/><Column type=\"string\" id=\"I_CAR_NO\" size=\"20\"/><Column type=\"string\" id=\"I_STATUS\" size=\"75\"/><Column type=\"string\" id=\"I_SALE_TYPE\" size=\"9\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","336","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","296","0","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","554","18","39","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","514","0","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboStats","594","18","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","744","0","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","782","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSale","848","18","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCarNo","403","18","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("123허1234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCarNoPop","490","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","4","10","50",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","393","5","10","50",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","584","6","10","50",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","838","5","10","50",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("calPredSaleDt","86","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1211","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("매각현황리스트");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","35",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("dsGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비번호\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"차량명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"매각일\"/><Cell col=\"6\" text=\"상태값\"/><Cell col=\"7\" text=\"보험해지일자\"/><Cell col=\"8\" text=\"매각유형\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"cell_link\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","50","606","100","15",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","88","24","78",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1318","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1234","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1164","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","218",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","170",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","113","3","10","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00","123","20","512","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("14");
            obj.set_text("※ 업무 진행 시 반드시 숙지해야 할 안내문은 타이틀 우측에 배치.");
            obj.set_cssclass("sta_txt_desc");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","810",null,"100","35",null,"0",null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_text("30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0",null,"842","24",null,"2",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("16");
            obj.set_text("※ 일반적인 안내문은 영역 좌측 하단에 배치합니다. / 또는 타이틀 옆에 도움말이 위치하기에 공간이 협소한 경우, 예외적으로 하단에 위치할 수 있습니다.");
            obj.set_cssclass("sta_txt_desc");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","274",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("17");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","331",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("18");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1155","13","10","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","1143","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("20");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","346",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("21");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","849",null,"100","48",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h48");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calPredSaleDt","value","dsImp","I_SALE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtCarNo","value","dsImp","I_CAR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboStats","value","dsImp","I_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSale","value","dsImp","I_SALE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleGridSearch.xfdl", function() {
        /********************************************************************
        *  조회그리드 샘플
        *  @FileName 	: SampleGridSearch.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/03/17
        *  @Desction    : 조회그리드 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/03/17     	        양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
            //공통 Onload함수
            this.gfnFormOnLoad(obj);

        	this.divSearch.form.calPredSaleDt.setFocus();

        	this.fnSetValidation();
        }

        this.fnSetValidation = function()
        {

        	// Validation 체크 Rule의 종류
        	// required - 필수 체크
        	// length:7 - 길이가 7자리인지 체크
        	// rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크
        	// maxlength:7 - 길이가 7보다 작은지 체크
        	// minlength:3 - 길이가 3보다 큰지 체크
        	// maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크
        	// minlengthbyte:3 - byte의 길이가 3보다 큰지 체크
        	// digits - 숫자여부 체크
        	// min:7 - 값이 7보다 작은지 체크
        	// max:7 - 값이 7보다 큰지 체크
        	// declimit:3 - 소수점의 자리수가 3자리인지 체크
        	// date - 년월일형태의 날짜가 맞는지 체크
        	// dateym - 년월형태의 날짜가 맞는지 체크
        	// range:40:100 - 값이 40 ~ 100 사이의 값인지 체크
        	// code:1:2:3 - 값이 1,2,3 의 값인지 체크
        	// equalto:NAME - NAME 칼럼의 값과 같은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "equalto:NAME");
        	// fromto:ID - 등록된 날짜가 ID의 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, "NAME", "종료일,시작일", "fromto:ID");
        	// comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "comparebig:NAME");
        	// comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "comparesmall:NAME");
        	// isssn - 공통함수 gfnIsSSN로 주민번호 체크
        	// isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크
        	// isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크
        	// isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크
        	// iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크
        	// isemail - 공통함수 gfnIsEmail로 이메일 체크


        	this.gfnSetValidation(this.divSearch.form.calPredSaleDt, "", "매각일자", "required");

        }
        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
            switch(sSvcId)
            {
            	case "searchSD10040" :
            	break;
            	default:
        		break;
            }
        }

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        this.fnSearch = function()
        {

        	if(!this.gfnValidation(this.divSearch)) return;

            /*
            var oArgs  = {
        			  svcId 	: 	"searchSD10040",
        			  rfcName 	: 	"ZCM_WEB_PRO_LIST",
        			  inDs 		: 	"dsImp=dsImp"
        						  +" dsImp_IS_LOGIN=dsImp_IS_LOGIN",
        			  outDs 	: 	"dsExp_ES_RETURN=dsExp_ES_RETURN"
        						  +" dsTbl_T_DATA=dsTbl_T_DATA",
        			  svcType 	: 	"R"
        	}

        	// 공통 트랜잭션 호출
        	this.gfnTransaction(oArgs);
        	*/

        	this.dsGrid.copyData(this.dsGridSpare);
        }

        /************************************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/




        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        this.divGridWapper_Grid00_oncellclick = function(obj,e)
        {
        	var sColNm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(sColNm == "Column1")
        	{
        	    this.gfnCall("Sample::SampleDefaultCRUD.xfdl",{pCode:"aaaaa"});
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.divSearch.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.divGridWapper.form.Grid00.addEventHandler("oncelldblclick",this.divGridWapper_Grid00_oncelldblclick,this);
            this.divGridWapper.form.Grid00.addEventHandler("oncellclick",this.divGridWapper_Grid00_oncellclick,this);
            this.dsImp.addEventHandler("onrowsetchanged",this.dsImp_onrowsetchanged,this);
            this.dsImp.addEventHandler("oncolumnchanged",this.dsImp_oncolumnchanged,this);
        };
        this.loadIncludeScript("SampleGridSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
