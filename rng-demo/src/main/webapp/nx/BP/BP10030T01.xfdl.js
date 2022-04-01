(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO00050T01");
            this.set_titletext("잔존율");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,557);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/><Column id=\"Column36\" type=\"STRING\" size=\"256\"/><Column id=\"Column37\" type=\"STRING\" size=\"256\"/><Column id=\"Column38\" type=\"STRING\" size=\"256\"/><Column id=\"Column39\" type=\"STRING\" size=\"256\"/><Column id=\"Column40\" type=\"STRING\" size=\"256\"/><Column id=\"Column41\" type=\"STRING\" size=\"256\"/><Column id=\"Column42\" type=\"STRING\" size=\"256\"/><Column id=\"Column43\" type=\"STRING\" size=\"256\"/><Column id=\"Column44\" type=\"STRING\" size=\"256\"/><Column id=\"Column45\" type=\"STRING\" size=\"256\"/><Column id=\"Column46\" type=\"STRING\" size=\"256\"/><Column id=\"Column47\" type=\"STRING\" size=\"256\"/><Column id=\"Column48\" type=\"STRING\" size=\"256\"/><Column id=\"Column49\" type=\"STRING\" size=\"256\"/><Column id=\"Column50\" type=\"STRING\" size=\"256\"/><Column id=\"Column51\" type=\"STRING\" size=\"256\"/><Column id=\"Column52\" type=\"STRING\" size=\"256\"/><Column id=\"Column53\" type=\"STRING\" size=\"256\"/><Column id=\"Column54\" type=\"STRING\" size=\"256\"/><Column id=\"Column55\" type=\"STRING\" size=\"256\"/><Column id=\"Column56\" type=\"STRING\" size=\"256\"/><Column id=\"Column57\" type=\"STRING\" size=\"256\"/><Column id=\"Column58\" type=\"STRING\" size=\"256\"/><Column id=\"Column59\" type=\"STRING\" size=\"256\"/><Column id=\"Column60\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"영업부문\"/><Cell col=\"2\" text=\"채널Lv1\"/><Cell col=\"3\" text=\"채널Lv2\"/><Cell col=\"4\" text=\"고객Lv1\"/><Cell col=\"5\" text=\"고객Lv2\"/><Cell col=\"6\" text=\"상품Lv1\"/><Cell col=\"7\" text=\"상품Lv2\"/><Cell col=\"8\" text=\"상품Lv3\"/><Cell col=\"9\" text=\"상품Lv4\"/><Cell col=\"10\" text=\"지표\" cssclass=\"cell_fix\"/><Cell col=\"11\" text=\"0차월\"/><Cell col=\"12\" text=\"1차월\"/><Cell col=\"13\" text=\"2차월\"/><Cell col=\"14\" text=\"3차월\"/><Cell col=\"15\" text=\"4차월\"/><Cell col=\"16\" text=\"5차월\"/><Cell col=\"17\" text=\"6차월\"/><Cell col=\"18\" text=\"7차월\"/><Cell col=\"19\" text=\"8차월\"/><Cell col=\"20\" text=\"9차월\"/><Cell col=\"21\" text=\"10차월\"/><Cell col=\"22\" text=\"11차월\"/><Cell col=\"23\" text=\"12차월\"/><Cell col=\"24\" text=\"13차월\"/><Cell col=\"25\" text=\"14차월\"/><Cell col=\"26\" text=\"15차월\"/><Cell col=\"27\" text=\"16차월\"/><Cell col=\"28\" text=\"17차월\"/><Cell col=\"29\" text=\"18차월\"/><Cell col=\"30\" text=\"19차월\"/><Cell col=\"31\" text=\"20차월\"/><Cell col=\"32\" text=\"21차월\"/><Cell col=\"33\" text=\"22차월\"/><Cell col=\"34\" text=\"23차월\"/><Cell col=\"35\" text=\"24차월\"/><Cell col=\"36\" text=\"25차월\"/><Cell col=\"37\" text=\"26차월\"/><Cell col=\"38\" text=\"27차월\"/><Cell col=\"39\" text=\"28차월\"/><Cell col=\"40\" text=\"29차월\"/><Cell col=\"41\" text=\"30차월\"/><Cell col=\"42\" text=\"31차월\"/><Cell col=\"43\" text=\"32차월\"/><Cell col=\"44\" text=\"33차월\"/><Cell col=\"45\" text=\"34차월\"/><Cell col=\"46\" text=\"35차월\"/><Cell col=\"47\" text=\"36차월\"/><Cell col=\"48\" text=\"37차월\"/><Cell col=\"49\" text=\"38차월\"/><Cell col=\"50\" text=\"39차월\"/><Cell col=\"51\" text=\"40차월\"/><Cell col=\"52\" text=\"41차월\"/><Cell col=\"53\" text=\"42차월\"/><Cell col=\"54\" text=\"43차월\"/><Cell col=\"55\" text=\"44차월\"/><Cell col=\"56\" text=\"45차월\"/><Cell col=\"57\" text=\"46차월\"/><Cell col=\"58\" text=\"47차월\"/><Cell col=\"59\" text=\"48차월\"/><Cell col=\"60\" text=\"49차월\"/><Cell col=\"61\" text=\"50차월\"/><Cell col=\"62\" text=\"51차월\"/><Cell col=\"63\" text=\"52차월\"/><Cell col=\"64\" text=\"53차월\"/><Cell col=\"65\" text=\"54차월\"/><Cell col=\"66\" text=\"55차월\"/><Cell col=\"67\" text=\"56차월\"/><Cell col=\"68\" text=\"57차월\"/><Cell col=\"69\" text=\"58차월\"/><Cell col=\"70\" text=\"59차월\"/><Cell col=\"71\" text=\"60차월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"bind:Column0\"/><Cell col=\"12\" text=\"bind:Column1\"/><Cell col=\"13\" text=\"bind:Column2\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column4\"/><Cell col=\"16\" text=\"bind:Column5\"/><Cell col=\"17\" text=\"bind:Column6\"/><Cell col=\"18\" text=\"bind:Column7\"/><Cell col=\"19\" text=\"bind:Column8\"/><Cell col=\"20\" text=\"bind:Column9\"/><Cell col=\"21\" text=\"bind:Column10\"/><Cell col=\"22\" text=\"bind:Column11\"/><Cell col=\"23\" text=\"bind:Column12\"/><Cell col=\"24\" text=\"bind:Column13\"/><Cell col=\"25\" text=\"bind:Column14\"/><Cell col=\"26\" text=\"bind:Column15\"/><Cell col=\"27\" text=\"bind:Column16\"/><Cell col=\"28\" text=\"bind:Column17\"/><Cell col=\"29\" text=\"bind:Column18\"/><Cell col=\"30\" text=\"bind:Column19\"/><Cell col=\"31\" text=\"bind:Column20\"/><Cell col=\"32\" text=\"bind:Column21\"/><Cell col=\"33\" text=\"bind:Column22\"/><Cell col=\"34\" text=\"bind:Column23\"/><Cell col=\"35\" text=\"bind:Column24\"/><Cell col=\"36\" text=\"bind:Column25\"/><Cell col=\"37\" text=\"bind:Column26\"/><Cell col=\"38\" text=\"bind:Column27\"/><Cell col=\"39\" text=\"bind:Column28\"/><Cell col=\"40\" text=\"bind:Column29\"/><Cell col=\"41\" text=\"bind:Column30\"/><Cell col=\"42\" text=\"bind:Column31\"/><Cell col=\"43\" text=\"bind:Column32\"/><Cell col=\"44\" text=\"bind:Column33\"/><Cell col=\"45\" text=\"bind:Column34\"/><Cell col=\"46\" text=\"bind:Column35\"/><Cell col=\"47\" text=\"bind:Column36\"/><Cell col=\"48\" text=\"bind:Column37\"/><Cell col=\"49\" text=\"bind:Column38\"/><Cell col=\"50\" text=\"bind:Column39\"/><Cell col=\"51\" text=\"bind:Column40\"/><Cell col=\"52\" text=\"bind:Column41\"/><Cell col=\"53\" text=\"bind:Column42\"/><Cell col=\"54\" text=\"bind:Column43\"/><Cell col=\"55\" text=\"bind:Column44\"/><Cell col=\"56\" text=\"bind:Column45\"/><Cell col=\"57\" text=\"bind:Column46\"/><Cell col=\"58\" text=\"bind:Column47\"/><Cell col=\"59\" text=\"bind:Column48\"/><Cell col=\"60\" text=\"bind:Column49\"/><Cell col=\"61\" text=\"bind:Column50\"/><Cell col=\"62\" text=\"bind:Column51\"/><Cell col=\"63\" text=\"bind:Column52\"/><Cell col=\"64\" text=\"bind:Column53\"/><Cell col=\"65\" text=\"bind:Column54\"/><Cell col=\"66\" text=\"bind:Column55\"/><Cell col=\"67\" text=\"bind:Column56\"/><Cell col=\"68\" text=\"bind:Column57\"/><Cell col=\"69\" text=\"bind:Column58\"/><Cell col=\"70\" text=\"bind:Column59\"/><Cell col=\"71\" text=\"bind:Column60\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","48",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","38","24","240",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("지표");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","135","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_cmb00_00_innerdataset = new nexacro.NormalDataset("Div01_form_cmb00_00_innerdataset", obj);
            Div01_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(Div01_form_cmb00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00",null,"20","43","24","291",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00",null,"20","20","24","334",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01",null,"20","43","24","353",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00_00",null,"20","88","24","400",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("산출대상년도");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1386","17","10","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1197","17","20","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,557,this,function(p){});
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
        this.loadIncludeScript("BP10030T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
