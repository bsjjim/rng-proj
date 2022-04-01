(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MDI");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_cssclass("frm_MDI");
            if (Form == this.constructor)
            {
                this._setFormPosition(1568,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#D3D3D3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","40",null,null,"29","170","-1",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_selectchangetype("down");
            obj.set_showextrabutton("true");
            obj.set_cssclass("tab_MDI");
            obj.set_tabbuttonheight("29");
            obj.set_visible("true");
            obj.set_tabbuttongap("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"2","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("linear-gradient(to bottom,rgba(0,0,0,0.15) 0%,transparent 100%)");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"7","27","20","137",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_maximize");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"7","24","20","113",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_minimize");
            this.addChild(obj.name, obj);

            obj = new Button("btnTilevertical",null,"7","24","20","89",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"7","24","20","65",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_vertical");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"7","27","20","38",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_close");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01",null,"62","27","20","137",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_maximizeS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01",null,"62","24","20","113",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_minimizeS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_01",null,"62","24","20","89",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_horizontalS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_01",null,"62","24","20","65",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_verticalS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00",null,"62","27","20","38",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_closeS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","1447","92","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Select 시 클래스 바뀜");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1568,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mdi.xfdl", function() {
        /********************************************************************
        *  MDI Frame 영역 화면
        *  @FileName 	: Mdi.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/13
        *  @Desction    : MDI Frame 영역 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/13     	        양경호                 최초 생성
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

         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

          /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         //탭 추가
         this.fnAddTab = function(sWinId,sMenuNm)
         {
        	var nRow = this.dsTab.findRow(this.jvWinId, sWinId);
        	if (nRow > -1) return nRow;

        	nRow = this.dsTab.addRow();
        	this.dsTab.setColumn(nRow, "WIN_ID", sWinId);
        	this.dsTab.setColumn(nRow, "TITLE", sMenuNm);

        	this.tabMdi.insertTabpage(sWinId,-1,"",sMenuNm);
         }

         //탭 활성화
         this.fnActiveFrame = function(sWinId)
         {
         	var nRow = this.dsTab.findRow("WIN_ID", sWinId);
        	if (nRow < 0)
        	{
        		return false;
        	}
        	this.dsTab.set_rowposition(nRow);
        	this.tabMdi.set_tabindex(nRow);

        	var oFrames = this.oApp.avWorkFrame.frames;

        	if(!this.gfnIsNull(oFrames.indexOf(sWinId)) && !this.gfnIsNull(oFrames[sWinId].form))
        	{
        		oFrames[sWinId].form.setFocus();
        	}

        	return true;
         }

         //탭 삭제
         this.fnDelTab = function(nIdx)
         {
        	var sWinId;
        	if(typeof(nIdx) == "number")
        	{
        		sWinId = this.dsTab.getColumn(nIdx,this.jvWinId);
        	}
        	else
        	{
        		sWinId =  nIdx;
        		nIdx = this.dsTab.findRow("WIN_ID", nIdx);
        	}

        	var rObj = this.oApp.avWorkFrame.removeChild(sWinId);
        	rObj.destroy();
        	rObj = null;
        	this.tabMdi.removeTabpage(nIdx);
        	this.oApp.gdsOpenMenu.deleteRow(nIdx);
        	this.dsTab.deleteRow(nIdx);
        	return true;
         }


         //열려있는 윈도우 화면을 정렬 및 모든창 닫기
        this.fnArrangeWin = function(sType,bAct)
        {
            sType = sType.toLowerCase();
        	bAct = (this.gfnIsNull(bAct)) ? false : bAct;

        	// workFrame영역에 open된 childFrame 갯수
        	var nFramesCnt = this.oApp.avWorkFrame.frames.length;

        	if (this.oApp.gdsOpenMenu.getRowCount() < 1) return;

        	//frame visibe 처리내역 추가(2019.9.5)
        	if (sType != "maximize" )
        	{
        		var framesInfo = this.oApp.avWorkFrame.frames;
        		for ( var i = 0 ; i < framesInfo.length ; i++ )
        		{
        			framesInfo[i].set_visible(true);
        		}
        	}

        	this.fvArrangeType = sType;

        	switch (sType)
        	{
        		case "maximize" :
        		    var curWinId = this.oApp.avWorkFrame.getActiveFrame().name;
        			for (var i=0; i<nFramesCnt; i++)
        			{
        				this.oApp.avWorkFrame.frames[i].set_openstatus("maximize");
        				this.oApp.avWorkFrame.frames[i].set_showtitlebar(false);
        				this.oApp.avWorkFrame.frames[i].set_border("0px solid #006666");
        			}

        			this.fnActiveFrame(curWinId);
        			break;

        		case "closeall" :
        		    var bCloseCheck = true;

        			if(bAct == false)
        			{
        				for (var i=0; i<nFramesCnt; i++)
        				{
        					if (this.oApp.avWorkFrame.frames[i].form.fnModifyYn() == true)
        					{
        						bCloseCheck =  false;
        						break;
        					}
        				}
        			}

        			if (bCloseCheck == true){
        				for (var i=nFramesCnt-1; i>-1; i--)
        				{
        					//this.fnTabOnClose(this.oApp.avWorkFrame.frames[i-1].name);
        					this.fnDelTab(i);
        				}
        			}
        			else
        			{
        				// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        				this.gfnConfirm("confirm.before.allmovepage", "",
        					function(sId,sVal)
        					{
        						if(sVal == true)
        						{
        							this.fnArrangeWin("closeall",true);
        						}
        					}
        				);
        			}
        			break;

        		case "hidden" :
        			for (var i=0; i<nFramesCnt; i++)
        			{
        				this.oApp.avWorkFrame.frames[i].set_showtitlebar(true);
        				this.oApp.avWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.oApp.avWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.oApp.avWorkFrame.frames[i].set_openstatus("minimize");
        			}
        			this.oApp.avWorkFrame.arrange(sType);
        			break;

        		default :
        			for (var i=0; i<nFramesCnt; i++)
        			{
        				this.oApp.avWorkFrame.frames[i].set_showtitlebar(true);
        				this.oApp.avWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.oApp.avWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.oApp.avWorkFrame.frames[i].set_openstatus("normal");
        				this.oApp.avWorkFrame.frames[i].set_titlebarheight("30");
        				//this.oApp.avWorkFrame.frames[i].titlebar.closebutton.set_enable(false);
        				this.oApp.avWorkFrame.frames[i].titlebar.closebutton.setEventHandler("onclick",this.fnClose,this);
        			}
        			this.oApp.avWorkFrame.arrange(sType);
        			break;
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fnClose = function(obj,e)
        {
        	var sWinId = obj.parent.parent.winId;

        	this.oApp.avMdiFrame.form.fnDelTab(sWinId);

        }
        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	 this.fnDelTab(e.index);
        };

        this.tabMdi_onchanged = function(obj,e)
        {
            var sWinId = this.dsTab.getColumn(e.postindex,this.jvWinId);
        	this.fnActiveFrame(sWinId);
        	this.oApp.avStatusFrame.form.staStatusText.set_text("");
        };

        this.btnArrange_onclick = function(obj,e)
        {
            var sType = obj.name.replace("btn", "");
        	this.fnArrangeWin(sType);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.btnMaximize.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnTilevertical.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnArrange_onclick,this);
        };
        this.loadIncludeScript("Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
