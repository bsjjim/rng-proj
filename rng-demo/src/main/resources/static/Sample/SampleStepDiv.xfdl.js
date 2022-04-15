(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bbbbbb");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","10","54",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_url("Sample::SampleStep.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","9","19","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1번스텝");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","82","19","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2번스텝");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","156","19","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("3번스텝");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","830","249","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("#,##9");
            obj.set_value("0");
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
            this._addPreloadList("fdl","Sample::SampleStep.xfdl");
        };
        
        // User Script
        this.registerScript("SampleStepDiv.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.div00.form.setStepIndex(0);
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.div00.form.setStepIndex(1);
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.div00.form.setStepIndex(2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("SampleStepDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
