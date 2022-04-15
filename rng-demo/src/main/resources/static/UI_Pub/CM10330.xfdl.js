(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("마이메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"전체\" type=\"STRING\" size=\"256\"/><Column id=\"메뉴ID\" type=\"STRING\" size=\"256\"/><Column id=\"메뉴명\" type=\"STRING\" size=\"256\"/><Column id=\"분류\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"전체\">0</Col><Col id=\"메뉴ID\">SB20110</Col><Col id=\"메뉴명\">환불관리</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 기타수납</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"전체\">0</Col><Col id=\"메뉴ID\">SB20120</Col><Col id=\"메뉴명\">감면등록</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 기타수납</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"전체\">1</Col><Col id=\"메뉴ID\">SB20140</Col><Col id=\"메뉴명\">KICC정산</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"전체\">1</Col><Col id=\"메뉴ID\">SB20150</Col><Col id=\"메뉴명\">가수금정산</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"전체\">1</Col><Col id=\"메뉴ID\">SB20160</Col><Col id=\"메뉴명\">통합 정산</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"전체\">0</Col><Col id=\"메뉴ID\">SB20170</Col><Col id=\"메뉴명\">보증/선납/선수 수기정산</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col></Row><Row><Col id=\"메뉴명\">보증 수기정산</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"No\">7</Col><Col id=\"전체\">0</Col><Col id=\"메뉴ID\">SB20170B</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"메뉴ID\">SB20180</Col><Col id=\"메뉴명\">보증금현황</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"메뉴ID\">SB20190</Col><Col id=\"메뉴명\">선납금현황</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"메뉴ID\">SB20200</Col><Col id=\"메뉴명\">선수금현황</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">1</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"메뉴ID\">SB20210</Col><Col id=\"메뉴명\">CMS/카드자동이체 결과조회</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">1</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"메뉴ID\">SB20220</Col><Col id=\"메뉴명\">감면신청현환조회</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"메뉴ID\">SB20240</Col><Col id=\"메뉴명\">수납실적 마감관리</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"메뉴ID\">SB20250</Col><Col id=\"메뉴명\">수납실적 현황</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"메뉴ID\">SB20260</Col><Col id=\"메뉴명\">대외계 수납처리 사번 매칭</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">16</Col><Col id=\"메뉴ID\">SB20270</Col><Col id=\"메뉴명\">보증/선납/선수 수기정산(대량)</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row><Row><Col id=\"No\">17</Col><Col id=\"메뉴ID\">SB20290</Col><Col id=\"메뉴명\">미처리예금 조회</Col><Col id=\"분류\">채권 &gt; 수납 &gt; 정산</Col><Col id=\"전체\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"전체\" type=\"STRING\" size=\"256\"/><Column id=\"메뉴ID\" type=\"STRING\" size=\"256\"/><Column id=\"메뉴명\" type=\"STRING\" size=\"256\"/><Column id=\"분류\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63","47.05%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"301\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"전체\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"메뉴ID \"/><Cell col=\"3\" text=\"메뉴명\"/><Cell col=\"4\" text=\"분류\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:전체\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:메뉴ID\"/><Cell col=\"3\" text=\"bind:메뉴명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:분류\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("메뉴목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","1",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"18","15","24","55",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"18","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"6","5","47","66",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01",null,"1","10","47","47",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01",null,"18","50","24","71",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","Div01:15","35.22%","20","225",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","62","20","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","Div01:51","63",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("마이메뉴");
            obj.set_cssclass("sta_WF_title1");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","130","0","100","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"전체\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"폴더명\"/><Cell col=\"3\" text=\"정렬순서\"/><Cell col=\"4\" text=\"자동오픈여부\"/></Band><Band id=\"body\"><Cell text=\"bind:전체\"/><Cell col=\"1\" text=\"bind:메뉴ID\"/><Cell col=\"2\" text=\"bind:메뉴명\"/><Cell col=\"3\" text=\"bind:분류\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","-720",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","54",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("폴더추가");
            obj.set_cssclass("btn_Block");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Block");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","53","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","265","18","48","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","205","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","75","19","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","318","19","199","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01",null,"2","10","60","1411",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_02",null,"7","10","60","1168",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","718","260","15","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","753","258","15","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","718","118","50","70",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CM10330.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
