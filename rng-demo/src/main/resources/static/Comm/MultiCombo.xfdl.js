(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(120,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdvList","0","24","224","185",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_00","184","215","100","10",null,null,null,null,null,null,this.pdvList.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvList.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0",null,null,"0","0",null,null,null,null,this.pdvList.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCombo");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"214\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"0\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:_chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:data\" textAlign=\"left\"/></Band></Format><Format id=\"B\"><Columns><Column size=\"30\"/><Column size=\"214\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"0\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:_chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:data\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdvList.addChild(obj.name, obj);

            obj = new Edit("edtCombo","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_multicombo");
            this.addChild(obj.name, obj);

            obj = new Button("btnDrop",null,"0","24","24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_drop");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",120,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MultiCombo.xfdl", function() {
        /********************************************************************
        *  멀티콤보 컴포지트
        *  @FileName 	: MultiCombo.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/02/04
        *  @Desction    : 양경호
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/02/04     	        양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();

        this.fvData = "";
        this.fvCodeColumn = "";
        this.fvDataColumn = "";
        this.fvComboType = "A";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
            this.gfnFormOnLoad(obj)
        	this.fnInit();
        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /*
        * 초기화
        */
        this.fnInit = function()
        {
        	this.edtCombo.set_value("");
        }

        //필수 표시
        this.fnSetRequired = function(bAct)
        {
            if(bAct)
        	{
        	   this.edtCombo.set_cssclass("input_req");
        	}
        	else
        	{
        		this.edtCombo.set_cssclass("");
        	}
        }

        //선택필수 표시
        this.fnSetSelect = function(bAct)
        {
            if(bAct)
        	{
        	   this.edtCombo.set_cssclass("input_select");
        	}
        	else
        	{
        	   this.edtCombo.set_cssclass("");
        	}
        }

        //컴포넌트 활성 비활성화
        this.fnSetBindDataset = function(oDs,sCodeColumn,sDataColumn)
        {
        	this.dsCombo.assign(oDs);

        	if(this.gfnIsNull(this.dsCombo.getColumnInfo("_chk"))) this.dsCombo.addColumn("_chk","STRING");

        	this.fvCodeColumn = (this.gfnIsNull(sCodeColumn)) ? "code" : sCodeColumn;
        	this.fvDataColumn = (this.gfnIsNull(sDataColumn)) ? "data" : sDataColumn;

        	if(this.fvComboType == "A")
        	{
        		this.pdvList.form.grdList.setCellProperty("body",1,"text","bind:"+sCodeColumn);
        		this.pdvList.form.grdList.setCellProperty("body",2,"text","bind:"+sDataColumn);
        	}
        	else
        	{
        		this.pdvList.form.grdList.setCellProperty("body",1,"text","bind:"+sDataColumn);
        	}
        };

        //콤보타입
        this.fnSetComboType = function(sType)
        {
        	if(!(sType == "A" || sType == "B")) return;

        	this.fvComboType = sType;

        	if(this.fvComboType == "A")
        	{
        	    this.pdvList.form.grdList.set_formatid("");
        		this.pdvList.form.grdList.setCellProperty("body",1,"text","bind:"+this.fvCodeColumn);
        		this.pdvList.form.grdList.setCellProperty("body",2,"text","bind:"+this.fvDataColumn);
        	}
        	else
        	{
        		this.pdvList.form.grdList.set_formatid("B");
        		this.pdvList.form.grdList.setCellProperty("body",1,"text","bind:"+this.fvDataColumn);
        	}
        };

        //컴포넌트 활성 비활성화
        this.fnSetEnable = function(bValue)
        {
        	this.edtCombo.set_enable(bValue);
        	this.btnDrop.set_enable(bValue);
        };

        //컴포넌트 Readonly셋팅
        this.fnSetReadonly = function(bValue)
        {
        	this.edtCombo.set_readonly(bValue);
        	this.btnDrop.set_visible(!bValue);
        };

        //컴포넌트 콤보값 셋팅
        this.fnSetValue = function(sValue)
        {
            this.fvData = sValue;

        	this.fnComboChkClear();

        	this.fnDataToList();

        	this.fnListToData();

        }

        //컴포넌트 날짜값 반환
        this.fnGetValue = function(sDate)
        {
           	return this.fvData;
        }

        this.fnComboChkClear = function()
        {
            for(var i=0; i<this.dsCombo.rowcount; i++)
        	{
        	   this.dsCombo.setColumn(i,"_chk","0");
        	}
        }

        this.fnDataToList = function()
        {
        	if(!this.gfnIsNull(this.fvData))
        	{
        	    var aCode = this.fvData.split(",");
        		var sCode;
        		for(var i=0; i<this.dsCombo.rowcount; i++)
        		{
        		    sCode = this.dsCombo.getColumn(i,this.fvCodeColumn);

        			if(aCode.indexOf(sCode) > -1)
        			{
        				this.dsCombo.setColumn(i,"_chk","1");
        			}
        		}
        	}

        	if(this.dsCombo.getCaseCount("_chk == '1'") == this.dsCombo.rowcount)
        	{
        	    this.pdvList.form.grdList.setCellProperty("head",0,"text","1");
        	}
        	else
        	{
        		this.pdvList.form.grdList.setCellProperty("head",0,"text","0");
        	}

        }

        this.fnListToData = function()
        {
            var sCode = "";
        	var sText = "";
        	var nCnt = 0;
        	for(var i=0; i<this.dsCombo.rowcount; i++)
        	{
        		if(this.dsCombo.getColumn(i,"_chk") == "1")
        		{
        		    sCode += (this.gfnIsNull(sCode)) ? this.dsCombo.getColumn(i,this.fvCodeColumn) : ","+this.dsCombo.getColumn(i,this.fvCodeColumn);
        			if(this.gfnIsNull(sText))
        			{
        				sText = this.dsCombo.getColumn(i,this.fvDataColumn)
        			}
        			else
        			{
        				nCnt++;
        			}
        		};
        	}

        	if(nCnt > 0)
        	{
        		sText += "외 "+nCnt+"건";
        	}

        	this.edtCombo.set_value(sText);
        	this.fvData = sCode;
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/


        this.btnDrop_onclick = function(obj,e)
        {
            if(this.dsCombo.rowcount < 1) return;

        	//콤보체크 클리어
        	this.fnComboChkClear();

        	this.fnDataToList();

        	this.pdvList.trackPopupByComponent(this.edtCombo,this.edtCombo.left,this.edtCombo.height);
        };


        this.MultiCombo_onsetfocus = function(obj,e)
        {
        	if(obj.getFocus() == obj)
        	{
        		obj.edtCombo.setFocus();
        	}
        };

        this.pdvList_oncloseup = function(obj,e)
        {
        	this.fnListToData();
        };

        this.dsCombo_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "_chk")
        	{
        		if(obj.getCaseCount("_chk == '1'") == obj.rowcount)
        		{
        			this.pdvList.form.grdList.setCellProperty("head",0,"text","1");
        		}
        		else
        		{
        			this.pdvList.form.grdList.setCellProperty("head",0,"text","0");
        		}
        	}
        };

        this.pdvList_grdList_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "control") return;

        	var sChk = this.dsCombo.getColumn(e.row,"_chk");

        	if(sChk == "1")
        	{
        		this.dsCombo.setColumn(e.row,"_chk","0");
        	}
        	else
        	{
        		this.dsCombo.setColumn(e.row,"_chk","1");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.addEventHandler("onsetfocus",this.MultiCombo_onsetfocus,this);
            this.pdvList.addEventHandler("oncloseup",this.pdvList_oncloseup,this);
            this.pdvList.form.grdList.addEventHandler("oncellclick",this.pdvList_grdList_oncellclick,this);
            this.btnDrop.addEventHandler("onclick",this.btnDrop_onclick,this);
            this.dsCombo.addEventHandler("oncolumnchanged",this.dsCombo_oncolumnchanged,this);
        };
        this.loadIncludeScript("MultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
