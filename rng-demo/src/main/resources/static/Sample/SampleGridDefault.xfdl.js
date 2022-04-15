(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGridDefault");
            this.set_titletext("그리드 기본기능 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">버튼</Col><Col id=\"Column4\">3000</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column2\">선택</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_add.png</Col><Col id=\"Column11\">1231212345</Col><Col id=\"No\">1</Col><Col id=\"Column7\">theme://images/state_gray.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">수정</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_del.png</Col><Col id=\"No\">2</Col><Col id=\"Column7\">theme://images/state_yellow.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">저장</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_mod.png</Col><Col id=\"No\">3</Col><Col id=\"Column7\">theme://images/state_green.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"No\">4</Col><Col id=\"Column7\">theme://images/state_orange.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"No\">5</Col><Col id=\"Column7\">theme://images/state_blue.png</Col></Row><Row><Col id=\"Column7\">theme://images/state_red.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 기본기능설정 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","41",null,"115","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","32",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>상태표시 :</b> 그리드 헤더에             표시가 있는 경우에 자동적용");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","18","9","1306","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("그리드 기본기능 자동설정");
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
            obj.set_text("<b v=\'true\'>선택 :</b> 영역의 체크박스 삭제에 정상적으로 적용될려면 컬럼명이 <fc v=\'red\'>\"_chk\"</fc>로 설정되어있어야 한다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","18","77",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'>No :</b> 그리드 헤더의 이름이 <fc v=\'red\'>No</fc>로 설정된 경우에 자동으로 순번이 적용된다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("imv00","169","36","25","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_image("url(\'theme://images/flag.png\')");
            obj.set_border("0px none");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","168","12",null,"24","410",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("기준은 아래와 같으며 반드시 onload이벤트 내에 <fc v=\'red\'>this.gfnFormOnLoad(obj)</fc> 함수가 적용 되어있어야 한다.");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grdList","0","205",null,"275","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"201\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"Calendar\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Edit\"/><Cell col=\"5\" text=\"MaskEdit(String)\"/><Cell col=\"6\" text=\"MaskEdit(Number)\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" text=\"Expand\"/><Cell col=\"9\" text=\"상태\"/><Cell col=\"10\" text=\"Column8\"/><Cell col=\"11\" text=\"Column9\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell text=\"bind:Column10\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_chk\"/><Cell col=\"2\" text=\"bind:Column1\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comb\" combodatacol=\"Column0\" combocodecol=\"Column0\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"5\" edittype=\"mask\" displaytype=\"maskeditcontrol\" maskeditformat=\"###-##-#####\" text=\"bind:Column11\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:Column4\" displaytype=\"maskeditcontrol\" edittype=\"normal\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"bind:Column5\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:Column6\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"9\" text=\"bind:Column7\" displaytype=\"imagecontrol\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"175","76","24","43",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"175","76","24","123",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"175","76","24","203",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2","6","490",null,null,"34","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_grid");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"201\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\" displaytype=\"normal\"/><Cell col=\"1\" text=\"Calendar\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"Edit\"/><Cell col=\"4\" text=\"MaskEdit(String)\"/><Cell col=\"5\" text=\"MaskEdit(Number)\"/><Cell col=\"6\" text=\"Button\"/><Cell col=\"7\" text=\"Expand\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combotext\" combodataset=\"ds_comb\" combodatacol=\"Column0\" combocodecol=\"Column0\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"normal\"/><Cell col=\"4\" displaytype=\"normal\" maskeditformat=\"###-##-#####\" text=\"bind:Column11\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:Column4\" displaytype=\"none\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"bind:Column5\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"7\" text=\"bind:Column6\" displaytype=\"normal\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"8\" text=\"bind:Column7\" displaytype=\"imagecontrol\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/></Band></Format></Formats>");
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
        this.registerScript("SampleGridDefault.xfdl", function() {
        /********************************************************************
        *  그리드 기본기능 설정
        *  @FileName 	: SampleGridDefault.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/20
        *  @Desction    : 그리드 기본기능 설정
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/20     	        작성자                 최초 생성
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

        this.fnClose = function()
        {
        	return this.gfnDsIsUpdated(this.ds_grid);
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

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnAdd_onclick = function(obj,e)
        {
        	this.gfnAddRow(this.ds_grid);
        };

        this.btnDel_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.ds_grid);
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.gfnResetRow(this.ds_grid,this.ds_grid.rowposition);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.addEventHandler("onmousemove",this.SampleGridDefault_onmousemove,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("SampleGridDefault.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
