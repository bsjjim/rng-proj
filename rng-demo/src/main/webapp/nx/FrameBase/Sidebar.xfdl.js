(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sidebar");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(290,852);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SubMenu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Level\" type=\"STRING\" size=\"256\"/><Column id=\"MenuName\" type=\"STRING\" size=\"256\"/><Column id=\"FormUrl\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Level\">0</Col><Col id=\"MenuName\">컴포넌트</Col><Col id=\"FormUrl\"/></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Stiatc, Information</Col><Col id=\"FormUrl\">UI_Guide::Comp_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">폼요소 - Edit 등</Col><Col id=\"FormUrl\">UI_Guide::Comp_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Button</Col><Col id=\"FormUrl\">UI_Guide::Comp_03.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Grid - 사이즈규정</Col><Col id=\"FormUrl\">UI_Guide::Comp_04_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Grid - 컬럼별 텍스트정렬과 기준너비</Col><Col id=\"FormUrl\">UI_Guide::Comp_04_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Grid - 편집모드,  셀클래스</Col><Col id=\"FormUrl\">UI_Guide::Comp_04_03.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Grid - 셀클래스, 포인트컬러</Col><Col id=\"FormUrl\">UI_Guide::Comp_04_04.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Tab</Col><Col id=\"FormUrl\">UI_Guide::Comp_05.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">ETC - Progress 등</Col><Col id=\"FormUrl\">UI_Guide::Comp_06.xfdl</Col></Row><Row><Col id=\"Level\">0</Col><Col id=\"MenuName\">영역별 레이아웃</Col><Col id=\"FormUrl\"/></Row><Row><Col id=\"MenuName\">조회영역 - 클래스, 유형</Col><Col id=\"FormUrl\">UI_Guide::LayOut_01_01.xfdl</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"MenuName\">조회영역 - 영역 내 간격</Col><Col id=\"FormUrl\">UI_Guide::LayOut_01_02.xfdl</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"MenuName\">테이블 - 클래스, 포인트컬러</Col><Col id=\"FormUrl\">UI_Guide::LayOut_02_01.xfdl</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">테이블 - 입력형/출력형</Col><Col id=\"FormUrl\">UI_Guide::LayOut_02_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">테이블 - 데이터 입력 표준</Col><Col id=\"FormUrl\">UI_Guide::LayOut_02_03.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">스텝</Col><Col id=\"FormUrl\">UI_Guide::LayOut_03_01.xfdl</Col></Row><Row><Col id=\"Level\">0</Col><Col id=\"MenuName\">템플릿</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드</Col><Col id=\"FormUrl\">UI_Template::Temp01_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드(상하배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드(좌우배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_03.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드+상세(상하배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_04.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드+상세(좌우배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_05.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드+상세(좌우7:3)</Col><Col id=\"FormUrl\">UI_Template::Temp01_06.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+그리드+탭(좌우배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_07.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+상세(하프-좌배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_08.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+상세(더블-좌우배치)</Col><Col id=\"FormUrl\">UI_Template::Temp01_09.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">조회+탭</Col><Col id=\"FormUrl\">UI_Template::Temp02_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">탭 내 조회</Col><Col id=\"FormUrl\">UI_Template::Temp02_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">스텝</Col><Col id=\"FormUrl\">UI_Template::Temp03_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Shuttle(좌우배치)</Col><Col id=\"FormUrl\">UI_Template::Temp04_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">Shuttle(상하배치)</Col><Col id=\"FormUrl\">UI_Template::Temp04_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">영역확장/축소 - 조회영역</Col><Col id=\"FormUrl\">UI_Template::Temp05_01.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">영역확장/축소 - 좌우확장</Col><Col id=\"FormUrl\">UI_Template::Temp05_02.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">영역확장/축소 - 상하확장</Col><Col id=\"FormUrl\">UI_Template::Temp05_03.xfdl</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"MenuName\">영역확장/축소 - 영역접기</Col><Col id=\"FormUrl\">UI_Template::Temp05_04.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","70",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_LF_menuBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","1","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("My\r\nMenu");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","61","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("고객");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","0","121","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자산");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","0","181","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("영업");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","0","241","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구매");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","0","301","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("채권");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","0","361","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("서비스");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00","0","421","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("HR");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_01","0","481","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("재무");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00_00","0","541","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("System");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","85","5","200",null,null,"5",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_binddataset("ds_SubMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("false");
            obj.set_mouseovertype("cell");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none fixed");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"216\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MenuName\" cssclass=\"expr:Level==&apos;0&apos;?&quot;cell_LF_Depth1&quot;:Level==&apos;1&apos;?&quot;cell_LF_Depth2&quot;:&apos;&apos;\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Level\" autosizerow=\"limitmin\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00_00_00","0","601","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("UI\r\nGuide");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","290","390","20","73",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_LF_hide");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","440","80","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Menu\r\nNormal");
            obj.set_cssclass("btn_LF_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","440","150","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Menu\r\nSelected");
            obj.set_cssclass("btn_LF_menuS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"2","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("linear-gradient(to bottom,rgba(0,0,0,0.15) 0%,transparent 100%)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","355","390","20","73",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_cssclass("btn_LF_show");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","2",null,"0","0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","70","71","15","65",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","273","221","15","65",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","283","201","5","65",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",290,852,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sidebar.xfdl", function() {

        this.Sidebar_onload = function(obj,e)
        {
        	//this.abc.bringToFront();
        };



        this.div_left_grd_menu_oncellclick = function(obj,e)
        {


        	var sApp = nexacro.getApplication();
        	var objFrame = sApp.mainframe.VFrameSet1.HFrameSet.VFrameSet2.FrameSet.WorkFrame;
        	var srtUrl = this.ds_SubMenu.getColumn(e.row, "FormUrl");
        	var srtTitle = this.ds_SubMenu.getColumn(e.row, "MenuName");
        	console.log("srtTitle", objFrame.form.CommHeader.form.Title)

        	if (srtUrl) objFrame.form.divWork.set_url(srtUrl);
        	if (srtTitle) objFrame.form.CommHeader.form.Title.set_text(srtTitle);
        	objFrame.form.CommHeader.form.resetScroll();

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Sidebar_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.div_left_grd_menu_oncellclick,this);
            this.Button00_01_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_02.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_02_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_01_00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Sidebar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
