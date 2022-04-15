(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePopup");
            this.set_titletext("팝업 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">명칭1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">명칭2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("팝업 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","85","130",null,null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("콜백 정보");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","85",null,null,"40","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btnModal2",null,"54","100","24","497",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ModalPopup");
            this.addChild(obj.name, obj);

            obj = new Button("btnModalPopupCallBack",null,"54","170","24","167",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ModalPopup : 함수내콜백");
            this.addChild(obj.name, obj);

            obj = new Button("btnModeless",null,"54","120","24","42",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ModelessPopup");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","135","91",null,null,"45","25",null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnModal3",null,"54","150","24","342",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ModalPopup : 상태바");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SamplePopup.xfdl", function() {
        /********************************************************************
        *  팝업 샘플 화면
        *  @FileName 	: SamplePopup.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/20
        *  @Desction    : 팝업 샘플 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/20     	        양경호                 최초 생성
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

        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnPopupCallback = function(sId,sVal)
        {
        	// json Object 리턴받는 예제
        	if (sId == "SamplePopupTarget") {
        	    if(this.gfnIsNull(sVal)) return;
        		var oRtn = JSON.parse(sVal);
        		trace("oRtn.name : " + oRtn.name);
        		trace("oRtn.rowData : " + oRtn.rowData);

        		this.txt00.set_value(oRtn.name+"\n\n"+oRtn.rowData);
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
        this.btnModalPopup_onclick = function(obj,e)
        {
        	var sTitle = "팝업타이틀";
        	var oArg = {pvName:"테스트", pvName2:"테스트2", pvDataset:this.dsTest};
        	var oOption = {title:sTitle};

        	this.gfnOpenPopup("SamplePopupTarget","Sample::SamplePopupTarget.xfdl",oArg,oOption);
        };

        this.btnModal3_onclick = function(obj,e)
        {
        	var sTitle = "팝업타이틀";
        	var oArg = {pvName:"테스트", pvName2:"테스트2", pvDataset:this.dsTest};
        	var oOption = {title:sTitle,statusbar:"true"};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"

        	this.gfnOpenPopup("SamplePopupTarget","Sample::SamplePopupTarget.xfdl",oArg,oOption);
        };


        this.btnModalPopupCallBack_onclick = function(obj,e)
        {
        	var sTitle = "팝업타이틀";
        	var oArg = {pvName:"테스트", pvName2:"테스트2", pvDataset:this.dsTest};
        	var oOption = {title:sTitle};

        	this.gfnOpenPopup("SamplePopupTarget","Sample::SamplePopupTarget.xfdl",oArg,oOption,
        	  function(sId,sVal)
        	  {
        			var oRtn = JSON.parse(sVal);
        			trace("oRtn.name : " + oRtn.name);
        			trace("oRtn.rowData : " + oRtn.rowData);

        			this.txt00.set_value(oRtn.name+"\n\n"+oRtn.rowData);
        	  }
        	);
        };

        this.btnModeless_onclick = function(obj,e)
        {
        	var sTitle = "팝업타이틀";
        	var oArg = {pvName:"테스트", pvName2:"테스트2", pvDataset:this.dsTest};

        	var oOption = {title:sTitle,popuptype:"modeless",width:900,height:551};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"

        	this.gfnOpenPopup("SamplePopupTarget","Sample::SamplePopupTarget.xfdl",oArg,oOption);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnModal2.addEventHandler("onclick",this.btnModalPopup_onclick,this);
            this.btnModalPopupCallBack.addEventHandler("onclick",this.btnModalPopupCallBack_onclick,this);
            this.btnModeless.addEventHandler("onclick",this.btnModeless_onclick,this);
            this.btnModal3.addEventHandler("onclick",this.btnModal3_onclick,this);
        };
        this.loadIncludeScript("SamplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
