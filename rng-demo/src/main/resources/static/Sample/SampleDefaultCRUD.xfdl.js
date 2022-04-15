(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleDefaultCRUD");
            this.set_titletext("기본 CRUD샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsImp", this);
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"modGcd\" size=\"11\"/><Column type=\"string\" id=\"modId\" size=\"20\"/><Column type=\"string\" id=\"modNm\" size=\"75\"/><Column type=\"string\" id=\"modTy\" size=\"9\"/><Column type=\"string\" id=\"sysCd\" size=\"20\"/><Column type=\"string\" id=\"useYn\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCm001", this);
            obj._setContents("<ColumnInfo><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"DOMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDCODE\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDNAME\" type=\"STRING\" size=\"40\"/><Column id=\"TEXT\" type=\"STRING\" size=\"255\"/><Column id=\"DDTEXT\" type=\"STRING\" size=\"60\"/><Column id=\"SORD\" type=\"INT\" size=\"1\"/><Column id=\"CODE1\" type=\"STRING\" size=\"30\"/><Column id=\"ETC1V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC1N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7N\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">IN3000</Col><Col id=\"FIELDNAME\">KT렌탈 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">IN3100</Col><Col id=\"FIELDNAME\">오토리스 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">IN3200</Col><Col id=\"FIELDNAME\">KT오토케어 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">MB3000</Col><Col id=\"FIELDNAME\">모바일시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">OT3000</Col><Col id=\"FIELDNAME\">KT렌탈 대외 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">OT3100</Col><Col id=\"FIELDNAME\">오토리스 대외 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">RE1000</Col><Col id=\"FIELDNAME\">일반렌탈 MOBILE 시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM001</Col><Col id=\"FIELDCODE\">RE2000</Col><Col id=\"FIELDNAME\">렌탈 매니저 WEB시스템</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">시스템구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCm002All", this);
            obj._setContents("<ColumnInfo><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"DOMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDCODE\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDNAME\" type=\"STRING\" size=\"40\"/><Column id=\"TEXT\" type=\"STRING\" size=\"255\"/><Column id=\"DDTEXT\" type=\"STRING\" size=\"60\"/><Column id=\"SORD\" type=\"INT\" size=\"1\"/><Column id=\"CODE1\" type=\"STRING\" size=\"30\"/><Column id=\"ETC1V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC1N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7N\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"FIELDCODE\"/><Col id=\"FIELDNAME\">전체</Col><Col id=\"BUKRS\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">mrd</Col><Col id=\"FIELDNAME\">mrd</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">svc</Col><Col id=\"FIELDNAME\">svc</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">task</Col><Col id=\"FIELDNAME\">task</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">xfdl</Col><Col id=\"FIELDNAME\">xfdl</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCm003All", this);
            obj._setContents("<ColumnInfo><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"DOMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDCODE\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDNAME\" type=\"STRING\" size=\"40\"/><Column id=\"TEXT\" type=\"STRING\" size=\"255\"/><Column id=\"DDTEXT\" type=\"STRING\" size=\"60\"/><Column id=\"SORD\" type=\"INT\" size=\"1\"/><Column id=\"CODE1\" type=\"STRING\" size=\"30\"/><Column id=\"ETC1V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC1N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7N\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"FIELDCODE\"/><Col id=\"FIELDNAME\">전체</Col><Col id=\"BUKRS\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">CM</Col><Col id=\"FIELDNAME\">공통</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">CO</Col><Col id=\"FIELDNAME\">관리회계</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">CS</Col><Col id=\"FIELDNAME\">고객만족(콜센터)</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">FI</Col><Col id=\"FIELDNAME\">재무회계</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">HR</Col><Col id=\"FIELDNAME\">인사관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">MM</Col><Col id=\"FIELDNAME\">구매자재관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">PM</Col><Col id=\"FIELDNAME\">설비관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">SB</Col><Col id=\"FIELDNAME\">SD-수납/채권</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">SD</Col><Col id=\"FIELDNAME\">영업관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">TR</Col><Col id=\"FIELDNAME\">자금관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"sysCd\" type=\"STRING\" size=\"256\"/><Column id=\"modId\" type=\"STRING\" size=\"256\"/><Column id=\"modNm\" type=\"STRING\" size=\"256\"/><Column id=\"modTy\" type=\"STRING\" size=\"256\"/><Column id=\"modGcd\" type=\"STRING\" size=\"256\"/><Column id=\"claNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"des2\" type=\"STRING\" size=\"256\"/><Column id=\"dutL\" type=\"STRING\" size=\"256\"/><Column id=\"dutM\" type=\"STRING\" size=\"256\"/><Column id=\"dutS\" type=\"STRING\" size=\"256\"/><Column id=\"inqYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"prtYn\" type=\"STRING\" size=\"256\"/><Column id=\"exlYn\" type=\"STRING\" size=\"256\"/><Column id=\"conYn\" type=\"STRING\" size=\"256\"/><Column id=\"ernam\" type=\"STRING\" size=\"256\"/><Column id=\"ernamt\" type=\"STRING\" size=\"256\"/><Column id=\"erdat\" type=\"STRING\" size=\"256\"/><Column id=\"aenam\" type=\"STRING\" size=\"256\"/><Column id=\"aenamt\" type=\"STRING\" size=\"256\"/><Column id=\"aedat\" type=\"STRING\" size=\"256\"/><Column id=\"message\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImp_IS_LOGIN", this);
            obj._setContents("<ColumnInfo><Column id=\"PERNR\" type=\"INT\" size=\"8\"/><Column id=\"LOGID\" type=\"STRING\" size=\"30\"/><Column id=\"ENAME\" type=\"STRING\" size=\"40\"/><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"SCRNO\" type=\"STRING\" size=\"20\"/><Column id=\"SYSIP\" type=\"STRING\" size=\"20\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"NO_MASK\" type=\"STRING\" size=\"1\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PERNR\">20573</Col><Col id=\"LOGID\">P20573</Col><Col id=\"ENAME\">양경호</Col><Col id=\"BUKRS\">3000</Col><Col id=\"SCRNO\">CM10040</Col><Col id=\"SYSIP\">10.106.7.11</Col><Col id=\"SYS_CD\">IN3000</Col><Col id=\"NO_MASK\"/><Col id=\"SES_ID\">AALjrMwoTJSADhzPKrYsI</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCm002", this);
            obj._setContents("<ColumnInfo><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"DOMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDCODE\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDNAME\" type=\"STRING\" size=\"40\"/><Column id=\"TEXT\" type=\"STRING\" size=\"255\"/><Column id=\"DDTEXT\" type=\"STRING\" size=\"60\"/><Column id=\"SORD\" type=\"INT\" size=\"1\"/><Column id=\"CODE1\" type=\"STRING\" size=\"30\"/><Column id=\"ETC1V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC1N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7N\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">mrd</Col><Col id=\"FIELDNAME\">mrd</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">svc</Col><Col id=\"FIELDNAME\">svc</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">task</Col><Col id=\"FIELDNAME\">task</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM002</Col><Col id=\"FIELDCODE\">xfdl</Col><Col id=\"FIELDNAME\">xfdl</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈유형</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCm003", this);
            obj._setContents("<ColumnInfo><Column id=\"BUKRS\" type=\"STRING\" size=\"4\"/><Column id=\"DOMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDCODE\" type=\"STRING\" size=\"30\"/><Column id=\"FIELDNAME\" type=\"STRING\" size=\"40\"/><Column id=\"TEXT\" type=\"STRING\" size=\"255\"/><Column id=\"DDTEXT\" type=\"STRING\" size=\"60\"/><Column id=\"SORD\" type=\"INT\" size=\"1\"/><Column id=\"CODE1\" type=\"STRING\" size=\"30\"/><Column id=\"ETC1V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC1N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC2N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC3N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC4N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC5N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC6N\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7V\" type=\"STRING\" size=\"40\"/><Column id=\"ETC7N\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">CM</Col><Col id=\"FIELDNAME\">공통</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">CO</Col><Col id=\"FIELDNAME\">관리회계</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">CS</Col><Col id=\"FIELDNAME\">고객만족(콜센터)</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">FI</Col><Col id=\"FIELDNAME\">재무회계</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">HR</Col><Col id=\"FIELDNAME\">인사관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">MM</Col><Col id=\"FIELDNAME\">구매자재관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">PM</Col><Col id=\"FIELDNAME\">설비관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">SB</Col><Col id=\"FIELDNAME\">SD-수납/채권</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">SD</Col><Col id=\"FIELDNAME\">영업관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row><Row><Col id=\"BUKRS\">3000</Col><Col id=\"DOMNAME\">CM003</Col><Col id=\"FIELDCODE\">TR</Col><Col id=\"FIELDNAME\">자금관리</Col><Col id=\"TEXT\"/><Col id=\"DDTEXT\">모듈구분</Col><Col id=\"SORD\">0</Col><Col id=\"CODE1\"/><Col id=\"ETC1V\">0.0000</Col><Col id=\"ETC1N\"/><Col id=\"ETC2V\">0.0000</Col><Col id=\"ETC2N\"/><Col id=\"ETC3V\">0.0000</Col><Col id=\"ETC3N\"/><Col id=\"ETC4V\"/><Col id=\"ETC4N\"/><Col id=\"ETC5V\"/><Col id=\"ETC5N\"/><Col id=\"ETC6V\"/><Col id=\"ETC6N\"/><Col id=\"ETC7V\">00000000</Col><Col id=\"ETC7N\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","18","48","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("모듈ID");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"11","38",null,"30","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","171","0","80","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","30","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","107","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","470","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("모듈유형");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","390","0","80","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbModTy","532","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("FIELDCODE");
            obj.set_datacolumn("FIELDNAME");
            obj.set_innerdataset("dsCodeCm002All");
            obj.set_text("KT렌탈 WEB시스템");
            obj.set_value("IN3000");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","622","0","80","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","702","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("모듈구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbModGcd","763","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCodeCm003All");
            obj.set_codecolumn("FIELDCODE");
            obj.set_datacolumn("FIELDNAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","30","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtModId","81","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_imemode("alpha");
            obj.set_maxlength("5");
            obj.set_inputmode("upper");
            obj.set_inputtype("number,alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","249","18","48","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("모듈명");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtModNm","300","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","853","0","80","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","933","18","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("시스템");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbSysCd","983","18","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsCodeCm001");
            obj.set_codecolumn("FIELDCODE");
            obj.set_datacolumn("FIELDNAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1198","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1113","0","80","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("radUseYn","1261","18","160","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_radUseYn_innerdataset = new nexacro.NormalDataset("divSearch_form_radUseYn_innerdataset", obj);
            divSearch_form_radUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_radUseYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("A");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","424",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1061","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("프로그램목록리스트");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("grdList","0","50",null,null,"0","47",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.getSetter("statecellindex").set("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"시스템\"/><Cell col=\"4\" text=\"모듈ID\"/><Cell col=\"5\" text=\"모듈명\"/><Cell col=\"6\" text=\"모듈유형\"/><Cell col=\"7\" text=\"모듈구분\"/><Cell col=\"8\" text=\"클래스명/파일명\"/><Cell col=\"9\" text=\"사용여부\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"등록일\"/><Cell col=\"12\" text=\"최종수정자\"/><Cell col=\"13\" text=\"최종수정일\"/><Cell col=\"14\" text=\"메세지\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_chk\"/><Cell col=\"1\"/><Cell col=\"2\" expr=\"currow+1\"/><Cell col=\"3\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;combo&quot;:&quot;none&quot;\" text=\"bind:sysCd\" editautoselect=\"false\" editdisplay=\"edit\" combodataset=\"dsCodeCm001\" combocodecol=\"FIELDCODE\" combodatacol=\"FIELDNAME\" displaytype=\"expr:dataset.getRowType(currow) == 2 ? &quot;combocontrol&quot;:&quot;combotext&quot;\"/><Cell col=\"4\" displaytype=\"expr:dataset.getRowType(currow) == 2 ? &quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;normal&quot;:&quot;none&quot;\" editfilter=\"upper,digit\" text=\"bind:modId\" editimemode=\"alpha\" editautoselect=\"true\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:modNm\" editimemode=\"hangul\" editautoselect=\"true\" editdisplay=\"display\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:modTy\" editautoselect=\"true\" editdisplay=\"display\" combodataset=\"dsCodeCm002\" combocodecol=\"FIELDCODE\" combodatacol=\"FIELDNAME\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:modGcd\" editautoselect=\"true\" editdisplay=\"display\" combodataset=\"dsCodeCm003\" combocodecol=\"FIELDCODE\" combodatacol=\"FIELDNAME\" combodisplayrowcount=\"10\" combodisplay=\"display\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:claNm\" editimemode=\"alpha\" editautoselect=\"true\" editdisplay=\"display\" combodisplay=\"edit\"/><Cell col=\"9\" celltype=\"none\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:useYn\" editautoselect=\"false\" editdisplay=\"edit\" combodisplay=\"display\" combotype=\"dropdown\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"10\" text=\"bind:ernamt\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"none\" text=\"bind:erdat\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"12\" text=\"bind:aenamt\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"none\" text=\"bind:aedat\" mask=\"####-##-## ##:##:##\" calendardisplay=\"edit\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"14\" style=\"align:left middle;\" text=\"bind:message\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00","163","20","512","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("3");
            obj.set_text("※ 업무 진행 시 반드시 숙지해야 할 안내문은 타이틀 우측에 배치.");
            obj.set_cssclass("sta_txt_desc");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","153","3","10","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","50","614","100","10",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","809","614","100","30",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0",null,"1180","24",null,"2",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("7");
            obj.set_text("※ 일반적인 안내문은 영역 좌측 하단에 배치합니다. / 또는 타이틀 옆에 도움말이 위치하기에 공간이 협소한 경우, 예외적으로 하단에 위치할 수 있습니다.");
            obj.set_cssclass("sta_txt_desc");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnExcelImport",null,"20","44","24","368",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelUp");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnExcelExport",null,"20","44","24","320",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_text("");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"20","76","24","240",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","476",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridUnit");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"20","76","24","160",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1005","13","10","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","993","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("16");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1120","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("17");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1234","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("18");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1018","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("19");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"20","76","24","80",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("20");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"20","76","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("21");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","496",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("22");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFooter","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.divFooter.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divFooter.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.divFooter.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divFooter.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","64","28","0",null,null,null,null,null,this.divFooter.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.divFooter.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cmbModTy","value","dsImp","modTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtModId","value","dsImp","modId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtModNm","value","dsImp","modNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cmbModGcd","value","dsImp","modGcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cmbSysCd","value","dsImp","sysCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.radUseYn","value","dsImp","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleDefaultCRUD.xfdl", function() {
        /********************************************************************
        *  기본CRUD 샘플
        *  @FileName 	: SampleDefaultCRUD.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/14
        *  @Desction    : 기본CRUD 샘플 페이지
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/14     	        양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
            //공통 Onload함수
            this.gfnFormOnLoad(obj);

        	this.divSearch.form.cmbModGcd.set_index(0);
        	this.divSearch.form.cmbModTy.set_index(0);
        	this.divSearch.form.cmbSysCd.set_index(0);

        	this.fnSetValidation();
        }

        this.fnSetValidation = function()
        {

        	// Validation 체크 Rule의 종류
        	// required - 필수 체크
        	// length:7 - 길이가 7자리인지 체크
        	// rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크
        	// maxlength:7 - 길이가 7보다 작은지 체크
        	// minlength:3 - 길이가 3보다 큰지 체크
        	// maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크
        	// minlengthbyte:3 - byte의 길이가 3보다 큰지 체크
        	// digits - 숫자여부 체크
        	// min:7 - 값이 7보다 작은지 체크
        	// max:7 - 값이 7보다 큰지 체크
        	// declimit:3 - 소수점의 자리수가 3자리인지 체크
        	// date - 년월일형태의 날짜가 맞는지 체크
        	// dateym - 년월형태의 날짜가 맞는지 체크
        	// range:40:100 - 값이 40 ~ 100 사이의 값인지 체크
        	// code:1:2:3 - 값이 1,2,3 의 값인지 체크
        	// equalto:NAME - NAME 칼럼의 값과 같은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "equalto:NAME");
        	// fromto:ID - 등록된 날짜가 ID의 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, "NAME", "종료일,시작일", "fromto:ID");
        	// comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "comparebig:NAME");
        	// comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "comparesmall:NAME");
        	// isssn - 공통함수 gfnIsSSN로 주민번호 체크
        	// isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크
        	// isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크
        	// isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크
        	// iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크
        	// isemail - 공통함수 gfnIsEmail로 이메일 체크


        	this.gfnSetValidation(this.divSearch.form.edtModId, "", "모듈ID", "required");
        	this.gfnSetValidation(this.divSearch.form.edtModNm, "", "모듈명", "required");

        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
            switch(sSvcId)
            {
            	case "search" :
            	break;
            	case "save" :
        			this.fnSearch();
            	break;
            	default:
        		break;
            }
        }

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	if(!this.gfnValidation(this.divSearch)) return;


            var oArgs  = {
        			  svcId 	: 	"search",
        			  //rfcName 	: 	"ZCM_WEB_PRO_LIST",
        			  svcUrl    : "selectnexacrovolist",
        			  inDs 		: 	"dsImp=dsImp",
        			  outDs 	: 	"dsList=dsList",
        			  svcType 	: 	"R"
        	}

        	// 공통 트랜잭션 호출
        	this.gfnTransaction(oArgs);
        }

        this.fnSave = function()
        {
            var oArgs  = {
        			  svcId 	: 	"save",
        			  //rfcName 	: 	"ZCM_WEB_PRO_LIST",
        			  svcUrl    : "savenexacrovolist",
        			  inDs 		: 	"dsList=dsList",
        			  svcType 	: 	"S"
        	}

        	// 공통 트랜잭션 호출
        	this.gfnTransaction(oArgs);
        }

        /************************************************************************************************this.
         * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.DivSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.divGridWapper_btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.gfnAddRow(this.dsList);
        	this.dsList.setColumn(nRow, "useYn", "1");							// 사용여부 디폴트(사용 : 1)
        	this.dsList.setColumn(nRow, "sysCd", this.divSearch.form.cmbSysCd.value);		// 시스템 디폴트(조회조건의 코드로)
        	this.dsList.setColumn(nRow, "modTy", "xfdl");						// 유형:xfdl
        };

        this.divFooter_btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.divGridWapper_btnDelete_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsList);
        };

        this.divGridWapper_btnCancel_onclick = function(obj,e)
        {
        	this.dsList.reset();
        };


        this.divGridWapper_btnExcelExport_onclick = function(obj,e)
        {
        	this.gfnExcelExport(this.divGridWapper.form.grdList);
        };

        this.divGridWapper_btnExcelImport_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.DivSearch_btnSearch_onclick,this);
            this.divGridWapper.form.btnExcelImport.addEventHandler("onclick",this.divGridWapper_btnExcelImport_onclick,this);
            this.divGridWapper.form.btnExcelExport.addEventHandler("onclick",this.divGridWapper_btnExcelExport_onclick,this);
            this.divGridWapper.form.btnAdd.addEventHandler("onclick",this.divGridWapper_btnAdd_onclick,this);
            this.divGridWapper.form.btnDelete.addEventHandler("onclick",this.divGridWapper_btnDelete_onclick,this);
            this.divGridWapper.form.btnCancel.addEventHandler("onclick",this.divGridWapper_btnCancel_onclick,this);
            this.divFooter.form.btnSave.addEventHandler("onclick",this.divFooter_btnSave_onclick,this);
            this.dsImp.addEventHandler("onrowsetchanged",this.dsImp_onrowsetchanged,this);
            this.dsImp.addEventHandler("oncolumnchanged",this.dsImp_oncolumnchanged,this);
        };
        this.loadIncludeScript("SampleDefaultCRUD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
