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
            this.set_titletext("그리드+그리드(좌우배치)");
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
            obj = new Div("Div00","0","97","48.04%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("순회대상차량");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"대상구분\"/><Cell col=\"2\" text=\"정비\"/><Cell col=\"3\" text=\"외주\"/><Cell col=\"4\" text=\"엔진오일교체대상\"/><Cell col=\"5\" text=\"지연일수\"/><Cell col=\"6\" text=\"차량번호\"/><Cell col=\"7\" text=\"고객명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:대상구분\"/><Cell col=\"2\" text=\"bind:정비\"/><Cell col=\"3\" text=\"bind:외주\"/><Cell col=\"4\" text=\"bind:엔진오일교체대상\"/><Cell col=\"5\" text=\"bind:지연일수\"/><Cell col=\"6\" text=\"bind:차량번호\"/><Cell col=\"7\" text=\"bind:고객명\" cssclass=\"cell_link\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","155","0","60","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","347",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("/4199");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","388","15","4","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","332",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","400","14","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","275",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","328","39","100","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","456","14","15","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","479","44","100","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","88","24","79",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"20","50","24","388",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_text("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","219",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","171",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:20","97",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("순회정비계획");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"143\"/><Column size=\"100\"/><Column size=\"162\"/><Column size=\"128\"/><Column size=\"119\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"계획일\"/><Cell col=\"2\" text=\"지연일수\"/><Cell col=\"3\" text=\"MOT\"/><Cell col=\"4\" text=\"정비차량번호\"/><Cell col=\"5\" text=\"고객차량번호\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:계획일\"/><Cell col=\"2\" text=\"bind:지연일수\"/><Cell col=\"3\" text=\"bind:MOT\"/><Cell col=\"4\" text=\"bind:정비차량번호\"/><Cell col=\"5\" text=\"bind:고객차량번호\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","325",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","349",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","390","15","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","330",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","402","14","10","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","273",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","368","39","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","457","14","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","480","44","100","6",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","88","24","78",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","218",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","170",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","734","220","20","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("순회예정기간");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","322","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"83","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","362","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("순회차량번호");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","455","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("input_select");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","537","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","738","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","820","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","645","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("고객차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","605","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","888","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","928","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("대상");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","995","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","362","52","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("MOT");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","455","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","738","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","645","52","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("MOT");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","928","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("지연일수");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","995","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","102","11","10","35",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","445","14","10","35",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","728","14","10","35",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","985","45","10","35",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","112","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","151","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("순회주소변경등록");
            obj.set_cssclass("btn_Comm_func_pop");
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

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0",null,"140","28",null,"10",null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("순회정비이관관리");
            obj.set_cssclass("btn_Comm_link");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","0","0","50","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","0",null,"50","10",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","849",null,"100","48",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("h48");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00",null,null,"440","55","73","-83",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("컬럼의 갯수가 적을 경우 좌우 배치");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,null,"440","80","73","-170",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("그리드 리사이징 \r\n가로: 동일비율 리사이징을 하거나, 데이터가 많은 그리드 1개만 리사이징\r\n세로: 100% 리사이징처리");
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
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("P-05_list_list_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
