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
            this.set_titletext("갱신대상확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"63","40",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","17","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","23","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","322","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","18","88","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("보험만기기간");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","468","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","715","18","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","74","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","112","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","783","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("123허1234");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","675","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","908","18","50","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("보험사");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","962","18","170","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","868","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","362","18","40","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","403","18","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_00_00_innerdataset);
            obj.set_text("미확정");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02_00","508","18","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("설비번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","575","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("123허1234");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"669","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀명");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","229","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","71","0","10","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","80","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","131","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","301",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","285",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1153","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","297",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","228",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","180",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00",null,"20","98","24","78",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("갱신대상확정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00_00",null,"20","74","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01",null,"div00:0","609",null,"40","5",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_title2");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","51","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","104","51","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("당사");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","356","51","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("보험사");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","104","84","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","356","84","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","84","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","104","117","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","356","117","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","117","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("종료일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00","104","150","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","356","150","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","0","150","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("보험사");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","50",null,"2","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01","104","183","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01","356","183","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01","0","183","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("보험계약");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01","104","216","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01","356","216","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01","0","216","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("보험차량");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00","104","249","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","356","249","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00","0","249","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_text("보험연령");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00","104","282","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01_00","356","282","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00","0","282","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("대인1조건");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00","104","315","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01_00","356","315","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01_00","0","315","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_text("대인2조건");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00","104","348","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00_00","356","348","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00","0","348","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_text("대물조건");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00_00","104","381","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01_00_00","356","381","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00_00","0","381","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_text("자손조건");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00_00","104","414","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01_00_00","356","414","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01_00_00","0","414","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_text("무보험조건");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00_00","104","447","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00_00_00","356","447","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00_00","0","447","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_text("자차조건");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00_00_00","104","480","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01_00_00_00","356","480","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00_00_00","0","480","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("45");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00_00_00","104","513","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01_00_00_00","356","513","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01_00_00_00","0","513","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("48");
            obj.set_text("법률특약");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00_00_00","104","546","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00_00_00_00","356","546","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00_00_00","0","546","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("51");
            obj.set_text("블랙박스요율");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00_00_00_00","104","579","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01_00_00_00_00","356","579","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00_00_00_00","0","579","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("54");
            obj.set_text("특별요율");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00_00_00_00","104","612","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01_00_00_00_00","356","612","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01_00_00_00_00","0","612","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("57");
            obj.set_text("임직원특약");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00_00_00_00","104","645","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00_00_00_00_00","356","645","253","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00_00_00_00","0","645","105","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("60");
            obj.set_text("에어백");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","109","89","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("61");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","361","89","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("62");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","109","122","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("63");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","361","122","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("64");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","109","155","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","361","155","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("66");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01","109","188","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("67");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_innerdataset", obj);
            div01_form_cmb00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_00","361","188","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("68");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01","109","221","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_00","361","221","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_01","109","254","70","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_01_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_01_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_01_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_01_00","361","254","70","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_01_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_01_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_01_00_innerdataset);
            obj.set_text("만48세");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02","109","287","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("73");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00","361","287","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("74");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01","109","320","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("75");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00","361","320","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("76");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00","109","353","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("77");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00_00","361","353","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("78");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00","109","386","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("79");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00_00_00","361","386","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("80");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00","109","419","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("81");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00_00_00_00","361","419","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("82");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00","109","452","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00_00_00_00_00","361","452","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("84");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00","109","485","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("85");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00_00_00_00_00_00","361","485","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("86");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00","109","518","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("87");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_00_00_00_00_00_00_00_00","361","518","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_00_00_00_00_00_00_00_00_innerdataset);
            obj.set_text("흥국쌍용화재해상보험(주)");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00","109","551","100","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("89");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_innerdataset);
            obj.set_text("블랙박스요율");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_00","361","551","100","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("90");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_00_innerdataset);
            obj.set_text("블랙박스요율");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01","109","584","125","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("91");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_innerdataset);
            obj.set_text("레저견인장비요율");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_00","361","584","125","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("92");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_00_innerdataset);
            obj.set_text("레저견인장비요율");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01","109","617","40","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("93");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_00","361","617","40","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("94");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_00_innerdataset = new nexacro.NormalDataset("div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_00_innerdataset", obj);
            div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_cmb00_00_00_01_01_02_01_00_00_00_00_00_00_00_01_01_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","109","650","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("95");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","361","650","240","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("96");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);
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
        this.loadIncludeScript("MM20070.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
