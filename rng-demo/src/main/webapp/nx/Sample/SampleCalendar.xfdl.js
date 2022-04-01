(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCalendar");
            this.set_titletext("컴포지트 캘린더 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"CalMonth\" type=\"STRING\" size=\"256\"/><Column id=\"CalPeriodMonth\" type=\"STRING\" size=\"256\"/><Column id=\"CalPeriodDay\" type=\"STRING\" size=\"256\"/><Column id=\"CalPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"CalPeriodTime\" type=\"STRING\" size=\"256\"/><Column id=\"CalTime\" type=\"STRING\" size=\"256\"/><Column id=\"CalPeriodQuater\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CalMonth\">202208</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("캘린더 컴포지트 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","85","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("월달력 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","85","642","110",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 202201 (yyyyMM) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrue",null,"54","60","24","764",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("활성화");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalse",null,"54","70","24","692",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("비활성화");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadOnlyTrue",null,"54","100","24","590",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("읽기모드설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadOnlyFalse",null,"54","100","24","488",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("읽기모드해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue",null,"54","100","24","386",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("필수표시설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse",null,"54","100","24","284",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("필수표시해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnInput",null,"54","60","24","888",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("값입력");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput",null,"54","160","24","951",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnOutput",null,"54","60","24","826",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("값반환");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","770","195","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기간달력 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","899","195",null,"110","40",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 20220119,20220119 (yyyyMMdd,yyyyMMdd) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","195","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("기간달력요일 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","195","642","110",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 20220119,20220119 (yyyyMMdd,yyyyMMdd) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","770","85","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("기간월달력 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","899","85",null,"110","40",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 202201,202201 (yyyyMM,yyyyMM) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","304","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("기간달력시간 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","304","642","110",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 202201191220,202201191225 (yyyyMMddHHmm,yyyyMMddHHmm) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","770","305","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("년월일시 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","899","305",null,"110","40",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 202201191229 (yyyyMMddHHmm) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","1","414","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("기간달력분기 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_01","129","413","642","110",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("\r\n입력값 값은 아래와같이\r\n예) 20220119,20220119 (yyyyMMdd,yyyyMMdd) 형태로 입력되어야 한다.");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectTrue",null,"54","120","24","162",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("선택필수표시설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectFalse",null,"54","120","24","40",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("선택필수표시해제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","554",null,"51","40",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CalMonth\"/><Cell col=\"1\" text=\"CalPeriodMonth\"/><Cell col=\"2\" text=\"CalPeriodDay\"/><Cell col=\"3\" text=\"CalPeriod\"/><Cell col=\"4\" text=\"CalPeriodTime\"/><Cell col=\"5\" text=\"CalTime\"/><Cell col=\"6\" text=\"CalPeriodQuater\"/></Band><Band id=\"body\"><Cell text=\"bind:CalMonth\"/><Cell col=\"1\" text=\"bind:CalPeriodMonth\"/><Cell col=\"2\" text=\"bind:CalPeriodDay\"/><Cell col=\"3\" text=\"bind:CalPeriod\"/><Cell col=\"4\" text=\"bind:CalPeriodTime\"/><Cell col=\"5\" text=\"bind:CalTime\"/><Cell col=\"6\" text=\"bind:CalPeriodQuater\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth01","143","152","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("202207");
            this.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay01","143","268","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("20220223,20220223");
            this.addChild(obj.name, obj);

            obj = new CalPeriodTime("CalPeriodTime01","143","380","310","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("202202231220,202202231230");
            this.addChild(obj.name, obj);

            obj = new CalPeriodQuater("CalPeriodQuater01","143","486","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("20220223,20220223");
            this.addChild(obj.name, obj);

            obj = new CalPeriodMonth("CalPeriodMonth01","913","152","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("202202,202202");
            this.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod01","913","261","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("20220223,20220223");
            this.addChild(obj.name, obj);

            obj = new CalTime("CalTime01","913","374","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("202202231230");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","CalMonth01","value","ds00","CalMonth");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleCalendar.xfdl", function() {
        /********************************************************************
        *  캘린더 컴포지트 샘플
        *  @FileName 	: SampleCalendar.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/19
        *  @Desction    : 캘린더 컴포지트 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/19     	        양경호                 최초 생성
        *******************************************************************************
        */
        this.fvCurComposite;

        this.btn_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.fvCurComposite))
        	{
        	    this.gfnAlert("선택한 컴포지트가 없습니다.");
        		return;
        	}
        	//fff
        	switch(obj.id)
        	{
        		case "btnEnableTrue" : this.fvCurComposite.set_enable(true); break;
        		case "btnEnableFalse" : this.fvCurComposite.set_enable(false); break;
        		case "btnReadOnlyTrue" : this.fvCurComposite.set_readonly(true);break;
        		case "btnReadOnlyFalse" : this.fvCurComposite.set_readonly(false); break;
        		case "btnRequiredTrue" : this.fvCurComposite.set_cssclass("input_req"); break;
        		case "btnRequiredFalse" : this.fvCurComposite.set_cssclass(""); break;
        		case "btnSelectTrue" : this.fvCurComposite.set_cssclass("input_select"); break;
        		case "btnSelectFalse" : this.fvCurComposite.set_cssclass(""); break;
        		case "btnOutput" : this.gfnAlert(this.fvCurComposite.value); break;
        		case "btnInput" : this.fvCurComposite.set_value(this.edtInput.value); break;
        	}

        };

        this.divCal_onsetfocus = function(obj,e)
        {
        	this.fvCurComposite = obj;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnEnableTrue.addEventHandler("onclick",this.btn_onclick,this);
            this.btnEnableFalse.addEventHandler("onclick",this.btn_onclick,this);
            this.btnReadOnlyTrue.addEventHandler("onclick",this.btn_onclick,this);
            this.btnReadOnlyFalse.addEventHandler("onclick",this.btn_onclick,this);
            this.btnRequiredTrue.addEventHandler("onclick",this.btn_onclick,this);
            this.btnRequiredFalse.addEventHandler("onclick",this.btn_onclick,this);
            this.btnInput.addEventHandler("onclick",this.btn_onclick,this);
            this.btnOutput.addEventHandler("onclick",this.btn_onclick,this);
            this.btnSelectTrue.addEventHandler("onclick",this.btn_onclick,this);
            this.btnSelectFalse.addEventHandler("onclick",this.btn_onclick,this);
        };
        this.loadIncludeScript("SampleCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
