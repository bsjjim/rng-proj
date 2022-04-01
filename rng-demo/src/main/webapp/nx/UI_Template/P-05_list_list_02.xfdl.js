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
            this.set_titletext("그리드+그리드(상하배치)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"대상구분\" type=\"STRING\" size=\"256\"/><Column id=\"정비\" type=\"STRING\" size=\"256\"/><Column id=\"외주\" type=\"STRING\" size=\"256\"/><Column id=\"엔진오일교체대상\" type=\"STRING\" size=\"256\"/><Column id=\"지연일수\" type=\"STRING\" size=\"256\"/><Column id=\"차량번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">10허4089</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">N</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">N</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">77허6329</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">28허3310</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">08허5193</Col></Row><Row><Col id=\"외주\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">47허1675</Col><Col id=\"No\">7</Col><Col id=\"대상구분\">고급형</Col><Col id=\"정비\">Y</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">10허4089</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">77허6329</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">28허3310</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">08허5193</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">47허1675</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">Y</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">10허4089</Col></Row><Row><Col id=\"No\">16</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row><Row><Col id=\"No\">17</Col><Col id=\"대상구분\">고급형</Col><Col id=\"외주\">N</Col><Col id=\"정비\">N</Col><Col id=\"엔진오일교체대상\">Y</Col><Col id=\"지연일수\">464</Col><Col id=\"고객명\">홍길동</Col><Col id=\"차량번호\">02허3684</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"계획일\" type=\"STRING\" size=\"256\"/><Column id=\"지연일수\" type=\"STRING\" size=\"256\"/><Column id=\"MOT\" type=\"STRING\" size=\"256\"/><Column id=\"정비차량번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객차량번호\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"계획일\">2021-12-01</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"계획일\">2021-12-02</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"계획일\">2021-12-03</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"계획일\">2021-12-04</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"계획일\">2021-12-05</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"계획일\">2021-12-06</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">7</Col><Col id=\"계획일\">2021-12-07</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"계획일\">2021-12-01</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"계획일\">2021-12-02</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"계획일\">2021-12-03</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"계획일\">2021-12-04</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"계획일\">2021-12-05</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"계획일\">2021-12-06</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"계획일\">2021-12-07</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"계획일\">2021-12-01</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">16</Col><Col id=\"계획일\">2021-12-02</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row><Row><Col id=\"No\">17</Col><Col id=\"계획일\">2021-12-03</Col><Col id=\"지연일수\">464</Col><Col id=\"MOT\">순회정비1MOT</Col><Col id=\"정비차량번호\">91거7741</Col><Col id=\"고객차량번호\">10허4089</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0",null,null,"319","40","45",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("서브그리드");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"20","69","24","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01",null,"20","15","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00",null,"3","5","42","11",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","63",null,null,"40","364",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("마스터그리드");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","109","20","356","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("3");
            obj.set_text("※ 업무 진행 시 반드시 숙지해야 할 안내문은 타이틀 우측에 배치.");
            obj.set_cssclass("sta_txt_desc");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1115","13","15","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1059","13","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","427",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","370",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","314",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","266",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_02_00",null,"20","44","24","218",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_fileUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("파일업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_01_00_00",null,"20","44","24","170",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_fileDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("파일다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","100","24","66",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("커스텀팝업");
            obj.set_cssclass("btn_Block_popup");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","62","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("커스텀");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1380","44","70","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1052","38","70","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","440",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("발행년도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","198","18","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","158","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","634","18","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","594","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","490","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("오토리스 임직원");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","475","1","15","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","700","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_editformat("yyyy-MM-dd ddd");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","86","18","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01","141","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","266","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","333","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","360","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,null,"271","80","82","80",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("그리드 리사이징 \r\n가로: 100% 리사이징처리\r\n세로: 데이터가 많은 그리드 1개만 리사이징");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00",null,null,"271","55","82","167",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("컬럼의 갯수가 많을 경우 상하 배치");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
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
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("P-05_list_list_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
