/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.5
 * Generated at: 2016-01-13 15:51:47 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cms.style.v3;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.psddev.cms.tool.CmsTool;
import com.psddev.cms.tool.PageWriter;
import com.psddev.cms.tool.ToolPageContext;
import com.psddev.dari.util.ObjectUtils;

public final class rte_002dcontent_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, false, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      out = pageContext.getOut();
      _jspx_out = out;



ToolPageContext wp = new ToolPageContext(pageContext);

if (wp.requireUser()) {
    return;
}

PageWriter writer = wp.getWriter();

writer.tag("!doctype html");
writer.start("html");

    writer.start("head");
        writer.start("title").end();

        writer.writeElement("link",
                "rel", "stylesheet",
                "type", "text/css",
                "href", "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");

        writer.start("style", "type", "text/css");
            writer.css("*",
                    "font-family", "inherit",
                    "font-size", "100%",
                    "font-style", "inherit",
                    "font-weight", "inherit",
                    "text-decoration", "inherit",
                    "vertical-align", "inherit");

            writer.css("*:focus",
                    "outline-style", "none");

            writer.css("a",
                    "color", "#29c",
                    "cursor", "text",
                    "text-decoration", "underline");

            writer.css("b, strong",
                    "font-weight", "bold");

            writer.css("body",
                    "color", "#333",
                    "font-family", "'Open Sans', sans-serif",
                    "font-size", "13px",
                    "font-style", "normal",
                    "font-weight", "normal",
                    "line-height", "20px",
                    "margin", "4px",
                    "padding", "0",
                    "vertical-align", "baseline",
                    "word-wrap", "break-word",
                    "-rte-loaded", "true",
                    "*zoom", 1);

            writer.css("body:after",
                    "clear", "both",
                    "content", "' '",
                    "display", "table");

            writer.css("body:before",
                    "color", "#888",
                    "content", "attr(data-placeholder)",
                    "left", "4px",
                    "position", "absolute",
                    "top", "4px");

            writer.css("body.imageEditor-textOverlayInput",
                    "word-wrap", "normal");

            writer.css("body.rte-fullscreen",
                    "margin", "20px",
                    "font-size", "16px",
                    "line-height", "24px");

            writer.css("del",
                    "background", "#ffaaaa",
                    "text-decoration", "line-through");

            writer.css(".rte-changesPreview del",
                    "display", "none");

            writer.css("em, i",
                    "font-style", "italic");

            writer.css("h1, h2, h3, h4, h5, h6",
                    "font-weight", "bold",
                    "margin", "0 0 16px 0");

            writer.css("h1",
                    "font-size", "200%");

            writer.css("h2",
                    "font-size", "150%");

            writer.css("h3",
                    "font-size", "120%");

            writer.css("ins",
                    "background-color", "#afa");

            writer.css(".rte-changesPreview ins",
                    "background-color", "transparent");

            writer.css("ol, ul",
                    "margin", "0 0 16px 25px",
                    "padding", "0");

            writer.css("p, table",
                    "margin", "0 0 16px 0");

            writer.css("strike",
                    "text-decoration", "line-through");

            writer.css("sub",
                    "font-size", "0.83em",
                    "line-height", "0",
                    "vertical-align", "sub");

            writer.css("sup",
                    "font-size", "0.83em",
                    "line-height", "0",
                    "vertical-align", "super");

            writer.css("table",
                    "border", "none",
                    "border-collapse", "collapse",
                    "border-spacing", 0);

            writer.css("table td, table th",
                    "border", "1px solid #bbb",
                    "padding", "2px 5px");

            writer.css("table th",
                    "background", "#ddd",
                    "text-align", "left");

            writer.css("u",
                    "text-decoration", "underline");

            writer.css(".cms-textAlign-center",
                    "text-align", "center");

            writer.css(".cms-textAlign-left",
                    "text-align", "left");

            writer.css(".cms-textAlign-right",
                    "text-align", "right");

            writer.css(".enhancement",
                    "background", "transparent",
                    "border", "1px solid transparent",
                    "-moz-box-sizing", "border-box",
                    "-webkit-box-sizing", "border-box",
                    "box-sizing", "border-box",
                    "display", "block",
                    "padding", "3px",
                    "margin", "0 0 24px 0",
                    "width", "100%");

            writer.css(".enhancement[data-preview][data-preview != '']",
                    "height", "200px");

            writer.css(".enhancement[data-alignment=left]",
                    "float", "left",
                    "margin-right", "1em",
                    "margin-top", "0",
                    "width", "300px");

            writer.css(".enhancement[data-alignment=right]",
                    "float", "right",
                    "margin-left", "1em",
                    "margin-top", "0",
                    "width", "300px");

            writer.css(".marker",
                    "height", "46px");

            writer.css(".rte-comment",
                    "background-color", "white",
                    "border", "1px solid #333",
                    "font-style", "italic");

            writer.css(".rte-comment:before, .rte-comment:after",
                    "content", "'\\00a0'",
                    "display", "inline-block");

            writer.css(".rte-comment-collapsed",
                    "display", "inline-block",
                    "overflow", "hidden",
                    "white-space", "nowrap",
                    "width", "16px");

            writer.css(".rte-comment-collapsed:before",
                    "content", "'\\00a0\\2026'");

            writer.css(".rte-comment-removed",
                    "border-color", "#cc2200",
                    "color", "#cc2200",
                    "text-decoration", "line-through");

            writer.css(".rte-changesPreview .rte-comment",
                    "display", "none");

            CmsTool cms = wp.getCmsTool();
            String defaultCss = cms.getDefaultTextOverlayCss();

            if (!ObjectUtils.isBlank(defaultCss)) {
                wp.write("body.imageEditor-textOverlayInput { ");
                wp.write(defaultCss);
                wp.write(" }\n");
            }

            for (CmsTool.CssClassGroup group : cms.getTextCssClassGroups()) {
                String groupName = group.getInternalName();

                for (CmsTool.CssClass c : group.getCssClasses()) {
                    String css = c.getCss();
                    String cmsOnlyCss = c.getCmsOnlyCss();

                    wp.write(".cms-");
                    wp.write(groupName);
                    wp.write("-");
                    wp.write(c.getInternalName());
                    wp.write(" { ");

                    if (!ObjectUtils.isBlank(css)) {
                        wp.write(css);
                    }

                    if (!ObjectUtils.isBlank(cmsOnlyCss)) {
                        wp.write(cmsOnlyCss);
                    }

                    wp.write(" }\n");
                }
            }
        writer.end();
    writer.end();

    writer.start("body");
    writer.end();

writer.end();

      out.write('\n');
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
