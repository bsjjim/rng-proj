(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGridSum");
            this.set_titletext("그리드 합계 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">1200</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">1200</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSize", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">가나</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">가나다라</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;&#10;band 속성값이 &quot;body&quot;인 Column 의 너비가 자동조절됩니다.&#10;각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.&#10;band 속성값이 &quot;left&quot;, &quot;right&quot; 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","155","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Suppress");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","187","550","251",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","570","155","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("소계,합계");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","572","187","462","325",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsSample00");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"right\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","593","278","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Auto Size");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","637","912","145",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼2\"/><Cell col=\"2\" text=\"칼럼3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"칼럼1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","0","817","912","265",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("both");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼1\"/><Cell col=\"2\" text=\"칼럼2\"/><Cell col=\"3\" text=\"칼럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","1050","187","434","325",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSample00");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"right\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubRowHidden","1050","161","157","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("소계 ROW 표시안하기");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("그리드 합계 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","41",null,"105","40",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","32",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>Suppress :</b> Row의 값이 같을 경우 하나의 값으로 표현해주는 기능");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","18","9","320","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("그리드 속성 정의");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","61","28","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","61","50","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00","61","72","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","54",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'>소계,합계 :</b> 그리드 의 소계, 합계 샘플");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","18","77",null,"24","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'>Auto Size :</b> 그리드의 Column, Row, 를 AutoSize 설정 샘플");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","613","278","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Col Size Auto");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","793","278","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Row Size Auto");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title3");
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
        this.registerScript("SampleGridSum.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSubRowHidden.addEventHandler("onclick",this.btnSubRowHidden_onclick,this);
        };
        this.loadIncludeScript("SampleGridSum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
