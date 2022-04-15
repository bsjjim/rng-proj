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
            this.set_titletext("Grid  - 포인트컬러, 좌측고정컬럼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"LeftHeader\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"summ\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"summ\">cell_sub_summ</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col><Col id=\"Column6\">cell_fc_green</Col><Col id=\"Column7\">cell_fc_purple</Col><Col id=\"Column9\">cell_bg_4</Col><Col id=\"Column8\">cell_bg_5</Col><Col id=\"Column10\">0</Col><Col id=\"LeftHeader\">헤더1</Col></Row><Row><Col id=\"summ\">1000000</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col><Col id=\"Column6\">cell_fc_green</Col><Col id=\"Column7\">cell_fc_purple</Col><Col id=\"Column9\">cell_bg_4</Col><Col id=\"Column8\">cell_bg_5</Col><Col id=\"Column10\">150000</Col><Col id=\"LeftHeader\">헤더1</Col></Row><Row><Col id=\"LeftHeader\">소계</Col><Col id=\"Column10\">0</Col><Col id=\"summ\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"summ\">0</Col><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col><Col id=\"Column6\">cell_fc_green</Col><Col id=\"Column7\">cell_fc_purple</Col><Col id=\"Column9\">cell_bg_4</Col><Col id=\"Column8\">cell_bg_5</Col><Col id=\"Column10\">1000000</Col><Col id=\"LeftHeader\">헤더2</Col></Row><Row><Col id=\"Column5\">cell_fc_blue</Col><Col id=\"Column4\">cell_fc_orange</Col><Col id=\"Column3\">cell_fc_red</Col><Col id=\"Column2\">cell_bg_1</Col><Col id=\"Column1\">cell_bg_2</Col><Col id=\"Column0\">cell_bg_3</Col><Col id=\"Column6\">cell_fc_green</Col><Col id=\"Column7\">cell_fc_purple</Col><Col id=\"Column9\">cell_bg_4</Col><Col id=\"Column8\">cell_bg_5</Col><Col id=\"summ\">0</Col><Col id=\"LeftHeader\">헤더2</Col><Col id=\"Column10\">0</Col></Row><Row><Col id=\"LeftHeader\">소계</Col><Col id=\"summ\">1000000</Col><Col id=\"Column10\">1000000</Col><Col id=\"Column5\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column8\">1000000</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Flag\" type=\"STRING\" size=\"256\"/><Column id=\"Delete\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"Flag\">theme://images/ico_flag_add.png</Col><Col id=\"Delete\">1</Col><Col id=\"Column4\"/><Col id=\"Column3\"/><Col id=\"Column5\"/></Row><Row><Col id=\"No\">2</Col><Col id=\"Column4\"/><Col id=\"Column3\"/><Col id=\"Column5\"/><Col id=\"Flag\">theme://images/ico_flag_del.png</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"Column4\"/><Col id=\"Column3\"/><Col id=\"Column5\"/><Col id=\"Flag\">theme://images/ico_flag_mod.png</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"Column4\"/><Col id=\"Column3\"/><Col id=\"Column5\"/></Row><Row><Col id=\"No\">5</Col><Col id=\"Column4\"/><Col id=\"Column3\"/><Col id=\"Column5\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"Column4\"/><Col id=\"Column3\"/><Col id=\"Column5\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00_01","0","398","1040","214",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("7");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"타이틀1\"/><Cell col=\"3\" text=\"타이틀2\"/><Cell col=\"4\" text=\"타이틀3\"/><Cell col=\"5\" text=\"타이틀4\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell text=\"bind:Flag\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:Delete\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column3\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Column4\" textAlign=\"left\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00","0","547","81","113",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("텍스트 포인트 컬러 및 포인트 bg 클래스");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","35",null,"242","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\" band=\"right\"/><Column size=\"120\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"좌측헤더\"/><Cell col=\"1\" text=\"텍스트 컬러1\"/><Cell col=\"2\" text=\"텍스트 컬러2\"/><Cell col=\"3\" text=\"텍스트 컬러3\"/><Cell col=\"4\" text=\"bg컬러 1\"/><Cell col=\"5\" text=\"bg컬러 2\"/><Cell col=\"6\" text=\"bg컬러 3\"/><Cell col=\"7\" text=\"bg컬러 4\"/><Cell col=\"8\" text=\"bg컬러 5\"/><Cell col=\"9\" text=\"소계\"/><Cell col=\"10\" text=\"합계\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_header&quot;\" text=\"bind:LeftHeader\" suppressalign=\"first\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column5\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_fc_blue&quot;\"/><Cell col=\"2\" text=\"bind:Column4\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_fc_orange&quot;\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_fc_red&quot;\"/><Cell col=\"4\" text=\"bind:Column2\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_bg_1&quot;\"/><Cell col=\"5\" text=\"bind:Column1\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_bg_2&quot;\"/><Cell col=\"6\" text=\"bind:Column0\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_bg_3&quot;\"/><Cell col=\"7\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_bg_4&quot;\" text=\"bind:Column9\"/><Cell col=\"8\" cssclass=\"expr:LeftHeader==&apos;소계&apos;?&quot;cell_sub_summ&quot;:&quot;cell_bg_5&quot;\" text=\"bind:Column8\"/><Cell col=\"9\" cssclass=\"cell_sub_summ\" text=\"bind:summ\" displaytype=\"number\"/><Cell col=\"10\" cssclass=\"cell_summ\" text=\"bind:Column10\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","275","12","877","15",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("3");
            obj.set_text("※ 텍스트에 포인트 컬러 또는 bg 컬러가 필요할 경우 다음 클래스 1번부터 5번까지 순차적으로 사용. (추가 컬러가 필요할 경우, 임의로 값을 넣지 말고, 퍼블리셔에게 요청바랍니다.)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00","0","368","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("편집가능 그리드 고정컬럼");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00","192","370","747","20",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("6");
            obj.set_text("※ 편집가능 그리드에 Flag, 선택 컬럼을 추가할 경우, 가로 스크롤 되지 않도록 좌측고정컬럼 처리");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","672","1040","87",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","428","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("좌측 고정 컬럼(가로스크롤 시 스크롤 되지 않는 컬럼)");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","30","320","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Flag, 선택(삭제) 이 있을 경우 순서대로 배치한다.");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","613","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Flag, 선택(삭제)은 그리드 좌측에 고정하여, 그리드 좌우 스크롤 시 스크롤 되지 않도록 한다.");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","63","26","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","63","48","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","644","80","1",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","11","614","27","15",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("40");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","47","614","27","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("40");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01","3","637","87","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("좌측 고정 컬럼");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","0","810","1040","214",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("14");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"고정컬럼1\"/><Cell col=\"2\" text=\"고정컬럼2\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"타이틀1\"/><Cell col=\"4\" text=\"타이틀2\"/><Cell col=\"5\" text=\"타이틀3\"/><Cell col=\"6\" text=\"타이틀4\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"2\" text=\"합계\" textAlign=\"center\" cssclass=\"cell_fix\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00_00","0","780","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회 그리드의 좌측고정 컬럼");
            obj.set_cssclass("sta_WF_title2");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00","207","782","747","20",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("16");
            obj.set_text("※ 일반 조회 그리드에서 일반컬럼 고정시에 고정하는 가장 우측 컬럼에 border 처리. 셀클래스 .cell_fix");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01","57","298","338","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("좌측헤더 데이터 머지가 있을 경우 클래스 : .cell_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01","9","199","35","106",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("0px none, 0px none, 1px solid red, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01_00","57","317","343","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("셀옵션 : suppress > 1, suppressalign > first");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01_00","868","230","207","81",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("0px none, 0px none, 1px solid red, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01_00_00","1260","234","60","81",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("0px none,  1px solid red, 1px solid red, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01_01","1089","300","183","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("소계 클래스: .cell_sub_summ");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01_00_00_00","1262","238","165","101",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("0px none,  1px solid red, 1px solid red, 0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01_01_00","1089","322","178","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("우측 합계 클래스: .cell_summ");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01_01_00_00","1184","342","178","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("(하단합계는 클래스 없음)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","480","67","604","148",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("사용여부 미정\r\n컬럼별 포인트 BG 컬러 필요 시, UI팀에 문의");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("rgba(255,0,0,0.60)");
            obj.set_color("#ffffff");
            obj.set_font("20px \"NotoKr-Regular\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","1089","1040","87",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","428","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("일반 조회그리드의 좌측 고정컬럼");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","30","365","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("일반 조회 그리드에 No 컬럼을 두는 것을 원칙으로 한다.");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","613","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("No 컬럼은 항상 좌측 고정 처리한다.");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","63","26","100","10",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","63","48","100","10",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","0","952","211","113",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","1049","210","1",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","11","1029","27","15",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("50");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00","86","1039","87","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("좌측 고정 컬럼");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","0","952","51","113",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
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

        };
        
        // User Script
        this.registerScript("Comp_04_04.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static76_onclick,this);
            this.Div01_00.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static76_onclick,this);
        };
        this.loadIncludeScript("Comp_04_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
