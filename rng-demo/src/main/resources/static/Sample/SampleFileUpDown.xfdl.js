(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFileUpDownTransfer");
            this.set_titletext("FileUpDownTransfer");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"deleteDtm\" type=\"string\" size=\"32\"/><Column id=\"deleteYn\" type=\"string\" size=\"32\"/><Column id=\"documentNo\" type=\"string\" size=\"32\"/><Column id=\"fileContentsTypeName\" type=\"string\" size=\"32\"/><Column id=\"fileNo\" type=\"string\" size=\"32\"/><Column id=\"filePath\" type=\"string\" size=\"32\"/><Column id=\"fileSize\" type=\"bigdecimal\" size=\"8\"/><Column id=\"originalFileName\" type=\"string\" size=\"32\"/><Column id=\"regDtm\" type=\"string\" size=\"32\"/><Column id=\"regId\" type=\"string\" size=\"32\"/><Column id=\"savedFileName\" type=\"string\" size=\"32\"/><Column id=\"updDtm\" type=\"string\" size=\"32\"/><Column id=\"updId\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">ABCD</Col><Col id=\"Column1\">1234</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다라</Col><Col id=\"Column1\">1234</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload00", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","267","65","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Add Files");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","353","65","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","21","95","500","206",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"300\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:fileimg\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:originalFileName\"/><Cell col=\"2\" text=\"bind:fileSize\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","438","65","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete All");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar","75","185","390","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","20","17","301","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("File UPLOAD/DOWNLOAD : FileUpTransfer");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleFileUpDown.xfdl", function() {
        /**
        *
        *  @MenuPath
        *  @FileName 	sampleFileUpDownTransfer.xfdl
        *  @Creator
        *  @CreateDate
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        //아이콘별 확장자 목록.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        	};

        //확장자별 아이콘 정보
        this.extToIcon = {};
        this.fileConfig = {};

        // virtualfiles
        this.tmpObjFileList;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	trace("this.gfnGetServerUrl() :" + this.gfnGetServerUrl());

        	this.fileConfig = {
        		host : this.gfnGetServerUrl(),
        		uploadUrl : "file/saveFiler.jsp?path=nexacro",
        		downloadUrl : "file/downloadFile.jsp?path=nexacro&fileName=",
        		downImage : "theme://img_file.png",
        		delImage : "theme://btn_del.png",
        		allowTypes : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        		//maxCount : 10,
        		//maxSize : "200MB",
        		//maxTotalSize : "200MB"
        	};

        	this.initExtToIcon();

        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 확장자별 파일 아이콘 설정
         */
        this.initExtToIcon = function ()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;

        	for (var name in iconInfo) {
        		var len = iconInfo[name].length;
        		for (var i=0; i<len; i++) {
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}
        };

        /**
         * @description 파일 확장자에 해당하는 이미지경로 반환.
         * @param {string} fileName file name
         * @return {string} image full path
         */
        this.getFileIcon = function(fileName)
        {
        	if(this.gfnIsNull(fileName)) return;

        	fileName = fileName.toLowerCase();
        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];

        	if (icon == undefined) { ext = "etc"; }

        	return "theme://" + this.extToIcon[ext] + ".png";
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @ FileDialog open
         * @
         * @
         */
        this.Button00_onclick = function(obj,e)
        {
        	trace("FileDialog.open ~~~~~");
        	var strTitle = "FileLoad";
        	var constOpenMode = 3; 	// 1 : FileDialog.LOAD / 2 : FileDialog.SAVE / 3 : FileDialog.MULTILOAD / 4 : FileDialog.SELFOLDER
        	var rtn = this.FileDialog.open(strTitle, constOpenMode, "%UserApp%");
        	trace("rtn : " + rtn);
        };

        /**
         * @ FileDialog onclose & FileUpTransfer addFile
         * @
         * @
         */
        this.FileDialog_onclose = function(obj,e)
        {
        	trace("FileDialog_onclose >>>> obj : " + obj.name + " / e.eventid : " + e.eventid + " / e.path : " + e.path);
        	trace("FileDialog_onclose >>>> obj : " + obj.name + " / e.reason : " + e.reason + " / e.virtualfiles : " + e.virtualfiles);

        	this.tmpObjFileList = e.virtualfiles;
        	trace("tmpObjFileList >>> " + this.tmpObjFileList);

        	/*
        	for (var i = 0; i < this.tmpObjFileList.length; i++) {
        		trace("filename :" + this.tmpObjFileList[i].filename);
        		trace("fullpath : "+ this.tmpObjFileList[i].fullpath);
        		trace("path : " + this.tmpObjFileList[i].path);
        	}
        	*/

        	// FileUpTransfer File Add
        	for (var i = 0; i < this.tmpObjFileList.length; i++) {
        		var bExist = this.FileUpTransfer.existFile(this.tmpObjFileList[i]);
        		if (!bExist) {
        			var nIdx = this.FileUpTransfer.addFile(this.tmpObjFileList[i].filename, this.tmpObjFileList[i]);
        			//trace("nIdx : " + nIdx);

        			var sFileName = this.tmpObjFileList[i].filename
        			var dirExptType = sFileName.lastIndexOf(".")+1;
        			var sFileType = sFileName.substr(dirExptType);
        			var sIconImage = this.getFileIcon(sFileName);

        			if (nIdx != -1) {
        				this.dsUpload.addRow();
        				this.dsUpload.setColumn(nIdx, "fileimg"	, sIconImage);
        				this.dsUpload.setColumn(nIdx, "rmimg"	, this.fileConfig.delImage);
        				this.dsUpload.setColumn(nIdx, "filename", this.tmpObjFileList[i].filename);
        				this.dsUpload.setColumn(nIdx, "filetype", sFileType);
        				this.dsUpload.setColumn(nIdx, "filepath", this.tmpObjFileList[i].path);
        				//this.dsUpload.setColumn(nIdx, "dnimg"	, this.fileConfig.downImage);
        			}
        		}
        	}

        };

        /**
         * @ FileUpTransfer clearFileList
         * @
         * @
         */
        this.Button02_onclick = function(obj,e)
        {
        	this.FileUpTransfer.clearFileList();
        	this.FileUpTransfer.clearPostDataList();
        	this.dsUpload.deleteAll();

        	// FileUpTransfer filelist
        	var filelist = this.FileUpTransfer.filelist;
        	trace("this.FileUpTransfer.filelist : " + filelist.length);
        	/*
        	for (var i = 0; i < filelist.length; i++) {
        		trace("filename :" + filelist[i].filename);
        		trace("fullpath : "+ filelist[i].fullpath);
        		trace("path : " + filelist[i].path);
        	}
        	*/
        };

        /**
         * @ grdUpload ondrop & & FileUpTransfer addFile
         * @
         * @
         */
        this.grdUpload_ondrop = function(obj,e)
        {
        	trace("grdUpload_ondrop >>>> " + e.filelist);

        	var objFileList = e.filelist;
        	/*
        	for (var i = 0; i < objFileList.length; i++) {
        		trace("filename :" + objFileList[i].filename);
        		trace("fullpath : "+ objFileList[i].fullpath);
        		trace("path : " + objFileList[i].path);
        	}
        	*/

        	// FileUpTransfer File Add
        	for (var i = 0; i < objFileList.length; i++) {
        		var bExist = this.FileUpTransfer.existFile(objFileList[i]);
        		if (!bExist) {
        			var nIdx = this.FileUpTransfer.addFile(objFileList[i].filename, objFileList[i]);
        			trace("nIdx : " + nIdx);

        			var sFileName = objFileList[i].filename
        			var dirExptType = sFileName.lastIndexOf(".")+1;
        			var sFileType = sFileName.substr(dirExptType);
        			var sIconImage = this.getFileIcon(sFileName);

        			if (nIdx != -1) {
        				this.dsUpload.addRow();
        				this.dsUpload.setColumn(nIdx, "fileimg"	, sIconImage);
        				this.dsUpload.setColumn(nIdx, "rmimg"	, this.fileConfig.delImage);
        				this.dsUpload.setColumn(nIdx, "filename", objFileList[i].filename);
        				this.dsUpload.setColumn(nIdx, "filetype", sFileType);
        				this.dsUpload.setColumn(nIdx, "filepath", objFileList[i].path);
        				//this.dsUpload.setColumn(nIdx, "dnimg"	, this.fileConfig.downImage);
        			}
        		}
        	}

        	//trace("grdUpload_ondrop >>>> " + e.dragdata.getData(DragDataFormats.FILEDROP));

        };



        /**
         * @ FileUpTransfer upload
         * @
         * @
         */
        this.Button01_onclick = function(obj,e)
        {
        	if (system.navigatorname != "nexacro") {
        		//var sUploadUrl = "http://127.0.0.1:8017/nexacro/" + this.fileConfig.uploadUrl;
        		//var sUploadUrl = "http://localhost:8017/nexacro/" + this.fileConfig.uploadUrl;
        		var sUploadUrl = "http://localhost:8080/uploadnexacrofiles";
        	} else {
        		//var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        		var sUploadUrl = "http://localhost:8080/uploadnexacrofiles";
        	}


        	this.FileUpTransfer.setPostData("fileKey", "");

        	// PostData : Dataset 전달 --------------------------------------- End
        	this.FileUpTransfer.removePostData("removeFile");		// removeFile 삭제

        	trace("sUploadUrl :" + sUploadUrl);
        	this.FileUpTransfer.upload(sUploadUrl);

        	this.ProgressBar.set_visible(true);

        };

        /**
         * @ FileUpTransfer onerror
         * @
         * @
         */
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	trace("FileUpTransfer_onerror >> e.statuscode :" + e.statuscode + " / e.errormsg : " + e.errormsg);
        	trace("FileUpTransfer_onerror >> e.requesturi : " + e.requesturi);
        };

        /**
         * @ FileUpTransfer onsuccess
         * @
         * @
         */
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	//trace("FileUpTransfer_onsuccess >> e.code : " + e.code + " / e.message : " + e.message);
        	//trace("FileUpTransfer_onsuccess >> e.datasets : " + e.datasets);
        	//trace("FileUpTransfer_onsuccess >> e.url : " + e.url);
        	//trace(e.datasets.length);

        	var rtnRemoveFile = obj.getPostData("removeFile");
        	//trace("rtnRemoveFile  : " + rtnRemoveFile);

        	var filelist = obj.filelist;
        	trace("this.FileUpTransfer.filelist : " + filelist.length);

        	var rtnDataset = e.datasets[0];
        		trace(rtnDataset.saveXML());

        	if (!this.gfnIsNull(rtnRemoveFile) ) {
        		trace("~~~~~~~ Remove File Info ~~~~~~~  PostData 이용 file Delete 시");


        		this.grdUpload.set_enableredraw(false);
        		var nIdx = this.dsUpload.findRow("filename", rtnRemoveFile);
        		if (nIdx != -1) {
        			this.dsUpload.deleteRow(nIdx);
        			obj.removeFile(rtnRemoveFile);		// File  제거
        			obj.removePostData("removeFile");	// PostData(removeFile) 제거
        		}
        		this.grdUpload.set_enableredraw(true);

        	} else {
        		trace("~~~~~~~ Upload File Info ~~~~~~~");
        		for (var i = 0; i < rtnDataset.rowcount; i++) {
        			var nIdx = this.dsUpload.findRow("filename", rtnDataset.getColumn(i,"filename"));
        			if (nIdx > -1) {
        				this.dsUpload.setColumn(nIdx, "filesize", rtnDataset.getColumn(i,"filesize"));
        				this.dsUpload.setColumn(nIdx, "filename", rtnDataset.getColumn(i,"filename"));
        				this.dsUpload.setColumn(nIdx, "dnimg"	, this.fileConfig.downImage);

        				//obj.removeFile(rtnDataset.getColumn(i,"filename"));		// Upload File  제거
        			}
        		}
        		trace("~~~~~~~  Upload File Info saveXML ");
        		trace(this.dsUpload.saveXML());
        	}




        	// FileUpTransfer filelist
        	var filelist = obj.filelist;
        	trace("~~~~~~~~~~this.FileUpTransfer.filelist : " + filelist.length);
        	/*
        	for (var i = 0; i < filelist.length; i++) {
        		trace("filename :" + filelist[i].filename);
        		trace("fullpath : "+ filelist[i].fullpath);
        		trace("path : " + filelist[i].path);
        	}
        	*/

        	this.fn_search(rtnDataset.getColumn(0, "documentNo"));

        };

        /**
         * @ FileUpTransfer onprogress
         * @
         * @
         */
        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	//trace("FileUpTransfer00_onprogress >> e.total : " + e.total + " / e.loaded : " + e.loaded);
        	this.ProgressBar.set_max(e.total);
        	this.ProgressBar.set_pos(e.loaded);

        	if (e.total == e.loaded) {
        		this.ProgressBar.set_pos(0);
        		this.ProgressBar.set_visible(false);
        	}
        };

        /**
         * @ FileDownTransfer onerror
         * @
         * @
         */
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	trace("FileDownTransfer_onerror >>>> e.errortype : " + e.errortype);
        	trace("FileDownTransfer_onerror >>>> e.statuscode : " + e.statuscode);
        	trace("FileDownTransfer_onerror >>>> e.errormsg : " + e.errormsg);
        	trace("FileDownTransfer_onerror >>>> e.requesturi : " + e.requesturi);
        };

        /**
         * @ FileDownTransfer onsuccess
         * @
         * @
         */
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	trace("FileDownTransfer_onsuccess >>>> e.url : " + e.url);
        	trace("FileDownTransfer_onsuccess >>>> e.targetfullpath : " + e.targetfullpath);
        };

        // ExtFileUpDownload.js 참고 ............
        // PlatformData 구성 : DataSet XML
        this.fn_serializeXML = function (arrDataset)
        {
        	var depth = 0;
        	var list = [];

        	if (system.navigatorname != "nexacro") {
        		//[START] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.
        		this.fn_writeData(list, "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", depth);
        		//this._writeData(list, "<!DOCTYPE p_nexacro [ <!ENTITY nbsp '&#160;'> <!ENTITY quot '&#34;'>" +
        		//		" <!ENTITY amp '&#38;'> <!ENTITY lt '&#60;'> <!ENTITY gt '&#62;'> ]>", depth);
        		//[END] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.

        		this.fn_writeData(list, "<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">", depth++);

        		for (var i = 0; i < arrDataset.length; i++) {
        			list.push(arrDataset[i].saveXML(arrDataset.name, "normal", depth, false));
        		}

        		this.fn_writeData(list, "</Root>", --depth);

        		var rtnList = list.join("\n");

        	} else {
        		// 런타임의 경우.......... ???????
        		//[START] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.
        		this.fn_writeData(list, "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", depth);
        		//this._writeData(list, "<!DOCTYPE p_nexacro [ <!ENTITY nbsp '&#160;'> <!ENTITY quot '&#34;'>" +
        		//		" <!ENTITY amp '&#38;'> <!ENTITY lt '&#60;'> <!ENTITY gt '&#62;'> ]>", depth);
        		//[END] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.

        		this.fn_writeData(list, "<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">", depth++);

        		for (var i = 0; i < arrDataset.length; i++) {
        			list.push(arrDataset[i].saveXML(arrDataset.name, "normal", depth, false));
        		}

        		this.fn_writeData(list, "</Root>", --depth);

        		var rtnList = list.join("\n");
        	}

        	return rtnList;
        }

        // PlatformData 구성 : DataSet
        this._TABS = ["", "\t", "\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t\t\t", "\t\t\t\t\t\t"];
        this.fn_writeData = function (list, str, depth)
        {
        	list[list.length] = this._TABS[depth] + str;
        };

        // PlatformData 구성 : DataSet SSV
        this.fn_serializeSSV = function (arrDataset)
        {
        	var _rs_ = String.fromCharCode(30);
        	var _cs_ = String.fromCharCode(31);

        	var list = [];
        		list.push("SSV:utf-8" + _rs_);

        	// Dataset
        	for (var i = 0; i < arrDataset.length; i++) {
        		list.push(arrDataset[i].saveSSV(arrDataset[i].name, "normal"));
        	}

        	var rtnVal = list.join("");
        	return rtnVal;
        };



        this.fn_search = function(documentNo) {
        trace("documentNo : " , documentNo);
        	var oArgs  = {
        			  svcId 	: 	"search",
        			  //rfcName 	: 	"ZCM_WEB_PRO_LIST",
        			  svcUrl    : "selectnexacrofiles",
        			  /*inDs 		: 	"dsFile=dsFile",*/
        			  outDs 	: 	"dsUpload=dsUpload",
        			  arg		: 	"documentNo=" + documentNo,
        			  svcType 	: 	"R"
        	}

        	// 공통 트랜잭션 호출
        	this.gfnTransaction(oArgs);
        }

        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
            trace(this.dsUpload.saveXML());
        }

        this.grdUpload_oncelldblclick = function(obj,e)
        {

            var sDocumentNo = this.dsUpload.getColumn(e.row,"documentNo");
        	var sFileNo = this.dsUpload.getColumn(e.row,"fileNo");

        	if(this.gfnIsNull(sDocumentNo) || this.gfnIsNull(sFileNo)) return;

        	var sDownLoadUrl = "http://localhost:8080/downloadnexacrofile";

        	this.FileDownTransfer.setPostData("documentNo", sDocumentNo);
        	this.FileDownTransfer.setPostData("fileNo", sFileNo);
        	//this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.download(sDownLoadUrl);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.grdUpload.addEventHandler("ondrop",this.grdUpload_ondrop,this);
            this.grdUpload.addEventHandler("oncelldblclick",this.grdUpload_oncelldblclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("SampleFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
