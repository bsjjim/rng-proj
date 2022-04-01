(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_07_01");
            this.set_titletext("Tab - 타이틀/버튼영역이 있을경우");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"summ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"summ\">0</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"summ\">150000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"summ\">1000000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","18","120","30",null,null,null,null,null,null,this.Div00.form);
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
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","15","24","307",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","70","24","323",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-2","15","60","236",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","250",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01",null,"3","10","47","298",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"8","5","47","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","160",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","80",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,318,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_05_02.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_05_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
