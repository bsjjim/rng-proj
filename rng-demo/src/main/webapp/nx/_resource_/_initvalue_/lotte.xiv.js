if (nexacro_init)
{
    nexacro_init.Gridiv_Grid = function(obj)
    {
    	obj.set_autosizingtype("");
    	obj.set_cellsizingtype("col");
    	obj.set_nodatatext("조회된 내용이 없습니다.");
    	obj.set_cellsizebandtype("noleft");
    	obj.set_autoenter("select");
    };

    nexacro_init.Gridiv_Grid_table = function(obj)
    {
    	obj.set_cssclass("grd_WF_table");
    	obj.set_autofittype("col");
    	obj.set_scrolltype("both");
    	obj.set_scrollbartype("none none");
    };

    nexacro_init.Staticiv_fc_blue = function(obj)
    {
    	obj.set_color("#2378bb");
    };

    nexacro_init.Staticiv_fc_orange = function(obj)
    {
    	obj.set_color("#f8711f");
    };

    nexacro_init.Staticiv_fc_red = function(obj)
    {
    	obj.set_color("#e80000");
    };

    nexacro_init.Staticiv_tbl_sub_summ = function(obj)
    {
    	obj.set_background("#eeeeee");
    };

    nexacro_init.Staticiv_tbl_summ = function(obj)
    {
    	obj.set_background("#dedede");
    	obj.set_font("13px \"NotoKr-Medium\"");
    };

    nexacro_init.Staticiv_tbl_bg1 = function(obj)
    {
    	obj.set_background("#F4FBFE");
    };

    nexacro_init.Staticiv_tbl_bg2 = function(obj)
    {
    	obj.set_background("#FEF8E7");
    };

    nexacro_init.Staticiv_tbl_bg3 = function(obj)
    {
    	obj.set_background("#ffe7e4");
    };

    nexacro_init.Staticiv_tbl_bg4 = function(obj)
    {
    	obj.set_background("#f1fbe5");
    };

    nexacro_init.Staticiv_tbl_bg5 = function(obj)
    {
    	obj.set_background("#f1ecfa");
    };

    nexacro_init.Radioiv_Radio = function(obj)
    {
    	obj.set_codecolumn("");
    	obj.set_columncount("-1");
    	obj.set_direction("horizontal");
    	obj.set_rowcount("-1");
    };

    nexacro_init.FileUploadiv_FileUpload_single = function(obj)
    {
    	obj.set_buttontext("파일찾기");
    	obj.set_scrolltype("none");
    	obj.set_itemcount("1");
    	obj.set_buttonsize("72");
    };

    nexacro_init.FileUploadiv_FileUpload_multi = function(obj)
    {
    	obj.set_buttontext("파일찾기");
    	obj.set_buttonsize("72");
    	obj.set_itemcount("3");
    	obj.set_itemheight("24");
    	obj.set_multiselect("true");
    };

    nexacro_init.Tabiv_Tab_1Depth = function(obj)
    {
    	obj.set_tabbuttongap("2");
    };

    nexacro_init.Tabiv_Tab_2Depth = function(obj)
    {
    	obj.set_cssclass("tab_WF_second");
    };
}
