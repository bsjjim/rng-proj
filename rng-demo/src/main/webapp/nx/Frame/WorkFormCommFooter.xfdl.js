(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkFormComm");
            this.set_titletext("New Form");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1568,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00_01_02","40","10","102","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("연계팝업");
            obj.set_cssclass("btn_Comm_popup");
            obj.set_iconPosition("left");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_01","146","10","102","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("연계팝업");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_02_00","252","10","92","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            obj.set_iconPosition("left");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_01_00","348","10","92","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","444","10","92","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","541","10","200","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("cmb_Comm_link");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">연계화면 바로가기</Col></Row><Row><Col id=\"datacolumn\">연계화면1</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">연계화면2</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">연계화면3</Col><Col id=\"codecolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("연계화면 바로가기");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","88","28","434",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","366",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("복사");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","298",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01",null,"10","64","28","230",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02",null,"10","103","28","123",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("결재요청");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00",null,"10","79","28","40",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1568,48,this,function(p){});
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
        this.loadIncludeScript("WorkFormCommFooter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
