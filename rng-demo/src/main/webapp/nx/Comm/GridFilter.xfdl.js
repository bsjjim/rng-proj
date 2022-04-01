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
                this._setFormPosition(152,308);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("imv00_01","180","3","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_sortUp.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00_01","180","30","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_sortDown.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00_00_00","180","58","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grid_colHide.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_01_00","220","3","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_sortUp_D.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00_01_00","220","30","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_sortDown_D.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00_00_00_00","220","58","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grid_colHide_D.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_01_00_00","260","3","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_filter.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_01_00_00_00","260","43","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_filterUp.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_01_00_00_00_00","260","73","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_visible("false");
            obj.set_image("url(\'theme://images/grd_filterDown.png\')");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","136",null,"132","12",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsColInfo");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_WF_list");
            obj.set_autosizebandtype("noleft");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"95\"/></Columns><Rows><Row size=\"18\"/></Rows><Band id=\"body\"><Cell text=\"bind:_chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:data\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSortUp","0","0",null,"27","2",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("오름차순정렬");
            obj.set_cssclass("btn_POP_filter");
            this.addChild(obj.name, obj);

            obj = new Button("btnSortDown","0","27",null,"27","2",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("내림차순 정렬");
            obj.set_cssclass("btn_POP_filter");
            this.addChild(obj.name, obj);

            obj = new Button("btnColHide","0","54",null,"27","2",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("열 숨기기 설정");
            obj.set_cssclass("btn_POP_filter");
            obj.set_icon("url(\'imagerc::btn_Block_popup.png\')");
            obj.set_iconPosition("right");
            obj.set_textPadding("0px 5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","11","84","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("열필터링");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFilter","10","107",null,"24","38",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"107","24","24","12",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Comp_src");
            this.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"275","50","24","66",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("확인");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"275","50","24","12",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("닫기");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imvSortUp","130","3","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_image("url(\'theme://images/grd_sortUp_D.png\')");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imvDown","130","30","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_image("url(\'theme://images/grd_sortDown_D.png\')");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imvColHide","130","58","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("img_POP_filterIcon");
            obj.set_image("url(\'theme://images/grid_colHide_D.png\')");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","15","299","124","7",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",152,308,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridFilter.xfdl", function() {
        /********************************************************************
        *  그리드 필터 팝업Div
        *  @FileName 	: GridFilter.xfdl
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
        this.fvColumn;
        this.fvCell;
        this.fvDs;
        this.fnInit = function()
        {
            //소트관련 그리드와 동기화
            this.fvGrid = this.parent.grid;
        	this.fvCell = this.parent.cellindex;
        	this.fvDs = this.fvGrid.getBindDataset();
        	this.fvColumn = this._gfnGridGetBindColumnNameByIndex(this.fvGrid,this.fvCell);

        	if(this.fvGrid.getCellProperty("head",this.fvCell,"expandshow") == "show")
        	{
        		var sExpandImg = this.fvGrid.getCellProperty("head",this.fvCell,"expandimage");

        		if(sExpandImg.indexOf("Up") > -1)
        		{
        			this.imvSortUp.set_image("theme://images/grd_sortUp.png");
        			this.btnSortUp.set_enable(false);
        		}
        		else
        		{
        			this.imvSortUp.set_image("theme://images/grd_sortUp_D.png");
        			this.btnSortUp.set_enable(true);
        		}

        		if(sExpandImg.indexOf("Down") > -1)
        		{
        			this.imvDown.set_image("theme://images/grd_sortDown.png");
        			this.btnSortDown.set_enable(false);
        		}
        		else
        		{
        			this.imvDown.set_image("theme://images/grd_sortDown_D.png");
        			this.btnSortDown.set_enable(true);
        		}
        	}
        	else
        	{
        		this.imvSortUp.set_image("theme://images/grd_sortUp_D.png");
        		this.btnSortUp.set_enable(true);
        		this.imvDown.set_image("theme://images/grd_sortDown_D.png");
        		this.btnSortDown.set_enable(true);
        	}


        	//셀이 변경될때 필터할 항목 새로 가져오기
        	if(this.gfnIsNull(this.fvCurCell) || this.fvCurIdx != this.fvCell)
        	{
        		this.dsColInfo.clearData();
        		var nRow;
        		var sValue;
        		if(!this.gfnIsNull(this.fvColumn))
        		{
        			for(var i=0; i<this.fvDs.getRowCount(); i++)
        			{
        				sValue = this.fvDs.getColumn(i,this.fvColumn);
        				if(this.gfnIsNull(this.dsColInfo.lookup("data",sValue,"_chk")))
        				{
        					nRow = this.dsColInfo.addRow();
        					this.dsColInfo.setColumn(nRow,"_chk","0");
        					this.dsColInfo.setColumn(nRow,"data",sValue);
        				}
        			}
        		}
        		this.fvCurCell = this.fvCell;
        	}

        	//해당
        	if(!this.gfnIsNull(this.fvDs.filterInfo))
        	{
        		var aFilterData = this.fvDs.filterInfo[this.fvColumn];

        		if(!this.gfnIsNull(aFilterData))
        		{
        			for(var i=0; i<this.dsColInfo.rowcount; i++)
        			{
        				var sVal = this.dsColInfo.getColumn(i,"data");

        				if(aFilterData.indexOf(sVal) > -1) this.dsColInfo.setColumn(i,"_chk","1");
        			}
        		}
        	}

        	this.dsColInfo.set_rowposition(0);

        	var nColCnt = this.fvGrid.getFormatColCount();
        	var nHeadCellCnt = this.fvGrid.getCellCount("head");
        	var formatSizeInfo = this.fvGrid.formatDefaultColSize;

        	if(nColCnt != nHeadCellCnt) this.btnColHide.set_enable(false);

        	this.imvColHide.set_image("theme://images/grid_colHide_D.png");
        	if(!this.gfnIsNull(formatSizeInfo))
        	{
        		for(var i=0; i<formatSizeInfo.length; i++)
        		{
        			if(formatSizeInfo[i].show == 0)
        			{
        			    this.imvColHide.set_image("theme://images/grid_colHide.png");
        				break;
        			}
        		}
        	}


        }

        this.fnFilter = function()
        {
            var oFilterInfo = this.fvDs.filterInfo;

        	var sFilterStr = "";
        	var aFilter;
        	for(var p in oFilterInfo)
        	{
        		aFilter = oFilterInfo[p];
        		if(aFilter.length > 0)
        		{
        		    sFilterStr += (this.gfnIsNull(sFilterStr)) ? "( " : " && ( ";
        			for(var k=0; k<aFilter.length; k++)
        			{
        				sFilterStr += (k == 0) ? p+" == '"+aFilter[k]+"'" : "|| "+p+" == '"+aFilter[k]+"'";
        			}

        			sFilterStr += ") ";
        		}
        	}

        	trace("sFilterStr ==>"+sFilterStr);
        	this.fvDs.filter("");
        	this.fvDs.filter(sFilterStr);
        }

        this.btnSort_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.fvGrid.sortInfos)) this.fvGrid.sortInfos = {};

        	// 정렬대상컬럼 (순서중요)
        	if (this.gfnIsNull(this.fvGrid.sortItems)) this.fvGrid.sortItems = [];

        	sortInfos = this.fvGrid.sortInfos;
        	sortItems = this.fvGrid.sortItems;
        	sortInfo = sortInfos[this.fvColumn];

        	if ( this.gfnIsNull(sortInfo) )
        	{
        		var headText = this.fvGrid.getCellText(-1, this.fvCell);
        		var refCell = this._gfnGridGetGridCellObject(this.fvGrid, "head", this.fvCell);
        		sortInfo = sortInfos[this.fvColumn] = { status: 0, text: headText, refCell: refCell};
        	}

        	for (var p in sortInfos)
        	{
        		if ( sortInfos.hasOwnProperty(p) )
        		{
        			sortInfo = sortInfos[p];
        			if ( p == this.fvColumn )
        			{
        				status = (obj.name == "btnSortUp") ? 1 : 2;
        				sortInfo.status = parseInt(status);
        			}
        			else
        			{
        				sortInfo.status = 0;
        			}
        			if ( sortInfo.status == 0 )
        			{
        				for (var j=0, len2=sortItems.length; j<len2; j++)
        				{
        					if ( sortItems[j] !== this.fvColumn )
        					{
        						sortItems.splice(j, 1);
        						break;
        					}
        				}
        			}
        		}
        	}

        	var hasItem = false;
        	for (var i=0, len=sortItems.length; i<len; i++)
        	{
        		if ( sortItems[i] == this.fvColumn )
        		{
        			hasItem = true;
        			break;
        		}
        	}

        	if (!hasItem) sortItems.push(this.fvColumn);

        	this._gfnGridExecuteSort(this.fvGrid);

        	if(this.fvGrid.getCellProperty("head",this.fvCell,"expandshow") == "show")
        	{
        		var sExpandImg = this.fvGrid.getCellProperty("head",this.fvCell,"expandimage");

        		if(sExpandImg.indexOf("Up") > -1)
        		{
        			this.imvSortUp.set_image("theme://images/grd_sortUp.png");
        			this.btnSortUp.set_enable(false);
        		}
        		else
        		{
        			this.imvSortUp.set_image("theme://images/grd_sortUp_D.png");
        			this.btnSortUp.set_enable(true);
        		}

        		if(sExpandImg.indexOf("Down") > -1)
        		{
        			this.imvDown.set_image("theme://images/grd_sortDown.png");
        			this.btnSortDown.set_enable(false);
        		}
        		else
        		{
        			this.imvDown.set_image("theme://images/grd_sortDown_D.png");
        			this.btnSortDown.set_enable(true);
        		}
        	}

        	this.parent.closePopup();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.edtFilter.value))
        	{
        		this.dsColInfo.filter("");
        		return;
        	}

        	this.dsColInfo.filter("data.toString().indexOf('"+this.edtFilter.value+"') > -1");
        };

        this.pdvCal_btnClose_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        this.pdvCal_btnSel_onclick = function(obj,e)
        {

        	oFilterInfo = this.fvDs.filterInfo;
        	if(this.gfnIsNull(oFilterInfo)) oFilterInfo = {};

        	var aFilter = [];


        	for(var i=0; i<this.dsColInfo.rowcount; i++)
        	{
        		if(this.dsColInfo.getColumn(i,"_chk") == "1")
        		{
        			aFilter[aFilter.length] = this.dsColInfo.getColumn(i,"data");
        		}
        	}

        	oFilterInfo[this.fvColumn] = aFilter;

        	this.fvDs.filterInfo = oFilterInfo;

        	this.fnFilter();
        	this._gfnGridExecuteSort(this.fvGrid);
        	this.parent.closePopup();
        };

        this.btnColHide_onclick = function(obj,e)
        {
        	var oForm = this.parent.parent;

        	var oGridColHide = oForm.pdvGridColHide;

        	if(this.gfnIsNull(oGridColHide))
        	{
        		oGridColHide = new PopupDiv("pdvGridColHide", 0, 0, 179, 273, null, null);
        		oForm.addChild("pdvGridColHide", oGridColHide);
        		oGridColHide.show();
        		oGridColHide.set_async(false);
        		oGridColHide.set_url("Comm::GridColHide.xfdl");
        	}

        	oGridColHide.grid = this.fvGrid;
        	oGridColHide.cellindex = this.fvCell;


        	var oRect = this.fvGrid.getCellRect(this.parent.rowindex,this.fvCell);

        	oGridColHide.form.fnInit();
        	oGridColHide.trackPopupByComponent(this.fvGrid, oRect.left, oRect.bottom);
        	this.parent.closePopup();

        };

        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "control") return;

        	var sChk = this.dsColInfo.getColumn(e.row,"_chk");

        	if(sChk == "1")
        	{
        		this.dsColInfo.setColumn(e.row,"_chk","0");
        	}
        	else
        	{
        		this.dsColInfo.setColumn(e.row,"_chk","1");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.btnSortUp.addEventHandler("onclick",this.btnSort_onclick,this);
            this.btnSortDown.addEventHandler("onclick",this.btnSort_onclick,this);
            this.btnColHide.addEventHandler("onclick",this.btnColHide_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSel.addEventHandler("onclick",this.pdvCal_btnSel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.pdvCal_btnClose_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
        };
        this.loadIncludeScript("GridFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
