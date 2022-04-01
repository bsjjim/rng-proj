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
            this.set_titletext("해피콜 만족도 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("단기대여");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"해피콜구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"해당본부\"/><Cell col=\"3\" rowspan=\"2\" text=\"해당부서\"/><Cell col=\"4\" colspan=\"27\" text=\"해피콜만족도\"/><Cell col=\"31\" rowspan=\"2\" text=\"전체부서(본부)&#13;&#10;순위\"/><Cell col=\"32\" rowspan=\"2\" text=\"본부내순위\"/><Cell row=\"1\" col=\"4\" text=\"1월\"/><Cell row=\"1\" col=\"5\" text=\"전월대비\"/><Cell row=\"1\" col=\"6\" text=\"2월\"/><Cell row=\"1\" col=\"7\" text=\"전월대비\"/><Cell row=\"1\" col=\"8\" text=\"3월\"/><Cell row=\"1\" col=\"9\" text=\"전월대비\"/><Cell row=\"1\" col=\"10\" text=\"4월\"/><Cell row=\"1\" col=\"11\" text=\"전월대비\"/><Cell row=\"1\" col=\"12\" text=\"5월\"/><Cell row=\"1\" col=\"13\" text=\"전월대비\"/><Cell row=\"1\" col=\"14\" text=\"6월\"/><Cell row=\"1\" col=\"15\" text=\"전월대비\"/><Cell row=\"1\" col=\"16\" text=\"7월\"/><Cell row=\"1\" col=\"17\" text=\"전월대비\"/><Cell row=\"1\" col=\"18\" text=\"8월\"/><Cell row=\"1\" col=\"19\" text=\"전월대비\"/><Cell row=\"1\" col=\"20\" text=\"9월\"/><Cell row=\"1\" col=\"21\" text=\"전월대비\"/><Cell row=\"1\" col=\"22\" text=\"10월\"/><Cell row=\"1\" col=\"23\" text=\"전월대비\"/><Cell row=\"1\" col=\"24\" text=\"11월\"/><Cell row=\"1\" col=\"25\" text=\"전월대비\"/><Cell row=\"1\" col=\"26\" text=\"12월\"/><Cell row=\"1\" col=\"27\" text=\"전월대비\"/><Cell row=\"1\" col=\"28\" text=\"평균\"/><Cell row=\"1\" col=\"29\" text=\"전년동기\"/><Cell row=\"1\" col=\"30\" text=\"전년동기대비\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column4\"/><Cell col=\"7\" text=\"bind:Column4\"/><Cell col=\"8\" text=\"bind:Column4\"/><Cell col=\"9\" text=\"bind:Column4\"/><Cell col=\"10\" text=\"bind:Column4\"/><Cell col=\"11\" text=\"bind:Column4\"/><Cell col=\"12\" text=\"bind:Column4\"/><Cell col=\"13\" text=\"bind:Column4\"/><Cell col=\"14\" text=\"bind:Column4\"/><Cell col=\"15\" text=\"bind:Column4\"/><Cell col=\"16\" text=\"bind:Column4\"/><Cell col=\"17\" text=\"bind:Column4\"/><Cell col=\"18\" text=\"bind:Column4\"/><Cell col=\"19\" text=\"bind:Column4\"/><Cell col=\"20\" text=\"bind:Column4\"/><Cell col=\"21\" text=\"bind:Column4\"/><Cell col=\"22\" text=\"bind:Column4\"/><Cell col=\"23\" text=\"bind:Column4\"/><Cell col=\"24\" text=\"bind:Column4\"/><Cell col=\"25\" text=\"bind:Column4\"/><Cell col=\"26\" text=\"bind:Column4\"/><Cell col=\"27\" text=\"bind:Column4\"/><Cell col=\"28\" text=\"bind:Column4\"/><Cell col=\"29\" text=\"bind:Column4\"/><Cell col=\"30\" text=\"bind:Column4\"/><Cell col=\"31\" text=\"bind:Column4\"/><Cell col=\"32\" text=\"bind:Column4\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"center\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/></Band></Format></Formats>");
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
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static00","20","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","176","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","216","18","73","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("해피콜구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02","299","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_02_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_02_innerdataset", obj);
            div00_form_Combo00_00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">단기대여</Col><Col id=\"datacolumn\">단기대여</Col></Row><Row><Col id=\"codecolumn\">순회정비</Col><Col id=\"datacolumn\">순회정비</Col></Row><Row><Col id=\"codecolumn\">일반정비</Col><Col id=\"datacolumn\">일반정비</Col></Row><Row><Col id=\"codecolumn\">사고정비</Col><Col id=\"datacolumn\">사고정비</Col></Row><Row><Col id=\"codecolumn\">신차탁송</Col><Col id=\"datacolumn\">신차탁송</Col></Row><Row><Col id=\"codecolumn\">일반렌탈</Col><Col id=\"datacolumn\">일반렌탈</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_02_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","389","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","429","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("해당부서");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","498","18","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_innerdataset", obj);
            div00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">자산관리부문</Col><Col id=\"datacolumn\">자산관리부문</Col></Row><Row><Col id=\"codecolumn\">마케팅커뮤니케이션팀</Col><Col id=\"datacolumn\">마케팅커뮤니케이션팀</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","660","18","180","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_01_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_01_00_innerdataset", obj);
            div00_form_Combo00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">전략영업반납주차장(안성)</Col><Col id=\"datacolumn\">전략영업반납주차장(안성)</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Combo00_00_01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","855","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("하위부서검색");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","840","1","15","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","86","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("input_req");
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
        this.loadIncludeScript("CS10250.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
