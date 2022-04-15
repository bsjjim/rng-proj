(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_05");
            this.set_titletext("DM관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("발송지점");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","312","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","352","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","86","52","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("input_req");
            obj.set_text("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"2","10","60","1400",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01",null,"0","10","60","1068",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","884","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("DM구분");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","628","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","668","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("등록번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","352","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("확정상태");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00",null,"0","10","60","752",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","844","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","668","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00",null,"10","10","60","536",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","130","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","157","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("input_req");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","950","18","175","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var DivSearch_form_Radio00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Radio00_00_innerdataset", obj);
            DivSearch_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">이메일</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">우편DM</Col><Col id=\"datacolumn\">우편DM</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Radio00_00_innerdataset);
            obj.set_text("이메일");
            obj.set_value("이메일");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","418","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","734","18","84","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","820","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","418","52","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("input_req");
            obj.set_text("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","734","52","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("input_req");
            obj.set_text("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0","48.04%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","130","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"결재상태\"/><Cell col=\"3\" text=\"확정상태\"/><Cell col=\"4\" text=\"전송상태\"/><Cell col=\"5\" text=\"DM구분\"/><Cell col=\"6\" text=\"등록번호\"/><Cell col=\"7\" text=\"등록일자\"/><Cell col=\"8\" text=\"주제명\"/><Cell col=\"9\" text=\"요청수량\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("최종발송요청");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","74","24","282",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_02",null,"20","74","24","204",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("결재상선");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_03",null,"20","98","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("발송미리보기");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"90","20","60","774",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div01:20","DivSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","135","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("DM발송 등록상세");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"고객명1\"/><Cell col=\"2\" text=\"고객명2\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"수정 이메일\"/><Cell col=\"5\" text=\"영업사원명\"/><Cell col=\"6\" text=\"영업사원 휴대전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);
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
        this.registerScript("SD13770.xfdl", function() {

        this.Div01_Static02_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD13770.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
