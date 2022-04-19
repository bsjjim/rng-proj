(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #413c3c")
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px")
            					},
            					"deactivate" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px")
            					},
            					"disabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px")
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Medium\"")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Medium\"")
            							},
            							"deactivate" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Medium\"")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Medium\"")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 10px"),
            						"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c8c8c8, 0px none, 0px none, 0px none")
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Hdec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Vdec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Hinc.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincD.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Vinc.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #e1e2e7"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #e1e2e7"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #c8c8c8")
            					}
            				}
            			},
            			"VScrollIndicatorControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("10px 5px 10px 0px")
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#000000"),
            						"font" : nexacro.FontObject("13px \"NotoKR-Regular\""),
            						"letterSpacing" : nexacro.CSSValueObject("0px")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #707070"),
            						"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_fav" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #C4C4C4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_fav_N.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_fav_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #C4C4C4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_fav_S.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_reset" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #C4C4C4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_reset.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #C4C4C4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_collapse.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #C4C4C4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_help.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #C4C4C4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_alarm" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("10px/13px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_maximize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_maximize.png\")"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_maximize_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_maximize_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_minimize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_minimize.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_minimize_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_minimize_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_horizontal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_horizontal.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_horizontal_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_horizontal_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_vertical" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_vertical.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_vertical_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_vertical_O.png\")"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #c5c5c5, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_close.png\")"),
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_close_O.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_close_O.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_maximizeS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_maximize_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_maximize_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_maximize_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_minimizeS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_minimize_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_minimize_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_minimize_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_horizontalS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_horizontal_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_horizontal_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_horizontal_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_verticalS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_vertical_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_vertical_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #727272, 0px none, 0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_vertical_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_closeS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_close_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_close_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_MDI_close_S.png\")"),
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_POP_Close.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_filter" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,  0px none,  1px solid #dddddd,  0px none"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,  0px none,  1px solid #dddddd,  0px none"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none,  0px none,  1px solid #dddddd,  0px none"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_show" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_LF_show.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_hide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_LF_hide.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_src" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_src.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_comm" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid #333334"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #333334")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #333334")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid rgba(255,255,255,0.5), 0px none"),
            									"color" : nexacro.ColorObject("#fff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid rgba(255,255,255,0.5), 0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid rgba(255,255,255,0.5), 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #fff, 0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #fff, 0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #fff, 0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"btn_SA_src" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_SA_Search.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_SA_src2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_SA2.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_SA_collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_SA_expand" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comp_src" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_Comp_src.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comp_reset" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_Comp_reset.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comp_popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_Comp_popup.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            								}
            							}
            						}
            					},
            					{
            						"btn_Block" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_excelUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_excelUp.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_excelDown" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_excelDown.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_fileUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_fileUp.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_fileDown" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_fileDown.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_popup.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_reset" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_reset.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_addRow" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_addRow.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_delRow" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_delRow.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_copyRow" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_copyRow.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_rowUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_rowUp.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_rowDown" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_rowDown.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_expand" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_expand.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_collapse.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_expand2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_expand2.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#FFE200"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_expand2_P.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_Block_collapse2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_collapse2.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#FFE200"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Block_collapse2_P.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_shuttleR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleR.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleR_P.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_shuttleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleL.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleL_P.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_shuttleUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleUp.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleUp_P.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_shuttleDn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleDn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_shuttleDn_P.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_paging" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("12px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"font" : nexacro.FontObject("12px \"NotoKR-Bold\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_pagingS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"font" : nexacro.FontObject("12px \"NotoKR-Bold\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"font" : nexacro.FontObject("12px \"NotoKR-Bold\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"font" : nexacro.FontObject("12px \"NotoKR-Bold\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_pagingFirst" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_pagingFirst.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_pagingPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_pagingPrev.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_pagingNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_pagingNext.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_pagingLast" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_pagingLast.png')")
            								},
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comm_link" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comm_popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Comm_link.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #707070")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comm_func" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#FFE200")
            								}
            							}
            						}
            					},
            					{
            						"btn_Comm_func_pop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_Comm_func_pop.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#FFE200")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_step" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_step_done" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_D.png\")"),
            									"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.3)"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_D.png\")"),
            									"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.3)"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_D.png\")"),
            									"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.3)"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_D.png\")"),
            									"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.3)"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_stepS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #B4B6BB, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_step_last" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_step_lastS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_step_N.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("15px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_drop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_cmb.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_cmb.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_cmb.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_Pop_comp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"border" : nexacro.BorderObject("1px solid #B1AEAE")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_Pop_compS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_Pop_func" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"color" : nexacro.ColorObject("#FFE200")
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_Mon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("13px \"NotoKR-Regular\""),
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_Mon_Select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_Mon_Today" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"NotoKR-Regular\""),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_Prev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_CAL_Prev.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_Next" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_CAL_Next.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_BottomBtn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6a7180"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #414752")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #414752")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ButtonControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            						"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("13px \"NotoKR-Regular\""),
            								"color" : nexacro.ColorObject("#000000"),
            								"border" : nexacro.BorderObject("1px solid #c2c2c2")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"cell" :
            					{
            						"parent" :
            						{
            							"body" :
            							{
            								"parent" :
            								{
            									"ListView" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"color" : nexacro.ColorObject("#646982"),
            												"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"pushed" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #eeeeee"),
            												"color" : nexacro.ColorObject("#aaaaaa")
            											}
            										}
            									}
            								}
            							},
            							"detail" :
            							{
            								"parent" :
            								{
            									"ListView" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"color" : nexacro.ColorObject("#646982"),
            												"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"pushed" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #eeeeee"),
            												"color" : nexacro.ColorObject("#aaaaaa")
            											}
            										}
            									}
            								}
            							},
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #707070"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            														"color" : nexacro.ColorObject("#ffffff"),
            														"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #000000")
            													},
            													"pushed" :
            													{
            														"border" : nexacro.BorderObject("1px solid #000000")
            													},
            													"disabled" :
            													{
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("13px \"NotoKR-Regular\""),
            						"color" : nexacro.ColorObject("#333333")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_TF_user" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_Guide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_Guide_txt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("11px \"NotoKR-Regular\""),
            									"color" : nexacro.ColorObject("#ff0000")
            								}
            							}
            						}
            					},
            					{
            						"sta_Guide_info" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("12px"),
            									"border" : nexacro.BorderObject("2px dashed red"),
            									"font" : nexacro.FontObject("12px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000"),
            									"font" : nexacro.FontObject("14px \"NotoKR-Medium\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_gridCount" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_gridCountNum" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#dc000c"),
            									"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_txt_desc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#888888")
            								}
            							}
            						}
            					},
            					{
            						"sta_txt_descTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("13px \"NotoKR-Bold\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_txt_descDot" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_pageTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("24px \"NotoKR-Bold\""),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_SA_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            									"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_SA_label_req" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            									"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_SA_label_select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            									"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_unit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
            								}
            							}
            						}
            					},
            					{
            						"sta_DA_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ecebeb"),
            									"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
            								}
            							}
            						}
            					},
            					{
            						"sta_DA_label_req" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ecebeb"),
            									"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
            								}
            							}
            						}
            					},
            					{
            						"sta_DA_labelTop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ecebeb, 1px solid #dbdddf, 1px solid #dbdddf, 1px solid #dbdddf"),
            									"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
            								}
            							}
            						}
            					},
            					{
            						"sta_DA_labelTop_req" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbdddf"),
            									"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
            								}
            							}
            						}
            					},
            					{
            						"sta_DA_data" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ecebeb"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_title1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("15px/normal \"NotoKR-Bold\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_title2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("15px/normal \"NotoKR-Bold\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_title3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("14px/normal \"NotoKR-Bold\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_title4" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("14px/normal \"NotoKR-Bold\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_singleLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								}
            							}
            						}
            					},
            					{
            						"cal_Sta_Box" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					}
            				]
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_tab_prev.png\")"),
            								"padding" : nexacro.PaddingObject("6px 7px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_CAL_Prev.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_tab_next.png\")"),
            								"padding" : nexacro.PaddingObject("6px 7px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_CAL_Next.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #D3D3D3, 1px solid #D3D3D3, 1px solid #707070, 1px solid #D3D3D3"),
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.6)"),
            								"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #707070, 1px solid #707070, 0px none, 1px solid #707070"),
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"disabled" :
            							{
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#000000"),
            											"border" : nexacro.BorderObject("1px solid #b4b6bb, 1px solid #b4b6bb, 1px solid #d3d3d3, 1px solid #b4b6bb")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3d3d3, 1px solid #d3d3d3, 0px none, 1px solid #d3d3d3")
            										}
            									}
            								}
            							},
            							{
            								"tab_WF_second" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"color" : nexacro.ColorObject("#333333"),
            											"font" : nexacro.FontObject("12px/28px \"NotoKR-Regular\"")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"color" : nexacro.ColorObject("#000000")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#000000")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("6px 22px 6px 20px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#aeaeae")
            									}
            								},
            								"class" :
            								[
            									{
            										"tab_MDI" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("6px 17px 6px 20px")
            												}
            											}
            										}
            									},
            									{
            										"tab_WF_second" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("0px 16px 0px 16px")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_X.png\")"),
            										"padding" : nexacro.PaddingObject("1px 10px 0px 0px")
            									},
            									"selected" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #707070, 0px none, 0px none, 0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"tab_WF_second" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            						"padding" : nexacro.PaddingObject("5px 5px 0px 5px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("13px/18px \"NotoKR-Regular\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DC000C")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DC000C")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            						"padding" : nexacro.PaddingObject("5px 5px 0px 5px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("13px/18px \"NotoKR-Regular\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								}
            							}
            						}
            					}
            				]
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_down.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 1px 2px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_down.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_up.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_up.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            												"font" : nexacro.FontObject("14px \"NotoKR-Medium\""),
            												"letterSpacing" : nexacro.CSSValueObject("0px")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            												"font" : nexacro.FontObject("14px \"NotoKR-Medium\""),
            												"letterSpacing" : nexacro.CSSValueObject("0px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_N.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 18px 0px 6px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_S.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_D.png\")")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_D.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"imagerc::rdo_SD.png\")")
            							},
            							"readonly_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"imagerc::rdo_SD.png\")")
            							}
            						},
            						"class" :
            						[
            							{
            								"input_req" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#F8711F")
            										}
            									}
            								}
            							},
            							{
            								"input_select" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#2378BB")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eeeeee")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"progressstartcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressendcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eeeeee")
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #D3D3D3")
            								}
            							}
            						}
            					},
            					{
            						"cal_Pop_Box" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#dddddd")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#dddddd")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#dddddd")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#aaaaaa")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#aaaaaa")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#aaaaaa")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_SelBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_SelBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_SelBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            						"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px solid #d3d3d3"),
            						"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 25px 0px 25px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("15px \"NotoKR-Medium\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#31bff2")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#31bff2")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#31bff2")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#5b6289")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"mouseover" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #efefef")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				},
            				"class" :
            				[
            					{
            						"img_POP_filterIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px 4px 10px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px 4px 10px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px 4px 10px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					},
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px 0px 4px 5px"),
            										"color" : nexacro.ColorObject("#000000")
            									},
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            									}
            								}
            							},
            							"ComboControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px 0px 4px 5px"),
            										"color" : nexacro.ColorObject("#000000")
            									},
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #eaeaea, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #eaeaea, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #eaeaea, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					},
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"color" : nexacro.ColorObject("#000000"),
            												"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            											}
            										}
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ECEBEB"),
            												"padding" : nexacro.PaddingObject("4px 4px 4px 4px"),
            												"letterSpacing" : nexacro.CSSValueObject("0px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_LF_Menu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px"),
            															"color" : nexacro.ColorObject("#666666"),
            															"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_table" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #ECEBEB"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px"),
            															"letterSpacing" : nexacro.CSSValueObject("0px")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grid_WF_list" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ECEBEB"),
            												"padding" : nexacro.PaddingObject("4px 10px 4px 10px"),
            												"font" : nexacro.FontObject("13px \"NotoKR-Medium\""),
            												"letterSpacing" : nexacro.CSSValueObject("0px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"cell_fix" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd, 2px solid #707070, 1px solid #dddddd, 1px solid #dddddd")
            														}
            													}
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #ECEBEB, 2px solid #707070, 1px solid #ECEBEB, 1px solid #ECEBEB")
            														}
            													}
            												}
            											}
            										},
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #ECEBEB, 2px solid #707070, 1px solid #ECEBEB, 1px solid #ECEBEB")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_req_fix" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd, 2px solid #707070, 1px solid #dddddd, 1px solid #dddddd")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_select_fix" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd, 2px solid #707070, 1px solid #dddddd, 1px solid #dddddd")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_link" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#0380e1")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_header" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_summ" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            														},
            														"mouseover" :
            														{
            															"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_sub_summ" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            														},
            														"mouseover" :
            														{
            															"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_fc_blue" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#2378BB")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_fc_orange" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#F8711F")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_fc_red" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#E80000")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_bg_1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_bg_2" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_bg_3" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_bg_4" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_bg_5" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Depth1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#000000"),
            																		"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #C4C4C4, 0px none")
            																	},
            																	"mouseover" :
            																	{
            																	},
            																	"selected" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Depth2" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#000000"),
            																		"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e7e7e7, 0px none")
            																	},
            																	"mouseover" :
            																	{
            																	},
            																	"selected" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"body" :
            							{
            								"parent" :
            								{
            									"ListView" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"readonly" :
            											{
            											},
            											"nulltext" :
            											{
            												"color" : nexacro.ColorObject("#aeaeae")
            											}
            										}
            									}
            								}
            							},
            							"detail" :
            							{
            								"parent" :
            								{
            									"ListView" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"readonly" :
            											{
            											},
            											"nulltext" :
            											{
            												"color" : nexacro.ColorObject("#aeaeae")
            											}
            										}
            									}
            								}
            							},
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #DC000C")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #DC000C")
            													},
            													"readonly" :
            													{
            														"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
            														"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            													},
            													"nulltext" :
            													{
            														"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"body" :
            							{
            								"parent" :
            								{
            									"ListView" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"readonly" :
            											{
            											},
            											"nulltext" :
            											{
            												"color" : nexacro.ColorObject("#aeaeae")
            											}
            										}
            									}
            								}
            							},
            							"detail" :
            							{
            								"parent" :
            								{
            									"ListView" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #313340")
            											},
            											"readonly" :
            											{
            											},
            											"nulltext" :
            											{
            												"color" : nexacro.ColorObject("#aeaeae")
            											}
            										}
            									}
            								}
            							},
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #DC000C")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #DC000C")
            													},
            													"readonly" :
            													{
            														"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
            														"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            													},
            													"nulltext" :
            													{
            														"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            					},
            					"mouseover" :
            					{
            					},
            					"pushed" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								}
            							}
            						}
            					}
            				]
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            									},
            									"nulltext" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("3px 12px 2px 12px"),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"NotoKR-Regular\"")
            									},
            									"mouseover" :
            									{
            									},
            									"pushed" :
            									{
            									},
            									"selected" :
            									{
            									},
            									"focused" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_step" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #B4B6BB")
            								}
            							}
            						}
            					},
            					{
            						"div_SA" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #707070, 1px solid #e6e5e5, 1px solid #e6e5e5, 1px solid #e6e5e5")
            								}
            							}
            						}
            					},
            					{
            						"div_SA2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e6e5e5")
            								}
            							}
            						}
            					},
            					{
            						"div_SA_collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #707070, 1px solid #e6e5e5, 1px solid #e6e5e5, 1px solid #e6e5e5")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_infobox" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3d3d3")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            						"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								}
            							}
            						}
            					},
            					{
            						"edt_TF_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3B444F"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3B444F"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3B444F"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								}
            							}
            						}
            					}
            				]
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_cmb.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_cmb.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_down.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 1px 2px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_down.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 1px 2px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_up.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_spin_up.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #59a1d9")
            								}
            							}
            						}
            					},
            					{
            						"cmb_Comm_link" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								}
            							}
            						}
            					}
            				]
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d3d3d3")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d3d3d3")
            							}
            						}
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3d3d3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DC000C")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px dashed #d3d3d3")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("rgba(0, 0, 0, 0.5)")
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            							},
            							"readonly" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("14px \"NotoKR-Regular\"")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("14px \"NotoKR-Medium\""),
            										"letterSpacing" : nexacro.CSSValueObject("0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("14px \"NotoKR-Medium\""),
            										"letterSpacing" : nexacro.CSSValueObject("0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#666666")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("13px \"NotoKR-Medium\""),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"day" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"NotoKR-Medium\"")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#aaaaaa")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_N.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 18px 0px 6px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_S.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_D.png\")")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_D.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_SD.png\")")
            					},
            					"readonly_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_SD.png\")")
            					}
            				},
            				"class" :
            				[
            					{
            						"input_req" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#F8711F")
            								}
            							}
            						}
            					},
            					{
            						"input_select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#2378BB")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_N.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_S.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_D.png\")")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_D.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_SD.png\")")
            					},
            					"readonly_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_SD.png\")")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #707070, 1px solid #ECEBEB, 1px solid #ECEBEB, 1px solid #ECEBEB")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_table" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #707070, 0px none, 1px solid #ECEBEB, 1px solid #ECEBEB")
            								}
            							}
            						}
            					},
            					{
            						"grid_WF_list" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #D3D3D3")
            								}
            							}
            						}
            					}
            				]
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"expand" :
            															{
            																"icon" : nexacro.UrlObject("url(\"theme://images/grd_TreeClose.png\")")
            															},
            															"collapse" :
            															{
            																"icon" : nexacro.UrlObject("url(\"theme://images/grd_TreeOpen.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								},
            								"class" :
            								[
            									{
            										"cell_LF_Depth2" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"class" :
            																	[
            																		{
            																			"grd_LF_Menu" :
            																			{
            																				"self" :
            																				{
            																					"expand" :
            																					{
            																						"icon" : nexacro.UrlObject("url(\"theme://images/grd_LF_TreeClose2.png\")")
            																					},
            																					"collapse" :
            																					{
            																						"icon" : nexacro.UrlObject("url(\"theme://images/grd_LF_TreeOpen2.png\")")
            																					}
            																				}
            																			}
            																		}
            																	]
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"leaf" :
            															{
            																"icon" : nexacro.UrlObject("url('theme://images/grd_Treeleaf.png')")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								},
            								"class" :
            								[
            									{
            										"cell_LF_Depth2" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"class" :
            																	[
            																		{
            																			"grd_LF_Menu" :
            																			{
            																				"self" :
            																				{
            																					"leaf" :
            																					{
            																						"icon" : nexacro.UrlObject("none")
            																					}
            																				}
            																			}
            																		}
            																	]
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_LF_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/tib_WF_Min.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Max.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Normal.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Close.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecO.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecD.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincD.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincO.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_fav_N.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_fav_S.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_reset.png")] = { width:25, height:25 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_collapse.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_help.png")] = { width:8, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_close.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maximize.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minimize.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_horizontal.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vertical.png")] = { width:11, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_close.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maximize_O.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minimize_O.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_horizontal_O.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vertical_O.png")] = { width:11, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_close_O.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maximize_S.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minimize_S.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_horizontal_S.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vertical_S.png")] = { width:11, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_close_S.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:50, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_show.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_hide.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_src.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_Search.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA2.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_collapse.png")] = { width:42, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_collapse_O.png")] = { width:42, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_collapse_P.png")] = { width:42, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_expand.png")] = { width:42, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_expand_O.png")] = { width:42, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SA_expand_P.png")] = { width:42, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Comp_src.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Comp_reset.png")] = { width:20, height:21 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Comp_popup.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_excelUp.png")] = { width:24, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_excelDown.png")] = { width:24, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_fileUp.png")] = { width:21, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_fileDown.png")] = { width:21, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_popup.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_reset.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_addRow.png")] = { width:20, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_delRow.png")] = { width:20, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_copyRow.png")] = { width:17, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_rowUp.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_rowDown.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_expand.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_collapse.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_expand2.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_expand2_P.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_collapse2.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Block_collapse2_P.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleR.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleR_P.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleL.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleL_P.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleUp.png")] = { width:11, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleUp_P.png")] = { width:11, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleDn.png")] = { width:11, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_shuttleDn_P.png")] = { width:11, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_pagingFirst.png")] = { width:10, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_pagingPrev.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_pagingNext.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_pagingLast.png")] = { width:10, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Comm_link.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Comm_func_pop.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtn.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_step_N.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_step_D.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_cmb.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/logo.png")] = { width:122, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_alarm.png")] = { width:17, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_txt_descDot.png")] = { width:4, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/essential.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/select.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_title1.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_title2.png")] = { width:12, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_title3.png")] = { width:6, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_title4.png")] = { width:6, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_help.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_singleLabel.png")] = { width:4, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tab_prev.png")] = { width:6, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tab_next.png")] = { width:6, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_X.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_spin_down.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_spin_up.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_S.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Prev.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevO.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevD.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Next.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextO.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextD.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PmnuChk.png")] = { width:16, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_SelBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Prev.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PrevD.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Next.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_NextD.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CAL_Prev.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CAL_Next.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_S.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_SD.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_TreeClose.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_TreeOpen.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_Treeleaf.png")] = { width:3, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeClose2.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeOpen2.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_msg_down.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_msg_up.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/flag.png")] = { width:11, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_filter.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_filterDown.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_filterUp.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_sortDown.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_sortDown_D.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_sortUp.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_sortUp_D.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grid_colHide.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grid_colHide_D.png")] = { width:13, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_flag_add.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_flag_del.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_flag_mod.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/imageViewSample.jpg")] = { width:1200, height:675 };
        		imgcache[nexacro._getImageLocation("theme://images/img_alert.png")] = { width:48, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/img_error.png")] = { width:48, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/img_question.png")] = { width:48, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_SD.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/state_blue.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/state_gray.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/state_green.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/state_orange.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/state_red.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/state_yellow.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_logo.png")] = { width:122, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
	};
}
)();
