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
            obj = new Dataset("dsSort", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">test1</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"editControl\">test</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"editControl\">test</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 기본기능설정 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","41",null,"85","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","32",null,"16","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>기본설정기능 :</b> 정렬(sort),필터(filter),컬럼숨기기/보이기(colhide) 기능을 제공하며 해당 기능을 사용하지 않을 기능 앞에 느낌표(!)를 붙여 명시한다.");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","18","9","1306","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("그리드 기본기능 자동설정");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","168","12",null,"24","410",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("기준은 아래와 같으며 반드시 onload이벤트 내에 <fc v=\'red\'>this.gfnFormOnLoad(obj)</fc> 함수가 적용 되어있어야 한다.");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","108","52",null,"24","470",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("예) griduserproperty : !sort");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd04","19","140","661","315",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSort");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"124\"/><Column size=\"137\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" expandsize=\"20\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd08","20","478","896","442",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsFilter");
            obj.set_scrollpixel("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" text=\"bind:button\"/><Cell col=\"2\" text=\"bind:calendar\"/><Cell col=\"3\" text=\"bind:check\"/><Cell col=\"4\" text=\"bind:combo\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/></Band></Format></Formats>");
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
        this.registerScript("SampleGridFilterSort.xfdl", function() {
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
        };
        this.loadIncludeScript("SampleGridFilterSort.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
