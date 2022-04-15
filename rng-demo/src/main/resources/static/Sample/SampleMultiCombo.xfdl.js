(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleMultiCombo");
            this.set_titletext("멀티콤보 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"ESTAT\" type=\"STRING\" size=\"5\"/><Column id=\"TXT30\" type=\"STRING\" size=\"30\"/><Column id=\"_chk\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"ESTAT\">E0008</Col><Col id=\"TXT30\">렌탈가</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0009</Col><Col id=\"TXT30\">수리중</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0010</Col><Col id=\"TXT30\">교정중</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0012</Col><Col id=\"TXT30\">처분</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0013</Col><Col id=\"TXT30\">출고대기</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0014</Col><Col id=\"TXT30\">렌탈중</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0015</Col><Col id=\"TXT30\">입고대기</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0016</Col><Col id=\"TXT30\">기타</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0018</Col><Col id=\"TXT30\">삭제</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0019</Col><Col id=\"TXT30\">수리불가</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0020</Col><Col id=\"TXT30\">매각대기</Col><Col id=\"_chk\">0</Col></Row><Row><Col id=\"ESTAT\">E0021</Col><Col id=\"TXT30\">렌탈불가</Col><Col id=\"_chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("멀티콤보 컴포지트 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput",null,"99","160","24","958",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("E0009,E0010,E0013");
            obj.set_text("E0009,E0010,E0013");
            this.addChild(obj.name, obj);

            obj = new Button("btnComboType",null,"65","70","24","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("콤보타입");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbType",null,"64","80","24","114",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbType_innerdataset = new nexacro.NormalDataset("cmbType_innerdataset", obj);
            cmbType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">A 타입</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">B 타입</Col></Row></Rows>");
            obj.set_innerdataset(cmbType_innerdataset);
            obj.set_text("A 타입");
            obj.set_value("A");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","135",null,"110","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_verticalAlign("top");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","135","130","110",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("멀티콤보 컴포지트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrue",null,"94","60","24","764",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("활성화");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalse",null,"94","70","24","692",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("비활성화");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadOnlyTrue",null,"94","100","24","590",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("읽기모드설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadOnlyFalse",null,"94","100","24","488",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("읽기모드해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue",null,"94","100","24","386",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("필수표시설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse",null,"94","100","24","284",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("필수표시해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnInput",null,"94","60","24","888",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("값입력");
            this.addChild(obj.name, obj);

            obj = new Button("btnOutput",null,"94","60","24","826",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("값반환");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectTrue",null,"94","120","24","162",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("선택필수표시설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectFalse",null,"94","120","24","40",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("선택필수표시해제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","358","169","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcboTest","155","169","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("input_req");
            obj.set_viewtype("A");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("ESTAT");
            obj.set_datacolumn("TXT30");
            obj.set_displaynulltext("전체");
            this.addChild(obj.name, obj);

            obj = new Button("btnDisplay",null,"66","110","24","200",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("콤보기본텍스트");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbText",null,"65","80","24","314",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbText_innerdataset = new nexacro.NormalDataset("cmbText_innerdataset", obj);
            cmbText_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선텍</Col></Row></Rows>");
            obj.set_innerdataset(cmbText_innerdataset);
            obj.set_text("A 타입");
            obj.set_value("A");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","555","180","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("aaaaa");
            obj.set_text("aaaaa");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt00","value","dsSearch","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","mcboTest","value","dsSearch","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleMultiCombo.xfdl", function() {
        /********************************************************************
        *  멀티콤보 컴포지트 샘플
        *  @FileName 	: SampleCalendar.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/02/07
        *  @Desction    : 멀티콤보 컴포지트 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/02/07     	        양경호                 최초 생성
        *******************************************************************************
        */
        this.fvCurComposite;

        this.btn_onclick = function(obj,e)
        {


        	switch(obj.id)
        	{
        	    case "btnDisplay" : this.mcboTest.set_displaynulltext(this.cmbText.value); break;
        		case "btnComboType" : this.mcboTest.set_viewtype(this.cmbType.value); break;
        	    case "btnClear" : this.mcboTest.init(); break;
        		case "btnEnableTrue" : this.mcboTest.set_enable(true); break;
        		case "btnEnableFalse" : this.mcboTest.set_enable(false); break;
        		case "btnReadOnlyTrue" : this.mcboTest.set_readonly(true); break;
        		case "btnReadOnlyFalse" : this.mcboTest.set_readonly(false); break;
        		case "btnRequiredTrue" : this.mcboTest.set_cssclass("input_req"); break;
        		case "btnRequiredFalse" : this.mcboTest.set_cssclass(""); break;
        		case "btnSelectTrue" : this.mcboTest.set_cssclass("input_select"); break;
        		case "btnSelectFalse" : this.mcboTest.set_cssclass(""); break;
        		case "btnOutput" : this.gfnAlert(this.mcboTest.value); break;
        		case "btnInput" : this.mcboTest.set_value(this.edtInput.value); break;
        	}

        };

        this.edt01_oninput = function(obj,e)
        {
        	obj.set_value(obj._default_value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnComboType.addEventHandler("onclick",this.btn_onclick,this);
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
            this.btnDisplay.addEventHandler("onclick",this.btn_onclick,this);
            this.edt01.addEventHandler("oninput",this.edt01_oninput,this);
        };
        this.loadIncludeScript("SampleMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
