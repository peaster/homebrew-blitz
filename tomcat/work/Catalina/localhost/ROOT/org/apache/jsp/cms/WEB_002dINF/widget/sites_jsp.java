/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.5
 * Generated at: 2016-01-13 17:03:17 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cms.WEB_002dINF.widget;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.psddev.cms.db.Site;
import com.psddev.cms.db.ToolUser;
import com.psddev.cms.tool.JspWidget;
import com.psddev.cms.tool.ToolPageContext;
import com.psddev.dari.db.Database;
import com.psddev.dari.db.Query;
import com.psddev.dari.db.State;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.UUID;

public final class sites_jsp extends org.apache.jasper.runtime.HttpJspBase
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



// --- Logic ---

ToolPageContext wp = new ToolPageContext(pageContext);
List<Site> allSites = Site.findAll();
if (allSites.isEmpty()) {
    return;
}

Object object = JspWidget.getOriginal(wp);
State state = State.getInstance(object);
Site.ObjectModification siteData = state.as(Site.ObjectModification.class);

String namePrefix = state.getId() + "/sites/";
String ownerName = namePrefix + "owner";
String accessName = namePrefix + "access";
String consumerIdName = namePrefix + "consumerId";

Site owner = siteData.getOwner();
Set<Site> consumers = siteData.getConsumers();

if (JspWidget.isUpdating(wp)) {
    owner = Database.Static.findById(wp.getDatabase(), Site.class, wp.uuidParam(ownerName));
    siteData.setOwner(owner);

    String access = wp.param(accessName);
    consumers.clear();

    if ("no".equals(access)) {
        siteData.setGlobal(false);
        siteData.setBlacklist(null);
        siteData.setConsumers(null);

    } else if ("all".equals(access)) {
        siteData.setGlobal(true);
        siteData.setBlacklist(null);
        siteData.setConsumers(null);

    } else if ("some".equals(access)) {
        siteData.setGlobal(false);
        List<UUID> consumerIds = Arrays.asList(wp.uuidParams(consumerIdName));
        for (Site site : allSites) {
            if (consumerIds.contains(site.getId())) {
                consumers.add(site);
            }
        }
    }

    return;
}


// --- Presentation ---

String sitesContainerId = wp.createId();
String access = siteData.isGlobal() ? "all" :
        consumers.isEmpty() ? "no" :
        "some";


      out.write("\n");
      out.write("<label for=\"");
      out.print( wp.createId() );
      out.write("\">\n");
      out.write("    ");
 wp.writeHtml(wp.localize("com.psddev.cms.tool.widget.Sites", "label.owner")); 
      out.write("\n");
      out.write("</label><br>\n");
      out.write("<select class=\"toggleable\" data-root=\".widget\" name=\"");
      out.print( ownerName );
      out.write("\" style=\"width: 100%;\">\n");
      out.write("    <option");
      out.print( owner == null ? " selected" : "" );
      out.write(" value=\"\" data-show=\".siteItem\">None</option>\n");
      out.write("    ");
 for (Site site : allSites) { 
      out.write("\n");
      out.write("        <option");
      out.print( site.equals(owner) ? " selected" : "" );
      out.write(" value=\"");
      out.print( site.getId() );
      out.write("\" data-show=\".siteItem:not(.siteItem-");
      out.print( site.getId() );
      out.write(")\" data-hide=\".siteItem-");
      out.print( site.getId() );
      out.write('"');
      out.write('>');
      out.print( wp.objectLabel(site) );
      out.write("</option>\n");
      out.write("    ");
 } 
      out.write("\n");
      out.write("</select>\n");
      out.write("\n");
      out.write("<label for=\"");
      out.print( wp.createId() );
      out.write("\">\n");
      out.write("    ");
 wp.writeHtml(wp.localize("com.psddev.cms.tool.widget.Sites", "label.access")); 
      out.write("\n");
      out.write("</label><br>\n");
      out.write("<select class=\"toggleable\" id=\"");
      out.print( wp.getId() );
      out.write("\" name=\"");
      out.print( accessName );
      out.write("\" style=\"width: 100%;\">\n");
      out.write("    <option");
      out.print( "no".equals(access) ? " selected" : "" );
      out.write(" data-hide=\"#");
      out.print( sitesContainerId );
      out.write("\" value=\"no\">\n");
      out.write("        ");
 wp.writeHtml(wp.localize("com.psddev.cms.tool.widget.Sites", "option.none")); 
      out.write("\n");
      out.write("    </option>\n");
      out.write("    <option");
      out.print( "all".equals(access) ? " selected" : "" );
      out.write(" data-hide=\"#");
      out.print( sitesContainerId );
      out.write("\" value=\"all\">\n");
      out.write("        ");
 wp.writeHtml(wp.localize("com.psddev.cms.tool.widget.Sites", "option.all")); 
      out.write("\n");
      out.write("    </option>\n");
      out.write("    <option");
      out.print( "some".equals(access) ? " selected" : "" );
      out.write(" data-show=\"#");
      out.print( sitesContainerId );
      out.write("\" value=\"some\">\n");
      out.write("        ");
 wp.writeHtml(wp.localize("com.psddev.cms.tool.widget.Sites", "option.some")); 
      out.write("\n");
      out.write("    </option>\n");
      out.write("</select>\n");
      out.write("<ul id=\"");
      out.print( sitesContainerId );
      out.write("\">\n");
      out.write("    ");
 for (Site site : allSites) { 
      out.write("\n");
      out.write("        <li class=\"siteItem siteItem-");
      out.print( site.getId() );
      out.write("\">\n");
      out.write("            <input");
      out.print( consumers.contains(site) ? " checked" : "" );
      out.write(" id=\"");
      out.print( wp.createId() );
      out.write("\" name=\"");
      out.print( consumerIdName );
      out.write("\" type=\"checkbox\" value=\"");
      out.print( site.getId() );
      out.write("\">\n");
      out.write("            <label for=\"");
      out.print( wp.getId() );
      out.write('"');
      out.write('>');
      out.print( wp.objectLabel(site) );
      out.write("</label>\n");
      out.write("        </li>\n");
      out.write("    ");
 } 
      out.write("\n");
      out.write("</ul>\n");
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
