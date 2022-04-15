(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleMessage");
            this.set_titletext("메시지 팝업 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메시지 팝업 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","41",null,"175","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","32",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>gdsMessage :</b> 글로벌 메시지 데이터셋 공통적으로 사용하는 메시지는 해당 데이터셋에 등록하여 사용");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","18","9","1306","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("공통 메시지");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","61","28","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","61","50","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00","61","72","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","54",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'>gfnMsg :</b> 메시지 관련 함수이며 this.gfnMsg(sMsgId,aArgs)로 호출하여 사용한다.  글로벌 데이터셋에 등록되어있는 메시지만 사용가능");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","18","77",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'>gfnMsgPopup :</b> 기본 통합메시지 팝업 함수 이며 기본 콜백함수명은 fnMsgCallback으로 반환된다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","18","99",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("<b v=\'true\'>gfnAlert :</b> Alert 메시지 팝업 함수 이며 기본 콜백함수명은 fnMsgCallback으로 반환된다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","18","121",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("<b v=\'true\'>gfnConfirm :</b> Confirm메시지 팝업 함수 이며 기본 콜백함수명은 fnMsgCallback으로 반환된다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_02","18","143",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'>gfnError :</b> Error메시지 팝업 함수 이며 기본 콜백함수명은 fnMsgCallback으로 반환된다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","225","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("gdsMessage");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","254","898",null,null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("gdsMessage");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"456\"/><Column size=\"54\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"msgId\"/><Cell col=\"1\" text=\"msgText\"/><Cell col=\"2\" text=\"msgType\"/></Band><Band id=\"body\"><Cell text=\"bind:msgId\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"readonly\"/><Cell col=\"1\" text=\"bind:msgText\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:msgType\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","930","225","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("gfnMsg");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","930","254","130","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용방법");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","1059","254",null,"200","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_verticalAlign("top");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","1078","265","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메시지ID");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","1079","294","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("아규먼트1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtArg0","1144","294","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("항목1");
            obj.set_text("항목1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtArg1","1144","324","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("항목2");
            obj.set_text("항목2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtArg2","1145","354","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("항목3");
            obj.set_text("항목3");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","1079","324","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("아규먼트2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","1079","354","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("아규먼트3");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","1089","384","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("결과");
            this.addChild(obj.name, obj);

            obj = new Static("staMsg","1089","411","380","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("1px solid #555555");
            this.addChild(obj.name, obj);

            obj = new Button("btnMsg","1415","350","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","930","465","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("gfnMsgPopup");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","930","494","130","323",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("사용방법");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","1059","494",null,"323","40",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_verticalAlign("top");
            obj.set_usedecorate("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","1078","505","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("메시지ID");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","1079","616","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("아규먼트1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMsgArg0","1144","616","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("선택항목");
            obj.set_text("선택항목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMsgArg1","1144","646","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMsgArg2","1145","676","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","1079","646","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("아규먼트2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","1079","676","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("아규먼트3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMsgId","1145","264","260","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("gdsMessage");
            obj.set_codecolumn("msgId");
            obj.set_datacolumn("msgText");
            obj.set_text("서버 오류입니다.\\n관리자에게 문의하세요.");
            obj.set_value("msg.server.error");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","1079","752","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("타입");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMsgType","1145","705","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbMsgType_innerdataset = new nexacro.NormalDataset("cmbMsgType_innerdataset", obj);
            cmbMsgType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">Alert</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">Confirm</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">Error</Col></Row></Rows>");
            obj.set_innerdataset(cmbMsgType_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnMsgPopup","1073","754","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("메시지호출");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgId","1143","505","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("msg.noselect");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtAddMsg","1143","561","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","1078","561","60","34",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("추가메시지\r\n(error)");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert","1074","784","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Alert");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","1140","784","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnError","1215","784","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Error");
            this.addChild(obj.name, obj);

            obj = new Button("btnMsgPopupCallback","1158","754","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("메시지호출(함수내콜백)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleMessage.xfdl", function() {
        /********************************************************************
        *  메시지 관련 샘플
        *  @FileName 	: SampleMessage.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/21
        *  @Desction    : 메시지 관련 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/21     	        양경호                 최초 생성
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
        	this.gfnFormOnLoad(obj);
        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnMsgCallback = function(sId,sVal)
        {
            if(sId == "test")
        	{
        		trace("==콜백함수==")
        	    trace("sId ==>"+sVal);
        	    trace("sVal ==>"+sVal);
        	}
        }
        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.btnMsg_onclick = function(obj,e)
        {
            var aArgs = [];

        	if(this.gfnIsNull(this.cmbMsgId.value)) return;

        	for(var i=0; i<3; i++)
        	{
        		if(!this.gfnIsNull(this.components["edtArg"+i].value))	aArgs[aArgs.length] = this.components["edtArg"+i].value;
        	}

        	var sMsg = this.gfnMsg(this.cmbMsgId.value,aArgs);

        	this.staMsg.set_text(sMsg);

        };

        this.btnMsgPopup_onclick = function(obj,e)
        {
            var aArgs = [];

        	if(this.gfnIsNull(this.txtMsgId.value)) return;

        	for(var i=0; i<3; i++)
        	{
        		if(!this.gfnIsNull(this.components["edtMsgArg"+i].value)) aArgs[aArgs.length] = this.components["edtMsgArg"+i].value;
        	}

        	this.gfnMsgPopup(this.txtMsgId.value,aArgs,this.cmbMsgType.value,"fnMsgCallback","test",this.txtAddMsg.value);
        };

        this.btnMsgPopupCallback_onclick = function(obj,e)
        {
            var aArgs = [];

        	if(this.gfnIsNull(this.txtMsgId.value)) return;

        	for(var i=0; i<3; i++)
        	{
        		if(!this.gfnIsNull(this.components["edtMsgArg"+i].value)) aArgs[aArgs.length] = this.components["edtMsgArg"+i].value;
        	}

        	this.gfnMsgPopup(this.txtMsgId.value,aArgs,this.cmbMsgType.value,
        	function(sId,sVal)
        	{
        	   trace("==함수내콜백==")
        	   trace("sId ==>"+sId)
        	   trace("sVal ==>"+sVal)
        	},"test",this.txtAddMsg.value);
        };

        this.btnAlert_onclick = function(obj,e)
        {
            var aArgs = [];

        	if(this.gfnIsNull(this.txtMsgId.value)) return;

        	for(var i=0; i<3; i++)
        	{
        		if(!this.gfnIsNull(this.components["edtMsgArg"+i].value)) aArgs[aArgs.length] = this.components["edtMsgArg"+i].value;
        	}

        	this.gfnAlert(this.txtMsgId.value,aArgs);
        };

        this.btnConfirm_onclick = function(obj,e)
        {
            var aArgs = [];

        	if(this.gfnIsNull(this.txtMsgId.value)) return;

        	for(var i=0; i<3; i++)
        	{
        		if(!this.gfnIsNull(this.components["edtMsgArg"+i].value)) aArgs[aArgs.length] = this.components["edtMsgArg"+i].value;
        	}

        	this.gfnConfirm(this.txtMsgId.value,aArgs);
        };

        this.btnError_onclick = function(obj,e)
        {
            var aArgs = [];

        	if(this.gfnIsNull(this.txtMsgId.value)) return;

        	for(var i=0; i<3; i++)
        	{
        		if(!this.gfnIsNull(this.components["edtMsgArg"+i].value)) aArgs[aArgs.length] = this.components["edtMsgArg"+i].value;
        	}

        	this.gfnError(this.txtMsgId.value,this.txtAddMsg.value,aArgs);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnMsg.addEventHandler("onclick",this.btnMsg_onclick,this);
            this.btnMsgPopup.addEventHandler("onclick",this.btnMsgPopup_onclick,this);
            this.btnAlert.addEventHandler("onclick",this.btnAlert_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnError.addEventHandler("onclick",this.btnError_onclick,this);
            this.btnMsgPopupCallback.addEventHandler("onclick",this.btnMsgPopupCallback_onclick,this);
        };
        this.loadIncludeScript("SampleMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
