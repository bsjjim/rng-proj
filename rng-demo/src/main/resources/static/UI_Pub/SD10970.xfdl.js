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
            this.set_titletext("임차 발주 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"대상구분\" type=\"STRING\" size=\"256\"/><Column id=\"정비\" type=\"STRING\" size=\"256\"/><Column id=\"외주\" type=\"STRING\" size=\"256\"/><Column id=\"엔진오일교체대상\" type=\"STRING\" size=\"256\"/><Column id=\"지연일수\" type=\"STRING\" size=\"256\"/><Column id=\"차량번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">10허4089</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">N</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">N</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">77허6329</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">28허3310</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">08허5193</Col></Row><Row><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">47허1675</Col><Col id=\"No\">7</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">10허4089</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">77허6329</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">28허3310</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">08허5193</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">47허1675</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">10허4089</Col></Row><Row><Col id=\"No\">16</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">17</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","165","48.04%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("물건내역");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"물건명\"/><Cell col=\"5\" text=\"설비번호\"/><Cell col=\"6\" text=\"모델명\"/><Cell col=\"7\" text=\"임차비용\"/><Cell col=\"8\" text=\"부가세\"/><Cell col=\"9\" text=\"차기교정일\"/><Cell col=\"10\" text=\"설치고객\"/><Cell col=\"11\" text=\"담당자\"/><Cell col=\"12\" text=\"설치장소\"/><Cell col=\"13\" text=\"설치희망일자\"/><Cell col=\"14\" text=\"연락처1\"/><Cell col=\"15\" text=\"연락처2\"/><Cell col=\"16\" text=\"비고\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","398",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","320",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("상품복사");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1049","44","70","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","240",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","160",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","76","24","80",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","76","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:20","165",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","125","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("비용 처리 스케줄");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"설비\"/><Cell col=\"2\" text=\"청구회차\"/><Cell col=\"3\" text=\"청구일자\"/><Cell col=\"4\" text=\"원금\"/><Cell col=\"5\" text=\"이자\"/><Cell col=\"6\" text=\"부가세\"/><Cell col=\"7\" text=\"원리금\"/><Cell col=\"8\" text=\"미도래원금\"/><Cell col=\"9\" text=\"전표번호\"/><Cell col=\"10\" text=\"전표구분\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"-2","20","60","-19",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","0","0","50","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","0",null,"50","10",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02",null,null,"64","28","296","10",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("확정");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00",null,null,"88","28","204","10",null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00_00",null,null,"64","28","136","10",null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00_00_00",null,null,"64","28","68","10",null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00_00_01",null,null,"64","28","0","10",null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00_00_01_00",null,null,"88","28","365","10",null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("카피등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","0",null,"165","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","100","18","95","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("1234067890");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","199","18","24","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","366","18","65","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("등록자");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","433","18","65","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","527","18","115","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","682","18","70","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("등록부서");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","749","18","40","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","500","18","24","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","818","18","155","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","1013","18","90","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","1103","18","90","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("15");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1195","18","24","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1222","18","115","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("17");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","20","52","85","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_text("업체 담당자");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","100","52","65","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","159","52","24","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","186","52","140","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","52","65","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_text("확정일자");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","433","52","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_value("20221001");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","682","52","70","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_text("보관위치");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","749","52","180","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_00_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("div00_00_form_Combo00_00_01_innerdataset", obj);
            div00_00_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">측정기</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">구매설비(물품자산)입고</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_Combo00_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","1013","52","90","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","1103","52","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_format("#,###");
            obj.set_cssclass("input_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1223","52","40","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("28");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","86","65","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("29");
            obj.set_text("만료일자");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00","433","86","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("30");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","682","86","70","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("31");
            obj.set_text("납입방식");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","749","86","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_00_form_Combo00_00_01_00_innerdataset = new nexacro.NormalDataset("div00_00_form_Combo00_00_01_00_innerdataset", obj);
            div00_00_form_Combo00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">선불</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">후불</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_Combo00_00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","1013","86","90","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("33");
            obj.set_text("업체주문번호");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","1103","86","85","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("34");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","20","120","85","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("35");
            obj.set_text("관리지점");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","100","120","50","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("36");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","152","120","24","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","179","120","147","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("38");
            obj.set_text("P12345");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","682","120","70","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("39");
            obj.set_text("일수계산");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00","749","120","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_00_form_Combo00_00_01_00_00_innerdataset = new nexacro.NormalDataset("div00_00_form_Combo00_00_01_00_00_innerdataset", obj);
            div00_00_form_Combo00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">일할</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">월할</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_Combo00_00_01_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","20","86","85","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("41");
            obj.set_text("개시일자");
            obj.set_cssclass("sta_SA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","100","86","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("42");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00","791","18","24","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_Comp_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","326","0","40","132",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("44");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","642","9","40","132",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("45");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","973","5","40","132",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("46");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","236","144","40","18",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("47");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","183","0","40","18",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("48");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","156","42","40","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","141","76","40","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","141","110","40","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","Div00:-10","165","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);
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
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SD10970.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
