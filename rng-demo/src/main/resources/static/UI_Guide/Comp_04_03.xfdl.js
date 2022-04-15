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
            this.set_titletext("Grid  - 편집모드, 클래스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,1296);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column5\">버튼</Col><Col id=\"Column4\">3000</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column2\">선택</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_add.png</Col><Col id=\"Column11\">1231212345</Col><Col id=\"No\">1</Col><Col id=\"Column7\">theme://images/state_gray.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">수정</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_del.png</Col><Col id=\"No\">2</Col><Col id=\"Column7\">theme://images/state_yellow.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column5\">저장</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"Column10\">theme://images/ico_flag_mod.png</Col><Col id=\"No\">3</Col><Col id=\"Column7\">theme://images/state_green.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"No\">4</Col><Col id=\"Column7\">theme://images/state_orange.png</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2020-12-12</Col><Col id=\"No\">5</Col><Col id=\"Column7\">theme://images/state_blue.png</Col></Row><Row><Col id=\"Column7\">theme://images/state_red.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">선택1</Col></Row><Row><Col id=\"Column0\">선택2</Col></Row><Row><Col id=\"Column0\">선택3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column5\">TextArea1, TextArea2, TextArea3, TextArea4, TextArea5, TextArea6, TextArea7, TextArea8, </Col><Col id=\"Column4\">&lt;fc v=&apos;#f48a06&apos;&gt;폰트컬러 &lt;/fc&gt;를 변경합니다.</Col><Col id=\"Column2\">링크</Col></Row><Row><Col id=\"Column4\">&lt;b v=&apos;true&apos;&gt;굵은글씨&lt;/b&gt;로 변경합니다.</Col><Col id=\"Column2\">링크</Col></Row><Row><Col id=\"Column4\">&lt;u v=&apos;true&apos;&gt;언더라인&lt;/u&gt; 밑줄을 칩니다.</Col><Col id=\"Column2\">링크</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">1뎁스메뉴</Col><Col id=\"lev\">0</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">2뎁스메뉴</Col><Col id=\"lev\">1</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col><Col id=\"Column0\">텍스트 텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_table", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">소타이틀</Col></Row><Row><Col id=\"Column0\">소타이틀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","35",null,"186","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"201\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"Calendar\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Edit\"/><Cell col=\"5\" text=\"MaskEdit(String)\"/><Cell col=\"6\" text=\"MaskEdit(Number)\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" text=\"Expand\"/><Cell col=\"9\" text=\"상태\"/><Cell col=\"10\" text=\"Column8\"/><Cell col=\"11\" text=\"Column9\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell text=\"bind:Column10\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comb\" combodatacol=\"Column0\" combocodecol=\"Column0\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"5\" edittype=\"mask\" displaytype=\"maskeditcontrol\" maskeditformat=\"###-##-#####\" text=\"bind:Column11\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:Column4\" displaytype=\"maskeditcontrol\" edittype=\"normal\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"bind:Column5\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:Column6\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"9\" text=\"bind:Column7\" displaytype=\"imagecontrol\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01","0","7","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본 편집모드");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","183","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","286",null,"154","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","428","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Cell 설정값");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","30","698","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("선택, CheckBox : displaytype(checkboxcontrol), edittype(checkbox)");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","613","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("플래그, 상태, Image : displaytype (imagecontrol)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
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

            obj = new Static("Static01_00_00_01_00_00_00_00","63","70","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","74","613","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("Calendar : displaytype (calendarcontrol), edittype(date), calendardateformat(yyyy-MM-dd)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","97","613","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("Combo : displaytype (combocontrol), edittype(combo)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","63","93","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00_00","63","116","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","20","120","613","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("Edit : displaytype (editcontrol), edittype(normal)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","654","30","748","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("MaskEdit(String) : displaytype (maskeditcontrol), edittype(mask), maskeditformat(###-##-#####), maskedittype(string)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","654","52","748","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("MaskEdit(Number) : displaytype (maskeditcontrol), edittype(mask), maskeditformat(#,###)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","654","74","748","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("Button : displaytype (buttoncontrol), edittype(button)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00","654","97","748","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("Expand : displaytype (editcontrol), edittype(normal), expandshow(show), expandsize(24)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","63","137","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01_00","33","-2","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","490",null,"281","609",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"80\"/></Rows><Band id=\"head\"><Cell text=\"TextArea\"/><Cell col=\"1\" text=\"Decoratetext\"/><Cell col=\"2\" text=\"필수입력 컬럼\" cssclass=\"cell_req\"/><Cell col=\"3\" text=\"링크\"/><Cell col=\"4\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column5\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"1\" text=\"bind:Column4\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:Column3\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Column2\" cssclass=\"cell_link\"/><Cell col=\"4\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00","473","440","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00","0","462","360","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TextArea, Decoratetext, 셀클래스");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00_00",null,"462","220","24","369",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Tree");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00",null,"490","549","281","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("8");
            obj.set_binddataset("ds_tree");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"314\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"data\"/><Cell col=\"1\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","786",null,"115","609",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","428","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Cell 설정값");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","29","698","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("TextArea : displaytype(textareacontrol), edittype(textarea)");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","53","613","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Dacoratetext : displaytype (decoratetextcontrol)");
            obj.set_cssclass("sta_txt_descDot");
            obj.set_usedecorate("true");
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

            obj = new Static("Static01_00_00_01_00_00_01","63","71","100","13",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","77","508","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("필수입력 헤더셀 클래스 .req  / 선택필수 헤더셀 클래스 .select / 링크 셀 클래스. cell_link");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00",null,"786","549","115","40",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","55","428","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("Cell 설정값");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","428","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Grid 설정값");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","30","463","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("treeinitstatus(expand, all), treeusecheckbox(false)");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","63","26","100","10",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","63","48","100","13",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","63","98","100","13",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","78","443","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("Tree cell : displaytype(treeitemcontrol), edittype(tree)");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","63","74","100","10",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","305",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","260","90","1",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00","0","162","82","113",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","35","162","6","98",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("0px none, 1px dotted rgba(177,192,203,1), 0px none, 0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","9","230","27","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("40");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","50","230","27","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("40");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","0","254","87","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("좌측 고정 컬럼");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00",null,"5","44","24","632",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_Block_fileUp");
            obj.set_tooltiptext("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00",null,"5","44","24","728",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00",null,"5","44","24","680",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"5","76","24","334",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"5","76","24","94",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"5","50","24","40",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"5","62","24","414",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("커스텀");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"5","50","24","855",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"5","50","24","784",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"5","100","24","480",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("커스텀팝업");
            obj.set_cssclass("btn_Block_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"5","17","24","836",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_01",null,"5","44","24","584",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Block_fileDown");
            obj.set_tooltiptext("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"5","76","24","254",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","741","0","15","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","685","0","10","35",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","673","0","4","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","800","0","4","35",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1163","29","100","6",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","698","23","100","12",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","201","490","144","280",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("사용여부 미정");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("rgba(255,0,0,0.60)");
            obj.set_color("#ffffff");
            obj.set_font("20px \"NotoKr-Regular\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"5","76","24","174",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00_01","0","923","360","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("테이블 타입 그리드");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","473","901","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","0","951","734","92",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid_table");
            obj.set_taborder("41");
            obj.set_binddataset("ds_table");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"타이틀\"/><Cell col=\"1\" text=\"타이틀\"/><Cell col=\"2\" text=\"타이틀\"/><Cell col=\"3\" text=\"타이틀\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"cell_header\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00","321","928","197","15",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("※ initvalueid = iv_Grid_table");
            obj.set_usedecorate("true");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","142","923","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("(마우스 hover, select 없는 형태)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,1296,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_04_03.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        this.Static74_00_00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01_00.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01_00.form.Static00_01.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01_00_00.form.Static00_01.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01_00_00.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static76_onclick,this);
            this.Static74_00_00_00_00_00.addEventHandler("onclick",this.Static74_00_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Comp_04_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
