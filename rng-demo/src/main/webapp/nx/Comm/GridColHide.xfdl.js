(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilter");
            this.set_titletext("New Form");
            this.set_background("#ffffff");
            this.set_border("1px solid #dddddd");
            if (Form == this.constructor)
            {
                this._setFormPosition(179,273);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHeadInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","10","40",null,"194","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsHeadInfo");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_WF_list");
            obj.set_autosizebandtype("noleft");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"95\"/></Columns><Rows><Row size=\"18\"/></Rows><Band id=\"body\"><Cell text=\"bind:_chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:data\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","43","265","124","7",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","43","234","159","7",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"241","50","24","65",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"241","50","24","11",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("열숨기기 설정");
            obj.set_cssclass("sta_POP_title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",179,273,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridColHide.xfdl", function() {
        /********************************************************************
        *  그리드 열숨기기 기능
        *  @FileName 	: GridColHide.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/02/23
        *  @Desction    : 설명
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/02/23     	        양경호                 최초 생성
        *******************************************************************************
        */

        this.fvCurCell;
        this.fvGrid;
        this.fvCurGrid;
        this.fvFormatSizeInfo;
        this.fnInit = function()
        {
            this.fvGrid = this.parent.grid;
        	this.fvCell = this.parent.cellindex;

        	var nColCnt = this.fvGrid.getFormatColCount();

        	this.fvFormatSizeInfo = this.fvGrid.formatDefaultColSize;

        	if(this.gfnIsNull(this.fvFormatSizeInfo))
        	{
        		this.fvFormatSizeInfo = [];

        		for(var i=0; i<nColCnt; i++)
        		{
        			 sText = this.fvGrid.getCellProperty("head",i,"text");
        			 this.fvFormatSizeInfo[i] = {text:sText,size:this.fvGrid.getFormatColSize(i),show:1};
        		}

        		this.fvGrid.formatDefaultColSize = this.fvFormatSizeInfo;
        	}

        	this.dsHeadInfo.clearData();
        	var nRow;
        	var sText;
        	var oDetail;
        	for(var i=0; i<nColCnt; i++)
        	{
        		 nRow = this.dsHeadInfo.addRow();
        		 sText = this.fvGrid.getCellProperty("head",i,"text");
        		 oDetail = this.fvFormatSizeInfo.find(({text}) => text === sText);
        		 this.dsHeadInfo.setColumn(nRow,"_chk",oDetail.show);
        		 this.dsHeadInfo.setColumn(nRow,"data",sText);
        	}
        }

        this.pdvCal_btnClose_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        this.pdvCal_btnSel_onclick = function(obj,e)
        {
         	var sText;
        	var oDetail;

        	if(this.dsHeadInfo.getCaseCount("_chk == '1'") == 0) return;

        	for(var i=0; i<this.dsHeadInfo.rowcount; i++)
        	{
        		sText = this.fvGrid.getCellProperty("head",i,"text");
        		oDetail = this.fvFormatSizeInfo.find(({text}) => text === sText);
        		if(this.dsHeadInfo.getColumn(i,"_chk") == "0")
        		{
        			oDetail.show = 0;
        			this.fvGrid.setFormatColProperty(i,"size",0);
        		}
        		else
        		{
        		    oDetail.show = 1;
        			this.fvGrid.setFormatColProperty(i,"size",oDetail.size);
        		}
        	}

        	this.parent.closePopup();
        };

        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "control") return;

        	var sChk = this.dsHeadInfo.getColumn(e.row,"_chk");

        	if(sChk == "1")
        	{
        		this.dsHeadInfo.setColumn(e.row,"_chk","0");
        	}
        	else
        	{
        		this.dsHeadInfo.setColumn(e.row,"_chk","1");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.btnSel.addEventHandler("onclick",this.pdvCal_btnSel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.pdvCal_btnClose_onclick,this);
        };
        this.loadIncludeScript("GridColHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
