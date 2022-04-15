if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::nxui");
        this.set_datatyperule("2.0");
        this.set_userfontid("font::webfont.xfont");
        this.set_initvaluefileid("initvalue::lotte.xiv");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("extPrototype", "js", "./nexacrolib/component/extPrototype/", "session", null, "", "0", "0");
        nexacro._addService("Lib", "js", "./Lib/", "session", null, "", "0", "0");
        nexacro._addService("Frame", "form", "./Frame/", "session", null, "", "0", "0");
        nexacro._addService("Comm", "form", "./Comm/", "session", null, "", "0", "0");
        nexacro._addService("UI_Guide", "form", "./UI_Guide/", "session", null, "", "0", "0");
        nexacro._addService("UI_Template", "form", "./UI_Template/", "session", null, "", "0", "0");
        nexacro._addService("UI_Pub", "form", "./UI_Pub/", "session", null, "", "0", "0");
        nexacro._addService("Sample", "form", "./Sample/", "session", null, "", "0", "0");
        nexacro._addService("Presets", "form", "./Presets/", "session", null, "", "0", "0");
        nexacro._addService("IC", "form", "./IC/", "session", null, "", "0", "0");
        nexacro._addService("EV", "form", "./EV/", "session", null, "", "0", "0");
        nexacro._addService("AR", "form", "./AR/", "session", null, "", "0", "0");
        nexacro._addService("CR", "form", "./CR/", "session", null, "", "0", "0");
        nexacro._addService("GR", "form", "./GR/", "session", null, "", "0", "0");
        nexacro._addService("BI", "form", "./BI/", "session", null, "", "0", "0");
        nexacro._addService("CA", "form", "./CA/", "session", null, "", "0", "0");
        nexacro._addService("UC", "form", "./UC/", "session", null, "", "0", "0");
        nexacro._addService("PI", "form", "./PI/", "session", null, "", "0", "0");
        nexacro._addService("IR", "form", "./IR/", "session", null, "", "0", "0");
        nexacro._addService("GM", "form", "./GM/", "session", null, "", "0", "0");
        nexacro._addService("RA", "form", "./RA/", "session", null, "", "0", "0");
        nexacro._addService("LO", "form", "./LO/", "session", null, "", "0", "0");
        nexacro._addService("WebCss", "file", "./WebCss/", "session", null, "", "0", "0");
        nexacro._addService("svcUrl", "JSP", "http://localhost:8080", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"View", "classname":"nexacro.View", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"CalMonth", "classname":"nexacro.CalMonth", "type":"JavaScript"},
        		{"id":"CalPeriod", "classname":"nexacro.CalPeriod", "type":"JavaScript"},
        		{"id":"CalPeriodMonth", "classname":"nexacro.CalPeriodMonth", "type":"JavaScript"},
        		{"id":"CalPeriodQuater", "classname":"nexacro.CalPeriodQuater", "type":"JavaScript"},
        		{"id":"CalPeriodDay", "classname":"nexacro.CalPeriodDay", "type":"JavaScript"},
        		{"id":"CalPeriodTime", "classname":"nexacro.CalPeriodTime", "type":"JavaScript"},
        		{"id":"CalTime", "classname":"nexacro.CalTime", "type":"JavaScript"},
        		{"id":"NxPivot", "classname":"nexacro.NxPivot", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
