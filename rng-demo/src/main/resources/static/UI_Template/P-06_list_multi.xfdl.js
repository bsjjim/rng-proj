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
            this.set_titletext("그리드+편집그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">10허4089</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">77허6329</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">28허3310</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">08허5193</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">47허1675</Col><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR  디럭스</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">10허4089</Col><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR  디럭스</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">77허6329</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">28허3310</Col><Col id=\"Column3\">TUCSON IX (D) 2.0 2WD SMART</Col><Col id=\"Column4\">2021-12-08</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">1234567</Col><Col id=\"Column2\">02허3684</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 TOP</Col><Col id=\"Column4\">2021-12-08</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">theme://images/ico_flag_mod.png</Col><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column0\">theme://images/ico_flag_add.png</Col><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column0\">theme://images/ico_flag_del.png</Col><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row><Row><Col id=\"Column2\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","131","48.04%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("신청내역");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자산번호\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"차종명\"/><Cell col=\"4\" text=\"차량등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","210","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","342",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","328",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","405","13","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","270",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","418","38","100","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","461","13","15","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","44","24","214",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","44","24","166",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","84","24","78",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","74","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:20","131",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"imagecontrol\" edittype=\"none\" text=\"theme://images/flag.png\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"구분\" cssclass=\"input_req\"/><Cell col=\"3\" text=\"용품\"/><Cell col=\"4\" text=\"SEQ\"/><Cell col=\"5\" text=\"설비번호\" cssclass=\"input_req\"/><Cell col=\"6\" text=\"시리얼번호\" cssclass=\"input_req\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comb\" combocodecol=\"Column0\" combodatacol=\"Column0\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"6\" text=\"bind:Column6\" displaytype=\"editcontrol\" edittype=\"normal\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","331",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","399",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","385",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","348","13","10","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","327",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","361","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","404","13","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","240",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","160",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","76","24","80",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","76","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","480","44","100","6",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","734","220","20","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,null,"440","80","78","63",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 리사이징 \r\n가로: 동일비율 리사이징을 하거나, 데이터가 많은 그리드 1개만 리사이징\r\n세로: 100% 리사이징처리");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00",null,null,"440","55","78","150",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("컬럼의 갯수가 적을 경우 좌우 배치");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("용품구분");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","258","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","664","18","91","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("차량등록기간");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1006","18","79","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("탈부착상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","1087","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("자산번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","258","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","324","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","664","52","81","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("시리얼번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1006","52","79","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("탈부착사유");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","1087","52","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","86","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("단말형태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","218","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","624","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","966","8","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","98","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("input_req");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_02_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_02_innerdataset", obj);
            DivSearch_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_02_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","324","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_cssclass("input_select");
            obj.set_text("부서코드");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","416","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","443","18","181","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            obj.set_text("영업점");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","98","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02_00","98","86","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_02_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_02_00_innerdataset", obj);
            DivSearch_form_Combo00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_02_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","756","52","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","119","42","60","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","756","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("input_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","131","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","64","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
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
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("P-06_list_multi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
