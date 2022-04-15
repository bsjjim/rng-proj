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
            this.set_titletext("영업소 종합현황 조회");
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

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","176","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","216","18","53","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("영업소");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb04","271","18","140","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb04_innerdataset = new nexacro.NormalDataset("div00_form_cmb04_innerdataset", obj);
            div00_form_cmb04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb04_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","86","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","421","18","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("실시간 전산현황");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","411","0","10","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","91","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("영업소 현황");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","396","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"No\"/><Cell col=\"1\" rowspan=\"3\" text=\"행정구역\"/><Cell col=\"2\" rowspan=\"3\" text=\"영업소\"/><Cell col=\"3\" colspan=\"6\" text=\"사무실\" cssclass=\"cell_fix\"/><Cell col=\"9\" colspan=\"22\" text=\"차 고 지 (㎡)\"/><Cell col=\"31\" colspan=\"12\" text=\"자동차(대)\"/><Cell col=\"43\" rowspan=\"3\" text=\"신청사유\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"설치일\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"우편번호\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"주소\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"계약(F)\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"계약(T)\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" cssclass=\"cell_fix\" text=\"임차료 年&#13;&#10;(부가세포함)\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" text=\"우편번호\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"주소\"/><Cell row=\"1\" col=\"11\" rowspan=\"2\" text=\"개별차고지&#13;&#10;면적\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" text=\"임차구분\"/><Cell row=\"1\" col=\"13\" rowspan=\"2\" text=\"계약(F)\"/><Cell row=\"1\" col=\"14\" rowspan=\"2\" text=\"계약(T)\"/><Cell row=\"1\" col=\"15\" rowspan=\"2\" text=\"보증금\"/><Cell row=\"1\" col=\"16\" rowspan=\"2\" text=\"임차료 年&#13;&#10;(부가세포함)\"/><Cell row=\"1\" col=\"17\" rowspan=\"2\" text=\"㎡당 임차료&#13;&#10;(년)\"/><Cell row=\"1\" col=\"18\" rowspan=\"2\" text=\"대당 임차료&#13;&#10;(3.9㎡/년)\"/><Cell row=\"1\" col=\"19\" rowspan=\"2\" text=\"임대인\"/><Cell row=\"1\" col=\"20\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"21\" rowspan=\"2\" text=\"인가면적\"/><Cell row=\"1\" col=\"22\" colspan=\"2\" text=\"장기대여\"/><Cell row=\"1\" col=\"24\" colspan=\"3\" text=\"실시간 전산 현황\"/><Cell row=\"1\" col=\"27\" rowspan=\"2\" text=\"당초필요\"/><Cell row=\"1\" col=\"28\" rowspan=\"2\" text=\"감면율\"/><Cell row=\"1\" col=\"29\" rowspan=\"2\" text=\"감면적용 후&#13;&#10;면적\"/><Cell row=\"1\" col=\"30\" rowspan=\"2\" text=\"잔여면적\"/><Cell row=\"1\" col=\"31\" colspan=\"4\" text=\"변경전\"/><Cell row=\"1\" col=\"35\" colspan=\"4\" text=\"변경후\"/><Cell row=\"1\" col=\"39\" colspan=\"4\" text=\"증(감)차신청대수\"/><Cell row=\"2\" col=\"22\" text=\"차량수\"/><Cell row=\"2\" col=\"23\" text=\"비율(%)\"/><Cell row=\"2\" col=\"24\" text=\"장기수\"/><Cell row=\"2\" col=\"25\" text=\"단기수\"/><Cell row=\"2\" col=\"26\" text=\"비율(%)\"/><Cell row=\"2\" col=\"31\" text=\"합계\"/><Cell row=\"2\" col=\"32\" text=\"승용\"/><Cell row=\"2\" col=\"33\" text=\"소형승합\"/><Cell row=\"2\" col=\"34\" text=\"중형승합\"/><Cell row=\"2\" col=\"35\" text=\"합계\"/><Cell row=\"2\" col=\"36\" text=\"승용\"/><Cell row=\"2\" col=\"37\" text=\"소형승합\"/><Cell row=\"2\" col=\"38\" text=\"중형승합\"/><Cell row=\"2\" col=\"39\" text=\"합계\"/><Cell row=\"2\" col=\"40\" text=\"승용\"/><Cell row=\"2\" col=\"41\" text=\"소형승합\"/><Cell row=\"2\" col=\"42\" text=\"중형승합\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\" cssclass=\"cell_fix\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\" cssclass=\"cell_sub_summ\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\" cssclass=\"cell_sub_summ\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\" cssclass=\"cell_sub_summ\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"8\" text=\"합계\" textAlign=\"center\" cssclass=\"cell_fix\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" text=\"0\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\" text=\"0\" displaytype=\"number\"/><Cell col=\"16\" text=\"0\" displaytype=\"number\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\" text=\"0\" displaytype=\"number\"/><Cell col=\"22\" text=\"0\" displaytype=\"number\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\" text=\"0\" displaytype=\"number\"/><Cell col=\"28\"/><Cell col=\"29\" text=\"0\" displaytype=\"number\"/><Cell col=\"30\" text=\"0\" displaytype=\"number\"/><Cell col=\"31\" text=\"0\" displaytype=\"number\"/><Cell col=\"32\" text=\"0\" displaytype=\"number\"/><Cell col=\"33\" text=\"0\" displaytype=\"number\"/><Cell col=\"34\" text=\"0\" displaytype=\"number\"/><Cell col=\"35\" text=\"0\" displaytype=\"number\"/><Cell col=\"36\" text=\"0\" displaytype=\"number\"/><Cell col=\"37\" text=\"0\" displaytype=\"number\"/><Cell col=\"38\" text=\"0\" displaytype=\"number\"/><Cell col=\"39\" text=\"0\" displaytype=\"number\"/><Cell col=\"40\" text=\"0\" displaytype=\"number\"/><Cell col=\"41\" text=\"0\" displaytype=\"number\"/><Cell col=\"42\" text=\"0\" displaytype=\"number\"/><Cell col=\"43\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","244",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","230",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","172",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","78","24","90",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("T.O 신청");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","86","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("차고지신청");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM15120.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
