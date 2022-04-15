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
            this.set_titletext("Grid  - 컬럼의 텍스트 정렬과 기준 너비");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,744);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Flag\" type=\"STRING\" size=\"256\"/><Column id=\"Delete\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"Flag\">imagerc::ico_flag_add.png</Col><Col id=\"Delete\">1</Col><Col id=\"Column4\">비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">1260000000</Col><Col id=\"Column6\">0</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"Column4\">비정형데이터 비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">0</Col><Col id=\"Flag\">imagerc::ico_flag_del.png</Col><Col id=\"Column6\">15</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"Column4\">비정형데이터 비정형데이터 비정형데이터 비정형데이터 비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">9900000</Col><Col id=\"Flag\">imagerc::ico_flag_modify.png</Col><Col id=\"Column6\">23.00</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"Column4\">비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">150000</Col><Col id=\"Column6\">0</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"Column4\">비정형데이터 비정형데이터 비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">0</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"Column4\">비정형데이터</Col><Col id=\"Column3\">123-12-12345</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">10045537</Col><Col id=\"Column1\">10허4089</Col><Col id=\"Column2\">강남영업소</Col><Col id=\"Column3\">D00002259</Col><Col id=\"Column4\">강남보험예약소</Col><Col id=\"Column5\">1234567890</Col><Col id=\"Column6\">1113384127</Col><Col id=\"Column7\">홍길동</Col><Col id=\"Column8\">70414</Col></Row><Row><Col id=\"Column1\">101허4089</Col><Col id=\"Column2\">강남영업소</Col><Col id=\"Column3\">D00002259</Col><Col id=\"Column4\">강남보험예약소</Col><Col id=\"Column5\">1234567890</Col><Col id=\"Column6\">1113384127</Col><Col id=\"Column7\">아무개</Col><Col id=\"Column8\">70414</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid03", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022-01-01</Col><Col id=\"Column5\">123000000</Col><Col id=\"Column6\">20</Col><Col id=\"Column1\">1234-1234-****-****</Col><Col id=\"Column2\">25/11</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">11</Col><Col id=\"Column7\">Y</Col><Col id=\"Column8\">216</Col><Col id=\"Column9\">12345</Col><Col id=\"Column13\">2020-07-04 (00:00)</Col><Col id=\"Column10\">010-1234-1234</Col><Col id=\"Column11\">EA</Col><Col id=\"Column12\">3개월</Col></Row><Row><Col id=\"Column0\">2022-01-01</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">0</Col><Col id=\"Column1\">1234-1234-****-****</Col><Col id=\"Column2\">25/11</Col><Col id=\"Column3\">11</Col><Col id=\"Column4\">206</Col><Col id=\"Column7\">N</Col><Col id=\"Column8\">68</Col><Col id=\"Column9\">123456</Col><Col id=\"Column13\">2020-07-04 (00:00)</Col><Col id=\"Column11\">EA</Col><Col id=\"Column12\">60개월</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","35",null,"181","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"정형데이터\"/><Cell col=\"2\" text=\"비정형데이터\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" text=\"비율\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:Column3\"/><Cell col=\"2\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column5\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:Column6\" textAlign=\"right\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"1100000\" displaytype=\"number\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01","0","5","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("텍스트 기본 정렬");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","130","10","832","15",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("3");
            obj.set_text("※ 컬럼의 텍스트 정렬은 가운데 정렬이 기본값이다. 단 정형데이터의 경우 가운데정렬, 비정형데이터는 좌측 정렬, 금액 및 비율은 우측 정렬한다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","230",null,"87","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","428","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("정형데이터란?");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","30","698","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("텍스트의 자릿수가 정해져 있는 데이터.  주민번호, 사업자번호, 주민번호 등. ");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","613","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("단, 우편번호 처럼 5 혹은 6자리 등 <fc v=\"#ff0000\">자릿수가 2~3자리 등 제한된 범위 내</fc>라면 정형데이터로 취급한다.");
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

            obj = new Static("Static45_00_00_01_00","0","337","335","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("컬럼의 텍스트 정렬 및 컬럼 사이즈");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","367",null,"181","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("6");
            obj.set_binddataset("ds_grid02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"설비번호\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"영업지점\"/><Cell col=\"3\" text=\"예약소\"/><Cell col=\"4\" text=\"예약소명\"/><Cell col=\"5\" text=\"계약번호\"/><Cell col=\"6\" text=\"고객번호\"/><Cell col=\"7\" text=\"이름\"/><Cell col=\"8\" text=\"사번\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell col=\"11\" text=\"Column11\"/><Cell col=\"12\" text=\"Column12\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","235","338","739","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("7");
            obj.set_text("※ 아래 사이즈 기준은 권장너비입니다. 정형데이터 기준 텍스트가 잘리지 않는 범위에서 지정가능. 비정형데이터의 경우 텍스트 잘림 허용");
            obj.set_cssclass("sta_txt_desc");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00","1050","317","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","0","598",null,"181","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("9");
            obj.set_binddataset("ds_grid03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"날짜(년월일)\"/><Cell col=\"1\" cssclass=\"년월일시\" text=\"년월일시\"/><Cell col=\"2\" text=\"카드번호\"/><Cell col=\"3\" text=\"유효기간\"/><Cell col=\"4\" text=\"oo건수\"/><Cell col=\"5\" text=\"oo대수\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"비율\"/><Cell col=\"8\" text=\"Y/N\"/><Cell col=\"9\" text=\"지연일수\"/><Cell col=\"10\" text=\"우편번호\"/><Cell col=\"11\" text=\"전화번호\"/><Cell col=\"12\" text=\"단위\"/><Cell col=\"13\" text=\"기간(개월 등)\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column13\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:Column5\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:Column6\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","0","794","150","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가 업데이트 예정");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","29","465","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("90");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","130","465","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("90");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","245","465","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("150");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","535",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","813","465","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("80");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00","888","465","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("70");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","368","466","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("100");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","623","466","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("100");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00","718","466","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("100");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01","495","465","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("150");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00","30","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("100");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00","155","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("140");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00","305","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("150");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00","415","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("70");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","485","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","550","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","635","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("120");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","725","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","790","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","845","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","910","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("70");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00_00","995","698","30","14",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("120");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00_00","1094","698","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","119","-5","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","435","215","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"337","50","24","41",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1395","355","100","12",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","1395","586","100","12",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"568","50","24","41",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","1050","548","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,744,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_04_02.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
        };
        this.loadIncludeScript("Comp_04_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
