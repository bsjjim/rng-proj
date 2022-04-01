(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePaging");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSpare", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">버튼</Col><Col id=\"Column4\">3000</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column2\">선택</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_add.png</Col><Col id=\"Column11\">1231212345</Col><Col id=\"Column7\">theme://images/state_gray.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">수정</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_del.png</Col><Col id=\"Column7\">theme://images/state_yellow.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">저장</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_mod.png</Col><Col id=\"Column7\">theme://images/state_green.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column7\">theme://images/state_orange.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column7\">theme://images/state_blue.png</Col></Row><Row><Col id=\"Column7\">theme://images/state_red.png</Col></Row><Row><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column0\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList2","0","200",null,null,"40","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"201\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\" displaytype=\"normal\"/><Cell col=\"1\" text=\"Calendar\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"Edit\"/><Cell col=\"4\" text=\"MaskEdit(String)\"/><Cell col=\"5\" text=\"MaskEdit(Number)\"/><Cell col=\"6\" text=\"Button\"/><Cell col=\"7\" text=\"Expand\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combotext\" combodataset=\"ds_comb\" combodatacol=\"Column0\" combocodecol=\"Column0\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"normal\"/><Cell col=\"4\" displaytype=\"normal\" maskeditformat=\"###-##-#####\" text=\"bind:Column11\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:Column4\" displaytype=\"none\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"bind:Column5\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"7\" text=\"bind:Column6\" displaytype=\"normal\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"8\" text=\"bind:Column7\" displaytype=\"imagecontrol\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("그리드 페이징 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","41",null,"115","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","32",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div생성후 Url에 <b v=\'true\'>Comm::Paging.xfdl</b> 화면을 연결한다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","18","9","1306","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("페이징 기본 설정");
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
            obj.set_text("<b v=\'true\'>페이징관련 화면 변수 셋팅 :</b> this.fvRecords(목록갯수),this.fvPage(페이지번호),this.fvTotalCount(전체데이터건수),this.fvPageCount(페이징네비게이션 표현건수)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","18","77",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'>페이징생성 :</b> fnPagingSetting 함수및 fnPagingCallback 함수 참조");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,null,"35","40","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_url("Comm::Paging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","98",null,"100","20",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"169","50","24","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","298",null,"100","15",null,"55",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","Comm::Paging.xfdl");
        };
        
        // User Script
        this.registerScript("SamplePaging.xfdl", function() {
        /********************************************************************
        *  그리드 페이징 샘플
        *  @FileName 	: SamplePaging.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/24
        *  @Desction    : 그리드 페이징 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/24     	        양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();

        this.fvRecords=10; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수
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
        this.fnCallback = function(sSvcId,nErrCode,nErrMsg)
        {
           this.dsList.assign(this.dsListSpare)
           this.fnPagingSetting();
        }

        //페이징콜백 페이징화면에서 눌린페이지 넘겨줌
        this.fnPagingCallback = function(nPage, nRecordsOffset)
        {
        	this.fvPage = nPage;

        	//조회함수호출
        	this.fnSearch();
        };
        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	this.fnCallback();
        }
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        //페이징만들기
        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = 125;
        	//create page
        	this.divPage.form.fnCreatePage("fnPagingCallback",
        									this.fvTotalCount,
        									this.fvRecords,
        									this.fvPage,
        									this.fvPageCount);
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("SamplePaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
